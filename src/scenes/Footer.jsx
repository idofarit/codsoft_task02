import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-gray-400 pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            Arit's Portfolio
          </p>
          <p className="font-playfair text-md text-black">
            ©2023 AritN. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
