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
    title="Creación de Bots de WhatsApp"
    description="Llevaremos la automatización de tu negocio a través de WhatsApp."
    imageUrl="/images/bot-whatsapp.webp"
  />
  <div className="p-8 text-center bg-black">
    <h1 className="text-4xl text-blue-900 font-semibold mb-6">
      ¿Por qué elegirme para desarrollar tu bot de WhatsApp?
    </h1>
    <p className="text-lg text-gray-200 leading-relaxed mb-8">
      Si estás interesado en crear un bot de WhatsApp con Inteligencia artificial para automatizar y mejorar la comunicación con tus clientes, puedo ayudarte con eso. ¡No dudes en contactarme! 👇 Estaré encantado de comunicarme contigo lo más pronto posible. 😊
    </p>
    <a
      href="/contactame?origin=whatsapp-bots"
      className="inline-block px-6 py-3 bg-green-500 rounded-full text-white font-semibold hover:bg-green-600 transition duration-300 ease-in-out"
    >
      Contáctame
    </a>
  </div>
</div>
  );
}
