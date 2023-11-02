import React from "react";

import { useState, useEffect, useContext } from "react";

import Table from "../Components/Table"
import Form from "../Components/Form"
import Services from "../Components/Services"
import CompleteShipment from "../Components/CompleteShipment"
import GetShipment from "../Components/GetShipment"
import StartShipment from "../Components/StartShipment"
import Profile from "../Components/Profile"
import { TrackingContext } from "../Conetxt/Tracking";

const index = () => {
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentCount,
  } = useContext(TrackingContext);
  //State Variable
  const [createShipmentModel, setCreateShipmentModel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModal, setGetModal] = useState(false);
  //Data State Varaiable
  const [allShipmentsdata, setallShipmentsdata] = useState();

  useEffect(() => {
    const getCompaignsData = getAllShipment();

    return async () => {
      const allData = await getCompaignsData;
      setallShipmentsdata(allData);
    };
  }, []);

  return (
    <>
      <Services
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setStartModal={setStartModal}
        setGetModal={setGetModal}
      />

      <Table
        setCreateShipmentModel={setCreateShipmentModel}
        allShipmentsdata={allShipmentsdata}
      />

      <Form
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
      />

      <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentCount}
      />
      <CompleteShipment
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
      />
      <GetShipment
        getModal={getModal}
        setGetModal={setGetModal}
        getShipment={getShipment}
      />
      <StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
        startShipment={startShipment}
      />
    </>
  );
};

export default index;
