// fill in javascript code here

let submit_btn = document.querySelector("form");
submit_btn.addEventListener("submit", myFun);

function myFun(event) {
  event.preventDefault();

  let doc_Name = document.getElementById("name").value;
  let doc_Id = document.getElementById("docID").value;
  let doc_Spec = document.getElementById("dept").value;
  let doc_Exp = document.getElementById("exp").value;
  let doc_Email = document.getElementById("email").value;
  let doc_Mobile = document.getElementById("mbl").value;

  //   Creating table Row by Javascript
  let tRow = document.createElement("tr");

  // Creating Row column inside this Row
  let td1 = document.createElement("td");
  td1.innerText = doc_Name;

  let td2 = document.createElement("td");
  td2.innerText = doc_Id;

  let td3 = document.createElement("td");
  td3.innerText = doc_Spec;

  let td4 = document.createElement("td");
  td4.innerText = doc_Exp;

  let td5 = document.createElement("td");
  td5.innerText = doc_Email;

  let td6 = document.createElement("td");
  td6.innerText = doc_Mobile;

  let td7 = document.createElement("td");
  let td8 = document.createElement("td");
  td8.innerText = "Delete";
  td8.style.backgroundColor = "red";

  // Giving Functionality to Role
  if (doc_Exp > 5) {
    td7.innerText = "Senior";
  } else if (doc_Exp > 2 && doc_Exp < 5) {
    td7.innerText = "Junior";
  } else {
    td7.innerText = "Trainee";
  }

  // Now Appending All the td inside the tr
  tRow.append(td1, td2, td3, td4, td5, td6, td7, td8);
  let tBody = document.querySelector("tbody");
  tBody.append(tRow);

  //  Giving Functionality to Delete Button
  td8.addEventListener("click", myDel);
}

function myDel(event) {
  event.target.parentNode.remove();
}
