import { getProduct } from "@/_lib/api";
import ProductDetail from "@/components/ProductDetail";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const info = await params;
  const result = await getProduct(info.id);

  if (!result) {
    notFound();
  }

  return (
    <div>
      <ProductDetail product={result} />
    </div>
  );
};

export default page;
