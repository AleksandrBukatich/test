for (let day = 1; day <= 31; day++) {
	let options = document.createElement("OPTION");
	document.getElementById("day").appendChild(options).innerHTML = day;
  }

for (let year = 1920; year <= 2023; year++) {
	let options = document.createElement("OPTION");
	document.getElementById("year").appendChild(options).innerHTML = year;
  }


  function validate(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
    }
}

