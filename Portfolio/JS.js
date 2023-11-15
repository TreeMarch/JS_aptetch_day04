function validDateForm(){
  const name = document.getElementById("username").value;

  if (name.lenght < 4){
    document.getElementById("nameError").innerText = "Your name must be more 4 characters";
    return false;
  }else{
    document.getElementById("nameError").innerText = "";
  }
}
return true();