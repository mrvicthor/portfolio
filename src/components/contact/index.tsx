import { motion } from "framer-motion";

type ContactProps = {
  lightTheme: boolean;
};

const Contact = ({ lightTheme }: ContactProps) => {
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
    <section className="px-4 py-16" id="contact">
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: false }}
        className={`${
          lightTheme ? " text-[#D4D4D4]" : " text-[#111517]"
        } flex flex-col items-center gap-8 md:max-w-5xl md:mx-auto`}
      >
        <motion.h4
          variants={item}
          className="capitalize text-2xl font-semibold md:text-4xl"
        >
          get in touch
        </motion.h4>
        <motion.p
          variants={item}
          className="opacity-70 font-thin text-center md:text-lg"
        >
          {" "}
          Got an idea, proposal, or project, or want us to work together on
          something? Feel free to contact me
        </motion.p>
        <motion.a
          variants={item}
          href="mailto:victoreleanya89@gmail.com"
          className={`${
            lightTheme
              ? "bg-[#2b3945] text-[#D4D4D4] hover:text-green-300"
              : "bg-[white] text-[#111517] hover:text-orange-300"
          } px-6 py-2 rounded font-medium text-lg capitalize hover:scale-[1.2] transition duration-700 ease-in-out`}
        >
          say hi
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
