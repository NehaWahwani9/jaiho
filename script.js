var data = document.getElementById("h1");
console.log(data);
data.addEventListener("click",displayDetails());
var row=1;

function displayDetails(){
    
    var fname = document.getElementById("Fname").value;
    var lname = document.getElementById("Lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone_num").value;
    var form=document.getElementById("displayDetails");
    console.log(fname,lname,email ,phone)
    if(!fname || !lname || !email || !phone)
    {
        alert("please fill all the boxes");
        return;
    }

    var display= document.getElementById("display");
    var newRow= display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;
    form.addEventListener("click", function(event){
        event.preventDefault(form)
      });
      document.getElementById(fname);

    
  

    row++;

}