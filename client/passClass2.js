import Web3 from "web3";
import configuration from '../build/contracts/Points.json';
import configuration2 from '../build/contracts/Verify.json';
// obj = JSON.parse(JSON.stringify(configuration2));
// parent.postMessage(obj, 'whatever');

// const createElementFromString = (string) => {
//     const el = document.createElement('div');
//     el.innerHTML = string;
//     return el.firstChild;
//   };

const CONTRACT_ADDRESS =
configuration.networks['5777'].address;
const CONTRACT_ABI = configuration.abi;
console.log(CONTRACT_ADDRESS);

const web3 = new Web3(
Web3.givenProvider || 'http://127.0.0.1:7545'
);
const contract = new web3.eth.Contract(
CONTRACT_ABI,
CONTRACT_ADDRESS
);

const CONTRACT_ADDRESS2 =
configuration2.networks['5777'].address;
const CONTRACT_ABI2 = configuration2.abi;

const web32 = new Web3(
Web3.givenProvider || 'http://127.0.0.1:7545'
);
const contract2 = new web32.eth.Contract(
CONTRACT_ABI2,
CONTRACT_ADDRESS2
);

let account;

// const accountEl = document.getElementById('show');
const ticketsEl2 = document.getElementById('ClickTry2');
const year = document.getElementById('year').innerText;
const month = document.getElementById('month').innerText;
const day = document.getElementById('day').innerText;
const OwnerCategory = document.getElementById('Oselectwho'); //改value try看看
const OwnerName = document.getElementById('Omemname');
const cardOwner = document.getElementById('account');

// // const ticketsEl = document.getElementById('ClickTry');
// const CourseId = document.getElementById('CourseId').innerText;
// const CourseName = document.getElementById('CourseName').innerText;
// const CourseClass = document.getElementById('CourseClass').innerText;
// const CourseCategory = document.getElementById('CourseCategory').innerText;
// const CoursePoint = document.getElementById('CoursePoint').innerText;
// const CourseDate = document.getElementById('CourseDate').innerText;
// const owner = document.getElementById('owner').innerText;

// const TOTAL_TICKETS = 10;
// const EMPTY_ADDRESS =
// '0x0000000000000000000000000000000000000000';

const refreshTickets = async () => {
  console.log(Omemname.innerText);
  var count=0;
//   accountEl.innerHTML = '';
  const PL = await contract.methods.pointsArrayLength().call();
  console.log(PL);
  var Today=new Date();
  var NowYear = Today.getFullYear();
  console.log(NowYear);
  var month = Today.getMonth()+1;
  var day =Today.getDate();
  for (let i = 0; i < PL; i++) {
    const points = await contract.methods.points(i).call();
    console.log(points);
    points.id = i;
    if (points.owner === account) {
        console.log(parseInt(points.CoursePoint));
        count += parseInt(points.CoursePoint);
        console.log(count);
    }
  }
  console.log(count);
  console.log(year);
  // ticketsEl2.onclick = await contract2.methods.VerifyGenerate(parseInt(NowYear), parseInt(year), parseInt(month), parseInt(day), parseInt(count), cardOwner.innerText, OwnerCategory.innerText, OwnerName.innerText).send({
  //   from: account
  // });
  ticketsEl2.onclick = setTimeout(function() {
  console.log(Omemname.innerText);
    contract2.methods.VerifyGenerate(parseInt(NowYear), parseInt(year), parseInt(month), parseInt(day), parseInt(count), cardOwner.innerText, OwnerCategory.innerText, OwnerName.innerText).send({
      from: account
    });
}, 3000);
};


// ticketsEl.onclick = 


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
const accounts = await web3.eth.requestAccounts();
// const accounts = await ethereum.request({
//   method: 'eth_requestAccounts',
// });
account = accounts[0];
// accountEl.innerText = account;
await refreshTickets();
};

main();