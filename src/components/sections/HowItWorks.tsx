import { MessageSquare, MapPin, Wrench } from 'lucide-react';
import { Step } from '../../types';

const steps: Step[] = [
  {
    title: 'Request Help',
    description: 'Tell us about your car issue through our Telegram bot. The more details, the better.',
    icon: <MessageSquare className="h-8 w-8 text-primary-600 dark:text-primary-500" />,
  },
  {
    title: 'Get Matched',
    description: 'We connect you with verified mechanics near your location who can solve your problem.',
    icon: <MapPin className="h-8 w-8 text-primary-600 dark:text-primary-500" />,
  },
  {
    title: 'Get Fixed',
    description: 'The mechanic arrives to fix your car, and you only pay after a successful repair.',
    icon: <Wrench className="h-8 w-8 text-primary-600 dark:text-primary-500" />,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-secondary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Getting your car fixed has never been this simple
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative flex flex-col items-center p-6 rounded-lg bg-secondary-50 dark:bg-secondary-900 transition-transform hover:transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-6">
                {step.icon}
              </div>
              <span className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white font-medium">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}