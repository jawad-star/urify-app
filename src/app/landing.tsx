import { motion, useScroll, useTransform } from 'framer-motion';

export default function Landing() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-50">
      {/* Circle background */}
      <motion.div 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[500px] h-[500px] bg-gray-100 rounded-full"
        whileHover={{ scale: 1.05 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      />

      {/* Mobile images */}
      <motion.div
        className="absolute left-[10%] top-[20%]"
        style={{ y: y1 }}
      >
        <img src="/images/iphone-1.png" alt="iPhone 1" className="w-[300px]" />
      </motion.div>

      <motion.div
        className="absolute left-[45%] top-[10%]"
        style={{ y: y2 }}
      >
        <img src="/images/iphone-2.png" alt="iPhone 2" className="w-[300px]" />
      </motion.div>

      <motion.div
        className="absolute right-[10%] top-[20%]"
        style={{ y: y3 }}
      >
        <img src="/images/iphone-3.png" alt="iPhone 3" className="w-[300px]" />
      </motion.div>
    </div>
  );
}
