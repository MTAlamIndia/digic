import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

import UpdateQuantity from "../ui/UpdateQuantity";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { navShop, navWishlist } from "../../store/navigations";

import "./ProductContent.scss";
import { getRichText } from "../../store/getRichText";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../store/wishlistSlice";

const ProductContent = ({
  brand,
  category,
  id,
  onSellPrice,
  price,
  quantity,
  seller,
  sku,
  shortDescription,
  tag,
  title,
}) => {
  const dispatch = useDispatch();

  const { wishlistItems } = useSelector((state) => state.wishlistReducer);

  const handleWishlist = () => {
    const findItem = wishlistItems?.find((item) => item.id === id);

    if (findItem?.id === id) {
      return (
        <Link className="button" to={navWishlist}>
          <Box className="svg__icon">
            <BsSuitHeartFill />
          </Box>
          Browse Wishlist
        </Link>
      );
    } else {
      return (
        <Button onClick={() => dispatch(addToWishlist(id))} className="button">
          <Box className="svg__icon">
            <BsSuitHeart />
          </Box>
          Add To Wishlist
        </Button>
      );
    }
  };

  return (
    <>
      <Box className="product__content">
        <Typography className="title">{title}</Typography>
        {brand && (
          <Typography className="brand">
            Brand: <Typography component="span">{brand}</Typography>
          </Typography>
        )}
        <Box className="price__info">
          <Typography component="span" className="price">
            <del>${price.toFixed(2)}</del>
          </Typography>
          {onSellPrice && (
            <>
              <Typography component="span" className="on__sell__price">
                ${onSellPrice.toFixed(2)}
              </Typography>
              <Typography component="span" className="saving__percentage">
                -{(((price - onSellPrice) / price) * 100).toFixed(2)}%
              </Typography>
            </>
          )}
        </Box>
        {seller && (
          <Typography className="sold__by">
            Sold By: <Typography component="span">{seller}</Typography>
          </Typography>
        )}

        <Box className="short_desc">{getRichText(shortDescription)}</Box>

        <Box className="product__form">
          <UpdateQuantity quantity={quantity} id={id} productDetailForm />
          <Box className="icon__buttons">{handleWishlist()}</Box>
        </Box>

        <Box className="other__info">
          {sku && (
            <Typography>
              SKU: <Typography component="span">{sku}</Typography>
            </Typography>
          )}
          {category && (
            <Typography>
              {category.length > 1 ? "categories:" : "category:"}
              {category.map((item, i) => (
                <Link key={i} to={`${navShop}${item}`}>
                  {item}
                </Link>
              ))}
            </Typography>
          )}
          {tag && (
            <Typography>
              {tag.length > 1 ? "tags:" : "tag:"}
              {tag.map((item, i) => (
                <Link key={i} to={`${navShop}${item}`}>
                  {item}
                </Link>
              ))}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ProductContent;
