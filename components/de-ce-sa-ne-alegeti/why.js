import {
  useCountUp,
  useParallax,
  useScroll,
  motion,
} from "../../lib/external-components";
import { useRef } from "react";

const Why = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 10);
  const y2 = useParallax(scrollYProgress, 12);
  const y3 = useParallax(scrollYProgress, 13);
  const y4 = useParallax(scrollYProgress, 14);
  const y5 = useParallax(scrollYProgress, 15);
  const countUpRef = useRef();
  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 300,
    duration: 2,
  });
  return (
    <motion.div
      whileInView={() => {
        start();
      }}
      ref={ref}
      className="w-full flex flex-col gap-2 mb-10"
    >
      <motion.div style={{ y: y1 }} className="flex flex-row justify-start p-2">
        <div className="w-[50%]">
          <div className="w-[220px] h-[220px] rounded-[50%] bg-thirdGradient shadow-sm shadow-slate-600 flex flex-col gap-2 justify-center items-center">
            <h2 className="text-center text-sm font-bold text-white">+</h2>
            <h2
              ref={countUpRef}
              className="text-center text-sm font-bold text-white"
            ></h2>
            <h2 className="text-center text-sm font-bold text-white">
              clienti multumiti
            </h2>
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="flex flex-row justify-center p-2"
      >
        <div className="w-[50%]">
          <div className="w-[220px] h-[220px] rounded-[50%] bg-thirdGradient shadow-sm shadow-slate-600 flex flex-col gap-2 justify-center items-center">
            <h2 className="text-sm font-bold text-white text-center">
              Experienta de peste 10 ani in domeniul securitatii
            </h2>
          </div>
        </div>
      </motion.div>
      <motion.div style={{ y: y3 }} className="flex flex-row justify-start p-2">
        <div className="w-[50%]">
          <div className="w-[220px] h-[220px] rounded-[50%] bg-thirdGradient shadow-sm shadow-slate-600 flex flex-col gap-2 justify-center items-center">
            <h2 className="text-sm font-bold text-white text-center">
              Suntem profesionisti, seriosi si dedicati nevoilor clientilor
              nostri
            </h2>
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{ y: y4 }}
        className="flex flex-row justify-center p-2"
      >
        <div className="w-[50%]">
          <div className="w-[220px] h-[220px] rounded-[50%] bg-thirdGradient shadow-sm shadow-slate-600 flex flex-col gap-2 justify-center items-center">
            <h2 className="text-sm font-bold text-white text-center">
              Ne incapatanam sa gasim solutii acolo unde altii ineceteaza sa
              caute!
            </h2>
          </div>
        </div>
      </motion.div>
      <motion.div style={{ y: y5 }} className="flex flex-row justify-start p-2">
        <div className="w-[50%]">
          <div className="w-[220px] h-[220px] rounded-[50%] bg-thirdGradient shadow-sm shadow-slate-600 flex flex-col gap-2 justify-center items-center">
            <h2 className="text-sm font-bold text-white text-center">
              Suntem prezenti si pe Sicap
            </h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Why;
