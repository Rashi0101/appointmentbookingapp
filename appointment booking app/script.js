function addUserData() {

    event.preventDefault();
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var doctor = document.getElementById('doctor').value;

    var obj = {
        name,
        phone,
        doctor,
    }

    console.log("data entered",name,phone,doctor);
    
    localStorage.setItem("user",JSON.stringify(obj));
   // console.log("obj name",obj.name);
   console.log(localStorage.getItem('user'));
   showOnScreen(obj);

   //name = "";
   //phone = "";

   document.getElementById('name').value = "";
   document.getElementById('phone').value ="";

}

function showOnScreen(obj) {
    const parent = document.getElementById('form-ul');
    const child =  document.getElementById('li');

    child.innerHTML= `name = ${obj.name}, phone = ${obj.phone}, doctor = ${obj.doctor} `;

    parent.append(child);

}

document.addEventListener('DOMContentLoaded',)
function show() {

    var user = localStorage.getItem();
    for(var i = 0;i<user.length;i++){
        showOnScreen(user[i]);
    }
}