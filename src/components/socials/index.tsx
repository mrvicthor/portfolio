import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";

type SocialsProps = {
  lightTheme: boolean;
};

const Socials = ({ lightTheme }: SocialsProps) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <aside className="">
      <div className="md:bottom-0 md:fixed md:flex">
        <motion.div
          variants={container}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: false }}
          className={` hover:scale-[1.1] transition duration-700 ease-in-out socials hidden md:flex md:flex-col gap-4`}
        >
          <motion.a
            variants={item}
            className={`${
              lightTheme ? "hover:text-green-300" : "hover:text-orange-300"
            }`}
            target="_blank"
            href="https://www.facebook.com/outtaspace1"
          >
            <FaFacebookSquare size={25} />
          </motion.a>
          <motion.a
            variants={item}
            target="_blank"
            className={`${
              lightTheme ? "hover:text-green-300" : "hover:text-orange-300"
            }`}
            href="https://www.instagram.com/mrvic_thor/?hl=en"
          >
            <FaInstagramSquare size={25} />
          </motion.a>
          <motion.a
            variants={item}
            target="_blank"
            className={`${
              lightTheme ? "hover:text-green-300" : "hover:text-orange-300"
            }`}
            href="https://github.com/mrvicthor"
          >
            <FaGithubSquare size={25} />
          </motion.a>
          <motion.a
            variants={item}
            target="_blank"
            className={`${
              lightTheme ? "hover:text-green-300" : "hover:text-orange-300"
            }`}
            href="https://twitter.com/eva_skillz"
          >
            <FaTwitterSquare size={25} />
          </motion.a>
        </motion.div>
      </div>
    </aside>
  );
};

export default Socials;
