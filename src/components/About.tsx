
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Professionals Trained", value: "500+" },
    { label: "AWS Community Builder", value: "Active" },
    { label: "Certifications", value: "Multiple" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">About Me</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center"
          >
             <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300 bg-gray-200 border-4 border-white">
                {/* Placeholder Image */}
                 <div className="w-full h-full bg-gradient-to-br from-primary to-[#112240] flex items-center justify-center text-white text-4xl">
                    <span className="text-6xl">👨‍🏫</span>
                 </div>
             </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Principal DevOps Engineer & Cloud Architect</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Principal DevOps Engineer with expertise in cloud architecture and container orchestration. AWS Community Builder with 10+ years comprehensive experience in cloud infrastructure, DevOps automation, and enterprise architecture. Recognized technical leader and educator who trained 500+ professionals. Active speaker at AWS Community, Kubernetes (Linux Foundation), and Google GDG Cloud events.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8 text-gray-700">
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-accent" />
                    <span>Lahore, Pakistan 📍</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-accent" />
                    <span>2013 - Present</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-cloud p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <h4 className="text-2xl font-bold text-accent mb-1">{stat.value}</h4>
                        <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
