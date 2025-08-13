// app/api/github-activity/route.ts
import { NextRequest, NextResponse } from 'next/server'

interface ContributionDay {
  date: string
  contributionCount: number
  color: string
}

const getContributionColor = (count: number): string => {
  if (count === 0) return '#2d2d2d'
  if (count <= 2) return '#3d4f3a'
  if (count <= 4) return '#5a6b4f'
  if (count <= 6) return '#7a8d6b'
  return '#9bb088'
}

export async function GET(request: NextRequest) {
  const token = process.env.GITHUB_TOKEN
  const username = process.env.GITHUB_USERNAME || 'YOUR_USERNAME' // Add your GitHub username to .env.local

  if (!token || !username || username === 'YOUR_USERNAME') {
    console.log('GitHub credentials not configured, using fallback data')
    return getFallbackData()
  }

  try {
    // GraphQL query to get contribution data
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    })

    if (!response.ok) {
      console.log(`GitHub API error: ${response.status} ${response.statusText}`)
      return getFallbackData()
    }

    const data = await response.json()

    if (data.errors) {
      console.log('GraphQL errors:', data.errors)
      return getFallbackData()
    }

    const contributionCalendar = data.data?.user?.contributionsCollection?.contributionCalendar

    if (!contributionCalendar) {
      console.log('No contribution data found')
      return getFallbackData()
    }

    // Flatten the weeks data into a single array
    const contributions: ContributionDay[] = []
    contributionCalendar.weeks.forEach((week: any) => {
      week.contributionDays.forEach((day: any) => {
        contributions.push({
          date: day.date,
          contributionCount: day.contributionCount,
          color: getContributionColor(day.contributionCount)
        })
      })
    })

    return NextResponse.json({
      contributions,
      totalContributions: contributionCalendar.totalContributions,
      source: 'github'
    })

  } catch (error) {
    console.error('Error fetching GitHub activity:', error)
    return getFallbackData()
  }
}

function getFallbackData() {
  // Generate consistent fallback data
  const fallbackData: ContributionDay[] = []
  const today = new Date()
  let totalContributions = 0
  let seed = 12345

  // Seeded random for consistent results
  const seededRandom = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }

  // Generate 364 days of consistent mock data
  for (let i = 363; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    
    const contributionCount = Math.floor(seededRandom() * 8)
    totalContributions += contributionCount
    
    fallbackData.push({
      date: date.toISOString().split('T')[0],
      contributionCount,
      color: getContributionColor(contributionCount)
    })
  }

  return NextResponse.json({
    contributions: fallbackData,
    totalContributions,
    source: 'fallback'
  })
}