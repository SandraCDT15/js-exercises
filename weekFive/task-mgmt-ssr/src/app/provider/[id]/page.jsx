import { getProvider } from "@/_lib/api";
import ProviderDetail from "@/components/ProviderDetail";

const page = async ({ params }) => {
  const info = await params;
  console.log(info.id);
  const result = await getProvider(info.id);

  return (
    <div>
      <ProviderDetail provider={result} />
    </div>
  );
};

export default page;
