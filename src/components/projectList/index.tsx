import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

type Items = {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  github: string;
  website: string;
};

type ProjectProps = {
  lightTheme: boolean;
  data: Items;
};

const ProjectList = ({ lightTheme, data }: ProjectProps) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={`${
        lightTheme ? "bg-[#2b3945] text-[#D4D4D4]" : "bg-[white] text-[#111517]"
      } flex flex-col gap-6 rounded pb-4 cursor-pointer`}
      key={data.id}
    >
      <motion.div
        whileInView={{
          y: [-50, 0],
          opacity: [0, 1],
        }}
        className="h-60 w-full rounded md:h-[13rem]"
      >
        <img
          src={data.imgUrl}
          className=" h-full w-full object-cover rounded-t cursor-pointer hover:scale-[.99] transition duration-700 ease-in-out"
          alt="project-image"
        />
      </motion.div>

      <header className="px-4">
        <motion.h3
          whileInView={{
            y: [-50, 0],
            opacity: [0, 1],
          }}
          className="text-sm font-semibold md:text-lg"
        >
          {data.title}
        </motion.h3>
        <motion.p
          whileInView={{
            y: [-50, 0],
            opacity: [0, 1],
          }}
          className="opacity-70 text-lg md:text-md"
        >
          {data.description}
        </motion.p>
      </header>
      <div className="px-4 flex gap-6">
        <motion.a
          whileInView={{
            y: [-50, 0],
            opacity: [0, 1],
          }}
          href={data.github}
          target="_blank"
          rel="noreferrer"
          className={`${
            lightTheme ? "hover:text-green-300" : "hover:text-orange-300"
          } hover:scale-[1.1] transition duration-700 ease-in-out`}
        >
          <FaGithub size={20} />
        </motion.a>
        <motion.a
          whileInView={{
            y: [-50, 0],
            opacity: [0, 1],
          }}
          href={data.website}
          target="_blank"
          rel="noreferrer"
          className={`${
            lightTheme ? "hover:text-green-300" : "hover:text-orange-300"
          } hover:scale-[1.1] transition duration-700 ease-in-out`}
        >
          <FaExternalLinkAlt size={20} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectList;
