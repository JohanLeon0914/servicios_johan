/* eslint-disable @next/next/no-img-element */
const Banner = () => {
    return (
      <div
        className="relative bg-cover bg-center py-10 text-center"
        style={{
          backgroundImage: `url('/images/banner.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-10 p-4 rounded-md inline-block">
          <img
            src="/images/yo.jpg" 
            alt="Tu imagen"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h1 className="text-white text-2xl font-semibold">Johan Alberto León Serrano</h1>
          <p className="text-white text-md">Desarrollador de páginas web, aplicaciones móviles y bots de WhatsApp</p>
          <p className="text-white text-md"><b>Teléfono:</b> +57 3024725476</p>
          <p className="text-white text-md"><b>Correo:</b> johanleon991@gmail.com</p>
        </div>
      </div>
    );
  };
  
  export default Banner;