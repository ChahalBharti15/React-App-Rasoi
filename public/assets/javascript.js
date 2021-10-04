 window.addEventListener('scroll',function(){
   const header=this.document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY >0);
}); 

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("First Name is required");
    return false;
  }

  {
    let x = document.forms["myForm"]["lname"].value;
    if (x == "") {
      alert("Last Name is required");
      return false;
    }

  {
        let x = document.forms["myForm"]["message"].value;
        if (x == "") {
          alert("Message is required");
          return false;
        }
}
}
}



//Login button coding//
