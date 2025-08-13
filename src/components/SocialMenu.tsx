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
  Twitter, 
  Youtube, 
  Github, 
  Linkedin, 
  MessageCircle, 
  Link 
} from "lucide-react";

const socialLinks = [
  { href: "https://www.facebook.com/", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com/", icon: Twitter, label: "Twitter" },
  { href: "https://www.youtube.com/", icon: Youtube, label: "YouTube" },
  { href: "https://github.com/", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.tiktok.com/", icon: MessageCircle, label: "TikTok" },
  { href: "https://www.whatsapp.com/", icon: MessageCircle, label: "WhatsApp" },
];

interface SocialMenuProps {
  className?: string;
  iconClassName?: string;
}

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
          >
            <link.icon
              className={`text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer w-5 h-5 ${iconClassName}`}
            />
          </a>
        ))}
      </div>
      {/* Mobile: burger menu */}
      <div className="flex sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open social menu">
              <Link className={`w-5 h-5 ${iconClassName}`} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {socialLinks.map((link) => (
              <DropdownMenuItem asChild key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
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
