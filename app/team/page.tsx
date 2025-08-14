"use client";

import React, { useState } from "react";
import { FaLinkedin, FaUser, FaGithub, FaTwitter, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { HiSparkles, HiUserGroup, HiLightBulb, HiTrendingUp } from "react-icons/hi";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import Image from "next/image";




interface TeamMember {
  name: string;
  rollNumber: string;
  position: string;
  linkedin?: string;
  level: string;
  description?: string;
  skills?: string[];
  image?: string;
  batch?: string;
}


interface LegacyTeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  batch: string;
}

const TeamPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedYear, setSelectedYear] = useState("2025"); // Current batch as default

  const teamMembers: TeamMember[] = [
    {
      name: "Shreya P V",
      rollNumber: "NNM22BT034",
      position: "President",
      linkedin: "https://www.linkedin.com/in/shreya-p-v-303572328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      level: "executive",
      description: "Leading the club with vision and dedication to preserve Tulu heritage",
      skills: ["Leadership", "Cultural Preservation", "Strategic Planning"],
      image: "/src/president.jpg",
      batch: "2025"
    },
    {
      name: "Gagan R Rai",
      rollNumber: "NNM22IS052",
      position: "Vice-president",
      linkedin: undefined,
      level: "executive",
      description: "Supporting organizational growth and member engagement",
      skills: ["Management", "Team Building", "Event Coordination"],
      image: "/src/vice.JPG",
      batch: "2025"
    },
    {
      name: "Prathama S J",
      rollNumber: "4NM21CS115",
      position: "Event Management Head",
      linkedin: "https://www.linkedin.com/in/prathama-s-j-614638229",
      level: "head",
      description: "Orchestrating memorable cultural events and celebrations",
      skills: ["Event Planning", "Project Management", "Cultural Events"],
      image: "/src/partham.jpg",
      batch: "2025"
    },
    {
      name: "Amrith R Naik",
      rollNumber: "NNM22AD006",
      position: "Technical Head",
      linkedin: "https://www.linkedin.com/in/amrith-r-naik-501231290",
      level: "head",
      description: "Driving digital innovation and technical excellence",
      skills: ["Web Development", "Digital Solutions", "Technology"],
      image: "/src/1668358840052 - Amrith R Naik.jpg",
      batch: "2025"
    },
    {
      name: "Sumith Jayarama Shetty",
      rollNumber: "NNM22EE063",
      position: "Digital Head",
      linkedin: "https://www.linkedin.com/in/sumith-jayarama-shetty-4145a8219",
      level: "head",
      description: "Creating engaging digital content and online presence",
      skills: ["Digital Marketing", "Content Creation", "Social Media"],
      image: "/src/1700492920398 - NNM22EE063 SUMITH JAYARAMA SHETTY.jpg",
      batch: "2025"
    },
    {
      name: "Namana B K",
      rollNumber: "NNM23CS116",
      position: "Documentation Head",
      linkedin: "https://www.linkedin.com/in/namana-b-k-0b56a1313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      level: "head",
      description: "Maintaining comprehensive records and documentation",
      skills: ["Documentation", "Record Keeping", "Administrative Skills"],
      image: "/src/Namana.png",
      batch: "2025"
    },
    {
      name: "Pratham S Salian",
      rollNumber: "NNM23IS137",
      position: "Tulu Lipi and Magazine Head",
      linkedin: "https://www.linkedin.com/in/pratham-s-salian-33534328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      level: "head",
      description: "Preserving Tulu script and literary traditions",
      skills: ["Tulu Literature", "Publishing", "Cultural Research"],
      image: "/src/IMG-20240604-WA0073 (1) - NNM23IS137 PRATHAM S SALIAN.jpg",
      batch: "2025"
    },
    {
      name: "Suhan Shetty",
      rollNumber: "NNM22CS181",
      position: "Joint Secretary",
      linkedin: undefined,
      level: "secretary",
      description: "Ensuring smooth administrative operations",
      skills: ["Administration", "Communication", "Organization"],
      image: "/src/The  higher you climb, the better the view..heic - NNM22CS181 SUHAN SHETTY.jpg",
      batch: "2025"
    },
    {
      name: "H Sumanth Bhat",
      rollNumber: "NNM23RI024",
      position: "Media Co-Head",
      linkedin: undefined,
      level: "cohead",
      description: "Supporting media operations and visual storytelling",
      skills: ["Media Production", "Visual Design", "Photography"],
      image: "/src/Screenshot_2025_0116_192023 - NNM23RI024 H SUMANTH BHAT.png",
      batch: "2025"
    },
    {
      name: "Jeevan",
      rollNumber: "NNM23CS254",
      position: "Event Management Co-Head",
      linkedin: undefined,
      level: "cohead",
      description: "Assisting in event planning and execution",
      skills: ["Event Support", "Logistics", "Team Coordination"],
      image: "/src/IMG-20240317-WA0087-01 - NNM23CS254 JEEVAN.jpeg",
      batch: "2025"
    },
    {
      name: "Sampreeth T Poojary",
      rollNumber: "4NM21IS136",
      position: "Technical Co-Head",
      linkedin: undefined,
      level: "cohead",
      description: "Supporting technical initiatives and development",
      skills: ["Software Development", "Technical Support", "Innovation"],
      image: "/src/IMG_20240506_222026 - 4NM21IS136 SAMPREETH T POOJARY.jpg",
      batch: "2025"
    },
    {
      name: "Yash",
      rollNumber: "NNM23IS218",
      position: "SMC Co-Head",
      linkedin: undefined,
      level: "cohead",
      description: "Contributing to student management activities",
      skills: ["Student Relations", "Management", "Coordination"],
      image: "/src/YASH - NNM23IS218 YASH.jpg",
      batch: "2025"
    }
  ];

 
  const legacyTeamMembers: LegacyTeamMember[] = [
    {
      name: "Sudeeksha S Pai",
      position: "Faculty Coordinator",
      description: "As the Club Faculty Coordinator, play a pivotal role in guiding and supporting student initiatives, ensuring a dynamic and enriching club experience.",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705691622/Tudar/sudheeksha_youefw.jpg",
      batch: "2024"
    },
    {
      name: "Shushan Kotian",
      position: "President",
      description: "As President, leads with vision, driving the organization towards success through strategic planning and inspiring leadership",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705692297/Tudar/Screenshot_2024-01-20_005439_wrmlfv.png",
      batch: "2024"
    },
    {
      name: "Anwesh",
      position: "Secretary",
      description: "Arrange meeting place, prepare an agenda, record minutes, and provide regular updates to the president and institute on pertinent matters affecting the proceedings",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705691469/Tudar/IMG_20231110_184846_-_4NM20EE009_ANWESH_R_SHETTY_m8awhp.jpg",
      batch: "2024"
    },
    {
      name: "Blenson Cardoza",
      position: "Head - Tulu Lipi",
      description: "As the Head of Tulu Script Lipi, lead the innovation in preserving and enhancing the Tulu language through script development",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581159/Tudar/IMG_0014_-_BLENSON_CARDOZA_nmrqje.jpg",
      batch: "2024"
    },
    {
      name: "Suvith Kumar",
      position: "Technical Head",
      description: "In my role as the Technical Head, I'm a forward-thinking technologist propelling our cultural community into the digital age.",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705626318/Tudar/suvith_pvlksc.jpg",
      batch: "2024"
    },
    {
      name: "Brijwin Balakrishna",
      position: "Digital and Social Media Head",
      description: "Designing and managing various creatives for the digital assets of the club on various social media platforms",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581160/Tudar/IMG_2558_-_4NM20AI013_BRIJWIN_BALAKRISHNA_qzmftp.jpg",
      batch: "2024"
    },
    {
      name: "Shreya P V",
      position: "Documentation Head",
      description: "Creating , maintaining ,managing the documentation of club events, meetings and other activities.",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581172/Tudar/Shreya_-_NNM22BT034_SHREYA_P_V_jz5arh.jpg",
      batch: "2024"
    },
    {
      name: "Vishnuprasad V Bhat",
      position: "Joint Secretary",
      description: "I ensure our club adheres to the event timeline, ensuring seamless execution of all our events.",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581177/Tudar/SPV00316_-_4NM22AI405_VISHNUPRASAD_V_BHAT_jwyz6z.jpg",
      batch: "2024"
    },
    {
      name: "Tvisha Prakash",
      position: "Social Media - Cohead",
      description: "As Co-Head of Social Media, spearheads our digital presence, driving engagement and fostering connections in the virtual realm",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705691467/Tudar/personal2_-_4NM21CS195_TVISHA_PRAKASH_JARAPPA_q3ocvx.jpg",
      batch: "2024"
    },
    {
      name: "Vignesh Mallya",
      position: "Asst Tulu Lipi Head",
      description: "To promote tulu language and lipi. Conduct various events related to same. Tulu lipi classes and other activities.",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581160/Tudar/vignesh_mallya_lipi_-_NNM22BT040_VIGNESH_MALLYA_rsbmgo.jpg",
      batch: "2024"
    },
    {
      name: "Prathama S J",
      position: "Event Management Head",
      description: "Overseeing and coordinating various events, ensuring their successful planning, execution, and follow-up",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581151/Tudar/IMG-20231122-WA0008_-_4NM21CS115_Prathama_S_J_pfcl6j.jpg",
      batch: "2024"
    },
    {
      name: "Mayur Shet",
      position: "Co Head SMC",
      description: "Creative visionary curating compelling visual stories for social media excellence.",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581186/Tudar/mayur_m_shet_-_NNM22IS090_MAYUR_M_SHET_bqwqiu.jpg",
      batch: "2024"
    },
    {
      name: "Amrith R Naik",
      position: "Event Management Co-head",
      description: "Collaborating in the planning and execution of events for our club with enthusiasm and precision",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581155/Tudar/IMG_20240107_141407_-_Amrith_R_Naik_tsdjgy.jpg",
      batch: "2024"
    },
    {
      name: "Gagan R Rai",
      position: "Joint Secretary",
      description: "Managing cultural events, coordinating activities, and supporting administrative tasks.",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581155/Tudar/Gagan_Rai_-_Gagan_Rai_xuucv8.jpg",
      batch: "2024"
    },
    {
      name: "Sampreeth T Poojary",
      position: "Core Member",
      description: "Writing a content for social media post, volunteering events.",
      image: "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581153/Tudar/Sampreeth_T_Poojary_-_Sampreeth_poojary_ejye9q.jpg",
      batch: "2024"
    }
  ];


  const availableYears = ["2025", "2024"];


  const filteredMembers = selectedYear === "2024" 
    ? legacyTeamMembers 
    : teamMembers.filter(member => member.batch === selectedYear);


  const getFilteredMembers = () => {
    if (activeFilter === "all") return filteredMembers;
    
    if (selectedYear === "2024") {
      
      return legacyTeamMembers.filter(member => {
        const level = member.position.toLowerCase().includes('president') ? 'executive' :
                     member.position.toLowerCase().includes('secretary') ? 'secretary' :
                     member.position.toLowerCase().includes('head') ? 'head' :
                     member.position.toLowerCase().includes('co') ? 'cohead' : 'member';
        return level === activeFilter;
      });
    } else {
     
      return (filteredMembers as TeamMember[]).filter(member => member.level === activeFilter);
    }
  };

  const getTeamStats = () => {
    if (selectedYear === "2024") {
      return {
        total: legacyTeamMembers.length,
        executive: legacyTeamMembers.filter(m => m.position.toLowerCase().includes('president')).length,
        heads: legacyTeamMembers.filter(m => m.position.toLowerCase().includes('head')).length,
        support: legacyTeamMembers.filter(m => m.position.toLowerCase().includes('secretary') || m.position.toLowerCase().includes('co')).length
      };
    } else {
      return {
        total: teamMembers.length,
        executive: teamMembers.filter(m => m.level === "executive").length,
        heads: teamMembers.filter(m => m.level === "head").length,
        support: teamMembers.filter(m => m.level === "secretary" || m.level === "cohead").length
      };
    }
  };

  const stats = getTeamStats();

 
  const AdvancedTeamCard = ({ member, index }: { member: TeamMember; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
        "border border-gray-700 hover:border-yellow-400/50 transition-all duration-500",
        "hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-2",
        "backdrop-blur-sm"
      )}
    >
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        variants={{
          hover: {
            background: [
              "linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, transparent 50%, rgba(251, 191, 36, 0.1) 100%)",
              "linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, transparent 50%, rgba(251, 191, 36, 0.15) 100%)",
              "linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, transparent 50%, rgba(251, 191, 36, 0.1) 100%)"
            ],
            transition: { duration: 2, repeat: Infinity }
          }
        }}
      />
     
      <div className="relative p-8 lg:p-10">
      
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div 
            className="relative mb-6"
            variants={{
              hover: { scale: 1.1, rotate: [0, -5, 5, 0] }
            }}
          >
            <div className={cn(
              "w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden relative",
              "bg-gradient-to-br from-yellow-400 to-yellow-600 p-1",
              "shadow-lg group-hover:shadow-yellow-400/50",
              "ring-4 ring-gray-700 group-hover:ring-yellow-400/50 transition-all duration-500"
            )}>
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to default avatar if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600">
                            <svg class="text-black text-2xl lg:text-3xl w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                            </svg>
                          </div>
                        `;
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600">
                    <FaUser className="text-black text-2xl lg:text-3xl" />
                  </div>
                )}
              </div>
            </div>
            
            
            <motion.div 
              className={cn(
                "absolute -top-1 -right-1 px-3 py-1 rounded-full text-xs font-bold",
                "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
                "shadow-lg border border-white/20 backdrop-blur-sm"
              )}
              variants={{
                hover: { 
                  rotate: 0,
                  scale: 1.1,
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)"
                }
              }}
              initial={{ rotate: 12 }}
            >
              {member.level === "executive" && "EXEC"}
              {member.level === "head" && "HEAD"}
              {member.level === "secretary" && "SEC"}
              {member.level === "cohead" && "CO-HEAD"}
            </motion.div>

           
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-800 rounded-full">
              <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </motion.div>

        
          <h3 className={cn(
            "text-2xl lg:text-3xl font-bold text-white mb-3",
            "group-hover:text-yellow-400 transition-colors duration-300"
          )}>
            {member.name}
          </h3>
          
          <p className="text-yellow-400 font-semibold text-base lg:text-lg mb-3 uppercase tracking-wide">
            {member.position}
          </p>
          
          <p className="text-gray-400 text-sm lg:text-base font-mono bg-gray-800/50 px-4 py-2 rounded-full">
            {member.rollNumber}
          </p>
        </div>

       
        {member.description && (
          <p className="text-gray-300 text-base lg:text-lg text-center mb-6 leading-relaxed">
            {member.description}
          </p>
        )}

        
        {member.skills && (
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {member.skills.map((skill, idx) => (
              <span
                key={idx}
                className={cn(
                  "px-4 py-2 text-sm lg:text-base rounded-full",
                  "bg-gradient-to-r from-gray-700 to-gray-600",
                  "text-gray-200 border border-gray-600",
                  "group-hover:border-yellow-400/50 transition-colors duration-300"
                )}
              >
                {skill}
              </span>
            ))}
          </div>
        )}

       
        <div className="flex justify-center space-x-3">
          {member.linkedin && (
            <motion.a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-xl",
                "bg-gradient-to-r from-blue-600 to-blue-700",
                "hover:from-blue-700 hover:to-blue-800",
                "text-white text-sm font-medium",
                "transition-all duration-300 shadow-lg hover:shadow-blue-500/25",
                "border border-blue-500/20 hover:border-blue-400/50"
              )}
            >
              <FaLinkedin className="text-lg" />
              <span className="hidden sm:inline">Connect</span>
            </motion.a>
          )}
          
        
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "p-2.5 rounded-xl border-2 border-gray-600",
              "hover:border-yellow-400 hover:bg-yellow-400/10",
              "text-gray-400 hover:text-yellow-400",
              "transition-all duration-300 backdrop-blur-sm",
              "shadow-lg hover:shadow-yellow-400/25"
            )}
            title="Send Email"
          >
            <FaEnvelope className="text-lg" />
          </motion.button>

         
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "p-2.5 rounded-xl border-2 border-gray-600",
              "hover:border-purple-400 hover:bg-purple-400/10",
              "text-gray-400 hover:text-purple-400",
              "transition-all duration-300 backdrop-blur-sm",
              "shadow-lg hover:shadow-purple-400/25"
            )}
            title="GitHub Profile"
          >
            <FaGithub className="text-lg" />
          </motion.button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <HiSparkles className="text-yellow-400 text-2xl" />
      </div>
    </motion.div>
  );

  // Filter buttons
  const FilterButton = ({ filter, label, icon: Icon }: { filter: string; label: string; icon: any }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setActiveFilter(filter)}
      className={cn(
        "flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold transition-all duration-300",
        activeFilter === filter
          ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-400/25"
          : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600 hover:border-yellow-400/50"
      )}
    >
      <Icon className="text-lg" />
      <span className="text-sm lg:text-base">{label}</span>
    </motion.button>
  );

  // Stats Card Component
  const StatsCard = ({ label, value, icon: Icon, color }: { label: string; value: number; icon: any; color: string }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        "bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 lg:p-8",
        "border border-gray-700 hover:border-yellow-400/50 transition-all duration-300",
        "group cursor-pointer"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={cn("p-3 rounded-xl", color)}>
          <Icon className="text-2xl lg:text-3xl" />
        </div>
        <div className="text-right">
          <p className="text-3xl lg:text-4xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
            {value}
          </p>
        </div>
      </div>
      <p className="text-gray-400 font-medium">{label}</p>
    </motion.div>
  );

  // Legacy Team Member Card Component for 2024 batch
  const LegacyTeamCard = ({ member, index }: { member: LegacyTeamMember; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group"
    >
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image
            src={member.image}
            alt={member.name}
            width={128}
            height={128}
            className="w-full h-full object-cover rounded-full border-4 border-orange-200 group-hover:border-orange-400 transition-colors"
          />
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
        <p className="text-orange-600 font-semibold mb-3">{member.position}</p>
        <p className="text-gray-600 text-sm">{member.description}</p>
        
        <div className="mt-4">
          <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
            {member.batch} Batch
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Meet the dedicated individuals who drive the vision and mission of Tudar Club forward, 
              preserving and promoting our rich Tulu heritage.
            </p>
          </motion.div>

          {/* Year Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <FaCalendarAlt className="text-yellow-400 text-xl" />
            <span className="text-lg font-medium text-gray-300">Select Batch:</span>
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none bg-gray-800 border-2 border-gray-600 rounded-lg px-4 py-2 pr-8 text-lg font-medium text-white focus:outline-none focus:border-yellow-400 transition-colors"
              >
                {availableYears.map((year) => (
                  <option key={year} value={year} className="bg-gray-800">
                    {year} Batch
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto mb-12"
          >
            <StatsCard label="Total Members" value={stats.total} icon={HiUserGroup} color="bg-blue-500/20 text-blue-400" />
            <StatsCard label="Executive Team" value={stats.executive} icon={HiTrendingUp} color="bg-purple-500/20 text-purple-400" />
            <StatsCard label="Department Heads" value={stats.heads} icon={HiLightBulb} color="bg-green-500/20 text-green-400" />
            <StatsCard label="Support Team" value={stats.support} icon={HiSparkles} color="bg-yellow-500/20 text-yellow-400" />
          </motion.div>
        </div>
      </section>

      <div className="relative max-w-7xl mx-auto px-4 pb-16 lg:pb-24">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <FilterButton filter="all" label="All Members" icon={HiUserGroup} />
          <FilterButton filter="executive" label="Executive" icon={HiTrendingUp} />
          <FilterButton filter="head" label="Heads" icon={HiLightBulb} />
          <FilterButton filter="secretary" label="Secretary" icon={FaUser} />
          <FilterButton filter="cohead" label="Co-Heads" icon={HiSparkles} />
        </motion.div>

        {/* Team Grid */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {getFilteredMembers().map((member, index) => (
            selectedYear === "2024" ? (
              <LegacyTeamCard key={`${member.name}-${activeFilter}`} member={member as LegacyTeamMember} index={index} />
            ) : (
              <AdvancedTeamCard key={`${member.name}-${activeFilter}`} member={member as TeamMember} index={index} />
            )
          ))}
        </motion.div>
      </div>

      {/* Enhanced CTA Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 lg:py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 lg:mb-12 leading-relaxed">
              Be part of a vibrant community dedicated to preserving and celebrating Tulu culture. 
              Together, we&apos;re building bridges between tradition and modernity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 lg:px-12 py-3 lg:py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 text-lg"
              >
                Get Involved
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 lg:px-12 py-3 lg:py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 text-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
