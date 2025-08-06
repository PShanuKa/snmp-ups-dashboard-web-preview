"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { ChartLine } from "./LineChart";

export function RecentEvents({ value }: { value: boolean }) {
  return (
    <Accordion type="single" collapsible value="true">
      <AccordionItem value={value ? "true" : "false"}>
        <AccordionTrigger className="hidden">Recent Events</AccordionTrigger>
        <AccordionContent>
          <div className="w-full bg-white rounded-lg p-4 flex flex-col  gap-2 mt-4 shadow-md">

          <h1 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
            Recent Events
          </h1>

            <div className="bg-[var(--color-status-green)] rounded-lg pl-1.5">
              <div className="w-full bg-[#F0FDF4]  p-4 rounded-lg flex justify-between">
                <div>
                  <h1 className="text-[14px] font-regular text-[var(--color-status-green)]">
                    Self Test Completed
                  </h1>
                  <p className="text-[12px] font-thin text-[var(--color-status-green)]/80">
                    2025-01-04 14:00:00 - self test completed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-status-blue)] rounded-lg pl-1.5">
              <div className="w-full bg-[#EFF6FF]  p-4 rounded-lg flex justify-between">
                <div>
                  <h1 className="text-[14px] font-regular text-[var(--color-status-blue)]">
                    Battery Calibration
                  </h1>
                  <p className="text-[12px] font-thin text-[var(--color-status-blue)]/80">
                    2025-01-04 14:00:00 - battery calibration completed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-status-yellow)] rounded-lg pl-1.5">
              <div className="w-full bg-[#FEFCE8]  p-4 rounded-lg flex justify-between">
                <div>
                  <h1 className="text-[14px] font-regular text-[var(--color-status-yellow)]">
                    Battery Calibration
                  </h1>
                  <p className="text-[12px] font-thin text-[var(--color-status-yellow)]/80">
                    2025-01-04 14:00:00 - battery calibration completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
