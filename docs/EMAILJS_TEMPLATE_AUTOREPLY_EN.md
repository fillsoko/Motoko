# EmailJS Template: Auto-Reply EN

## Purpose

English customer confirmation email.

## EmailJS Metadata

- Template name: `Auto-Reply EN`
- To Email: `{{email}}`
- Reply-To: `hallo@motoko.de`
- Subject: `We received your request`

## HTML

```html
<div style="margin:0; padding:24px 12px; background-color:#202020;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px; margin:0 auto; background-color:#0d0d0d; border:1px solid #2a2a2a; border-radius:24px;">
    <tr>
      <td style="padding:22px 24px; border-bottom:1px solid #2a2a2a; font-family:Arial, Helvetica, sans-serif; font-size:28px; line-height:1; font-weight:700; color:#ffffff;">
        motoko
      </td>
    </tr>
    <tr>
      <td style="padding:28px 24px; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:1.75; color:#f5f5f5;">
        <p style="margin:0 0 16px 0;">Hi {{name}},</p>
        <p style="margin:0 0 16px 0;">Thank you for your request and for your interest in Motoko.</p>
        <p style="margin:0 0 16px 0;">We have received your inquiry and will get back to you shortly.</p>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:22px 0; background-color:#181818; border:1px solid #2a2a2a; border-radius:16px;">
          <tr>
            <td style="padding:18px 20px;">
              <p style="margin:0 0 8px 0; font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:#ff6b00;">Summary of your request</p>
              <p style="margin:0 0 8px 0; color:#ffffff;">{{title}}</p>
              <p style="margin:0; color:#b7b7b7;">Bike: {{bike}}<br />Dates: {{rental_from}} to {{rental_to}}<br />Duration: {{rental_days}} days</p>
            </td>
          </tr>
        </table>

        <p style="margin:0 0 16px 0;">If you already shared preferred dates, a specific motorcycle, or any questions, we will address them directly in our reply.</p>
        <p style="margin:24px 0 0 0;">Best regards<br />The Motoko Team</p>
      </td>
    </tr>
  </table>
</div>
```
