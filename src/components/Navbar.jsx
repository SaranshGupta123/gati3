import Animate from "@/motion/Animate";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/Images/logo.png"; // use @ if path aliases are configured

const Navbar = () => {
  return (
    <Animate>
      <div className="w-full bg-gradient-to-r from-slate-900 to-slate-800 relative px-5 py-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>

        <div className="text-black text-2xl relative z-10 flex items-center justify-between">
          <Link href="/" >
              <Image
                src={logo}
                alt="Logo"
                className="w-30"
                style={{ aspectRatio: "4" }}
              /> 
          </Link>
        </div>
      </div>
    </Animate>
  );
};

export default Navbar;
