
const tabs = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");


tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");

    panels.forEach(panel => panel.classList.remove("active"));
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});




function updateTableOnly() {
  document.querySelectorAll(".shopping-cart table tr").forEach((row, i) => {
    if (i === 0) return; 
    let price = +row.querySelector(".price").innerText;
    let qty = +row.querySelector(".num").innerText;
    let subtotal = price * qty;
    row.querySelector(".subtotal").innerText = subtotal;
  });
}

document.querySelectorAll(".shopping-cart .qty").forEach(qtyBox => {
  let dec = qtyBox.querySelector(".dec");
  let inc = qtyBox.querySelector(".inc");
  let num = qtyBox.querySelector(".num");

  dec.onclick = () => {
    let val = +num.innerText;
    if (val > 1) {
      num.innerText = val - 1;
      updateTableOnly();
    }
  };
  inc.onclick = () => {
    num.innerText = +num.innerText + 1;
    updateTableOnly();
  };
});

updateTableOnly();





// Barcha modal tugmalarini olish
document.querySelectorAll(".btn-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    document.getElementById(target).classList.add("opened");
  });
});

// Har bir overlay uchun yopish funksiyasi
document.querySelectorAll(".overlay-modal").forEach(overlay => {
  const closeBtn = overlay.querySelector(".close-btn");
  
  // Yopish tugmasi bosilganda
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("opened");
  });

  // Overlay foniga bosilganda yopilsin
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("opened");
    }
  });
});

