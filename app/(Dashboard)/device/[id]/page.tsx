"use client";
import { Battery } from "@/components/common/Battery";
import { ChartLine } from "@/components/common/LineChart";
import { RecentEvents } from "@/components/common/RecentEvents";
import { useState } from "react";


const Device = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-[var(--color-status-green)] rounded-lg pl-1.5">
        <div className="w-full bg-white  p-4 rounded-lg flex justify-between">
          <div>
            <h1 className="text-[18px] font-bold text-[var(--color-text-primary)]">
              192.168.1.1
            </h1>
            <p className="text-sm text-gray-500 text-[12px]">UPS53</p>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-[18px] font-bold text-end text-[var(--color-text-primary)]">
                100%
              </h1>
              <p className="text-sm text-gray-500 text-[12px] text-end">
                Charging
              </p>
            </div>
            <Battery />
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <p className=" text-black text-[12px] font-bold">Charging</p>
        </div>

        <p
          className=" text-black text-[12px] font-bold hover:underline cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          Recent Events
        </p>
      </div>

      <RecentEvents value={isOpen} />

      <div className="w-full bg-white rounded-lg p-4 grid md:grid-cols-2 gap-5 mt-4 shadow-md">
        <div>
          <h1 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
            Power Information
          </h1>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="flex flex-col gap-4">
              <div>
                <div className="bg-[var(--background-light)] rounded-md p-3">
                  <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                    Model
                  </h1>
                  <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                    UPS53
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[var(--background-light)] rounded-md p-3">
                  <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                    Input Frequency
                  </h1>
                  <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                    50 Hz
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[var(--background-light)] rounded-md p-3">
                  <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                    Output Amperage
                  </h1>
                  <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                    2.8 A
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="bg-[var(--background-light)] rounded-md p-3">
                  <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                    Output Voltage
                  </h1>
                  <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                    220 V
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[var(--background-light)] rounded-md p-3">
                  <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                    Output Frequency
                  </h1>
                  <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                    50 Hz
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[var(--background-light)] rounded-md p-3">
                  <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                    Output Amperage
                  </h1>
                  <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                    2.8 A
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <div>
              <h1>Power</h1>
            </div>
          </div> */}
        </div>

        <div>
          <h1 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
            Battery Information
          </h1>
          <div className="flex flex-col gap-4 mt-5">
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  Battery Charge
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  100%
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  Battery Temperature
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  24.5°C
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between  ">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  Runtime Remaining
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  10.5 H
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between  ">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  Last Updated
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  10:00:00 PM
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between  ">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  Self Test
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-status-green)]">
                  Passed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 my-5">
        <div>
          <ChartLine title="Battery Level (24H)" />
        </div>
        <div>
          <ChartLine title="Temperature (24H)" />
        </div>
        <div>
          <ChartLine title="Load (24H)" />
        </div>
        <div>
          <ChartLine title="Input Voltage (24H)" />
        </div>
      </div>

      <div className="w-full bg-white rounded-lg p-4 grid md:grid-cols-2 gap-5 mt-4 shadow-md">
        <div>
          <h1 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
            Device Information
          </h1>
          <div className="flex flex-col gap-4 mt-5">
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  Model
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  UPS53
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  Serial Number
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  UPS53-1234567890
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between  ">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  Firmware Version
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  1.0.0
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between  ">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  Uptime
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  10.5 H
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
            Network Information
          </h1>
          <div className="flex flex-col gap-4 mt-5">
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  IP Address
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  192.168.1.1
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  Device Name
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  UPS53
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between  ">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  SNMP Status
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  Connected
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[var(--background-light)] rounded-md p-3 flex justify-between  ">
                <h1 className="text-[15px] font-regular text-[var(--color-text-primary)]/80">
                  Last Updated
                </h1>
                <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">
                  10:00:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100px]"></div>
    </div>
  );
};

export default Device;
