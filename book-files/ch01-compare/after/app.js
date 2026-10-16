const menu = [
  { name: "เอสเปรสโซ", price: 45 },
  { name: "ลาเต้", price: 55 },
  { name: "คาปูชิโน", price: 55 },
  { name: "อเมริกาโน่", price: 50 },
  { name: "ชาไทย", price: 40 }
];

function renderMenu(items) {
  const list = document.getElementById("menu-list");
  list.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.name}</span><span>${item.price} บาท</span>`;
    list.appendChild(li);
  }
}

function sortMenuByPrice() {
  const sorted = [...menu].sort((a, b) => a.price - b.price);
  renderMenu(sorted);
}

document.getElementById("sort-btn").addEventListener("click", sortByPrice);
renderMenu(menu);
