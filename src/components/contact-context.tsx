"use client";
import { createContext, useContext, useState } from "react";

type ContactState={
    contactShown: boolean;
    setContactShown: React.Dispatch<React.SetStateAction<boolean>>;
  }
export const ContactContext = createContext<ContactState | null>(null)

export function ContactProvider({ children }:{children: React.ReactNode}) {
    const [contactShown, setContactShown] = useState(false);
    return <ContactContext.Provider value={{contactShown, setContactShown}}>{children}</ContactContext.Provider>;
  }

export const useContact = () => {
   const ctx= useContext(ContactContext)
   if (!ctx) {
     throw new Error("useContact must be used within a ContactProvider")
   }
   return ctx
}