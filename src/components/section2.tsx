'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, ExternalLink, LucideIcon } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface SectionData {
  image?: string;
  description: string;
  social: SocialLink[];
}

const Section2 = () => {
  const [activeSection, setActiveSection] = useState('professional');

  // Sample data for each section
  const sectionData: Record<string, SectionData> = {
    professional: {
      image: '/images/profile.jpg', // Replace with your actual image path
      description: 'Experienced software developer with expertise in modern web technologies. Passionate about creating efficient, scalable solutions and contributing to innovative projects.',
      social: [
        { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
        { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
        { name: 'Portfolio', url: 'https://yourportfolio.com', icon: ExternalLink }
      ]
    },
    personal: {
      image: '/images/personal.jpg', // Replace with your actual image path
      description: 'Creative individual who enjoys exploring new technologies and building things that make a difference. Always curious and eager to learn from every experience.',
      social: [
        { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
        { name: 'Blog', url: 'https://yourblog.com', icon: ExternalLink }
      ]
    },
    private: {
      description: 'Personal space for thoughts, experiments, and creative projects. A place where ideas can grow without the pressure of external expectations.',
      social: []
    }
  };

  const SocialIcon = ({ social }: { social: SocialLink }) => (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded transition-all duration-200"
      title={social.name}
    >
      <social.icon size={20} />
    </a>
  );

  const SectionContent = ({ data }: { data: SectionData }) => (
    <div className="flex flex-col md:flex-row items-center  gap-8 max-w-4xl mx-auto">
      {data.image && (
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-zinc-600 bg-zinc-800">
            <Image
              src={data.image}
              alt="Profile"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = `
                    <div class="w-full h-full bg-zinc-700 flex items-center justify-center">
                      <span class="text-zinc-500 text-sm">Image</span>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`flex-1 space-y-6 ${!data.image ? 'text-center' : 'text-center md:text-left'}`}>
        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg text-zinc-300 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Social Icons - only show if social icons exist */}
        {data.social && data.social.length > 0 && (
          <div className={`flex gap-3 ${!data.image ? 'justify-center' : 'justify-center md:justify-start'}`}>
            {data.social.map((social: SocialLink, index: number) => (
              <SocialIcon key={index} social={social} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-background" style={{ fontFamily: 'IBMLight' }}>
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-4 sm:py-8 lg:py-16">
          <div className="text-center relative h-full flex flex-col items-center justify-center">
            {/* Header */}
            <h1 
              className="text-4xl text-white sm:text-6xl mb-12"
              style={{ fontFamily: 'IBMLight' }}
            >
              My<span className="bg-gradient-to-r from-[#CAE6A2] from-[3%] to-[#FFFDCF] to-[70%] bg-clip-text text-transparent">self</span>
            </h1>

            {/* Section Toggles */}
            <div className="flex justify-start gap-8 mb-12" style={{ fontFamily: 'IBMLight' }}>
              {['professional', 'personal', 'private'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`cursor-pointer text-sm font-medium transition-all duration-300 relative pb-2 sm:text-lg ${
                    activeSection === section
                      ? 'text-white'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#CAE6A2] to-[#FFFDCF] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Section Content */}
            <div className="w-full">
              <SectionContent data={sectionData[activeSection as keyof typeof sectionData]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;