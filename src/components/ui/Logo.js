import { Link } from "react-router-dom";
import { info } from "../../store/companyInfo";

import "./Logo.scss";

const Logo = ({ classes }) => {
  return (
    <>
      <Link to="/" className={`${classes ? `${classes} logo` : "logo"}`}>
        <img src={info.logo} alt={info.name} />
      </Link>
    </>
  );
};

export default Logo;
