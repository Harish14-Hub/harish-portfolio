import React, { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../common/AnimatedSection';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactForm>();

  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = useCallback(async (data: ContactForm) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }, [reset]);

  const contactInfo = useMemo(() => [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'harishpalanisamy14@gmail.com',
      href: 'harishpalanisamy14@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91-8344606549',
      href: 'tel:8344606549'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Tirupur, Tamil Nadu',
      href: '#'
    }
  ], []);

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <AnimatedSection
            direction="left"
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in hearing about new opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <AnimatedSection
                  key={info.title}
                  delay={index * 0.1}
                >
                  <motion.a
                    href={info.href}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {info.title}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                </AnimatedSection>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', href: 'https://github.com/Harish1405', color: 'hover:text-gray-900' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/harish-p-30975126a', color: 'hover:text-blue-600' },
                  { name: 'Twitter', href: 'https://twitter.com', color: 'hover:text-blue-400' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection
            direction="right"
            className="lg:col-span-2"
          >
            <Card className="p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for reaching out.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="your.mail ID"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                      placeholder="Hello..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};