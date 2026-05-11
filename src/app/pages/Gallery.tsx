import { motion } from "motion/react";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BackgroundSlideshow } from "../components/BackgroundSlideshow";

const categories = ["All", "Go-Kart", "Robotics", "Workshops", "Events"];

type GalleryItem = {
  id: number;
  category: string;
  title: string;
  image: string;
  type?: "image" | "video";
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Go-Kart",
    title: "DKDC Team",
    image: "/Screenshot 2026-05-09 161737.png",
    type: "image",
  },

  {
    id: 2,
    category: "Go-Kart",
    title: "Kart Testing",
    image: "/WhatsApp Image 2026-05-10 at 11.30.03.jpeg",
    type: "image",
  },

  {
    id: 3,
    category: "Events",
    title: "Team Event",
    image: "/WhatsApp Image 2026-05-09 at 16.30.32.jpeg",
    type: "image",
  },

  {
    id: 4,
    category: "Events",
    title: "Team Moment",
    image: "/WhatsApp Image 2026-03-29 at 18.37.04.jpeg",
    type: "image",
  },

  {
    id: 5,
    category: "Go-Kart",
    title: "Team Video",
    image: "/WhatsApp Video 2026-05-09 at 16.30.34.mp4",
    type: "video",
  },
  {
    id: 6,
    category: "Go-Kart",
    title: "Team Video",
    image: "/WhatsApp Video 2026-05-09 at 16.30.37.mp4",
    type: "video",
  },
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Gallery</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moments captured from our journey of innovation and excellence.
          </p>

          <div className="mt-6 glass-card rounded-xl p-6 max-w-2xl mx-auto border-2 border-primary/50 neon-glow">
            <h3 className="text-xl font-bold text-primary mb-3">
              📸 How to Add Images & Videos
            </h3>

            <p className="text-sm text-muted-foreground">
              Share the image to <b>rav.gitam@gmail.com</b> with the Image Details
            </p>
          </div>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
        </div>

        {/* Gallery */}
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="1.5rem">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all hover:neon-glow group"
              >
                <div className="aspect-square overflow-hidden bg-black">
                  {item.type === "video" ? (
                    <video
                      src={item.image}
                      controls
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>

                <div className="p-4">
                  <div className="text-xs text-primary mb-1">
                    {item.category}
                  </div>

                  <h3 className="font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}