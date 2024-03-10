import Web3 from "web3";
import configuration from '../build/contracts/Points.json';
import './assets/css/courseing.css';


const createElementFromString = (string) => {
    const el = document.createElement('div');
    el.innerHTML = string;
    return el.firstChild;
  };

const CONTRACT_ADDRESS =
configuration.networks['5777'].address;
const CONTRACT_ABI = configuration.abi;

const web3 = new Web3(
Web3.givenProvider || 'http://127.0.0.1:7545'
);
const contract = new web3.eth.Contract(
CONTRACT_ABI,
CONTRACT_ADDRESS
);

let account;

const accountEl = document.getElementById('show');
const userblock = sessionStorage.getItem('block');

// const accountE2 = document.getElementById('show2');
// const ticketsEl = document.getElementById('ClickTry');

// const TOTAL_TICKETS = 10;
// const EMPTY_ADDRESS =
// '0x0000000000000000000000000000000000000000';

// const createPoint = async (owner, CourseId, CourseName, CourseClass, CourseCategory, CoursePoint, CourseDate) => {
// await contract.methods
//   .createPoint(owner, CourseId, CourseName, CourseClass, CourseCategory, CoursePoint, CourseDate)
//   .send({
//     from: account
//   });
// };
// ticketsEl.onclick = createPoint.bind(null, owner, CourseId, CourseName, CourseClass, CourseCategory, parseInt(CoursePoint), CourseDate);

// const PL=0;
// const handlePersonCount = async () =>{
  
//   console.log(PL);
// }
// handlePersonCount();
const refreshTickets = async () => {
  accountEl.innerHTML = '';
  const PL = await contract.methods.pointsArrayLength().call();
  console.log(PL);
  for (let i = 0; i < PL; i++) {
    const points = await contract.methods.points(i).call();
    console.log(points);
    console.log(userblock);
    points.id = i;
    console.log(points.owner);
    console.log(points.CourseName);
    console.log(points.CourseCategory);
    if (points.owner === userblock) {
      const ticketEl = createElementFromString(`<div class="row contentrow">
            <div class="col-1">${points.CourseCategory}</div>
            <div class="col-3">${points.CourseName}</div>
            <div class="col-2">${points.CourseClass}</div>
            <div class="col-1">${points.CourseDate}</div>
            <div class="col-2">中原大學教學大樓103教室</div>
            <div class="col-1">${points.CoursePoint}</div>
            <div class="col-1">2022/04/05</div>
        </div>`);
      accountEl.appendChild(ticketEl);
    }
  }
};

// const VrefreshTickets = async () => {
//   accountE2.innerHTML = '';
//   const VL = await contract.methods.verifycardsArrayLength().call();
//   console.log(VL);
//   for(let j=0; j < 100; j++){
//     const verifycards = await contract.methods.verifycards(i).call(function(err,res){
//       if(!err){
//           console.log(res);
//       } else {
//           console.log(err);
//       }});
//     console.log(verifycards);
//     verifycards.id=j
//     if (verifycards.CardOwner === account) {
//       const ticketEl = createElementFromString(
//         `<div class="ticket card" style="width: 18rem;">
//         <p>${verifycards.ExpiredDay}</p>
//         <p>${verifycards.IfOK}</p>
//         <p>${verifycards.CardOwner}</p>
//         <p>${verifycards.OnerCategory}</p>
//         </div>`
//       );
//       accountE2.appendChild(ticketEl);
//     }
//   }
// };

//
// const refreshTickets = async () => {
    // accountEl.innerHTML = '';
    // const counter = 0;
    // for (i = 0; i < contract.methods.getZombiesByOwner(account).length; i++) {
    //       result[counter] = i;
    //       counter++;
  
    // console.log("sucess");
    // console.log(contract.methods.getZombiesByOwner(account).point);
    // const ticketEl = createElementFromString(
    //     `<div class="ticket card" style="width: 18rem;">
    //       <p>${result}</p>
    //     </div>`
    //   );
    //   accountEl.appendChild(ticketEl);
    // }
      
      
// };

const main = async () => {
  // const accounts = await web3.eth.requestAccounts();
  const accounts = await ethereum.request({
    method: 'eth_requestAccounts',
  });
  account = accounts[0];
  await refreshTickets();
};
main();