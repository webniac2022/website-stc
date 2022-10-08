import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export const useParallax = (value, distance) => {
  return useSpring(useTransform(value, [0, 1], [-distance, distance]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
};

export { Image, Link, useRouter, motion, useScroll, useSpring, useTransform };
