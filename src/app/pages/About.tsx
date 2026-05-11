import { motion } from "motion/react";
import { Target, Eye, Award, Users } from "lucide-react";
import { BackgroundSlideshow } from "../components/BackgroundSlideshow";

export function About() {
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
            About <span className="text-primary">RAV</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            RAV is GITAM's premier technical club dedicated to pushing the boundaries of
            engineering excellence in robotics, automation, and vehicle design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-primary/30"
          >
            <Target className="text-primary mb-4" size={48} />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To cultivate a community of innovative engineers who excel in mechanical design,
              robotics, and automation. We strive to represent GITAM University Hyderabad
              at national competitions while fostering practical engineering skills and
              teamwork among students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-secondary/30"
          >
            <Eye className="text-secondary mb-4" size={48} />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become India's leading student engineering club, recognized for groundbreaking
              innovations in automotive engineering, robotics, and automation. We aim to produce
              industry-ready engineers who drive technological advancement and innovation.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-primary">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={32} />, title: "Excellence", desc: "Striving for the highest quality" },
              { icon: <Users size={32} />, title: "Teamwork", desc: "Collaboration drives success" },
              { icon: <Target size={32} />, title: "Innovation", desc: "Pushing engineering boundaries" },
              { icon: <Eye size={32} />, title: "Integrity", desc: "Honest and ethical practices" },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 text-center border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
