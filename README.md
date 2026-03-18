# Motoko

Marketing site for `motoko.de`, built with Astro.

## Local development

```sh
npm install
npm run dev
```

## EmailJS setup

The inquiry form in [src/components/InquiryWizard.astro](/Users/sokolowskifilip/Library/CloudStorage/OneDrive-TheBostonConsultingGroup,Inc/Documents/01_Private/GudeCode/Motoko/src/components/InquiryWizard.astro) sends submissions through EmailJS and is intended to deliver the main inquiry to `hallo@motoko.de`.

1. Copy `.env.example` to `.env`.
2. Fill in:
   `PUBLIC_EMAILJS_PUBLIC_KEY`
   `PUBLIC_EMAILJS_SERVICE_ID`
   `PUBLIC_EMAILJS_TEMPLATE_ID`
   `PUBLIC_EMAILJS_TEMPLATE_ID_DE`
   `PUBLIC_EMAILJS_TEMPLATE_ID_EN`
3. In EmailJS, connect the mailbox/service that should send mail for Motoko.
4. Create the EmailJS templates and set the recipient to `hallo@motoko.de`.
5. The form selects the German or English template automatically based on the active website language, with `PUBLIC_EMAILJS_TEMPLATE_ID` as fallback.
6. Make sure the template uses these variables:
   `name`
   `email`
   `from_name`
   `from_email`
   `reply_to`
   `title`
   `message`
   `submitted_at`
   `interest`
   `brand`
   `booking`
   `insurance`
   `bike`
   `bike_slug`
   `to_email`
7. If you want EmailJS-managed confirmations, create matching auto-reply templates with `To Email = {{email}}` and `Reply-To = hallo@motoko.de`.
8. In each main template, open the `Auto-Reply` tab and link the matching German or English auto-reply template.

EmailJS docs used for this setup:
- https://www.emailjs.com/docs/rest-api/send/
- https://www.emailjs.com/docs/user-guide/auto-reply/
- https://www.emailjs.com/docs/tutorial/prepare-auto-reply-template/
