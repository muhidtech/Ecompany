![My Logo](./public/ecompany.png)

# Ecompany

A modern company website built with Next.js, React, and Tailwind CSS. This project is a multi-page application featuring a sliding Hero section, detailed About, Services, Portfolio, Pricing, and Contact pages. It is designed to showcase the company's digital offerings including Mobile App Development, Web Development, Software Development, UI/UX Design, and more.

## Live Demo

[Live Demo URL](https://ecompanys.netlify.app)

## Features

- **Modern Design:** Elegant, responsive UI with a dynamic hero slider.
- **Multi-Page Structure:** Includes Home, About, Service, Portfolio, Pricing, and Contact sections.
- **Interactive Components:** Includes dynamic sliders, form inputs, and animations.
- **Optimized Performance:** Built with Next.js for improved performance and SEO.
- **Technologies:**
  - Next.js
  - React
  - Tailwind CSS
  - TypeScript

## Getting Started

Follow the steps below to get the project up and running on your local machine:

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/muhidtech/Ecompany.git
   cd Ecompany
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Navigate to the `ecompany` directory and install its dependencies:

   ```bash
   cd ecompany
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

or depending on your package manager:

```bash
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Project Structure

```
├── package.json
├── README.md           // This file 
└── ecompany
    ├── package.json
    ├── README.md      // Next.js app default README
    ├── app
    │   ├── page.tsx   // Home page
    │   ├── layout.tsx
    │   ├── globals.css
    │   ├── about
    │   │   └── page.tsx
    │   ├── contact
    │   │   └── page.tsx
    │   ├── portfolio
    │   │   └── page.tsx
    │   ├── price
    │   │   └── page.tsx
    │   ├── service
    │   │   └── page.tsx
    │   └── components
    │       ├── Hero.tsx
    │       ├── About.tsx
    │       ├── Service.tsx
    │       ├── Pricing.tsx
    │       ├── Portfolio.tsx
    │       ├── Contact.tsx
    │       ├── CallToAction.tsx
    │       ├── NavBar.tsx
    │       ├── Skills.tsx
    │       └── Footer.tsx
```

## Deployment

The easiest way to deploy this Next.js application is to use the Vercel Platform. For more details, refer to the Next.js deployment documentation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.