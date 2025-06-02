import { useState, useCallback } from 'react';

interface UseBetaModalReturn {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  scrollToSectionAndOpenModal: () => void;
}

const globalModalState = {
  isOpen: false,
  setIsOpen: null as ((value: boolean) => void) | null,
};

export const useBetaModal = (): UseBetaModalReturn => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Register this component's state setter globally
  globalModalState.setIsOpen = setIsModalOpen;
  globalModalState.isOpen = isModalOpen;

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const scrollToSectionAndOpenModal = useCallback(() => {
    // Find the CTA section and scroll to it
    const ctaSection = document.querySelector('#cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // Open modal after scroll animation
      setTimeout(() => {
        if (globalModalState.setIsOpen) {
          globalModalState.setIsOpen(true);
        }
      }, 1000);
    }
  }, []);

  return {
    isModalOpen,
    openModal,
    closeModal,
    scrollToSectionAndOpenModal,
  };
};

// Export function to be used by other components that don't need the full hook
export const scrollToSectionAndOpenModal = () => {
  const ctaSection = document.querySelector('#cta-section');
  if (ctaSection) {
    ctaSection.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
    
    setTimeout(() => {
      if (globalModalState.setIsOpen) {
        globalModalState.setIsOpen(true);
      }
    }, 1000);
  }
}; 