function printOTP(){
    
    
    function getRandomItem(arr) {


        var digits = '0123456789'; 
        let OTP = ''; 
        for (let i = 0; i < 4; i++ ) { 
            OTP += digits[Math.floor(Math.random() * 10)]; 
        } 
        return OTP; 
    
        
    }
    const num = new Array(
       1,2,3,4,5,6,7,8,9,0
    );
    const result = getRandomItem(num);
    document.getElementById("output").innerHTML=result;
        getRandomItem();
     
}


