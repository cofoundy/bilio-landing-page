import React from "react";
import { MessageSquare, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black relative border-t border-Bilio-purple/20">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logoBilio.png" 
                alt="Bilio Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-white text-glow">Bilio</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Tu asistente financiero inteligente en WhatsApp. Registra gastos, recibe reportes automáticos y mejora tus finanzas día a día.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MessageSquare className="h-5 w-5 text-Bilio-purple" />
                <span>WhatsApp: +51 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-Bilio-pink" />
                <span>contacto@Bilio.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-Bilio-blue" />
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white text-glow mb-6">Enlaces rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-Bilio-purple transition-colors duration-300 hover:text-glow">
                  ¿Cómo funciona?
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-Bilio-pink transition-colors duration-300 hover:text-glow-pink">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-Bilio-blue transition-colors duration-300 hover:text-glow-blue">
                  Planes
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-Bilio-cyan transition-colors duration-300 hover:text-glow">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white text-glow mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-Bilio-purple transition-colors duration-300">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-Bilio-pink transition-colors duration-300">
                  Términos de uso
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-400 hover:text-Bilio-blue transition-colors duration-300">
                  Cookies
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-400 hover:text-Bilio-cyan transition-colors duration-300">
                  Soporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria con gradiente */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-Bilio-purple/30 to-transparent my-12"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2024 Bilio. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">
            Hecho con <span className="text-Bilio-pink">❤️</span> en Lima, Perú
          </p>
        </div>
      </div>

      {/* Efecto de glow sutil en el fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-1/4 w-1/2 h-32 bg-gradient-to-t from-Bilio-purple/5 to-transparent blur-3xl"></div>
    </footer>
  );
};

export default Footer;
