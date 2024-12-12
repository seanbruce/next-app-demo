"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PushToCurrentPath() {
  const pathname = usePathname();
  return (
    <Link href={pathname} className={cn(buttonVariants())}>
      push to current path
    </Link>
  );
}
