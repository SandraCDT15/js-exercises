import { getProduct } from "@/_lib/api";
import ProductDetail from "@/components/ProductDetail";

const page = async ({ params }) => {
  const info = await params;
  const result = await getProduct(info.id);

  return (
    <div>
      <ProductDetail product={result} />
    </div>
  );
};

export default page;
