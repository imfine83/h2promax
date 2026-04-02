import React, { useState, useRef } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";

// There are many available world geojson files, here's a lightweight one:
const GEO_URL =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";

// Helper to prettify country names
function prettify(name) {
  // Optionally, process country names
  return name;
}

const aqua = "#00e5e5";
const navy = "#0a1028";

const WorldMap = () => {
  const [tooltip, setTooltip] = useState({ visible: false, name: "", x: 0, y: 0 });
  const [selected, setSelected] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef();

  // Helper for map center calculation on click (to position info panel optionally)
  function handleCountryClick(geo, evt) {
    setSelected({
      name: geo.properties.ADMIN,
      iso: geo.properties.ISO_A3,
      pop: geo.properties.POP_EST,
      area: geo.properties.AREA_KM2,
      region: geo.properties.REGION_UN,
      subregion: geo.properties.SUBREGION,
    });
    const bounds = mapRef.current?.getBoundingClientRect();
    if (bounds && evt?.clientX && evt?.clientY) {
      setSelectedPosition({
        x: evt.clientX - bounds.left,
        y: evt.clientY - bounds.top,
      });
    }
  }

  function handleHover(geo, evt) {
    setTooltip({
      visible: true,
      name: prettify(geo.properties.ADMIN),
      x: evt.clientX,
      y: evt.clientY,
    });
  }

  function handleLeave() {
    setTooltip({ visible: false, name: "", x: 0, y: 0 });
  }

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[540px] py-10 px-2 bg-[#0a1028]"
      style={{ background: navy, minHeight: 520 }}
    >
      <div
        className="flex items-center justify-center mb-8"
        ref={mapRef}
        style={{
          width: "100%",
          maxWidth: 780,
          minHeight: 390,
          background: "radial-gradient(ellipse at 60% 40%, #03282e22 80%, transparent 100%)",
          borderRadius: 22,
          boxShadow: "0 6px 40px 0 #022a33",
        }}
      >
        <ComposableMap
          projectionConfig={{
            scale: 140,
          }}
          width={720}
          height={400}
          style={{
            width: "100%",
            maxWidth: 730,
            height: "auto",
            background: "transparent",
            outline: "none",
          }}
          data-tip=""
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isSelected = selected && selected.name === geo.properties.ADMIN;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(evt) => handleHover(geo, evt)}
                    onMouseLeave={handleLeave}
                    onMouseMove={(evt) => handleHover(geo, evt)} // keep tooltip synced
                    onClick={(evt) => handleCountryClick(geo, evt)}
                    style={{
                      default: {
                        fill: isSelected ? aqua : "#18223b",
                        outline: "none",
                        stroke: "#232c44",
                        strokeWidth: 0.7,
                        filter: isSelected
                          ? "drop-shadow(0 0 8px #00e5e555)"
                          : "none",
                        transition: "fill 0.25s, filter 0.25s",
                        cursor: "pointer",
                      },
                      hover: {
                        fill: isSelected ? aqua : "#119fbf",
                        outline: "none",
                        stroke: aqua,
                        strokeWidth: 1.1,
                        filter: "drop-shadow(0 0 14px #01e5e488)",
                        transition: "fill 0.18s, filter 0.18s",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: "#2eceee",
                        outline: "none",
                        stroke: aqua,
                        strokeWidth: 1.4,
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        {/* Tooltip */}
        <AnimatePresence>
          {tooltip.visible && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 370,
                damping: 30,
                duration: 0.2,
              }}
              className="fixed pointer-events-none z-50"
              style={{
                left: tooltip.x + 14,
                top: tooltip.y - 8,
                minWidth: 96,
                padding: "7px 16px",
                borderRadius: 8,
                background: "rgba(14,30,40,0.98)",
                color: aqua,
                border: "1px solid #00e5e533",
                fontFamily: "Orbitron,sans-serif",
                fontSize: 14,
                fontWeight: 600,
                boxShadow: "0 2px 16px #00203355",
                userSelect: "none",
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              {tooltip.name}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Info Panel */}
      <div
        className="w-full max-w-lg mx-auto bg-[#151b2d]/80 border border-[#00e5e5]/10 rounded-xl shadow-lg p-6 mt-1 flex flex-col items-center transition-all duration-300"
        style={{
          minHeight: "100px",
          background: "linear-gradient(122deg,#101c2b 90%,#003e64 100%)",
          boxShadow: selected
            ? "0 4px 40px #00e5e522"
            : "0 1px 12px #061c2b55",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {selected ? (
            <motion.div
              key={selected.iso}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, type: "tween" }}
              className="flex flex-col items-center w-full"
            >
              <div className="mb-2 text-lg font-extrabold text-[#00e5e5] tracking-wide" style={{ fontFamily: "Orbitron,sans-serif" }}>
                {selected.name}
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-center w-full gap-3 text-[#d2f7f8]/90">
                <InfoRow label="Region" value={selected.region} />
                <InfoRow label="Subregion" value={selected.subregion} />
                <InfoRow label="Population" value={selected.pop && selected.pop > 0 ? selected.pop.toLocaleString() : "—"} />
                <InfoRow label="Area (km²)" value={selected.area ? selected.area.toLocaleString() : "—"} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="no-country"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.26 }}
            >
              <div
                className="text-base text-center text-[#b8cfda] font-semibold"
                style={{ fontFamily: "Orbitron,sans-serif" }}
              >
                {"Click a country to see info"}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col items-center flex-1 min-w-[120px]">
      <div className="text-xs text-[#65fff8] font-semibold uppercase tracking-wider pb-1">{label}</div>
      <div className="text-base font-semibold text-[#e8fdfe]">{value}</div>
    </div>
  );
}

export default WorldMap;