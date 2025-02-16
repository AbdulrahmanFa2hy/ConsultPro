import { motion } from 'framer-motion';
import { FaChartLine, FaLightbulb, FaHandshake, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'strategic-planning',
      icon: <FaChartLine className="text-5xl text-primary" />,
      title: "Strategic Planning",
      description: "Develop comprehensive strategies to achieve your business goals",
      features: [
        "Market analysis",
        "Competitive positioning",
        "Growth strategy",
        "Performance metrics"
      ]
    },
    {
      id: 'innovation-consulting',
      icon: <FaLightbulb className="text-5xl text-primary" />,
      title: "Innovation Consulting",
      description: "Transform your business with cutting-edge solutions",
      features: [
        "Digital transformation",
        "Process innovation",
        "Technology adoption",
        "Change management"
      ]
    },
    {
      id: 'business-development',
      icon: <FaHandshake className="text-5xl text-primary" />,
      title: "Business Development",
      description: "Accelerate growth and maximize market opportunities",
      features: [
        "Market expansion",
        "Partnership development",
        "Sales strategy",
        "Revenue optimization"
      ]
    },
    {
      id: 'organizational-excellence',
      icon: <FaUsers className="text-5xl text-primary" />,
      title: "Organizational Excellence",
      description: "Optimize your team's performance and culture",
      features: [
        "Leadership development",
        "Team building",
        "Process optimization",
        "Culture transformation"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-100">
              Comprehensive consulting solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4 text-dark">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-block btn-primary"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}