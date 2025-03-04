
import React from 'react';
import { 
  Megaphone, 
  PenTool, 
  BarChart, 
  Search, 
  Mail, 
  ShoppingBag, 
  Share2, 
  Camera 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Creación de Contenido",
      description: "Desarrollo de contenido atractivo y relevante para tus canales digitales, blogs y redes sociales."
    },
    {
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "Estrategia de Marketing",
      description: "Planificación y ejecución de estrategias para alcanzar tus objetivos comerciales a corto y largo plazo."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Análisis de Datos",
      description: "Seguimiento y análisis de métricas para optimizar campañas y maximizar retorno de inversión."
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "SEO",
      description: "Mejora del posicionamiento de tu sitio web en motores de búsqueda para atraer tráfico cualificado."
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email Marketing",
      description: "Campañas de email efectivas para nurturar leads y convertir clientes potenciales."
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: "Marketing de Producto",
      description: "Estrategias para posicionar tus productos en el mercado y aumentar ventas."
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Gestión de Redes Sociales",
      description: "Creación y gestión de contenido para construir comunidad y aumentar engagement."
    },
    {
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "Producción Visual",
      description: "Fotografía y diseño de alta calidad para tus campañas de marketing y contenido digital."
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">SERVICIOS ESPECIALIZADOS</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">Soluciones de marketing adaptadas a tus necesidades</h2>
          <p className="text-muted-foreground text-lg">
            Ofrezco servicios completos de marketing digital diseñados para potenciar tu presencia online y aumentar tus conversiones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="service-card scroll-reveal"
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
