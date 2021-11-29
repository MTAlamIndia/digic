import HeaderTop from "./headerTop/HeaderTop";
import HeaderMiddle from "./headerMiddle/HeaderMiddle";
import HeaderBottom from "./headerBottom/HeaderBottom";
import { useLocation } from "react-router-dom";

import "./Header.scss";
import { navCart } from "../../store/navigations";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header id="site__header">
        <HeaderTop />
        <HeaderMiddle />
        {(pathname === "/" || pathname === navCart) && <HeaderBottom />}
      </header>
    </>
  );
};

export default Header;
