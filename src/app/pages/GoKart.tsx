import { motion } from "motion/react";
import { Gauge, Cog, Settings, Trophy, Zap, Target } from "lucide-react";
import { BackgroundSlideshow } from "../components/BackgroundSlideshow";

export function GoKart() {
  const specs = [
    { label: "Engine Type", value: "4-Stroke Single Cylinder" },
    { label: "Max Speed", value: "80 km/h" },
    { label: "Weight", value: "180 kg" },
    { label: "Wheelbase", value: "1350 mm" },
    { label: "Track Width", value: "1200 mm" },
    { label: "Braking System", value: "Hydraulic Disc Brakes" },
  ];

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
            Go-Kart <span className="text-primary">Division</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Formula racing inspired engineering excellence in vehicle design and manufacturing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-12 mb-12 border border-primary/30 text-center"
        >
          <div className="text-8xl mb-6">🏎️</div>
          <h2 className="text-3xl font-bold mb-4">RAV Go-Kart 2024</h2>
          <p className="text-lg text-muted-foreground">
            Our flagship vehicle designed for the DKDC and FKDC competitions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-primary/30"
          >
            <Gauge className="text-primary mb-4" size={48} />
            <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
            <div className="space-y-4">
              {specs.map((spec, i) => (
                <div key={i} className="flex justify-between items-center border-b border-primary/10 pb-3">
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-bold text-primary">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-secondary/30"
          >
            <Trophy className="text-secondary mb-4" size={48} />
            <h2 className="text-3xl font-bold mb-6">Performance Analytics</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Acceleration (0-60 km/h)</span>
                  <span className="font-bold text-primary">4.2s</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[85%] gradient-primary" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Braking Efficiency</span>
                  <span className="font-bold text-primary">92%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[92%] gradient-primary" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Handling Rating</span>
                  <span className="font-bold text-primary">88%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[88%] gradient-primary" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Weight Distribution</span>
                  <span className="font-bold text-primary">48:52</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[90%] gradient-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Design & <span className="text-primary">Manufacturing</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Settings size={40} />,
                title: "Chassis Design",
                desc: "Lightweight tubular steel frame optimized for strength and rigidity",
              },
              {
                icon: <Cog size={40} />,
                title: "Powertrain",
                desc: "High-performance engine with custom exhaust and intake systems",
              },
              {
                icon: <Zap size={40} />,
                title: "Steering System",
                desc: "Precision rack-and-pinion steering with optimized Ackermann geometry",
              },
              {
                icon: <Target size={40} />,
                title: "Braking System",
                desc: "Dual hydraulic disc brakes with balanced brake bias",
              },
              {
                icon: <Gauge size={40} />,
                title: "Suspension",
                desc: "Independent double-wishbone suspension for superior handling",
              },
              {
                icon: <Settings size={40} />,
                title: "Fabrication",
                desc: "In-house welding, machining, and assembly by our skilled team",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 border-2 border-secondary/50 neon-glow-red"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Competition Achievement</h2>
          <div className="text-center">
            <div className="text-secondary text-2xl font-bold mb-2">DKDC 2024</div>
            <div className="text-4xl font-bold text-primary mb-4">Design Evaluation Winner 🏆</div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team won the Design Evaluation round at the Design Kart Design Challenge 2024,
              showcasing excellence in vehicle engineering, design documentation, and technical presentation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
