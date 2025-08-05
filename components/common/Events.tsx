import { IoIosArrowDropdown } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Events = () => {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <div className="bg-white rounded-xs border-2 border-gray-200 px-3 py-2 ">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[16px] font-semibold">192.168.1.8</p>
              <p className="text-[12px] text-gray-700">UPS51</p>
            </div>
            <div>
              <AccordionTrigger>
                {/* <IoIosArrowDropdown size={20} /> */}
              </AccordionTrigger>
            </div>
          </div>

          <AccordionContent className="p-0">
            <div className="w-full h-[1px] bg-gray-200 my-2" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <p className="text-[13px] font-semibold text-black">
                  12.54 AM 2024/05/12 :
                </p>
                <p className="text-[13px] text-[#00763F]">
                  {" "}
                  Self Test Completed
                </p>
              </div>
              <div className="flex gap-1">
                <p className="text-[13px] font-semibold text-black">
                  12.54 AM 2024/05/12 :
                </p>
                <p className="text-[13px] "> battery calibration completed</p>
              </div>
              <div className="flex gap-1">
                <p className="text-[13px] font-semibold text-black">
                  12.54 AM 2024/05/12 :
                </p>
                <p className="text-[13px] text-[#DA0C0C]">
                  {" "}
                  battery calibration completed
                </p>
              </div>
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
};
