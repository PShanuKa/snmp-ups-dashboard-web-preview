import LeftSideBar from "./LeftSideBar";
import Navbar from "./Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="md:w-1/6   min-h-screen border-r border-gray-300 overflow-hidden">
        <LeftSideBar />
      </div>
      <div className="md:w-5/6 w-full bg-[var(--dashboard-background)] ">
        <Navbar />
        <div className="px-4 ">
          <div className="w-full h-[1px] bg-gray-200  mb-10"></div>
          {children}
        </div>
      </div>
    </div>
  );
}
