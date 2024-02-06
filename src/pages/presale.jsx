import { useState } from "react";
import Web3 from 'web3'
import { useTranslation } from "react-i18next";
import LabelButton from "~/components/labelButton";
import Header from "~/components/screens/header";
import MainPresale from "~/components/presale/main";
import Account from "~/components/presale/account";
import { global } from "~/common/global";
import { addRefer, getProfile } from "~/common/api";

export default function Presale() {
  const { t, i18n } = useTranslation();
  const [address, setAddress] = useState("");
  const [btnType, setBtnType] = useState("Connect");
  const [btnColor, setBtnColor] = useState("grayscale");
  const [usdtamount, setusdtamount] = useState(null);
  const [page, setPage] = useState("main");
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [code, setCode] = useState("");
  const [tokenAmount, setTokenAmount] = useState({
    csc: 0,
    usdt: 0
  });
  const [buyStatus, setBuyStatus] = useState(false);
  const [introducers, setIntroducers] = useState([]);

  const BEP20TokenABI = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
  let web3;
  if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.ethereum);
  } else {
    const provider = new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/');
    web3 = new Web3(provider);
  }

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
          // console.log(`Connected with address: ${userAddress}`);
          // Proceed to Buy functionality
          global.walletAddress = userAddress;
          getProfile(userAddress)
            .then(res => {
              if (res.refCode !== '') {
                global.userRef = res.refCode;
                global.introducers = res.introducers;
                setIntroducers(res.introducers);
              }
            })
          setBtnType("Buy");
        } catch (error) {
          console.error(error);
          alert("Failed to connect. Please check if Metamask is installed and unlocked.");
        }
        break;

      case "Buy":
        if (btnType != "Buy") {
          alert("Please connect wallet");
          return;
        }
        if (!(introducers && introducers.includes(code))) {
          alert("You can't buy CSC token without correct refreral code");
          return;
        }
        if (usdtamount == "" || usdtamount == "0") {
          alert("Please input USDT amount you want to buy csc token");
          return;
        }
        try {
          setTokenAmount({ csc: (Number(receiveAmount) + Number(tokenAmount.csc)), usdt: (Number(usdtamount) + Number(tokenAmount.usdt)) });
          addRefer(global.walletAddress, { csc: (Number(receiveAmount) + Number(tokenAmount.csc)), usdt: (Number(usdtamount) + Number(tokenAmount.usdt)) }, code)
            .then(res => {
              if (res.data) {
                setBuyStatus(true);
                setusdtamount("");
                setCode("");
              }
              else {
                alert(res.message)
              }
            })
          //////// for test
          /* const BigNumber = require('bignumber.js');
          const tokenContractAddress = '0x55d398326f99059ff775485246999027b3197955';
          const tokenContract = new web3.eth.Contract(BEP20TokenABI, tokenContractAddress);
          const recipientAddress = '0x8e946b7453320383df75f080F7DA843c043DfB47';
          // Convert 100 USDT to wei - assuming 6 decimal places
          if (usdtamount === null) {
            alert("Please select USDT")
          }
          else {
            const decimals = 18;
            const amountToSend = new BigNumber(usdtamount).multipliedBy(new BigNumber(10).pow(decimals)).toString();
            //console.log(amountToSend);
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = 1000000;
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];


            await tokenContract.methods.transfer(recipientAddress, amountToSend).send({ from: userAddress, gasPrice: gasPrice, gas: gasLimit });
            setTokenAmount({ csc: (Number(receiveAmount) + Number(tokenAmount.csc)), usdt: (Number(usdtamount) + Number(tokenAmount.usdt)) });
          } */
        } catch (error) {
          console.error(error);
          alert("Failed to transfer tokens. Please try again.");
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="relative overflow-auto md:w-full h-screen min-w-[1024px] presale-bg">
      <Header currentMenu="Home" />
      <div className="flex-col h-full overflow-y-scroll space-y-2 flex lg:items-center justify-center">
        <div className="absolute top-0 translate-y-28 flex justify-between items-end w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px]">
          <div className="pt-2 text-4xl text-left text-white xl:text-4xl 2xl:text-4xl font-animeace">
            {t("CSC TOKEN PRESALE")}
          </div>
          <div
            className="wallet-connect text-md text-left text-white font-animeace cursor-pointer w-[450px] h-[54px] flex items-center justify-end"
            onClick={() => onBtnClick("Connect")}
          >
            <span className="w-[300px] text-center font-[900]" style={{ textShadow: "rgb(34, 29, 61, 0.8) 0px 3px 3px" }}>
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
        <div className="absolute top-0 translate-y-40 flex w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px] ml-3 z-[1]">
          <div
            className={`text-white text-1xl font-animeace w-[9rem] h-[3.5rem] cursor-pointer relative ${page === "main" ? "green-btn" : "inactive-btn"}`}
            onClick={() => setPage("main")}
          >
            <span
              className="absolute right-[1.1rem] top-[8px] text-[18px] text-[#FFBF80] font-lightest"
              style={{ WebkitTextStroke: "0.8px rgb(73, 25, 25, 0.8)", textShadow: "rgb(34, 29, 61, 0.8) 0px 3px 3px" }}
            >
              {t("PRESALE")}
            </span>
          </div>
          <div className={`text-white text-1xl font-animeace w-[9rem] h-[3.5rem] cursor-pointer relative ${page === "chart" ? "green-btn" : "inactive-btn"}`}>
            <span
              className="absolute right-[1.9rem] top-[8px] text-[18px] text-[#FFBF80] font-lightest"
              style={{ WebkitTextStroke: "0.8px rgb(73, 25, 25, 0.8)", textShadow: "rgb(34, 29, 61, 0.8) 0px 3px 3px" }}
            >
              {t("CHART")}
            </span>
          </div>
          <div
            className={`text-white text-1xl font-animeace w-[9rem] h-[3.5rem] cursor-pointer relative ${page === "account" ? "green-btn" : "inactive-btn"}`}
            onClick={() => setPage("account")}
          >
            <span
              className="absolute right-[1rem] top-[8px] text-[18px] text-[#FFBF80] font-lightest"
              style={{ WebkitTextStroke: "0.8px rgb(73, 25, 25, 0.8)", textShadow: "rgb(34, 29, 61, 0.8) 0px 3px 3px" }}
            >
              {t("ACCOUNT")}
            </span>
          </div>
        </div>
        <div className="w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px] z-0">
          <video
            src="assets/videos/intro.mp4"
            className="absolute top-1 translate-y-52 object-cover object-center rounded-3xl shadow-1xl shadow-[3px_3px_20px_7px_#FC44E9] contrast-125 brightness-50 w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 min-w-[1024px]"
            autoPlay
            loop
            muted
          />
          {page === "main" ?
            <MainPresale
              usdtamount={usdtamount}
              setusdtamount={setusdtamount}
              receiveAmount={receiveAmount}
              setReceiveAmount={setReceiveAmount}
              onBtnClick={onBtnClick}
              buyStatus={buyStatus}
              setBuyStatus={setBuyStatus}
              code={code}
              setCode={setCode}
            />
            :
            <Account tokenAmount={tokenAmount} btnType={btnType} setIntroducers={setIntroducers} />
          }
        </div>
      </div>
    </div>
  );
}
