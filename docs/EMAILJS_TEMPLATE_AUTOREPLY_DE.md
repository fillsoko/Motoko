# EmailJS Template: Auto-Reply DE

## Purpose

German customer confirmation email.

## EmailJS Metadata

- Template name: `Auto-Reply DE`
- To Email: `{{email}}`
- Reply-To: `hallo@motoko.de`
- Subject: `Wir haben deine Anfrage erhalten`

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
        <p style="margin:0 0 16px 0;">Hallo {{name}},</p>
        <p style="margin:0 0 16px 0;">vielen Dank fuer deine Anfrage und dein Interesse an Motoko.</p>
        <p style="margin:0 0 16px 0;">Wir haben deine Nachricht erhalten und melden uns in Kuerze bei dir.</p>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:22px 0; background-color:#181818; border:1px solid #2a2a2a; border-radius:16px;">
          <tr>
            <td style="padding:18px 20px;">
              <p style="margin:0 0 8px 0; font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:#ff6b00;">Zusammenfassung deiner Anfrage</p>
              <p style="margin:0 0 8px 0; color:#ffffff;">{{title}}</p>
              <p style="margin:0; color:#b7b7b7;">Bike: {{bike}}<br />Zeitraum: {{rental_from}} bis {{rental_to}}<br />Dauer: {{rental_days}} Tage</p>
            </td>
          </tr>
        </table>

        <p style="margin:0 0 16px 0;">Wenn du bereits Wunschtermine, ein bestimmtes Motorrad oder Fragen angegeben hast, gehen wir in unserer Antwort direkt darauf ein.</p>
        <p style="margin:24px 0 0 0;">Viele Gruesse<br />Das Motoko Team</p>
      </td>
    </tr>
  </table>
</div>
```

