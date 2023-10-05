interface GenericBannerProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  const GenericBanner: React.FC<GenericBannerProps> = ({ title, description, imageUrl }) => {
    return (
      <div
        className="bg-cover bg-center py-20 text-center relative"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-10 p-4 rounded-md inline-block">
          <h1 className="text-white text-2xl font-semibold">{title}</h1>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
    );
  };
  
  export default GenericBanner;