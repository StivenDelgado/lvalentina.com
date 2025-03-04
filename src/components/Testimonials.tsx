
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana García",
      role: "CEO, TechSolutions",
      content: "La estrategia de marketing que implementó para nuestra empresa transformó completamente nuestra presencia digital. En menos de 6 meses, triplicamos el tráfico web y aumentamos las conversiones en un 45%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Carlos Rodríguez",
      role: "Fundador, Ecomoda",
      content: "Su enfoque en la creación de contenido para nuestras redes sociales ha sido clave para conectar con nuestra audiencia. El engagement ha crecido consistentemente y nuestras ventas online han aumentado significativamente.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Laura Martínez",
      role: "Directora de Marketing, NutriVida",
      content: "Su capacidad para entender nuestro mercado y crear campañas de email marketing efectivas ha sido excepcional. Cada campaña supera a la anterior en términos de apertura y conversión. Totalmente recomendable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Javier López",
      role: "Propietario, Restaurante Sabores",
      content: "Gracias a su estrategia de contenido y gestión de redes sociales, nuestro restaurante ha logrado aumentar las reservas en un 60%. Su enfoque en destacar nuestra propuesta de valor ha sido fundamental.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="testimonios" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">TESTIMONIOS</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">Lo que dicen mis clientes</h2>
          <p className="text-muted-foreground text-lg">
            He tenido el privilegio de trabajar con empresas increíbles. Aquí hay algunas experiencias compartidas por mis clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 flex flex-col scroll-reveal"
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-muted-foreground flex-grow mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
