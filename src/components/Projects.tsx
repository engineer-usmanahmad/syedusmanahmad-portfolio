import { motion } from 'framer-motion';
import { FaAws, FaCloud, FaMoneyBillWave, FaDatabase, FaShieldAlt, FaChalkboardTeacher } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Account AWS Architecture",
      tech: "AWS Control Tower, Landing Zone, IAM, SCPs",
      description: "Enterprise-grade multi-account governance",
      icon: <FaAws className="text-aws text-4xl" />
    },
    {
      title: "Microservices on EKS",
      tech: "AWS EKS, Terraform, RBAC, Network Policies",
      description: "IoT solar platform microservices ecosystem",
      icon: <FaCloud className="text-blue-500 text-4xl" />
    },
    {
      title: "Cost Optimization",
      tech: "AWS Savings Plans, Reserved Instances",
      description: "35% infrastructure cost reduction",
      icon: <FaMoneyBillWave className="text-green-500 text-4xl" />
    },
    {
      title: "Serverless Data Pipeline",
      tech: "Lambda, S3, EventBridge, Step Functions",
      description: "Real-time telemetry processing",
      icon: <FaDatabase className="text-purple-500 text-4xl" />
    },
    {
      title: "DevSecOps Implementation",
      tech: "SonarQube, Jenkins, GitHub Actions",
      description: "Security scanning in CI/CD pipelines",
      icon: <FaShieldAlt className="text-red-500 text-4xl" />
    },
    {
      title: "Training & Community",
      tech: "AWS Community Builder badge",
      description: "500+ professionals trained, 95% pass rate",
      icon: <FaChalkboardTeacher className="text-accent text-4xl" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-cloud p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
                >
                    <div className="mb-6 p-4 bg-white rounded-full shadow-sm">
                        {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow italic">"{project.description}"</p>
                    <div className="w-full pt-4 border-t border-gray-200">
                        <p className="text-sm font-semibold text-accent">{project.tech}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
