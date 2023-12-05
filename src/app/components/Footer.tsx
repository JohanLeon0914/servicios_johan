import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Johan Alberto León Serrano</h2>
          <p>Desarrollador de páginas web, aplicaciones móviles y bots de WhatsApp</p>
          <p>Teléfono: +57 3006101322</p>
          <p>Correo: johanleon991@gmail.com</p>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.instagram.com/johan_leon32/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4 hover:text-blue-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/johan-alberto-leon-18b688229/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {currentYear} Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;