import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const InteractiveContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-burgundy">LET'S WORK TOGETHER</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
            Let's Connect Our <span className="text-burgundy italic">Brilliance</span>.
          </h2>
          <p className="text-charcoal/70 text-sm leading-relaxed">
            Ready to elevate your brand presence? Fill out the form or reach out directly to schedule an introductory strategy session with our team.
          </p>

          <div className="space-y-4 pt-4">
            <div className="p-4 bg-cream-card rounded-xl border border-charcoal/5 flex items-center gap-4">
              <div className="p-2.5 bg-burgundy/10 text-burgundy rounded-lg">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-charcoal/50">EMAIL US</p>
                <p className="text-sm font-semibold text-charcoal">contact@brilliancekonnect.com</p>
              </div>
            </div>

            <div className="p-4 bg-cream-card rounded-xl border border-charcoal/5 flex items-center gap-4">
              <div className="p-2.5 bg-burgundy/10 text-burgundy rounded-lg">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-charcoal/50">CALL US</p>
                <p className="text-sm font-semibold text-charcoal">Monday – Friday (9:00 AM – 5:00 PM)</p>
              </div>
            </div>

            <div className="p-4 bg-cream-card rounded-xl border border-charcoal/5 flex items-center gap-4">
              <div className="p-2.5 bg-burgundy/10 text-burgundy rounded-lg">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-charcoal/50">HEADQUARTERS</p>
                <p className="text-sm font-semibold text-charcoal">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-cream-card p-8 sm:p-10 rounded-3xl border border-charcoal/5 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 bg-burgundy text-cream rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
              <h3 className="font-serif text-2xl font-bold text-charcoal">Message Sent!</h3>
              <p className="text-sm text-charcoal/70">Thank you for reaching out. We will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-charcoal/70 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-charcoal/10 rounded-xl focus:outline-none focus:border-burgundy text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-charcoal/70 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-charcoal/10 rounded-xl focus:outline-none focus:border-burgundy text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-charcoal/70 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Brand Campaign Strategy Query"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-cream border border-charcoal/10 rounded-xl focus:outline-none focus:border-burgundy text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-charcoal/70 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project goals..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-cream border border-charcoal/10 rounded-xl focus:outline-none focus:border-burgundy text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-burgundy hover:bg-burgundy-hover text-cream font-semibold uppercase text-xs tracking-wider py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow"
              >
                BOOK DISCOVERY CALL <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default InteractiveContact;