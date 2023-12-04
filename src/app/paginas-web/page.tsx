/* eslint-disable @next/next/no-img-element */
import React from "react";
import GenericBanner from "../components/GenericBanner";

export default function page() {
  const jobItems = [
    {
      title: "Netflix Clon",
      image: "/images/netflix.png",
      link: "https://netflix-clon-dun.vercel.app",
    },
    {
      title: "Chatbot IA",
      image: "/images/chatbot-ia.png",
      link: "https://chat-ai-kappa-one.vercel.app",
    },
    {
      title: "Pagina web para leer novelas",
      image: "/images/pandora.png",
      link: "https://pandora-web-phi.vercel.app",
    },
  ];
  return (
    <div>
      <GenericBanner
        title="Creación de Páginas Web"
        description="Llevaremos tu negocio a un nuevo nivel."
        imageUrl="/images/web.jpg"
      />
      <div className="p-8 text-center bg-black">
        <h1 className="text-4xl text-blue-900 font-semibold mb-6">
          ¿Por qué elegirme para crear tu pagina web?
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed mb-8">
          Si estás interesado en ponerte en contacto conmigo para iniciar este
          emocionante proyecto de crear una página web para tu negocio o
          emprendimiento, ¡no dudes en hacerlo! 👇 Estaré encantado de
          comunicarme contigo lo más pronto posible. 😊
        </p>
        <a
          href="/contactame?origin=paginas-web"
          className="inline-block px-6 py-3 bg-green-500 rounded-full text-white font-semibold hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Contáctame
        </a>

        <br />
        <br />

        <h2 className="text-4xl text-blue-900 font-semibold mb-6">
          Algunos de mis trabajos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {jobItems.map((item, index) => (
            <a
              target="_BLANK"
              key={index}
              href={item.link}
              className="block bg-gray-900 rounded-md shadow-md overflow-hidden text-white transition-transform hover:scale-105 hover:cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover object-center"
                  style={{ aspectRatio: "16/9" }} // Opcional: Para mantener una relación de aspecto 16:9
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
