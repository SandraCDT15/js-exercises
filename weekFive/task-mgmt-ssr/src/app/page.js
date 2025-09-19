import ClientLayout from "@/components/ClientLayout";
import Tasks from "@/components/ProductsList";

import ProductsList from "@/components/ProductsList";

export default function Home() {
  return (
    <div>
      <ClientLayout>
        <ProductsList />
      </ClientLayout>
    </div>
  );
}
