import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

/** TopoJSON: Natural Earth 110m — jsDelivr */
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

/** Interactive markets — matched against `countryLabel(geo)` (Natural Earth / world-atlas names). */
const INTERACTIVE_COUNTRIES = [
  "United States of America",
  "Mexico",
  "Guatemala",
  "Panama",
  "Colombia",
  "Venezuela",
  "Peru",
  "Bolivia",
  "Chile",
  "Argentina",
  "Uruguay",
  "Paraguay",
  "Brazil",
  "Australia",
];

const INTERACTIVE_COUNTRIES_SET = new Set(INTERACTIVE_COUNTRIES);
// world-atlas 110m uses NAME "United States" while ADMIN is "United States of America"
INTERACTIVE_COUNTRIES_SET.add("United States");

const AQUA = "#5eb8c4";
const AQUA_SOFT = "rgba(94, 184, 196, 0.45)";
const NAVY_PAGE = "#060d1a";
const LAND_DIM = "#0f1624";
const LAND_NEUTRAL = "#1a2436";
const STROKE_DIM = "#1e2838";
const STROKE_NEUTRAL = "#2a3548";

const T_MS = "0.25s";

function getIso(geo) {
  const p = geo.properties || {};
  return String(p.ISO_A3 || p.ISO_A3_EH || p.iso_a3 || "").toUpperCase();
}

function countryLabel(geo) {
  const p = geo.properties || {};
  return (
    p.NAME ||
    p.NAME_EN ||
    p.ADMIN ||
    p.name ||
    p.NAME_LONG ||
    "Unknown"
  );
}

function countryMeta(geo) {
  const p = geo.properties || {};
  return {
    name: countryLabel(geo),
    iso: getIso(geo) || "—",
    region: p.REGION_UN || p.region_un,
    subregion: p.SUBREGION || p.subregion,
    pop: p.POP_EST,
    area: p.AREA_KM2,
  };
}

function isInteractiveGeo(geo) {
  const label = countryLabel(geo);
  return INTERACTIVE_COUNTRIES_SET.has(label);
}

/**
 * @param {{ countries?: string[] }} props — localized labels from dealerNetwork (display only)
 */
export default function WorldMap({ countries = [] }) {
  const [geoObject, setGeoObject] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 });
  const [selectedCountry, setSelectedCountry] = useState(null);

  const list = useMemo(() => countries.filter(Boolean), [countries]);

  useEffect(() => {
    let cancelled = false;
    setLoadError(null);
    fetch(GEO_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Map data failed (${res.status})`);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setGeoObject(data);
      })
      .catch((e) => {
        if (!cancelled) setLoadError(e.message || "Could not load map");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleInteractiveEnter = useCallback((geo, evt) => {
    if (!isInteractiveGeo(geo)) return;
    setTooltip({
      show: true,
      text: countryLabel(geo),
      x: evt.clientX,
      y: evt.clientY,
    });
  }, []);

  const handleInteractiveMove = useCallback((geo, evt) => {
    if (!isInteractiveGeo(geo)) return;
    setTooltip({
      show: true,
      text: countryLabel(geo),
      x: evt.clientX,
      y: evt.clientY,
    });
  }, []);

  const handleInteractiveLeave = useCallback(() => {
    setTooltip((t) => ({ ...t, show: false }));
  }, []);

  const handleCountryClick = useCallback((geo, evt) => {
    if (!isInteractiveGeo(geo)) return;
    evt.preventDefault();
    evt.stopPropagation();
    setSelectedCountry(countryMeta(geo));
  }, []);

  return (
    <div
      className="mx-auto flex w-full max-w-5xl flex-col"
      style={{ background: NAVY_PAGE }}
    >
      {list.length > 0 && (
        <div className="mb-10 w-full px-1 sm:px-0">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {list.map((label, index) => (
              <div
                key={`${label}-${index}`}
                className="flex items-center gap-2.5 border border-white/[0.08] bg-white/[0.02] px-3 py-2.5 transition-all duration-300 ease-out hover:border-[#5eb8c4]/25 hover:bg-white/[0.04]"
                style={{ transitionDuration: "250ms" }}
              >
                <MapPin size={13} className="shrink-0 text-[#5eb8c4]/80" strokeWidth={2} />
                <span
                  className="text-left text-xs font-semibold tracking-wide text-white/65"
                  style={{ fontFamily: "Rajdhani, system-ui, sans-serif" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className="relative flex w-full flex-col items-center"
        style={{
          borderRadius: 14,
          background:
            "linear-gradient(180deg, #0a111d 0%, #060d1a 100%), radial-gradient(ellipse 80% 60% at 50% 40%, rgba(94, 184, 196, 0.05) 0%, transparent 60%)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <div className="relative w-full px-2 pb-2 pt-4 sm:px-4 sm:pb-4 sm:pt-6">
          {!geoObject && !loadError && (
            <div
              className="flex min-h-[300px] w-full items-center justify-center text-sm font-medium text-white/35"
              style={{ fontFamily: "Rajdhani, system-ui, sans-serif" }}
            >
              Loading map…
            </div>
          )}

          {loadError && (
            <div
              className="flex min-h-[300px] w-full flex-col items-center justify-center gap-1 px-4 text-center text-sm text-rose-300/80"
              style={{ fontFamily: "Rajdhani, system-ui, sans-serif" }}
            >
              <span>Could not load map data.</span>
              <span className="text-xs text-white/30">{loadError}</span>
            </div>
          )}

          {geoObject && (
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{
                scale: 228,
                center: [0, 12],
              }}
              width={960}
              height={520}
              className="mx-auto block w-full max-h-[min(52vh,500px)] touch-manipulation"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "min(100%, 960px)",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                background: "transparent",
              }}
            >
              <Geographies geography={geoObject}>
                {({ geographies }) => (
                  <>
                    {/* Layer 1: non-interactive — drawn first; pointer-events none so events pass through */}
                    {geographies.map((geo) => {
                      if (isInteractiveGeo(geo)) return null;
                      return (
                        <Geography
                          key={`dim-${geo.rsmKey}`}
                          geography={geo}
                          tabIndex={-1}
                          style={{
                            default: {
                              fill: LAND_DIM,
                              stroke: STROKE_DIM,
                              strokeWidth: 0.45,
                              outline: "none",
                              cursor: "default",
                              pointerEvents: "none",
                              opacity: 0.72,
                              transition: `fill ${T_MS} ease, opacity ${T_MS} ease`,
                            },
                            hover: {
                              fill: LAND_DIM,
                              stroke: STROKE_DIM,
                              strokeWidth: 0.45,
                              outline: "none",
                              pointerEvents: "none",
                              opacity: 0.72,
                            },
                            pressed: {
                              fill: LAND_DIM,
                              outline: "none",
                              pointerEvents: "none",
                            },
                          }}
                        />
                      );
                    })}
                    {/* Layer 2: interactive markets — on top so clicks/hover always hit the right path */}
                    {geographies.map((geo) => {
                      if (!isInteractiveGeo(geo)) return null;
                      const label = countryLabel(geo);
                      const isSelected = selectedCountry?.name === label;
                      return (
                        <Geography
                          key={`hit-${geo.rsmKey}`}
                          geography={geo}
                          tabIndex={0}
                          onMouseEnter={(e) => handleInteractiveEnter(geo, e)}
                          onMouseMove={(e) => handleInteractiveMove(geo, e)}
                          onMouseLeave={handleInteractiveLeave}
                          onClick={(e) => handleCountryClick(geo, e)}
                          style={{
                            default: {
                              fill: isSelected ? AQUA : LAND_NEUTRAL,
                              stroke: isSelected ? AQUA : STROKE_NEUTRAL,
                              strokeWidth: isSelected ? 0.9 : 0.55,
                              outline: "none",
                              cursor: "pointer",
                              pointerEvents: "auto",
                              transition: `fill ${T_MS} ease, stroke ${T_MS} ease, filter ${T_MS} ease`,
                              filter: isSelected
                                ? `drop-shadow(0 0 12px ${AQUA_SOFT})`
                                : "none",
                            },
                            hover: {
                              fill: isSelected ? AQUA : "#243044",
                              stroke: AQUA,
                              strokeWidth: 1,
                              outline: "none",
                              cursor: "pointer",
                              pointerEvents: "auto",
                              transition: `fill ${T_MS} ease, stroke ${T_MS} ease, filter ${T_MS} ease`,
                              filter: `drop-shadow(0 0 14px ${AQUA_SOFT})`,
                            },
                            pressed: {
                              fill: "#6ec8d4",
                              stroke: AQUA,
                              strokeWidth: 1.1,
                              outline: "none",
                              pointerEvents: "auto",
                              transition: `fill 0.2s ease`,
                            },
                          }}
                        />
                      );
                    })}
                  </>
                )}
              </Geographies>
            </ComposableMap>
          )}

          <AnimatePresence>
            {tooltip.show && tooltip.text && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 2 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none fixed z-[100] rounded-md border px-3 py-1.5 text-xs font-semibold shadow-md"
                style={{
                  left: tooltip.x + 12,
                  top: tooltip.y - 40,
                  background: "rgba(10, 16, 28, 0.96)",
                  color: AQUA,
                  borderColor: "rgba(94, 184, 196, 0.35)",
                  fontFamily: "Rajdhani, system-ui, sans-serif",
                  boxShadow: "0 8px 28px rgba(0, 0, 0, 0.4)",
                  maxWidth: "min(260px, 88vw)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {tooltip.text}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 w-full max-w-lg self-center px-2">
        <AnimatePresence mode="wait">
          {selectedCountry ? (
            <motion.div
              key={selectedCountry.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-lg border border-white/[0.1] bg-white/[0.03] px-5 py-4 text-center"
            >
              <div
                className="mb-1 text-base font-semibold tracking-wide text-[#c5dde3]"
                style={{ fontFamily: "Rajdhani, system-ui, sans-serif" }}
              >
                {selectedCountry.name}
              </div>
              <div
                className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-sm text-white/50"
                style={{ fontFamily: "Rajdhani, system-ui, sans-serif" }}
              >
                <InfoRow label="ISO" value={selectedCountry.iso} />
                {selectedCountry.region && <InfoRow label="Region" value={selectedCountry.region} />}
                {selectedCountry.subregion && (
                  <InfoRow label="Subregion" value={selectedCountry.subregion} />
                )}
              </div>
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-xs text-white/35 sm:text-sm"
              style={{ fontFamily: "Rajdhani, system-ui, sans-serif" }}
            >
              Hover or click a highlighted market on the map for details.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  if (value == null || value === "" || value === "—") return null;
  return (
    <span>
      <span className="font-semibold uppercase tracking-wider text-[#5eb8c4]/70">{label}: </span>
      <span className="text-white/70">{value}</span>
    </span>
  );
}
