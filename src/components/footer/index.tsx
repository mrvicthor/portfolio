import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

type FooterProps = {
  lightTheme: boolean;
};

const Footer = ({ lightTheme }: FooterProps) => {
  return (
    <footer className="py-16">
      <div className={` flex flex-col items-center justify-center`}>
        <div className={` flex gap-4 md:hidden `}>
          <a target="_blank" href="https://www.facebook.com/outtaspace1">
            <FaFacebookSquare size={24} />
          </a>
          <a target="_blank" href="https://www.instagram.com/mrvic_thor/?hl=en">
            <FaInstagramSquare size={24} />
          </a>
          <a target="_blank" href="https://github.com/mrvicthor">
            <FaGithubSquare size={24} />
          </a>
          <a target="_blank" href="https://twitter.com/eva_skillz">
            <FaTwitterSquare size={24} />
          </a>
        </div>
        <small
          className={`${lightTheme ? "text-[#D4D4D4]" : "text-[#111517]"} mt-4`}
        >
          Copyright © 2025 & Designed by Victor Eleanya
        </small>
      </div>
    </footer>
  );
};

export default Footer;
