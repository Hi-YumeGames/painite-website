"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Github, 
  Linkedin, 
  Link 
} from "lucide-react";

interface SocialLink {
  label: string;
  href: string;
  icon: any;
  isBootstrapIcon?: boolean;
}

const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yazan-barakat-2354ba37a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/Painite69', icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/painitecoding', icon: Instagram },
  { label: 'X', href: 'https://x.com/painitedev', icon: 'bi bi-twitter-x text-[#f9f9f9]/80', isBootstrapIcon: true },
  { label: 'Facebook', href: 'https://www.facebook.com/painite.2025', icon: Facebook },
  { label: 'TikTok', href: 'https://www.tiktok.com/@painitecode', icon: 'bi bi-tiktok text-[#f9f9f9]/80', isBootstrapIcon: true },
  { label: 'YouTube', href: 'https://www.youtube.com/@painitecode', icon: Youtube }
];

interface SocialMenuProps {
  className?: string;
  iconClassName?: string;
}

const SocialIcon = ({ link, iconClassName = "" }: { link: SocialLink; iconClassName?: string }) => {
  if (link.isBootstrapIcon) {
    // Bootstrap icon
    return (
      <i className={`${link.icon} text-muted-foreground hover:text-primary cursor-pointer ${iconClassName}`}></i>
    );
  } else {
    // Lucide React icon
    const IconComponent = link.icon;
    return (
      <IconComponent
        className={`text-muted-foreground hover:text-primary cursor-pointer w-5 h-5 ${iconClassName}`}
      />
    );
  }
};

const SocialMenu: React.FC<SocialMenuProps> = ({ className = "", iconClassName = "" }) => {
  return (
    <>
      {/* Desktop: show icons inline */}
      <div className={`hidden gap-4 sm:flex ${className}`}>
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex items-center gap-2 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <SocialIcon link={link} iconClassName={iconClassName} />
          </a>
        ))}
      </div>
      {/* Mobile: burger menu */}
      <div className="flex sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open social menu">
              <Link className={`w-5 h-5 text-[#f9f9f9]/80 ${iconClassName}`} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {socialLinks.map((link) => (
              <DropdownMenuItem asChild key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#f9f9f9]/80"
                  style={{ fontFamily: 'IBMLight' }}
                  aria-label={link.label}
                >
                  <SocialIcon link={link} />
                  <span>{link.label}</span>
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default SocialMenu;
