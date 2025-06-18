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
    <section id="cta-section" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl">
          {/* Premium background with individual colors */}
          <div className="absolute inset-0 bg-Bilio-blue"></div>
          <div className="absolute inset-0 bg-Bilio-green/60 mix-blend-multiply"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-Bilio-yellow/30 rounded-full blur-3xl animate-float" style={{ boxShadow: '0 0 100px rgba(255, 199, 0, 0.3)' }}></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-Bilio-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', boxShadow: '0 0 100px rgba(10, 173, 110, 0.2)' }}></div>
          
          <div className="relative p-12 md:p-16" style={{ background: 'linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.2))' }}>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¡Empieza a controlar tus finanzas hoy mismo!
                </h2>
                <p className="text-white/90 text-lg max-w-lg">
                  Únete a la beta privada de Bilio y sé de los primeros en experimentar una nueva forma de manejar tu dinero.
                </p>
              </div>
              
              <div>
                <Button 
                  onClick={openModal}
                  className="bg-white text-Bilio-blue hover:bg-white/90 hover:text-Bilio-blue text-lg py-6 px-8 flex items-center space-x-2 font-bold shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ boxShadow: '0 0 30px rgba(255, 255, 255, 0.3), 0 20px 40px rgba(0, 0, 0, 0.3)' }}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Únete a la beta privada</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with Tally Form - Light Theme */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-3xl max-h-[95vh] overflow-hidden p-0 border border-Bilio-gray-300">
          <DialogHeader className="p-6 pb-0">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <img 
                  src="/logoBilio.png" 
                  alt="Bilio Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold text-Bilio-gray-900">Bilio</span>
              </div>
              <DialogTitle className="text-2xl font-bold text-center text-Bilio-gray-900">
                Únete a la lista de espera de Bilio
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
              title="Únete a la lista de espera de Bilio"
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
