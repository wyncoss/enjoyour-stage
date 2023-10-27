//
import ProjectsBtnd from '../../components/ProjectsBtnd';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const Documentation = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 items-center justify-center">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit={'hidden'}
              className="h2"
            >
              Documentación <span className="text-yellow-300">Enjoyourpet</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit={'hidden'}
              className="mb-4 max-w-[400px] mx-auto lg:ml-0"
            >
              Para más detalles te invitamos a consultar toda nuestra
              documentación. &#128071; &#128071;
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit={'hidden'}
            className="w-full flex"
          >
            {/* slider */}
            <ProjectsBtnd />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
