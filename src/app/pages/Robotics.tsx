import { motion } from "motion/react";
import { Bot, Cpu, Radio, Eye, Zap, Settings } from "lucide-react";
import { BackgroundSlideshow } from "../components/BackgroundSlideshow";

const robots = [
  {
    name: "Autonomous Navigator",
    type: "Autonomous Robot",
    icon: <Bot size={48} />,
    desc: "Self-navigating robot with path planning and obstacle avoidance",
    features: ["Sensor Integration", "Navigation Algorithm", "Autonomous Control", "Real-time Processing"],
    status: "Development",
  },
  {
    name: "Line Follower Pro",
    type: "Line Following Robot",
    icon: <Radio size={48} />,
    desc: "Fast line following robot with PID control",
    features: ["IR Sensors", "PID Algorithm", "High-Speed Motors", "Optimized Circuit"],
    status: "Development",
  },
  {
    name: "Obstacle Avoidance Bot",
    type: "Autonomous Robot",
    icon: <Zap size={48} />,
    desc: "Robot that detects and avoids obstacles using ultrasonic sensors",
    features: ["Ultrasonic Sensors", "Motor Control", "Arduino Programming", "Real-time Processing"],
    status: "Development",
  },
];

export function Robotics() {
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
            Robotics <span className="text-primary">Division</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building autonomous robots and automation systems for competitions and learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {robots.map((robot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-primary/30 hover:border-primary/50 hover:neon-glow transition-all"
            >
              <div className="text-primary mb-4">{robot.icon}</div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1">{robot.name}</h3>
                <p className="text-sm text-muted-foreground">{robot.type}</p>
              </div>

              <p className="text-muted-foreground mb-4">{robot.desc}</p>

              <div className="mb-4">
                <div className="text-sm font-semibold text-primary mb-2">Key Features</div>
                <div className="space-y-1">
                  {robot.features.map((feature, j) => (
                    <div key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`inline-block px-4 py-1 rounded-full text-sm ${
                  robot.status === "Operational"
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-secondary/20 text-secondary border border-secondary/30"
                }`}
              >
                {robot.status}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            State-of-the-Art <span className="text-primary">Facilities</span>
          </h2>

          <div className="glass-card rounded-2xl p-8 mb-12 border-2 border-primary/50 neon-glow">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-primary" size={48} />
              <h3 className="text-3xl font-bold">Smart Factory Setup</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              World-class robotics laboratory worth ₹1.5 Crore equipped with cutting-edge robotic systems
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Humanoid Robot", icon: "🤖" },
                { name: "SpiderPi", icon: "🕷️" },
                { name: "Robotic Arm", icon: "🦾" },
                { name: "Tetrix Kits", icon: "🔧" },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-lg p-4 border border-primary/20 hover:border-primary/50 transition-all text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-sm text-primary font-semibold">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-primary">Capabilities</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Autonomous Navigation",
                desc: "Path planning and navigation algorithms for autonomous robot movement and obstacle avoidance",
                icon: <Radio size={40} />,
              },
              {
                title: "Sensor Integration",
                desc: "Ultrasonic, IR, and other sensor systems for environmental perception and control",
                icon: <Eye size={40} />,
              },
              {
                title: "Control Systems",
                desc: "PID controllers and motor control algorithms for precise robot control and movement",
                icon: <Settings size={40} />,
              },
              {
                title: "Embedded Programming",
                desc: "Arduino and microcontroller programming for robot control and automation",
                icon: <Cpu size={40} />,
              },
            ].map((capability, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="text-primary mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 border border-secondary/30 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Robotics Team</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for passionate students interested in robotics and automation.
            No prior experience required!
          </p>
          <button className="px-8 py-4 rounded-lg gradient-primary text-background font-semibold hover:scale-105 transition-transform">
            Apply Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
