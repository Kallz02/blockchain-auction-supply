import React from "react";

export default ({ setCreateShipmentModel ,allShipmentsdata  }) => {
  const coverTime =(time)=>{
    const newTime = new Date(time);
    const dateTime= new Intl.DateTimeFormat("en-US", {
      year:"numeric",
      month:"2-digit",
      day:"2-digit",
    }).format(newTime)
 
 
  return dateTime
  }

  console.log(allShipmentsdata);

  return(
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
<div className="max-w-lg">
  <h3 className="text-gray-800 text-xl font-bold sm:text-xl">
    Create Tracking

  </h3>
  <p className="text-gray-600 mt-2">
    Lorem ipsum dolor sit amet consectetur, ipsam obcaecati tempora praesentium dolor cupiditate?
  </p>
</div>

      <div className="mt-3 md:mt-0">
      <p onClick={()=>setCreateShipmentModel(true)} className="inline-block md:inline-flex text-white duration-150 font-medium gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg ">
      Add Tracking
        </p>
        </div>
      </div>
        <div className="mt-12 shadow-sm boder rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left ">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-4">Sender</th>
                <th className="py-3 px-4">Reciever</th>
                <th className="py-3 px-4">Pickup Time</th>
                <th className="py-3 px-4">Distance</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Delhivery Time</th>
                <th className="py-3 px-4">Paid</th>
                <th className="py-3 px-4">Status</th>
              </tr>
              </thead>
              <tbody className="divide-y text-gray-600">
                {allShipmentsdata?.map((item,index)=>(
                  <tr key={index}>
                    <td className="py-4 px-6 whitespace-nowrap">{item.sender.slice(0,15)}...</td>
                    <td className="py-4 px-6 whitespace-nowrap">{item.receiver.slice(0,15)}...</td>
                    <td className="py-4 px-6 whitespace-nowrap">{coverTime(item.pickupTime)}</td>
                    <td className="py-4 px-6 whitespace-nowrap">{item.distance} km</td>
                    <td className="py-4 px-6 whitespace-nowrap">{item.price} ETH</td>
                    <td className="py-4 px-6 whitespace-nowrap">{item.deliveryTime}</td>
                    <td className="py-4 px-6 whitespace-nowrap">{item.isPaid?"Yes":"No"}</td>
                    <td className="py-4 px-6 whitespace-nowrap">{item.status ===0 ? "Pending":item.status===1?"Completed":"Delhivered"}</td>

                  </tr>
                  ))}
                  </tbody>

          </table>
        </div>
    </div>
  )

}