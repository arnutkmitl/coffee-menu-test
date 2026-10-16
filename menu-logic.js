// ฟังก์ชันจัดการรายการเมนูที่ไม่ยุ่งกับหน้าเว็บ แยกไว้เพื่อให้ทดสอบอัตโนมัติได้

function filterMenu(items, category) {
  if (category === "ทั้งหมด") {
    return items;
  }
  return items.filter((item) => item.category === category);
}

function sortItemsByPrice(items) {
  return [...items].sort((a, b) => a.price - b.price);
}

function addToCart(cart, item) {
  return [...cart, item];
}

function cartSummary(cart) {
  const total = cart.map((item) => item.price).reduce((a, b) => a + b, 0);
  return { count: cart.length, total };
}

// ให้ Node.js เรียกใช้ได้ตอนทดสอบ เบราว์เซอร์จะข้ามส่วนนี้
if (typeof module !== "undefined") {
  module.exports = { filterMenu, sortItemsByPrice, addToCart, cartSummary };
}
