import Logo from "@/assets/logo1.png";
import Link from "../Navbar/footerlink";
import { SelectedPage } from '@/shared/type';
import { PhoneIcon, EnvelopeIcon} from "@heroicons/react/24/solid";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({selectedPage, setSelectedPage}: Props) => {
  return  (
    
    <footer className="bg-white py-16">
      <div className="font-monserrat jusitfy-content mx-auto w-5/6 gap-16 md:flex">
        <div className="break-normal mt-16 basis-2/5 md:mt-0">
        <img alt="logo" src={Logo} />
          <p className="my-5 ml-3">
            
Copyrights grant exclusive rights to creators for their original works, such as literature, music, and art, preventing unauthorized use or reproduction. This legal protection encourages creativity by ensuring creators control their creations, benefiting artists and fostering a thriving cultural and economic ecosystem.
          </p>
          <p className="ml-3 mb-5">
          © navatnass All Rights Reserved.
          </p>
        </div>

        <div className="md:ml-20 basis-1/4 md:mt-0">
          <h1 className="md:grid justify-center font-bold">Links</h1>
          <br></br>
        <div className="md:grid ml-3 justify-center ">
          <Link
                page="About Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
          />
          <br></br>
          <Link
                page="Portfolio"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
          />
          <br></br>
          <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
          />
          <br></br>
          <Link
                page="Contact Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
          />
          </div>
        </div>
        
        <div className="mt-16 basis-1/4 md:mt-0">
          <h1 className="font-bold">Contact Me</h1>
          <PhoneIcon className="text-davi mt-5 h-6 w-6">
          </PhoneIcon>
          <p className="relative ml-8 -mt-6 hover:text-davi transition duration-500">+37062517524</p>
          <EnvelopeIcon className="text-davi mt-5 h-6 w-6">
          </EnvelopeIcon>
          <p className="relative ml-8 -mt-6 hover:text-davi transition duration-500">Gintas.ltu@gmail.com</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer