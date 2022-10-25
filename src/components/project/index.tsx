import Netflix from "../../assets/netImage.png";
import WorldApi from "../../assets/rest_port.png";
import Clc from "../../assets/clc_proj.png";
import IpTracker from "../../assets/iptrac_proj.png";

import { motion } from "framer-motion";
import { ProjectList } from "./../index";
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const data = [
    {
      id: 1,
      title: "REST Countries API",
      imgUrl: WorldApi,
      description:
        "Responsive web app that displays all countries from an API.",
      github: "https://github.com/mrvicthor/rest-countries-app",
      website: "https://rest-countries-app-snowy.vercel.app/",
    },
    {
      id: 2,
      title: "Christ Liberty Church",
      imgUrl: Clc,
      description:
        "Website that allows members easily subscribe to church events. ",
      github: "https://github.com/mrvicthor/clc-app",
      website: "https://clc-app.vercel.app/",
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
      title: "IpTracker",
      imgUrl: IpTracker,
      description:
        "IpTracker that can be used to get the location just by using the IP address",
      github: "https://github.com/mrvicthor/ipAddressTracker",
      website: "https://ip-address-tracker-beta-rust.vercel.app/",
    },
  ];

  return (
    <section className="px-4 py-16">
      <div className="space-y-8 md:max-w-5xl md:mx-auto">
        <motion.h2
          whileInView={{
            x: [-50, 0],
            opacity: [0, 1],
          }}
          className={`text-left font-[Satisfy] text-4xl px-2 pb-8 ${
            lightTheme ? "text-[#D4D4D4]" : "text-[#111517]"
          } about-header`}
        >
          Project
        </motion.h2>
        <div className={` grid gap-16 md:grid-cols-2 lg:grid-cols-3 md:gap-10`}>
          {data.map((item) => (
            <ProjectList key={item.id} lightTheme={lightTheme} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
