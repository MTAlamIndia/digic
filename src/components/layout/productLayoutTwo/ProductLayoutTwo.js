import { Button, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import {
  BsBag,
  BsBagCheckFill,
  BsSuitHeart,
  BsSuitHeartFill,
} from "react-icons/bs";

import { navCart, navShop } from "../../../store/navigations";

import "./ProductLayoutTwo.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../store/wishlistSlice";

const ProductLayoutTwo = ({
  category,
  id,
  images,
  onSellPrice,
  price,
  slug,
  title,
}) => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { wishlistItems } = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  const handleCart = () => {
    const itemExist = cartItems?.find((item) => item.id === id);

    if (itemExist?.id === id) {
      return (
        <Tooltip title="View Cart" arrow>
          <Link to={navCart} className="button">
            <BsBagCheckFill />
          </Link>
        </Tooltip>
      );
    } else {
      return (
        <Tooltip title="Add To Cart" arrow>
          <Button
            onClick={() => dispatch(addToCart({ id }))}
            className="button"
          >
            <BsBag />
          </Button>
        </Tooltip>
      );
    }
  };

  const handleWishlist = () => {
    const itemExist = wishlistItems?.find((item) => item.id === id);

    if (itemExist?.id === id) {
      return (
        <Tooltip title="Remove From Wishlist" arrow>
          <Button
            onClick={() => dispatch(removeFromWishlist(id))}
            className="button"
          >
            <BsSuitHeartFill />
          </Button>
        </Tooltip>
      );
    } else {
      return (
        <Tooltip title="Add To Wishlist" arrow>
          <Button
            onClick={() => dispatch(addToWishlist(id))}
            className="button"
          >
            <BsSuitHeart />
          </Button>
        </Tooltip>
      );
    }
  };

  const productLink = `${navShop}${slug}`;

  return (
    <>
      <Box className="product__layout--two">
        <Box className="image__wrapper">
          <Link to={productLink}>
            <img src={images[0]} alt={title} className="primary__image" />
            <img src={images[1]} alt={title} className="secondary__image" />
          </Link>

          <Box className="icons__wrapper">
            {handleCart()}
            {handleWishlist()}
            {/* <Tooltip title="Quick View" arrow>
              <Button className="button">
                <BsEye />
              </Button>
            </Tooltip> */}
          </Box>
        </Box>
        <Box className="content__wrapper">
          {category && <Typography variant="h6">{category[0]}</Typography>}
          <Link to={productLink} variant="h4">
            {title}
          </Link>
          <Typography className="price">
            {onSellPrice && (
              <>
                <del>${price}</del>
                <Typography component="span">${onSellPrice}</Typography>
              </>
            )}
            {!onSellPrice && <Typography component="span">${price}</Typography>}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProductLayoutTwo;
