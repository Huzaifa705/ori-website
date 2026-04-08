import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message, industry } = body;

    // Graceful check for API Key
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === '<apikey-here>') {
      console.warn("⚠️ Email API Key is not configured. Form details logged to console.");
      console.log("Inquiry Data:", body);
      return NextResponse.json({
        message: 'Dev mode: Details logged to console'
      }, { status: 200 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Group of Companies <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL!,
      replyTo: email,
      subject: `[${industry || 'General'}] Technical Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 40px; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0;">
            <div style="background: #dc2626; padding: 30px; color: white;">
              <h2 style="margin: 0; text-transform: uppercase; letter-spacing: 2px; font-size: 14px;">Technical Inquiry</h2>
              <h1 style="margin: 5px 0 0 0; font-size: 24px;">New Submission Received</h1>
            </div>
            <div style="padding: 30px; color: #1e293b; line-height: 1.6;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
              ${industry ? `<p><strong>Division:</strong> ${industry}</p>` : ''}
              <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 20px 0;" />
              <p><strong>Requirement Details:</strong></p>
              <p style="background: #f1f5f9; padding: 20px; border-radius: 12px; font-style: italic;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <div style="background: #f8fafc; padding: 20px; text-align: center; color: #64748b; font-size: 11px; text-transform: uppercase;">
              Group of Companies | Internal Manufacturing CRM
            </div>
          </div>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ message: 'Inquiry transmitted successfully', data }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Inquiry transmission failed. Please contact us via phone.' }, { status: 500 });
  }
}