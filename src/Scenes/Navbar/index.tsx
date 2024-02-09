import { useState } from "react";
import { Bars3Icon, LinkIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo1.png";
import Link from "./link";
import { SelectedPage } from "@/shared/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navBackground = isTopOfPage ? "h-[12.5%] bg-white drop-shadow" : "h-[12.5%] bg-white drop-shadow";

  return (
    <nav className="h-[1%] bg-balta">
      <div className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
      {/* LEFT NAVIGATION SIDE */}
            <img alt="logo" src={Logo} />

      { /*RIGHT NAVIGATION SIDE */}
          </div>
            {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-[30%]`}>
              <div className={`${flexBetween} gap-8 text-sm mx-auto`}>
                <Link
                page="About Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Portfolio"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Contact Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                {/* <ActionButton setSelectedPage={setSelectedPage}>
                  Contact Me
                </ActionButton> */}
              </div>
            </div>) : (
              <button className="rounded-full px-1 py-1 bg-cream hover:bg-rose hover:text-white"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-navy" />
              </button>
            )}
        </div>
      </div>


      {/* {MOBILE} */}

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[230px] bg-primary-100 drop-shadow-xl">

          {/* {CLOSE ICON} */}

          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-p-textas transition duration-500 hover:text-davi" />
            </button>
          </div>

          {/* {MENU ITEMS} */}

          <div className="ml-[33%] flex flex-col gap-10 text-2xl text-p-textas">
                <Link
                page="About Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Portfolio"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Contact Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
              </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar;