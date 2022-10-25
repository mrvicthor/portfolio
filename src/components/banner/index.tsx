import victor from "../../assets/victor.jpeg";
import portLogo from "../../assets/portLogo.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

interface ThemeProp {
  lightTheme: boolean;
}

const Banner = ({ lightTheme }: ThemeProp) => {
  const [text, count] = useTypewriter({
    words: [
      "👋 Hi, call me Victor",
      "Football fan...",
      "<I-Love-Video-games/>",
      "<God-of-War-fan/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="py-8 px-4">
      <div className="flex flex-col items-center py-12 gap-4">
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
          <h2
            className={`text-3xl px-2 ${
              lightTheme ? "text-[#fafafa]" : "text-[#DD650C]"
            }`}
          >
            {text}
            <Cursor />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
