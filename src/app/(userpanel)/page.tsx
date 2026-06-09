"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Zap, Target, UserRoundSearch, FileText, Monitor } from "lucide-react";

const experts = [
  {
    src: "https://images.unsplash.com/photo-1668293750324-bd77c1f08ca9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "absolute left-20 top-24",
    width: 180,
    height: 180,
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
    className: "absolute right-32 top-20",
    width: 170,
    height: 170,
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80",
    className: "absolute right-16 top-72",
    width: 170,
    height: 170,
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80",
    className: "absolute bottom-20 left-16",
    width: 170,
    height: 170,
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80",
    className: "absolute bottom-28 left-52",
    width: 170,
    height: 170,
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
    className: "absolute bottom-4 right-24",
    width: 170,
    height: 170,
  },
];
const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32"
    >
      {/* Floating Images */}
      {experts.map((expert, index) => (
        <motion.div
          key={index}
          className={expert.className}
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: {
              duration: 0.8,
              delay: index * 0.1,
            },
            scale: {
              duration: 0.8,
              delay: index * 0.1,
            },
            y: {
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src={expert.src}
            alt="Expert"
            width={expert.width}
            height={expert.height}
            className="rounded-[30px] object-cover shadow-lg"
          />
        </motion.div>
      ))}

      {/* Pills */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute left-24 top-48 rounded-full bg-orange-100 px-5 py-2 text-sm text-black"
      >
        15+ Years Of Experience
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-40 rounded-full bg-green-100 px-5 py-2 text-sm text-black"
      >
        7+ Years In Consulting
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-40 left-72 rounded-full bg-green-100 px-5 py-2 text-sm text-black"
      >
        3 Successful Startups
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute right-36 bottom-48 rounded-full bg-orange-100 px-5 py-2 text-sm text-black"
      >
        100+ Happy Clients
      </motion.div>

      {/* Center Content */}
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-8 text-6xl font-bold md:text-8xl"
        >
          Meet Our Experts
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90">
            <Zap size={18} />
            Start To Grow
          </button>

          <button className="flex items-center gap-2 rounded-full border px-6 py-3 transition hover:bg-muted">
            <Target size={18} />
            Explore Possibilities
          </button>
        </motion.div>

        {/* Bottom Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
          className="mt-24"
        >
          <p className="mb-5 text-sm text-muted-foreground">Here To Help</p>

          <div className="flex justify-center gap-4">
            <button className="rounded-full border p-4 transition hover:bg-muted">
              <UserRoundSearch size={18} />
            </button>

            <button className="rounded-full border p-4 transition hover:bg-muted">
              <FileText size={18} />
            </button>

            <button className="rounded-full border p-4 transition hover:bg-muted">
              <Monitor size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default page;
