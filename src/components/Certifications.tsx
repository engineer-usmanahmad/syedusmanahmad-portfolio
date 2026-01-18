
import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      level: "Professional",
      id: "TSQTE68LNE4Q1YS5",
      icon: <FaAws className="text-aws text-6xl" />,
      color: "border-aws"
    },
    {
      name: "Certified Kubernetes Administrator",
      level: "Advanced",
      id: "CKA-Active", // User didn't provide ID, putting placeholder
      icon: <SiKubernetes className="text-blue-500 text-6xl" />,
      color: "border-blue-500"
    },
    {
      name: "AWS Certified Solutions Architect",
      level: "Associate",
      id: "AWS00306962",
      icon: <FaAws className="text-aws text-6xl" />,
      color: "border-aws"
    },
    {
      name: "AWS Certified CloudOps Engineer",
      level: "Associate",
      id: "",
      icon: <FaAws className="text-aws text-6xl" />,
      color: "border-aws"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      level: "Foundational",
      id: "",
      icon: <FaAws className="text-aws text-6xl" />,
      color: "border-aws"
    },
    {
      name: "AWS Technical Professional",
      level: "APN Partner",
      id: "",
      icon: <FaAws className="text-aws text-6xl" />,
      color: "border-aws"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">Professional Certifications</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,107,53,0.3)" }}
                    className={`relative w-72 bg-white p-8 rounded-xl shadow-lg border-t-4 ${cert.color} group cursor-pointer overflow-hidden`}
                >
                    <div className="flex flex-col items-center text-center z-10 relative">
                        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            {cert.icon}
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-2 min-h-[56px] flex items-center justify-center">{cert.name}</h3>
                        <span className="px-3 py-1 bg-cloud text-gray-600 text-sm rounded-full font-medium mb-4">{cert.level}</span>
                        
                        {cert.id && (
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-primary/95 flex items-center justify-center rounded-xl z-20">
                                <div className="text-white p-4">
                                    <p className="text-xs uppercase tracking-wider mb-1 text-gray-400">Validation ID</p>
                                    <p className="font-mono font-bold break-all">{cert.id}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
