import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import SocialMenu from './SocialMenu';
import FooterNavMenu from './FooterNavMenu';

interface FooterProps {
  type: 1 | 2 | 3;
}

const Footer: React.FC<FooterProps> = ({ type }) => {
  // Common navigation links
  const navLinks = ['About', 'Blog', 'Jobs', 'Press', 'Accessibility', 'Partners'];

  if (type === 1) {
    return (
      <footer className="bg-background text-popover py-8">
        <div className="flex items-center justify-between gap-4 px-4">
          <p className="text-sm text-muted-foreground">
            © 2025 PainiteCODE. All rights reserved.
          </p>
          <SocialMenu />
        </div>
      </footer>
    );
  }

  if (type === 2) {
    return (
      <footer className=" bg-background text-popover py-8">

        <div className="hidden flex-col items-center gap-8 sm:flex ">
          <FooterNavMenu />
          <SocialMenu />
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Your Company. All rights reserved.
          </p>
        </div>

        {/* <div className="hidden justify-between px-5 items-center gap-8 sm:flex ">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Your Company. All rights reserved.
          </p>
          <FooterNavMenu />
          <SocialMenu />
        </div> */}
      
        <div className="flex sm:hidden justify-around items-center">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Your Company. All rights reserved.
          </p>
          <FooterNavMenu />
          <SocialMenu />
        </div>

      </footer>
    );
  }

  if (type === 3) {
    return (
      <footer className=" col-start-3 row-start-2 max-2xl:col-span-full max-2xl:col-start-1 @container grid w-full px-4 sm:px-2 bg-background text-popover">
        <div className="mt-5">
          <div className="line-b grid grid-cols-1 gap-x-8 gap-y-10 py-2 @xs:grid-cols-2 @2xl:grid-cols-3 @3xl:grid-cols-4 @4xl:grid-cols-5 @5xl:grid-cols-6">
            <Link href="/" className="flex gap-2 line-y py-2 items-start ">
              <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={60} 
                  height={60}
                  className="cursor-pointer rounded-full"
                  priority
              />
              <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
                  Painite<span>CODE</span>
              </h1>
            </Link>

            {/* Marketing Column */}
            <div>
              <h3 className="text-sm/7 font-semibold cursor-default">Marketing</h3>
              <ul className="mt-4 flex flex-col gap-y-4">
                {['Hero Sections', 'Feature Sections', 'Pricing Sections', 'Header Sections'].map((item, i) => (
                  <li key={i} className="group">
                    <a className="text-sm/7 text-muted-foreground hover:text-popover hover:scale-105" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Application UI Column */}
            <div>
              <h3 className="text-sm/7 font-semibold cursor-default">Application UI</h3>
              <ul className="mt-4 flex flex-col gap-y-4">
                {['Tables', 'Feeds', 'Form Layouts', 'Select Menus'].map((item, i) => (
                  <li key={i} className="group">
                    <a className="text-sm/7 text-muted-foreground hover:text-popover hover:scale-105" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Ecommerce Column */}
            <div>
              <h3 className="text-sm/7 font-semibold cursor-default">Ecommerce</h3>
              <ul className="mt-4 flex flex-col gap-y-4">
                {['Product Overviews', 'Product Lists', 'Category Previews', 'Shopping Carts'].map((item, i) => (
                  <li key={i} className="group">
                    <a className="text-sm/7 text-muted-foreground hover:text-popover hover:scale-105" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Templates Column */}
            <div>
              <h3 className="text-sm/7 font-semibold cursor-default">Templates & UI Kits</h3>
              <ul className="mt-4 flex flex-col gap-y-4">
                {['Catalyst UI Kit', 'Personal Website', 'Landing Page', 'API Reference'].map((item, i) => (
                  <li key={i} className="group">
                    <a className="text-sm/7 text-muted-foreground hover:text-popover hover:scale-105" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-4 pb-5 pt-2 px-5 mt-2 border-t-1 border-muted-foreground">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </p>
          <SocialMenu />
        </div>
      </footer>
    );
  }

  return null;
};

export default Footer;