import ClientLayout from "@/components/ClientLayout";
import Tasks from "@/components/Tasks";

import ProductsList from "@/components/Tasks";

export default function Home() {
  return (
    <div>
      <ClientLayout>
        <ProductsList />
      </ClientLayout>
    </div>
  );
}
