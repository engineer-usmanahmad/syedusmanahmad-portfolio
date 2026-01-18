
import { motion } from 'framer-motion';
import { FaLinkedin, FaMedium, FaGlobe, FaAws, FaDocker } from 'react-icons/fa';
import { SiKubernetes, SiTerraform } from 'react-icons/si';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#112240] to-[#1a365d]">
      
      {/* Background Floating Icons */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 text-6xl text-aws"
        >
            <FaAws />
        </motion.div>
        <motion.div 
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 text-6xl text-blue-400"
        >
            <SiKubernetes />
        </motion.div>
        <motion.div 
            animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/3 text-6xl text-blue-500"
        >
            <FaDocker />
        </motion.div>
         <motion.div 
            animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/5 text-6xl text-purple-500"
        >
            <SiTerraform />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-center h-full pt-20">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading leading-tight">
            Syed Usman Ahmad
          </h1>
          <h2 className="text-xl md:text-2xl text-accent font-semibold mb-6">
            Principal DevOps Engineer | AWS Community Builder | Cloud Architect
          </h2>
          <p className="text-cloud/80 text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Architecting scalable cloud solutions and empowering 500+ professionals in AWS & DevOps
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="experience" smooth={true} duration={500} className="px-8 py-3 bg-accent hover:bg-orange-600 text-white font-bold rounded-lg transition-colors cursor-pointer shadow-lg flex items-center justify-center">
              View My Work
            </Link>
            <a href="/resume.pdf" target="_blank" className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent/10 font-bold rounded-lg transition-colors cursor-pointer flex items-center justify-center">
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 mt-8 justify-center md:justify-start text-cloud text-2xl">
            <a href="https://www.linkedin.com/in/engrusman-ahmad/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors hover:scale-110 transform"><FaLinkedin /></a>
            <a href="https://medium.com/@engr-syedusmanahmad" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors hover:scale-110 transform"><FaMedium /></a>
            <a href="https://lbistech.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors hover:scale-110 transform"><FaGlobe /></a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-accent shadow-[0_0_30px_rgba(255,107,53,0.3)] overflow-hidden bg-primary">
            {/* Placeholder for actual image - replace with actual image URL later */}
            <div className="w-full h-full bg-gradient-to-t from-primary to-gray-700 flex items-center justify-center text-cloud">
               <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
