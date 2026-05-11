import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { BackgroundSlideshow } from "../components/BackgroundSlideshow";

const upcomingEvents: any[] = [];

const pastEvents = [
  {
    title: "DKDC 2024 Competition",
    date: "March 2024",
    type: "Competition",
    result: "Design Evaluation Winner 🏆",
  },
];

export function Events() {
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
            Our <span className="text-primary">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Workshops, competitions, and community gatherings that shape our journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Upcoming <span className="text-primary">Events</span>
          </h2>

          {upcomingEvents.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 border-2 border-primary/30 text-center">
              <Calendar className="text-primary mx-auto mb-6" size={64} />
              <h3 className="text-2xl font-bold mb-4">No Upcoming Events Yet</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Stay tuned! We'll be announcing exciting workshops, competitions, and showcases soon.
                Follow us on social media for updates.
              </p>
              <div className="inline-block px-6 py-3 rounded-lg bg-primary/10 text-primary border border-primary/30">
                Events will be added as they are scheduled
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-8 border-2 border-primary/30 hover:border-primary/50 transition-all hover:neon-glow"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="glass-card rounded-xl p-6 border border-primary/30 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">
                          {event.date.split(" ")[1].replace(",", "")}
                        </div>
                        <div className="text-lg text-muted-foreground">
                          {event.date.split(" ")[0]} {event.date.split(" ")[2]}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground mb-4">{event.description}</p>
                        </div>
                        <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm border border-primary/30 whitespace-nowrap">
                          {event.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3">
                          <Clock className="text-primary" size={20} />
                          <span className="text-sm text-muted-foreground">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="text-primary" size={20} />
                          <span className="text-sm text-muted-foreground">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="text-primary" size={20} />
                          <span className="text-sm text-muted-foreground">{event.attendees}</span>
                        </div>
                      </div>

                      <button className="mt-6 px-6 py-3 rounded-lg gradient-primary text-black font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                        Register Now <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Past <span className="text-primary">Events</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="text-primary" size={20} />
                  <span className="text-sm text-muted-foreground">{event.date}</span>
                </div>

                <h3 className="text-xl font-bold mb-2">{event.title}</h3>

                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs border border-secondary/30">
                    {event.type}
                  </span>
                </div>

                <div className="text-primary font-semibold">{event.result}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
