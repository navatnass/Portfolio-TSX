import { Ben, SelectedPage } from '@/shared/type';
import { PencilSquareIcon, ComputerDesktopIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import React from 'react';
import Benefit from './Benefit';

const benefits: Array<Ben> = [
  {
  icon: <PencilSquareIcon className="h-6 w-6" />,
  title: "Quick Response",
  description: "Efficient and timely web design solutions for your business needs, ensuring swift and effective results."
  },
  {
    icon: <ComputerDesktopIcon className="h-6 w-6" />,
    title: "High-Quality Website Solutions",
    description: "Our crafted websites stand out for their high-quality design, blending convenience with functionality. We provide a personalized approach, catering to client needs for effective and professional online solutions."
  },
  {
    icon: <BanknotesIcon className="h-6 w-6" />,
    title: "Best Price Offer",
    description: "We offer competitive prices for high-quality website development, tailored to meet your needs and business goals"
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2}
  }
}
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits  = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-100% bg-pilka py-28">
      <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
    <div className="bg-white">
      <motion.p 
        className="flex justify-center text-black font-pop py-16 text-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 0.5}}
        variants={{
        hidden: { opacity: 0, x:-50 },
        visible: { opacity: 1, x:0 }
      }}
      >BENEFITS</motion.p>
      </div>

      <div className="md:my-15 md:w-5/5">
      <h1 className="md:relative flex justify-center basis-3/5 font-montserrat text-2xl font-bold mt-[3%] text-p-textas 
      transition duration-500 hover:text-davi">Revolutionize Your Online Presence: The Benefits of Our Web Design 
      </h1>
      </div>
      <div className="md:relative flex justify-center items-center md:my-15 md:w-5/5">
      <p className="my-5 text-sm font-monserrat break-all max-w-3xl">
      In the digital age, a compelling online presence is your gateway to success. Our cutting-edge web design solution isn't just about aesthetics; it's a powerful toolset that elevates your brand and drives tangible results.
      </p>
      </div>
      
      <motion.div 
        className="md:flex items-center justify-between gap-8 ml-20 mr-20"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}
        >
        {benefits.map((benefit: Ben) => (
          <Benefit
           key={benefit.title}
           icon={benefit.icon}
           title={benefit.title}
           description={benefit.description}
           />
        ))}
      </motion.div>

      </motion.div>
    </section>

  )
}

export default Benefits;