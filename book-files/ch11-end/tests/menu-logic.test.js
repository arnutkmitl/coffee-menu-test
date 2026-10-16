const test = require("node:test");
const assert = require("node:assert");
const { filterMenu, sortItemsByPrice } = require("../menu-logic.js");

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
