'use client';

import React, { useState } from 'react';
import { Github, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect } from 'react';

const Section1 = () => {
  const [activeSection, setActiveSection] = useState('recent');
  const [copiedUrl, setCopiedUrl] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample project data - replace with your actual projects
  const projects = {
    recent: [
      {
        id: 1,
        name: 'adaptive planner',
        url: '/images/logo.png',
        github: 'https://github.com/username/adaptive',
        status: 'in-progress', // 'live' or 'in-progress'
        isImage: true,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'HTML', icon: '/stackIcons/html.svg' }
        ]
      },
      {
        id: 2,
        name: 'warframedle',
        url: 'https://warframedle.com',
        github: 'https://github.com/username/warframedle',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'HTML', icon: '/stackIcons/html.svg' }
        ]
      },
      {
        id: 3,
        name: 'victors game',
        url: 'https://www.hiyume.games/VictorsGame',
        github: 'https://github.com/',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'HTML', icon: '/stackIcons/html.svg' }
        ]
      }
      // {
      //   id: 3,
      //   name: 'mohammed portfolio',
      //   url: 'https://mohammed.hiyume.games',
      //   github: 'https://github.com/username/warframedle',
      //   status: 'live',
      //   isImage: false,
      //   stack: [
      //     { name: 'React', icon: '⚛️' },
      //     { name: 'HTML', icon: '🌐' }
      //     { name: 'HTML', icon: '🌐' }
      //   ]
      // }
    ],
    sites: [
      {
        id: 1,
        name: 'hiyume.games',
        url: 'https://hiyume.games',
        github: 'https://github.com/username/hiyume-games',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'HTML', icon: '/stackIcons/html.svg' }
        ]
      },
      {
        id: 2,
        name: 'enobart.hiyume.games',
        url: 'https://enobart.hiyume.games',
        github: 'https://github.com/username/eno-project',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'HTML', icon: '/stackIcons/html.svg' }
        ]
      },
      {
        id: 3,
        name: 'haya.hiyume.games',
        url: 'https://haya.hiyume.games',
        github: 'https://github.com/username/warframedle',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'HTML', icon: '/stackIcons/html.svg' }
        ]
      }
    ],
    apps: [
      {
        id: 1,
        name: 'adaptive planner',
        url: '/images/logo.png',
        github: 'https://github.com/username/adaptive',
        status: 'in-progress', // 'live' or 'in-progress'
        isImage: true,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'HTML', icon: '/stackIcons/html.svg' }
        ]
      },
      {
        id: 2,
        name: 'warframedle.com',
        url: 'https://warframedle.com',
        github: 'https://github.com/username/portfolio-app',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'HTML', icon: '/stackIcons/html.svg' }
        ]
      }
    ],
    games: [
      {
        id: 1,
        name: 'victors game',
        url: 'https://www.hiyume.games/VictorsGame',
        github: '',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'Godot', icon: '/stackIcons/godot.svg' },
          { name: 'GDScript', icon: '/stackIcons/gdscript.svg' },
        ]
      }
    ]
  };

  const copyToClipboard = async (url: string, projectName: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(projectName);
      setTimeout(() => setCopiedUrl(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="select-none bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-zinc-600 transition-all duration-300 group">
      {/* Live Preview */}
      <div className="relative h-48 bg-zinc-900 overflow-hidden">
        <div className="absolute top-2 right-2 z-10">
          <span 
            className={`cursor-default flex items-center gap-1 text-xs px-2 py-1 rounded-md font-medium ${
              project.status === 'live' 
                ? 'bg-gradient-to-tr from-[#132319] from-[0%] to-[#3F5545] to-[100%] border border-[#2D5B3A] text-[#57F483]' 
                : 'bg-gradient-to-tr from-[#231D13] from-[0%] to-[#554E3F] to-[100%] border border-[#87673A] text-[#DCA631]'
            }`}
            style={{ fontFamily: 'IBMLight' }}
          >
            <div 
              className={`w-2 h-2 rounded-full animate-pulse ${
                project.status === 'live' 
                  ? 'bg-[#57F483]' 
                  : 'bg-[#DCA631]'
              }`}
            ></div>
            {project.status === 'live' ? 'live' : 'in progress'}
          </span>
        </div>
        
        {project.isImage ? (
          <img
            src={project.url}
            alt={`Preview of ${project.name}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <iframe
              src={project.url}
              className="w-full h-full scale-[0.25] origin-top-left transform"
              style={{ 
                width: '400%', 
                height: '400%',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
              title={`Preview of ${project.name}`}
              loading="lazy"
              scrolling="no"
            />
            <style jsx>{`
              iframe::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Info */}
      <div className="p-4 space-y-3">
        {/* URL and Actions */}
        <div className="flex items-center justify-between">
          <span className="text-white font-medium text-sm truncate max-w-[140px]">
            {project.name}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded transition-all duration-200"
              title="View on GitHub"
            >
              <Github size={16} />
            </a>
            {!project.isImage && (
              <>
                
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded transition-all duration-200"
                  title="Visit site"
                >
                  <ExternalLink size={16} />
                </a>
              </>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech: any, index: number) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-zinc-300 text-zinc-700 text-xs px-2 py-1 rounded border border-zinc-600"
            >
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-4 h-4"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile Carousel Component using shadcn
  const MobileCarousel = ({ projectList }: { projectList: any[] }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!api) {
        return;
      }

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);

    return (
      <div className="w-full max-w-sm mx-auto">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projectList.map((project: any) => (
              <CarouselItem key={project.id}>
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom Dots Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {projectList.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  index === current 
                    ? "bg-gradient-to-r from-[#CAE6A2] from-[10%] to-[#FFFDCF] to-[70%]" 
                    : "bg-zinc-600"
                )}
              />
            ))}
          </div>
        </Carousel>
      </div>
    );
  };

  return (
    <div className="bg-background "
    style={{
      fontFamily: 'IBMLight'
    }}
    >
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-4 sm:py-8 lg:py-16">
          <div className="text-center relative h-full flex flex-col items-center justify-center">
            {/* Header */}
            <h1 
              className="text-4xl text-white sm:text-6xl mb-12"
              style={{ fontFamily: 'IBMLight' }}
            >
              My<span className="bg-gradient-to-r from-[#CAE6A2] from-[3%] to-[#FFFDCF] to-[70%] bg-clip-text text-transparent">Work</span>
            </h1>

            {/* Section Toggles */}
            <div className="flex justify-start gap-8 mb-12"
                style={{ fontFamily: 'IBMLight' }}>
              {['recent', 'sites', 'apps', 'games'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`cursor-pointer text-lg font-medium transition-all duration-300 relative pb-2 ${
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

            {/* Projects Display - Mobile Carousel / Desktop Grid */}
            <div className="w-full max-w-6xl">
              {projects[activeSection as keyof typeof projects]?.length > 0 ? (
                <>
                  {/* Mobile Carousel */}
                  <div className="block md:hidden">
                    <MobileCarousel projectList={projects[activeSection as keyof typeof projects]} />
                  </div>
                  
                  {/* Desktop Grid */}
                  <div className="hidden md:block">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projects[activeSection as keyof typeof projects].map((project: any ) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-zinc-600 text-lg mb-4">No projects yet</div>
                  <div className="w-48 h-32 mx-auto rounded-lg border-2 border-dashed border-zinc-700 flex items-center justify-center">
                    <span className="text-zinc-600 text-sm">Coming Soon</span>
                  </div>
                </div>
              )}
            </div>

            {/* More Button */}
            <div className="mt-12">
              <div className="relative rounded-md p-[2px] bg-gradient-to-r from-[#CAE6A2] from-[50%] to-[#FFFDCF] to-[100%] 
                hover:from-[#CAE6A2] hover:from-[0%] hover:to-[#FFFDCF] hover:to-[50%] 
                transition-all duration-300 group/btn overflow-hidden">
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-[#CAE6A2]/20 rounded-lg blur-sm -z-10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                
                <a 
                  href="/projects" 
                  className="flex items-center gap-4 text-sm/6 font-semibold text-white
                    rounded-[calc(0.375rem-2px)] px-6 py-3 bg-background
                    transform cursor-pointer transition-all duration-300 relative z-10"
                >
                  more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;