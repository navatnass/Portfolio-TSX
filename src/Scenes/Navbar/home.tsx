import { SelectedPage } from "@/shared/type";
import AnchorLink from "react-anchor-link-smooth-scroll";

type HomeProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({page, selectedPage, setSelectedPage}: HomeProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
   <AnchorLink 
   className={`${selectedPage === lowerCasePage ? "text-p-textas" : "" }
   trasition duration-100 rounded-md bg-k2 px-3 py-2 hover:bg-rose text-kremas4 hover:text-white
   `} 
   href={`#${lowerCasePage}`} 
   onClick={() => setSelectedPage(lowerCasePage)}
   >
    {page}
   </AnchorLink>   
  );
};

export default Home;