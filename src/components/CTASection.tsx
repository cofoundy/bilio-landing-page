
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageSquare } from "lucide-react";
import { useBetaModal } from "@/hooks/useBetaModal";

const CTASection = () => {
  const { isModalOpen, openModal, closeModal } = useBetaModal();
  const [iframeKey, setIframeKey] = React.useState(0);

  useEffect(() => {
    // Reload iframe when modal opens to ensure proper loading
    if (isModalOpen) {
      setIframeKey(prev => prev + 1);
    }
  }, [isModalOpen]);

  return (
    <section id="cta-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-spendly-blue to-spendly-green rounded-3xl overflow-hidden shadow-xl">
          <div className="relative p-12 md:p-16">
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white opacity-10 rounded-full"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¡Empieza a controlar tus finanzas hoy mismo!
                </h2>
                <p className="text-white/90 text-lg max-w-lg">
                  Únete a la beta privada de Spendly y sé de los primeros en experimentar una nueva forma de manejar tu dinero.
                </p>
              </div>
              
              <div>
                <Button 
                  onClick={openModal}
                  className="bg-white text-spendly-blue hover:bg-white/90 hover:text-spendly-blue text-lg py-6 px-8 flex items-center space-x-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Únete a la beta privada</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with Tally Form */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-3xl max-h-[95vh] overflow-hidden p-0">
          <DialogHeader className="p-6 pb-0">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo_spendly.png" 
                  alt="Spendly Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold text-spendly-dark">Spendly</span>
              </div>
              <DialogTitle className="text-2xl font-bold text-center">
                Únete a la lista de espera de Spendly
              </DialogTitle>
            </div>
          </DialogHeader>
          <div className="p-6 pt-2">
            <iframe 
              key={iframeKey}
              src="https://tally.so/embed/w7zzOa?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              width="100%" 
              height="500" 
              frameBorder="0" 
              marginHeight={0}
              marginWidth={0}
              title="Únete a la lista de espera de Spendly"
              className="border-0 rounded-lg"
              style={{ minHeight: '500px' }}
              allow="payment"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;
