'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BookingStep1, BookingStep2, BookingStep3, BookingStep4 } from '../types';

interface BookingContextType {
  step: number;
  setStep: (step: number) => void;
  step1: Partial<BookingStep1>;
  setStep1: (data: Partial<BookingStep1>) => void;
  step2: Partial<BookingStep2>;
  setStep2: (data: Partial<BookingStep2>) => void;
  step3: Partial<BookingStep3>;
  setStep3: (data: Partial<BookingStep3>) => void;
  step4: Partial<BookingStep4>;
  setStep4: (data: Partial<BookingStep4>) => void;
  resetBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  const [step1, setStep1] = useState<Partial<BookingStep1>>({});
  const [step2, setStep2] = useState<Partial<BookingStep2>>({});
  const [step3, setStep3] = useState<Partial<BookingStep3>>({});
  const [step4, setStep4] = useState<Partial<BookingStep4>>({});

  const resetBooking = () => {
    setStep(1);
    setStep1({});
    setStep2({});
    setStep3({});
    setStep4({});
  };

  return (
    <BookingContext.Provider
      value={{
        step,
        setStep,
        step1,
        setStep1,
        step2,
        setStep2,
        step3,
        setStep3,
        step4,
        setStep4,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
}
