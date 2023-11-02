import React from "react";
import Image from "next/image";
import images from "../Images/index"

export default ({
  setOpenProfile,
  setCompleteModal,
  setGetModal,
  setStartModal,
})=> {
  const team =[
    {
      avatar:images.compShipment,
    },
    {
      avatar:images.getShipment,
    },
    {
      avatar:images.startShipment,
    },
    {
      avatar:images.userProfile,
    },
    {
      avatar:images.shipCount,
    },
    {
      avatar:images.send,
    },
  ];
  const openModalBox = (text)=>{
    if (text===1){
      setCompleteModal(true);
    }else if(text===2){
      setGetModal(true);
  }else if(text===3){
    setStartModal(true);
  }else if(text===4){
    setOpenProfile(true);
  }
  };
  return(
    <section className="py-0 pb-14 ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item,index)=>(
              <div onClick={()=>openModalBox(index+1)} className="w-full h-60 sm:h-52 md:h-56 " key={index}>
                  <Image src={item.avatar} alt="avatar" className="w-full h-full object-cover object-center shadow-md rounded-xl" width={100} height={100} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



export const Services = () => {
  return (<>
  Services
  </>);
};

