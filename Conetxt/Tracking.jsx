import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import tracking from "./Tracking.json";

const ContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

const ContractABI = tracking.abi;

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(ContractAddress, ContractABI, signerOrProvider);

export const TrackingContext = React.createContext();

export const TrackingProvider = ({ children }) => {
  //State
  //
  const DappName = "prod track";
  const [CurrentUser, setCurrentUser] = useState("");

  const createShipment = async (items) => {
    console.log(items);

    const { reciever, pickupTime, distance, price } = items;

    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      const createItem = await contract.createShipment(
        reciever,
        new Date(pickupTime).getTime(),
        distance,
        ethers.utils.parseUnits(price, 18),
        { value: ethers.utils.parseUnits(price, 18) }
      );

      await createItem.wait();
      console.log(createItem);
    } catch (err) {
      console.log(err);
    }
  };

const getAllShipment = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      
      console.log(contract);
      const shipments = await contract.getAllTransactions();
      console.log(shipments);
      const allShipments = shipments.map((shipment) => ({
        sender: shipment.sender,
        receiver: shipment.receiver,
        price: ethers.utils.formatEther(shipment.price.toString()),
        pickupTime: shipment.pickupTime.toNumber(),
        deliveryTime: shipment.deliveryTime.toNumber(),
        distance: shipment.distance.toNumber(),
        isPaid: shipment.isPaid,
        status: shipment.status,
      }));
      return allShipments;
    } catch (err) {
      console.log(err);
    }
  };

  const getShipmentCount = async () => {

    try{
      if(!window.ethereum) return "Install Metamask";

      const accounts= await window.ethereum.request({method: 'eth_accounts'});

      const provider = new ethers.providers.JsonRpcProvider();

      const contract = fetchContract(provider);

      const shipmentCount = await contract.getShipmentsCount(accounts[0]);
      return shipmentCount.toNumber();


    }catch(err){
      console.log("erro in shipment getting",err)
    }

    

  };

  const completeShipment= async(completeShip)=>{
    console.log(completeShip)

    const {reciever, index} = completeShip;
    try{

    if(!window.ethereum) return "Install Metamask";
      
    const accounts= await window.ethereum.request({method: 'eth_accounts'});
      
    const web3Modal = new Web3Modal();

    const connection = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const transaction = await contract.completeShipment(accounts[0],reciever,index,   {
      gasLimit: 300000,
    });

    await transaction.wait();

    console.log(transaction);


  
  }catch(err){

      console.log("wrong complete shipment",err)

    }
  }

  const getShipment = async(index)=>{
    console.log(index*1)

    try{
      if(!window.ethereum) return "Install Metamask";
      const accounts= await window.ethereum.request({method: 'eth_accounts'});

      const provider = new ethers.providers.JsonRpcProvider();

      const contract = fetchContract(provider);

      const shipment = await contract.getShipment(accounts[0],index*1);

      const singleShipment={
        sender:shipment[0],
        receiver:shipment[1],
        pickupTime:shipment[2].toNumber(),
        deliveryTime:shipment[3].toNumber(),
        distance:shipment[4].toNumber(),
        price:ethers.utils.formatEther(shipment[5].toString()),
        status:shipment[6],
        isPaid:shipment[7]
      }

      return singleShipment;

    }catch(err){
      console.log("Sorry no Shipment",err)
    }
  }

  const startShipment = async(getProduct)=>{
    const {receiver,index} = getProduct;

    try{
      if(!window.ethereum) return "Install Metamask";

      const accounts= await window.ethereum.request({method: 'eth_accounts'});

      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();

      const provider = new ethers.providers.Web3Provider(connection);

      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      const shipment = await contract.startShipment(accounts[0],receiver,index*1)

      await shipment.wait();

      console.log(shipment);


    }catch(err){
      console.log("error in start shipment",err)
    }
  }

  const checkIfWalletConnected = async () => {

    try{
      if(!window.ethereum) return "Install Metamask";

      const accounts= await window.ethereum.request({method: 'eth_accounts'});

      if(accounts.length){
        setCurrentUser(accounts[0]);
      
      }else{
        return "No Accounts";
      }

    }catch(err){
      console.log("error in wallet",err)
    }
  }

const connectWallet = async () => {
  try{
    if(!window.ethereum) return "Install Metamask";

    const accounts= await window.ethereum.request({method: 'eth_requestAccounts'});
    setCurrentUser(accounts[0]);

  }catch(err){
    console.log("error in wallet",err)
  }
}

useEffect(()  => {
  
    checkIfWalletConnected();
},[])


  return (
    <TrackingContext.Provider
      value={{
        DappName,
        CurrentUser,
        connectWallet,
        createShipment,
        getAllShipment,
        getShipment,
        getShipmentCount,
        startShipment,
        completeShipment
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
};

