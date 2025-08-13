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
        { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },
        { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' },
        { name: 'HTML', icon: '/stackIcons/html.svg' },
        { name: 'CSS', icon: '/stackIcons/css.svg' }
      ]
    },
    backend: {
      title: 'Backend',
      technologies: [
        { name: 'Node.js', icon: '/stackIcons/nodejs.svg' },
        { name: 'Express', icon: '/stackIcons/express.svg' },
        { name: 'Python', icon: '/stackIcons/python.svg' },
        { name: 'Django', icon: '/stackIcons/django.svg' },
        { name: 'PostgreSQL', icon: '/stackIcons/postgresql.svg' },
        { name: 'MongoDB', icon: '/stackIcons/mongodb.svg' }
      ]
    },
    database: {
      title: 'Database',
      technologies: [
        { name: 'PostgreSQL', icon: '/stackIcons/postgresql.svg' },
        { name: 'MongoDB', icon: '/stackIcons/mongodb.svg' },
        { name: 'Redis', icon: '/stackIcons/redis.svg' },
        { name: 'MySQL', icon: '/stackIcons/mysql.svg' }
      ]
    },
    tools: {
      title: 'Tools & DevOps',
      technologies: [
        { name: 'Git', icon: '/stackIcons/git.svg' },
        { name: 'GitHub', icon: '/stackIcons/github.svg' },
        { name: 'Docker', icon: '/stackIcons/docker.svg' },
        { name: 'VS Code', icon: '/stackIcons/vscode.svg' }
      ]
    }
  };

  const TechnologyCard = ({ tech }: { tech: Technology }) => (
    <div className="bg-zinc-700 rounded-lg px-3 py-2 flex items-center gap-2 border border-zinc-600">
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
      <span className="text-zinc-300 text-sm font-medium">{tech.name}</span>
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
              className="text-4xl text-white sm:text-6xl mb-12"
              style={{ fontFamily: 'IBMLight' }}
            >
              My<span className="bg-gradient-to-r from-[#CAE6A2] from-[3%] to-[#FFFDCF] to-[70%] bg-clip-text text-transparent">Stack</span>
            </h1>

            {/* Mobile Section Toggles - Only visible on mobile */}
            <div className="flex justify-start gap-8 mb-12 md:hidden" style={{ fontFamily: 'IBMLight' }}>
              {['frontend', 'backend', 'database', 'tools'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`cursor-pointer text-sm font-medium transition-all duration-300 relative pb-2 ${
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

              {/* Tablet/Desktop: 2x2 grid */}
              <div className="hidden md:block">
                <div className="w-full max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StackSection data={stackData.frontend} />
                    <StackSection data={stackData.backend} />
                    <StackSection data={stackData.database} />
                    <StackSection data={stackData.tools} />
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