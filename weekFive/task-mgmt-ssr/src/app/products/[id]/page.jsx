import { getProduct } from "@/_lib/api";
import EditModal from "@/components/EditModal";
import TextInput from "@/components/TextInput";
import { Box, Button } from "@mui/material";

const page = async ({ params }) => {
  const info = await params;
  const result = await getProduct(info.id);

  return (
    <div>
      <EditModal product={result} />
    </div>
  );
};

export default page;
