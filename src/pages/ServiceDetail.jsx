import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChartLine, FaLightbulb, FaHandshake, FaUsers } from 'react-icons/fa';
import growthAnalytics from '../assets/Consulting-bro.png';
import innovation from '../assets/consulting-amico.png';
import businessDeal from '../assets/grow.png';
import teamSpirit from '../assets/strategy-pana.png';

const services = {
  'strategic-planning': {
    icon: <FaChartLine className="text-8xl text-primary mb-4" />,
    title: "Strategic Planning",
    description: "Develop comprehensive strategies to achieve your business goals",
    image: growthAnalytics,
    features: [
      "Business strategy development",
      "Market analysis and positioning",
      "Growth planning and execution",
      "Performance metrics and KPIs",
      "Risk assessment and management"
    ],
    benefits: [
      "Clear direction and goals",
      "Improved decision making",
      "Competitive advantage",
      "Measurable results",
      "Sustainable growth"
    ]
  },
  'innovation-consulting': {
    icon: <FaLightbulb className="text-8xl text-primary mb-4" />,
    title: "Innovation Consulting",
    description: "Transform your business with cutting-edge solutions",
    image: innovation,
    features: [
      "Digital transformation",
      "Process innovation",
      "Product development",
      "Technology adoption",
      "Innovation culture building"
    ],
    benefits: [
      "Increased efficiency",
      "New revenue streams",
      "Enhanced customer experience",
      "Competitive edge",
      "Future-ready organization"
    ]
  },
  'business-development': {
    icon: <FaHandshake className="text-8xl text-primary mb-4" />,
    title: "Business Development",
    description: "Accelerate growth and maximize market opportunities",
    image: businessDeal,
    features: [
      "Market expansion",
      "Partnership development",
      "Sales strategy",
      "Customer acquisition",
      "Revenue optimization"
    ],
    benefits: [
      "Increased market share",
      "Strong partnerships",
      "Revenue growth",
      "Customer loyalty",
      "Sustainable business model"
    ]
  },
  'organizational-excellence': {
    icon: <FaUsers className="text-8xl text-primary mb-4" />,
    title: "Organizational Excellence",
    description: "Optimize your team's performance and culture",
    image: teamSpirit,
    features: [
      "Leadership development",
      "Team building",
      "Process optimization",
      "Change management",
      "Culture transformation"
    ],
    benefits: [
      "Improved productivity",
      "Enhanced employee engagement",
      "Better team collaboration",
      "Reduced turnover",
      "Stronger company culture"
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services[id];

  if (!service) {
    return <div className="pt-20 text-center">Service not found</div>;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center justify-center"
        >
          <div className=''>{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {service.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full max-w-lg mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="w-3 h-3 bg-primary rounded-full mb-3"></div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
          <button className="btn-primary">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}