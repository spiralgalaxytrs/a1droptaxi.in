  var firebaseConfig = {
    apiKey: "AIzaSyDUV-KSDEb3gufrMQbWIDUk44n1J8eMawY",
    authDomain: "intercityrider.firebaseapp.com",
    databaseURL: "https://intercityrider.firebaseio.com",
    projectId: "intercityrider",
    storageBucket: "intercityrider.appspot.com",
    messagingSenderId: "205048091037",
    appId: "1:205048091037:web:4039e159b8701819a71f74",
    measurementId: "G-7ZLG79C6HZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('book');
  
  // Listen for form submit
  document.getElementById('bookingForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  


    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('p');
    var pickuplocation = getInputVal('location-1');
    var pickuptime = getInputVal('pickuptime');
    var droplocation = getInputVal('location-2');
    var cars = getInputVal('cars');
    var ser = getInputVal('ser');
    var date = getInputVal('pickupdate');
  
  
    // Save message
    saveMessage(name, phone, pickuplocation,  pickuptime, droplocation, cars,ser,date);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    
  
    // Hide alert after 3 seconds
    setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
    },2000);
    
    window.open('https://intercityriders.com/bookingSuccess.html', '_blank');
  
    // Clear form
    document.getElementById('bookingForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, phone, pickuplocation,  pickuptime, droplocation, cars,ser,date){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      phone:phone,
      pickuplocation:pickuplocation,
      pickuptime:pickuptime,
      droplocation:droplocation,
      cars:cars,
      ser:ser,
      date:date

    });
  }
 var script = document.createElement('script');
          
script.src = "js/main.js";
          
document.head.appendChild(script)

   var strText = document.getElementById("name").value;
        var strText1 = document.getElementById("p").value;
        var strText2 = document.getElementById("location-1").value;
        var strText3 = document.getElementById("location-2").value;
        var strText4 = document.getElementById("pickupdate").value;
        var strText6 = document.getElementById("pickuptime").value;
        var strText7 = document.getElementById("cars").value;
        var strText8 = document.getElementById("ser").value;
        var rate;
        if((strText7=="Sedan") && (strText8=="One-Way"))
        {rate=sedano;}
        else if((strText7=="Sedan") && (strText8="Round"))
        {rate=sedanr;}
        else if((strText7=="SUV") && (strText8=="One-Way"))
        {rate=suvo;}
        else if((strText7=="SUV") && (strText8=="Round"))
        {rate=suvr;}
        else if(strText7=="Traveller")
        {rate=traveller;}
        var result = 'Customer Name:  ' + strText + '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + strText7+"%0APrice:"+rate;
        var finalMsg = encodeURI(result);
        document.getElementById("bookingForm").addEventListener("submit", (e) => {
            e.preventDefault();
            if (strText == "" || strText1 == "" || strText2 == "" || strText3 == "" || strText4 == "" || strText7 == "" || strText6 == "") {
                console.log('error');
                alert("Verfy the Phone Number");
            } else {
              
            const request = new XMLHttpRequest();
        const url = 'https://api.telegram.org/bot1277549383:AAGnKv4XGhOAG08Qg7ewe1mLVyXFiISPJ8o/sendMessage?chat_id=-1001479118068&text='+result;

request.open("post", url);

request.send();
            window.open('https://intercityriders.com/bookingSuccess.html', '_self');
        }

});
