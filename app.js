const menu = [
  { name: "เอสเปรสโซ", price: 45, desc: "ช็อตเข้ม คั่วกลาง", category: "กาแฟ" },
  { name: "ลาเต้", price: 60, desc: "นมสดโฮลมิลค์ ช็อตคู่", category: "กาแฟ" },
  { name: "คาปูชิโน", price: 55, desc: "ฟองนมหนา โรยผงโกโก้", category: "กาแฟ" },
  { name: "อเมริกาโน่", price: 50, desc: "เอสเปรสโซเติมน้ำร้อน", category: "กาแฟ" },
  { name: "มอคค่า", price: 60, desc: "เอสเปรสโซ ช็อกโกแลต นมสด", category: "กาแฟ" },
  { name: "ชาไทย", price: 40, desc: "ชาไทยสูตรร้าน หวานน้อยได้", category: "ชา" },
  { name: "ครัวซองต์", price: 45, desc: "เนยสด อบใหม่ทุกเช้า", category: "ขนม" },
  { name: "บราวนี่", price: 60, desc: "ช็อกโกแลตเข้มข้น", category: "ขนม" }
];

function renderMenu(items) {
  const list = document.getElementById("menu-list");
  list.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.name}<small>${item.desc}</small></span><span>${item.price} บาท</span>`;
    list.appendChild(li);
  }
}

let shownItems = menu;

function sortByPrice() {
  renderMenu(sortItemsByPrice(shownItems));
}

for (const btn of document.querySelectorAll("#filters button")) {
  btn.addEventListener("click", () => {
    shownItems = filterMenu(menu, btn.dataset.category);
    renderMenu(shownItems);
  });
}

document.getElementById("sort-btn").addEventListener("click", sortByPrice);
renderMenu(menu);

document.getElementById("theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
