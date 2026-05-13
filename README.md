# Kinmen Ludao Hotel (金門陸島酒店)

A modern, responsive, Single Page Application (SPA) built for the Kinmen Ludao Hotel. This project is a complete rewrite and modernization of the hotel's legacy website, engineered to deliver a lightning-fast, premium user experience.

## 🌟 Features

- **Blazing Fast Performance:** Powered by React + Vite for instant page loads and seamless navigation.
- **Dynamic Multilingual Support (i18n):** Global state context allowing instant switching between Traditional Chinese (中文) and English without page reloads.
- **Fluid UI & Animations:** Utilizes modern CSS variables, glassmorphism, smooth scrolling, and page transition animations (`react-router-dom` synchronized with CSS keyframes).
- **Fully Responsive Design:** Custom media queries and intelligent CSS Grids (`auto-fit`, `minmax`) ensure the site looks flawless on desktop, tablet, and mobile devices.
- **Modern Routing:** Implements `react-router-dom` for true SPA architecture, replacing traditional hard reloads with dynamic DOM updates.
- **Lightbox Gallery:** Integrated custom React Portals for modal image viewing that breaks out of nested stacking contexts.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Media Queries)
- **State Management:** React Context API (Language Context)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iDreal88/kinmen-ludao-hotel.git
cd kinmen-ludao-hotel
```

2. Install the dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for Production:
```bash
npm run build
```
The optimized production bundle will be generated in the `dist` directory, ready to be deployed to Vercel, Netlify, or any static hosting provider.

## 📂 Project Structure
```text
├── public/                 # Static assets (Images, Fonts)
├── src/
│   ├── components/         # Reusable UI components (Header, Footer)
│   ├── context/            # React Context (LanguageProvider)
│   ├── data/               # Data store (Translations, Room details)
│   ├── pages/              # Route components (Home, RoomDetail)
│   ├── App.jsx             # Main application layout and routing
│   ├── main.jsx            # React mounting point
│   └── index.css           # Global styles and responsive design
├── index.html              # Entry HTML file
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 📝 License
© Kinmen Ludao Hotel. All rights reserved.
