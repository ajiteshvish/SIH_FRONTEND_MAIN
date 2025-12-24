# IndiTwin Frontend

A modern React-based frontend application for IndiTwin - an AI-powered digital twin platform for Indian traffic simulation and urban planning. Built to address the unique challenges of Indian road networks and traffic patterns.

## 🚀 Overview

IndiTwin leverages MATLAB, Simulink, Automated Driving Toolbox, RoadRunner, and generative AI to create highly detailed digital twins of Indian road junctions and networks. This frontend provides an intuitive interface for traffic engineers and urban planners to configure, simulate, and analyze traffic scenarios.

### Problem Statement
**ID: 25100** - Accelerating High-Fidelity Road Network Modeling for Indian Traffic Simulations  
**Organization:** MathWorks India Pvt. Ltd.  
**Category:** Software | **Theme:** Transportation & Logistics

## ✨ Features

- **3D Traffic Visualization** - Animated maps with real-time vehicle flows and congestion patterns
- **Scenario Testing** - Safe simulation environment for testing new traffic plans before deployment  
- **Predictive Analytics** - AI-powered forecasting of congestion and bottlenecks
- **Dashboard & Insights** - Comprehensive KPIs and actionable recommendations
- **RoadRunner Integration** - Seamless integration with MathWorks RoadRunner for scene configuration
- **Chat Interface** - AI assistant for natural language traffic scenario creation

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom animations
- **UI Components:** Radix UI primitives with shadcn/ui
- **Routing:** React Router DOM
- **State Management:** TanStack Query
- **3D Graphics:** Spline integration for 3D visualizations
- **Forms:** React Hook Form with Zod validation
- **Markdown:** React Markdown for rich text rendering

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── ChatInterface.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Solution.tsx
│   └── Team.tsx
├── pages/              # Route components
│   ├── Index.tsx       # Landing page with navigation
│   ├── Chat.tsx        # AI chat interface
│   ├── SceneConfig.tsx # RoadRunner scene configuration
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or bun
- RoadRunner (for scene configuration)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd inditwin-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎯 Usage

### 1. Landing Page
- Interactive 3D city visualization
- Navigation between different sections (Home, Solution, Team, Chat)
- "Get Started" button to begin scene configuration

### 2. Scene Configuration
- **RoadRunner Project Path**: Specify your RoadRunner project directory
- **Scene Description**: Describe your traffic scenario in natural language
- **Guidelines**: Built-in RoadRunner usage guidelines and best practices

### 3. AI Chat Interface
- Natural language processing for traffic scenario creation
- Real-time communication with IndiTwin backend
- Markdown support for rich formatting
- Loading animations with contextual messages

### 4. Team & Solution Pages
- Detailed information about the IndiTwin solution
- Team member profiles and expertise
- Problem statement and technical approach

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8000
```

### Tailwind Configuration
The project uses custom Tailwind configuration with:
- Custom color palette for traffic themes
- Gradient utilities
- Animation classes
- Typography plugin

### Vite Configuration
- Path aliases (`@/` points to `src/`)
- React SWC for fast refresh
- Development server on port 8080

## 🎨 Design System

### Colors
- **Primary**: Blue gradient theme
- **Traffic Colors**: Green, amber, red for traffic-specific elements
- **Background**: Dark theme optimized for data visualization

### Components
- Built on Radix UI primitives
- Consistent spacing and typography
- Accessible by default
- Custom animations and transitions

## 🔌 API Integration

The frontend communicates with the IndiTwin backend through:

- **Chat Endpoint**: `POST /chat` - AI conversation interface
- **Scene Configuration**: Passes RoadRunner project details to backend
- **Real-time Updates**: WebSocket support for live simulation data

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Optimized for desktop traffic engineering workflows
- Touch-friendly mobile interface

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Code Quality
- ESLint configuration with React and TypeScript rules
- TypeScript strict mode enabled
- Prettier integration (recommended)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Team

- **Ajitesh Vishwakarma** - Full-Stack Web & WebGL Developer
- **Priyanshu Khare** - AI & Backend Developer  
- **Anurag Jaiswal** - AI & Product Manager
- **Bilal Ahmed** - ML Engineer
- **Samaksh Mandil** - Backend Developer
- **Aana Pandey** - Frontend Developer

## 📄 License

This project is part of the MathWorks India hackathon submission for Problem Statement 25100.

## 🔗 Related Projects

- IndiTwin Backend API
- RoadRunner Scene Generator
- Traffic Simulation Engine

---

**IndiTwin** - Revolutionizing Indian traffic simulation through AI-powered digital twins.
