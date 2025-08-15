"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const navigationLinks = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <header className="relative flex items-center justify-between
        h-fit w-full bg-popover pt-3 px-3 sm:px-8 sm:pt-8"
        style={{
            
        }}
    >
        <Link href="/" className="flex items-end gap-2">
            <h1 className="flex flex-col pb-1 text-lg sm:text-2xl font-semibold leading-6"
                style={{
                    fontFamily: 'IBMRegular'
                }}
            >
                PAINITE
                <span className="text-xl sm:text-2xl bg-gradient-to-r from-[#CAE6A2] from-[3%] to-[#FFFDCF] to-[70%] bg-clip-text text-transparent pt-1 pb-4"
                    style={{
                        fontFamily: 'IBMBold'
                    }}
                >
                    CODE
                </span>
            </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-4 text-2xl"
            style={{
                fontFamily: 'IBMRegular'
            }}
        >
            {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} className="relative pb-2">
                    <span className={`transition-colors ${
                        pathname === link.href 
                            ? 'text-primary' 
                            : 'text-muted-foreground hover:text-primary'
                    }`}>
                        {link.label}
                    </span>
                    {pathname === link.href && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#CAE6A2] to-[#FFFDCF] rounded-full"></div>
                    )}
                </Link>
            ))}
        </div>

        <div className="hidden w-35 sm:flex items-center gap-4">
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden">
            <Button 
                variant="ghost" 
                size="icon" 
                className="relative z-50 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle menu</span>
            </Button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    
                    {/* Menu Panel */}
                    <div className="fixed top-0 right-0 h-full w-[280px] bg-popover border-l border-border z-50 shadow-lg transform transition-transform duration-300 ease-in-out">
                        <div className="flex flex-col p-6 pt-20">
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                className="relative z-50 left-50 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-4 mb-8"
                                style={{
                                    fontFamily: 'IBMRegular'
                                }}
                            >
                                {navigationLinks.map((link) => (
                                    <Link 
                                        key={link.href} 
                                        href={link.href}
                                        className="relative py-3 border-b border-border/50 last:border-b-0 cursor-pointer"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className={`text-lg font-medium transition-colors ${
                                            pathname === link.href 
                                                ? 'text-primary' 
                                                : 'text-muted-foreground hover:text-primary'
                                        }`}>
                                            {link.label}
                                        </span>
                                        {pathname === link.href && (
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#CAE6A2] to-[#FFFDCF] rounded-full"></div>
                                        )}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </div>

    </header>
  )
}

export default Header