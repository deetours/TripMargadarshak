'use client';

export function BeliefStatement() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="space-y-8 text-center">
          {/* Main belief */}
          <p className="text-4xl sm:text-5xl font-playfair text-[#1F4D3A] leading-tight">
            We believe mountains are not conquered.
            <br />
            They are experienced.
            <br />
            Felt. Respected. Remembered.
          </p>

          {/* Supporting belief */}
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Every trail is a story. Every step is a conversation between you and the wild.
            <br />
            Trekking is not escape. It is return.
          </p>

          {/* Return statement */}
          <div className="pt-8 space-y-3 text-lg text-[#3F7A5C] font-medium">
            <p>Return to breath.</p>
            <p>Return to effort.</p>
            <p>Return to attention.</p>
          </div>

          {/* Closing line */}
          <p className="text-lg text-slate-600 pt-8 italic">
            Mountains don't speak loudly.
            <br />
            They change you quietly.
          </p>
        </div>
      </div>
    </section>
  );
}
