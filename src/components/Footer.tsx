
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-semibold tracking-tight">MKT<span className="text-primary font-bold">Pro</span></span>
            <p className="mt-4 text-neutral-400 max-w-md">
              Servicios profesionales de marketing digital para potenciar tu negocio. Estrategias personalizadas, contenido de calidad y resultados medibles.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-neutral-400 hover:text-white transition-colors">Creación de Contenido</a></li>
              <li><a href="#servicios" className="text-neutral-400 hover:text-white transition-colors">Estrategia de Marketing</a></li>
              <li><a href="#servicios" className="text-neutral-400 hover:text-white transition-colors">SEO</a></li>
              <li><a href="#servicios" className="text-neutral-400 hover:text-white transition-colors">Social Media</a></li>
              <li><a href="#servicios" className="text-neutral-400 hover:text-white transition-colors">Email Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-neutral-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#sobre-mi" className="text-neutral-400 hover:text-white transition-colors">Sobre mí</a></li>
              <li><a href="#testimonios" className="text-neutral-400 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="text-neutral-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">© {currentYear} MKTPro. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Política de privacidad</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Términos de servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
