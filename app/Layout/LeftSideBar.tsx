"use client";
import { menu } from "@/constants/menu";
import { setSidebarOpen } from "@/features/metaSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Battery } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function LeftSideBar() {
  const pathname = usePathname();
  const sidebarOpen = useAppSelector((state) => state.meta.sidebarOpen);
  const dispatch = useAppDispatch();
  console.log(pathname);
  return (
    <div
      className={`h-full fixed md:w-1/6 w-full  flex flex-col px-4 bg-white ${
        sidebarOpen ? "translate-x-0" : " -translate-x-full "
      } md:translate-x-0 transition-all duration-300`}
    >
      <div className="flex  items-center justify-center h-[75px] ">
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)] ">
          SNMP
        </h1>
        <div className="absolute right-4 top-4 md:hidden">
          <button onClick={() => dispatch(setSidebarOpen(false))}>
            <FaTimes className="text-[var(--color-text-primary)]" size={25} />
          </button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-200  mb-10"></div>

      <div className="flex flex-col gap-1 ">
        {menu.map((item) => (
          <Link
            className={`${
              pathname === item.path
                ? "bg-[var(--color-primary)] hover:shadow-lg"
                : "hover:bg-[#EFF2F3]"
            } ] transition-all duration-100 rounded-md py-3 px-4 flex flex-row gap-3 items-center`}
            href={item.path}
            key={item.name}
          >
            <div
              className={`${
                pathname === item.path ? "text-white" : "text-gray-500"
              } flex items-center`}
            >
              {item.icon}
            </div>
            <p
              className={`${
                pathname === item.path ? "text-white" : "text-gray-500"
              }`}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </div>

      {pathname?.includes("/device") && (
            <div className="mt-5 flex flex-col gap-2">
            <div className="bg-[var(--color-status-green)] rounded-lg pl-1.5">
              <div className="w-full bg-white  p-3 rounded-lg flex justify-between shadow-lg hover:bg-[#EFF2F3] transition-all duration-100">
                <div>
                  <h1 className="text-[16px] font-bold text-[var(--color-text-primary)]">
                    192.168.1.1
                  </h1>
                  <p className="text-sm text-gray-500 text-[10px]">UPS53</p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <h1 className="text-[16px] font-bold text-end text-[var(--color-text-primary)]">
                      100%
                    </h1>
                    <p className="text-sm text-gray-500 text-[10px] text-end">
                      Charging
                    </p>
                  </div>
                  {/* <Battery /> */}
                </div>
              </div>
            </div>
    
            <div className="bg-[var(--color-status-green)] rounded-lg pl-1.5">
              <div className="w-full bg-white  p-3 rounded-lg flex justify-between shadow-lg hover:bg-[#EFF2F3] transition-all duration-100">
                <div>
                  <h1 className="text-[16px] font-bold text-[var(--color-text-primary)]">
                    192.168.1.1
                  </h1>
                  <p className="text-sm text-gray-500 text-[10px]">UPS53</p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <h1 className="text-[16px] font-bold text-end text-[var(--color-text-primary)]">
                      100%
                    </h1>
                    <p className="text-sm text-gray-500 text-[10px] text-end">
                      Charging
                    </p>
                  </div>
                  {/* <Battery /> */}
                </div>
              </div>
            </div>
          </div>
      )}

  
    </div>
  );
}
