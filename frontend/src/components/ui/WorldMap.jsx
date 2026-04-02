import React, { useState, useEffect, useCallback } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";

/** TopoJSON: Natural Earth 110m countries — reliable CDN, works with react-simple-maps */
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const AQUA = "#2ee6e6";
const AQUA_DIM = "#1a9aa3";
const NAVY = "#060d1a";
const LAND_DEFAULT = "#1a2744";
const LAND_STROKE = "#2a3a5c";

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
    iso: p.ISO_A3 || p.iso_a3 || p.ISO_A3_EH || "—",
    region: p.REGION_UN || p.region_un,
    subregion: p.SUBREGION || p.subregion,
    pop: p.POP_EST,
    area: p.AREA_KM2,
  };
}

export default function WorldMap() {
  const [geoObject, setGeoObject] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 });
  const [selected, setSelected] = useState(null);

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

  const onMove = useCallback((geo, evt) => {
    const name = countryLabel(geo);
    setHovered(name);
    setTooltip({
      show: true,
      text: name,
      x: evt.clientX,
      y: evt.clientY,
    });
  }, []);

  const onLeave = useCallback(() => {
    setHovered(null);
    setTooltip((t) => ({ ...t, show: false }));
  }, []);

  const onClickCountry = useCallback((geo, evt) => {
    evt.stopPropagation();
    setSelected(countryMeta(geo));
  }, []);

  return (
    <div
      className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-1 py-6 sm:px-3 sm:py-8"
      style={{ background: NAVY }}
    >
      {/* Map stage — centered, full width */}
      <div
        className="relative flex w-full justify-center"
        style={{
          minHeight: 320,
          borderRadius: 16,
          background:
            "radial-gradient(ellipse 85% 70% at 50% 45%, rgba(46, 230, 230, 0.06) 0%, transparent 55%), linear-gradient(180deg, #0a1224 0%, #060d1a 100%)",
          boxShadow: "inset 0 0 0 1px rgba(46, 230, 230, 0.12), 0 12px 40px rgba(0, 0, 0, 0.45)",
        }}
      >
        {!geoObject && !loadError && (
          <div
            className="flex min-h-[320px] w-full items-center justify-center text-sm font-semibold tracking-wide text-[#7eb8c0]"
            style={{ fontFamily: "Orbitron, system-ui, sans-serif" }}
          >
            Loading map…
          </div>
        )}

        {loadError && (
          <div
            className="flex min-h-[320px] w-full flex-col items-center justify-center gap-2 px-4 text-center text-sm text-rose-300/90"
            style={{ fontFamily: "Rajdhani, system-ui, sans-serif" }}
          >
            <span>Could not load map data.</span>
            <span className="text-xs text-white/40">{loadError}</span>
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
            className="mx-auto block w-full max-h-[min(56vh,520px)]"
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
              {({ geographies }) =>
                geographies.map((geo) => {
                  const name = countryLabel(geo);
                  const isSelected = selected?.name === name;
                  const isHover = hovered === name;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={(e) => onMove(geo, e)}
                      onMouseMove={(e) => onMove(geo, e)}
                      onMouseLeave={onLeave}
                      onClick={(e) => onClickCountry(geo, e)}
                      style={{
                        default: {
                          fill: isSelected ? AQUA : LAND_DEFAULT,
                          stroke: LAND_STROKE,
                          strokeWidth: 0.55,
                          outline: "none",
                          cursor: "pointer",
                          transition: "fill 0.22s ease, stroke 0.22s ease, filter 0.22s ease",
                          filter: isSelected ? "drop-shadow(0 0 10px rgba(46,230,230,0.45))" : "none",
                        },
                        hover: {
                          fill: isSelected ? AQUA : isHover ? AQUA_DIM : LAND_DEFAULT,
                          stroke: AQUA,
                          strokeWidth: 1,
                          outline: "none",
                          cursor: "pointer",
                          transition: "fill 0.18s ease, stroke 0.18s ease, filter 0.18s ease",
                          filter: "drop-shadow(0 0 14px rgba(46,230,230,0.35))",
                        },
                        pressed: {
                          fill: "#5af0f0",
                          stroke: AQUA,
                          strokeWidth: 1.2,
                          outline: "none",
                          transition: "fill 0.12s ease",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        )}

        {/* Country name on hover — follows cursor */}
        <AnimatePresence>
          {tooltip.show && tooltip.text && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="pointer-events-none fixed z-[100] rounded-lg border px-3 py-2 text-sm font-semibold shadow-lg"
              style={{
                left: tooltip.x + 12,
                top: tooltip.y - 44,
                background: "rgba(8, 18, 32, 0.96)",
                color: AQUA,
                borderColor: "rgba(46, 230, 230, 0.35)",
                fontFamily: "Orbitron, system-ui, sans-serif",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.5)",
                maxWidth: "min(280px, 90vw)",
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

      {/* Selected country — compact, no giant placeholder */}
      <div className="mt-6 w-full max-w-lg px-2">
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-[#2ee6e6]/20 bg-[#0d1629]/95 px-5 py-4 text-center"
              style={{ boxShadow: "0 0 32px rgba(46, 230, 230, 0.08)" }}
            >
              <div
                className="mb-2 text-lg font-extrabold tracking-wide text-[#2ee6e6]"
                style={{ fontFamily: "Orbitron, system-ui, sans-serif" }}
              >
                {selected.name}
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#c5e8ec]" style={{ fontFamily: "Rajdhani, system-ui, sans-serif" }}>
                <InfoRow label="ISO" value={selected.iso} />
                {selected.region && <InfoRow label="Region" value={selected.region} />}
                {selected.subregion && <InfoRow label="Subregion" value={selected.subregion} />}
              </div>
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-xs text-[#5a7a85] sm:text-sm"
              style={{ fontFamily: "Rajdhani, system-ui, sans-serif" }}
            >
              Hover a country to see its name · Click to select
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
      <span className="font-bold uppercase tracking-wider text-[#2ee6e6]/80">{label}: </span>
      <span className="font-semibold text-[#e8fdfe]">{value}</span>
    </span>
  );
}
