import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BannerBreadcrumb from "../components/ui/BannerBreadcrumb";
import { navShop } from "../store/navigations";
import ProductDetails from "../components/productDetails/ProductDetails";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const SingleProduct = () => {
  const params = useParams();
  const { products, loading } = useSelector((state) => state.productsReducer);

  if (loading) return <LoadingSpinner />;

  const product = products.find((item) => item.slug === params.slug);

  return (
    <>
      <BannerBreadcrumb
        links={[{ name: "Shop", link: navShop }, { name: product?.title }]}
        pageTitle={product?.title}
      />
      <ProductDetails {...product} />
    </>
  );
};

export default SingleProduct;
