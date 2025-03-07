
import React from 'react';
import { Badge } from '@/components/ui/badge';
import laura from '@/../public/laura.png'

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 md:py-32 bg-neutral-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 scroll-reveal">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">SOBRE MÍ</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">Experta en marketing digital con pasión por los resultados</h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Mi objetivo principal es desarrollar contenido de alta
                calidad que no solo aporte valor, sino que también
                genere un impacto significativo y refleje los valores
                fundamentales de la marca. Mis habilidades y
                capacidad creativa me capacitan para colaborar con
                diversas marcas, creando contenido que se alinea
                perfectamente con su estrategia particular.
                Actualmente, establezco conexiones con marcas de
                manera independiente a través de mi portafolio.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="secondary" className="py-1.5">Estrategia Digital</Badge>
              <Badge variant="secondary" className="py-1.5">Copywriting</Badge>
              <Badge variant="secondary" className="py-1.5">SEO</Badge>
              <Badge variant="secondary" className="py-1.5">Content Marketing</Badge>
              <Badge variant="secondary" className="py-1.5">Social Media</Badge>
              <Badge variant="secondary" className="py-1.5">Publicidad Digital</Badge>
              <Badge variant="secondary" className="py-1.5">Influencer</Badge>
            </div>
          </div>

          <div className="order-1 lg:order-2 scroll-reveal [animation-delay:300ms]">
            <div className="relative">
              <div className="image-reveal rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={laura}
                  alt="Especialista de Marketing"
                  className="w-full h-[700px] object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-lg rounded-lg max-w-xs hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">+20</div>
                    <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 shadow-lg rounded-lg max-w-xs hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">2+ años</div>
                    <div className="text-sm text-muted-foreground">De experiencia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
