'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [showCallbackModal, setShowCallbackModal] = useState(false);

  const submitContactForm = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    const whatsappMessage = `*Contact Form Submission*%0A%0A*Name:* ${firstName} ${lastName}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/917709823098?text=${whatsappMessage}`, '_blank');
    
    form.reset();
    alert('Your message has been sent via WhatsApp. We will get back to you shortly!');
  };

  const submitCallbackRequest = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const time = formData.get('time') as string;
    const reason = formData.get('reason') as string;
    
    const whatsappMessage = `*Callback Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Preferred Time:* ${time}%0A*Reason:* ${reason}`;
    
    window.open(`https://wa.me/917709823098?text=${whatsappMessage}`, '_blank');
    
    setShowCallbackModal(false);
    form.reset();
    alert('Callback request sent! We will contact you at your preferred time.');
  };

  const toggleFaq = (element: HTMLElement) => {
    const faqItem = element.closest('.faq-item');
    const answer = faqItem?.querySelector('.faq-answer') as HTMLElement;
    const icon = element.querySelector('i');
    
    if (faqItem && answer && icon) {
      faqItem.classList.toggle('active');
      
      if (faqItem.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      } else {
        answer.style.maxHeight = '0';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
      }
    }
  };

  return (
    <div className="unified-background min-h-screen bg-cover bg-center bg-fixed animate-background-move relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-gray-700/30 animate-gradient-shift"></div>
      
      <div className="relative z-10">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-black/60 via-black/40 to-black/60 text-white py-32 text-center relative z-10">
          <div className="max-w-4xl mx-auto px-5">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl opacity-90 drop-shadow-md">
              Get in touch with our travel experts
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black">Get in Touch</h2>
                <p className="text-lg leading-relaxed text-black">
                  Ready to embark on your next adventure? Our travel experts are here to help you plan the perfect trip to India. Contact us today!
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: 'fas fa-phone',
                      title: 'Call Us',
                      info: '+91 77098 23098',
                      subtitle: 'Mon - Sat: 9:00 AM - 8:00 PM'
                    },
                    {
                      icon: 'fas fa-envelope',
                      title: 'Email Us',
                      info: 'info@tripgoals.com',
                      subtitle: 'We\'ll respond within 24 hours'
                    },
                    {
                      icon: 'fab fa-whatsapp',
                      title: 'WhatsApp',
                      info: '+91 77098 23098',
                      subtitle: 'Quick support & bookings'
                    },
                    {
                      icon: 'fas fa-map-marker-alt',
                      title: 'Visit Us',
                      info: 'Mumbai, Maharashtra, India',
                      subtitle: 'By appointment only'
                    }
                  ].map((method, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white/90 p-6 rounded-2xl shadow-lg">
                      <div className="w-15 h-15 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                        <i className={method.icon}></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{method.title}</h3>
                        <p className="text-blue-600 font-medium mb-1">{method.info}</p>
                        <span className="text-gray-600 text-sm">{method.subtitle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white/90 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
                <form onSubmit={submitContactForm} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required
                        className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg text-base transition-colors focus:outline-none focus:border-blue-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        required
                        className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg text-base transition-colors focus:outline-none focus:border-blue-500 bg-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg text-base transition-colors focus:outline-none focus:border-blue-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg text-base transition-colors focus:outline-none focus:border-blue-500 bg-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">Subject</label>
                    <select 
                      name="subject"
                      required
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg text-base transition-colors focus:outline-none focus:border-blue-500 bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Assistance</option>
                      <option value="package">Package Information</option>
                      <option value="complaint">Complaint</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your travel plans or how we can help you..."
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg text-base transition-colors focus:outline-none focus:border-blue-500 bg-white resize-vertical min-h-[120px]"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none px-8 py-4 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 mt-4 inline-flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-blue-500 hover:-translate-y-0.5"
                  >
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 bg-white/90">
          <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: 'fab fa-whatsapp',
                  title: 'WhatsApp Chat',
                  description: 'Get instant responses to your queries',
                  action: () => window.open('https://wa.me/917709823098?text=Hi! I would like to know more about your travel packages.', '_blank'),
                  bgColor: 'from-green-500 to-green-600'
                },
                {
                  icon: 'fas fa-map',
                  title: 'View Packages',
                  description: 'Explore our amazing travel packages',
                  action: () => window.location.href = '/packages',
                  bgColor: 'from-blue-500 to-blue-600'
                },
                {
                  icon: 'fas fa-phone',
                  title: 'Call Now',
                  description: 'Speak directly with our travel experts',
                  action: () => window.location.href = 'tel:+917709823098',
                  bgColor: 'from-red-500 to-red-600'
                },
                {
                  icon: 'fas fa-calendar-alt',
                  title: 'Request Callback',
                  description: 'We\'ll call you at your preferred time',
                  action: () => setShowCallbackModal(true),
                  bgColor: 'from-orange-500 to-orange-600'
                }
              ].map((action, index) => (
                <div 
                  key={index}
                  onClick={action.action}
                  className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${action.bgColor} rounded-full flex items-center justify-center text-white text-2xl`}>
                    <i className={action.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{action.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{action.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: 'How do I book a package?',
                  answer: 'You can book a package by calling us at +91 77098 23098, messaging us on WhatsApp, or filling out the contact form. Our team will guide you through the entire booking process.'
                },
                {
                  question: 'What is included in the package prices?',
                  answer: 'Our packages typically include accommodation, transportation, meals, guided tours, and entry tickets to attractions. Specific inclusions vary by package and will be clearly mentioned.'
                },
                {
                  question: 'Can I customize my itinerary?',
                  answer: 'Absolutely! We specialize in creating customized itineraries based on your preferences, budget, and travel dates. Contact us to discuss your requirements.'
                },
                {
                  question: 'What is your cancellation policy?',
                  answer: 'Cancellation charges vary depending on the package and timing of cancellation. Generally, cancellations made 30 days in advance incur minimal charges. Please contact us for specific details.'
                }
              ].map((faq, index) => (
                <div key={index} className="faq-item bg-white/90 mb-4 rounded-xl overflow-hidden shadow-lg">
                  <div 
                    className="faq-question p-6 cursor-pointer flex justify-between items-center transition-colors hover:bg-gray-50"
                    onClick={(e) => toggleFaq(e.currentTarget)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 m-0">{faq.question}</h3>
                    <i className="fas fa-plus text-blue-500 transition-transform duration-300"></i>
                  </div>
                  <div className="faq-answer max-h-0 overflow-hidden transition-all duration-300">
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed m-0">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Callback Request Modal */}
      {showCallbackModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white/95 backdrop-blur-md mx-auto p-8 rounded-3xl w-full max-w-md relative animate-modal-slide-in border border-white/30">
            <button 
              onClick={() => setShowCallbackModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold cursor-pointer transition-colors"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Request Callback</h2>
            <form onSubmit={submitCallbackRequest} className="space-y-4">
              <div>
                <label className="block mb-2 font-medium text-gray-700 text-sm">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-base transition-colors focus:outline-none focus:border-blue-500 bg-white/80"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 text-sm">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-base transition-colors focus:outline-none focus:border-blue-500 bg-white/80"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 text-sm">Preferred Time</label>
                <select 
                  name="time"
                  required
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-base transition-colors focus:outline-none focus:border-blue-500 bg-white/80"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 text-sm">Reason for Call</label>
                <select 
                  name="reason"
                  required
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-base transition-colors focus:outline-none focus:border-blue-500 bg-white/80"
                >
                  <option value="">Select reason</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Package Booking</option>
                  <option value="custom">Custom Itinerary</option>
                  <option value="support">Support</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none px-4 py-4 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 mt-4 hover:from-blue-600 hover:to-blue-500 hover:-translate-y-0.5"
              >
                Request Callback
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .unified-background {
          background-image: url('https://images.unsplash.com/photo-1580475805491-3b1b70c4ef86?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        }
      `}</style>
    </div>
  );
}