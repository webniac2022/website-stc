import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { wrap } from "popmotion";
import { useCountUp } from "react-countup";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
export const useParallax = (value, distance) => {
  return useSpring(useTransform(value, [0, 1], [-distance, distance]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
};

export {
  Image,
  Link,
  useRouter,
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
  useCountUp,
  useEmblaCarousel,
  Autoplay,
  wrap,
};
