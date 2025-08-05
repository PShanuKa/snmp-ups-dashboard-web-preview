"use client";
import { menu } from "@/constants/menu";
import { setSidebarOpen } from "@/features/metaSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const RouteName = menu.find((item) => item.path === pathname)?.name;
  const dispatch = useAppDispatch();
  return (
    <div className="h-[75px]  flex flex-row  items-center px-4">
      <div className="md:hidden">
        <button onClick={() => dispatch(setSidebarOpen(true))}>
          <FaBars  className="text-[var(--color-text-primary)]"/>
        </button>
      </div>
      <div className="ml-3">
        <h1 className="text-sm text-gray-500">
          Dashboard / <span className="text-gray-700">{RouteName}</span>
        </h1>
        <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
          {RouteName}
        </h1>
      </div>
    </div>
  );
}
