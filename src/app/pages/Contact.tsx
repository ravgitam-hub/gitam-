import { motion } from "motion/react";
import { Mail, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { BackgroundSlideshow } from "../components/BackgroundSlideshow";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting RAV! We'll get back to you soon.");
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <BackgroundSlideshow />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? Want to join RAV? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8 border border-primary/30">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="text-black" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">Email</div>
                    <a
                      href="mailto:rav.gitam@gmail.com"
                      className="text-primary hover:underline"
                    >
                      rav.gitam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-black" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">Location</div>
                    <a
                      href="https://maps.app.goo.gl/Lz7eRSk1n61Cr1Rp7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GITAM Deemed to be University
                      <br />
                      Rudraram, Hyderabad
                      <br />
                      Telangana, India
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-primary/30">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Follow Us</h3>

              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/company/robotics-and-autonomous-vehicles-r-a-v/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg glass-card border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <Linkedin className="text-primary" size={24} />
                  <span className="text-sm text-foreground">Robotics and Autonomous Vehicles (R.A.V.)</span>
                </a>
                <a
                  href="https://www.instagram.com/r.a.v_gitamhyd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg glass-card border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <Instagram className="text-primary" size={24} />
                  <span className="text-sm text-foreground">@r.a.v_gitamhyd (Club)</span>
                </a>
                <a
                  href="https://www.instagram.com/redline_racing_gitamhyd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg glass-card border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <Instagram className="text-primary" size={24} />
                  <span className="text-sm text-foreground">@redline_racing_gitamhyd (Racing Team)</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-2xl p-8 border border-primary/30"
          >
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-semibold text-foreground">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass-card border border-primary/30 focus:border-primary/50 outline-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-foreground">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass-card border border-primary/30 focus:border-primary/50 outline-none text-foreground placeholder:text-muted-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-foreground">Subject</label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass-card border border-primary/30 focus:border-primary/50 outline-none text-foreground"
                >
                  <option value="" className="bg-background text-foreground">Select a subject</option>
                  <option value="join" className="bg-background text-foreground">Join RAV</option>
                  <option value="sponsorship" className="bg-background text-foreground">Sponsorship Inquiry</option>
                  <option value="collaboration" className="bg-background text-foreground">Collaboration</option>
                  <option value="general" className="bg-background text-foreground">General Question</option>
                  <option value="other" className="bg-background text-foreground">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-foreground">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg glass-card border border-primary/30 focus:border-primary/50 outline-none text-foreground resize-none placeholder:text-muted-foreground"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg gradient-primary text-background font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 border border-primary/30"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Find Us on Campus</h2>
          <a
            href="https://maps.app.goo.gl/Lz7eRSk1n61Cr1Rp7"
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <div className="text-center">
              <MapPin className="text-primary mx-auto mb-4" size={64} />
              <div className="text-xl font-bold mb-2">RAV Workshop</div>
              <div className="text-muted-foreground">GITAM University Hyderabad Campus</div>
              <div className="text-primary text-sm mt-2">Click to view on Google Maps</div>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
