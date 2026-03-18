# EmailJS Template: Inquiry EN

## Purpose

Main internal inquiry email sent to `hallo@motoko.de`.

## EmailJS Metadata

- Template name: `Inquiry EN`
- To Email: `{{to_email}}`
- Reply-To: `{{reply_to}}`
- From Name: `{{from_name}}`
- Subject: `{{title}}`

## HTML

```html
<div style="margin:0; padding:24px 12px; background-color:#202020;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:720px; margin:0 auto; background-color:#0d0d0d; border:1px solid #2a2a2a; border-radius:24px;">
    <tr>
      <td style="padding:22px 24px; border-bottom:1px solid #2a2a2a; font-family:Arial, Helvetica, sans-serif; font-size:28px; line-height:1; font-weight:700; color:#ffffff;">
        motoko
      </td>
    </tr>

    <tr>
      <td style="padding:28px 24px 14px 24px; font-family:Arial, Helvetica, sans-serif;">
        <p style="margin:0 0 10px 0; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:#ff6b00;">
          New inquiry
        </p>
        <h1 style="margin:0; font-size:28px; line-height:1.2; font-weight:700; color:#ffffff;">
          {{title}}
        </h1>
        <p style="margin:14px 0 0 0; font-size:15px; line-height:1.7; color:#b7b7b7;">
          A new request has been submitted through motoko.de.
        </p>
      </td>
    </tr>

    <tr>
      <td style="padding:0 24px 24px 24px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#181818; border:1px solid #2a2a2a; border-radius:18px;">
          <tr>
            <td style="padding:20px;">
              <p style="margin:0 0 6px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#8f8f8f;">Contact</p>
              <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:22px; line-height:1.3; font-weight:700; color:#ffffff;">{{name}}</p>
              <p style="margin:6px 0 0 0; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.6; color:#b7b7b7;">{{submitted_at}}</p>
              <p style="margin:6px 0 0 0; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.6;">
                <a href="mailto:{{email}}" style="color:#ffffff; text-decoration:none;">{{email}}</a>
              </p>
            </td>
          </tr>
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:16px;">
          <tr>
            <td style="padding:0 8px 8px 0; width:50%;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#101010; border:1px solid #262626; border-radius:14px;"><tr><td style="padding:14px 16px;"><p style="margin:0 0 6px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#8f8f8f;">Interest</p><p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.5; color:#ffffff;">{{interest}}</p></td></tr></table></td>
            <td style="padding:0 0 8px 8px; width:50%;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#101010; border:1px solid #262626; border-radius:14px;"><tr><td style="padding:14px 16px;"><p style="margin:0 0 6px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#8f8f8f;">Brand</p><p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.5; color:#ffffff;">{{brand}}</p></td></tr></table></td>
          </tr>
          <tr>
            <td style="padding:8px 8px 8px 0; width:50%;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#101010; border:1px solid #262626; border-radius:14px;"><tr><td style="padding:14px 16px;"><p style="margin:0 0 6px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#8f8f8f;">Bike</p><p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.5; color:#ffffff;">{{bike}}</p></td></tr></table></td>
            <td style="padding:8px 0 8px 8px; width:50%;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#101010; border:1px solid #262626; border-radius:14px;"><tr><td style="padding:14px 16px;"><p style="margin:0 0 6px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#8f8f8f;">Booking</p><p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.5; color:#ffffff;">{{booking}}</p></td></tr></table></td>
          </tr>
          <tr>
            <td style="padding:8px 8px 0 0; width:50%;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#101010; border:1px solid #262626; border-radius:14px;"><tr><td style="padding:14px 16px;"><p style="margin:0 0 6px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#8f8f8f;">Insurance</p><p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.5; color:#ffffff;">{{insurance}}</p></td></tr></table></td>
            <td style="padding:8px 0 0 8px; width:50%;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#101010; border:1px solid #262626; border-radius:14px;"><tr><td style="padding:14px 16px;"><p style="margin:0 0 6px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#8f8f8f;">Language</p><p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.5; color:#ffffff;">{{language}}</p></td></tr></table></td>
          </tr>
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:16px;">
          <tr>
            <td style="padding:0 8px 0 0; width:33.333%;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#101010; border:1px solid #262626; border-radius:14px;"><tr><td style="padding:14px 16px;"><p style="margin:0 0 6px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#8f8f8f;">From</p><p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:15px; color:#ffffff;">{{rental_from}}</p></td></tr></table></td>
            <td style="padding:0 8px; width:33.333%;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#101010; border:1px solid #262626; border-radius:14px;"><tr><td style="padding:14px 16px;"><p style="margin:0 0 6px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#8f8f8f;">To</p><p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:15px; color:#ffffff;">{{rental_to}}</p></td></tr></table></td>
            <td style="padding:0 0 0 8px; width:33.333%;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#101010; border:1px solid #262626; border-radius:14px;"><tr><td style="padding:14px 16px;"><p style="margin:0 0 6px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#8f8f8f;">Days</p><p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:15px; color:#ffffff;">{{rental_days}}</p></td></tr></table></td>
          </tr>
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:16px; background-color:#101010; border:1px solid #262626; border-radius:14px;">
          <tr>
            <td style="padding:16px 18px;">
              <p style="margin:0 0 8px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#ff6b00;">Message</p>
              <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.75; color:#d7d7d7; white-space:pre-line;">{{message}}</p>
            </td>
          </tr>
        </table>

        <p style="margin:16px 0 0 0; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1.7; color:#8f8f8f;">
          Reply-To: {{reply_to}}<br />
          From Email: {{from_email}}<br />
          Bike Slug: {{bike_slug}}<br />
          Recipient: {{to_email}}
        </p>
      </td>
    </tr>
  </table>
</div>
```

