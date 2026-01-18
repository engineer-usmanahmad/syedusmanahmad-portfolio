
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Principal DevOps Engineer",
      company: "10Pearls",
      duration: "Jan 2023 — Present",
      location: "Lahore",
      achievements: [
        "Lead & mentor 5 DevOps engineers",
        "Architect AWS infrastructure (Well-Architected Framework)",
        "Manage 100+ containerized microservices on ECS Fargate",
        "Reduced infrastructure costs 35%",
        "Multi-account AWS strategy with Control Tower",
        "Reduced deployment time 60% with Terraform IaC",
        "Monthly training on cloud technologies"
      ]
    },
    {
      title: "Staff Engineer",
      company: "10Pearls",
      duration: "Jun 2021 — Jan 2023",
      location: "Lahore",
      achievements: [
        "Architected microservices on AWS EKS for IoT solar platform",
        "Multi-environment Kubernetes infrastructure",
        "Saved $2,500/month with Lambda automation",
        "Built serverless data pipelines",
        "25+ Jenkins pipelines, reduced execution 40%"
      ]
    },
    {
      title: "Senior DevOps Engineer",
      company: "10Pearls",
      duration: "Nov 2020 — Jun 2021",
      location: "Lahore",
      achievements: [
        "AWS infrastructure design with Terraform",
        "Reusable Terraform modules, reduced errors 70%",
        "Azure DevOps transformation with SSO/MFA",
        "Managed Kubernetes clusters 50+ pods"
      ]
    },
    {
      title: "Solutions Architect",
      company: "LbisTech",
      duration: "Jan 2020 — Nov 2020",
      location: "Remote / Hybrid",
      achievements: [
        "Migrated 15+ applications to AWS (zero downtime)",
        "Scalable architectures: ALB, CloudFront, RDS replicas",
        "AWS Certificate Manager for SSL/TLS automation",
        "Trained 50+ professionals, 95% certification pass rate",
        "Delivered AWS Solutions Architect & Developer training"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "Arbisof",
      duration: "Mar 2019 — Dec 2019",
      location: "Lahore",
      achievements: [
        "CI/CD infrastructure: Jenkins, Docker, Ansible on AWS",
        "Blue-green deployments on Elastic Beanstalk",
        "Automated PostgreSQL/MySQL backups to S3",
        "ELK Stack centralized logging for 50+ applications",
        "CloudWatch dashboards with PagerDuty integration"
      ]
    },
    {
      title: "Sr. VoIP Engineer",
      company: "IBEX.Co",
      duration: "Dec 2013 — Apr 2019",
      location: "Lahore",
      achievements: [
        "Distributed VoIP infrastructure, 1,000+ concurrent calls",
        "Cloud migration: 40% operational cost reduction",
        "S3 call recording with Glacier archiving",
        "Nagios & CloudWatch monitoring",
        "Cisco CUCM, SIP trunking management"
      ]
    },
    {
      title: "VoIP Engineer",
      company: "IBEX.Co",
      duration: "Dec 2013 — Apr 2019",
      location: "Lahore",
      achievements: [
        "Tier 2/3 support for 500+ agents",
        "IP-PBX, dial plans, IVR flows configuration",
        "Call routing and workforce optimization"
      ]
    },
    {
      title: "Jr VoIP Engineer",
      company: "Hadi Telecom",
      duration: "Jul 2013 — Dec 2013",
      location: "Lahore",
      achievements: [
        "Asterisk-based PBX systems configuration",
        "99.5% uptime maintenance",
        "Cisco voice gateways integration"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-cloud">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">Professional Experience</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300"></div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                    >
                        <div className="w-full md:w-1/2 md:px-8 pl-8 relative">
                             {/* Timeline Dot */}
                             <div className={`absolute top-0 md:top-6 left-[-5px] md:left-auto ${index % 2 === 0 ? 'md:right-[-9px]' : 'md:left-[-9px]'} w-5 h-5 bg-accent rounded-full border-4 border-white z-10`}></div>
                            
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-accent relative">
                                {/* Triangle pointer */}
                                <div className={`hidden md:block absolute top-6 ${index % 2 === 0 ? '-right-2 border-l-8 border-l-white' : '-left-2 border-r-8 border-r-white'} border-y-8 border-y-transparent w-0 h-0`}></div>
                                
                                <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                                <div className="flex flex-wrap justify-between items-center mb-4 mt-1">
                                    <span className="text-accent font-bold text-sm">{exp.company}</span>
                                    <span className="text-gray-500 text-sm italic">{exp.duration} | {exp.location}</span>
                                </div>
                                <ul className="space-y-2">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-600 text-sm">
                                            <span className="mr-2 text-accent mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2"></div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
