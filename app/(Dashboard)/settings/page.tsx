import { RiDeleteBin5Line } from "react-icons/ri";
export default function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-bold">SNMP UPS List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        <div className="bg-white p-4 rounded-md flex justify-between items-center ">
          <div>
            <h2 className="text-lg font-bold">Backup UPS</h2>
            <p className="text-sm text-gray-500">192.168.1.2</p>
          </div>
          <button className="cursor-pointer">
            <RiDeleteBin5Line className="text-red-500" />
          </button>
        </div>
        <div className="bg-white p-4 rounded-md flex justify-between items-center ">
          <div>
            <h2 className="text-lg font-bold">Backup UPS</h2>
            <p className="text-sm text-gray-500">192.168.1.2</p>
          </div>
          <button className="cursor-pointer">
            <RiDeleteBin5Line className="text-red-500" />
          </button>
        </div>
      </div>
      



      <div className="mt-4 w-1/2 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Add New UPS Device</h1>

        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">UPS Name</label>
            <input type="text" placeholder="Enter UPS name" className="w-full p-2 rounded-md border border-gray-300 bg-white outline-none" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">UPS IP Address</label>
            <input type="text" placeholder="Enter IP address (e.g., 192.168.1.1)" className="w-full p-2 rounded-md border border-gray-300 bg-white outline-none" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Location</label>
            <input type="text" placeholder="Enter physical location" className="w-full p-2 rounded-md border border-gray-300 bg-white outline-none" />
          </div>

          <div >
            <button className="bg-[var(--color-primary)] text-white px-5 py-3 rounded-md mt-5 cursor-pointer">
                <p className="text-white font-bold text-sm">
                Add Device
                </p>
            </button> 
            </div>
        </div>
      </div>
    
        



    </div>
  );
}
