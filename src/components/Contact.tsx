import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobe, FaLinkedin, FaMedium, FaGithub, FaTwitter } from 'react-icons/fa';
import { supabase } from '../lib/supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            subject: formData.subject, 
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later or email me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-cloud">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-gray-600 mt-4">Cloud architecture consultation or DevOps training</p>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:w-1/3 space-y-8"
            >
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-accent h-full">
                    <h3 className="text-2xl font-bold text-primary mb-6">Contact Info</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="text-accent text-xl mt-1"><FaMapMarkerAlt /></div>
                            <div>
                                <h4 className="font-bold text-gray-800">Location</h4>
                                <p className="text-gray-600">Lahore, Pakistan</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-accent text-xl mt-1"><FaEnvelope /></div>
                            <div>
                                <h4 className="font-bold text-gray-800">Email</h4>
                                <a href="mailto:engr.syedusmanahmad@gmail.com" className="text-gray-600 hover:text-accent transition-colors">engr.syedusmanahmad@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-accent text-xl mt-1"><FaPhoneAlt /></div>
                            <div>
                                <h4 className="font-bold text-gray-800">Phone</h4>
                                <a href="tel:+923338383601" className="text-gray-600 hover:text-accent transition-colors">+92 333 8383601</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-accent text-xl mt-1"><FaGlobe /></div>
                            <div>
                                <h4 className="font-bold text-gray-800">Website</h4>
                                <a href="https://www.syedusmanahmad.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors">www.syedusmanahmad.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h4 className="font-bold text-gray-800 mb-4">Connect on Social Media</h4>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com/in/engrusman-ahmad" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md hover:scale-110 transform"><FaLinkedin /></a>
                            <a href="https://medium.com/@engr-syedusmanahmad" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-md hover:scale-110 transform"><FaMedium /></a>
                            <a href="https://github.com/engr-usman" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-black transition-colors shadow-md hover:scale-110 transform"><FaGithub /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors shadow-md hover:scale-110 transform"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:w-2/3"
            >
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`w-full py-4 bg-accent hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                        {status.message && (
                            <div className={`mt-4 p-4 rounded-lg text-center font-medium ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
