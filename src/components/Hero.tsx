
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, TrendingUp, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] pt-32 pb-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold bg-primary/10 text-primary animate-fade-in [animation-delay:200ms]">
              Servicios de Marketing
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight md:leading-tight tracking-tight animate-fade-in [animation-delay:400ms]">
              Transformando ideas en <span className="perspective-text relative inline-block text-primary">estrategias</span> de éxito
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in [animation-delay:600ms]">
              Potenciando tu negocio con estrategias de marketing personalizadas, contenido de calidad y campañas de promoción que generan resultados reales.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 animate-fade-in [animation-delay:800ms]">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('contacto')?.scrollIntoView()}>
                Solicitar consulta
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('servicios')?.scrollIntoView()}>
                Ver servicios
              </Button>
            </div>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in [animation-delay:1000ms]">
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-neutral-200 pb-6 md:pb-0 md:pr-6">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Estrategias probadas</h3>
              <p className="text-sm text-muted-foreground">Planes de marketing que generan crecimiento real para tu negocio</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-neutral-200 pb-6 md:pb-0 md:pr-6">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Contenido de calidad</h3>
              <p className="text-sm text-muted-foreground">Contenido que conecta con tu audiencia y refuerza tu marca</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enfoque personalizado</h3>
              <p className="text-sm text-muted-foreground">Cada estrategia se adapta a tus objetivos específicos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown 
          className="h-6 w-6 text-primary" 
          onClick={() => document.getElementById('servicios')?.scrollIntoView()}
        />
      </div>
    </section>
  );
};

export default Hero;
