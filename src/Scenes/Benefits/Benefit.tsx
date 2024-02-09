import { motion } from "framer-motion";

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity: 1, scale: 1}
}
type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Benefit = ({icon, title, description}: Props) => {
  return (
    <motion.div 
    variants={childVariant}
    className="mt-5 rounded-md border-2 bg-white px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="drop-shadow hover:opacity-75 rounded-full border-2 border-white bg-cream p-4">
        {icon}
        </div>
      </div>

      <h4 className="focus:transition duration-500 hover:text-davi font-bold font-montserrat mb-3">{title}</h4>
      <p className="">{description}</p>
    </motion.div>
  )
}

export default Benefit