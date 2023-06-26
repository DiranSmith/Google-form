function displayData() {
  const comp = document.querySelector("#username").value;
  const mail = document.querySelector("#email").value;

  const header = document.querySelector("h1");
  const paragraph = document.querySelector("p");

  {
    header.innerHTML = `Thank you ` + comp;
    paragraph.innerHTML = `we will get to you through ` + mail;
  }
}
const clickButton = document.querySelector("#submit");
clickButton.addEventListener("click", displayData);
