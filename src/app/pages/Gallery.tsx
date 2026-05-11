import { motion } from "motion/react";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BackgroundSlideshow } from "../components/BackgroundSlideshow";

const categories = ["All", "Go-Kart", "Robotics", "Workshops", "Events"];

type GalleryItem = {
  id: number;
  category: string;
  title: string;
  image?: string;
  emoji?: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Go-Kart",
    title: "DKDC 2024 - Team at Competition",
    image: "/src/imports/Screenshot_2026-05-09_161737.png"
  },
  {
    id: 2,
    category: "Go-Kart",
    title: "RAV Go-Kart - Night Testing",
    image: "/src/imports/WhatsApp_Image_2026-05-09_at_16.30.32__1_.jpeg"
  },
  {
    id: 3,
    category: "Events",
    title: "Design Evaluation Winner Trophy",
    image: "/src/imports/WhatsApp_Image_2026-03-29_at_18.37.04.jpeg"
  },
  {
    id: 4,
    category: "Go-Kart",
    title: "Team at Workshop",
    image: "/src/imports/WhatsApp_Image_2026-05-09_at_16.30.30__1_.jpeg"
  },
  {
    id: 5,
    category: "Go-Kart",
    title: "Go-Kart Assembly",
    image: "/src/imports/WhatsApp_Image_2026-05-09_at_16.30.30.jpeg"
  },
  {
    id: 6,
    category: "Events",
    title: "Team Members",
    image: "/src/imports/WhatsApp_Image_2026-05-09_at_16.30.33__1_.jpeg"
  },
  {
    id: 7,
    category: "Go-Kart",
    title: "RAV Logo on Kart",
    image: "/src/imports/WhatsApp_Image_2026-05-09_at_16.30.32-1.jpeg"
  },
  { id: 8, category: "Go-Kart", title: "Chassis Fabrication", emoji: "⚙️" },
  { id: 9, category: "Events", title: "DKDC Competition Day", emoji: "🏆" },
  { id: 10, category: "Robotics", title: "Line Follower Bot", emoji: "🤖" },
  { id: 11, category: "Events", title: "Team Building Session", emoji: "🎉" },
  { id: 12, category: "Go-Kart", title: "Powertrain Assembly", emoji: "⚡" },
  { id: 13, category: "Workshops", title: "Robotics Workshop", emoji: "🛠️" },
  { id: 14, category: "Robotics", title: "Obstacle Avoidance Bot", emoji: "🔄" },
  { id: 15, category: "Go-Kart", title: "Brake System Testing", emoji: "🎯" },
  { id: 16, category: "Events", title: "Annual Meet 2024", emoji: "👥" },
  { id: 17, category: "Go-Kart", title: "Steering Assembly", emoji: "🎯" },
  { id: 18, category: "Robotics", title: "Sensor Integration", emoji: "📡" },
  { id: 19, category: "Workshops", title: "Embedded Systems Workshop", emoji: "💻" },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moments captured from our journey of innovation and excellence
          </p>
          <div className="mt-6 glass-card rounded-xl p-6 max-w-2xl mx-auto border-2 border-primary/50 neon-glow">
            <h3 className="text-xl font-bold text-primary mb-3">📸 Contribute to Our Gallery</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Members and visitors can add their photos and videos from RAV events, workshops, and competitions!
            </p>
            <div className="space-y-2 text-sm text-left">
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">Share event photos, workshop moments, or competition videos</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">Contact team leads or email rav.gitam@gmail.com with your media</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-foreground">Include: Image/Video file + Event name + Date + Brief description</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? "gradient-primary text-background"
                  : "glass-card text-primary border border-primary/30 hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1.5rem">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all hover:neon-glow cursor-pointer group"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  item.emoji
                )}
              </div>
              <div className="p-4">
                <div className="text-xs text-primary mb-1">{item.category}</div>
                <h3 className="font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </Masonry>
        </ResponsiveMasonry>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-12 mt-16 border border-primary/30 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Video Gallery</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Watch our journey through video highlights of competitions, workshops, and events
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "DKDC 2024 - Design Evaluation", duration: "5:32" },
              { title: "Go-Kart Build Process", duration: "8:15" },
              { title: "Robotics Workshop", duration: "3:45" },
              { title: "Behind the Scenes - Team RAV", duration: "6:20" },
            ].map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all cursor-pointer group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  ▶️
                </div>
                <h3 className="font-bold mb-1">{video.title}</h3>
                <div className="text-sm text-muted-foreground">{video.duration}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 glass-card rounded-lg p-6 border border-secondary/30">
            <h3 className="text-xl font-bold text-secondary mb-3">🎥 Add Your Videos</h3>
            <p className="text-sm text-muted-foreground">
              Have videos from RAV events? Share them with us to feature in our video gallery!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
