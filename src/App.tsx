import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { WhyChooseUs } from './components/sections/WhyChooseUs';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-secondary-950 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;