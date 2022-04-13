/*Name: Harkirat Singh Kohli
        StudentID: 145039202
        email-id- hskohli2@myseneca.ca
        Date: 10/04/2022
        Professor: Muath Alzhool
*/
window.onload = function () {
  let form = document.querySelector("#contact");

  form.onsubmit = function (event) {
    // validating the input
    if (!form.checkValidity()) {
      // checking missing field
      form.classList.add("was-validated");

      // till all input area is correct

      event.preventDefault();
      return false;
    }
    return true;
  };
};

function show() {
  if (document.getElementById("rate").classList.contains("hide"))
    document.getElementById("rate").classList.remove("hide");
  if (document.getElementById("comment").required == false)
    document.getElementById("comment").required = true;
}

function hide() {
  if (!document.getElementById("rate").classList.contains("hide"))
    document.getElementById("rate").classList.add("hide");
  if (document.getElementById("comment").required == true)
    document.getElementById("comment").required = false;
  document.getElementById("comment").value = "";
}
