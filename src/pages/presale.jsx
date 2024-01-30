import { useState } from "react";
import Web3 from 'web3'
import { useTranslation } from "react-i18next";
import LabelButton from "~/components/labelButton";

export default function Presale() {
  const { t, i18n } = useTranslation();
  const [address, setAddress] = useState("");
  const [btnType, setBtnType] = useState("Connect");
  const [btnColor, setBtnColor] = useState("grayscale");
  const [date, setDate] = useState({
    day: "00",
    hour: "02",
    percentage: "+10"
  })
  const [usdt, setUsdt] = useState("0.07");

  const BEP20TokenABI = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
  let web3;
  if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.ethereum);
  } else {
    const provider = new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/');
    web3 = new Web3(provider);
  }


  let busdamount = null;
  const onAmountClick = (amount) => {
    busdamount = amount;

  };

  const onBtnClick = async (type) => {
    setBtnColor("grayscale-0");
    switch (type) {
      case "Connect":
        try {
          // Request access to the user's accounts
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Get the user's current address
          const accounts = await web3.eth.getAccounts();
          const userAddress = accounts[0];
          setAddress(userAddress.slice(0, 4) + " ... " + userAddress.slice(-4));
          console.log(`Connected with address: ${userAddress}`);
          // Proceed to Buy functionality
          setBtnType("Buy");
        } catch (error) {
          console.error(error);
          alert("Failed to connect. Please check if Metamask is installed and unlocked.");
        }
        break;

      case "Buy":
        try {

          const BigNumber = require('bignumber.js');
          //const tokenContractAddress = '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7';
          const tokenContractAddress = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
          const tokenContract = new web3.eth.Contract(BEP20TokenABI, tokenContractAddress);

          const recipientAddress = '0x8e946b7453320383df75f080F7DA843c043DfB47';

          // Convert 100 USDT to wei - assuming 6 decimal places
          if (busdamount === null) {
            alert("Please select BUSD")
          }
          else {

            const decimals = 18;
            const amountToSend = new BigNumber(busdamount).multipliedBy(new BigNumber(10).pow(decimals)).toString();
            //console.log(amountToSend);
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = 1000000;
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];


            await tokenContract.methods.transfer(recipientAddress, amountToSend).send({ from: userAddress, gasPrice: gasPrice, gas: gasLimit });

          }
        } catch (error) {
          console.error(error);
          alert("Failed to transfer tokens. Please try again.");
        }
        break;
      default:
        break;
    }
  }
  const getPayValue = (value) => {
    console.log("getPayValue", value)
  }
  const getReceiveValue = (value) => {
    console.log("getReceiveValue", value)
  }
  const getEnterCode = (value) => {
    console.log("getEnterCode", value)
  }
  // return (
  //   <div className="w-full h-screen pt-16 lg:pt-48 bg-[url('../../public/assets/images/footer/back.jpg')] bg-cover">
  //     <div className="relative w-full lg:h-[700px] bottom-0">
  //       <a href="/">
  //         <div className="w-48 lg:w-1/6 duration-500 overflow-hidden cursor-pointer hover:brightness-125 ml-12 lg:ml-auto">
  //           <img className="w-12 h-12 lg:w-20 lg:h-20" src="../assets/images/come-back.png" alt="" />
  //         </div>
  //       </a>
  //       <div className="mt-8 w-4/5 text-2xl lg:text-5xl text-center text-gray-200 font-animeace mx-auto">
  //         Crypto Showdown Pre-Sale

  //       </div>

  //       <div className="w-4/5 text-center flex mx-auto justify-center">
  //         <img className="w-12 h-12 lg:w-24 lg:h-24 mt-16" src="../assets/images/coinbtn.png" alt="" />
  //         <div className="pt-16 lg:pt-24 text-xl lg:text-4xl mx-2 lg:mx-8 text-center text-gray-200 font-animeace">
  //           Price: 1 Token = 0.02$
  //         </div>
  //         <img className="w-12 h-12 lg:w-24 lg:h-24 mt-16" src="../assets/images/coinbtn.png" alt="" />

  //       </div>
  //       <div className="flex px-20 pt-24 lg:pt-36 justify-center items-center text-white">
  //         <div className="text-xl lg:text-2xl font-animeace text-right">Buy For:</div>
  //         <div className="h-fit mx-4 lg:flex lg:mx-8 relative space-y-4 lg:space-y-0">
  //           {[100, 200, 300, 400, 500].map((amount) => (
  //             <div
  //               key={amount}
  //               tabIndex={0} // Add tabindex to make the div focusable
  //               className={`w-48 lg:w-1/5 duration-500 relative overflow-hidden cursor-pointer hover:brightness-125 focus:outline-dashed ${btnColor}`}
  //               onClick={() => onAmountClick(amount)}
  //             >
  //               <div className="w-full h-full absolute flex items-center justify-between">
  //                 <div className="mx-auto text-xl font-animeace">{amount} BUSD</div>
  //               </div>
  //               <img src="../assets/images/busdbtn.png" alt="" className="block w-full top-0 px-4" />
  //             </div>
  //           ))}
  //         </div>

  //       </div>
  //       <div className="mt-24 w-48 lg:w-1/6 relative duration-500 overflow-hidden mx-auto cursor-pointer hover:brightness-125" onClick={onBtnClick}>
  //         <div className="w-full h-full absolute flex items-center text-white justify-center space-x-4">
  //         <img src="../assets/images/icon_metamask.png" alt="" className="h-full z-10"/>
  //           <div className="text-xm lg:text-xl font-animeace">
  //             {btnType}
  //           </div>
  //         </div>
  //         <img src="../assets/images/big-button.png" alt="" className="w-full top-0" />
  //       </div>
  //     </div>
  //   </div>

  // );
  return (
    <div className="relative overflow-auto md:w-full h-screen min-w-[1024px] presale-bg">
      <div className="flex-col h-full overflow-y-scroll space-y-2 flex lg:items-center justify-center">
        <div className="absolute top-0 translate-y-16 flex justify-between w-11/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12 min-w-[1024px] items-center">
          <div className="pt-2 text-3xl text-left text-white xl:text-3xl 2xl:text-4xl font-animeace">
            {t("CSC TOKEN PRESALE")}
          </div>
          <div
            className="text-md text-left text-white font-animeace bg-[#fab700] rounded-full border border-y-4 border-r-4 border-black opacity-90 py-1 cursor-pointer"
            onClick={() => onBtnClick("Connect")}
          >
            <span className="border-4 border-black rounded-full px-5 py-2 bg-[#473845]">{t("YOUR WALLET: ")}</span>
            <span className="px-5">
              {btnType === "Connect" ?
                <>
                  <img src="assets/images/metamask.png" alt="" className="w-6 inline me-1" />{t("CONNECT METAMASK")}
                </>
                :
                <>
                  <img src="assets/images/metamask.png" alt="" className="w-6 inline me-1" />{address}
                </>
              }
            </span>
          </div>
        </div>
        <div className="absolute top-0 translate-y-28 flex w-11/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12 min-w-[1024px] ml-3">
          <div className="text-white text-1xl font-animeace px-2 py-0.5 bg-gradient-to-b from-[#5d3758] to-[#a42c97] rounded-full w-32 text-center border-4 border-[#361432]">
            {t("PRESALE")}
          </div>
          <div className="text-white text-1xl font-animeace px-2 py-0.5 bg-gradient-to-t from-[#a42c97] to-[#5d3758] rounded-full mx-1.5 w-32 text-center border-4 border-[#361432]">
            {t("CHART")}
          </div>
          <div className="text-white text-1xl font-animeace px-2 py-0.5 bg-gradient-to-b from-[#5d3758] to-[#a42c97] rounded-full w-32 text-center border-4 border-[#361432]">
            {t("ACCOUNT")}
          </div>
        </div>
        <div className="w-11/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12 min-w-[1024px]">
          <video
            src="assets/videos/intro.mp4"
            className="absolute top-0 translate-y-40 object-cover object-center rounded-3xl shadow-1xl shadow-[3px_3px_20px_7px_#FC44E9] contrast-125 brightness-50 w-11/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12 min-w-[1024px]"
            autoPlay
            loop
            muted
          />
          <div className="absolute top-0 translate-y-40 p-5 w-11/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12 min-w-[1024px]">
            <div className="w-full border-b-2 border-black mb-10">
              <div className="flex justify-between">
                <div className="text-1xl font-bold text-white font-animeace">
                  {t("NEXT PRICE UPDATE: ")}
                  <span className="text-[#dcc90a]">{date.day + " DAYS: " + date.hour + " HOURS"}</span>
                  <span className="text-[#00ce2d]">{" (" + date.percentage + "%)"}</span>
                </div>
                <div className="flex">
                  <div className="py-1 text-1xl text-white font-animeace border border-4 border-black rounded-full bg-[#473845] mx-2 w-40 h-10 text-center opacity-90">
                    <img src="assets/images/usdt.png" alt="" className="w-6 inline me-1" />{t("USDT")}
                  </div>
                  <div className="py-1 text-1xl text-white font-animeace border border-4 border-black rounded-full bg-[#473845] w-40 h-10 text-center opacity-90">
                    {t("NETWORK: ")}<span className="text-[#dcc90a]">{t("BNB")}</span>
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold text-white font-animeace">
                {t("CSC ACTUAL PRICE: ")}
                <span className="text-[#dcc90a]">{usdt + " USDT"}</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-5">
              <LabelButton title={"YOU PAY"} color="text-blue-500" img="assets/images/usdt.png" onChange={(e) => onAmountClick(e)} />
              <img src="assets/images/arrow.png" alt="" className="w-8 h-10" />
              <LabelButton title={"YOU RECEIVE"} color="text-yellow-500" img="assets/images/yellow_gem.png" onChange={(e) => getReceiveValue(e)} />
              <LabelButton title={"ENTER CODE"} onChange={(e) => getEnterCode(e)} />
              <div className="text-2xl font-bold text-white font-animeace buy-button-bg w-60 h-12 flex-center cursor-pointer" onClick={() => onBtnClick("Buy")}>BUY</div>
              <div className="font-bold text-white font-animeace">
                <span className="text-[#ff0000] text-2xl">{t("! ")}</span>
                <span className="text-[#dcc90a] text-1xl">{t("UNLOCK 15% ON TOKEN RELEASE AND EVERY 14 DAYS +21.25%")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
