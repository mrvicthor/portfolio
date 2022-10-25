import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Socials = () => {
  return (
    <aside className="px-4  md:max-w-5xl md:mx-auto">
      <div className="  md:bottom-0 md:fixed md:flex md:w-[64rem]">
        <div className="socials hidden md:flex md:flex-col gap-4 ">
          <a target="_blank" href="https://www.facebook.com/outtaspace1">
            <FaFacebookSquare size={25} />
          </a>
          <a target="_blank" href="https://www.instagram.com/mrvic_thor/?hl=en">
            <FaInstagramSquare size={25} />
          </a>
          <a target="_blank" href="https://github.com/mrvicthor">
            <FaGithubSquare size={25} />
          </a>
          <a target="_blank" href="https://twitter.com/eva_skillz">
            <FaTwitterSquare size={25} />
          </a>
        </div>
        <div className="socials hidden md:flex md:flex-col gap-28 md:ml-[52rem] mt-7  ">
          <a
            className="origin-center -10 rotate-[90deg] tracking-widest"
            target="_blank"
            href="https://www.facebook.com/outtaspace1"
          >
            victoreleanya89@gmail.com
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Socials;
