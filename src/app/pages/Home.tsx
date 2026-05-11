import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Trophy, Users, Zap } from "lucide-react";
import { BackgroundSlideshow } from "../components/BackgroundSlideshow";

export function Home() {

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BackgroundSlideshow />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-card neon-glow">
              <span className="text-primary">GITAM Deemed to be University, Hyderabad</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              RAV
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
              Robotics & Automation Vehicles
            </h2>

            <p className="text-xl md:text-2xl mb-4 text-primary max-w-4xl mx-auto">
              Engineering the Future of Mobility and Intelligence
            </p>

            <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto">
              Where Mechanical Engineering Meets Robotics & Automation
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg gradient-primary text-background font-semibold hover:scale-105 transition-transform flex items-center gap-2"
              >
                Join RAV <ArrowRight size={20} />
              </Link>
              <Link
                to="/gokart"
                className="px-8 py-4 rounded-lg glass-card neon-glow text-primary font-semibold hover:scale-105 transition-transform"
              >
                Explore Projects
              </Link>
              <Link
                to="/sponsorship"
                className="px-8 py-4 rounded-lg border-2 border-secondary text-secondary font-semibold hover:scale-105 transition-transform"
              >
                Sponsor Us
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="glass-card rounded-2xl p-6 max-w-4xl mx-auto border-2 border-secondary neon-glow-red"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Trophy className="text-secondary" size={32} />
                <h3 className="text-2xl font-bold text-secondary">DKDC 2026 - Design Evaluation Winner</h3>
              </div>
              <p className="text-muted-foreground">
                Won the Design Evaluation round at Design Kart Design Challenge
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-8 text-center border border-primary/20 hover:border-primary/50 transition-all hover:neon-glow"
            >
              <Users className="text-primary mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Active Members</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-8 text-center border border-secondary/20 hover:border-secondary/50 transition-all hover:neon-glow-red"
            >
              <Trophy className="text-secondary mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-secondary mb-2">1</div>
              <div className="text-muted-foreground">Major Achievement</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-8 text-center border border-accent/20 hover:border-accent/50 transition-all"
            >
              <Zap className="text-accent mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Ongoing Projects</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Our <span className="text-primary">Focus Areas</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Go-Kart Design",
                  desc: "Formula racing inspired vehicle engineering",
                  icon: "🏎️",
                  link: "/gokart",
                },
                {
                  title: "Robotics",
                  desc: "Autonomous and intelligent robotic systems",
                  icon: "🤖",
                  link: "/robotics",
                },
                {
                  title: "Mechanical Design",
                  desc: "CAD modeling and structural engineering",
                  icon: "🔧",
                  link: "/gokart",
                },
                {
                  title: "Fabrication",
                  desc: "Hands-on manufacturing and assembly",
                  icon: "🔨",
                  link: "/gokart",
                },
                {
                  title: "Embedded Systems",
                  desc: "Microcontroller programming and integration",
                  icon: "💻",
                  link: "/robotics",
                },
              ].map((area, i) => (
                <Link key={i} to={area.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer"
                  >
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{area.title}</h3>
                    <p className="text-muted-foreground">{area.desc}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
