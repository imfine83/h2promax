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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-2">
            See H2 ELEMENT in action
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Promotional Videos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 aspect-video cursor-pointer hover:shadow-2xl transition-all duration-500"
              onClick={() => setActiveVideo(video)}
            >
              <video
                src={video.url}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                muted
                preload="metadata"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center shadow-lg shadow-green-600/40 group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          <div
            className="w-full max-w-4xl rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo.url}
              className="w-full"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
