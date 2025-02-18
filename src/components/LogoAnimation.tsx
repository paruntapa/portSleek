// This line tells Next.js that this component uses client-side features
"use client"

// Import necessary components and libraries
import Image from "next/image"
import { motion } from "framer-motion"
// Define an array of image objects, currently empty
const images = [
    { src: "udemy", alt: "figma" },
    { src: 'fiverr', alt: "fiverr" },
    { src: 'elementor', alt: "elementor" },
    { src: 'logitech', alt: "logitech" },
    { src: 'oracle', alt: "oracle" },
    { src: 'udemy', alt: "figma" },
    { src: 'fiverr', alt: "fiverr" },
    { src: 'elementor', alt: "elementor" },
    { src: 'logitech', alt: "logitech" },
    { src: 'oracle', alt: "oracle" },
    { src: 'udemy', alt: "figma" },
    { src: 'fiverr', alt: "fiverr" },
    { src: 'elementor', alt: "elementor" },
    { src: 'logitech', alt: "logitech" },
    { src: 'oracle', alt: "oracle" },
    { src: 'udemy', alt: "figma" },
    { src: 'fiverr', alt: "fiverr" },
    { src: 'elementor', alt: "elementor" },
    { src: 'logitech', alt: "logitech" },
    { src: 'oracle', alt: "oracle" },
]

const LogoAnimation = () => {
  return (
    <div className="py-7 bg-purple-200/10 opacity-80">
        <div className="container mx-auto">
            <div className="overflow-hidden
            [mask-image:linear-gradient(to_right,_transparent,_black_25%,_transparent,_black_75%,_transparent)]">
                <motion.div
                className="flex gap-14 flex-none pr-14"
                animate={{
                    translateX: '-50%'
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop',
                }}
                >
                    {images.map((image, idx) => (
                        <Image
                        key={idx}
                        src={`/assets/${image.src}.png`}
                        alt={image.alt}
                        width={200}
                        height={50}
                        />
                    ))}
                
                </motion.div>

            </div>

        </div>
        
    </div>
  )
}

export default LogoAnimation