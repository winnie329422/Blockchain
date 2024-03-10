const firebaseConfig = {
    apiKey: "AIzaSyBxyo9c07rd1CzGXbEnu9jmutXAbIBiHis",
    authDomain: "contactform-d7d05.firebaseapp.com",
    databaseURL: "https://contactform-d7d05-default-rtdb.firebaseio.com",
    projectId: "contactform-d7d05",
    storageBucket: "contactform-d7d05.appspot.com",
    messagingSenderId: "371807550240",
    appId: "1:371807550240:web:5a7fb2cd0674cd8f4bb545"
  };

  //初始化firebase
  firebase.initializeApp(firebaseConfig);

  //reference firebase
  //建立contactForm資料表
  var contactFormDB =  firebase.database().ref("Class");
  //抓HTML的Form的ID"contactForm"的值，利用submit建立值
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  //submit的function
  
  function submitForm(e){
    e.preventDefault();

    //宣告值=html的id
    var classname = getElementVal("name");
    var person = getElementVal("person");
    var phone = getElementVal("phone");
    var tax = getElementVal("tax");
    var address = getElementVal("address");
    var email = getElementVal("email");
    var bankcode = getElementVal("num");
    var bankaccount = getElementVal("bank");
    var account = getElementVal("acc");
    var password = getElementVal("pass");
    var tele = getElementVal("tele");
    var job = getElementVal("job");

    //存值
    saveMessages(classname, person, phone, tax, address, email, bankcode, bankaccount, account, password, tele, job);

    //reset the Form
    document.getElementById("contactForm").reset();
  }

  //存值的function
  const saveMessages = (classname, person, phone, tax, address, email, bankcode, bankaccount, account, password, tele, job) => {
    //把值push進去
    var newContentForm = contactFormDB.push();

    newContentForm.set({
      classname: classname, 
      person: person, 
      phone: phone, 
      tax: tax, 
      address: address, 
      email: email, 
      bankcode: bankcode, 
      bankaccount: bankaccount, 
      account: account, 
      password: password, 
      tele: tele, 
      job: job,
    });
  };

  //return值
  
  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  };


