import { motion } from "motion/react";
import { Linkedin, Mail, Github } from "lucide-react";

const coreTeam = [
  {
    name: "Team Captain",
    role: "Overall Leadership",
    domain: "Management",
    image: "👨‍💼",
    skills: ["Leadership", "Strategy", "Project Management"],
  },
  {
    name: "Technical Lead",
    role: "Go-Kart Division Head",
    domain: "Mechanical Engineering",
    image: "👩‍🔧",
    skills: ["Mechanical Design", "CAD", "Vehicle Dynamics"],
  },
  {
    name: "Robotics Lead",
    role: "Robotics Division Head",
    domain: "Robotics & Automation",
    image: "👨‍💻",
    skills: ["Embedded Systems", "Automation", "Control Systems"],
  },
  {
    name: "Fabrication Lead",
    role: "Manufacturing Head",
    domain: "Fabrication",
    image: "👨‍🔧",
    skills: ["Welding", "Machining", "Assembly"],
  },
];

const domainHeads = [
  { name: "Chassis Design Lead", role: "Frame & Structure", domain: "Mechanical", image: "👨‍🔬" },
  { name: "Powertrain Lead", role: "Engine & Transmission", domain: "Powertrain", image: "👨‍🔧" },
  { name: "Steering & Brakes Lead", role: "Control Systems", domain: "Dynamics", image: "👩‍🔬" },
  { name: "Suspension Lead", role: "Suspension Systems", domain: "Mechanical", image: "👨‍🏭" },
  { name: "Robotics Lead", role: "Autonomous Systems", domain: "Robotics", image: "👩‍💻" },
  { name: "Marketing Lead", role: "Outreach & Sponsorship", domain: "Marketing", image: "👩‍💼" },
];

const faculty = [
  {
    name: "Faculty Coordinator",
    role: "Technical Advisor",
    dept: "Mechanical Engineering Department",
    image: "👨‍🏫",
  },
];

export function Team() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The brilliant minds driving innovation at RAV
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Faculty <span className="text-primary">Mentors</span>
          </h2>

          <div className="flex justify-center">
            {faculty.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 border-2 border-primary/30 hover:border-primary/50 transition-all hover:neon-glow text-center max-w-md"
              >
                <div className="text-8xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <div className="text-primary font-semibold mb-1">{member.role}</div>
                <div className="text-sm text-muted-foreground">{member.dept}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Core <span className="text-primary">Team</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-primary/30 hover:border-primary/50 transition-all hover:neon-glow group"
              >
                <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">
                  {member.image}
                </div>

                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-primary font-semibold text-sm mb-1">{member.role}</div>
                <div className="text-xs text-muted-foreground mb-4">{member.domain}</div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 justify-center">
                  <button className="p-2 rounded-lg glass-card border border-primary/20 hover:border-primary/50 transition-all">
                    <Linkedin size={18} className="text-primary" />
                  </button>
                  <button className="p-2 rounded-lg glass-card border border-primary/20 hover:border-primary/50 transition-all">
                    <Github size={18} className="text-primary" />
                  </button>
                  <button className="p-2 rounded-lg glass-card border border-primary/20 hover:border-primary/50 transition-all">
                    <Mail size={18} className="text-primary" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Domain <span className="text-primary">Heads</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainHeads.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all text-center"
              >
                <div className="text-6xl mb-3">{member.image}</div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <div className="text-sm text-primary font-semibold mb-1">{member.role}</div>
                <div className="text-xs text-muted-foreground">{member.domain}</div>
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
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students to join RAV. Whether you're interested in
            mechanical design, robotics, fabrication, or marketing, there's a place for you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="glass-card rounded-lg p-4 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="glass-card rounded-lg p-4 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Specialized Domains</div>
            </div>
            <div className="glass-card rounded-lg p-4 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Dedication</div>
            </div>
          </div>

          <button className="px-8 py-4 rounded-lg gradient-primary text-background font-semibold hover:scale-105 transition-transform">
            Apply to Join RAV
          </button>
        </motion.div>
      </div>
    </div>
  );
}
