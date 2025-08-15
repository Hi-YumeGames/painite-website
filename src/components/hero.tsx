'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface ContributionDay {
  date: string
  contributionCount: number
  color: string
}

interface GitHubActivityProps {
  className?: string
}

function GitHubActivityBackground({ className = '' }: GitHubActivityProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [loading, setLoading] = useState(true)
  const [totalContributions, setTotalContributions] = useState(0)

  const generateMockData = useCallback(() => {
    console.log('Generating mock contribution data')
    const mockData: ContributionDay[] = []
    const today = new Date()
    let total = 0
    
    // Use a seed for consistent data across refreshes
    const seed = 12345
    let random = seed

    // Simple seeded random function for consistent results
    const seededRandom = () => {
      random = (random * 9301 + 49297) % 233280
      return random / 233280
    }

    // Generate last 52 weeks of data (364 days)
    for (let i = 363; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      
      const contributionCount = Math.floor(seededRandom() * 8) // 0-7 contributions
      total += contributionCount
      
      const color = getContributionColor(contributionCount)
      console.log(`Day ${i}: ${contributionCount} contributions, color: ${color}`)
      
      mockData.push({
        date: date.toISOString().split('T')[0],
        contributionCount,
        color: color
      })
    }

    console.log(`Generated ${mockData.length} mock days, total: ${total} contributions`)
    setContributions(mockData)
    setTotalContributions(total)
  }, [])

  const fetchGitHubActivity = useCallback(async () => {
    try {
      const response = await fetch('/api/github-activity')
      
      if (!response.ok) {
        console.log('API response not ok, using fallback data')
        generateMockData()
        return
      }
      
      const text = await response.text()
      if (!text) {
        console.log('Empty response, using fallback data')
        generateMockData()
        return
      }
      
      const data = JSON.parse(text)
      
      if (data.contributions && data.contributions.length > 0) {
        console.log(`Loaded ${data.contributions.length} contribution days`)
        setContributions(data.contributions)
        setTotalContributions(data.totalContributions || 0)
      } else {
        console.log('No contributions data, using fallback')
        generateMockData()
      }
    } catch (error) {
      console.error('Error fetching GitHub activity:', error)
      // Generate consistent mock data for development/fallback
      generateMockData()
    } finally {
      setLoading(false)
    }
  }, [generateMockData])

  useEffect(() => {
    fetchGitHubActivity()
  }, [fetchGitHubActivity])



  const getContributionColor = (count: number): string => {
    if (count === 0) return '#2d2d2d'
    if (count <= 2) return '#4a5a3a'
    if (count <= 4) return '#6a7a4f'
    if (count <= 6) return '#8a9a6b'
    return '#aaba88'
  }

  const getWeeksArray = () => {
    const weeks: ContributionDay[][] = []
    let currentWeek: ContributionDay[] = []

    contributions.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay()
      
      if (index === 0) {
        // Fill empty days at the start of first week
        for (let i = 0; i < dayOfWeek; i++) {
          currentWeek.push({
            date: '',
            contributionCount: 0,
            color: '#2d2d2d'
          })
        }
      }

      currentWeek.push(day)

      if (dayOfWeek === 6 || index === contributions.length - 1) {
        // Fill empty days at the end of last week
        while (currentWeek.length < 7 && index === contributions.length - 1) {
          currentWeek.push({
            date: '',
            contributionCount: 0,
            color: '#2d2d2d'
          })
        }
        weeks.push(currentWeek)
        currentWeek = []
      }
    })

    return weeks
  }

  if (loading) {
    return (
      <div className={`absolute inset-0 opacity-15 overflow-hidden ${className}`}>
        {/* Loading state with exact same layout as loaded state */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          scale-50 sm:scale-75 md:scale-100 lg:scale-125">
          <div className="grid grid-flow-col gap-0.5 sm:gap-1 p-2 sm:p-4">
            {Array.from({ length: 53 }, (_, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-0.5 sm:gap-1">
                {Array.from({ length: 7 }, (_, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="w-2 h-2 sm:w-3 sm:h-3 bg-[#2d2d2d] rounded-sm animate-pulse"
                    style={{
                      animationDelay: `${(weekIndex * 7 + dayIndex) * 8}ms`,
                      animationDuration: '1.5s'
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          
          {/* Loading stats - same position as loaded state */}
          <div className="absolute -top-6 sm:-top-8 left-0 text-xs text-gray-400 font-mono animate-pulse whitespace-nowrap">
            <span className="hidden sm:inline">Loading contributions...</span>
            <span className="sm:hidden">Loading...</span>
          </div>
          
          {/* Loading legend - same position as loaded state */}
          <div className="absolute -bottom-6 sm:-bottom-8 right-0 flex items-center gap-1 sm:gap-2 text-xs text-gray-400 animate-pulse">
            <span className="hidden sm:inline">Less</span>
            {[0, 1, 3, 5, 7].map((count) => (
              <div
                key={count}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-[#2d2d2d]"
              />
            ))}
            <span className="hidden sm:inline">More</span>
          </div>
        </div>

        {/* Loading scattered squares - same as loaded state */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-sm bg-[#2d2d2d] animate-pulse"
              style={{
                top: `${(i * 23) % 100}%`,
                left: `${(i * 37) % 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  const weeks = getWeeksArray()

  return (
    <div className={`absolute inset-0 opacity-15 overflow-hidden ${className}`}>
      {/* Main contribution graph */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        scale-50 sm:scale-75 md:scale-100 lg:scale-125">
        <div className="grid grid-flow-col gap-0.5 sm:gap-1 p-2 sm:p-4">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-rows-7 gap-0.5 sm:gap-1">
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: day.color,
                    border: 'none',
                    outline: 'none'
                  }}
                  title={day.date ? `${day.contributionCount} contributions on ${day.date}` : ''}
                />
              ))}
            </div>
          ))}
        </div>
        
        {/* Stats overlay */}
        <div className="absolute -top-6 sm:-top-8 left-0 text-xs text-gray-400 font-mono whitespace-nowrap">
          <span className="hidden sm:inline">{totalContributions} contributions in the last year</span>
          <span className="sm:hidden">{totalContributions} contributions</span>
        </div>
        
        {/* Legend */}
        <div className="absolute -bottom-6 sm:-bottom-8 right-0 flex items-center gap-1 sm:gap-2 text-xs text-gray-400">
          <span className="hidden sm:inline">Less</span>
          {[0, 1, 3, 5, 7].map((count) => (
            <div
              key={count}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm"
              style={{ 
                backgroundColor: getContributionColor(count),
                border: 'none',
                outline: 'none'
              }}
            />
          ))}
          <span className="hidden sm:inline">More</span>
        </div>
      </div>

      {/* Additional scattered contribution squares for visual depth */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }, (_, i) => {
          const randomIndex = Math.floor((i * 17) % contributions.length) // Consistent positioning
          const randomDay = contributions[randomIndex]
          return (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-sm animate-pulse"
              style={{
                backgroundColor: randomDay?.color || '#2d2d2d',
                top: `${(i * 23) % 100}%`,
                left: `${(i * 37) % 100}%`,
                animationDelay: `${(i * 0.2) % 2}s`,
                animationDuration: `${2 + (i % 3)}s`,
                border: 'none',
                outline: 'none'
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

  

// Updated Hero component with GitHub background
function Hero() {

  function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) {
    const [text, setText] = useState('')
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
      if (index >= words.length) {
        setIndex(0)
        return
      }

      if (!deleting && subIndex === words[index].length) {
        // Wait before deleting
        setTimeout(() => setDeleting(true), pauseTime)
        return
      }

      if (deleting && subIndex === 0) {
        setDeleting(false)
        setIndex(prev => (prev + 1) % words.length)
        return
      }

      const timeout = setTimeout(() => {
        setSubIndex(prev => prev + (deleting ? -1 : 1))
      }, deleting ? deletingSpeed : typingSpeed)

      return () => clearTimeout(timeout)
    }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseTime])

    useEffect(() => {
      setText(words[index].substring(0, subIndex))
    }, [subIndex, index, words])

    return text
  }

  const typingText = useTypingEffect([
    "Hello world, I'm Painite",
    "مرحبا بالعالم، أنا باينيت",
    "안녕하세요 세계, 저는 페이나이트입니다",
    "こんにちは世界、私はペイナイトです"
  ], 50, 50, 1000)

  const isArabic = /[\u0600-\u06FF]/.test(typingText)

  return (
    <div className="bg-[#212121] relative overflow-hidden">
      {/* GitHub Activity Background */}
      <GitHubActivityBackground className="z-0" />
      
      <div className="relative z-10 isolate px-6 lg:px-8">
        <div className="mx-auto py-8 sm:py-16">
          <div className="text-center relative h-full flex flex-col items-center justify-center">
            <h1
              className="flex text-lg pb-4 bg-gradient-to-r from-[#CAE6A2] to-[#FFFDCF] bg-clip-text text-transparent sm:text-6xl "
              style={{
                fontFamily: 'IBMLight, IBMLightAR, IBMLightKR, IBMLightJP',
                whiteSpace: 'nowrap'
              }}
            >
              <span className={`animate-blink ${isArabic ? 'order-1' : 'order-2'}`}>|</span>
              <span className={`${isArabic ? 'order-2' : 'order-1'}`}>{typingText}</span>
            </h1>
            <p 
              className="mt-2 text-sm font-medium text-pretty text-[#F9F9F9] sm:text-4xl sm:mt-8"
              style={{ fontFamily: 'IBMLight' }}
            >
              Simply a <span className="bg-gradient-to-r from-[#CAE6A2] from-[10%] to-[#FFFDCF] to-[70%] bg-clip-text text-transparent">Developer</span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/Yazan Barakat-CV.pdf"
                className="flex items-center gap-2 sm:gap-4 rounded-md px-3 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-black
                  bg-gradient-to-r from-[#CAE6A2] from-[50%] to-[#FFFDCF] to-[100%] 
                  hover:from-[0%] hover:to-[50%] 
                  transform cursor-pointer transition-all duration-300 relative overflow-hidden group/btn
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                style={{ fontFamily: 'IBMRegular' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                <div className="absolute -inset-1 bg-[#CAE6A2]/30 rounded-lg blur-sm -z-10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <Image src="/images/download.svg" alt="Download" width={20} height={20} className="sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm">resumé</span>
              </a>
              <div className="relative rounded-md p-[2px] sm:p-[3px] bg-gradient-to-r from-[#CAE6A2] from-[50%] to-[#FFFDCF] to-[100%] 
                hover:from-[#CAE6A2] hover:from-[0%] hover:to-[#FFFDCF] hover:to-[50%] 
                transition-all duration-300 group/btn overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                <div className="absolute -inset-1 bg-[#CAE6A2]/20 rounded-lg blur-sm -z-10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <a 
                  href="/contact" 
                  className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-[#F9F9F9]
                    rounded-[0.25rem] sm:rounded-[0.375rem] px-2.5 sm:px-3.5 py-1.5 sm:py-1.75 bg-[#212121]
                    transform cursor-pointer transition-all duration-300 relative z-10"
                >
                  <Image src="/images/rocket.svg" alt="Rocket" width={20} height={20} className="sm:w-6 sm:h-6" />
                  <span className="text-xs sm:text-sm">let's build</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;