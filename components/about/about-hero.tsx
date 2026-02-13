'use client';

export function AboutHero() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#1F4D3A] to-[#2A5F4A] text-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center space-y-8">
        <h1 className="text-5xl sm:text-7xl font-playfair font-bold">
          Not All Journeys Change You.
          <br />
          Some Rewrite You.
        </h1>

        <p className="text-xl text-[#DCE9E2] leading-relaxed max-w-2xl mx-auto">
          Trekking is not about reaching summits. It's about who you become on the way there.
        </p>
      </div>
    </section>
  );
}
