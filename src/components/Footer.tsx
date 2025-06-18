import React from "react";
import { MessageSquare, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-Bilio-gray-50 relative border-t border-Bilio-gray-200">
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
              <span className="text-2xl font-bold text-Bilio-gray-900">Bilio</span>
            </div>
            <p className="text-Bilio-gray-600 leading-relaxed max-w-md mb-6">
              Tu asistente financiero inteligente en WhatsApp. Registra gastos, recibe reportes automáticos y mejora tus finanzas día a día.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-Bilio-gray-600">
                <MessageSquare className="h-5 w-5 text-Bilio-blue" />
                <span>WhatsApp: +51 963394426</span>
              </div>
              <div className="flex items-center gap-3 text-Bilio-gray-600">
                <Mail className="h-5 w-5 text-Bilio-green" />
                <span>info@bilio.lat</span>
              </div>
              <div className="flex items-center gap-3 text-Bilio-gray-600">
                <MapPin className="h-5 w-5 text-Bilio-yellow-dark" />
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-Bilio-gray-900 mb-6">Enlaces rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#how-it-works" className="text-Bilio-gray-600 hover:text-Bilio-blue transition-colors duration-300">
                  ¿Cómo funciona?
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-Bilio-gray-600 hover:text-Bilio-green transition-colors duration-300">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-Bilio-gray-600 hover:text-Bilio-yellow-dark transition-colors duration-300">
                  Planes
                </a>
              </li>
              <li>
                <a href="#faq" className="text-Bilio-gray-600 hover:text-Bilio-blue-light transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-Bilio-gray-900 mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="" className="text-Bilio-gray-600 hover:text-Bilio-blue transition-colors duration-300">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="" className="text-Bilio-gray-600 hover:text-Bilio-green transition-colors duration-300">
                  Términos de uso
                </a>
              </li>
              <li>
                <a href="" className="text-Bilio-gray-600 hover:text-Bilio-yellow-dark transition-colors duration-300">
                  Cookies
                </a>
              </li>
              <li>
                <a href="" className="text-Bilio-gray-600 hover:text-Bilio-blue-light transition-colors duration-300">
                  Soporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria con gradiente */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-Bilio-yellow/30 to-transparent my-12"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-Bilio-gray-500 text-sm">
          <p>© 2025 Bilio. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">
            Hecho con <span className="text-Bilio-green">❤️</span> en Lima, Perú
          </p>
        </div>
      </div>

      {/* Efecto de glow sutil en el fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-Bilio-gray-50 to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-1/4 w-1/2 h-32 bg-gradient-to-t from-Bilio-yellow/5 to-transparent blur-3xl"></div>
    </footer>
  );
};

export default Footer;
