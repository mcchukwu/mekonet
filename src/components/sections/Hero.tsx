import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useState, useEffect } from 'react';

const backgroundImages = [
  'https://i.imgur.com/zsUTnaF.jpeg',
  'https://i.imgur.com/hKBnfHe.jpeg',
  'https://i.imgur.com/1mTF2NR.jpeg',
  'https://i.imgur.com/0ohOkoN.jpeg',
  'https://i.imgur.com/5KJ3meS.jpeg',
  'https://i.imgur.com/VF3oJwz.jpeg',
  'https://i.imgur.com/uQLqluI.jpeg'
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
          opacity: 0.3,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-white via-white to-transparent dark:from-secondary-950 dark:via-secondary-950 opacity-80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div 
            className="inline-flex items-center bg-primary-50 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 
              text-sm px-4 py-2 rounded-full animate-fade-in shadow-sm dark:shadow-primary-900/20"
          >
            <span className="flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
            </span>
            #1 Car Repair Service in Nigeria
          </div>
          
          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold text-secondary-900 dark:text-white leading-tight animate-slide-up">
            <span className="relative">
              <span className="relative inline-block text-primary-600 dark:text-primary-500">
                Mekonet
              </span>
            </span>
            <br className="hidden sm:block" />
            Find Mechanics.
            <br className="hidden sm:block" />
            Fix Faster.
          </h1>
          
          <p className="mt-8 text-xl sm:text-2xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto animate-slide-up" 
            style={{ animationDelay: '100ms' }}
          >
            Connecting car owners to verified mechanics near them.
          </p>
          
          <div 
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6 animate-slide-up"
            style={{ animationDelay: '200ms' }}
          >
            <Button 
              href="https://t.me/MEKONET_bot/MEKONET"
              variant="primary"
              size="xl"
              external
              className="group shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/20 transition-all duration-300"
            >
              I'm a Car Owner
              <ChevronRight size={24} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdFAl4v3nhlZmiRa6yThCmjAgHssOkkMhwqL8A5okixLWAgBg/viewform"
              variant="outline"
              size="xl"
              external
              className="shadow-sm hover:shadow-md transition-all duration-300"
            >
              I'm a Mechanic
            </Button>
          </div>

          {/* WhatsApp Links */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <a 
              href="https://chat.whatsapp.com/FtKgLI4C2EcHHNVYoi5dtz"
              className="flex items-center px-6 py-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-full transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Join Mechanics Group
            </a>
            <a 
              href="https://chat.whatsapp.com/FtKgLI4C2EcHHNVYoi5dtz"
              className="flex items-center px-6 py-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-full transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Join Updates Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}