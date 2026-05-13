# 🦷 Project Roadmap: Warkentin Dental Modern

## Phase 0: Project Setup

**Tech Stack:** Next.js (App Router), Tailwind CSS, Framer Motion, Lucide Icons

**Design Language:** "Medical Modernism"

**Color Palette:**


| Name         | Hex       | Usage               |
| ------------ | --------- | ------------------- |
| Deep Navy    | `#002D5D` | Headers, emphasis   |
| Medical Blue | `#0056B3` | Buttons, icons      |
| Light Azure  | `#F0F4F8` | Section backgrounds |
| Pure White   | `#FFFFFF` | Cleanliness         |
| Slate Black  | `#1A1A1A` | Body text           |


---

## Phase 1: Global Elements & Layout

### Component 1: Sticky Header

- Glassmorphism effect (backdrop-blur + transparency)
- Logo — left
- Nav links — center
- "Termin" CTA button — right
- Mobile: full-screen hamburger menu
- **Check:** Scroll the page — header must stay on top and blur background

### Component 2: Footer

- Navigation links
- Address: Hermannstraße 31, Detmold
- Social media icons
- **Design:** Deep Navy background, White text

---

## Phase 2: Homepage Construction

### Step 1: Hero Section (Modern Lab Focus)

- Split layout — Text Left / Image Right
- Headline: *"Ästhetik & Präzision aus unserem hauseigenen Meisterlabor."*
- High-tech imagery, high-contrast typography

### Step 2: Core Services Grid

- 3-column card grid
- Hover animation — card lifts on hover
- Services: Implantologie, Prothetik, Prophylaxe
- **Check:** Tablets (≤1024px) → 2 columns · Mobile (≤768px) → 1 column

### Step 3: Modernes Labor & Technologie

- Purpose: showcase the clinic's modern technology
- Content: CAD/CAM Design, 3D-Druck, Digitaler Scan
- Design: icons + short technical descriptions, Slate Black text

### Step 4: About & Team Section

- Alternating text/image layout
- Professional photos of the laboratory and office

---

## Phase 3: Contact Form

### Step 5: Contact Section & Map

- Fields: Name, Email, Telefon, Nachricht
- Design: white card on Light Azure background
- Client-side validation (no empty fields)
- **Check:** Click "Send" → show success message (pre-backend)

---

Please implement Phase 4 (Backend Integration) using the Resend API key from my `.env.local` file.

Tasks:

1. Install the `resend` library using npm.

2. Create a Next.js Route Handler in `/app/api/send/route.ts`.

3. Configure the email parameters as follows:

   - FROM: "[onboarding@resend.dev](mailto:onboarding@resend.dev)" (Mandatory for Resend test mode)

   - TO: "[ihnatenkodmytro0@gmail.com](mailto:ihnatenkodmytro0@gmail.com)"

   - REPLY-TO: Use the email address entered by the user in the form.

   - SUBJECT: "Neue Kontaktanfrage: [Patient Name]"

4. Create a clean HTML email template in German. It must display:

   - Name: [User Name]

   - E-Mail: [User Email]

   - Telefon: [User Phone]

   - Nachricht: [User Message]

5. Connect the existing Contact Form component to this API. 

   - Add a 'loading' state to the submit button (disable it while sending).

   - Show a success message in German: "Vielen Dank! Ihre Nachricht wurde erfolgreich versendet."

   - Reset the form fields after a successful submission.

   - Handle errors gracefully with a message: "Etwas ist schief gelaufen. Bitte versuchen Sie es позже."

Ensure the code follows modern React best practices (async/await, try-catch blocks).

---

## Phase 5: Quality Assurance

### Step 7: Responsive Audit

- [x] Test at 320px, 768px, 1024px, 1440px
- [x] Fix horizontal overflow on mobile (`overflow-x-hidden` on body)
- [x] Minimum `padding-x: 20px` on mobile (`px-5` = 20px everywhere)
- [x] Standardize all font sizes across breakpoints
- [x] Header nav visibility fixed (white on hero, navy on scroll)
- [x] Technology image strip padding fixed for 320px
- [x] About section spacing reduced on mobile
- [x] Contact form card padding reduced on small screens

