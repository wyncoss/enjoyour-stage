// next image
import Image from 'next/image';

// components
import Avatar from '../components/Avatar';
import ProjectsBtn from '../components/ProjectsBtn';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';
const Home = () => {
  return (
    <div className="bg-primary/30 h-full">
      {/* content */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Listos para cuidar <br /> de{' '}
            <span className="text-yellow-300">Tu Mascota</span>
          </motion.h1>
          {/* description */}
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Somos Enjoyourpet, un proyecto que nació en 2021 con el objetivo de
            brindarle al usuario las herramientas necesarias para el cuidado de
            su mascota. <br /> <br />
            <span className="text-yellow-300 font-bold italic">
              &quot;Los ojos de un animal tienen el poder de hablar un gran
              lenguaje&quot;
            </span>
          </motion.p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="xl:w-[737px] h-full absolute right-0 bottom-0">
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:top-[8%] lg:right-[20%]
        "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
