'use client';

export function AboutPhilosophy() {
  return (
    <section className="py-32 bg-[#F3F8F4]">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl font-playfair font-bold text-[#1F4D3A] mb-12 leading-tight">
          The mountain does not measure strength.
          <br />
          It measures awareness.
        </h2>

        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <p>
            It asks only one thing from you: <span className="text-[#1F4D3A] font-bold">Listen.</span>
          </p>

          <div className="space-y-4">
            <p>To wind.</p>
            <p>To silence.</p>
            <p>To your own breath.</p>
          </div>

          <div className="pt-8 border-t border-[#E3EFE8]">
            <p>
              Every trek is an invitation to slow down, to observe, to rediscover yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
