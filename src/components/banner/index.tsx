import portLogo from "../../assets/portLogo.jpg";

import { motion } from "framer-motion";

interface ThemeProp {
  lightTheme: boolean;
}

const Banner = ({ lightTheme }: ThemeProp) => {
  return (
    <section className="py-8 h-screen relative z-[10]">
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className={`h-[250px] w-[250px] rounded-full border relative ${
            lightTheme ? "border-[#111517]" : "bg-white"
          } `}
        >
          <img
            src={portLogo}
            alt="victor"
            className="h-full w-full object-cover rounded-full"
          />
        </motion.div>
        <motion.h1
          whileInView={{
            x: [-100, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 0.5 }}
          className={`tracking-widest ${
            lightTheme ? "text-[#D4D4D4]" : "text-[#111517]"
          }`}
        >
          Frontend Developer
        </motion.h1>
        <div>
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
        </div>
      </div>
    </section>
  );
};

export default Banner;
