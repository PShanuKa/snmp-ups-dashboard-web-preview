import { Events } from "@/components/common/Events";
import { UPSCard } from "@/components/common/UPSCard";

interface UPSCardProps {
  name: string;
  batteryCharge: number;
  ip: string;
    trendText: string;
    trendColor: "green" | "red";
    estimatedRemaining: string;
    batteryStatus: "charging" | "idle" | "warning";
    temperature: string;
    load: string;
    status?: "warning" | "offline" | "error";
  }

export default function Home() {
  const upsList: UPSCardProps[] = [
    {
      name: "UP51",
      batteryCharge: 25,
      batteryStatus: "warning",
      ip: "192.168.1.1",
      trendText: "+55% than last week",
      trendColor: "green",
      estimatedRemaining: "102 min",
      temperature: "28°C",
      load: "21%",
      status: "warning",
      
    },
    {
      name: "UP52",
      batteryCharge: 85,
      ip: "192.168.1.2",
      batteryStatus: "charging",
      trendText: "+3% than last month",
      trendColor: "green",
      estimatedRemaining: "107 min",
      temperature: "29°C",
      load: "47%",
    },
    {
      name: "UP53",
      batteryCharge: 45,
      ip: "192.168.1.3",
      batteryStatus: "idle",
      trendText: "+3% than last week",
      trendColor: "green",
      estimatedRemaining: "107 min",
      temperature: "27°C",
      load: "33%",
    },
    {
      name: "UP53",
      batteryCharge: 95,
      ip: "192.168.1.3",
      batteryStatus: "idle",
      trendText: "+3% than last week",
      trendColor: "green",
      estimatedRemaining: "107 min",
      temperature: "27°C",
      load: "33%",
      status: "offline",
    },
    {
      name: "UP53",
      batteryCharge: 95,
      ip: "192.168.1.3",
      batteryStatus: "idle",
      trendText: "+3% than last week",
      trendColor: "green",
      estimatedRemaining: "107 min",
      temperature: "27°C",
      load: "33%",
      status: "error",
    },
  ];
  return (
    <div className="flex flex-col gap-4 pb-10">
      <h1 className="text-xl font-bold">UPS List</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 w-full ">
        {upsList.map((ups, index) => (
          <UPSCard key={index} {...ups} />
        ))}
      </div>

      <h1 className="text-xl font-bold">Recent Events</h1>
      <div className="flex flex-col gap-2">
        <Events />
        <Events />
        <Events />
        <Events />
      </div>
    </div>
  );
}
