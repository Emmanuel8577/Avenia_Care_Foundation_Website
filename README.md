# Larger Than I — NGO & Community Support Platform

A modern, accessible, and responsive web platform engineered for **Larger Than I**, a non-governmental organization dedicated to providing inclusive care, community support, and resources for children with special needs.

---

## 🚀 Key Features

* **Dynamic Subpage Routing**: Optimized Next.js App Router structure handling dynamic `[id]` paths for individual projects and events smoothly.
* **Interactive Volunteer & Donation Portals**: Built-in modal dialogs and dedicated workflows to boost community engagement and support.
* **Responsive Modern UI**: Styled using Tailwind CSS with clean micro-interactions, responsive grids, and accessible components.
* **Event & Impact Tracking**: Dynamic showcases for ongoing campaigns, community milestones, awards, and key metrics.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18+)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons & Assets**: Custom SVG Icons & Next.js `Image` optimization
* **Language**: TypeScript

---

## 📁 Project Structure

```text
├── app/
│   ├── about/          # About page & team showcase
│   ├── events/
│   │   └── [id]/       # Dynamic event details page
│   ├── projects/
│   │   └── [id]/       # Dynamic project showcase page
│   ├── donate/         # Donation workflow page
│   ├── contact/        # Contact form page
│   └── layout.tsx      # Root layout & global providers
├── components/
│   ├── AnimatedSection.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── VolunteerModal.tsx
├── public/             # Static images and assets
└── README.md
🏁 Getting Started Locally
Prerequisites
Ensure you have Node.js (v18+) and npm/yarn installed.

Installation
Clone the repository:

Bash
git clone [https://github.com/your-username/larger-than-i.git](https://github.com/your-username/larger-than-i.git)
cd larger-than-i
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Access the application:
Open http://localhost:3000 in your browser.

⚡ Key Scripts
npm run dev — Starts the local Next.js development server.

npm run build — Generates an optimized production build.

npm run start — Runs the compiled production server.

npm run lint — Runs ESLint checks across the project codebase.

📄 License
Distributed under the MIT License. See LICENSE for details.
