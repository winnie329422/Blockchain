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

const accountEl = document.getElementById('show1');
const accountE2 = document.getElementById('show2');
const accountE3 = document.getElementById('show3');
const accountE4 = document.getElementById('show4');

const point1 = document.getElementById('point1');
const point2 = document.getElementById('point2');
const point3 = document.getElementById('point3');
const point4 = document.getElementById('point4');

const userblock = sessionStorage.getItem('block');



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
  accountE2.innerHTML = '';
  accountE3.innerHTML = '';
  accountE4.innerHTML = '';
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
      console.log(points.getDate);
      const fordate = (points.getDate)*1000;
      const date= new Date(fordate);
      console.log(date.getFullYear());
      dateFormat = date.getFullYear() + "/" + (date.getMonth()+1) + "/ "+ date.getDate();
      console.log(dateFormat);
      if(points.CourseCategory === "專業課程"){
        //count point
        let count = 0;
        count+=parseInt(points.CoursePoint);
        point1.innerText=count;
        console.log(count);
        //show
        const ticketEl = createElementFromString(`<div class="row mypointrow">
        <div class="col-4">${points.CourseName}</div>
        <div class="col-2">${points.CoursePoint}</div>
        <div class="col-3">${points.CourseDate}</div>
        <div class="col-3">${dateFormat}</div>
          </div>`);
        accountEl.appendChild(ticketEl);
      }else{
        point1.innerText="0"
      }
      if(points.CourseCategory === "專業品質"){
        //count point
        let count = 0;
        count+=parseInt(points.CoursePoint);
        point2.innerText=count;
        console.log(count);
        //show
        const ticketEl = createElementFromString(`<div class="row mypointrow">
        <div class="col-4">${points.CourseName}</div>
        <div class="col-2">${points.CoursePoint}</div>
        <div class="col-3">${points.CourseDate}</div>
        <div class="col-3">${dateFormat}</div>
          </div>`);
          accountE2.appendChild(ticketEl);
      }else{
        point2.innerText="0"
      }
      if(points.CourseCategory === "專業倫理"){
        //count point
        let count = 0;
        count+=parseInt(points.CoursePoint);
        point3.innerText=count;
        console.log(count);
        //show
        const ticketEl = createElementFromString(`<div class="row mypointrow">
        <div class="col-4">${points.CourseName}</div>
        <div class="col-2">${points.CoursePoint}</div>
        <div class="col-3">${points.CourseDate}</div>
        <div class="col-3">${dateFormat}</div>
          </div>`);
        accountE3.appendChild(ticketEl);
      }else{
        point3.innerText="0"
      }
      if(points.CourseCategory === "專業法規"){
        //count point
        let count = 0;
        count+=parseInt(points.CoursePoint);
        point4.innerText=count;
        console.log(count);
        //show
        const ticketEl = createElementFromString(`<div class="row mypointrow">
        <div class="col-4">${points.CourseName}</div>
        <div class="col-2">${points.CoursePoint}</div>
        <div class="col-3">${points.CourseDate}</div>
        <div class="col-3">${dateFormat}</div>
          </div>`);
        accountE4.appendChild(ticketEl);
      }else{
        point4.innerText="0"
      }
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
  console.log(configuration.networks['5777'].address);
  const accounts = await ethereum.request({
    method: 'eth_requestAccounts',
  });
  account = accounts[0];
  await refreshTickets();
};
main();