"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RevalidateCurrentPath() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.refresh();
      }}
    >
      revalidate current path
    </Button>
  );
}
