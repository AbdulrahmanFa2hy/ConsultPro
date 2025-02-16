import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaClock } from 'react-icons/fa';

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ConsultPro</h1>
            <p className="text-xl text-gray-100">
              Transforming businesses through strategic consulting and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-dark">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At ConsultPro, we're dedicated to empowering businesses with strategic insights and innovative solutions. Our mission is to help organizations navigate complex challenges and achieve sustainable growth through expert consulting services.
              </p>
              <p className="text-gray-600">
                We believe in building long-term partnerships with our clients, understanding their unique needs, and delivering tailored solutions that drive real results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: <FaUsers className='text-4xl'/>, label: "Expert Team" },
                { icon: <FaChartLine className='text-4xl'/>, label: "Data-Driven" },
                { icon: <FaClock className='text-4xl'/>, label: "15+ Years" },
                { icon: <FaUsers className='text-4xl'/>, label: "500+ Clients" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-4xl text-primary mb-3 flex justify-center">
                    {item.icon}
                  </div>
                  <div className="font-semibold text-dark">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-dark">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do and shape how we work with our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every project and engagement"
              },
              {
                title: "Innovation",
                description: "We embrace innovation and creative problem-solving"
              },
              {
                title: "Integrity",
                description: "We maintain the highest standards of professional integrity"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-dark">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}