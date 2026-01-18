import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">Education</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Bachelor's */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-cloud p-8 rounded-xl shadow-lg border-l-4 border-primary flex-1 max-w-lg hover:shadow-xl transition-shadow"
            >
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white rounded-full text-primary text-2xl shadow-sm">
                        <FaGraduationCap />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-primary">Bachelor's Degree</h3>
                        <p className="text-accent font-medium">Electrical Engineering (Electronics & Telecom)</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mt-4">
                    <FaUniversity />
                    <span>University of Management and Technology, Lahore</span>
                </div>
            </motion.div>

            {/* Diploma */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-cloud p-8 rounded-xl shadow-lg border-l-4 border-accent flex-1 max-w-lg hover:shadow-xl transition-shadow"
            >
                <div className="flex items-center gap-4 mb-4">
                     <div className="p-3 bg-white rounded-full text-accent text-2xl shadow-sm">
                        <FaGraduationCap />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-primary">Diploma of Associate Engineering</h3>
                        <p className="text-accent font-medium">Electronics</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mt-4">
                    <FaUniversity />
                    <span>Faisalabad College</span>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
