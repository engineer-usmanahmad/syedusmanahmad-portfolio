import { motion } from 'framer-motion';
import { FaAws, FaGoogle, FaMicrophoneAlt, FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

const Community = () => {
  const communities = [
    {
      name: "AWS Community Builder",
      role: "Official Member",
      icon: <FaAws className="text-white text-4xl" />,
      desc: "Selected as a community leader to share knowledge and technical expertise in the AWS ecosystem.",
      color: "bg-[#FF9900]", // AWS Orange
      textColor: "text-[#FF9900]",
      stats: "Community Leader"
    },
    {
      name: "Kubernetes Community",
      role: "Contributor",
      icon: <SiKubernetes className="text-white text-4xl" />,
      desc: "Active participant in the Linux Foundation's Kubernetes initiatives and local meetups.",
      color: "bg-[#326CE5]", // K8s Blue
      textColor: "text-[#326CE5]",
      stats: "Linux Foundation"
    },
    {
      name: "Google GDG Cloud",
      role: "Active Member",
      icon: <FaGoogle className="text-white text-4xl" />,
      desc: "Engaging with developers to explore Google Cloud Platform technologies and innovations.",
      color: "bg-[#4285F4]", // Google Blue
      textColor: "text-[#4285F4]",
      stats: "Tech Evangelist"
    },
    {
      name: "Technical Speaker",
      role: "Thought Leadership",
      icon: <FaMicrophoneAlt className="text-white text-4xl" />,
      desc: "Delivering talks on Cloud Architecture, Cost Optimization, and DevOps best practices.",
      color: "bg-[#FF6B35]", // Accent Orange
      textColor: "text-[#FF6B35]",
      stats: "Conference Speaker"
    }
  ];

  return (
    <section id="community" className="py-24 bg-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/10">
                    <FaUsers className="text-accent mr-2" />
                    <span className="text-accent font-bold tracking-wider uppercase text-xs">Networking & Impact</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
                    Speaking & <span className="text-accent">Community</span>
                </h2>
                <p className="max-w-2xl mx-auto text-gray-300 text-lg">
                    Building bridges in the tech community through mentorship, knowledge sharing, and active contribution.
                </p>
                <div className="w-24 h-1.5 bg-accent mx-auto mt-8 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {communities.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                    >
                        {/* Hover Gradient Overlay */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${item.color.replace('bg-', 'from-')}`} />

                        <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                            <div className={`p-5 rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0 ${item.color}`}>
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{item.name}</h3>
                                </div>
                                <p className={`text-sm font-bold uppercase tracking-wider mb-3 ${item.textColor}`}>{item.role}</p>
                                <p className="text-gray-300 leading-relaxed mb-6">{item.desc}</p>
                                <div className="flex items-center text-gray-400 text-sm font-medium pt-4 border-t border-white/10">
                                    <FaGlobe className="mr-2 text-accent" />
                                    <span>{item.stats}</span>
                                    {index === 3 && (
                                        <div className="ml-auto flex items-center text-accent">
                                            <FaHandshake className="mr-1" />
                                            <span>Open for Talks</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Community;
