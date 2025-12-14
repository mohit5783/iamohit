"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FcGraduationCap,
  FcHome,
  FcLightAtTheEndOfTunnel,
  FcIdea,
  FcGlobe,
  FcBriefcase,
  FcLike,
  FcManager,
  FcApproval,
} from "react-icons/fc";
import {
  FaMapMarkerAlt,
  FaHeart,
  FaRocket,
  FaStar,
  FaTrophy,
} from "react-icons/fa";
import pp from "../../public/NewProfilePic-Face.webp";
import passionValues from "../../public/AnotherProfilePic.webp";

const AboutContent = () => {
  const YrsOfExp = new Date().getFullYear() - 2006;

  const lifePhases = [
    {
      id: 1,
      phase: "Roots",
      years: "1984-1998",
      location: "Ujjain → Shujalpur",
      icon: <FcHome size="50" />,
      tagline: "Where it all began",
      story:
        "Born in Ujjain, early schooling at Deepti Convent School in Shujalpur. A beautiful coincidence - my mother's name was also Deepti Shrivastava. Festivals, especially Holi, were magical in those days.",
      highlights: [
        "Born in Ujjain, Madhya Pradesh",
        "Deepti Convent School (mother's name: Deepti!)",
        "Unforgettable Holi festivals in Shujalpur",
      ],
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: 2,
      phase: "The Gwalior Years",
      years: "1998-2000",
      location: "Gwalior, MP",
      icon: <FcGraduationCap size="50" />,
      tagline: "Commerce student, not so good",
      story:
        "Dad got transferred to Gwalior. National Convent School, Palpur house. Chose commerce stream. I was a below-average student. Nobody really cared about me in class. I wasn't known for studies. But everything was about to change.",
      highlights: [
        "Dad's transfer brought us to Gwalior",
        "11th-12th at National Convent School",
        "Commerce stream - below average student",
        "Nobody knew my name for academics",
      ],
      color: "from-gray-500/20 to-slate-500/20",
    },
    {
      id: 3,
      phase: "Summer 2000",
      years: "The Turning Point",
      location: "Gwalior",
      icon: <FcLightAtTheEndOfTunnel size="50" />,
      tagline: "64% changed everything",
      story:
        "Parents wanted me to do BBA at Jiwaji University. I convinced them: Let me do BCA (computers). They said yes. I scored 64% in 12th boards - when everyone expected <50%. That number became my badge. Proof that I could do hard things.",
      highlights: [
        "Parents wanted BBA, I chose BCA",
        "Scored 64% (expected <50%!)",
        "First time exceeding expectations",
        "Computers became my identity",
      ],
      color: "from-green-500/20 to-emerald-500/20",
      isHighlight: true,
      quote: "64% was my first proof that I could do hard things.",
    },
    {
      id: 4,
      phase: "College Life",
      years: "2000-2003",
      location: "Gwalior",
      icon: <FcIdea size="50" />,
      tagline: "Prince of Persia to Visual Basic",
      story:
        "BCA at LNCT. Hostel life. Playing Prince of Persia on friend's computer all day. First Visual Basic classes. Built my first CRUD app - felt like magic! Still friends with that group (Sunil, Ajeet, Vikas, Shekhar, Jatin). We're still on WhatsApp!",
      highlights: [
        "BCA at LNCT, Gwalior",
        "Hostel life & Prince of Persia marathons",
        "First Visual Basic CRUD app",
        "Lifelong friends (still WhatsApp daily!)",
      ],
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      id: 5,
      phase: "First Real Job",
      years: "2006-2012",
      location: "Ujjain → Indore",
      icon: <FcBriefcase size="50" />,
      tagline: "VNS Microsystems & growth",
      story:
        "Started at VNS Microsystems. Visual Basic → PHP → MySQL. Built tools for 500+ businesses across India. Learned to SOLVE PROBLEMS, not just write code. Met my wife here. Got married in 2009. Daughter arrived. This was the foundation.",
      highlights: [
        "VNS Microsystems (6 years)",
        "Visual Basic → PHP journey",
        "500+ business applications",
        "Got married (2009), daughter born",
        "Foundation of problem-solving",
      ],
      color: "from-purple-500/20 to-pink-500/20",
      isHighlight: true,
      quote: "I learned to solve problems, not just write code.",
    },
    {
      id: 6,
      phase: "The Big Break",
      years: "2012-2018",
      location: "Accenture",
      icon: <FcGlobe size="50" />,
      tagline: "Fortune 100 clients",
      story:
        "Accenture happened. Leading teams for Fortune 100 clients worth $100B+. Changi Airport, Kerry Logistics, IRIS Corporation. 7 industries. Enterprise scale. This was when I realized: I can play at the highest level.",
      highlights: [
        "Led teams at Accenture",
        "Fortune 100 clients ($100B+ worth)",
        "<strong>Changi Airport 360° project</strong>",
        "7 industries, enterprise scale",
        "Learned leadership & architecture",
      ],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      id: 7,
      phase: "Moving to Malaysia",
      years: "April 2012",
      location: "Kuala Lumpur",
      icon: <FcLike size="50" />,
      tagline: "First international flight",
      story:
        "Got my first job offer abroad. First flight ever = international & company-sponsored! Mother's first international flight was to visit me. She passed in 2017, but I fulfilled her dream. I don't miss India much, but I do miss friends and samosas. Discovered gepuk though - amazing Malaysian food!",
      highlights: [
        "April 2012: First job offer abroad",
        "First flight ever = International & sponsored!",
        "Mother's first international flight (visiting ME)",
        "She passed in 2017 - dream fulfilled 💙",
        "Missing samosas, loving gepuk!",
      ],
      color: "from-red-500/20 to-rose-500/20",
      isHighlight: true,
      quote:
        "Mother's first international flight was to visit me. I fulfilled her dream.",
    },
    {
      id: 8,
      phase: "Scaling & Learning",
      years: "2012-2023",
      location: "Kuala Lumpur",
      icon: <FcManager size="50" />,
      tagline: "From thousands to millions",
      story:
        "Custommedia, Accenture, Kerry Logistics, IRIS Corporation, back to Accenture. Each role taught me something new. Started learning Vedic astrology seriously in 2021 - I wanted to know why different astrologers say different things looking at the same charts! Developer brain, I guess. Weekend or weekday? Doesn't matter - I love updating FMT even on weekends. Snooker cue stick always in the car. One sweet daughter, now a teen. Life is good.",
      highlights: [
        "Custommedia → Accenture → Kerry → IRIS",
        "Started Vedic astrology (2021) - developer's curiosity!",
        "One sweet daughter (now teen)",
        "Snooker cue always in car 🎱",
        "Weekend = Weekday (loves coding!)",
      ],
      color: "from-indigo-500/20 to-violet-500/20",
    },
    {
      id: 9,
      phase: "Living King Size",
      years: "2023-Present",
      location: "Kuala Lumpur",
      icon: <FcApproval size="50" />,
      tagline: "Below average → 8.5M users",
      story:
        "Leading technology for Free Malaysia Today. 8.5M monthly users. 184% growth. 60% faster load times. Learning Vedic astrology on weekends. Biryani lover (will do ANYTHING for good biryani!). Whiskey enthusiast. Still singing. The 18-year-old me in Gwalior thought I'd just somehow live my life. Today? I'm living king size, man! From below-average student to tech leader serving millions. Proud of myself.",
      highlights: [
        "FMT: 8.5M users, 184% growth, 60% faster",
        "Will do ANYTHING for good biryani!",
        "Whiskey, snooker, singing, astrology",
        "Still friends with Gwalior gang (WhatsApp!)",
        "From 'below average' to 'king size' 👑",
      ],
      color: "from-yellow-500/20 to-amber-500/20",
      isHighlight: true,
      quote:
        "18-year-old me thought I'd just survive. Today, I'm living KING SIZE!",
    },
  ];

  return (
    <section className="relative bg-[#121212]">
      {/* Hero Section */}
      <HeroSection />

      {/* Life Journey Timeline */}
      <LifeJourneyTimeline phases={lifePhases} />

      {/* What Drives Me Section */}
      <WhatDrivesMe />

      {/* Stats Grid */}
      <StatsGrid YrsOfExp={YrsOfExp} />

      {/* What I'm Looking For */}
      <WhatImLookingFor />

      {/* Personal Life */}
      <PersonalLife />
    </section>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <motion.div
      className="relative w-full flex items-center justify-center bg-linear-to-br from-[#121212] via-[#1a1a1a] to-[#212121] min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Client-side particles */}
      <ClientOnlyParticles />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src={pp}
            alt="Mohit Shrivastava"
            className="w-40 h-40 rounded-full mx-auto border-4 border-[#f5f543] shadow-2xl"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          From <span className="text-[#f5f543]">64%</span> to{" "}
          <span className="text-[#f5f543]">8.5M</span> Users
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 leading-relaxed">
            A journey from being a{" "}
            <span className="text-gray-500 line-through">
              below-average student
            </span>{" "}
            in Gwalior
          </p>
          <p className="text-2xl md:text-3xl text-white font-bold">
            to leading technology for millions in Malaysia
          </p>
          <p className="text-xl md:text-2xl text-gray-400 mt-6">
            This is my story.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Client-only particles component
const ClientOnlyParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 opacity-20">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#f5f543] rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

// Life Journey Timeline Component - ENHANCED WITH PROGRESSIVE LINE DRAWING
const LifeJourneyTimeline = ({ phases }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Progressive line drawing based on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-linear-to-b from-[#121212] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-[#f5f543]">Life Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Not just jobs and titles. Real moments that transformed a
            below-average student into someone proud of where he is today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - ENHANCED: Progressive drawing animation */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-transparent">
            <motion.div
              className="w-full bg-linear-to-b from-[#f5f543] via-[#f5f543] to-transparent"
              style={{ height: lineHeight }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Timeline phases */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <TimelinePhase
                key={phase.id}
                phase={phase}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Timeline Phase Component - ENHANCED WITH REFINED STAGGER TIMING
const TimelinePhase = ({ phase, index, isInView }) => {
  const isLeft = index % 2 === 0;

  // Enhanced stagger timing with cubic-bezier easing
  const baseDelay = index * 0.12; // Slightly tighter stagger
  const customEasing = [0.25, 0.46, 0.45, 0.94]; // Smooth cubic-bezier

  return (
    <motion.div
      className={`relative flex items-center ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4, delay: baseDelay, ease: customEasing }}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-8 md:left-1/2 w-6 h-6 bg-[#f5f543] rounded-full border-4 border-[#121212] z-10 transform -translate-x-1/2"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.4,
          delay: baseDelay + 0.2,
          type: "spring",
          stiffness: 200,
        }}
      />

      {/* Content card */}
      <motion.div
        className={`w-full md:w-[calc(50%-4rem)] ${
          isLeft ? "md:pr-16" : "md:pl-16"
        } pl-16 md:pl-0`}
        initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: baseDelay + 0.1,
          ease: customEasing,
        }}
      >
        <div className="relative">
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: phase.isHighlight
                ? "0 20px 60px rgba(245, 245, 67, 0.25)"
                : "0 10px 40px rgba(245, 245, 67, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className={`
              bg-linear-to-br ${phase.color}
              backdrop-blur-sm
              border-2 ${
                phase.isHighlight ? "border-[#f5f543]" : "border-[#292929]"
              }
              rounded-2xl p-8 
              hover:border-[#f5f543] 
              transition-all duration-300
              ${phase.isHighlight ? "shadow-2xl" : ""}
            `}
            >
              {/* Icon & Years */}
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: baseDelay + 0.3,
                    type: "spring",
                  }}
                >
                  {phase.icon}
                </motion.div>
                <div>
                  <div className="inline-block bg-[#f5f543] text-[#121212] px-4 py-1 rounded-full text-sm font-bold mb-2">
                    {phase.years}
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {phase.phase}
                  </h3>
                  <p className="text-[#f5f543] font-semibold text-lg">
                    {phase.tagline}
                  </p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <FaMapMarkerAlt className="mr-1" />
                    {phase.location}
                  </div>
                </div>
              </div>

              {/* Story */}
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {phase.story}
              </p>

              {/* Quote */}
              {phase.quote && (
                <motion.div
                  className="bg-[#1a1a1a] border-l-4 border-[#f5f543] p-4 rounded-r-lg mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: baseDelay + 0.5,
                    ease: customEasing,
                  }}
                >
                  <p className="text-white italic text-lg">"{phase.quote}"</p>
                </motion.div>
              )}

              {/* Highlights */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {phase.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-300 flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: baseDelay + 0.4 + i * 0.08,
                        ease: customEasing,
                      }}
                    >
                      <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: highlight }} />
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Highlight badge */}
              {phase.isHighlight && (
                <motion.div
                  className="absolute -top-3 -right-3"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="bg-[#f5f543] text-[#121212] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <FaStar size={12} />
                    KEY MOMENT
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// What Drives Me Component - ENHANCED WITH SUBTLE 3D HOVER
const WhatDrivesMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const drives = [
    {
      icon: <FaTrophy className="text-5xl text-[#f5f543]" />,
      title: "Proving Everyone Wrong",
      description:
        "From 'below average student' to solving problems experts couldn't. That feeling never gets old.",
    },
    {
      icon: <FaRocket className="text-5xl text-[#f5f543]" />,
      title: "Building at Scale",
      description:
        "8.5M users depending on my code? That's responsibility that excites me, not scares me.",
    },
    {
      icon: <FaHeart className="text-5xl text-[#f5f543]" />,
      title: "Making Mother Proud",
      description:
        "Her first international flight was to visit me. She passed in 2017, but I know she was proud.",
    },
    {
      icon: <FaStar className="text-5xl text-[#f5f543]" />,
      title: "Living King Size",
      description:
        "18-year-old me just wanted to survive. Today? I'm living the dream. That's what drives me.",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What <span className="text-[#f5f543]">Drives</span> Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Not buzzwords or corporate speak. Real reasons I wake up excited to
            code.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }, // Refined stagger
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {drives.map((drive, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.03,
                rotateY: 2, // Subtle 3D tilt
                rotateX: -2, // Subtle 3D tilt
                boxShadow: "0 10px 40px rgba(245, 245, 67, 0.2)",
                transition: {
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              style={{
                perspective: "1000px", // Enable 3D space
                transformStyle: "preserve-3d",
              }}
              className="bg-[#212121] border-2 border-[#292929] rounded-xl p-8 hover:border-[#f5f543] transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12 + 0.3,
                  type: "spring",
                }}
                className="mb-4"
              >
                {drive.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {drive.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {drive.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Stats Grid
const StatsGrid = ({ YrsOfExp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: YrsOfExp, label: "Years Coding", suffix: "+" },
    { value: 64, label: "That Famous Percentage", suffix: "%" },
    { value: 3, label: "Hours vs Their 2 Weeks", suffix: "" },
    { value: 13, label: "Days on Kerala Beach", suffix: "" },
    { value: 8.5, label: "Million Users at FMT", suffix: "M" },
    { value: 100, label: "Living King Size", suffix: "%" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-linear-to-b from-[#121212] to-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            By The <span className="text-[#f5f543]">Numbers</span>
          </h2>
          <p className="text-xl text-gray-400">The story in stats</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }, // Refined stagger
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Individual Stat Card
const StatCard = ({ stat, index, isInView }) => {
  const count = useCounter(stat.value, 2000, isInView);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(245, 245, 67, 0.2)",
      }}
      className="bg-[#212121] border-2 border-[#292929] rounded-2xl p-6 text-center hover:border-[#f5f543] transition-all duration-300"
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {stat.value < 100 ? count.toFixed(stat.suffix === "M" ? 1 : 0) : count}
        {stat.suffix && (
          <span className="text-2xl text-[#f5f543]">{stat.suffix}</span>
        )}
      </motion.div>
      <div className="text-sm text-gray-400">{stat.label}</div>
    </motion.div>
  );
};

// useCounter hook
const useCounter = (end, duration = 2000, inView) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(end * percentage);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return count;
};

// What I'm Looking For
const WhatImLookingFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What's <span className="text-[#f5f543]">Next</span>
          </h2>
          <p className="text-xl text-gray-400">
            After 4 years leading FMT solo, ready for my next challenge
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#212121] border-2 border-[#292929] rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#f5f543] mb-4 flex items-center">
                <span className="text-3xl mr-2">✓</span> Looking For
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                  <span>
                    News/media technology company in Malaysia (or visa sponsor)
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                  <span>Senior Engineer or Technical Lead role</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                  <span>Team environment (tired of being solo superhero!)</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                  <span>Next.js/React stack</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                  <span>Scale to millions of users</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4 flex items-center">
                <span className="text-3xl mr-2">○</span> Better Fit Elsewhere
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">▸</span>
                  <span>
                    Native mobile apps (iOS/Android) - my expertise is
                    responsive web
                  </span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">▸</span>
                  <span>
                    Short-term consulting - prefer long-term product impact
                  </span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">▸</span>
                  <span>
                    Non-tech industries - passionate about digital content
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.button
                className="bg-[#f5f543] text-[#121212] font-bold text-lg px-8 py-4 rounded-lg shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 40px rgba(245, 245, 67, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk About Opportunities
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Personal Life Component
const PersonalLife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-linear-to-b from-[#121212] to-[#1a1a1a]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Beyond <span className="text-[#f5f543]">Code</span>
          </h2>
          <p className="text-xl text-gray-400">The full picture</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#212121] border-2 border-[#292929] rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src={passionValues}
                alt="Mohit Shrivastava - Personal Life"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                When I'm not optimizing Next.js builds, I'm{" "}
                <span className="text-[#f5f543] font-semibold">
                  learning Vedic astrology
                </span>
                . Started in 2021 because I wanted to know why different
                astrologers say different things looking at the same charts.
                Developer brain, I guess!
              </p>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Will do{" "}
                <span className="text-[#f5f543] font-semibold">ANYTHING</span>{" "}
                for good biryani. Whiskey enthusiast. Snooker cue stick always
                in my car (not great at it, but I try!). Still singing when no
                one's listening.
              </p>
              <div className="mt-6 pt-6 border-t border-[#292929]">
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <span className="text-[#f5f543]">•</span> 40 years old,
                    based in Kuala Lumpur
                  </li>
                  <li>
                    <span className="text-[#f5f543]">•</span> Originally from
                    Gwalior, India (miss samosas!)
                  </li>
                  <li>
                    <span className="text-[#f5f543]">•</span> Married since
                    2009, one teen daughter
                  </li>
                  <li>
                    <span className="text-[#f5f543]">•</span> Weekend = Weekday
                    (love updating FMT!)
                  </li>
                  <li>
                    <span className="text-[#f5f543]">•</span> Still friends with
                    Gwalior gang on WhatsApp 📱
                  </li>
                  <li>
                    <span className="text-[#f5f543]">•</span> Living king size!
                    👑
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;
