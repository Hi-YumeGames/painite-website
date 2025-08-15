'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, LucideIcon, Instagram, Facebook, Youtube } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon | string;
  isCustomIcon?: boolean;
  isBootstrapIcon?: boolean;
}

interface SectionData {
  image?: string;
  description: string;
  social: SocialLink[];
}

const About = () => {
  const [activeSection, setActiveSection] = useState('professional');

  // Sample data for each section
  const sectionData: Record<string, SectionData> = {
    professional: {
      image: '/images/professional.png',
      description: 'Electrical Eng., Developer and Designer. I build and design to serve purpose and provide value to the user. I have multiple fields of expertise that help me adapt no matter the situation, and it keeps me eager to learn and grow.',
      social: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yazan-barakat-2354ba37a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: Linkedin },
        { name: 'GitHub', url: 'https://github.com/Painite69', icon: Github },
        { name: 'Upwork', url: 'https://upwork.com/freelancers/~016b673a89188b9871', icon: '/images/upwork.svg', isCustomIcon: true },
        { name: 'Freelancer', url: 'https://www.freelancer.com/u/PainiteCoding?sb=t', icon: '/images/freelancer.svg', isCustomIcon: true },
        { name: 'Behance', url: 'https://www.behance.net/yazanbarakat3', icon: '/images/behance.svg', isCustomIcon: true },
        { name: 'Dribbble', url: 'https://dribbble.com/painitecode', icon: '/images/dribbble.svg', isCustomIcon: true }
      ]
    },
    personal: {
      image: '/images/personal.jpeg',
      description: 'I play video games like warframe and lol, I love creating for these communities, to show my appreciation and support. Also recently got into chess and trivia games.',
      social: [
        { name: 'Instagram', url: 'https://www.instagram.com/painitecoding', icon: Instagram },
        { name: 'X', url: 'https://x.com/painitedev', icon: 'bi bi-twitter-x', isBootstrapIcon: true },
        { name: 'Facebook', url: 'https://www.facebook.com/painite.2025', icon: Facebook },
        { name: 'TikTok', url: 'www.tiktok.com/@painitecode', icon: 'bi bi-tiktok', isBootstrapIcon: true },
        { name: 'YouTube', url: 'https://www.youtube.com/@painitecode', icon: Youtube }
      ]
    },
    private: {
      description: 'there\'s nothing here :P, don\'t be a creep, I\'ll not share private info.',
      social: []
    }
  };

  const SocialIcon = ({ social }: { social: SocialLink }) => {
    if (social.isCustomIcon) {
      // Custom SVG icon
      return (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-[#f9f9f9] hover:text-white hover:bg-zinc-700 rounded transition-all duration-200"
          title={social.name}
        >
          <Image
            src={social.icon as string}
            alt={social.name}
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </a>
      );
    } else if (social.isBootstrapIcon) {
      // Bootstrap icon
      return (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-[#f9f9f9] hover:text-white hover:bg-zinc-700 rounded transition-all duration-200"
          title={social.name}
        >
          <i className={`${social.icon} text-[#f9f9f9]`}></i>
        </a>
      );
    } else {
      // Lucide React icon
      const IconComponent = social.icon as LucideIcon;
      return (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-[#f9f9f9] hover:text-white hover:bg-zinc-700 rounded transition-all duration-200"
          title={social.name}
        >
          <IconComponent size={20} />
        </a>
      );
    }
  };

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
              Who is <span className="bg-gradient-to-r from-[#CAE6A2] from-[3%] to-[#FFFDCF] to-[70%] bg-clip-text text-transparent">Painite</span>
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

export default About;