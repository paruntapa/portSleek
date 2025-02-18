'use client'

import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const projects = [
    {id: 1, year: 2025, title: 'Buzzish', description: 
        "Stay connected like never before with our fast, fun, and secure chat app! Enjoy real-time messaging, seamless media sharing, and a smooth user experience. Chatting with friends made cooler with our app keeps you engaged with cool features and an easy-to-use interface. Say goodbye to boring chats—express yourself with emojis, stickers, and more. Start your Buzzish NOW!"
        , image: '/assets/proj5.png'},
    {id: 2, year: 2025, title: 'ChatX', description: 
        "Post your thoughts, share photos and videos, and stay updated with what matters most. Whether you're building a community, following trends, or just having fun, our platform makes it easy with a smooth, interactive experience. Express yourself with likes, comments, and reposts—your voice matters here. Join now and be part of the conversation!",
        image: '/assets/proj6.png'},
    {id: 3, year: 2025, title: 'CodeBuds', description: 
        'Prepare for coding interviews like a pro! Solve real-world challenges, practice live coding, and get instant feedback. Whether aiming for FAANG or startups, our platform helps you sharpen your skills with a supervision of expert. Join now and level up your career!', 
        image: '/assets/proj7.png'},

]

const COLORS_TOP = ["#13ff46", "#1e39cf", "#e63956", "#e65f29"];

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const color = useMotionValue(COLORS_TOP[0]);
    
        useEffect(() => {
            animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            });
        }, [color]);
        
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

    return (
        <motion.section 
        style={{
            backgroundImage,
          }}
        id="portfolio" 
        className="py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-6xl font-bold mb-10"> Selected <span className="text-gray-400"> Projects</span></h2>
                    {projects.map((project) => (
                        <div key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="cursor-pointer mb-8 group"
                        >
                            <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors 
                                ${selectedProject.id === project.id ? 'text-purple-200' : '' }duration-300`}>
                                    {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-purple-200 my-4" />
                            )}
                            {selectedProject.id === project.id && (
                                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                    </div>
                    <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-2xl shadow-lg transition-opacity duration-500 ease-in-out"
                    width={800}
                    height={450}
                    />
            </div>
        </motion.section>
    )
    }