'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect } from 'react';

interface StackItem {
  name: string;
  icon: string;
}

interface Project {
  key: number;
  id: number;
  name: string;
  url: string;
  github: string;
  status: 'live' | 'in-progress';
  isImage: boolean;
  stack: StackItem[];
  stackText: React.ReactNode[];
  features: React.ReactNode[];
  technical: React.ReactNode[];
}

const Projects = () => {
  const [activeSection, setActiveSection] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalActiveTab, setModalActiveTab] = useState('stack');

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Sample project data - replace with your actual projects
  const projects: Record<string, Project[]> = {
    all: [
      {
        key: 1,
        id: 1,
        name: 'adaptive planner',
        url: '/images/adaptive.jpeg',
        github: 'https://github.com/Painite69/adaptive-public',
        status: 'in-progress', // 'live' or 'in-progress'
        isImage: true,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },

          { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' },
          { name: 'Shadcn', icon: '/stackIcons/shadcn.svg' },
          
          { name: 'Supabase', icon: '/stackIcons/supabase.svg' },
          { name: 'PostgreSQL', icon: '/stackIcons/postgresql.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I'm creating this app using Next.Js, React, Typescript and Turbopack for the front end.
            </div>
            <div className="flex items-center gap-2">
              - For styling I'm using Tailwind CSS, Shadcn UI, Lucide React and some custom css modules.
            </div>
            <div className="flex items-center gap-2">
              - I'm also using node.js for backend and supabase for authintication, storage and server-side rendering.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - It has a linked system of tasks, events and goals making productivity attainable.
            </div>
            <div className="flex items-center gap-2">
              - There are Bucket List for future goals and dreams, notes to keep everything .
            </div>
            <div className="flex items-center gap-2">
              - Various themes with the ability to make your own custom theme.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Adaptive scheduling to keep productivity high and achieve more.
            </div>
            <div className="flex items-center gap-2">
              - Connection between goals, tasks and events to keep you on track.
            </div>
            <div className="flex items-center gap-2">
              - Connecting to your google calendar to get your events.
            </div>
          </div>
        ]
      },
      {
        key: 2,
        id: 2,
        name: 'warframedle',
        url: 'https://warframedle.com',
        github: 'https://github.com/Painite69/warframedle-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Vite', icon: '/stackIcons/vite.svg' },
          { name: 'CSS', icon: '/stackIcons/css.svg' },
          { name: 'Firebase', icon: '/stackIcons/firebase.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used React Native and Vite for the front end with custom css for styling.
            </div>
            <div className="flex items-center gap-2">
              - Firebase for functions and realtime database.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - A loldle like game where you have to guess todays answers with given info.
            </div>
            <div className="flex items-center gap-2">
              - 4 games to play, guess warframe, quote, ability and icon.
            </div>
            <div className="flex items-center gap-2">
              - KIM system themed to match the 1999 update.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Daily resets without repetitions to keep the game fresh.
            </div>
            <div className="flex items-center gap-2">
              - Stats and streak to keep you motivated. 
            </div>
            <div className="flex items-center gap-2">
              - Two view modes, fullscreen and windowed to fit most screens and a colorblind mode.
            </div>
          </div>
        ]
      },
      {
        key: 3,
        id: 3,
        name: 'victors game',
        url: 'https://www.hiyume.games/VictorsGame',
        github: 'https://github.com/Painite69/victors-game-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'Godot 4.3', icon: '/stackIcons/godot.svg' },
          { name: 'GDScript', icon: '/stackIcons/gdscript.png' },
          { name: 'JSON', icon: '/stackIcons/json.svg' },

          { name: 'iOS', icon: '/stackIcons/ios.svg' },
          { name: 'Android', icon: '/stackIcons/android.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used Godot 4.3 and GDScript for the game development.
            </div>
            <div className="flex items-center gap-2">
              - JSON for the game data.
            </div>
            <div className="flex items-center gap-2">
              - Godot scene system for the game.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Tile based movement in an endless run with many obstacles to avoid.
            </div>
            <div className="flex items-center gap-2">
              - Coins and material to help you grow and help your peers.
            </div>
            <div className="flex items-center gap-2">
              - Multiple connected characters and more to come from other countries.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Endless runner with a unique generation for each run and tileset.
            </div>
            <div className="flex items-center gap-2">
              - Powerups to help you gather more material and navigate through the terrain.
            </div>
            <div className="flex items-center gap-2">
              - Morning, afternoon, evening and night cycles to keep the game interesting.
            </div>
          </div>
        ]
      },
      {
        key: 4,
        id: 4,
        name: 'hiyume.games',
        url: 'https://hiyume.games',
        github: 'https://github.com/Painite69/hiyume-website-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },
          { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' },
          { name: 'CSS', icon: '/stackIcons/css.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used React, Next.js and TypeScript for the front end.
            </div>
            <div className="flex items-center gap-2">
              - Tailwind CSS for styling and custom CSS modules.
            </div>
            <div className="flex items-center gap-2">
              - Node.js for the backend and Vercel for hosting and deployment.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - A game studio website featuring my published game.
            </div>
            <div className="flex items-center gap-2">
              - Showcase of our team, roles and our cause.
            </div>
            <div className="flex items-center gap-2">
              - Newsletter section to stay updated with our latest news and updates.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Custom made carousel for phone view.
            </div>
            <div className="flex items-center gap-2">
              - Custom made form connected to google forms.
            </div>
          </div>
        ]
      },
      {
        key: 5,
        id: 5,
        name: 'enobart.hiyume.games',
        url: 'https://enobart.hiyume.games',
        github: 'https://github.com/Painite69/enobart-portfolio-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },
          { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' },
          { name: 'Shadcn', icon: '/stackIcons/shadcn.svg' },
          { name: 'Supabase', icon: '/stackIcons/supabase.svg' },
          { name: 'PostgreSQL', icon: '/stackIcons/postgresql.svg' },
          { name: 'Resend', icon: '/stackIcons/resend.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used React, Next.js, TypeScript and Tailwind CSS for the front end.
            </div>
            <div className="flex items-center gap-2">
              - Node.js for the backend and supabase for database and admin authintication.
            </div>
            <div className="flex items-center gap-2">
              - Resend for the contact form.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Showcasing the work of EnoB ART with a full gallery.
            </div>
            <div className="flex items-center gap-2">
              - A list of the services provided and the methods used to create the art.
            </div>
            <div className="flex items-center gap-2">
              - Admin page to allow the owner full control and customization of the website.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Responsive layout with carousel for phone view.
            </div>
            <div className="flex items-center gap-2">
              - A contact form connected to the owners email.
            </div>
          </div>
        ]
      },
      {
        key: 6,
        id: 6,
        name: 'haya.hiyume.games',
        url: 'https://haya.hiyume.games',
        github: 'https://github.com/Painite69/haya-portfolio-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },
          { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' },
          { name: 'Shadcn', icon: '/stackIcons/shadcn.svg' },
          { name: 'Supabase', icon: '/stackIcons/supabase.svg' },
          { name: 'PostgreSQL', icon: '/stackIcons/postgresql.svg' },
          { name: 'Resend', icon: '/stackIcons/resend.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used React, Next.js, TypeScript and Tailwind CSS for the front end.
            </div>
            <div className="flex items-center gap-2">
              - Node.js for the backend and supabase for database and admin authintication.
            </div>
            <div className="flex items-center gap-2">
              - Resend for the contact form.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Showcasing the personal and professional life of Haya.
            </div>
            <div className="flex items-center gap-2">
              - Lists of projects, designs and art. 
            </div>
            <div className="flex items-center gap-2">
              - Admin page to allow the owner full control and customization of the website.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Single page portfolio website.
            </div>
            <div className="flex items-center gap-2">
              - A contact form connected to the owners email.
            </div>
          </div>
        ]
      },
      {
        key: 7,
        id: 7,
        name: 'mohammed.hiyume.games',
        url: 'https://mohammed.hiyume.games',
        github: 'https://github.com/Painite69/mohammed-website-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },
          { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' },
          { name: 'Shadcn', icon: '/stackIcons/shadcn.svg' },
          { name: 'Supabase', icon: '/stackIcons/supabase.svg' },
          { name: 'PostgreSQL', icon: '/stackIcons/postgresql.svg' },
          { name: 'Resend', icon: '/stackIcons/resend.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used React, Next.js, TypeScript and Tailwind CSS for the front end.
            </div>
            <div className="flex items-center gap-2">
              - Node.js for the backend and supabase for database and admin authintication.
            </div>
            <div className="flex items-center gap-2">
              - Resend for the contact form.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Showcasing the gamer and professional sides of Moh.
            </div>
            <div className="flex items-center gap-2">
              - Lists of projects, work and clips. 
            </div>
            <div className="flex items-center gap-2">
              - Admin page to allow the owner full control and customization of the website.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Homepage and a game page to showcase the work of moh.
            </div>
            <div className="flex items-center gap-2">
              - A contact form connected to the owners email.
            </div>
          </div>
        ]
      }
    ],
    sites: [
      {
        key: 1,
        id: 1,
        name: 'hiyume.games',
        url: 'https://hiyume.games',
        github: 'https://github.com/Painite69/hiyume-website-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },
          { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' },
          { name: 'CSS', icon: '/stackIcons/css.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used React, Next.js and TypeScript for the front end.
            </div>
            <div className="flex items-center gap-2">
              - Tailwind CSS for styling and custom CSS modules.
            </div>
            <div className="flex items-center gap-2">
              - Node.js for the backend and Vercel for hosting and deployment.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - A game studio website featuring my published game.
            </div>
            <div className="flex items-center gap-2">
              - Showcase of our team, roles and our cause.
            </div>
            <div className="flex items-center gap-2">
              - Newsletter section to stay updated with our latest news and updates.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Custom made carousel for phone view.
            </div>
            <div className="flex items-center gap-2">
              - Custom made form connected to google forms.
            </div>
          </div>
        ]
      },
      {
        key: 2,
        id: 2,
        name: 'enobart.hiyume.games',
        url: 'https://enobart.hiyume.games',
        github: 'https://github.com/Painite69/enobart-portfolio-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },
          { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' },
          { name: 'Shadcn', icon: '/stackIcons/shadcn.svg' },
          { name: 'Supabase', icon: '/stackIcons/supabase.svg' },
          { name: 'PostgreSQL', icon: '/stackIcons/postgresql.svg' },
          { name: 'Resend', icon: '/stackIcons/resend.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used React, Next.js, TypeScript and Tailwind CSS for the front end.
            </div>
            <div className="flex items-center gap-2">
              - Node.js for the backend and supabase for database and admin authintication.
            </div>
            <div className="flex items-center gap-2">
              - Resend for the contact form.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Showcasing the work of EnoB ART with a full gallery.
            </div>
            <div className="flex items-center gap-2">
              - A list of the services provided and the methods used to create the art.
            </div>
            <div className="flex items-center gap-2">
              - Admin page to allow the owner full control and customization of the website.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Responsive layout with carousel for phone view.
            </div>
            <div className="flex items-center gap-2">
              - A contact form connected to the owners email.
            </div>
          </div>
        ]
      },
      {
        key: 3,
        id: 3,
        name: 'haya.hiyume.games',
        url: 'https://haya.hiyume.games',
        github: 'https://github.com/Painite69/haya-portfolio-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },
          { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' },
          { name: 'Shadcn', icon: '/stackIcons/shadcn.svg' },
          { name: 'Supabase', icon: '/stackIcons/supabase.svg' },
          { name: 'PostgreSQL', icon: '/stackIcons/postgresql.svg' },
          { name: 'Resend', icon: '/stackIcons/resend.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used React, Next.js, TypeScript and Tailwind CSS for the front end.
            </div>
            <div className="flex items-center gap-2">
              - Node.js for the backend and supabase for database and admin authintication.
            </div>
            <div className="flex items-center gap-2">
              - Resend for the contact form.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Showcasing the personal and professional life of Haya.
            </div>
            <div className="flex items-center gap-2">
              - Lists of projects, designs and art. 
            </div>
            <div className="flex items-center gap-2">
              - Admin page to allow the owner full control and customization of the website.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Single page portfolio website.
            </div>
            <div className="flex items-center gap-2">
              - A contact form connected to the owners email.
            </div>
          </div>
        ]
      },
      {
        key: 4,
        id: 4,
        name: 'mohammed.hiyume.games',
        url: 'https://mohammed.hiyume.games',
        github: 'https://github.com/Painite69/mohammed-website-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },
          { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' },
          { name: 'Shadcn', icon: '/stackIcons/shadcn.svg' },
          { name: 'Supabase', icon: '/stackIcons/supabase.svg' },
          { name: 'PostgreSQL', icon: '/stackIcons/postgresql.svg' },
          { name: 'Resend', icon: '/stackIcons/resend.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used React, Next.js, TypeScript and Tailwind CSS for the front end.
            </div>
            <div className="flex items-center gap-2">
              - Node.js for the backend and supabase for database and admin authintication.
            </div>
            <div className="flex items-center gap-2">
              - Resend for the contact form.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Showcasing the gamer and professional sides of Moh.
            </div>
            <div className="flex items-center gap-2">
              - Lists of projects, work and clips. 
            </div>
            <div className="flex items-center gap-2">
              - Admin page to allow the owner full control and customization of the website.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Homepage and a game page to showcase the work of moh.
            </div>
            <div className="flex items-center gap-2">
              - A contact form connected to the owners email.
            </div>
          </div>
        ]
      }
    ],
    apps: [
      {
        key: 1,
        id: 1,
        name: 'adaptive planner',
        url: '/images/adaptive.jpeg',
        github: 'https://github.com/Painite69/adaptive-public',
        status: 'in-progress', // 'live' or 'in-progress'
        isImage: true,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Next.js', icon: '/stackIcons/nextjs.svg' },
          { name: 'TypeScript', icon: '/stackIcons/typescript.svg' },

          { name: 'Tailwind CSS', icon: '/stackIcons/tailwind.svg' },
          { name: 'Shadcn', icon: '/stackIcons/shadcn.svg' },
          
          { name: 'Supabase', icon: '/stackIcons/supabase.svg' },
          { name: 'PostgreSQL', icon: '/stackIcons/postgresql.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I'm creating this app using Next.Js, React, Typescript and Turbopack for the front end.
            </div>
            <div className="flex items-center gap-2">
              - For styling I'm using Tailwind CSS, Shadcn UI, Lucide React and some custom css modules.
            </div>
            <div className="flex items-center gap-2">
              - I'm also using node.js for backend and supabase for authintication, storage and server-side rendering.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - It has a linked system of tasks, events and goals making productivity attainable.
            </div>
            <div className="flex items-center gap-2">
              - There are Bucket List for future goals and dreams, notes to keep everything .
            </div>
            <div className="flex items-center gap-2">
              - Various themes with the ability to make your own custom theme.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Adaptive scheduling to keep productivity high and achieve more.
            </div>
            <div className="flex items-center gap-2">
              - Connection between goals, tasks and events to keep you on track.
            </div>
            <div className="flex items-center gap-2">
              - Connecting to your google calendar to get your events.
            </div>
          </div>
        ]
      },
      {
        key: 2,
        id: 2,
        name: 'warframedle',
        url: 'https://warframedle.com',
        github: 'https://github.com/Painite69/warframedle-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'React', icon: '/stackIcons/react.svg' },
          { name: 'Vite', icon: '/stackIcons/vite.svg' },
          { name: 'CSS', icon: '/stackIcons/css.svg' },
          { name: 'Firebase', icon: '/stackIcons/firebase.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used React Native and Vite for the front end with custom css for styling.
            </div>
            <div className="flex items-center gap-2">
              - Firebase for functions and realtime database.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - A loldle like game where you have to guess todays answers with given info.
            </div>
            <div className="flex items-center gap-2">
              - 4 games to play, guess warframe, quote, ability and icon.
            </div>
            <div className="flex items-center gap-2">
              - KIM system themed to match the 1999 update.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Daily resets without repetitions to keep the game fresh.
            </div>
            <div className="flex items-center gap-2">
              - Stats and streak to keep you motivated. 
            </div>
            <div className="flex items-center gap-2">
              - Two view modes, fullscreen and windowed to fit most screens and a colorblind mode.
            </div>
          </div>
        ]
      }
    ],
    games: [
      {
        key: 1,
        id: 1,
        name: 'victors game',
        url: 'https://www.hiyume.games/VictorsGame',
        github: 'https://github.com/Painite69/victors-game-public',
        status: 'live',
        isImage: false,
        stack: [
          { name: 'Godot 4.3', icon: '/stackIcons/godot.svg' },
          { name: 'GDScript', icon: '/stackIcons/gdscript.png' },
          { name: 'JSON', icon: '/stackIcons/json.svg' },

          { name: 'iOS', icon: '/stackIcons/ios.svg' },
          { name: 'Android', icon: '/stackIcons/android.svg' }
        ],
        stackText: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - I used Godot 4.3 and GDScript for the game development.
            </div>
            <div className="flex items-center gap-2">
              - JSON for the game data.
            </div>
            <div className="flex items-center gap-2">
              - Godot scene system for the game.
            </div>
          </div>
        ],
        features: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Tile based movement in an endless run with many obstacles to avoid.
            </div>
            <div className="flex items-center gap-2">
              - Coins and material to help you grow and help your peers.
            </div>
            <div className="flex items-center gap-2">
              - Multiple connected characters and more to come from other countries.
            </div>
          </div>
        ],
        technical: [
          <div className="flex flex-col gap-2 text-sm mt-4 p-4 bg-zinc-700/80 rounded-lg">
            <div className="flex items-center gap-2">
              - Endless runner with a unique generation for each run and tileset.
            </div>
            <div className="flex items-center gap-2">
              - Powerups to help you gather more material and navigate through the terrain.
            </div>
            <div className="flex items-center gap-2">
              - Morning, afternoon, evening and night cycles to keep the game interesting.
            </div>
          </div>
        ]
      }
    ]
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <div 
      className="select-none bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-zinc-600 transition-all duration-300 group cursor-pointer"
      onClick={() => {
        setSelectedProject(project);
        setModalActiveTab('stack');
      }}
    >
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
          <Image
            src={project.url}
            alt={`Preview of ${project.name}`}
            width={400}
            height={300}
            className="w-full h-fit object-cover flex justify-center items-start"
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
              onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </a>
              </>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech: StackItem, index: number) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-zinc-300 text-zinc-700 text-xs px-2 py-1 rounded border border-zinc-600"
            >
              <Image 
                src={tech.icon} 
                alt={tech.name}
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Project Modal Component
  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-700 mx-4">
          {/* Modal Header */}
          <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="text-lg sm:text-2xl font-bold text-foreground">
                  {project.name}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X size={18} className="text-foreground sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Project Preview - Same as card */}
          <div className="px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="relative h-64 sm:h-86 bg-zinc-900 rounded-lg overflow-hidden">
              {project.isImage ? (
                <Image
                  src={project.url}
                  alt={`Preview of ${project.name}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover flex justify-center items-center"
                />
              ) : (
                <>
                  <iframe
                    src={project.url}
                    className="w-full h-full scale-[0.4] origin-top-left transform pointer-events-none select-none"
                    style={{ 
                      width: '250%', 
                      height: '250%',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      pointerEvents: 'none',
                      userSelect: 'none'
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
              <span 
                  className={`absolute top-2 sm:top-4 right-2 sm:right-4 cursor-default flex items-center gap-1 text-xs px-2 py-1 rounded-md font-medium ${
                    project.status === 'live' 
                      ? 'bg-gradient-to-tr from-[#132319] from-[0%] to-[#3F5545] to-[100%] border border-[#2D5B3A] text-[#57F483]' 
                      : 'bg-gradient-to-tr from-[#231D13] from-[0%] to-[#554E3F] to-[100%] border border-[#87673A] text-[#DCA631]'
                  }`}
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
            {/* Project URL and Links */}
            <div className="flex items-center justify-between pt-4 sm:pt-6 text-muted-foreground text-sm sm:text-md">
              <div className="flex-1 min-w-0 mr-4">
                <span className="block truncate">
                  {project.isImage ? 'Image Preview' : project.url}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded transition-all duration-200"
                  title="View on GitHub"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
                {!project.isImage && (
                  <>
                    
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded transition-all duration-200"
                      title="Visit site"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} className="sm:w-6 sm:h-6" />
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="px-4 sm:px-6 pb-4 sm:pb-6">
            {/* Tab Navigation */}
            <div className="flex gap-4 sm:gap-8 mb-4 sm:mb-6">
              {['stack', 'features', 'technical'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setModalActiveTab(tab)}
                  className={`cursor-pointer text-base sm:text-lg font-medium transition-all duration-300 relative pb-2 ${
                    modalActiveTab === tab
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                  {modalActiveTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#CAE6A2] to-[#FFFDCF] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[150px] sm:min-h-[200px]">
              {modalActiveTab === 'stack' && (
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: StackItem, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-zinc-300 text-zinc-700 text-xs px-2 py-1 rounded border border-zinc-600"
                      >
                        <Image 
                          src={tech.icon} 
                          alt={tech.name}
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                  {project.stackText.map((item, index) => (
                    <div key={`stack-${index}`}>
                      {item}
                    </div>
                  ))}
                </div>
              )}

              {modalActiveTab === 'features' && (
                <div>
                  {project.features.map((item, index) => (
                    <div key={`features-${index}`}>
                      {item}
                    </div>
                  ))}
                </div>
              )}

              {modalActiveTab === 'technical' && (
                <div>
                  {project.technical.map((item, index) => (
                    <div key={`technical-${index}`}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Mobile Carousel Component using shadcn
  const MobileCarousel = ({ projectList }: { projectList: Project[] }) => {
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
            {projectList.map((project: Project) => (
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
        <div className="mx-auto max-w-5xl py-4 sm:py-8 lg:py-16">
          <div className="text-center relative h-full flex flex-col items-center justify-center">
            {/* Header */}
            <h1 
              className="text-4xl text-white sm:text-6xl mb-12"
              style={{ fontFamily: 'IBMLight' }}
            >
              My <span className="bg-gradient-to-r from-[#CAE6A2] from-[3%] to-[#FFFDCF] to-[70%] bg-clip-text text-transparent">Projects</span>
            </h1>
            <h1 
              className="text-lg text-zinc-300 leading-relaxed pb-6"
              style={{ fontFamily: 'IBMLight' }}
            >
              My work involves working on developing for a purpose, whether humanitarian, entertainment or out of passion, I'll always create to benefit others.
            </h1>

            {/* Section Toggles */}
            <div className="flex justify-start gap-8 mb-12"
                style={{ fontFamily: 'IBMLight' }}>
              {['all', 'sites', 'apps', 'games'].map((section) => (
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
                      {projects[activeSection as keyof typeof projects].map((project: Project ) => (
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
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;