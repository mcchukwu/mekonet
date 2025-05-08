import { Wrench } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="rounded-full bg-primary-600 p-1.5 text-white">
        <Wrench size={20} />
      </div>
      <span className="text-xl font-bold text-secondary-900 dark:text-white">Mekonet</span>
    </div>
  );
}