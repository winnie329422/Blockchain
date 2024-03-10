import Web3 from "web3";
import configuration from '../build/contracts/Points.json';
import configuration2 from '../build/contracts/Verify.json';
import okImage from './assets/image/checked.png';
import notokImage from './assets/image/remove.png';
import health from './assets/image/health.png';
import badguy from './assets/image/badguy.jpg';
import share from './assets/image/share.png';
// import all from './assets/css/amanda_takecarecard.css';

//新增字串
const createElementFromString = (string) => {
    const el = document.createElement('div');
    el.innerHTML = string;
    return el.firstChild;
  };

//連結json檔
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

//html的id
// const accountEl = document.getElementById('show');
const form = document.getElementById('form');
// const ticketsEl2 = document.getElementById('ClickTry2');
const hashh = document.getElementById('hashh');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const hashhValue = hashh.value;
    console.log(hashhValue);
    
    localStorage.setItem('hashh', hashhValue);

    window.location.href = "searchsomeislegalornot-check.html";
})


//驗證碼的部分
// const generateCode = async (verifycards) =>{
//     const hashh = await contract2.methods.generateCode(verifycards.CardOwner).send({
//         from: account
//     });
//     await contract2.methods.addCode(hashh, verifycards.CardOwner).send({
//         from: account
//     });
// }

// const refreshTickets = async () => {
//     const hashhValue = localStorage.getItem('hashh')
//   const VL = await contract2.methods.verifycardsArrayLength().call();
//   console.log(VL);
//   for (let i = 0; i < VL; i++) {
//     const verifycards = await contract2.methods.verifycards(i).call();
//     console.log(verifycards);
//     verifycards.id = i;
//     if (verifycards.CardOwner === contract2.methods.code[hashhValue].account) {
//       if(await contract2.methods.code[hashhValue].enable == true){
//         if(verifycards.IfOK == "合法"){
//             const ticketEl = createElementFromString(
//               `<div class="container">
//             <div class="row ha">
//                 <div class="col">
//                     <span class="userTitleSpan h3">
//                         長照小卡
//                     </span>
//                 </div>
//             </div>
//             <div class="outsideB">
//                 <div class="card">
//                 <img class="verifycardImage" src=${okImage} with="200" heigh="200" alt="合法"></div>
//                     <div class="card-head">
//                         <img src=${health} class="card-icon">
//                         <div class="card-head-title">長照服務人員證明</div>
//                     </div>
//                     <div class="card-body">
//                         <div class="card-body-item">${verifycards.OnerCategory}</div>
//                         <div class="card-body-name">${verifycards.OwnerName}</div>
//                         <img src=${badguy} class="card-body-img">
//                     </div>
//                     <div class="card-redline"></div>
//                     <div class="card-foot">
//                         <div class="card-foot-item">有效期限</div>
//                         <div class="card-foot-daytime">${verifycards.ExpiredYear}/${verifycards.ExpiredMonth}/${verifycards.ExpiredDay}</div>
//                     </div>
//                 </div>
//                 <div class="share">
//                     <div class="share-content">本小卡使用區塊鏈技術，存於區塊鏈中<button type="button" class="share-button">分享 <img src=${share}
//                         class="share-icon"></button></div>
//                 </div>
//             </div>
//         </div>`
//             );
//             const button = ticketEl.querySeletor('button');
//             button.onclick = generateCode.bind(null, verifycards);
//             accountEl.appendChild(ticketEl);
//           }
//           else{
//             const ticketEl = createElementFromString(
//               `<div class="container">
//             <div class="row ha">
//                 <div class="col">
//                     <span class="userTitleSpan h3">
//                         長照小卡
//                     </span>
//                 </div>
//             </div>
//             <div class="outsideB">
//                 <div class="card">
//                 <img class="verifycardImage" src=${notokImage} with="200" heigh="200" alt="過期">
//                     <div class="card-head">
//                         <img src=${health} class="card-icon">
//                         <div class="card-head-title">長照服務人員證明</div>
//                     </div>
//                     <div class="card-body">
//                         <div class="card-body-item">${verifycards.OnerCategory}</div>
//                         <div class="card-body-name">${verifycards.OwnerName}</div>
//                         <img src=${badguy} class="card-body-img">
//                     </div>
//                     <div class="card-redline"></div>
//                     <div class="card-foot">
//                         <div class="card-foot-item">有效期限</div>
//                         <div class="card-foot-daytime">${verifycards.ExpiredYear}/${verifycards.ExpiredMonth}/${verifycards.ExpiredDay}</div>
//                     </div>
//                 </div>
//                 <div class="share">
//                     <div class="share-content">本小卡使用區塊鏈技術，存於區塊鏈中<button type="button" class="share-button">分享 <img src=${share}
//                         class="share-icon"></button></div>
//                 </div>
//             </div>
//         </div>`
//             );
//             accountEl.appendChild(ticketEl);
//           }
//       }
//       else{
//         window.alert("驗證碼已過期");
//         history.back();
//       }
//     }
//   }
// };

// const main = async () => {
// const accounts = await web3.eth.requestAccounts();
// account = accounts[0];
// await refreshTickets();
// };

// main();