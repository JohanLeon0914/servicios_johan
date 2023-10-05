/* eslint-disable @next/next/no-img-element */
import React from "react";
import GenericBanner from "../components/GenericBanner";

export default function Page() {
  const jobItems = [
    {
      title: "Tienda en linea",
      image: "/images/store.jpg",
    },
    {
      title: "Chatbot con Inteligencia Artificial",
      image: "/images/chat-movile.png",
    },
    {
      title: "Gestión de proyectos",
      image: "/images/task-app.png",
    },
  ];
  return (
    <div>
      <GenericBanner
        title="Desarrollo de Aplicaciones Móviles"
        description="Llevaremos tu negocio a la palma de la mano."
        imageUrl="/images/mobile.jpg"
      />
      <div className="p-8 text-center">
        <h1 className="text-4xl text-blue-900 font-semibold mb-6">
          ¿Por qué elegirme para desarrollar tu aplicación móvil?
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed mb-8">
          Si deseas crear una aplicación móvil para que todos tus clientes la
          tengan al alcance en sus dispositivos móviles, puedo
          ayudarte con eso. ¡No dudes en contactarme! 👇 Estaré encantado de
          comunicarme contigo lo más pronto posible. 😊
        </p>
        <a
          href="/contactame?origin=aplicaciones-moviles"
          className="inline-block px-6 py-3 bg-green-500 rounded-full text-white font-semibold hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Contáctame
        </a>

        <br />
        <br />

        <h2 className="text-4xl text-blue-900 font-semibold mb-6">
          Algunos de mis proyectos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {jobItems.map((item, index) => (
            <div
              key={index}
              className="block bg-gray-900 rounded-md shadow-md overflow-hidden text-white transition-transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover object-center"
                  style={{ aspectRatio: "16/9" }} 
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
