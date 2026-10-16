const menu = [
  { name: "เอสเปรสโซ", price: 45, desc: "ช็อตเข้ม คั่วกลาง" },
  { name: "ลาเต้", price: 55, desc: "นมสดเนียนนุ่ม" },
  { name: "คาปูชิโน", price: 55, desc: "ฟองนมหนา โรยผงโกโก้" },
  { name: "อเมริกาโน่", price: 50, desc: "เอสเปรสโซเติมน้ำร้อน" },
  { name: "ชาไทย", price: 40, desc: "ชาไทยสูตรร้าน หวานน้อยได้" }
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

function sortByPrice() {
  const sorted = [...menu].sort((a, b) => a.price - b.price);
  renderMenu(sorted);
}

document.getElementById("sort-btn").addEventListener("click", sortByPrice);
renderMenu(menu);
