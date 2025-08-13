"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Bootstrap quick access icon: bi-lightning-charge-fill
// Bootstrap link icon for social: bi-link-45deg

const navLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Jobs" },
  { href: "#", label: "Press" },
  { href: "#", label: "Accessibility" },
  { href: "#", label: "Partners" },
];

interface FooterNavMenuProps {
  className?: string;
  iconClassName?: string;
}

const FooterNavMenu: React.FC<FooterNavMenuProps> = ({ className = "", iconClassName = "" }) => {
  return (
    <>
      {/* Desktop: show links inline */}
      <nav className={`hidden sm:flex flex-wrap justify-center gap-4 ${className}`}>
        {navLinks.map((item, i) => (
          <a key={i} href={item.href} className="text-sm text-muted-foreground hover:text-popover hover:scale-105">
            {item.label}
          </a>
        ))}
      </nav>
      {/* Mobile: burger menu */}
      <div className="flex sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Quick access menu">
              <i className={`bi bi-box-arrow-up-right text-lg ${iconClassName}`} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {navLinks.map((item, i) => (
              <DropdownMenuItem asChild key={i}>
                <a href={item.href} className="flex items-center gap-2 text-sm">
                  {item.label}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default FooterNavMenu;
