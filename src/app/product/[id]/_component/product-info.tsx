import { getProductInfo } from "@/app/apis/product-apis";

interface ProductInfoProps {
  id: string;
}

export default async function ProductInfo({ id }: ProductInfoProps) {
  await getProductInfo(id);
  return <div>Product Info</div>;
}
