# EmailJS Setup

This project uses EmailJS from the browser in [src/components/InquiryWizard.astro](/Users/sokolowskifilip/Library/CloudStorage/OneDrive-TheBostonConsultingGroup,Inc/Documents/01_Private/GudeCode/Motoko/src/components/InquiryWizard.astro).

## Vercel Environment Variables

Add these in Vercel Project Settings -> Environment Variables:

```env
PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=optional_fallback_main_template_id
PUBLIC_EMAILJS_TEMPLATE_ID_DE=your_main_german_inquiry_template_id
PUBLIC_EMAILJS_TEMPLATE_ID_EN=your_main_english_inquiry_template_id
```

Important:

- `PUBLIC_EMAILJS_TEMPLATE_ID_DE` and `PUBLIC_EMAILJS_TEMPLATE_ID_EN` must point to the main inquiry templates.
- Do not put the auto-reply template IDs into those env vars.

## Current Live Template Mapping

These are the template IDs currently intended for production:

```env
PUBLIC_EMAILJS_TEMPLATE_ID_DE=template_hnwwt6c
PUBLIC_EMAILJS_TEMPLATE_ID_EN=template_9wc2drr
```

Linked only inside EmailJS:

- Main Inquiry Template DE: `template_hnwwt6c`
- Main Inquiry Template EN: `template_9wc2drr`
- Auto-Reply DE: `template_q8mczmg`
- Auto-Reply EN: `template_dv1y2xb`

## Recommended EmailJS Template Structure

Create these four templates in EmailJS:

1. `Inquiry DE`
2. `Inquiry EN`
3. `Auto-Reply DE`
4. `Auto-Reply EN`

Then link:

- `Inquiry DE` -> `Auto-Reply DE`
- `Inquiry EN` -> `Auto-Reply EN`

## Current Payload Sent By The Form

The form currently sends these EmailJS template parameters:

```text
to_email
reply_to
from_name
from_email
name
email
title
message
submitted_at
interest
brand
booking
insurance
bike
bike_slug
rental_from
rental_to
rental_days
language
```

## Language Selection

The website chooses the template in this order:

- German site -> `PUBLIC_EMAILJS_TEMPLATE_ID_DE`
- English site -> `PUBLIC_EMAILJS_TEMPLATE_ID_EN`
- Fallback -> `PUBLIC_EMAILJS_TEMPLATE_ID`

Language is detected from:

1. `localStorage.motoko-lang`
2. `<html lang="...">`
3. browser language

## Copy-Ready Template Files

Use these files:

- [EMAILJS_TEMPLATE_INQUIRY_DE.md](/Users/sokolowskifilip/Library/CloudStorage/OneDrive-TheBostonConsultingGroup,Inc/Documents/01_Private/GudeCode/Motoko/docs/EMAILJS_TEMPLATE_INQUIRY_DE.md)
- [EMAILJS_TEMPLATE_INQUIRY_EN.md](/Users/sokolowskifilip/Library/CloudStorage/OneDrive-TheBostonConsultingGroup,Inc/Documents/01_Private/GudeCode/Motoko/docs/EMAILJS_TEMPLATE_INQUIRY_EN.md)
- [EMAILJS_TEMPLATE_AUTOREPLY_DE.md](/Users/sokolowskifilip/Library/CloudStorage/OneDrive-TheBostonConsultingGroup,Inc/Documents/01_Private/GudeCode/Motoko/docs/EMAILJS_TEMPLATE_AUTOREPLY_DE.md)
- [EMAILJS_TEMPLATE_AUTOREPLY_EN.md](/Users/sokolowskifilip/Library/CloudStorage/OneDrive-TheBostonConsultingGroup,Inc/Documents/01_Private/GudeCode/Motoko/docs/EMAILJS_TEMPLATE_AUTOREPLY_EN.md)
