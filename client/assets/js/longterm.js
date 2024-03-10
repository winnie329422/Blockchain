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
  var contactFormDB =  firebase.database().ref("Longterm");
  //抓HTML的Form的ID"contactForm"的值，利用submit建立值
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  //submit的function
  
  function submitForm(e){
    e.preventDefault();

    //宣告值=html的id
    var name = getElementVal("name");
    var job = getElementVal("job1");
    var idnum = getElementVal("idnum");
    var tele = getElementVal("tele");
    var email = getElementVal("email");
    var startdate = getElementVal("startdate");
    var changeDate = getElementVal("changeDate");
    var acc = getElementVal("acc");
    var pass = getElementVal("pass");

    //存值
    saveMessages(name, job, idnum, tele, email, startdate, changeDate, acc, pass);

    //reset the Form
    document.getElementById("contactForm").reset();
  }

  //存值的function
  const saveMessages = (name, job, idnum, tele, email, startdate, changeDate, acc, pass) => {
    //把值push進去
    var newContentForm = contactFormDB.push();

    newContentForm.set({
      name :name,
      job : job,
      idnum : idnum,
      tele : tele, 
      email : email, 
      startdate : startdate, 
      changeDate : changeDate, 
      acc : acc, 
      pass : pass,
    });
  };

  //return值
  
  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  };


