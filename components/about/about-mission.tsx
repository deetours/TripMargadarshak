'use client';

export function AboutMission() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="space-y-12">
          {/* Belief statement */}
          <div className="space-y-4">
            <h2 className="text-4xl font-playfair font-bold text-[#1F4D3A]">
              Why We Exist
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Trip Margadarshak exists to create trekking journeys that transform people.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We design experiences where adventure meets meaning, where landscapes become teachers, 
              and where trekkers leave with stories that stay for life.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#1F4D3A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">◆</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-[#1F4D3A]">
                Quality Over Quantity
              </h3>
              <p className="text-slate-600">
                We keep groups small so every trek feels personal, safe, and deeply connected to the landscape.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#1F4D3A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">◆</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-[#1F4D3A]">
                Storytelling First
              </h3>
              <p className="text-slate-600">
                Our guides don't just lead routes. They translate mountains, cultures, and hidden histories.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#1F4D3A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">◆</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-[#1F4D3A]">
                Safety & Sustainability
              </h3>
              <p className="text-slate-600">
                From altitude protocols to waste management, we protect both people and places.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
