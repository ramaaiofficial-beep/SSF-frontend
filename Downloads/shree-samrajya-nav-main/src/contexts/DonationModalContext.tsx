import { createContext, useContext, useState, ReactNode } from "react";

interface DonationModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setOpen: (open: boolean) => void;
}

const DonationModalContext = createContext<DonationModalContextType | undefined>(undefined);

export const useDonationModal = () => {
  const context = useContext(DonationModalContext);
  if (!context) {
    throw new Error("useDonationModal must be used within DonationModalProvider");
  }
  return context;
};

interface DonationModalProviderProps {
  children: ReactNode;
}

export const DonationModalProvider = ({ children }: DonationModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const setOpen = (open: boolean) => setIsOpen(open);

  return (
    <DonationModalContext.Provider value={{ isOpen, openModal, closeModal, setOpen }}>
      {children}
    </DonationModalContext.Provider>
  );
};

