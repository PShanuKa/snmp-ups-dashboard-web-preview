//import { IoIosArrowDropdown } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Dummy dataset for UPS notifications
const dummyUpsNotifications = [
  {
    id: "ups-1",
    ipAddress: "192.168.1.8",
    name: "UPS51",
    notifications: [
      {
        id: "notif-1",
        timestamp: "02.15 AM 2025/08/05",
        message: "Self Test Completed",
        type: "success"
      },
      {
        id: "notif-2",
        timestamp: "01.45 AM 2025/08/05",
        message: "Battery calibration completed",
        type: "info"
      },
      {
        id: "notif-3",
        timestamp: "01.30 AM 2025/08/05",
        message: "Low battery warning",
        type: "error"
      },
      {
        id: "notif-4",
        timestamp: "12.54 AM 2025/08/05",
        message: "Power restored",
        type: "success"
      }
    ]
  },
  {
    id: "ups-2",
    ipAddress: "192.168.1.15",
    name: "UPS52",
    notifications: [
      {
        id: "notif-5",
        timestamp: "03.20 AM 2025/08/05",
        message: "Battery replacement recommended",
        type: "warning"
      },
      {
        id: "notif-6",
        timestamp: "02.45 AM 2025/08/05",
        message: "Self Test Completed",
        type: "success"
      },
      {
        id: "notif-7",
        timestamp: "01.15 AM 2025/08/05",
        message: "Temperature threshold exceeded",
        type: "error"
      }
    ]
  },
  {
    id: "ups-3",
    ipAddress: "192.168.1.25",
    name: "UPS53",
    notifications: [
      {
        id: "notif-8",
        timestamp: "04.10 AM 2025/08/05",
        message: "Maintenance mode activated",
        type: "info"
      },
      {
        id: "notif-9",
        timestamp: "03.45 AM 2025/08/05",
        message: "Battery calibration started",
        type: "info"
      },
      {
        id: "notif-10",
        timestamp: "02.30 AM 2025/08/05",
        message: "Communication restored",
        type: "success"
      },
      {
        id: "notif-11",
        timestamp: "01.50 AM 2025/08/05",
        message: "Communication lost",
        type: "error"
      },
      {
        id: "notif-12",
        timestamp: "01.20 AM 2025/08/05",
        message: "Load level critical",
        type: "error"
      }
    ]
  }
];

// Helper function to get notification color based on type
const getNotificationColor = (type: string) => {
  switch (type) {
    case "success":
      return "text-[#00763F]";
    case "error":
      return "text-[#DA0C0C]";
    case "warning":
      return "text-[#FF8C00]";
    case "info":
    default:
      return "text-black";
  }
};

export const Events = () => {
  return (
    <div className="space-y-3">
      {dummyUpsNotifications.map((ups) => (
        <Accordion key={ups.id} type="single" collapsible>
          <AccordionItem value="item-1">
            <div className="bg-white rounded-xs border-2 border-gray-200 px-3 py-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[16px] font-semibold">{ups.ipAddress}</p>
                  <p className="text-[12px] text-gray-700">{ups.name}</p>
                  <p className="text-[11px] text-gray-500">
                    {ups.notifications.length} notification{ups.notifications.length !== 1 ? 's' : ''}
                  </p>
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
                  {ups.notifications.map((notification) => (
                    <div key={notification.id} className="flex gap-1">
                      <p className="text-[13px] font-semibold text-black">
                        {notification.timestamp} :
                      </p>
                      <p className={`text-[13px] ${getNotificationColor(notification.type)}`}>
                        {notification.message}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};
