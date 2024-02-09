import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./type";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink 
    className="trasition duration-100 rounded-md bg-k2 p-2 hover:bg-rose text-kremas4 hover:text-white"
    onClick={() => setSelectedPage(SelectedPage.ContactMe)}
    href={`#${SelectedPage.ContactMe}`}
    >
      {children}
    </AnchorLink>
    
  );
};

export default ActionButton