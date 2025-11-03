import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Profile from "/images/Profile.jpg";
import { Spotlight } from "@/components/ui/Spotlight";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
// import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
// import About from "./About";
// import Projects from "./Projects";
// import Contacts from "./Contacts";
import ScrollToTopBtn from "@/components/ui/ScrollToTopBtn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  SiTypescript, SiJavascript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux,
  SiExpress, SiNestjs, SiDjango, SiFastapi,
  SiPostgresql, SiMongodb, SiFirebase, SiSupabase, SiAmazon, SiGooglecloud,
  SiTensorflow, SiPandas, SiNumpy, SiDocker, SiGit,
  SiN8N
} from "react-icons/si";
// import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

// Icon mapping for skills
const skillIcons: { [key: string]: any } = {
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Python": SiPython,
  "C++": SiCplusplus,
  "React": SiReact,
  "NextJS": SiNextdotjs,
  "React Native": SiReact,
  "TailwindCSS": SiTailwindcss,
  "Redux": SiRedux,
  "NestJS": SiNestjs,
  "ExpressJS": SiExpress,
  "Django": SiDjango,
  "FastApi": SiFastapi,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Firebase": SiFirebase,
  "Supabase": SiSupabase,
  "AWS": SiAmazon,
  "GCP": SiGooglecloud,
  "Tensorflow": SiTensorflow,
  "Pandas": SiPandas,
  "Numpy": SiNumpy,
  "Git": SiGit,
  "Docker": SiDocker,
  "N8N": SiN8N,
};

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");
  const [expandedExperiences, setExpandedExperiences] = useState<string[]>(['0']); // Start with first experience expanded
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for modal image
  
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Custom easing
  };
  
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const staggerItem = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  };
  
  // const slideInLeft = {
  //   initial: { opacity: 0, x: -80 },
  //   animate: { opacity: 1, x: 0 },
  //   transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  // };
  
  // const slideInRight = {
  //   initial: { opacity: 0, x: 80 },
  //   animate: { opacity: 1, x: 0 },
  //   transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  // };
  
  // const scaleIn = {
  //   initial: { opacity: 0, scale: 0.8 },
  //   animate: { opacity: 1, scale: 1 },
  //   transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  // };
  
  const toggleExperience = (index: string) => {
    setExpandedExperiences(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  
  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };
  
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleWorkflowClick = (slug: string) => {
    navigate(`/workflow/${slug}`);
  };
  
  // const handleClick = () => {
  //   window.location.href =
  //     "https://www.linkedin.com/in/jether-omictin-a997351b6";
  // };

  return (
    <div className="relative w-full py-24">
      <GridBackgroundDemo />
      <div className="relative z-10 w-full  text-[#B2B5AD] flex items-center justify-center">
        <Spotlight />
        <div className="home-container h-full w-full mx-4 xl:mx-60">
          <Navbar />

          <div className="home-contents my-16">
            <ScrollToTopBtn />
            <motion.div
              className="header-nav flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-4 sm:px-8 md:px-5"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="heading-texts w-full flex flex-col items-center md:items-start justify-center md:justify-start">
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl text-white dark:text-black font-semibold"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                  Hello!{" "}
                  <motion.span
                    animate={{
                      rotate: [0, 20, -20, 20, -20, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    style={{
                      display: "inline-block",
                    }}
                  >
                    👋
                  </motion.span>
                  I am,
                </motion.h2>

                <motion.h3
                  className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold tracking-tight text-white text-center md:text-left dark:text-black mt-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                  Jether Omictin
                </motion.h3>

                <motion.h2 className="scroll-m-20 text-xl sm:text-2xl md:text-3xl xl:text-2xl font-bold tracking-tight text-white text-center md:text-left dark:text-black mt-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                  Full-Stack Developer | AI Automation Specialist
                </motion.h2>
                {/* <motion.h4
                  className="scroll-m-20 text-xl xl:text-2xl font-semibold tracking-tight text-white text-center xl:text-left dark:text-black"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                  Computer Science Student
                </motion.h4> */}
                <motion.blockquote
                  className="mt-4 text-base sm:text-lg md:text-xl dark:border-black text-center md:text-left dark:text-black"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                >
                  <span className="block sm:hidden">
                  Result Driven Full-Stack Developer and AI Automation Specialist dedicated to building and streamlining digital systems. 
                  </span>

                  <span className="hidden sm:block">
                  Result Driven Full-Stack Developer and AI Automation Specialist <br />dedicated to building and streamlining digital systems. 
                  </span>
                </motion.blockquote>

                <div className="shimmer-button my-5 flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
                  <ScrollLink to="contacts" smooth={true} duration={500}> 
                    <motion.a
                      className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring w-full sm:w-auto"
                      href="https://www.linkedin.com/in/jether-omictin-a997351b6"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                    >
                      <span className="absolute inset-0 border border-blue-600 group-active:border-blue-600"></span>
                      <span className="block border border-blue-600 bg-blue-600 px-8 sm:px-12 py-3 transition-transform active:border-blue-600 active:bg-blue-600 group-hover:-translate-x-1 group-hover:-translate-y-1 text-center">
                       Lets Get in Touch
                      </span>
                    </motion.a>
                  </ScrollLink>
                  <ScrollLink to="services" smooth={true} duration={500}>
                    <motion.a
                      className="group relative inline-block text-sm font-medium text-blue-600 focus:outline-none focus:ring active:text-blue-600 cursor-pointer w-full sm:w-auto"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                    >
                      <span className="absolute inset-0 border border-current"></span>
                      <span className="block border border-current bg-white px-8 sm:px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 text-center">
                        See How Can I Help 
                      </span>
                    </motion.a>
                  </ScrollLink>
                </div>
              </div>

              <motion.div
                className="relative img-div flex items-center justify-center px-4 sm:px-5"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                  scale: { type: "spring", visualDuration: 2, bounce: 0.5 },
                }}
              >
                <img
                  src={Profile}
                  className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] xl:max-w-[400px] h-auto rounded-full"
                />

                {/* Floating, hoverable tech badges */}
                <motion.div
                  className="group flex items-center justify-center absolute -top-3 -left-2 md:-top-6 md:-left-6 w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 1.8 },
                    scale: { type: "spring", duration: 0.6, delay: 2.5 },
                    y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 2.1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  style={{ backgroundColor: "rgba(240,90,40,0.15)", boxShadow: "0 0 0 10px rgba(240,90,40,0.06), 0 8px 20px rgba(240,90,40,0.15)", border: "1px solid rgba(240,90,40,0.2)" }}
                >
                  <img src="/logos/n8n.png" alt="n8n" className="w-7 h-7 md:w-8 md:h-8" />
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] md:text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all ">
                    I love creating automations in n8n
                  </div>
                </motion.div>

                <motion.div
                  className="group flex items-center justify-center absolute top-0 -right-3 md:-right-6 md:top-0 w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 2.0 },
                    scale: { type: "spring", duration: 0.6, delay: 2.7 },
                    y: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 2.3 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  style={{ backgroundColor: "rgba(97,218,251,0.15)", boxShadow: "0 0 0 10px rgba(97,218,251,0.06), 0 8px 20px rgba(97,218,251,0.15)", border: "1px solid rgba(97,218,251,0.25)" }}
                >
                  <img src="/images/react.png" alt="React" className="w-7 h-7 md:w-8 md:h-8" />
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] md:text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all">
                    Yes, I build frontend stuff with React
                  </div>
                </motion.div>

                <motion.div
                  className="group flex items-center justify-center absolute -bottom-2 -left-3 md:-bottom-6 md:-left-8 w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 2.2 },
                    scale: { type: "spring", duration: 0.6, delay: 3.0 },
                    y: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  style={{ backgroundColor: "rgba(14,165,233,0.15)", boxShadow: "0 0 0 10px rgba(14,165,233,0.06), 0 8px 20px rgba(14,165,233,0.15)", border: "1px solid rgba(14,165,233,0.25)" }}
                >
                  <img src="/logos/ghl.jpg" alt="GoHighLevel" className="w-7 h-7 md:w-8 md:h-8 object-contain" />
                  <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] md:text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
                    I automate funnels and CRM with GoHighLevel
                  </div>
                </motion.div>

                <motion.div
                  className="group flex items-center justify-center absolute -bottom-3 -right-2 md:-bottom-6 md:-right-8 w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 2.4 },
                    scale: { type: "spring", duration: 0.6, delay: 3.2 },
                    y: { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 2.7 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  style={{ backgroundColor: "rgba(205,254,194,1)", boxShadow: "0 0 0 10px rgba(205,254,194,1), 0 8px 20px rgba(6,182,212,0.18)", border: "1px solid rgba(6,182,212,0.25)" }}
                >
                  <img src="/logos/nodejs.png" alt="Node.js" className="w-7 h-7 md:w-8 md:h-8" />
                  <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] md:text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
                    I build robust backends with Node.js
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            {/* <TypewriterEffect /> */}
          </div>

          {/* About Me Section */}
          <div id="about" className="w-full py-20 px-4 ">
            <motion.div
              {...fadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-6xl mx-auto"
              
            >
              <motion.h2 
                className="text-4xl xl:text-5xl font-bold text-white dark:text-black text-center mb-12"
                initial={{ opacity: 0, y: -30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              >
                About Me
              </motion.h2>

              {/* Tab Navigation */}
              <motion.div className="flex flex-wrap justify-center gap-4 mb-8"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
              >
                {[
                  { id: "about", label: "About Me" },
                  { id: "achievements", label: "Achievements" },
                  { id: "education", label: "Education" },
                  { id: "experience", label: "Experience" },
                ].map((tab) => (
                  <button
                  
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "bg-white/10 text-white/70 hover:bg-white/20 dark:bg-black/10 dark:text-black/70 dark:hover:bg-black/20"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </motion.div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 dark:border-black/10"
              >
                {/* About Me Tab */}
                {activeTab === "about" && (
                  <motion.div className="space-y-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-black mb-6">
                      Full-Stack Developer & AI Automation Specialist
                    </h3>
                    <p className="text-lg text-white/90 dark:text-black/90 leading-relaxed">
                      Full-Stack Developer and AI Automation Specialist dedicated to help clients build and streamline digital systems. Extensive experience in creating powerful, custom applications and leveraging AI tools to automate business processes. I focus on optimizing workflows, reducing manual effort, and delivering measurable increases in operational efficiency and performance.
                    </p>
                  </motion.div>
                )}

                {/* Achievements Tab */}
                {activeTab === "achievements" && (
                  <div className="space-y-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white dark:text-black mb-6">
                      Notable Achievements
                    </h1>
                    
                    {/* DOST Achievement */}
                    <div className="border-l-4 border-blue-600 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">🏆</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white dark:text-black">
                          DOST Agri-Aqua Innovation Challenge
                        </h3>
                      </div>
                      <p className="text-blue-400 dark:text-blue-600 font-semibold mb-3">
                        Top 10 Finalist
                      </p>
                      <p className="text-white/90 dark:text-black/90 leading-relaxed mb-4">
                        WildSquad is an autonomous drone we developed to combat waterborne plastic pollution. It collects up to 5kg of waste using beacons and nets, operates for 10 hours on a single charge, and uses sensors to avoid marine life. The system provides real-time water condition monitoring and weather forecasts, alerting local government units when irregularities are detected.
                      </p>
                      
                      {/* Achievement Images - Clickable */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                 <div 
                           className="relative rounded-lg overflow-hidden border border-white/10 dark:border-black/10 cursor-pointer hover:scale-105 transition-all duration-300 group"
                           onClick={() => openImageModal("/images/agriaqua1.jpg")}
                         >
                           <img 
                             src="/images/agriaqua1.jpg" 
                             alt="DOST Achievement 1"
                             className="w-full h-48 object-cover"
                           />
                           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                             <span className="text-white text-lg font-semibold">See Image</span>
                           </div>
                         </div>
                                                 <div 
                           className="relative rounded-lg overflow-hidden border border-white/10 dark:border-black/10 cursor-pointer hover:scale-105 transition-all duration-300 group"
                           onClick={() => openImageModal("/images/agriaqua2.webp")}
                         >
                           <img 
                             src="/images/agriaqua2.webp" 
                             alt="DOST Achievement 2"
                             className="w-full h-48 object-cover"
                           />
                           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                             <span className="text-white text-lg font-semibold">See Image</span>
                           </div>
                         </div>
                      </div>
                    </div>

                    {/* SEA-CICSIC Achievement */}
                    <div className="border-l-4 border-purple-600 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">🏆</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white dark:text-black">
                          3rd Prize Winner – SEA-CICSIC 2025
                        </h3>
                      </div>
                      <p className="text-purple-400 dark:text-purple-600 font-semibold mb-3">
                        Xiamen University Malaysia
                      </p>
                      <p className="text-white/90 dark:text-black/90 leading-relaxed mb-4">
                        Represented the Philippines and secured 3rd Prize in an international tech competition across Southeast Asia. Collaborated with a cross-functional team to develop an innovative solution with social impact, demonstrating strong skills in problem-solving, product development, and effective storytelling. Gained hands-on experience in project execution under pressure, international pitching, and teamwork.
                      </p>
                      
                      {/* Achievement Images - Clickable */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                 <div 
                           className="relative rounded-lg overflow-hidden border border-white/10 dark:border-black/10 cursor-pointer hover:scale-105 transition-all duration-300 group"
                           onClick={() => openImageModal("/images/wildsquad1.jpg")}
                         >
                           <img 
                             src="/images/wildsquad1.jpg" 
                             alt="SEA-CICSIC Achievement 1"
                             className="w-full h-48 object-cover"
                           />
                           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                             <span className="text-white text-lg font-semibold">See Image</span>
                           </div>
                         </div>
                                                 <div 
                           className="relative rounded-lg overflow-hidden border border-white/10 dark:border-black/10 cursor-pointer hover:scale-105 transition-all duration-300 group"
                           onClick={() => openImageModal("/images/wildsquad2.jpg")}
                         >
                           <img 
                             src="/images/wildsquad2.jpg" 
                             alt="SEA-CICSIC Achievement 2"
                             className="w-full h-48 object-cover"
                           />
                           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                             <span className="text-white text-lg font-semibold">See Image</span>
                           </div>
                         </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Experience Tab */}
                {activeTab === "experience" && (
                  <div className="space-y-4">
                    {/* Symph - Software Engineer Intern */}
                    <div className="relative border border-white/10 dark:border-black/10 rounded-xl overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer hover:bg-white/5 dark:hover:bg-black/5 transition-colors"
                        onClick={() => toggleExperience('0')}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white dark:text-black mb-1">
                              Software Engineer Intern
                            </h3>
                            <p className="text-blue-400 dark:text-blue-600 font-semibold">Symph</p>
                          </div>
                          <div className="flex items-center justify-between md:justify-end gap-4">
                            <span className="text-white/70 dark:text-black/70 text-sm md:text-base">2025 — Present</span>
                            <motion.svg
                              className="w-5 h-5 text-white dark:text-black"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ rotate: expandedExperiences.includes('0') ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </div>
                        </div>
                      </div>
                      {expandedExperiences.includes('0') && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-6 pt-0"
                        >
                          <ul className="space-y-2 mb-4">
                            <li className="text-white/90 dark:text-black/90">
                              • Led development of scalable web applications serving 10k+ users and maintain high-quality projects and cross-platform digital experiences for a broad range of clients, utilizing technologies such as NestJS, NextJS, TypeScript, Nx, Google Cloud Platform (GCP), Supabase, and Firebase
                            </li>
                            <li className="text-white/90 dark:text-black/90">
                              • Used MCPs and AI-augmented workflows alongside REST APIs and continuous integration pipelines to address business requirements
                            </li>
                            <li className="text-white/90 dark:text-black/90">
                              • Worked with cross-functional teams, including product managers, designers, and developers using Agile Scrum Methodology and ClickUp as the project management tool to deliver high-quality digital experiences
                            </li>
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {['NextJS', 'MCPs', 'Nest.js', 'Google Cloud Platform(GCP)', 'Firebase'].map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Freelance Full Stack Developer */}
                    <div className="relative border border-white/10 dark:border-black/10 rounded-xl overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer hover:bg-white/5 dark:hover:bg-black/5 transition-colors"
                        onClick={() => toggleExperience('1')}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white dark:text-black mb-1">
                              Freelance Full Stack Developer
                            </h3>
                            <p className="text-purple-400 dark:text-purple-600 font-semibold">Self Employed</p>
                          </div>
                          <div className="flex items-center justify-between md:justify-end gap-4">
                            <span className="text-white/70 dark:text-black/70 text-sm md:text-base">2022 — 2024</span>
                            <motion.svg
                              className="w-5 h-5 text-white dark:text-black"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ rotate: expandedExperiences.includes('1') ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </div>
                        </div>
                      </div>
                      {expandedExperiences.includes('1') && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-6 pt-0"
                        >
                          <ul className="space-y-2 mb-4">
                            <li className="text-white/90 dark:text-black/90">
                              • Built responsive web applications from concept to deployment
                            </li>
                            <li className="text-white/90 dark:text-black/90">
                              • Created AI solutions for clients, including agents workflows and automation tools to enhance business operations
                            </li>
                            <li className="text-white/90 dark:text-black/90">
                              • Optimized application performance resulting in 40% faster load times
                            </li>
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {['N8N', 'Python', 'Django', 'LLM', 'Docker', 'PostgreSQL', 'Next.js', 'React', 'Tailwind CSS'].map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* DGoC - Resource Engagement Officer */}
                    <div className="relative border border-white/10 dark:border-black/10 rounded-xl overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer hover:bg-white/5 dark:hover:bg-black/5 transition-colors"
                        onClick={() => toggleExperience('2')}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white dark:text-black mb-1">
                              Resource Engagement Officer
                            </h3>
                            <p className="text-green-400 dark:text-green-600 font-semibold">Google Developers Group on Campus (DGoC)</p>
                          </div>
                          <div className="flex items-center justify-between md:justify-end gap-4">
                            <span className="text-white/70 dark:text-black/70 text-sm md:text-base">Oct. 2024 – May. 2025</span>
                            <motion.svg
                              className="w-5 h-5 text-white dark:text-black"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ rotate: expandedExperiences.includes('2') ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </div>
                        </div>
                      </div>
                      {expandedExperiences.includes('2') && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-6 pt-0"
                        >
                          <ul className="space-y-2 mb-4">
                            <li className="text-white/90 dark:text-black/90">
                              • Coordinated and managed community engagement initiatives, fostering partnerships with external stakeholders and tech industry leaders
                            </li>
                            <li className="text-white/90 dark:text-black/90">
                              • Organized developer events, workshops, and networking sessions that enhanced community participation and knowledge sharing
                            </li>
                            <li className="text-white/90 dark:text-black/90">
                              • Developed and maintained strategic relationships with key technology partners to support campus developer community growth
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}

                {/* Education Tab */}
                {activeTab === "education" && (
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-black mb-8">
                      Education
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Tertiary Education */}
                      <div className="flex items-center gap-6 bg-white/5 dark:bg-black/5 p-6 rounded-xl border border-white/10 dark:border-black/10 hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-white/10 dark:bg-black/10 p-2 rounded-lg flex items-center justify-center flex-shrink-0">
                          <img
                            className="w-full h-full object-contain"
                            src="images/citu_logo.png"
                            alt="CITU Logo"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xl font-bold text-white dark:text-black mb-1">
                            Cebu Institute of Technology - University
                          </h4>
                          <p className="text-white/80 dark:text-black/80">
                            Bachelor of Science in Computer Science
                          </p>
                        </div>
                        
                        <div className="text-right flex-shrink-0">
                          <span className="text-white/70 dark:text-black/70 font-semibold text-sm md:text-base">
                            2022-2026
                          </span>
                        </div>
                      </div>

                      {/* Senior High School */}
                      <div className="flex items-center gap-6 bg-white/5 dark:bg-black/5 p-6 rounded-xl border border-white/10 dark:border-black/10 hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          SNS
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xl font-bold text-white dark:text-black mb-1">
                            Sto. Nino Smart Child Learning Center Inc.
                          </h4>
                          <p className="text-white/80 dark:text-black/80">
                            Science, Technology, Engineering, and Mathematics (STEM) strand
                          </p>
                        </div>
                        
                        <div className="text-right flex-shrink-0">
                          <span className="text-white/70 dark:text-black/70 font-semibold text-sm md:text-base">
                            2020-2022
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* <About /> */}
          {/* <Projects /> */}
          
          {/* Services Subsection */}
          <div id="services" className="w-full py-20 px-4">
            <motion.div
              {...fadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-7xl mx-auto"
            >
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-5xl xl:text-6xl font-bold text-white dark:text-black mb-4">
                  Services I Offer
                </h2>
                <p className="text-white/70 dark:text-black/70 text-lg">
                  Comprehensive web, automation, and AI solutions tailored for your business
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
              >
                {[
                  {
                    title: "Custom Web Application Development",
                    description:
                      "Build responsive, scalable apps with React, Next.js, Node.js, integrated APIs & databases — including no‑code platforms like WordPress.",
                    icon: "📊",
                    color: "from-yellow-400 to-amber-500",
                  },
                  {
                    title: "Workflow & Business Process Automation",
                    description:
                      "Automate repetitive tasks and connect tools using n8n, Make (Integromat), and Zapier to improve efficiency.",
                    icon: "🔗",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    title: "CRM & Marketing Automation (GoHighLevel)",
                    description:
                      "Set up and optimize GoHighLevel automations, pipelines, funnels, and integrations for lead management.",
                    icon: "⚡",
                    color: "from-yellow-400 to-orange-500",
                  },
                  {
                    title: "AI-Powered Chatbots & Assistants",
                    description:
                      "Create smart AI workflows using LLMs and automation tools for lead capture, support, and personalized responses.",
                    icon: "🤖",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    title: "API Integration & Custom Backend Services",
                    description:
                      "Develop and connect custom APIs between apps, databases, and third‑party platforms.",
                    icon: "🧩",
                    color: "from-emerald-500 to-green-500",
                  },
                  {
                    title: "Full-Stack System Optimization & Maintenance",
                    description:
                      "Enhance performance, automate deployments, and ensure smooth end‑to‑end operations across your stack.",
                    icon: "🛠️",
                    color: "from-indigo-500 to-blue-600",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    variants={staggerItem}
                  >
                    <div className="h-full bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-black/10 hover:border-white/30 dark:hover:border-black/30 transition-all duration-300 group-hover:shadow-2xl">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-black/10 flex items-center justify-center text-2xl mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white dark:text-black mb-2 group-hover:text-blue-400 dark:group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/70 dark:text-black/70 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          {/* Projects Section */}
          <div id="projects" className="w-full py-20 px-4">
            <motion.div
              {...fadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-7xl mx-auto"
            >
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-5xl xl:text-6xl font-bold text-white dark:text-black mb-4">
                  Featured Projects
                </h2>
                <p className="text-white/70 dark:text-black/70 text-lg">
                  Here is a showcase of my works and projects.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
              >
                {[
{
  title: "Moodlequest",
  description:
    "MoodleQuest is the gamified learning platform that brings excitement to education. Complete quests, earn experience, and level up your knowledge every day.",
    content: "MoodleQuest is the gamified learning platform that brings excitement to education. Complete quests, earn experience, and level up your knowledge every day.",
    footerText: "NextJS / FastAPI / TypeScript / React / SendGrid",
  githubLink: "https://moodlequest.vercel.app/",
  imageUrl: "/images/moodlequest.png",
},
{
  title: "Velora",
  description:
    "Velora is a website for an agency that crafts high-performance, modern websites that serve as powerful business assets.",
    content: "Crafts high-performance, modern websites that serve as powerful business assets.Deliver clean, cutting-edge digital experiences built on a foundation of strategic design.",
    footerText: "NextJS / Tailwind / TypeScript / React / SendGrid",
  githubLink: "https://veloraio.vercel.app/",
  imageUrl: "/images/velora.png",
},

{
  title: "Pet Groomer's Hub",
  description:
    "Pet Groomer Hubs is a website for a pet grooming and wellness services business in United States.",
  content: "Designed to be the ultimate, all-in-one destination for pet owners seeking professional grooming and wellness services. ",
  footerText: "NextJS / Tailwind / TypeScript / React / SendGrid",
  githubLink: "https://petgroomer-hub.vercel.app/",
  imageUrl: "/images/petgrommer.png",
},  
                  {
                    title: "Nest",
                    description: "A full stack web link organizing and sharing platform",
                    content: "A web app developed to address these issues by providing an automated solution for categorizing, and managing events such as meetings etc, ultimately enhancing productivity and reducing the burden of manual calendar management.",
                    footerText: "Django / React / Tailwind / PostgreSQL",
                    githubLink: "https://github.com/drkcutie/Nest",
                    imageUrl: "/images/NEST.png",
                  },
                  {
                    title: "Agrivision",
                    description: "An AI based mobile application to detect lettuce diseases from images.",
                    content: "AgriVision is a mobile application that utilizes deep learning and computer vision to detect lettuce diseases from images. By leveraging a CNN-based model, the app helps farmers and agriculturists diagnose plant health efficiently.",
                    footerText: "React Native / Tensorflow / Express",
                    githubLink: "https://github.com/ZenXen7/AgriVision",
                    imageUrl: "/images/agri.png",
                  },
                  {
                    title: "TeknoLost",
                    description: "A lost and found mobile application built using Android Studio and Firebase.",
                    content: "A convenient lost-and-found app that helps users quickly locate and recover lost items. With features to post lost or found items, browse recent listings, and connect with others nearby.",
                    footerText: "Java / Firebase / Android Studio",
                    githubLink: "https://github.com/Jethrr/TeknoLost",
                    imageUrl: "/images/tekno.png",
                  },
                  {
                    title: "Lersch Grossman Algorithm Visualizer",
                    description: "A lerch grossman algorithm visualizer built using Java and JavaFX.",
                    content: "A simple visualizer we made for Object Oriented Programming 2. This aims to provide a visualizer for this specific algorithm using JavaFX for mining Engineers.",
                    footerText: "Java / JavaFX",
                    githubLink: "https://github.com/Dioooooooooooooooo/Lerch-Grossman-Visualization",
                    imageUrl: "/images/lersch.png",
                  },
                  {
                    title: "Creative Studio Collective",
                    description: "A website i made for creative artist movement in cebu built using HTML/CSS/JS.",
                    content: "A web-based project for Platform Based Development Web. Aims to provide a platform for creative artist to showcase their works and connect with other artists.",
                    footerText: "Html / CSS / Javascript / Wordpress",
                    githubLink: "https://github.com/Jethrr/CSIT201Final",
                    imageUrl: "/images/csc.png",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    variants={staggerItem}
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <div className="relative h-full bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 dark:border-black/10 hover:border-white/30 dark:hover:border-black/30 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white dark:text-black mb-2 group-hover:text-blue-400 dark:group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-white/70 dark:text-black/70 text-sm mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.footerText.split(' / ').slice(0, 3).map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-white/10 dark:bg-black/10 text-white/90 dark:text-black/90 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Arrow Icon */}
                          <div className="flex items-center text-white/60 dark:text-black/60 group-hover:text-white dark:group-hover:text-black transition-colors">
                            <span className="text-sm font-medium">View Project</span>
                            <svg
                              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Automation Workflows Section */}
          <div id="workflows" className="w-full py-20 px-4">
            <motion.div
              {...fadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-6xl mx-auto"
            >
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-5xl xl:text-6xl font-bold text-white dark:text-black mb-4">
                  Automation Workflows
                </h2>
                <p className="text-white/70 dark:text-black/70 text-lg">
                  Explore my AI-powered automation solutions and workflows
                </p>
              </motion.div>

              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
              >
                {[
                  {
                    title: "Lead Generation Workflow",
                    description: "Design high-converting funnels and websites using GHL’s builder. Integrate forms, calendars, and call-to-action automations.",
                    category: "Lead Generation",
                    tags: ["GoHighLevel", "Funnels", "Websites", "Automations"],
                    slug: "lead-generation",
                    color: "blue",
                  },
                 
                  {
                    title: "Email, SMS & Chat Campaigns",
                    description: "Create multi-channel campaigns and triggers for lead engagement.",
                    category: "Email, SMS & Chat Campaigns",
                    tags: ["GoHighLevel", "Email", "SMS", "Chat"],
                    slug: "email-sms-chat-campaigns",
                    color: "green",
                  },
                ].map((workflow, index) => (
                  <motion.div
                    key={index}
                    className="group relative cursor-pointer"
                    variants={staggerItem}
                    onClick={() => handleWorkflowClick(workflow.slug)}
                  >
                    <div className="relative flex flex-col md:flex-row items-center gap-6 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 dark:border-black/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-xl">
                       {/* Content */}
                       <div className="flex-1">
                        <div className="mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            workflow.color === 'blue'
                              ? 'bg-blue-500/20 text-blue-400'
                              : workflow.color === 'purple'
                              ? 'bg-purple-500/20 text-purple-400'
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {workflow.category}
                          </span>
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300 ${
                          workflow.color === 'blue'
                            ? 'text-blue-400 dark:text-blue-400'
                            : workflow.color === 'purple'
                            ? 'text-purple-400 dark:text-purple-400'
                            : 'text-green-400 dark:text-green-400'
                        }`}>
                          {workflow.title}
                        </h3>
                        <p className="text-white/70 dark:text-black/70 mb-4">
                          {workflow.description}
                        </p>
                        
                                                                                                   {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {workflow.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-white/10 dark:bg-black/10 text-white/70 dark:text-black/70 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                       {/* Arrow Icon */}
                       <div className="flex-shrink-0">
                         <div className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-white/10 dark:group-hover:bg-black/10 transition-all duration-300 ${
                           workflow.color === 'blue'
                             ? 'text-blue-400'
                             : workflow.color === 'purple'
                             ? 'text-purple-400'
                             : 'text-green-400'
                         } group-hover:scale-110 group-hover:translate-x-2`}>
                           <svg
                             className="w-6 h-6"
                             fill="none"
                             stroke="currentColor"
                             viewBox="0 0 24 24"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth={2}
                               d="M13 7l5 5m0 0l-5 5m5-5H6"
                             />
                           </svg>
                         </div>
                       </div>

                       {/* Decorative line */}
                       <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                         workflow.color === 'blue'
                           ? 'from-blue-500 to-transparent'
                           : workflow.color === 'purple'
                           ? 'from-purple-500 to-transparent'
                           : 'from-green-500 to-transparent'
                       } w-0 group-hover:w-full transition-all duration-500`} />
                     </div>
                   </motion.div>
                 ))}
              </motion.div>

              {/* Coming Soon Message */}
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-white/50 dark:text-black/50 text-sm italic">
                  More automation workflows coming soon...
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="w-full py-20 px-4">
            <motion.div
              {...fadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-6xl mx-auto"
            >
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-4xl xl:text-5xl font-bold text-white dark:text-black mb-2">
                  Skills 
                </h2>
                <p className="text-white/60 dark:text-black/60 text-lg">
                  Technologies and tools I work with
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
              >
                {[
                   {
                    category: "Automation",
                    skills: ["n8n","Make","Zapier", "GoHighLevel"],
                    color: "from-yellow-500 to-orange-500",
                    icon: "⚙️"
                  },
                  {
                    category: "Languages",
                    skills: ["TypeScript", "JavaScript", "Java", "Python", "C", "C++"],
                    color: "from-blue-500 to-cyan-500",
                    icon: "⚡"
                  },
                  {
                    category: "Frontend",
                    skills: ["React", "NextJS", "React Native", "TailwindCSS", "Redux", "Zod", "Tanstack"],
                    color: "from-purple-500 to-pink-500",
                    icon: "🎨"
                  },
                  {
                    category: "Backend",
                    skills: ["NestJS", "ExpressJS", "Django", "FastApi"],
                    color: "from-green-500 to-emerald-500",
                    icon: "🚀"
                  },
                  {
                    category: "Database & Cloud",
                    skills: ["PostgreSQL", "NeonDB", "MongoDB", "Firebase", "Supabase", "AWS", "GCP"],
                    color: "from-orange-500 to-red-500",
                    icon: "☁️"
                  },
                  {
                    category: "Machine Learning",
                    skills: ["Tensorflow", "Keras", "YOLO", "Google Colab", "Numpy", "Pandas", "Matplotlib"],
                    color: "from-indigo-500 to-purple-500",
                    icon: "🤖"
                  },
                  {
                    category: "Tools",
                    skills: ["Git", "Docker", "Nx", "Cursor", "MCP", "Claude", "OpenAPI Spec"],
                    color: "from-teal-500 to-cyan-500",
                    icon: "🛠️"
                  },
                 
                ].map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    variants={staggerItem}
                  >
                    <div className="h-full bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 dark:border-black/10 hover:border-white/30 dark:hover:border-black/30 transition-all duration-300 group-hover:shadow-xl">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skillGroup.color} flex items-center justify-center text-xl`}>
                          {skillGroup.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white dark:text-black">
                          {skillGroup.category}
                        </h3>
                      </div>
                      
                      {/* Skills List */}
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => {
                          const IconComponent = skillIcons[skill];
                          return (
                            <span
                              key={skillIndex}
                              className="px-3 py-1.5 bg-white/10 dark:bg-black/10 text-white/80 dark:text-black/80 rounded-lg text-xs font-medium hover:bg-white/20 dark:hover:bg-black/20 transition-colors flex items-center gap-2"
                            >
                              {IconComponent && <IconComponent className="w-4 h-4" />}
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Certificates Section */}
          <div id="certificates" className="w-full py-20 px-4">
            <motion.div
              {...fadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-6xl mx-auto"
            >
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-4xl xl:text-5xl font-bold text-white dark:text-black mb-2">
                  Certificates 
                </h2>
                <p className="text-white/60 dark:text-black/60 text-lg">
                  My professional certifications and achievements
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
              >
                {[
                  {
                    title: "N8N Level 2 Intermediate Course",
                    subtitle: "Completed N8N Course Level 2",
                    issuer: "N8N",
                    category: "Automation",
                    color: "from-orange-500 to-red-500",
                    logo: "/logos/n8n.png",
                    certificateLink: "https://community.n8n.io/badges/105/completed-n8n-course-level-2?username=jeth" // Can be image path or URL
                  },
                  {
                    title: "AWS Cloud Academy Graduate",
                    subtitle: "Cloud Foundations",
                    issuer: "Amazon Web Services",
                    category: "Cloud Computing",
                    color: "from-yellow-500 to-orange-500",
                    logo: "/logos/aws.png",
                    certificateLink: "https://www.credly.com/badges/11b8ae95-2723-496b-a287-c835f5920d1f" // URL example
                  },
                  {
                    title: "Korea Test of Practical Competency in ICT",
                    subtitle: "TOPCIT Level II",
                    issuer: "Institute of Information & Communications Technology Planning & Evaluation (IITP)",
                    category: "ICT Competency",
                    color: "from-blue-500 to-purple-500",
                    logo: "/logos/topcit.png",
                    certificateLink: "/images/certificates/topcit-cert.jpg"
                  },
                ].map((certificate, index) => {
                  // Check if certificate link is an image or a URL
                  const isImage = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(certificate.certificateLink || '');
                  
                  const handleCertificateClick = () => {
                    if (isImage) {
                      openImageModal(certificate.certificateLink || '');
                    } else {
                      window.open(certificate.certificateLink, '_blank', 'noopener,noreferrer');
                    }
                  };
                  
                  return (
                                     <motion.div
                     key={index}
                     className="relative group"
                     variants={staggerItem}
                   >
                     <div className="h-full bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 dark:border-black/10 hover:border-white/30 dark:hover:border-black/30 transition-all duration-300 group-hover:shadow-xl flex flex-col">
                       {/* Company/Organization Logo */}
                       <div className="w-16 h-16 rounded-xl bg-white dark:bg-white p-2 mb-4 flex items-center justify-center flex-shrink-0">
                         <img
                           src={certificate.logo}
                           alt={certificate.issuer}
                           className="w-full h-full object-contain"
                           onError={(e) => {
                             // Fallback to gradient if image fails
                             e.currentTarget.style.display = 'none';
                             const parent = e.currentTarget.parentElement;
                             if (parent) {
                               parent.className = `w-16 h-16 rounded-xl bg-gradient-to-br ${certificate.color} flex items-center justify-center mb-4`;
                               parent.innerHTML = '<span class="text-2xl font-bold text-white">' + certificate.issuer.charAt(0) + '</span>';
                             }
                           }}
                         />
                       </div>
                       
                       {/* Certificate Details */}
                       <div className="flex-1 flex flex-col">
                         <h3 className="text-lg font-bold text-white dark:text-black mb-1 group-hover:text-blue-400 dark:group-hover:text-blue-600 transition-colors line-clamp-2">
                           {certificate.title}
                         </h3>
                         {certificate.subtitle && (
                           <p className="text-sm text-white/70 dark:text-black/70 mb-2">
                             {certificate.subtitle}
                           </p>
                         )}
                         <p className="text-sm text-white/60 dark:text-black/60 mb-3 line-clamp-2">
                           {certificate.issuer}
                         </p>
                         
                         {/* Category Badge */}
                         <div className="mb-4">
                           <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${certificate.color} text-white`}>
                             {certificate.category}
                           </span>
                         </div>
                       </div>
 
                       {/* View Certificate Button */}
                       <button
                         onClick={handleCertificateClick}
                         className={`w-full px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r ${certificate.color} text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                       >
                         <svg
                           className="w-4 h-4"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                         >
                           <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth={2}
                             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                           />
                           <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth={2}
                             d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                           />
                         </svg>
                         View Credentials
                       </button>
                     </div>
                   </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* <Contacts /> */}

         <div id="contacts" className="contact-calendar-page w-full py-20 px-4">
           <div className="max-w-5xl mx-auto text-center">
             <motion.h1 className="text-4xl xl:text-5xl font-bold text-white dark:text-black mb-3"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 1, ease: "easeOut" }}
             >Let's Work Together</motion.h1>
             <motion.p className="text-white/70 dark:text-black/70 text-base md:text-lg"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
             >
               Have a project in mind? Schedule a meeting using the booking calendar below, or reach out through my social accounts.
             </motion.p>

             <motion.div
               className="mt-8 w-full"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             >
               <motion.div className="w-full mx-auto max-w-3xl rounded-xl overflow-hidden border border-white/10 dark:border-black/10 bg-white/5 dark:bg-black/5"
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
               >
                 <iframe
                   title="Google Calendar Appointment Scheduling"
                   src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3uKlRqa0vobQEULyk8_YI7g4TnPEzdjNt94fWmg2XipeZC34pShQ46o42I1ygey_GkgJSUzZEo?gv=true"
                   style={{ border: 0, width: "100%" }}
                   width="100%"
                   height={600}
                   frameBorder={0}
                 />
               </motion.div>
             </motion.div>

             <div className="relative w-full my-10">
               
               <div className="relative flex justify-center text-sm">
                 <span className="px-3 bg-transparent text-white/70 dark:text-black/70">Or connect with me</span>
               </div>
             </div>

             <div className="w-full flex items-center justify-center gap-3 flex-wrap">
               <a
                 href="https://www.facebook.com/profile.php?id=100094149589311"
                 className="cursor-pointer p-2 rounded-lg flex items-center border bg-white border-gray-300 justify-center transition-all duration-300 hover:border-gray-200 hover:bg-gray-100"
                 aria-label="Facebook"
                 target="_blank"
                 rel="noreferrer"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72" fill="none">
                   <path d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z" fill="#111827"/>
                 </svg>
               </a>

               <a
                 href="https://www.linkedin.com/in/jether-omictin-a997351b6/"
                 className="cursor-pointer p-2 rounded-lg flex items-center border bg-white border-gray-300 justify-center transition-all duration-300 hover:border-gray-200 hover:bg-gray-100"
                 aria-label="LinkedIn"
                 target="_blank"
                 rel="noreferrer"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                   <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" fill="#111827"/>
                 </svg>
               </a>

               <a
                 href="https://www.instagram.com/jethvrdio/"
                 className="cursor-pointer p-2 rounded-lg flex items-center border bg-white border-gray-300 justify-center transition-all duration-300 hover:border-gray-200 hover:bg-gray-100"
                 aria-label="Instagram"
                 target="_blank"
                 rel="noreferrer"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72" fill="none">
                   <path d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808Z" fill="#111827"/>
                 </svg>
               </a>
             </div>
           </div>
         </div>

         <div className="footer-div  flex justify-center mt-20">
                  <p className="text-sm dark:text-black justify-center text-center text-white ">
                    Copyright © 2024 JETHRR. All rights reserved. <br /> {""}{" "}
                    Build with ❤️.
                  </p>
                </div>
        </div>
      </div>
      
      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeImageModal}
        >
          {/* Close Button */}
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-2 rounded-full"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          {/* Modal Image */}
          <motion.div
            className="max-w-4xl max-h-[90vh] p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Achievement"
              className="w-full h-full object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;

