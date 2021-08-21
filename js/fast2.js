 
function testVariable() {
    var strText = document.getElementById("name").value;
    var strText1 = document.getElementById("p").value;
    var strText2 = document.getElementById("location-1").value;
    var strText3 = document.getElementById("location-2").value;
    var strText4 = document.getElementById("pickupdate").value;
    var strText6 = document.getElementById("pickuptime").value;
    var strText7 = document.getElementById("cars").value;
    var strText8 = document.getElementById("ser").value;
    var rate=0;

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
	
    var result = 'Booking from a1droptaxi.in' + '%0ACustomer Name:  ' + strText + '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + strText7+"%0APrice:"+rate;
    var result1 = 'Booking from a1droptaxi.in' + '<br/>Customer Name:  ' + strText + '<br/>Phone Number: ' + strText1 +'<br/>Pickup Location: ' + strText2+  '<br/>Drop Location: ' + strText3 + '<br/>Pickup Date: ' + strText4 + '<br/>Pickup Time: ' + strText6 +'<br/>Service: ' + strText8 + '<br/>Cars: ' + strText7+"<br/>Price:"+rate;
var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
e.preventDefault();
if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6=="")
        {
        console.log('error');
        }else
        {
            console.log("Message sending");
		                    Email.send({
                Host:"smtp.gmail.com",
                Username:'a1droptaxi@gmail.com',
                Password:'ymzddwclokgpomla',
                To: 'thereciprocalsolutions@gmail.com',
                From: 'a1droptaxi@gmail.com',
                Subject: 'New Enquiry From '+strText,
                Body:'The New Enquriy Details'+result1+'<br/>',
                }).then((message)=>setTimeout(function(){ window.open('https://a1droptaxi.in/bc.html', '_self'); }, 100));
                
        }
});
} 
