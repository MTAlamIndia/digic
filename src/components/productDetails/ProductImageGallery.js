import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";

import "./ProductImageGallery.scss";

const ProductImageGallery = ({ images, title }) => {
  const [image, setImage] = useState(images[0]);
  const { slug } = useParams();

  useEffect(() => {
    setImage(images[0]);
  }, [slug, images]);
  return (
    <>
      <Box className="image__gallery">
        <Box className="image">
          <img src={image} alt={title} />
        </Box>
        <Box className="thumbs">
          {images.map((item, i) => (
            <img
              key={i}
              src={item}
              alt={title}
              onClick={() => setImage(item)}
              className={image === item ? "active" : ""}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProductImageGallery;
