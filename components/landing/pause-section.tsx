'use client';

export function PauseSection() {
  return (
    <section className="py-32 px-6 sm:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-trek-dust text-trek-forest text-sm font-medium">
            Philosophy
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-trek-forest">
            Trekking is not just walking. It&apos;s listening.
          </h2>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          In a world of constant noise, the mountains offer silence. In a time of endless rushing, trails teach patience. We believe trekking is a conversation between you and the land. Our guides, our routes, and our philosophies are all designed to help you listen.
        </p>

        <div className="border-t-2 border-trek-forest/20 pt-12 mt-12">
          <p className="text-sm uppercase tracking-widest text-slate-500 font-medium">
            Every step. Every breath. Matters.
          </p>
        </div>
      </div>
    </section>
  );
}
