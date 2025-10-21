# TEDx Centralesupelec

[![License: TED](https://img.shields.io/badge/License-TED-red.svg)](https://www.ted.com/)

A modern, interactive website for TEDx Centralesupelec - an independent TEDx event bringing inspiring ideas and innovation to the Centralesupélec community.

**Live at:** [tedxcentralesupelec.com](https://tedxcentralesupelec.com)

## 🎯 Overview

This website showcases the TEDx Centralesupelec event, featuring an interactive interface with smooth animations and a dynamic navigation system. Visitors can discover speakers, view the event schedule, access ticket information, and learn more about becoming a speaker.

## ✨ Features

- **Interactive Navigation**: Dynamic card-based navigation system with smooth animations
- **Animated Background**: Custom WebGL-based gradient blinds effect with mouse interaction
- **Responsive Design**: Fully responsive layout for desktop and mobile devices
- **Multi-page Content**:
  - Speakers directory
  - Event schedule and planning
  - Speaker application
  - Ticket purchasing and pricing
  - Event information
- **Modern Tech Stack**: Built with React and cutting-edge animation libraries

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) 18.2.0
- **Routing**: [React Router DOM](https://reactrouter.com/) 6.30.1
- **Animation**:
  - [GSAP](https://greensock.com/gsap/) 3.13.0 - Professional animation library
  - [OGL](https://ogl.dev/) 1.0.0 - WebGL renderer for graphics
- **UI Components**: [React Icons](https://react-icons.github.io/react-icons/) 5.5.0
- **Build Tool**: [Create React App](https://create-react-app.dev/) (react-scripts 5.0.1)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

## 🚀 Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/JosselinPerret/tedxcentralesupelec.git
   cd tedxcentralesupelec
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm start
```

The application will open at `http://localhost:3000` in your default browser. The page will reload when you make changes.

### Building for Production

Build the application for production:

```bash
npm run build
```

This creates an optimized production build in the `build/` folder. The build script automatically copies the `.htaccess` file needed for proper deployment.

## 📁 Project Structure

```text
tedxcentralesupelec/
├── public/
│   ├── index.html
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── CardNav.js           # Dynamic navigation component
│   │   ├── CardNav.css
│   │   ├── GradientBlinds.js    # Animated background effect
│   │   ├── GradientBlinds.css
│   │   ├── ProfileCard.js
│   │   └── ProfileCard.css
│   ├── pages/
│   │   ├── Conferenciers.js     # Speakers directory
│   │   ├── DevenirSpeaker.js    # Speaker application
│   │   ├── Planning.js          # Event schedule
│   │   ├── Informations.js      # Event information
│   │   ├── Acheter.js           # Ticket purchase
│   │   └── Tarifs.js            # Pricing
│   ├── App.js                   # Main app component
│   ├── App.css
│   ├── index.js
│   └── index.css
├── scripts/
├── build/                       # Production build
├── package.json
└── README.md
```

## 🌐 Site Navigation

- **Home** (`/`): Landing page with event overview
- **Conférenciers** (`/conferenciers`): Speaker profiles
- **Devenir Speaker** (`/devenir-speaker`): Application to become a speaker
- **Planning** (`/planning`): Event schedule
- **Informations** (`/informations`): Event details and information
- **Acheter** (`/acheter`): Ticket purchasing
- **Tarifs** (`/tarifs`): Ticket pricing

## 🚀 Deployment

### Important: .htaccess File

After building and before deploying, ensure the `.htaccess` file is copied to the `build/` directory. The build script should handle this automatically with:

```bash
npm run build
```

The build command includes: `react-scripts build && copyfiles -f public/.htaccess build/`

### Manual Deployment

If deploying manually:

1. Run `npm run build`
2. Ensure `.htaccess` is in the `build/` directory
3. Upload the contents of the `build/` folder to your hosting provider
4. Copy the `.htaccess` file to the deployment directory on the hosting server

## 🧪 Testing

Run tests:

```bash
npm test
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App configuration |

## 🎨 Key Components

### CardNav

Dynamic navigation component with animated cards and smooth transitions. Displays different sections (Speakers, Programme, Billetterie) with nested menu items.

### GradientBlinds

Custom WebGL-based background animation featuring:

- Gradient colors transitioning between red tones
- Mouse-interactive distortion effects
- Animated blind effect with customizable parameters
- Spotlight effect for dynamic lighting

## 📄 License

This event is an independent TEDx event operated under license from TED. For more information, visit [ted.com](https://www.ted.com/).

## 👤 Author

[Josselin Perret](https://github.com/JosselinPerret)

## 📧 Contact

For more information about TEDx Centralesupelec, visit [tedxcentralesupelec.com](https://tedxcentralesupelec.com)

## 🙏 Acknowledgments

- TEDx Centralesupelec organizing team
- All speakers and contributors
- The TED organization for the TEDx program
