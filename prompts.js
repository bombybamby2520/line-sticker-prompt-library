// ===== แก้ตรงนี้ได้ =====
// ข้อความที่จะต่อหน้า/ท้ายทุก prompt ตอนกดคัดลอก
// ถ้าไม่ต้องการ ให้เปลี่ยนเป็น "" (ว่าง)
const PREFIX = "";
const SUFFIX = "";

// ตัวช่วยจัดระยะข้อความ (ใช้ร่วมกับ animate-prompts.js ด้วย ต้องโหลดไฟล์นี้ก่อนเสมอ)
function dedent(str) {
  const lines = str
    .replace(/^\n/, "")
    .replace(/\n[ \t]*$/, "")
    .split("\n");

  const indents = lines
    .filter((l) => l.trim())
    .map((l) => l.match(/^[ \t]*/)[0].length);

  const min = indents.length ? Math.min(...indents) : 0;

  return lines.map((l) => l.slice(min)).join("\n");
}

const PROMPTS = [
  // Image 01
  {
    title: "ใส่หูฟัง + ถือแก้วกาแฟ",

    guide: {
      th: dedent(`
      ยืนลำตัวหันเฉียงเล็กน้อย ศีรษะเอียงและหันไปด้านข้าง สายตามองเฉียงไปทางขวา ยิ้มอ่อน ๆ เผยให้เห็นฟันเล็กน้อย สื่ออารมณ์สดใสผ่อนคลาย
      แขนข้างหนึ่งยกขึ้นงอศอก มือจับสายกระเป๋าบริเวณไหล่ อีกแขนยกขึ้นงอศอก มือถือแก้วกาแฟไว้ระดับอก สะพายกระเป๋าข้างลำตัวและสวมใส่หูฟังครอบหู
    `),
      en: dedent(`
      Standing with the body slightly angled, head tilted and turned to the side, eyes looking diagonally to the right, soft smile with slightly visible teeth, conveying a cheerful and relaxed mood
      One arm raised and bent at the elbow, hand holding the bag strap near the shoulder, the other arm raised and bent at the elbow, holding a coffee cup at chest level, carrying a shoulder bag at the side and wearing over-ear headphones
    `),
    },

    details: {
      th: dedent(`
      - กระเป๋าสะพายใบใหญ่สีดำทรง Tote ผิวหนังมันเงา
      - หูฟังครอบหูสีครีม
      - แก้วกาแฟแบบ To-Go สีครีม ฝาสีขาว มีคำว่า LATTE
    `),
      en: dedent(`
      - Large black tote bag with a glossy leather finish
      - Cream over-ear headphones
      - Cream takeaway coffee cup with a white lid and the word LATTE
    `),
    },
  },

  // Image 02
  {
    title: "หันมายิ้ม + ถือกาแฟ",

    guide: {
      th: dedent(`
      ยืนลำตัวหันเฉียงไปด้านข้าง หันศีรษะกลับมาทางกล้องและเอียงเล็กน้อย สายตามองกล้อง ยิ้มอ่อน ๆ อย่างขี้เล่น
      แขนทั้งสองยกขึ้นงอศอก มือทั้งสองประคองแก้วกาแฟไว้ใกล้ระดับอก
    `),
      en: dedent(`
      Standing with the body turned sideways, head turned back toward the camera and tilted slightly, eyes looking at the camera, giving a gentle and playful smile
      Both arms raised and bent at the elbows, both hands holding a coffee cup near chest level
    `),
    },

    details: {
      th: dedent(`
      - แก้วกาแฟแบบ To-Go สีน้ำตาลอ่อน ฝาสีดำ
    `),
      en: dedent(`
      - Light brown takeaway coffee cup with a black lid
    `),
    },
  },

  // Image 03
  {
    title: "ตาเหล่ขี้เล่น",

    guide: {
      th: dedent(`
      ลำตัวหันตรงมาด้านหน้า ศีรษะเอียงเล็กน้อย ดวงตาทั้งสองข้างเบนเข้าหากัน มองเข้าหาสันจมูกอย่างชัดเจน เกิดเป็นท่าตาเหล่ ยิ้มมุมปากอย่างซุกซนและขี้เล่น
      แขนทั้งสองทอดลงด้านหน้า มือประสานกันไว้บริเวณหน้าตัก
    `),
      en: dedent(`
      Body facing forward, head tilted slightly, both eyes turned inward toward the bridge of the nose, creating a clearly cross-eyed expression, with a mischievous and playful smirk
      Both arms lowered in front, hands clasped together near the lap
    `),
    },

    details: {
      th: dedent(`

    `),
      en: dedent(`

    `),
    },
  },

  // Image 04
  {
    title: "สุขสันต์วันเกิด",

    guide: {
      th: dedent(`
      ยืนลำตัวหันตรงมาด้านหน้า ศีรษะเอียงเล็กน้อย สายตามองกล้อง ยิ้มหวานอย่างมีความสุข
      แขนทั้งสองยื่นไปด้านหน้า งอศอกเล็กน้อย มือทั้งสองรองรับจานที่มีเค้กวันเกิดไว้บริเวณระดับเอวถึงหน้าอก
    `),
      en: dedent(`
      Standing with the body facing forward, head slightly tilted, eyes looking at the camera, smiling sweetly with happiness
      Both arms extended forward with elbows slightly bent, both hands supporting a plate at waist-to-chest level
    `),
    },

    details: {
      th: dedent(`
      - เค้กช็อกโกแลตทรงกลม ราดช็อกโกแลต ตกแต่งด้วยสตรอว์เบอร์รี ครีมบีบ และเทียนสีชมพูที่จุดไฟแล้ว
      - จานกลมสีขาว
    `),
      en: dedent(`
      - Round chocolate cake with chocolate ganache, strawberries, piped cream decorations, and a lit pink candle
      - White round plate
    `),
    },
  },

  // Image 05
  {
    title: "กระเป๋าว่างเปล่า",

    guide: {
      th: dedent(`
      ก้มศีรษะลงเล็กน้อย สายตามองลงด้านล่าง คิ้วขมวดเล็กน้อย ริมฝีปากเม้ม สื่ออารมณ์ผิดหวังและกังวล
      มือข้างหนึ่งวางบนฝากระเป๋าที่เปิดอ้า อีกแขนงอศอกยื่นมาด้านหน้า หงายฝ่ามือขึ้นใต้กระเป๋า ราวกับกำลังตรวจดูว่ามีอะไรอยู่ข้างใน
    `),
      en: dedent(`
      Head lowered slightly, eyes looking downward, brows slightly furrowed and lips pursed, conveying disappointment and concern
      One hand resting on the open purse flap, the other arm bent at the elbow and extended forward, palm facing upward beneath the purse, as if checking whether anything is inside
    `),
    },

    details: {
      th: dedent(`
      - กระเป๋าใส่เหรียญสีน้ำตาล ผิวสัมผัสคล้ายหนัง กรอบปากกระเป๋าโลหะสีทองแบบวินเทจ ภายในสีเข้ม
    `),
      en: dedent(`
      - Brown coin purse with a leather-like texture, vintage gold-tone metal kiss-lock frame, and dark interior
    `),
    },
  },

  // Image 06
  {
    title: "อมลูกอม",

    guide: {
      th: dedent(`
      ลำตัวหันตรงมาด้านหน้า ศีรษะเอียงเล็กน้อย สายตามองกล้อง อ้าปากเล็กน้อย แลบลิ้นแตะลูกอม ยิ้มอย่างซุกซนและขี้เล่น
      แขนข้างหนึ่งยกขึ้นงอศอก มือจับก้านลูกอมไว้ใกล้ปาก ส่วนอีกแขนทอดลงด้านหน้า
    `),
      en: dedent(`
      Body facing forward, head tilted slightly, eyes looking at the camera, mouth slightly open with the tongue touching a lollipop, giving a mischievous and playful expression
      One arm raised and bent at the elbow, hand holding the lollipop stick near the mouth, while the other arm rests down in front
    `),
    },

    details: {
      th: dedent(`
      - ลูกอมอมยิ้มทรงกลมลายเกลียวหลากสี มีด้ามสีขาว
    `),
      en: dedent(`
      - Round multicolored swirled lollipop with a white stick
    `),
    },
  },

  // Image 07
  {
    title: "เบื่อแล้ว",

    guide: {
      th: dedent(`
      ลำตัวหันตรงมาด้านหน้า ศีรษะเอียงเล็กน้อย สายตาเหลือบขึ้นด้านบน คิ้วขมวดเล็กน้อย ริมฝีปากยื่นและเม้ม สื่ออารมณ์เบื่อหน่ายและไม่พอใจ
      แขนทั้งสองพับไขว้กันแน่นบริเวณหน้าอก
    `),
      en: dedent(`
      Body facing forward, head tilted slightly, eyes rolling upward, brows slightly furrowed, lips pouting and pursed, conveying boredom and displeasure
      Both arms folded tightly across the chest
    `),
    },

    details: {
      th: dedent(`

    `),
      en: dedent(`

    `),
    },
  },

  // Image 08
  {
    title: "รับลมสดชื่น",

    guide: {
      th: dedent(`
      เงยหน้าขึ้นเล็กน้อย หลับตาพริ้ม ยิ้มกว้างอย่างมีความสุข สื่ออารมณ์สดชื่นและผ่อนคลาย
      แขนทั้งสองยกขึ้นงอศอก มือทั้งสองจับด้ามกังหันลมไว้บริเวณหน้าอก ประคองกังหันไว้ด้านข้างใบหน้า
    `),
      en: dedent(`
      Head raised slightly, eyes gently closed, smiling broadly with happiness, conveying a refreshed and relaxed mood
      Both arms raised and bent at the elbows, both hands holding the pinwheel stick near the chest, keeping the pinwheel beside the face
    `),
    },

    details: {
      th: dedent(`
      - กังหันลมใบพัดสีรุ้งหลายสี ด้ามจับไม้ มีตุ๊กตาหมีตัวเล็กประดับอยู่ตรงกลาง
    `),
      en: dedent(`
      - Rainbow multicolored pinwheel with a wooden stick and a small teddy bear decoration in the center
    `),
    },
  },

  // Image 09
  {
    title: "งอนแล้วนะ",

    guide: {
      th: dedent(`
      ลำตัวหันตรงมาด้านหน้า คางเชิดขึ้นเล็กน้อย สายตามองขึ้นด้านบน คิ้วขมวด ริมฝีปากยื่น สื่ออารมณ์งอนและไม่พอใจ
      แขนทั้งสองพับไขว้กันแน่นบริเวณหน้าอก
    `),
      en: dedent(`
      Body facing forward, chin slightly raised, eyes looking upward, brows furrowed and lips pouting, conveying a sulky and displeased mood
      Both arms folded tightly across the chest
    `),
    },

    details: {
      th: dedent(`

    `),
      en: dedent(`

    `),
    },
  },

  // Image 10
  {
    title: "เขินอาย",

    guide: {
      th: dedent(`
      ลำตัวหันตรงมาด้านหน้า ศีรษะเอียงไปด้านข้างเล็กน้อย สายตาเหลือบมองขึ้นด้านข้าง ยิ้มอ่อน ๆ อย่างเขินอาย
      แขนทั้งสองทอดลงด้านหน้า มือประสานกันไว้บริเวณหน้าตัก
    `),
      en: dedent(`
      Body facing forward, head tilted slightly to the side, eyes glancing upward and sideways, giving a gentle and shy smile
      Both arms lowered in front, hands clasped together near the lap
    `),
    },

    details: {
      th: dedent(`

    `),
      en: dedent(`
  
    `),
    },
  },
];
