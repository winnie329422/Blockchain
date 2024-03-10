import Web3 from "web3";
import configuration from '../build/contracts/Points.json';

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

// const accountEl = document.getElementById('show');
// setTimeout(function() {
//   const ticketsEl = document.getElementById('ClickTry');
//   const CourseId = document.getElementById('CourseId');
//   const CourseName = document.getElementById('CourseName');
//   const CourseClass = document.getElementById('CourseClass');
//   const CourseCategory = document.getElementById('CourseCategory');
//   const CoursePoint = document.getElementById('CoursePoint');
//   const CourseDate = document.getElementById('CourseDate');
//   const owner = document.getElementById('owner');
//   const createPoint = async (owner, CourseId, CourseName, CourseClass, CourseCategory, CoursePoint, CourseDate) => {
//     await contract.methods
//       .createPoint(owner.innerText, CourseId.innerText, CourseName.innerText, CourseClass.innerText, CourseCategory.innerText, CoursePoint.innerText, CourseDate.innerText)
//       .send({
//         from: account
//       });
//     };
//   ticketsEl.onclick = createPoint.bind(null, owner.innerText, CourseId.innerText, CourseName.innerText, CourseClass.innerText, CourseCategory.innerText, parseInt(CoursePoint.innerText), CourseDate.innerText);
// },3000);



// const TOTAL_TICKETS = 10;
// const EMPTY_ADDRESS =
// '0x0000000000000000000000000000000000000000';
// var Today=new Date();
// var NowYear = Today.getFullYear();
// console.log(NowYear);
// var month = Today.getMonth()+1;
// var day =Today.getDate();
// const getDateString = NowYear.toString()+month.toString()+day.toString()
// console.log(getDateString);


// ticketsEl.onclick = createPoint.bind(null, owner.innerText, CourseId.innerText, CourseName.innerText, CourseClass.innerText, CourseCategory.innerText, parseInt(CoursePoint.innerText), CourseDate.innerText);

setTimeout(function(){
  const ticketsEl = document.getElementById('ClickTry');
  
    const CourseId = document.getElementById('CourseId').innerText;
    const CourseName = document.getElementById('CourseName').innerText;
    const CourseClass = document.getElementById('CourseClass').innerText;
    const CourseCategory = document.getElementById('CourseCategory').innerText;
    const CoursePoint = document.getElementById('CoursePoint').innerText;
    const CourseDate = document.getElementById('CourseDate').innerText;
    const owner = document.getElementById('owner').innerText;
    const createPoint = async (owner, CourseId, CourseName, CourseClass, CourseCategory, CoursePoint, CourseDate) => {
      await contract.methods
        .createPoint(owner, CourseId, CourseName, CourseClass, CourseCategory, CoursePoint, CourseDate)
        .send({
          from: account
        });
      };
      ticketsEl.onclick =  createPoint.bind(null, owner, CourseId, CourseName, CourseClass, CourseCategory, parseInt(CoursePoint), CourseDate);

},5000);




// const refreshTickets = async () => {
//   accountEl.innerHTML = '';
//   const PL = await contract.methods.pointsArrayLength().call();
//   console.log(PL);
//   for (let i = 0; i < PL; i++) {
//     const points = await contract.methods.points(i).call();
//     console.log(points);
//     points.id = i;
//     if (points.owner === account) {
//       const ticketEl = createElementFromString(
//         `<div class="ticket card" style="width: 18rem;">
//         <p>${points.CourseId}</p>
//         <p>${points.CourseName}</p>
//         <p>${points.CourseClass}</p>
//         <p>${points.CourseCategory}</p>
//         <p>${points.CoursePoint}</p>
//         <p>${points.CourseDate}</p>
//         </div>`
//       );
//       accountEl.appendChild(ticketEl);
//     }
//   }
// };


const main = async () => {
// const accounts = await web3.eth.requestAccounts();
const accounts = await ethereum.request({
  method: 'eth_requestAccounts',
});
account = accounts[0];
// accountEl.innerText = account;
// await refreshTickets();
};

main();