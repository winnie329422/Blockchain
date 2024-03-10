import Web3 from "web3";
import configuration from '../build/contracts/Points.json';
import configuration2 from '../build/contracts/Verify.json';
import configuration3 from '../build/contracts/Code.json';
import okImage from './assets/image/checked.png';
import notokImage from './assets/image/remove.png';
import health from './assets/image/health.png';
import badguy from './assets/image/badguy.jpg';
import share from './assets/image/share.png';
// import all from './assets/css/amanda_takecarecard.css';
// import './assets/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

//新增字串
const createElementFromString = (string) => {
    const el = document.createElement('div');
    el.innerHTML = string;
    return el.firstChild;
  };

//連結json檔
// 1points
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

// 2verify
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
// 3code
console.log(configuration3.networks['5777'].address);
const CONTRACT_ADDRESS3 =
configuration3.networks['5777'].address;
const CONTRACT_ABI3 = configuration3.abi;

const web33 = new Web3(
Web3.givenProvider || 'http://127.0.0.1:7545'
);
const contract3 = new web33.eth.Contract(
CONTRACT_ABI3,
CONTRACT_ADDRESS3
);

let account;

//html的id
const accountEl = document.getElementById('show');
const showVC = document.getElementById('showVC');
const ticketsEl2 = document.getElementById('ClickTry2');


//驗證碼的部分
const generateCode = async (verifycards) =>{
    const hashh = await contract3.methods.generateCode(verifycards.CardOwner).send({
        from: account
    });
    console.log(web3.utils.soliditySha3(hashh));
    const VC = web3.utils.soliditySha3(hashh);
    await contract3.methods.addCode(web3.utils.soliditySha3(hashh), verifycards.CardOwner).send({
        from: account
    });
    const VCmodal=createElementFromString(
        `<h5>您的驗證碼為：${VC}可複製給您欲傳送對象</h5>`
    );
    showVC.appendChild(VCmodal);
}

// const showVerifyCode = async (VC) =>{
    
// }

const refreshTickets = async () => {
  const VL = await contract2.methods.verifycardsArrayLength().call();
  console.log(VL);
  for (let i = 0; i < VL; i++) {
    const verifycards = await contract2.methods.verifycards(i).call();
    console.log(verifycards);
    verifycards.id = i;
    if (verifycards.CardOwner === account) {
      if(verifycards.IfOK == "合法"){
        const ticketEl = createElementFromString(
            `<div class="container">
            <div class="row ha">
                <div class="col">
                    <span class="userTitleSpan h3">
                        我的長照小卡
                    </span>
                </div>
            </div>
            <div class="outsideB">
                <div class="card">
                
                    <div class="card-head">
                        <img src=${health} class="card-icon">
                        <div class="card-head-title">長照服務人員證明</div>
                    </div>
                    <div class="card-body">
                        <div class="card-body-item">${verifycards.OnerCategory}</div>
                        <div class="card-body-name">${verifycards.OwnerName}</div>
                        <img src=${badguy} class="card-body-img">
                    </div>
                    <div class="card-redline"></div>
                    <div class="card-foot">
                        <div class="card-foot-item">有效期限</div>
                        <div class="card-foot-daytime">${verifycards.ExpiredYear}/${verifycards.ExpiredMonth}/${verifycards.ExpiredDay}</div>
                    </div>
                </div>
                <div class="share">
                    <div class="share-content">本小卡使用區塊鏈技術，存於區塊鏈中<button class="share-button"  type="button">分享 <img src=${share}
                        class="share-icon"></button></div>
                </div>
                <div id="showVerifyCode"></div>
            </div>
        </div>`
        );
        const button = ticketEl.querySelector('button');
        button.onclick = generateCode.bind(null, verifycards);
        accountEl.appendChild(ticketEl);
      }
      else{
        const ticketEl = createElementFromString(
          `<div class="container">
        <div class="row ha">
            <div class="col">
                <span class="userTitleSpan h3">
                    我的長照小卡
                </span>
            </div>
        </div>
        <div class="outsideB">
            <div class="card">
            <div class="cardimg"><img class="verifycardImage" src=${notokImage} with="200" heigh="200" alt="過期"></div>            
                <div class="card-head">
                    <img src=${health} class="card-icon">
                    <div class="card-head-title">長照服務人員證明</div>
                </div>
                <div class="card-body">
                    <div class="card-body-item">${verifycards.OnerCategory}</div>
                    <div class="card-body-name">${verifycards.OwnerName}</div>
                    <img src=${badguy} class="card-body-img">
                </div>
                <div class="card-redline"></div>
                <div class="card-foot">
                    <div class="card-foot-item">有效期限</div>
                    <div class="card-foot-daytime">${verifycards.ExpiredYear}/${verifycards.ExpiredMonth}/${verifycards.ExpiredDay}</div>
                </div>
            </div>
            <div class="share">
                <div class="share-content">本小卡使用區塊鏈技術，存於區塊鏈中<button type="button" class="share-button">分享 <img src=${share}
                    class="share-icon"></button></div>
            </div>
        </div>
    </div>`
        );
        accountEl.appendChild(ticketEl);
      }
    }
  }
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