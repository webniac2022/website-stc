import {
  motion,
  AnimatePresence,
  wrap,
  Image,
} from "../../lib/external-components";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
const data = [
  {
    name: "Iulian M.",
    content: "O colaborare exceptionala! Foarte prompti si profesionisti!",
    avatar:
      "https://res.cloudinary.com/webniac/image/upload/v1665339350/STC/pexels-hasibullah-zhowandai-819530_rst76o.jpg",
  },
  {
    name: "Tudor O.",
    content: "Apelez de fiecare data cu incredere! O colaborare exceptionala!",
    avatar:
      "https://res.cloudinary.com/webniac/image/upload/v1665339350/STC/pexels-pixabay-39866_qulcor.jpg",
  },
  {
    name: "Lori B.",
    content: "Super colaborarea! Recomand! Promptitudine si seriozitate!",
    avatar:
      "https://res.cloudinary.com/webniac/image/upload/v1665339350/STC/pexels-andrea-piacquadio-837358_e6qdby.jpg",
  },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;

const Pareri = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, data.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="grid grid-cols-12">
        <div className="col-span-1 flex flex-row justify-center items-center">
          <div className="hover:cursor-pointer">
            <GrCaretPrevious onClick={() => paginate(1)} />
          </div>
        </div>
        <div className="col-span-10 flex justify-center items-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <div className="w-full flex flex-col gap-2 items-center justify-center p-2">
                <div className="xs:w-[70%] sm:w-[80%] bg-thirdGradient hover:cursor-grab shadow-sm shadow-components-800 rounded-lg p-2 flex flex-col items-center justify-center gap-4">
                  <div className="w-[30%]">
                    <Image
                      src={data[imageIndex].avatar}
                      alt="photo testimonial"
                      width={1920}
                      height={1080}
                      style={{ borderRadius: 50 }}
                    />
                  </div>
                  <div className="">
                    <p className="text-sm text-white">
                      {data[imageIndex].content}
                    </p>
                  </div>
                  <div className="flex flex-row gap-1">
                    <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
                    <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
                    <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
                    <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
                    <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
                  </div>
                  <div className="">
                    <p className="text-lg text-white">
                      {data[imageIndex].name}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="col-span-1 flex flex-row items-center justify-center">
          <div className="hover:cursor-pointer">
            <GrCaretNext onClick={() => paginate(-1)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pareri;
