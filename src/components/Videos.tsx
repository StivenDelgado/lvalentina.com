
import React from 'react';
import { cn } from '@/lib/utils';

const Videos = () => {
  // Sample video data - in a real app, this might come from an API
  const marketingVideos = [
    {
      id: 1,
      title: "Product Launch Campaign",
      thumbnail: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1470&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual marketing video
      description: "Effective strategies for launching new products with maximum impact"
    },
    {
      id: 2,
      title: "Social Media Strategy",
      thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1374&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual marketing video
      description: "Engaging social media campaigns that convert followers to customers"
    },
    {
      id: 3,
      title: "Content Marketing Excellence",
      thumbnail: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1470&auto=format&fit=crop",
      videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual marketing video
      description: "Creating valuable content that resonates with your target audience"
    }
  ];

  return (
    <section id="videos" className="bg-gray-50 py-20">
      <div className="section-container scroll-reveal">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Marketing Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through my portfolio of successful marketing campaigns and content strategies that helped businesses thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {marketingVideos.map((video) => (
            <div key={video.id} className="scroll-reveal flex flex-col items-center">
              {/* iPhone Frame */}
              <div className="relative mx-auto border-[14px] border-black rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0">
                  <div className="mx-auto h-6 w-40 bg-black rounded-b-3xl"></div>
                </div>
                
                {/* Power Button */}
                <div className="absolute -right-[14px] top-20 h-12 w-[14px] bg-black rounded-r-lg"></div>
                
                {/* Volume Buttons */}
                <div className="absolute -left-[14px] top-20 h-12 w-[14px] bg-black rounded-l-lg"></div>
                <div className="absolute -left-[14px] top-36 h-12 w-[14px] bg-black rounded-l-lg"></div>
                
                {/* Screen Content */}
                <div className="h-full w-full bg-white overflow-hidden rounded-[2rem]">
                  <iframe 
                    src={video.videoSrc} 
                    title={video.title}
                    className="h-full w-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="mt-6 text-center">
                <h3 className="font-display font-semibold text-xl">{video.title}</h3>
                <p className="mt-2 text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
