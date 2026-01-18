
import { motion } from 'framer-motion';
import { FaAws, FaPython } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiJenkins, SiPrometheus } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Cloud Platforms",
      percentage: 95,
      icon: <FaAws className="text-aws" />,
      items: ["AWS (Expert): EC2, ECS, EKS, Lambda, S3, RDS, CloudFront, VPC, IAM, Control Tower", "Azure: Azure DevOps, Azure AD"]
    },
    {
      category: "Container & Orchestration",
      percentage: 95,
      icon: <SiKubernetes className="text-blue-500" />,
      items: ["Kubernetes, Docker, ECS Fargate, Helm"]
    },
    {
      category: "Infrastructure as Code",
      percentage: 90,
      icon: <SiTerraform className="text-purple-500" />,
      items: ["Terraform, CloudFormation, Ansible"]
    },
    {
      category: "CI/CD & DevOps",
      percentage: 90,
      icon: <SiJenkins className="text-red-500" />,
      items: ["Jenkins, GitHub Actions, GitOps, Azure DevOps"]
    },
    {
      category: "Programming",
      percentage: 85,
      icon: <FaPython className="text-yellow-500" />,
      items: ["Python, Bash, Groovy, PowerShell"]
    },
    {
      category: "Monitoring & Security",
      percentage: 85,
      icon: <SiPrometheus className="text-orange-500" />,
      items: ["Prometheus, Grafana, ELK Stack, CloudWatch, SonarQube"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-cloud">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">Technical Skills</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl p-3 bg-cloud rounded-lg">
                            {skill.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">{skill.category}</h3>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <motion.div 
                                    className="bg-accent h-2.5 rounded-full" 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.percentage}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{ once: true }}
                                ></motion.div>
                            </div>
                        </div>
                        <span className="font-bold text-primary">{skill.percentage}%</span>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                        {skill.items.map((item, i) => (
                             <div key={i} className="text-gray-600 text-sm">
                                {item}
                             </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-white p-6 rounded-xl shadow-sm inline-block w-full"
        >
             <p className="text-gray-700 text-lg">
                <span className="font-bold text-primary">Additional Expertise:</span> VoIP (Asterisk, Cisco CUCM), Networking, Cost Optimization
             </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
