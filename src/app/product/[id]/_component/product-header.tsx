import { getProductHeader } from "@/app/apis/product-apis";

interface ProductHeaderProps {
  id: string;
}

export default async function ProductHeader({ id }: ProductHeaderProps) {
  const { updatedAt } = await getProductHeader(id);
  return <div>Product Header - {updatedAt}</div>;
}
