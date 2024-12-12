import ProductCommentsLoading from "./_component/product-comments-loading";
import ProductHeaderLoading from "./_component/product-header-loading";
import ProductInfoLoading from "./_component/product-info-loading";

export default function Loading() {
  return (
    <>
      <ProductHeaderLoading />
      <ProductInfoLoading />
      <ProductCommentsLoading />
    </>
  );
}
