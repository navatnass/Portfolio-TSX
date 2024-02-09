import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/type"
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactMe = ({ setSelectedPage }: Props) => {
  const inputStyles = `outline-none ml-12 font-monserrat flex justify-center w-9/12 rounded-md bg-davi mt-5 py-3 text-center placeholder-bg-pilka text-white border-2 border-indigo-500`

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();
  
  const onSubmit = async(e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section 
      id="contactme" 
      className="mx-auto min-h-full w-100% bg-pilka py-28">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
      >
      <div className="bg-white">
      <motion.p 
        className="flex justify-center text-black font-pop py-16 text-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        transition={{ duration: 0.5}}
        variants={{
        hidden: { opacity: 0, y:-50 },
        visible: { opacity: 1, y:0 }
  }}
      >CONTACT ME</motion.p>
      </div>
       {/* HEADER  */}
       <motion.div className="flex justify-center">

        <h4 className="text-l mt-12 break-normal max-w-3xl">
        <span className="text-davi md:relative text-3xl flex justify-center font-monserrat font-bold">Get in Touch</span> 
        <br></br>
        Welcome to our digital hub! At the heart of innovation, our team crafts compelling online experiences. Reach out to us for expert solutions tailored to elevate your digital presence. Let's connect and shape your success story together
        </h4>
      <p className="my-5">
      </p>
       </motion.div>
       {/* FORM */}
       <div className="flex justify-center mt-5">
         <motion.div
          className="mt-14 basis 3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5}}
          variants={{
          hidden: { opacity: 0, y:0 },
          visible: { opacity: 1, y:-50 }
    }}
         >

          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/b1cc6f91bf0c60e7c3700417462bcd93"
            method="POST"
          >
            <input 
              className={inputStyles}
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.name && (
              <p className="ml-32 text-primary-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 50 character."}
              </p>
            )}

            <input 
              className={inputStyles}
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="ml-32 text-primary-500">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Email address"}
              </p>
            )}

            <textarea 
              className={inputStyles}
              rows={4}
              cols={50}
              placeholder="Message"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="ml-32 text-primary-500">
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "maxLength" && "Max length is 2000 character."}
              </p>
            )}

              <button
                type="submit"
                className="border-2 border-indigo-500 mt-3 mx-36 px-12 justify-between items-center bg-davi py-3 transition duration-500 hover:text-white font-monserrat"
              >
                Submit
              </button>
          </form>
          

         </motion.div>
       </div>
      </motion.div>
    </section>
)}

export default ContactMe;