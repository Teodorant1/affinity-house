"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";
import FlickeringGrid from "~/components/magicui/flickering-grid";
import Image from "next/image";

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask:radial-gradient(circle_at_center,#fff_300px,transparent_0)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={800}
          width={800}
        />
      </div>
      <div className="relative z-10 h-full overflow-hidden py-14">
        <div className="container z-10 flex flex-col">
          <div className="mt-20 grid grid-cols-1">
            <div className="flex flex-col items-center gap-6 pb-8 text-center">
              <motion.h1
                ref={ref}
                className="text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40"
                animate={inView ? "animate" : "initial"}
                variants={fadeUpVariants}
                initial="initial"
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                Beautiful <br /> Communities <br /> in Los Angeles
              </motion.h1>

              <motion.p
                className="text-balance text-lg tracking-tight text-gray-400 md:text-xl"
                animate={inView ? "animate" : "initial"}
                variants={fadeUpVariants}
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                Affinity House designs communities for students and urban
                coliving in amazing locations.
              </motion.p>

              <motion.div
                animate={inView ? "animate" : "initial"}
                variants={fadeUpVariants}
                className="flex flex-col gap-4 lg:flex-row"
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                <a
                  href="#"
                  className={cn(
                    // colors
                    "bg-black text-white shadow hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",

                    // layout
                    "focus-visible:ring-ring group relative inline-flex h-9 w-full items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md px-4 py-2 text-base font-semibold tracking-tighter focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:flex",

                    // animation
                    "hover:ring-primary transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2",
                  )}
                >
                  Get Started
                  <ChevronRight className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={inView ? "animate" : "initial"}
            variants={fadeUpVariants}
            initial={false}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
              type: "spring",
            }}
            className="relative mt-24 h-full w-full rounded-xl after:absolute after:inset-0 after:z-10 after:[background:linear-gradient(to_top,#fff_30%,transparent)] dark:after:[background:linear-gradient(to_top,#000000_30%,transparent)]"
          >
            <div
              className={cn(
                "absolute inset-0 bottom-1/2 h-full w-full transform-gpu [filter:blur(120px)]",

                // light styles
                "[background-image:linear-gradient(to_bottom,#ffaa40,transparent_30%)]",

                // dark styles
                "dark:[background-image:linear-gradient(to_bottom,#ffffff,transparent_30%)]",
              )}
            />

            <Image
              src="/dashboard-light.png"
              alt="Dashboard Light"
              width={1200}
              height={675}
              className="relative block h-full w-full rounded-xl border dark:hidden"
            />
            <Image
              src="/dashboard-dark.png"
              alt="Dashboard Dark"
              width={1200}
              height={675}
              className="relative hidden h-full w-full rounded-xl border dark:block"
            />

            {/* <BorderBeam size={150} />
            <BorderBeam size={150} delay={7} /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
