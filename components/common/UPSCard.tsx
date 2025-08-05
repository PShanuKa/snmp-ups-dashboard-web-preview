// components/UPSCard.tsx
import Link from "next/link";
import React from "react";
import { FaCarBattery } from "react-icons/fa6";
import { Battery } from "./Battery";
import { LuClock } from "react-icons/lu";
import { TbTemperature } from "react-icons/tb";
import { LuPlug } from "react-icons/lu";
import Image from "next/image";
import nothingFound from "@/public/images/nothing_found.png";
import { PiWarningCircleBold } from "react-icons/pi";

export const UPSCard = ({
  name,
  batteryCharge,
  estimatedRemaining,
  temperature,
  status,
  batteryStatus,
  load,
  ip,
}: {
  name: string;
  batteryCharge: number;
  estimatedRemaining: string;
  temperature: string;
  status?: "warning" | "offline" | "error";
  batteryStatus?: "charging" | "idle" | "warning";
  load: string;
  ip: string;
}) => {
  return (
    <Link
      href={`/device/${ip}`}
      className={` rounded-md shadow-md w-full pl-[5px] relative ${status === "error" ? "bg-red-500" : status === "offline" ?  "bg-gray-500" : status === "warning" ? "bg-yellow-500" : "bg-[#00C950]"}`}
    >
      <div className="w-full h-full flex flex-col gap-2 bg-white rounded-md p-2 py-4">
        {status && (
          <>
            {status === "offline" && (
              <div className="absolute top-0 right-0 left-[5px] bottom-0 w-full h-full bg-white rounded-md z-10 opacity-90">
                <div className=" mt-2 w-full h-full flex flex-col justify-center items-center gap-2">
                  <Image
                    src={nothingFound}
                    alt="ups-card-bg"
                    className="object-cover w-[50px] h-[50px] "
                  />
                  <p className="text-[12px] font-semibold text-gray-500">
                    Offline
                  </p>
                </div>
              </div>
            )}
            {status === "error" && (
              <div className="absolute top-0 right-0 left-[5px] bottom-0 w-full h-full bg-white rounded-md z-10 opacity-90">
                <div className=" mt-2 w-full h-full flex flex-col justify-center items-center gap-2">
                  <PiWarningCircleBold className="text-[40px] text-red-500" />
                  <p className="text-[12px] font-semibold text-gray-500">
                  Error
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        <div className="flex  justify-between">
          <div className="z-20">
            <h1 className="text-[13px] font-semibold">{ip}</h1>
            <p className="text-[10px] text-gray-500">{name}</p>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col items-end">
              <p className="text-[13px] font-semibold">{batteryCharge}%</p>
              <p className="text-[10px] text-black ">{batteryStatus === "charging" ? "Charging" : batteryStatus === "idle" ? "Idle" : "Warning"}</p>
            </div>
            <div>
              <Battery
                batteryCharge={batteryCharge}
                status={batteryStatus}
                width={21}
                height={32}
                iconSize={14}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-100 my-1" />

        <div className="flex justify-between px-4">
          <div className="flex flex-col items-center">
            <LuClock className="text-[30px] text-gray-500 opacity-70 " />
            <p className="text-[10px] text-gray-500/50 mt-1">Remaining</p>
            <p className="text-[10px] text-black font-semibold">
              {estimatedRemaining}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <TbTemperature className="text-[30px] text-gray-500 opacity-70" />
            <p className="text-[10px] text-gray-500/50 mt-1">Temperature</p>
            <p className="text-[10px] text-black font-semibold">
              {temperature}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <LuPlug className="text-[30px] text-gray-500 opacity-70" />
            <p className="text-[10px] text-gray-500/50 mt-1">Load</p>
            <p className="text-[10px] text-black font-semibold">
              {load}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
