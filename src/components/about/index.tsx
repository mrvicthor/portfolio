import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiRedux } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { motion } from "framer-motion";

type AboutProps = {
  lightTheme: boolean;
};

const About = ({ lightTheme }: AboutProps) => {
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
    <section className="px-4 py-8">
      <div className="space-y-8  md:max-w-5xl md:mx-auto">
        <motion.h2
          whileInView={{
            y: [-50, 0],
            opacity: [0, 1],
          }}
          className={` ${
            lightTheme ? "text-[#D4D4D4]" : "text-[#111517]"
          } text-xl text-center `}
        >
          I Can{" "}
          <span className="text-[#3CA4EC] text-3xl">
            Automate Your Business
          </span>
          <br />
          With
          <span className="text-[#3CA4EC] text-3xl"> Good Design</span>
        </motion.h2>
        <motion.h2
          whileInView={{
            y: [-50, 0],
            opacity: [0, 1],
          }}
          className={`text-left font-[Satisfy] text-4xl px-2 pb-8 ${
            lightTheme ? "text-[#D4D4D4]" : "text-[#111517]"
          } about-header`}
        >
          Skills
        </motion.h2>
        <motion.div
          variants={container}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: false }}
          className="grid grid-cols-3 gap-4"
        >
          <motion.div
            variants={item}
            className={`skills flex items-center justify-center gap-2 cursor-pointer py-2 px-2 rounded ${
              lightTheme ? "bg-[#2b3945] text-white" : "bg-white text-[#111517]"
            }`}
          >
            <div className="h-10  w-10 flex items-center justify-center">
              <FaReact size={30} />
            </div>
            <h3 className="text-sm opacity-70 md:text-lg">React</h3>
          </motion.div>
          <motion.div
            variants={item}
            className={`skills flex items-center justify-center gap-2 cursor-pointer py-2 px-2 rounded ${
              lightTheme ? "bg-[#2b3945] text-white" : "bg-white text-[#111517]"
            }`}
          >
            <div className="h-10  w-10 flex items-center justify-center">
              <SiTypescript size={30} />
            </div>
            <h3 className="text-sm opacity-70 md:text-lg">TypeScript</h3>
          </motion.div>
          <motion.div
            variants={item}
            className={`skills flex items-center justify-center gap-2 cursor-pointer py-2 px-2 rounded ${
              lightTheme ? "bg-[#2b3945] text-white" : "bg-white text-[#111517]"
            }`}
          >
            <div className="h-10  w-10 flex items-center justify-center">
              <FaNodeJs size={30} />
            </div>
            <h3 className="text-sm opacity-70 md:text-lg">Node</h3>
          </motion.div>
          <motion.div
            variants={item}
            className={`skills flex items-center justify-center gap-2 cursor-pointer py-2 px-2 rounded ${
              lightTheme ? "bg-[#2b3945] text-white" : "bg-white text-[#111517]"
            }`}
          >
            <div className="h-10 w-10 flex items-center justify-center">
              <SiRedux size={30} />
            </div>
            <h3 className="text-sm opacity-70 md:text-lg">Redux</h3>
          </motion.div>
          <motion.div
            variants={item}
            className={`skills flex items-center justify-center gap-2 cursor-pointer py-2 px-2 rounded ${
              lightTheme ? "bg-[#2b3945] text-white" : "bg-white text-[#111517]"
            }`}
          >
            <div className="h-10 w-10 flex items-center justify-center">
              <TbBrandJavascript size={30} />
            </div>
            <h3 className="text-sm opacity-70 md:text-lg">JavaScript</h3>
          </motion.div>
          <motion.div
            variants={item}
            className={`skills flex items-center justify-center gap-2 cursor-pointer py-2 px-2 rounded ${
              lightTheme ? "bg-[#2b3945] text-white" : "bg-white text-[#111517]"
            }`}
          >
            <div className="h-10 w-10 flex items-center justify-center">
              <AiOutlineConsoleSql size={30} />
            </div>
            <h3 className="text-sm opacity-70 md:text-lg">SQL</h3>
          </motion.div>
          <motion.div
            variants={item}
            className={`skills flex items-center justify-center gap-2 cursor-pointer py-2 px-2 rounded ${
              lightTheme ? "bg-[#2b3945] text-white" : "bg-white text-[#111517]"
            }`}
          >
            <div className="h-10 w-10 flex items-center justify-center">
              <FaHtml5 size={30} />
            </div>
            <h3 className="text-sm opacity-70 md:text-lg">HTML</h3>
          </motion.div>
          <motion.div
            variants={item}
            className={`skills flex items-center justify-center gap-2 cursor-pointer py-2 px-2 rounded ${
              lightTheme ? "bg-[#2b3945] text-white" : "bg-white text-[#111517]"
            }`}
          >
            <div className="h-10  w-10 flex items-center justify-center">
              <FaCss3Alt size={30} />
            </div>
            <h3 className="text-sm opacity-70 md:text-lg">CSS</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
