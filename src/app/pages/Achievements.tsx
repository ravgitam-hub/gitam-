import { motion } from "motion/react";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { BackgroundSlideshow } from "../components/BackgroundSlideshow";

const achievements = [
  {
    year: "2024",
    title: "DKDC Design Evaluation Winner",
    event: "Design Kart Design Challenge",
    icon: <Trophy size={48} />,
    description: "Won the Design Evaluation round at DKDC, showcasing excellence in go-kart engineering and design",
    color: "primary",
  },
];

const stats = [
  { value: "1", label: "Major Competition", icon: <Trophy size={32} /> },
  { value: "1", label: "Award Won", icon: <Star size={32} /> },
  { value: "2024", label: "Year Established", icon: <Medal size={32} /> },
  { value: "50+", label: "Team Members", icon: <Award size={32} /> },
];

export function Achievements() {
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
            Our <span className="text-primary">Achievements</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A legacy of excellence, innovation, and competitive success
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center border border-primary/20 hover:border-primary/50 transition-all hover:neon-glow"
            >
              <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
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
            Major <span className="text-primary">Milestones</span>
          </h2>

          <div className="space-y-6">
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-2xl p-8 border-2 ${
                  achievement.color === "primary"
                    ? "border-primary/30 hover:border-primary/50 hover:neon-glow"
                    : "border-secondary/30 hover:border-secondary/50 hover:neon-glow-red"
                } transition-all`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div
                    className={`flex-shrink-0 w-24 h-24 rounded-full ${
                      achievement.color === "primary" ? "gradient-primary" : "gradient-secondary"
                    } flex items-center justify-center`}
                  >
                    <div className="text-background">{achievement.icon}</div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-4 py-1 rounded-full ${
                          achievement.color === "primary"
                            ? "bg-primary/20 text-primary border border-primary/30"
                            : "bg-secondary/20 text-secondary border border-secondary/30"
                        }`}
                      >
                        {achievement.year}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold">{achievement.title}</h3>
                    </div>
                    <div
                      className={`text-lg mb-2 ${
                        achievement.color === "primary" ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {achievement.event}
                    </div>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
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
          <Trophy className="text-primary mx-auto mb-6" size={64} />
          <h2 className="text-3xl font-bold mb-4">Looking Forward</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            After our success in the DKDC Design Evaluation round, we're continuing to push the
            boundaries of go-kart engineering and preparing for future competitions. Our journey
            has just begun!
          </p>
          <div className="inline-block px-6 py-3 rounded-lg gradient-primary text-background font-bold">
            Building the Future
          </div>
        </motion.div>
      </div>
    </div>
  );
}
