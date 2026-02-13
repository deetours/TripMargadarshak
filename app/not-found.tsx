import Link from 'next/link';
import { Mountain } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <Mountain size={64} className="text-trek-forest opacity-50" />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h1 className="font-playfair text-5xl font-bold text-trek-forest">404</h1>
          <p className="text-xl font-bold text-slate-900">Trail Not Found</p>
          <p className="text-slate-600">
            Looks like you&apos;ve wandered off the map. The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 pt-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-trek-forest text-white font-bold hover:bg-trek-forest/90 transition-colors text-center"
          >
            Back to Home
          </Link>
          <Link
            href="/treks"
            className="px-6 py-3 rounded-lg border-2 border-trek-forest text-trek-forest font-bold hover:bg-trek-dust transition-colors text-center"
          >
            Explore Treks
          </Link>
        </div>

        {/* Footer message */}
        <p className="text-sm text-slate-500 italic">
          Every wrong turn in the mountains teaches you something new.
        </p>
      </div>
    </main>
  );
}
