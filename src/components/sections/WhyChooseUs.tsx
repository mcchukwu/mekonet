import { Shield, Clock, BadgeCheck, ThumbsUp } from 'lucide-react';
import { Benefit } from '../../types';

const benefits: Benefit[] = [
  {
    title: 'Trusted Mechanics',
    description: 'All mechanics on our platform are verified and vetted for quality service.',
    icon: <Shield className="h-8 w-8 text-primary-600 dark:text-primary-500" />,
  },
  {
    title: 'Quick Response',
    description: 'Get connected to mechanics within minutes, not hours or days.',
    icon: <Clock className="h-8 w-8 text-primary-600 dark:text-primary-500" />,
  },
  {
    title: 'Quality Assurance',
    description: 'We ensure all repairs meet high standards through our review system.',
    icon: <BadgeCheck className="h-8 w-8 text-primary-600 dark:text-primary-500" />,
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'Pay only after your car is fixed to your satisfaction.',
    icon: <ThumbsUp className="h-8 w-8 text-primary-600 dark:text-primary-500" />,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-secondary-50 dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            What makes Mekonet the preferred choice for car owners in Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-sm transition-all hover:shadow-md"
            >
              <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}