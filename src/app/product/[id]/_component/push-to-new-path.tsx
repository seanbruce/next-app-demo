"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PushToNewPath() {
  const { id } = useParams<{ id: string }>();
  return (
    <Link
      href={`/product/${String(Number.parseInt(id, 10) + 1)}`}
      className={cn(buttonVariants())}
    >
      push to new path(Product - {String(Number.parseInt(id, 10) + 1)})
    </Link>
  );
}
