import Web3 from "web3";
import configuration from '../build/contracts/Points.json';
// import cc from '../build/contracts/Points.json';

const CONTRACT_ADDRESS =
configuration.networks['5777'].address;
const CONTRACT_ABI = configuration.abi;

// const CCONTRACT_ADDRESS =
// cc.networks['5777'].address;
// const CCONTRACT_ABI = configuration.abi;

const web3 = new Web3(
Web3.givenProvider || 'http://127.0.0.1:7545'
);
const contract = new web3.eth.Contract(
CONTRACT_ABI,
CONTRACT_ADDRESS
);

// const ccontract = new web3.eth.Contract(
//     CCONTRACT_ABI,
//     CCONTRACT_ADDRESS
//     );

let account;

const ticketsEl = document.getElementById('ClickTry');


const refreshTickets = async () => {
    const PL = await contract.methods.pointsArrayLength().call();
    console.log(PL);
    ticketsEl.onclick = contract.methods.VerifyGenerate().call();
};

const main = async () => {
    const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
account = accounts[0];
// accountEl.innerText = account;
await refreshTickets();
};

main();