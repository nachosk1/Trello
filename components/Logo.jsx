import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export default function Logo() {
  return (
    <Link href="/">
      <div className="md:flex items-center gap-x-2 hover:opacity-75 transition hidden">
        <Image src={"/logo.svg"} alt="Logo" height={50} width={50} />
        <p
          className={cn("text-lg pt-1 text-neutral-700", headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
}
