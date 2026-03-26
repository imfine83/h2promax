import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const videos = [
  {
    title: 'New Year, Max Fuel Savings',
    url: 'https://customer-assets.emergentagent.com/job_af9489a9-2c06-4c7d-8b59-8589da91ec31/artifacts/emejq1ma_New_Year%2C_Max_Fuel_Savings__version_1.mp4',
  },
  {
    title: 'Fuel Your 2026 Profit',
    url: 'https://customer-assets.emergentagent.com/job_af9489a9-2c06-4c7d-8b59-8589da91ec31/artifacts/8nz1j4f1_Fuel_Your_2026_Profit__version_1.mp4',
  },
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-20 bg-[#0a0a0f] relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.5em] text-[#ff2d95]/50 font-mono-cyber">// MEDIA_CONTENT</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4" style={{ fontFamily: 'Orbitron' }}>
            Promotional <span className="text-[#ff2d95]" style={{ textShadow: '0 0 15px rgba(255,45,149,0.3)' }}>Videos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((video, index) => {
            const color = index === 0 ? '#39ff14' : '#00f0ff';
            return (
              <div key={index}
                className="group relative overflow-hidden aspect-video cursor-pointer"
                style={{ border: `1px solid ${color}20` }}
                onClick={() => setActiveVideo(video)}>
                <video src={video.url}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity"
                  muted preload="metadata" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform"
                       style={{ border: `2px solid ${color}`, boxShadow: `0 0 20px ${color}30` }}>
                    <Play size={20} className="ml-0.5" style={{ color }} fill={color} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white/70 font-bold text-xs" style={{ fontFamily: 'Orbitron', fontSize: '10px' }}>{video.title}</h3>
                </div>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-[1px]" style={{ background: color }} />
                <div className="absolute top-0 left-0 w-[1px] h-4" style={{ background: color }} />
                <div className="absolute bottom-0 right-0 w-4 h-[1px]" style={{ background: color }} />
                <div className="absolute bottom-0 right-0 w-[1px] h-4" style={{ background: color }} />
              </div>
            );
          })}
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <button onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 w-10 h-10 border border-[#ff2d95]/30 flex items-center justify-center text-[#ff2d95] hover:bg-[#ff2d95]/10 transition-colors">
            <X size={18} />
          </button>
          <div className="w-full max-w-4xl" style={{ border: '1px solid rgba(57,255,20,0.2)' }}
               onClick={(e) => e.stopPropagation()}>
            <video src={activeVideo.url} className="w-full" controls autoPlay />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
