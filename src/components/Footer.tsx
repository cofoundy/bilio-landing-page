
import React from "react";
import { MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-spendly-blue to-spendly-green flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl">Spendly</span>
            </div>
            <p className="text-gray-600 mb-4">
              Tu asistente financiero personal a través de WhatsApp. Toma el control de tus finanzas de forma sencilla.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-spendly-blue transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-spendly-blue transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.389 6.467c.57.057 1.055.196 1.527.416.094.052.18.114.256.188a3.58 3.58 0 01.749.749c.073.077.135.162.188.256.22.471.359.957.416 1.527.064.598.086 1.241.09 2.404-.004 1.164-.026 1.806-.09 2.404-.057.57-.196 1.055-.416 1.527-.052.094-.114.18-.188.256a3.58 3.58 0 01-.749.749c-.077.073-.162.135-.256.188-.471.22-.957.359-1.527.416-.598.064-1.241.086-2.404.09-1.164-.004-1.806-.026-2.404-.09-.57-.057-1.055-.196-1.527-.416a1.017 1.017 0 01-.256-.188 3.58 3.58 0 01-.749-.749 1.017 1.017 0 01-.188-.256c-.22-.471-.359-.957-.416-1.527-.064-.598-.086-1.241-.09-2.404.004-1.164.026-1.806.09-2.404.057-.57.196-1.055.416-1.527.052-.094.114-.18.188-.256a3.58 3.58 0 01.749-.749c.077-.073.162-.135.256-.188.471-.22.957-.359 1.527-.416.598-.064 1.241-.086 2.404-.09 1.164.004 1.806.026 2.404.09zM12 7.073c-1.154 0-2.084.93-2.084 2.084 0 1.154.93 2.084 2.084 2.084s2.084-.93 2.084-2.084c0-1.154-.93-2.084-2.084-2.084zm0 7.291c-2.88 0-5.207-2.327-5.207-5.207S9.12 4.95 12 4.95s5.207 2.327 5.207 5.207S14.88 14.364 12 14.364z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-spendly-blue transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-spendly-blue transition-colors flex items-center justify-center">
                <MessageSquare className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Producto</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-600 hover:text-spendly-blue transition-colors">¿Cómo funciona?</a></li>
              <li><a href="#benefits" className="text-gray-600 hover:text-spendly-blue transition-colors">Beneficios</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-spendly-blue transition-colors">Precios</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-spendly-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Compañía</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-spendly-blue transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-600 hover:text-spendly-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-spendly-blue transition-colors">Prensa</a></li>
              <li><a href="#" className="text-gray-600 hover:text-spendly-blue transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-spendly-blue transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="text-gray-600 hover:text-spendly-blue transition-colors">Políticas de privacidad</a></li>
              <li><a href="#" className="text-gray-600 hover:text-spendly-blue transition-colors">Seguridad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Spendly. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Spendly utiliza tecnología segura para proteger tus datos financieros. No almacenamos información sensible bancaria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
