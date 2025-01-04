let count = 0;
flag = 0;
const offerBtn = document.getElementById("offer");
const goToSection = document.getElementById("paribahan");
const nextBtn = document.getElementById("next-btn");
const allBtn = document.getElementsByClassName("seat-btn");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const info = document.getElementById("name");
const applyBtn = document.getElementById("apply-btn");
const cuponContainer = document.getElementById("cupon-container");

// scroll section

offerBtn.addEventListener("click", function () {
  goToSection.scrollIntoView({ behavior: "smooth" });
});

// next button

document.getElementById("phone").addEventListener("keyup", function (event) {
  const phoneNumber = event.target.value;
  if (flag > 0 && phoneNumber.length === 11) {
    nextBtn.removeAttribute("disabled");
  }
});

function setInner() {
  info.value = "";
  phone.value = "";
  email.value = "";
  flag = 0;
  nextBtn.setAttribute("disabled", true);
}

// apply button

document.getElementById("apply-btn").addEventListener("click", function () {
  const cupon = document.getElementById("cupon-code").value;
  const currentTotal = getValueById("total-price");
  const discount = document.getElementById("discount");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  if (cupon === "NEW15") {
    const bonus = currentTotal * 0.15;
    const grandTotal = currentTotal - bonus;
    setValueById("grand-total", grandTotal);
    p1.innerText = "Discount";
    p2.innerText = "BDT " + bonus;
    discount.appendChild(p1);
    discount.appendChild(p2);
    cuponContainer.classList.add("hidden");
  } else if (cupon === "Couple 20") {
    const bonus = currentTotal * 0.2;
    const grandTotal = currentTotal - bonus;
    setValueById("grand-total", grandTotal);
    p1.innerText = "Discount";
    p2.innerText = "BDT " + bonus;
    discount.appendChild(p1);
    discount.appendChild(p2);
    cuponContainer.classList.add("hidden");
  } else {
    alert("Invalid Cupon! Please enter valid cupon");
  }
});

// main code

for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    count++;
    flag++;
    if (count === 4) {
      applyBtn.removeAttribute("disabled");
    }
    if (count > 4) {
      alert("You have cross the limits & booked seat at most 4");
      return;
    }
    const selectedBtn = event.target;
    selectedBtn.setAttribute("disabled", true);
    selectedBtn.classList.remove("hover:bg-slate-400");
    selectedBtn.classList.add("bg-primary");
    selectedBtn.classList.add("text-white");
    const currentTotal = getValueById("total-price");
    const ticketPrice = getValueById("seat-price");
    const seatLeft = getValueById("seat-left");
    const newSeatLeft = seatLeft - 1;
    const seatAdd = getValueById("seat-add");
    const newSeatAdd = seatAdd + 1;
    const newTotal = currentTotal + ticketPrice;
    setValueById("total-price", newTotal);
    setValueById("grand-total", newTotal);
    setValueById("seat-left", newSeatLeft);
    setValueById("seat-add", newSeatAdd);
    const parent = document.getElementById("seat-info");
    const mainContent = document.createElement("div");
    mainContent.classList.add("flex", "justify-between");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = event.target.innerText;
    p2.innerText = "Economy";
    p3.innerText = 550;
    mainContent.appendChild(p1);
    mainContent.appendChild(p2);
    mainContent.appendChild(p3);
    parent.appendChild(mainContent);
    const phoneNumber = document.getElementById("phone").value;
    if (flag > 0 && phoneNumber.length === 11) {
      nextBtn.removeAttribute("disabled");
    }
  });
}
