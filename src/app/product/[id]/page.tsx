import * as React from "react";
import ProductHeader from "./_component/product-header";
import ProductInfo from "./_component/product-info";
import ProductComments from "./_component/product-comments";
import ProductCommentsLoading from "./_component/product-comments-loading";
import PushToCurrentPath from "./_component/push-to-current-path";
import RevalidateCurrentPath from "./_component/revalidate-current-path";
import PushToNewPath from "./_component/push-to-new-path";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <ProductHeader id={id} />
      <ProductInfo id={id} />
      <React.Suspense fallback={<ProductCommentsLoading />}>
        <ProductComments id={id} />
      </React.Suspense>
      <div className="flex gap-2">
        <PushToNewPath />
        <PushToCurrentPath />
        <RevalidateCurrentPath />
      </div>
    </div>
  );
}
