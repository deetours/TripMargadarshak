'use client';

import { useBooking } from '@/lib/context/booking-context';

export function StepFitness() {
  const { step2, setStep2, setStep } = useBooking();

  const fitnessLevels = [
    {
      level: 'beginner',
      title: 'Beginner',
      description: 'New to trekking or hiking',
    },
    {
      level: 'intermediate',
      title: 'Intermediate',
      description: 'Some hiking experience, regular exercise',
    },
    {
      level: 'advanced',
      title: 'Advanced',
      description: 'Experienced trekker, high fitness level',
    },
  ];

  const canProceed = step2.fitnessLevel && step2.trekExperience;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-trek-forest">Fitness & Experience</h2>
        <p className="text-slate-600">Help us understand your background so we can support you better.</p>
      </div>

      {/* Fitness Level */}
      <div className="space-y-4">
        <label className="font-bold text-trek-forest block">Your Fitness Level</label>
        <div className="space-y-3">
          {fitnessLevels.map((level) => (
            <button
              key={level.level}
              onClick={() => setStep2({ ...step2, fitnessLevel: level.level as any })}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                step2.fitnessLevel === level.level
                  ? 'border-trek-forest bg-trek-forest/10'
                  : 'border-trek-dust hover:border-trek-forest/30'
              }`}
            >
              <h3 className="font-bold text-trek-forest">{level.title}</h3>
              <p className="text-sm text-slate-600">{level.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Trek Experience */}
      <div className="space-y-3">
        <label className="font-bold text-trek-forest block">Previous Trek Experience (if any)</label>
        <textarea
          placeholder="Tell us about any trekking or hiking you've done before..."
          value={step2.trekExperience || ''}
          onChange={(e) => setStep2({ ...step2, trekExperience: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-trek-dust focus:border-trek-forest outline-none focus:ring-2 focus:ring-trek-forest/10"
          rows={4}
        />
      </div>

      {/* Medical Conditions */}
      <div className="space-y-3">
        <label className="font-bold text-trek-forest block">Any Medical Conditions? (Optional)</label>
        <textarea
          placeholder="Let us know about any health conditions we should be aware of..."
          value={step2.medicalConditions || ''}
          onChange={(e) => setStep2({ ...step2, medicalConditions: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-trek-dust focus:border-trek-forest outline-none focus:ring-2 focus:ring-trek-forest/10"
          rows={3}
        />
      </div>

      {/* Allergies */}
      <div className="space-y-3">
        <label className="font-bold text-trek-forest block">Allergies or Dietary Restrictions? (Optional)</label>
        <textarea
          placeholder="Let us know about food allergies or dietary preferences..."
          value={step2.allergies || ''}
          onChange={(e) => setStep2({ ...step2, allergies: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-trek-dust focus:border-trek-forest outline-none focus:ring-2 focus:ring-trek-forest/10"
          rows={3}
        />
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          onClick={() => setStep(1)}
          className="flex-1 px-6 py-3 rounded-lg border-2 border-trek-forest text-trek-forest font-bold hover:bg-trek-dust transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => setStep(3)}
          disabled={!canProceed}
          className={`flex-1 px-6 py-3 rounded-lg font-bold text-white transition-colors ${
            canProceed
              ? 'bg-trek-forest hover:bg-trek-forest/90'
              : 'bg-slate-300 cursor-not-allowed'
          }`}
        >
          Continue to Gear
        </button>
      </div>
    </div>
  );
}
