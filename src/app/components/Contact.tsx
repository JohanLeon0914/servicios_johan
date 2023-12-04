"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

interface FormularioState {
  user_name: string;
  user_telefono: string;
  user_email: string;
  user_asunto: string;
  user_message: string;
}

function Contact() {
  const [formulario, setFormulario] = useState<FormularioState>({
    user_name: "",
    user_telefono: "",
    user_email: "",
    user_asunto: "",
    user_message: "",
  });

  const searchParams = useSearchParams();
  const search = searchParams.get("origin");

  if (search) {
    switch (search) {
      case "aplicaciones-moviles":
        formulario.user_asunto = "Creación de aplicación móvil";
        break;
      case "whatsapp-bots":
        formulario.user_asunto = "Creación de bot de WhatsApp";
        break;
      case "paginas-web":
        formulario.user_asunto = "Creación de sitios web";
        break;
      default:
        formulario.user_asunto = "";
        break;
    }
  }

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendAlert();
    emailjs
      .sendForm(
        "service_yydk9mm",
        "template_6nxh1xz",
        event.currentTarget,
        "mY6I5remDMwh5Txgh"
      )
      .then((response) => {
        console.log(response);
        setFormulario({
          user_name: "",
          user_telefono: "",
          user_email: "",
          user_asunto: "",
          user_message: "",
        });
      })
      .catch((error) => console.log(error));
  };

  const sendAlert = () => {
    swal({
      title: "Gracias por tu mensaje",
      text: "Tu mensaje se ha enviado con éxito",
      icon: "success",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  return (
    <div id="contact" className="flex justify-center items-center min-h-screen">
      <div className="max-w-lg p-8 rounded-lg bg-white shadow-md">
        <h1 className="text-2xl font-semibold text-center text-[#5651e5]">
          Contactame
        </h1>
        <h2 className="text-lg font-medium text-center py-2 text-black">
          Envíame un mensaje
        </h2>
        <br />
        <form onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                name="user_name"
                value={formulario.user_name}
                onChange={handleChange}
                required
                className="border rounded-lg py-2 px-3 border-gray-300 text-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <input
                type="text"
                name="user_telefono"
                value={formulario.user_telefono}
                onChange={handleChange}
                className="border rounded-lg py-2 px-3 border-gray-300 text-black"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              value={formulario.user_email}
              onChange={handleChange}
              required
              className="border rounded-lg py-2 px-3 border-gray-300 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Asunto</label>
            <input
              type="text"
              name="user_asunto"
              value={formulario.user_asunto}
              onChange={handleChange}
              className="border rounded-lg py-2 px-3 border-gray-300 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              className="border rounded-lg py-2 px-3 border-gray-300 text-black"
              required
              name="user_message"
              value={formulario.user_message}
              onChange={handleChange}
            />
          </div>
          <button className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
