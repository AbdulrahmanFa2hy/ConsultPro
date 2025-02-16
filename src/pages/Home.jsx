import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChartLine, FaLightbulb, FaHandshake, FaUsers, FaTrophy, FaGlobe, FaRegComments, FaRegNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      id: 'strategic-planning',
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: "Strategic Planning",
      description: "Develop comprehensive strategies to achieve your business goals"
    },
    {
      id: 'innovation-consulting',
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: "Innovation Consulting",
      description: "Transform your business with cutting-edge solutions"
    },
    {
      id: 'business-development',
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Business Development",
      description: "Accelerate growth and maximize market opportunities"
    },
    {
      id: 'organizational-excellence',
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Organizational Excellence",
      description: "Optimize your team's performance and culture"
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "50+", label: "Industry Experts" },
    { number: "15+", label: "Years Experience" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      content: "ConsultPro transformed our business strategy, leading to a 200% growth in just 18 months."
    },
    {
      name: "Michael Chen",
      position: "Director, Global Solutions",
      content: "Their innovative approach to problem-solving sets them apart from other consulting firms."
    },
    {
      name: "Emma Williams",
      position: "Founder, EcoVentures",
      content: "The strategic insights provided by ConsultPro were instrumental in our successful market expansion."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-r from-dark to-primary text-white pt-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Transform your business with expert consulting services
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" ref={ref} className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive consulting solutions to help your business thrive in today's competitive market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center group hover:shadow-xl transition-shadow cursor-pointer"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => window.location.href = `/services/${service.id}`}
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-dark">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-gray-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our clients say about working with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FaRegComments className="text-3xl text-primary mb-4" />
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="font-semibold text-dark">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.position}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaGlobe />, name: "Technology" },
              { icon: <FaRegNewspaper />, name: "Finance" },
              { icon: <FaTrophy />, name: "Healthcare" },
              { icon: <FaLightbulb />, name: "Manufacturing" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl text-primary mb-4 flex justify-center">
                  {industry.icon}
                </div>
                <div className="text-lg font-semibold text-dark">{industry.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest business insights and industry trends
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Digital Transformation",
                excerpt: "Discover how businesses are leveraging digital technologies to stay competitive.",
                date: "Mar 15, 2024"
              },
              {
                title: "Building Resilient Organizations",
                excerpt: "Learn strategies for creating adaptable and resilient business structures.",
                date: "Mar 10, 2024"
              },
              {
                title: "Sustainable Business Practices",
                excerpt: "Explore how sustainability drives business success in today's market.",
                date: "Mar 5, 2024"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-3 text-dark">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to="#" className="text-primary font-semibold hover:text-secondary">
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8">
              Let's work together to achieve your business goals
            </p>
            <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}