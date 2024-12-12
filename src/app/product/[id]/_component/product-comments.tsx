import { getProductComments } from "@/app/apis/product-apis";

interface ProductCommentsProps {
  id: string;
}

export default async function ProductComments({ id }: ProductCommentsProps) {
  await getProductComments(id);
  return <div>Product Comments</div>;
}
