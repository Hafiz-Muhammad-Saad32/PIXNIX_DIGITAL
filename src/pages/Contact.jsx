import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser";
import { useState } from 'react'
import ScrollReveal from '../components/animations/ScrollReveal'
import SectionChip from '../components/common/SectionChip'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccessMessage(
        "We've received your message! Our team will get back to you within 24 hours."
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });

      setTimeout(() => setSuccessMessage(""), 8000);
    } catch (error) {
      console.error(error);

      setSuccessMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How long does a project take?",
      a: "It depends on the scope. A logo takes 3-5 days. A full brand identity takes 1-2 weeks. A website takes 2-4 weeks. We always give a clear timeline before we start."
    },
    {
      q: "Do you work with international clients?",
      a: "Absolutely. We work with clients across Pakistan, UAE, UK, US, and beyond. Communication is done remotely via WhatsApp, email, and video calls."
    },
    {
      q: "What's your pricing like?",
      a: "Every project is custom-priced based on your needs and scope. We offer packages for all budgets from startups to established brands. Reach out and we'll give you a clear quote within 24 hours."
    },
    {
      q: "Do you offer revisions?",
      a: "Yes. Every project includes revision rounds. We work until you're 100% happy with the result."
    },
    {
      q: "Can I hire you for ongoing monthly work?",
      a: "Yes! We offer monthly retainer packages for social media, ads management, content creation, and more. Ask us about our monthly plans."
    }
  ]

  const services = [
    'Graphic Design', 'Branding', 'Social Media', 'AI Automations', 'AI Agents', 'Video Editing', 'Web Development', 'Ads & Marketing'
  ]

  return (
    <section id="contact" className="section-base bg-dark-base2 py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <SectionChip className='bg-black'>Get In Touch</SectionChip>

            <h2 className="font-black text-4xl md:text-5xl leading-tight mb-3 mt-3">
              Let's Build Something Creative Together
            </h2>

            <p className="text-text-light max-w-2xl mx-auto">
              Have a project in mind? Want to know what's possible for your brand? Drop us a message we respond fast.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Info Row */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="card-base p-6 text-center bg-dark-card/60 border border-border-secondary rounded-xl">
            <div className="text-2xl mb-2">💬</div>
            <div className="font-bold text-sm mb-1">WhatsApp</div>
            <div className="text-xs text-text-light">+92 309 3210056</div>
            <a href="https://wa.me/923093210056" target="_blank" rel="noopener noreferrer" className="block mt-3 text-xs text-primary-pink3">Chat with us directly</a>
          </div>

          <div className="card-base p-6 text-center bg-dark-card/60 border border-border-secondary rounded-xl">
            <div className="text-2xl mb-2">✉️</div>
            <div className="font-bold text-sm mb-1">Email</div>
            <div className="text-xs text-text-light">pixnixdesign@gmail.com</div>
            <a href="mailto:pixnixdesign@gmail.com" target="_blank" rel="noopener noreferrer" className="block mt-3 text-xs text-primary-pink3">For detailed inquiries</a>
          </div>

          <div className="card-base p-6 text-center bg-dark-card/60 border border-border-secondary rounded-xl">
            <div className="text-2xl mb-2">📸</div>
            <div className="font-bold text-sm mb-1">Instagram</div>
            <div className="text-xs text-text-light">@pixnix_digital</div>
            <a href="https://www.instagram.com/pixnix_digital/" target="_blank" rel="noopener noreferrer" className="block mt-3 text-xs text-primary-pink3">See our latest work</a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <ScrollReveal>
            <motion.div className="card-base p-6 bg-dark-card/70 border border-primary-pink/10 rounded-2xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="font-black text-2xl mb-3">Start Your Project</h3>
              <p className="text-text-light text-sm mb-4">Let's map out exactly what will move the needle for you. Fill the form and we'll follow up within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs uppercase font-bold text-primary-pink3 mb-2">
                      Full Name <span aria-label="required">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      aria-required="true"
                      className="form-input bg-black h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase font-bold text-primary-pink3 mb-2">
                      Email Address <span aria-label="required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      aria-required="true"
                      className="form-input bg-black h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase font-bold text-primary-pink3 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="form-input bg-black h-12"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-xs uppercase font-bold text-primary-pink3 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input bg-black h-12"
                      aria-label="Select a service"
                    >
                      <option value="">Select a service</option>
                      {services.map((s, i) => (<option key={i} value={s}>{s}</option>))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs uppercase font-bold text-primary-pink3 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input bg-black h-12"
                      aria-label="Select project budget range"
                    >
                      <option value="">Select budget</option>
                      <option value="under-25k">Under 25k</option>
                      <option value="25-50k">25k-50k</option>
                      <option value="50-100k">50k-100k</option>
                      <option value="100k+">100k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase font-bold text-primary-pink3 mb-2">
                    Tell us about your project <span aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Briefly describe your project, goals, and timeline"
                    aria-required="true"
                    aria-describedby="message-hint"
                    className="form-textarea bg-black"
                  />
                  <p id="message-hint" className="text-xs text-text-muted mt-1">
                    Tell us about your project goals and timeline
                  </p>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-14 rounded-2xl bg-primary-pink text-white font-bold text-sm uppercase tracking-[2px] disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message ✦'}
                </motion.button>

                {successMessage && (
                  <div className="mt-3 p-3 text-sm text-green-300 bg-green-900/20 rounded-lg" role="alert">
                    {successMessage}
                  </div>
                )}
              </form>
            </motion.div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="card-base p-6 bg-dark-card/50 border border-border-secondary rounded-2xl space-y-4">
                <h4 className="font-black text-lg">Quick Answers</h4>
                <p className="text-text-light text-sm">Got Questions? We've Got Answers.</p>

                <div className="mt-4 space-y-4">
                  {faqs.map((f, i) => (
                    <details key={i} className="group bg-transparent border border-white/5 p-4 rounded-lg">
                      <summary className="font-bold cursor-pointer list-none">{f.q}</summary>
                      <div className="mt-2 text-sm text-text-light">{f.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
          <div className="card-base p-6 rounded-xl border border-border-secondary flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-black text-xl">Like What You See?</h4>
              <p className="text-text-light text-sm">Let's create something just as powerful or better for your brand.</p>
            </div>

            <div className="flex gap-3">
              <a href="https://wa.me/923093210056"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-block px-5 py-3 bg-green-600 text-white rounded-xl">Whats App us→</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact