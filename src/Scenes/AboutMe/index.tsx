import { SelectedPage } from '@/shared/type';
import AboutMeLogo from "@/assets/AboutMeLogo.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import Home from "../Navbar/home";
// import ActionButton from '@/shared/ActionButton';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({selectedPage, setSelectedPage}: Props) => {
  return (
   <section id="aboutme" className="bg-pilka py-28">
      <motion.div
        onViewportEnter={(e) => setSelectedPage(SelectedPage.AboutMe)}
      >

      {/* ABOUT ME HEADER  */}
      <div className="bg-white w-full pb-4 pt-8">
      <motion.p 
        className="flex justify-center text-black font-pop mt-6 mb-12 text-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 1.0}}
        variants={{
        hidden: { opacity: 0, y:-20 },
        visible: { opacity: 1, y:0 }
      }}
      >ABOUT ME</motion.p>
      </div>

      {/* IMAGE and MAIN HEADER */}
      <motion.div 
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      >

        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
        <div className="before:absolute before:-top-20 before:z-[-1]">
        <img className="md:relative ml-16 left-[28%] rounded-full drop-shadow-2xl" alt="AboutMe-Portfolio" src={AboutMeLogo} />
        </div>

          {/* HEADINGS */}
          <div 
            className="md:-mt-20"
            >
            <div 
              className="relative"
              >

              <motion.p 
                className="md:relative -top-40 -left-60 mt-8 text-base break-normal max-w-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 1.5, delay: 1}}
                variants={{
                  hidden: { opacity: 0, x:-50 },
                  visible: { opacity: 1, x:0 }
                }}
                >
              Hey, I'm Graphic Designer & Web Developer from <span className="text-color: text-red-400">Lithuania</span>.
              Finished <span className="text-color: text-red-400">9-month</span> diamond web developer studies 'Front-end' <span className="text-color: text-red-400">+</span> 'Back-end' at CodeAcademy.
              </motion.p>
              
            <div className="md:flex mx-auto w-5/6 justify-end md:h-5/6">
              <motion.p 
                className="md:relative left-[60%] mt-8 -top-40 text-base break-word max-w-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{duration: 1.5, delay: 2}}
                variants={{
                  hidden: { opacity: 0, x:50 },
                  visible: { opacity: 1, x:0 }
                }}
                >
              I would really like to gain <span className="text-color: text-red-400">practical experience</span> to further my development as a full-stack developer. 
              I've completed the full stack courses on Codecademy and have knowledge of <span className="text-color: text-red-400">Javascript, HTML, CSS, PHP</span> and <span className="text-color: text-red-400">Laravel</span>.
              Additionally, I'm familiar with <span className="text-color: text-red-400">UX/UI</span> and have experience with <span className="text-color: text-red-400">MYSQL</span> databases.
              Currently, I'm actively learning <span className="text-color: text-red-400">Typescript, React</span> and <span className="text-color: text-red-400">Node.Js</span>
              </motion.p>
              </div>
              <motion.p 
                className="md:relative left-[28%] -top-10 mt-8 text-lg break-word max-w-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{duration: 1.5, delay: 3.1}}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
                }}
                >
              Are you searching for free web design solutions? 
              </motion.p>
            </div>
            {/* ACTION BUTTON */}
            <motion.div 
              className="md:relative md:-top-10 mt-3 flex items-center gap-8 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{duration: 1.5, delay: 4.1}}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
              >
              <Home
                page="Contact Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              {/* <ActionButton setSelectedPage={setSelectedPage}>
                KKKK
              </ActionButton> */}

              <AnchorLink
                className="text-sm font-bold text-primary-500 underline"
                onClick={() => setSelectedPage(SelectedPage.ContactMe)}
                href={`#${SelectedPage.ContactMe}`}
              >
              </AnchorLink>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </motion.div>
    </section>
  )
}

export default AboutMe;
