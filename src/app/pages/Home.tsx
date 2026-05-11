import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Trophy, Users, Zap } from "lucide-react";

export function Home() {
  const images = [
    "/Screenshot 2026-05-09 161737.png",
    "/WhatsApp Image 2026-05-10 at 11.30.03.jpeg",
    "/WhatsApp Image 2026-05-09 at 16.30.32.jpeg",
    "/WhatsApp Image 2026-03-29 at 18.37.04.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Next slide
  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide-${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white px-4 py-2 rounded-full text-2xl"
          >
            ❮
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white px-4 py-2 rounded-full text-2xl"
          >
            ❯
          </button>

          {/* Dot Buttons */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? "bg-white scale-125"
                    : "bg-gray-400 hover:bg-white"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 rounded-full glass-card neon-glow">
              <span className="text-primary">
                GITAM Deemed to be University, Hyderabad
              </span>
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
                <h3 className="text-2xl font-bold text-secondary">
                  DKDC 2026 - Design Evaluation Winner
                </h3>
              </div>

              <p className="text-muted-foreground">
                Won the Design Evaluation round at Design Kart Design Challenge
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}