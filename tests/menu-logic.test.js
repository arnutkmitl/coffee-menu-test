const test = require("node:test");
const assert = require("node:assert");
const { filterMenu, sortItemsByPrice, addToCart, cartSummary } = require("../menu-logic.js");

const sample = [
  { name: "ลาเต้", price: 60, category: "กาแฟ" },
  { name: "ชาไทย", price: 40, category: "ชา" },
  { name: "เอสเปรสโซ", price: 45, category: "กาแฟ" },
  { name: "บราวนี่", price: 60, category: "ขนม" }
];

test("กรองหมวดกาแฟ ได้เฉพาะเมนูกาแฟ", () => {
  const result = filterMenu(sample, "กาแฟ");
  assert.deepStrictEqual(result.map((item) => item.name), ["ลาเต้", "เอสเปรสโซ"]);
});

test("หมวดทั้งหมด ได้ครบทุกรายการ", () => {
  assert.strictEqual(filterMenu(sample, "ทั้งหมด").length, 4);
});

test("หมวดที่ไม่มีเมนู ได้รายการว่าง", () => {
  assert.deepStrictEqual(filterMenu(sample, "ผลไม้"), []);
});

test("เรียงตามราคา จากน้อยไปมาก", () => {
  const prices = sortItemsByPrice(sample).map((item) => item.price);
  assert.deepStrictEqual(prices, [40, 45, 60, 60]);
});

test("เรียงตามราคา ไม่แก้ลำดับของรายการเดิม", () => {
  sortItemsByPrice(sample);
  assert.strictEqual(sample[0].name, "ลาเต้");
});

test("เพิ่มลงตะกร้า ไม่แก้ตะกร้าเดิม", () => {
  const cart = [];
  const newCart = addToCart(cart, sample[0]);
  assert.strictEqual(cart.length, 0);
  assert.strictEqual(newCart.length, 1);
});

test("สรุปตะกร้า นับจำนวนและรวมราคา", () => {
  const cart = addToCart(addToCart([], sample[0]), sample[1]);
  assert.deepStrictEqual(cartSummary(cart), { count: 2, total: 100 });
});

test("สรุปตะกร้าว่าง ได้ 0 รายการ 0 บาท", () => {
  assert.deepStrictEqual(cartSummary([]), { count: 0, total: 0 });
});
