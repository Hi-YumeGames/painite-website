'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Technology {
  name: string;
  icon: string;
}

interface StackData {
  title: string;
  technologies: Technology[];
}

const Section3 = () => {
  const [activeSection, setActiveSection] = useState('frontend');

  const stackData: Record<string, StackData> = {
    frontend: {
      title: 'Frontend',
      technologies: [
        { name: 'React', icon: '/stackIcons/react.svg' },
        { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
        { name: 'Vite', icon: '/stackIcons/vite.svg' },
        { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },
        { name: 'JavaScript', icon: '/stackIcons/js.svg' },
        { name: 'HTML', icon: '/stackIcons/html.svg' },
        { name: 'CSS', icon: '/stackIcons/css.svg' },
        { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' }
      ]
    },
    backend: {
      title: 'Backend & Database',
      technologies: [
        { name: 'Node.js', icon: '/stackIcons/nodejs.svg' },
        { name: 'Firebase', icon: '/stackIcons/firebase.svg' },
        { name: 'Supabase', icon: '/stackIcons/supabase.svg' },
        { name: 'PostgreSQL', icon: '/stackIcons/postgresql.svg' },
        { name: 'Storage', icon: '/stackIcons/json.svg' }
      ]
    },
    tools: {
      title: 'Tools & Design',
      technologies: [
        { name: 'Git', icon: '/stackIcons/git.svg' },
        { name: 'GitHub', icon: '/stackIcons/github.svg' },
        { name: 'npm', icon: '/stackIcons/npm.svg' },
        { name: 'Vercel', icon: '/stackIcons/Vercel.svg' },
        { name: 'Resend', icon: '/stackIcons/resend.svg' },
        { name: 'Illustrator', icon: '/stackIcons/illustrator.svg' },
        { name: 'Figma', icon: '/stackIcons/figma.svg' },
        { name: 'Framer', icon: '/stackIcons/framer.svg' }
      ]
    },
    mobile: {
      title: 'Game Dev',
      technologies: [
        { name: 'Godot', icon: '/stackIcons/godot.svg' },
        { name: 'GDScript', icon: '/stackIcons/gdscript.png' },
        { name: 'Play Store', icon: '/stackIcons/playstore.svg' },
        { name: 'App Store', icon: '/stackIcons/appstore.svg' },
        { name: 'AdMob', icon: '/stackIcons/admob.svg' },
        { name: 'Gradle', icon: '/stackIcons/gradle.svg' },
        { name: 'Xcode', icon: '/stackIcons/xcode.svg' }
      ]
    },
  };

  const TechnologyCard = ({ tech }: { tech: Technology }) => (
    <div className="bg-[#f9f9f9]/80 rounded-lg px-3 py-2 flex items-center gap-2 border border-zinc-600">
      <div className="w-5 h-5 flex items-center justify-center">
        <Image 
          src={tech.icon} 
          alt={tech.name}
          width={20}
          height={20}
          className="w-5 h-5"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.innerHTML = `
                <span class="text-zinc-300 text-xs font-medium">${tech.name.charAt(0)}</span>
              `;
            }
          }}
        />
      </div>
      <span className="text-zinc-700 text-sm font-medium">{tech.name}</span>
    </div>
  );

  const StackSection = ({ data }: { data: StackData }) => (
    <div className="bg-zinc-800 rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-medium text-white">
        {data.title}
      </h2>
      
      <div className="flex flex-wrap gap-3">
        {data.technologies.map((tech: Technology, index: number) => (
          <TechnologyCard key={index} tech={tech} />
        ))}
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
              className="text-lg text-white sm:text-6xl mb-4 sm:mb-12"
              style={{ fontFamily: 'IBMLight' }}
            >
              My<span className="bg-gradient-to-r from-[#CAE6A2] from-[3%] to-[#FFFDCF] to-[70%] bg-clip-text text-transparent">Stack</span>
            </h1>

            {/* Mobile Section Toggles - Only visible on mobile */}
            <div className="flex justify-start gap-4 mb-12 md:hidden overflow-x-auto" style={{ fontFamily: 'IBMLight' }}>
              {['frontend', 'backend', 'tools', 'mobile'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`cursor-pointer text-sm sm:text-lg font-medium transition-all duration-300 relative pb-2 whitespace-nowrap ${
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

            {/* Content - Different layouts based on screen size */}
            <div className="w-full">
              {/* Mobile: Single section with toggle */}
              <div className="md:hidden">
                <StackSection data={stackData[activeSection as keyof typeof stackData]} />
              </div>

              {/* Tablet/Desktop: 4x2 grid */}
              <div className="hidden md:block">
                <div className="w-full max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StackSection data={stackData.frontend} />
                    <StackSection data={stackData.backend} />
                    <StackSection data={stackData.tools} />
                    <StackSection data={stackData.mobile} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;