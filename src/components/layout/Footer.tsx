import { Facebook, Instagram, Twitter, Smartphone, Phone } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { SocialLink } from '../../types';

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: '#',
    icon: <Facebook size={20} />
  },
  {
    name: 'Instagram',
    href: '#',
    icon: <Instagram size={20} />
  },
  {
    name: 'Twitter',
    href: '#',
    icon: <Twitter size={20} />
  }
];

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-100 dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-secondary-600 dark:text-secondary-400 max-w-md">
              Mekonet is revolutionizing car maintenance in Nigeria by connecting car owners with trusted mechanics nearby.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <Smartphone className="text-primary-600 dark:text-primary-500" size={20} />
              <p className="text-secondary-700 dark:text-secondary-300 font-medium">
                Mobile App <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-0.5 rounded-full ml-2">Coming Soon</span>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Connect With Us</h3>
            
            {/* Contact Information */}
            <div className="flex items-center mb-6 text-secondary-600 dark:text-secondary-400">
              <Phone size={20} className="mr-2 text-primary-600 dark:text-primary-500" />
              <span>For inquiries: </span>
              <a 
                href="tel:+2347067238196" 
                className="ml-2 font-semibold hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
              >
                +234 706 723 8196
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-500 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <p className="mt-6 text-secondary-500 dark:text-secondary-400">
              &copy; {year} Mekonet. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}