import HeaderText from "@/shared/HeaderText";
import PC from "@/assets/PC.png";
import PC2 from "@/assets/PC2.png";
import { SelectedPage } from "@/shared/type";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
    
const Portfolio = ({setSelectedPage}: Props) => {
  return (
    <section
    id="portfolio"
    className="mx-auto max-h-full  bg-pilka py-28">
      <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Portfolio)}
    >
    {/* PORTFOLIO */}
    <div className="bg-white w-full">
      <motion.p 
        className="flex justify-center text-black font-pop py-16 text-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 1.0}}
        variants={{
        hidden: { opacity: 0, y:-50 },
        visible: { opacity: 1, y:0 }
      }}
      >PORTFOLIO</motion.p>
      </div>

     {/* PORTFOLIO EXAMPLES  */}

     <div className="flex justify-center">
     <HeaderText>
     </HeaderText>
     </div>
     <div className="flex justify-center">
     <img className="md:relative pt-5 rounded-full drop-shadow-2xl" alt="Portfolio-Example" src={PC} />
     {/* <img className="md:relative left-[34%] rounded-full drop-shadow-2xl" alt="Portfolio-Example" src={PC2} /> */}
    </div>


    </motion.div>
    </section>
  );
};

export default Portfolio;