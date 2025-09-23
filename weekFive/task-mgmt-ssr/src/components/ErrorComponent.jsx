"use client";

import { Button } from "@mui/material";
import { useState } from "react";

export default function ErrorTrigger() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("Global error");
  }

  return (
    <Button
      onClick={() => setShouldThrow(true)}
      sx={{
        padding: "10px",
        backgroundColor: "red",
        color: "white",
        marginTop: "30px",
      }}
    >
      Trigger error
    </Button>
  );
}
