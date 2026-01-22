
import { motion } from 'framer-motion';
import { FaAws, FaExternalLinkAlt, FaMedal } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      level: "Professional",
      id: "TSQTE68LNE4Q1YS5",
      icon: <FaAws className="text-white text-5xl" />,
      bg: "from-orange-500 to-yellow-500",
      shadow: "shadow-orange-500/50",
      badge: "bg-orange-100 text-orange-800"
    },
    {
      name: "Certified Kubernetes Administrator",
      level: "Advanced",
      id: "CKA-Active",
      icon: <SiKubernetes className="text-white text-5xl" />,
      bg: "from-blue-600 to-blue-400",
      shadow: "shadow-blue-500/50",
      badge: "bg-blue-100 text-blue-800"
    },
    {
      name: "AWS Certified Solutions Architect",
      level: "Associate",
      id: "AWS00306962",
      icon: <FaAws className="text-white text-5xl" />,
      bg: "from-yellow-500 to-yellow-300",
      shadow: "shadow-yellow-500/50",
      badge: "bg-yellow-100 text-yellow-800"
    },
    {
      name: "AWS Certified CloudOps Engineer",
      level: "Associate",
      id: "",
      icon: <FaAws className="text-white text-5xl" />,
      bg: "from-orange-400 to-yellow-400",
      shadow: "shadow-orange-400/50",
      badge: "bg-orange-100 text-orange-800"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      level: "Foundational",
      id: "",
      icon: <FaAws className="text-white text-5xl" />,
      bg: "from-gray-600 to-gray-400",
      shadow: "shadow-gray-500/50",
      badge: "bg-gray-100 text-gray-800"
    },
    {
      name: "AWS Technical Professional",
      level: "APN Partner",
      id: "",
      icon: <FaAws className="text-white text-5xl" />,
      bg: "from-indigo-600 to-indigo-400",
      shadow: "shadow-indigo-500/50",
      badge: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-primary rounded-full blur-3xl opacity-10"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Validation & Credibility</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-6">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Certifications</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                Validated expertise in cloud architecture, container orchestration, and DevOps practices.
            </p>
            <div className="w-24 h-1.5 bg-accent mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                    {/* Card Header with Gradient */}
                    <div className={`h-32 bg-gradient-to-r ${cert.bg} relative flex items-center justify-center overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                            {cert.icon}
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8 pt-12 relative">
                        {/* Floating Badge */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${cert.badge}`}>
                                <FaMedal className="text-lg" />
                            </div>
                        </div>

                        <div className="text-center">
                            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${cert.badge}`}>
                                {cert.level}
                            </span>
                            <h3 className="text-xl font-bold text-primary mb-6 min-h-[56px] flex items-center justify-center leading-tight">
                                {cert.name}
                            </h3>
                            
                            <div className="w-full h-px bg-gray-100 mb-6"></div>

                            {cert.id ? (
                                <div className="space-y-3">
                                    <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                                        <span>ID:</span>
                                        <code className="bg-gray-50 px-2 py-1 rounded border border-gray-200 font-mono text-primary font-medium select-all">
                                            {cert.id}
                                        </code>
                                    </div>
                                    <button className="w-full mt-4 py-2 px-4 rounded-lg border border-gray-200 text-gray-600 font-medium text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300 flex items-center justify-center gap-2 group/btn">
                                        Verify Credential
                                        <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ) : (
                                <div className="text-gray-400 text-sm italic py-2">
                                    Credential ID available on request
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
