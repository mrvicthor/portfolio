import Netflix from "../../assets/netImage.png";
import WorldApi from "../../assets/rest_port.png";
import Myteam from "../../assets/myteam.png";
import Audiophile from "../../assets/audiophile.png";

import { motion } from "framer-motion";
import { ProjectList, Button } from "./../index";
type ProjectProps = {
  lightTheme: boolean;
};

const Project = ({ lightTheme }: ProjectProps) => {
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

  const data = [
    {
      id: 1,
      title: "Audiophile e-Commerce",
      imgUrl: Audiophile,
      description: "An e-commerce app where you can purchase audio products.",
      github: "https://github.com/mrvicthor/audiophile-ecommerce",
      website: "https://audiophile-ecommerce-nu.vercel.app/",
    },
    {
      id: 2,
      title: "REST Countries API",
      imgUrl: WorldApi,
      description:
        "Responsive web app that displays all countries from an API.",
      github: "https://github.com/mrvicthor/rest-countries-app",
      website: "https://rest-countries-app-snowy.vercel.app/",
    },
    {
      id: 3,
      title: "Netflix Clone",
      imgUrl: Netflix,
      description: "A clone of the Netflix Movie App that displays movies.",
      github: "https://github.com/mrvicthor/netflix-app",
      website: "https://netflix-app-nu.vercel.app/",
    },
    {
      id: 4,
      title: "My Team Multipage Website",
      imgUrl: Myteam,
      description: "This is a 3-page fully funtional website",
      github: "https://github.com/mrvicthor/myteam-multiweb",
      website: "https://myteam-multiweb-kps2p41nq-mrvicthor.vercel.app/",
    },
  ];

  return (
    <section className="py-16" id="projects">
      <div className="space-y-8 md:max-w-3xl md:mx-auto">
        <motion.h2
          whileInView={{
            x: [-50, 0],
            opacity: [0, 1],
          }}
          className={`text-left font-[Satisfy] text-4xl pb-8 ${
            lightTheme ? "text-[#D4D4D4]" : "text-[#111517]"
          } about-header`}
        >
          Project
        </motion.h2>
        <div className={` grid gap-16 md:grid-cols-2 lg:grid-cols-2 md:gap-10`}>
          {data.map((item) => (
            <ProjectList key={item.id} lightTheme={lightTheme} data={item} />
          ))}
        </div>
        <motion.div
          whileInView={{
            x: [-50, 0],
            opacity: [0, 1],
          }}
          className="flex justify-center pt-6"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mrvicthor?tab=repositories"
            className={` ${
              lightTheme
                ? "bg-[#2b3945] text-[#D4D4D4] hover:text-green-300"
                : "bg-[white] text-[#111517] hover:text-orange-300"
            } px-5 py-3 rounded font-medium text-lg capitalize hover:scale-[1.2] transition duration-700 ease-in-out`}
          >
            view more projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
