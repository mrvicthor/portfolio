import { motion } from "framer-motion";

type EmailProps = {
  lightTheme: boolean;
};

const Email = ({ lightTheme }: EmailProps) => {
  return (
    <aside className="">
      <div className="md:bottom-0 md:fixed md:-m-[4%] lg:-m-[1%]">
        <motion.div
          whileInView={{
            y: [-50, 0],
            opacity: [0, 1],
          }}
          className={`${
            lightTheme ? "hover:text-green-300" : "hover:text-orange-300"
          } hover:scale-[1.1] transition duration-700 ease-in-out socials hidden md:flex md:flex-col items-baseline gap-28`}
        >
          <a
            className="rotate-[90deg] tracking-widest"
            target="_blank"
            href="https://www.facebook.com/outtaspace1"
          >
            victoreleanya89@gmail.com
          </a>
        </motion.div>
      </div>
    </aside>
  );
};

export default Email;
