import { motion } from "motion/react";
import { Handshake, Award, Users, Megaphone, Download, Mail } from "lucide-react";
import { Link } from "react-router";
import { BackgroundSlideshow } from "../components/BackgroundSlideshow";

const tiers = [
  {
    name: "Gold Sponsor",
    price: "₹50,000+",
    color: "from-yellow-400 to-yellow-600",
    benefits: [
      "Primary logo placement on go-kart",
      "Exclusive branding at all events",
      "Social media campaign featuring your brand",
      "Newsletter features",
      "Access to talent pool for recruitment",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "₹25,000 - ₹49,999",
    color: "from-accent to-muted",
    benefits: [
      "Logo on go-kart and equipment",
      "Recognition at events",
      "Social media acknowledgment",
      "Newsletter mentions",
    ],
  },
  {
    name: "Bronze Sponsor",
    price: "₹10,000 - ₹24,999",
    color: "from-secondary to-primary",
    benefits: [
      "Logo on team apparel",
      "Social media acknowledgment",
      "Newsletter mentions",
      "Event participation",
    ],
  },
  {
    name: "Parts & Equipment Sponsor",
    price: "In-Kind Support",
    color: "from-primary to-accent",
    benefits: [
      "Sponsor specific parts or equipment",
      "Support student projects with materials",
      "Battery, motors, sensors, or other components",
      "Brand recognition on sponsored parts",
      "Direct impact on student learning",
    ],
  },
  {
    name: "Technical Partner",
    price: "Software/Tools",
    color: "from-primary to-secondary",
    benefits: [
      "Software licenses and tools",
      "Technology exchange",
      "Joint research opportunities",
      "Brand association",
      "Knowledge sharing sessions",
    ],
  },
];

const sponsors = [
  {
    name: "Powerstorm",
    type: "Battery Partner",
    description: "Sponsored battery for DKDC EV Kart",
  },
  {
    name: "SolidWorks",
    type: "CAD Software Partner",
    description: "Design and simulation software",
  },
  {
    name: "ANSYS",
    type: "Analysis Software Partner",
    description: "Engineering simulation tools",
  },
  {
    name: "GITAM University",
    type: "Institutional Partner",
    description: "Primary support and facilities",
  },
];

export function Sponsorship() {
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
            Partner With <span className="text-primary">RAV</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in shaping the future of engineering education and innovation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 mb-16 border border-primary/30"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Why Sponsor RAV?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users size={40} />,
                title: "Talent Access",
                desc: "Connect with skilled engineering students",
              },
              {
                icon: <Award size={40} />,
                title: "Brand Visibility",
                desc: "Exposure at competitions and events",
              },
              {
                icon: <Megaphone size={40} />,
                title: "Marketing Reach",
                desc: "Social media and campus visibility",
              },
              {
                icon: <Handshake size={40} />,
                title: "CSR Impact",
                desc: "Support education and innovation",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-primary mb-3 flex justify-center">{benefit.icon}</div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Sponsorship <span className="text-primary">Tiers</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-primary/30 hover:border-primary/50 transition-all hover:neon-glow"
              >
                <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.name}
                </div>
                <div className="text-3xl font-bold text-primary mb-6">{tier.price}</div>

                <div className="space-y-3">
                  {tier.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-primary">Sponsors & Partners</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sponsors.map((sponsor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="text-2xl font-bold text-primary mb-2">{sponsor.name}</div>
                <div className="text-sm text-secondary mb-2">{sponsor.type}</div>
                <div className="text-muted-foreground">{sponsor.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-12 border-2 border-primary/50 neon-glow text-center"
        >
          <Handshake className="text-primary mx-auto mb-6" size={64} />
          <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with RAV and invest in the future of engineering excellence. Download our
            sponsorship proposal or contact us directly.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg gradient-primary text-background font-semibold hover:scale-105 transition-transform flex items-center gap-2">
              <Download size={20} />
              Download Proposal
            </button>
            <Link to="/contact">
              <button className="px-8 py-4 rounded-lg glass-card border-2 border-primary text-primary font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                <Mail size={20} />
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
