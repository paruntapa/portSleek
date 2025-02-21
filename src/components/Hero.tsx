"use client";

import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const COLORS_TOP = ["#13ff46", "#1e39cf", "#e63956", "#e65f29"];

const Hero = () => {
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
  // const border = useMotionTemplate`1px solid ${color}`;
  // const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="rounded-2xl relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="mt-2 z-10 flex flex-col items-center">
        <motion.span  whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 1,
          }} 
          className="mb-1.5 inline-block cursor-pointer rounded-full bg-green-600 hover:bg-green-600/50 px-3 py-1.5 text-sm">
          Open for Work
        </motion.span>
        <h1 className="text-white/40 text-5xl cursor-pointer  md:text-7xl font-black"> Namaste, I am</h1>
        <h1
          className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight
                text-transparent text-5xl  md:text-7xl"
        >
          Anuj Sundola
        </h1>
        <div>
          <Image
            src={"/profilepic.png"}
            alt="profile pic"
            width={150}
            height={150}
          />
        </div>

        <div className=" bg-white/10 shadow-xl rounded-3xl p-3 justify-center space-x-2 mb-4">
          <div className="flex ">
            <Image
              src={"/obj1.png"}
              alt="object"
              width={30}
              height={30}
              className="rounded-2xl mx-auto mr-0"
            />
            <Image
              src={"/obj1.png"}
              alt="object"
              width={30}
              height={30}
              className={`rounded-2xl mx-auto ml-0  hover:mr-0 hover:ml-3`}
            />
            <Image
              src={"/obj1.png"}
              alt="object"
              width={30}
              height={30}
              className="rounded-2xl mx-auto  ml-0"
            />
          </div>
          <div className="line-clamp-2 text-center">
            <p className="font-mono pt-1">Making Clients Happy </p>
          </div>
        </div>
        <p className="my-6 max-w-xl text-center font-extralight">
          creative software developer
        </p>

        {/* <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
        >
          Download CV
          <FiArrowRight className="" />
        </motion.button> */}
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};

export default Hero;
