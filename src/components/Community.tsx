import { motion } from 'framer-motion';
import { FaAws, FaGoogle, FaLinux, FaMicrophoneAlt } from 'react-icons/fa';

const Community = () => {
  const items = [
    {
      name: "AWS Community Builder",
      icon: <FaAws className="text-aws text-5xl" />,
      desc: "Official Badge"
    },
    {
      name: "Kubernetes Community",
      icon: <FaLinux className="text-black text-5xl" />, // Using Linux icon as proxy for Linux Foundation/K8s community if needed, or stick to FaLinux/SiKubernetes
      desc: "Linux Foundation"
    },
    {
      name: "Google GDG Cloud",
      icon: <FaGoogle className="text-blue-500 text-5xl" />,
      desc: "Active Member"
    },
    {
      name: "Technical Speaker",
      icon: <FaMicrophoneAlt className="text-accent text-5xl" />,
      desc: "Architecture & Cost Optimization"
    }
  ];

  return (
    <section className="py-20 bg-cloud">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">Speaking & Community</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10">
            {items.map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-accent w-64 flex flex-col items-center text-center hover:shadow-xl transition-all"
                >
                    <div className="mb-4">
                        {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{item.name}</h3>
                    <p className="text-gray-500 font-medium">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
