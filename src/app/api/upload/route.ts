import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log('API endpoint hit - starting request processing')
    
    const { name, email, message } = await request.json()
    console.log('Received form data:', { name, email, message: message?.substring(0, 50) + '...' })

    // Validate input
    if (!name || !email || !message) {
      console.log('Missing required fields:', { name: !!name, email: !!email, message: !!message })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('Invalid sender email format:', email)
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Use hardcoded admin email
    const adminEmail = 'yazanm.barakat@outlook.com'
    console.log('Admin email:', adminEmail)

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    console.log('Resend API key found, proceeding with email send...')
    console.log('Sending email via Resend...')
    console.log('From: send@contact.hiyume.games')
    console.log('To:', adminEmail)
    console.log('ReplyTo:', email)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <send@contact.hiyume.games>', // Update this with your verified domain
      to: [adminEmail], // Use the hardcoded admin email
      replyTo: email, // Add reply-to so admin can easily reply
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; margin-bottom: 20px;">New Contact Form Message</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-top: 0;">Message Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 6px; border-left: 4px solid #7c3aed;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; color: #6b7280; font-size: 14px;">
            <p>This message was sent from your website's contact form.</p>
            <p>Time: ${new Date().toLocaleString()}</p>
            <p style="margin-top: 20px; padding: 10px; background-color: #f0f9ff; border-radius: 6px; border: 1px solid #0ea5e9;">
              💡 <strong>Tip:</strong> You can reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Message

Name: ${name}
Email: ${email}
Message: ${message}

Time: ${new Date().toLocaleString()}

Tip: You can reply directly to this email to respond to ${name}.
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || 'Unknown error'}` },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)
    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Add a GET method for testing
export async function GET() {
  return NextResponse.json({ message: 'Contact API is working!' })
} 