import { BsSuitHeart } from "react-icons/bs";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { navWishlist } from "../../store/navigations";

const WishlistIcon = () => {
  const { wishlistItems } = useSelector((state) => state.wishlistReducer);

  return (
    <>
      <Link to={navWishlist} className="icon">
        <BsSuitHeart />
        <Typography variant="body2" component="span">
          {wishlistItems?.length || 0}
        </Typography>
      </Link>
    </>
  );
};

export default WishlistIcon;
