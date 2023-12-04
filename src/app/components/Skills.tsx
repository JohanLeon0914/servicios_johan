/* eslint-disable @next/next/no-img-element */
import React from "react";

const Skills: React.FC = () => {
  const skillItems = [
    {
      title: "Creación de Sitios Web",
      image: "/images/web.jpg",
      description:
        "Ofrezco soluciones de diseño y desarrollo de sitios web personalizados para empresas, emprendedores y proyectos personales. Desde sitios web corporativos hasta portafolios creativos, estoy listo para dar vida a tu visión en línea.",
      link: "/paginas-web",
    },
    {
      title: "Desarrollo de Aplicaciones Móviles",
      image: "/images/mobile.jpg",
      description:
        " Haz realidad tu idea de aplicación móvil conmigo. Diseño y desarrollo aplicaciones móviles para iOS y Android que se destacan en funcionalidad y diseño. Ya sea una aplicación para tu negocio o una idea de startup, estoy aquí para convertirla en realidad.",
      link: "/aplicaciones-moviles",
    },
    {
      title: "Bots de WhatsApp con Inteligencia Artificial (IA)",
      image: "/images/bot.jpg",
      description:
        "Potencia la comunicación de tu empresa con un bot de WhatsApp impulsado por inteligencia artificial. Creo soluciones de chatbot personalizadas que automatizan respuestas, proporcionan atención al cliente las 24 horas del día y mejoran la eficiencia operativa. Impulsa tu negocio con tecnología de vanguardia.",
      link: "/bots-whatsapp",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
      {skillItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="block bg-gray-900 rounded-md shadow-md overflow-hidden text-white transition-transform hover:scale-105 hover:cursor-pointer"
        >
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-300">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Skills;
