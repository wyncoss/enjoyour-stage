//
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const Sem5 = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 items-center justify-center">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit={'hidden'}
              className="h2"
            >
              Avances Semestre <span className="text-yellow-300">5</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit={'hidden'}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Para este quinto semestre, el proyecto Enjoy Your Pet implementó
              las siguientes novedades en su sitio web: <br /> &#x1F49B; Diseño
              Minimalista. <br /> &#x1F49B; Nuevos módulos de compra, tips,
              adopciones & ventas.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit={'hidden'}
            className="w-full xl:max-w-[65%] flex place-items-end"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sem5;
