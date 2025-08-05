import { BsFillLightningChargeFill } from "react-icons/bs";
import { TiWarning } from "react-icons/ti";

export const Battery = ({ batteryCharge = 20, status = "charging" , width = 24, height = 40 ,iconSize = 18 }: { batteryCharge: number , status? : "charging" | "idle" | "warning" , width?: number , height?: number , iconSize?: number }) => {
  const clamped =
    batteryCharge > 95 ? 100 : Math.min(100, Math.max(0, batteryCharge));

  const clamped2 = batteryCharge <= 95 ? 0 : (batteryCharge - 95) * 20;

  return (
    <div>
      <div
        className={`  rounded-[3px] flex flex-col  items-center `}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundImage: `linear-gradient(to top, ${batteryCharge <= 30 ? "#FE6464" : "#00C950"} ${clamped}%, #e5e7eb ${clamped}%)`,
        }}
      >
        <div
          className="w-3 h-2  rounded-[3px] -mt-1"
          style={{
            backgroundImage: `linear-gradient(to top, #00C950 ${clamped2}%, #e5e7eb ${clamped2}%)`,
          }}
        ></div>
        <div className="h-full flex items-center justify-center">
          {status === "charging" && (
            <BsFillLightningChargeFill color="FEE119" size={iconSize} />
          ) }
          {status === "warning" && (
            <TiWarning color="red" size={iconSize} />
          )}
        </div>
      </div>
    </div>
  );
};
