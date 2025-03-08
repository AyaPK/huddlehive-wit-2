import React, { createContext, useContext, useState } from 'react';

type SignupContextType = {
  signedUpEvents: string[];
  signUpForEvent: (eventId: string) => void;
  isSignedUp: (eventId: string) => boolean;
};

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [signedUpEvents, setSignedUpEvents] = useState<string[]>([]);

  const signUpForEvent = (eventId: string) => {
    setSignedUpEvents(prev => [...prev, eventId]);
  };

  const isSignedUp = (eventId: string) => {
    return signedUpEvents.includes(eventId);
  };

  return (
    <SignupContext.Provider value={{ signedUpEvents, signUpForEvent, isSignedUp }}>
      {children}
    </SignupContext.Provider>
  );
}

export function useSignupState() {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error('useSignupState must be used within a SignupProvider');
  }
  return context;
}
