// ===== แก้ตรงนี้ได้ =====
// ข้อความที่จะต่อหน้า/ท้ายทุก prompt ตอนกดคัดลอก
// ถ้าไม่ต้องการ ให้เปลี่ยนเป็น "" (ว่าง)
const PREFIX = "";
const SUFFIX = "";

// ตัวช่วยจัดระยะข้อความ
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
    title: "ยิ้มถือแก้ว",
    guide: {
      th: dedent(`
        นั่งขัดสมาธิบนพื้น ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มอ่อน ๆ ริมฝีปากปิดเล็กน้อย สื่ออารมณ์อบอุ่น
        แขนขวายกขึ้นงอศอก ประคองแก้วไว้ระดับอก
        แขนซ้ายทอดลงต่ำ ฝ่ามือวางพักบนตัก
        ขาทั้งสองข้างพับขัดสมาธิ
      `),
      en: dedent(`
        Sitting cross-legged on the floor, body facing forward, shoulders relaxed
        Head upright, eyes looking straight at the camera
        Soft gentle smile, lips slightly closed, warm expression
        Right arm raised and bent at the elbow, holding the cup at chest level
        Left arm resting down, palm resting on the lap
        Both legs folded cross-legged
      `),
    },
    details: {
      th: dedent(`
        - แก้วสีฟ้าลายหัวใจ
        - นั่งบนพื้น
      `),
      en: dedent(`
        - Blue cup with a heart pattern
        - Sitting on the floor
      `),
    },
  },

  // Image 02
  {
    title: "น้ำตาคลอ",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ห่อเล็กน้อย
        ศีรษะก้มลงเล็กน้อย สายตามองต่ำ
        สีหน้าเศร้า คิ้วขมวดเล็กน้อย น้ำตาคลอที่หางตา ริมฝีปากเม้ม
        แขนขวายกขึ้น ฝ่ามือวางแนบที่อก
        แขนซ้ายทอดลงข้างลำตัว
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders slightly hunched
        Head tilted slightly down, eyes looking low
        Sad expression, eyebrows slightly furrowed, tears welling at the corners of the eyes, lips pressed together
        Right arm raised, palm resting against the chest
        Left arm hanging down at the side
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 03
  {
    title: "ทำมือหัวใจ",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มหวาน ริมฝีปากปิด สื่ออารมณ์อบอุ่น
        แขนทั้งสองยกขึ้นงอศอก ปลายนิ้วโป้งและนิ้วชี้ประกบกันเหนืออกเป็นรูปหัวใจ
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking straight at the camera
        Sweet smile, lips closed, warm expression
        Both arms raised and bent at the elbows, thumbs and index fingers touching above the chest to form a heart shape
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
    title: "นั่งเหม่อ",
    guide: {
      th: dedent(`
        นั่งพับขาบนพื้น ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองขึ้นข้างบนเล็กน้อย
        สีหน้าเหม่อลอย ริมฝีปากปิด สื่ออารมณ์ครุ่นคิด
        แขนทั้งสองทอดลงต่ำ ประสานมือกันบนตัก
        ขาทั้งสองข้างพับราบ
      `),
      en: dedent(`
        Sitting with legs folded on the floor, body facing forward, shoulders relaxed
        Head upright, eyes looking slightly upward
        Absent-minded, distant expression, lips closed, pensive mood
        Both arms resting down, hands clasped together on the lap
        Both legs folded flat
      `),
    },
    details: {
      th: dedent(`
        - นั่งบนพื้น
      `),
      en: dedent(`
        - Sitting on the floor
      `),
    },
  },

  // Image 05
  {
    title: "ฝนตกในใจ",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ห่อเล็กน้อย
        ศีรษะก้มลงเล็กน้อย สายตามองต่ำ
        สีหน้าเศร้าหมอง คิ้วขมวด น้ำตาคลอ ริมฝีปากเม้ม
        แขนทั้งสองทอดลงต่ำ ประสานมือกันไว้ด้านหน้า
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders slightly hunched
        Head tilted slightly down, eyes looking low
        Gloomy, sorrowful expression, eyebrows furrowed, tears welling, lips pressed together
        Both arms resting down, hands clasped together in front
      `),
    },
    details: {
      th: dedent(`
        - เมฆฝนลอยอยู่เหนือศีรษะ
      `),
      en: dedent(`
        - A rain cloud floating above the head
      `),
    },
  },

  // Image 06
  {
    title: "ชูสองนิ้ว",
    guide: {
      th: dedent(`
        ยืนเอียงตัวเล็กน้อย ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มทะเล้น ริมฝีปาก puckered
        แขนขวายกขึ้นงอศอก ชูสองนิ้วแนบข้างแก้ม
        แขนซ้ายทอดลงข้างลำตัว
      `),
      en: dedent(`
        Standing with a slight lean, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking straight at the camera
        Playful, mischievous smile, lips puckered
        Right arm raised and bent at the elbow, making a peace sign next to the cheek
        Left arm hanging down at the side
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 07
  {
    title: "นั่ง stools",
    guide: {
      th: dedent(`
        นั่งตัวตรงบน stools เตี้ย ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้าเรียบเฉย ริมฝีปากปิด สื่ออารมณ์สงบ
        แขนทั้งสองทอดลงต่ำ วางมือพักบนตัก
        ขาทั้งสองข้างวางชิดกัน
      `),
      en: dedent(`
        Sitting upright on a low stool, body facing forward, shoulders relaxed
        Head upright, eyes looking straight at the camera
        Neutral expression, lips closed, calm mood
        Both arms resting down, hands resting on the lap
        Both legs placed close together
      `),
    },
    details: {
      th: dedent(`
        - นั่งบน stools เตี้ย ไม้
      `),
      en: dedent(`
        - Sitting on a low wooden stool
      `),
    },
  },

  // Image 08
  {
    title: "กอดตุ๊กตาหมี",
    guide: {
      th: dedent(`
        นั่งพับขาบนพื้น ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มอ่อนโยน ริมฝีปากปิด สื่ออารมณ์อบอุ่น
        แขนทั้งสองโอบกอดตุ๊กตาไว้แนบอก
        ขาทั้งสองข้างพับราบ
      `),
      en: dedent(`
        Sitting with legs folded on the floor, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking straight at the camera
        Gentle smile, lips closed, warm expression
        Both arms hugging the teddy bear close to the chest
        Both legs folded flat
      `),
    },
    details: {
      th: dedent(`
        - ตุ๊กตาหมีสีน้ำตาลผูกโบว์ลายตาราง
        - นั่งบนพรมปุยสีครีม
        - ชุดน้ำชาและคุกกี้วางอยู่ข้าง ๆ
      `),
      en: dedent(`
        - Brown teddy bear with a checkered bow
        - Sitting on a fluffy cream-colored rug
        - A tea set and cookies placed nearby
      `),
    },
  },

  // Image 09
  {
    title: "มือลูบผม",
    guide: {
      th: dedent(`
        ยืนเอียงตัวเล็กน้อย ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองเฉียงไปด้านข้าง
        สีหน้ายิ้มเขิน ๆ ริมฝีปากปิด สื่ออารมณ์ประหม่าเล็กน้อย
        แขนซ้ายยกขึ้นงอศอก มือลูบผมข้างหู
        แขนขวาทอดลงต่ำ มือใส่กระเป๋ากางเกง
      `),
      en: dedent(`
        Standing with a slight lean, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking off to the side
        Shy smile, lips closed, slightly nervous expression
        Left arm raised and bent at the elbow, hand brushing hair near the ear
        Right arm resting down, hand in the pants pocket
      `),
    },
    details: {
      th: dedent(`
        - กระเป๋าสะพายสีดำ
      `),
      en: dedent(`
        - Black shoulder bag
      `),
    },
  },

  // Image 10
  {
    title: "จิบกาแฟกับแมว",
    guide: {
      th: dedent(`
        นั่งเอนหลังบนเบาะ ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มอ่อนโยน ริมฝีปากปิด สื่ออารมณ์สงบและอบอุ่น
        แขนขวายกขึ้นงอศอก ประคองแก้วไว้ระดับอก
        แขนซ้ายทอดลงต่ำ ฝ่ามือวางบนหัวแมวเบา ๆ
        ขาทั้งสองข้างพักผ่อนตามธรรมชาติ
      `),
      en: dedent(`
        Sitting reclined on a cushion, body facing forward, shoulders relaxed
        Head upright, eyes looking straight at the camera
        Gentle smile, lips closed, calm and warm expression
        Right arm raised and bent at the elbow, holding the cup at chest level
        Left arm resting down, palm gently placed on the cat's head
        Both legs relaxed naturally
      `),
    },
    details: {
      th: dedent(`
        - แก้วกาแฟลายหน้าแมว มี latte art รูปหัวใจ
        - แมวสีส้มลาย Tabby นอนขดบนตัก หลับตาพริ้ม
        - นั่งบนเบาะถั่วสีชมพู
      `),
      en: dedent(`
        - Coffee cup with a cat-face print, latte art in a heart shape
        - Orange tabby cat curled up on the lap, eyes half-closed
        - Sitting on a pink bean bag cushion
      `),
    },
  },

  // Image 11
  {
    title: "แปรงฟันง่วง ๆ",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตาหรี่ปรือ มองตรงมาข้างหน้า
        สีหน้าง่วงนอน เปลือกตาตก ริมฝีปากเปิดเล็กน้อย สื่ออารมณ์งัวเงีย
        แขนขวายกขึ้นงอศอก มือถือแปรงสีฟันไว้ที่ปาก
        แขนซ้ายทอดลงข้างลำตัว
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head upright, eyes half-closed and drowsy, looking straight ahead
        Sleepy expression, drooping eyelids, lips slightly open, groggy mood
        Right arm raised and bent at the elbow, hand holding a toothbrush at the mouth
        Left arm hanging down at the side
      `),
    },
    details: {
      th: dedent(`
        - แปรงสีฟันสีชมพู
      `),
      en: dedent(`
        - Pink toothbrush
      `),
    },
  },

  // Image 12
  {
    title: "นั่งกอดเข่า",
    guide: {
      th: dedent(`
        นั่งกอดเข่าบนพื้น ลำตัวหันตรงมาข้างหน้า ไหล่ห่อเล็กน้อย
        ศีรษะวางพักบนเข่า สายตามองตรงมาข้างหน้า
        สีหน้าเศร้าเล็กน้อย ริมฝีปากปิด สื่ออารมณ์เหงา
        แขนทั้งสองโอบกอดเข่าไว้
        ขาทั้งสองข้างชันเข่า
      `),
      en: dedent(`
        Sitting hugging the knees on the floor, body facing forward, shoulders slightly hunched
        Head resting on the knees, eyes looking straight ahead
        Slightly sad expression, lips closed, lonely mood
        Both arms wrapped around the knees
        Both legs drawn up with knees bent
      `),
    },
    details: {
      th: dedent(`
        - นั่งบนพื้น
      `),
      en: dedent(`
        - Sitting on the floor
      `),
    },
  },

  // Image 13
  {
    title: "ตกใจประหลาดใจ",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่เกร็งเล็กน้อย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้าตกใจ ตาโต ปากเปิดเล็กน้อย สื่ออารมณ์ประหลาดใจ
        แขนทั้งสองยกขึ้นงอศอก ประคองแก้มทั้งสองข้าง
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders slightly tense
        Head upright, eyes looking straight at the camera
        Startled expression, wide eyes, mouth slightly open, surprised mood
        Both arms raised and bent at the elbows, hands cupping both cheeks
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 14
  {
    title: "นั่ง benches",
    guide: {
      th: dedent(`
        นั่งตัวตรงบน benches ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มอ่อนโยน ริมฝีปากปิด สื่ออารมณ์สงบ
        แขนทั้งสองทอดลงต่ำ ประสานมือกันวางบนตัก
        ขาทั้งสองข้างวางชิดกัน
      `),
      en: dedent(`
        Sitting upright on a bench, body facing forward, shoulders relaxed
        Head upright, eyes looking straight at the camera
        Gentle smile, lips closed, calm mood
        Both arms resting down, hands clasped together on the lap
        Both legs placed close together
      `),
    },
    details: {
      th: dedent(`
        - นั่งบน benches ไม้
        - กระเป๋าถือสีดำวางอยู่ข้าง ๆ
      `),
      en: dedent(`
        - Sitting on a wooden bench
        - A black handbag placed nearby
      `),
    },
  },

  // Image 15
  {
    title: "ประสานมือเขิน",
    guide: {
      th: dedent(`
        ยืนเอียงตัวเล็กน้อย ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มเขิน ริมฝีปากปิด สื่ออารมณ์ประหม่า
        แขนทั้งสองยกขึ้นงอศอก ประสานมือกันไว้ใต้คาง
      `),
      en: dedent(`
        Standing with a slight lean, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking straight at the camera
        Shy smile, lips closed, nervous expression
        Both arms raised and bent at the elbows, hands clasped together under the chin
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 16
  {
    title: "ชนแก้วเบียร์",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มสนุก ขยิบตาข้างหนึ่ง ริมฝีปากยิ้มกว้าง
        แขนขวายกขึ้นงอศอก ชูแก้วไว้ระดับไหล่
        แขนซ้ายงอศอก เท้าสะเอว
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head upright, eyes looking straight at the camera
        Cheerful expression, one eye winking, wide smile
        Right arm raised and bent at the elbow, holding up a glass at shoulder level
        Left arm bent at the elbow, hand on the hip
      `),
    },
    details: {
      th: dedent(`
        - แก้วเบียร์ฟองฟู
      `),
      en: dedent(`
        - A foamy beer glass
      `),
    },
  },

  // Image 17
  {
    title: "นั่งยองเท้าคาง",
    guide: {
      th: dedent(`
        นั่งยองบนพื้น ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มอ่อนโยน ริมฝีปากปิด สื่ออารมณ์สงบ
        แขนขวายกขึ้นงอศอก มือเท้าคาง
        แขนซ้ายทอดลงต่ำ วางพักบนเข่า
        ขาทั้งสองข้างยองชันเข่า
      `),
      en: dedent(`
        Squatting on the floor, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking straight at the camera
        Gentle smile, lips closed, calm mood
        Right arm raised and bent at the elbow, hand resting on the chin
        Left arm resting down, resting on the knee
        Both legs squatting with knees bent
      `),
    },
    details: {
      th: dedent(`
        - นั่งบนพื้น
      `),
      en: dedent(`
        - Sitting on the floor
      `),
    },
  },

  // Image 18
  {
    title: "กินเบอร์เกอร์",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงมาข้างหน้า
        สีหน้าตื่นเต้น ตาโต ปากเปิด สื่ออารมณ์อยากอาหาร
        แขนทั้งสองยกขึ้นงอศอก ประคองเบอร์เกอร์ไว้ที่ปาก
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head upright, eyes looking straight ahead
        Excited expression, wide eyes, mouth open, hungry mood
        Both arms raised and bent at the elbows, holding the burger up to the mouth
      `),
    },
    details: {
      th: dedent(`
        - เบอร์เกอร์
      `),
      en: dedent(`
        - A burger
      `),
    },
  },

  // Image 19
  {
    title: "อ้อนขอ",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มหวาน ตาเป็นประกาย ริมฝีปากเปิดเล็กน้อย สื่ออารมณ์อ้อนวอน
        แขนทั้งสองยกขึ้นงอศอก ประกบมือแบบพนมมือกันไว้ระดับอก
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head upright, eyes looking straight at the camera
        Sweet smile, sparkling eyes, lips slightly open, pleading mood
        Both arms raised and bent at the elbows, hands pressed together in a praying gesture at chest level
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 20
  {
    title: "นั่งเล่นคอมกับแมว",
    guide: {
      th: dedent(`
        นั่งขัดสมาธิบนพื้น ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะก้มลงเล็กน้อย สายตามองที่หน้าจอ
        สีหน้ายิ้มบาง ๆ ริมฝีปากปิด สื่ออารมณ์ผ่อนคลาย
        แขนทั้งสองยื่นไปข้างหน้า วางมือบนคีย์บอร์ด
        ขาทั้งสองข้างพับขัดสมาธิ
      `),
      en: dedent(`
        Sitting cross-legged on the floor, body facing forward, shoulders relaxed
        Head tilted slightly down, eyes looking at the screen
        Faint smile, lips closed, relaxed mood
        Both arms extended forward, hands resting on the keyboard
        Both legs folded cross-legged
      `),
    },
    details: {
      th: dedent(`
        - คอมพิวเตอร์แล็ปท็อปสีเงิน
        - แมวสีส้มลาย Tabby นอนอยู่ข้าง ๆ
        - นั่งบนพรมปุยสีครีม
      `),
      en: dedent(`
        - Silver laptop computer
        - Orange tabby cat lying nearby
        - Sitting on a fluffy cream-colored rug
      `),
    },
  },

  // Image 21
  {
    title: "แลบลิ้นทะเล้น",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตาขยิบข้างหนึ่ง
        สีหน้ายิ้มทะเล้น แลบลิ้น ริมฝีปากเปิด สื่ออารมณ์ซุกซน
        แขนทั้งสองยกขึ้นงอศอก ชี้นิ้วทั้งสองข้างที่แก้ม
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head upright, one eye winking
        Playful, mischievous smile, tongue sticking out, lips open, cheeky mood
        Both arms raised and bent at the elbows, both index fingers pointing at the cheeks
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 22
  {
    title: "โบกมือทักทาย",
    guide: {
      th: dedent(`
        นั่งขัดสมาธิบนพื้น ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มอ่อนโยน ริมฝีปากปิด สื่ออารมณ์เป็นมิตร
        แขนขวายกขึ้นงอศอก โบกมือระดับไหล่
        แขนซ้ายทอดลงต่ำ วางพักบนตัก
        ขาทั้งสองข้างพับขัดสมาธิ
      `),
      en: dedent(`
        Sitting cross-legged on the floor, body facing forward, shoulders relaxed
        Head upright, eyes looking straight at the camera
        Gentle smile, lips closed, friendly expression
        Right arm raised and bent at the elbow, waving at shoulder level
        Left arm resting down, resting on the lap
        Both legs folded cross-legged
      `),
    },
    details: {
      th: dedent(`
        - หนังสือสองเล่มวางซ้อนกัน
        - ถ้วยกาแฟและคุกกี้
        - กระถางต้นไม้เล็ก
        - นั่งบนพรมปุยสีครีม
      `),
      en: dedent(`
        - Two books stacked together
        - A coffee cup and cookies
        - A small potted plant
        - Sitting on a fluffy cream-colored rug
      `),
    },
  },

  // Image 23
  {
    title: "สะพายกระเป๋าถือดอกไม้",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มอ่อนโยน ริมฝีปากปิด สื่ออารมณ์สดใส
        แขนขวายกขึ้นงอศอก ถือช่อดอกไม้ไว้ระดับอก
        แขนซ้ายทอดลงต่ำ สะพายกระเป๋าไว้ที่ไหล่
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking straight at the camera
        Gentle smile, lips closed, cheerful expression
        Right arm raised and bent at the elbow, holding a bouquet of flowers at chest level
        Left arm resting down, bag carried on the shoulder
      `),
    },
    details: {
      th: dedent(`
        - ช่อดอกไม้สีฟ้าและม่วง
        - กระเป๋าโครเชต์สีครีม
      `),
      en: dedent(`
        - Bouquet of blue and purple flowers
        - Cream-colored crochet bag
      `),
    },
  },

  // Image 24
  {
    title: "นั่งเท้าคางเหม่อ",
    guide: {
      th: dedent(`
        นั่งพับขาบนพื้น ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองเฉียงไปด้านข้าง
        สีหน้าเหม่อลอย ริมฝีปากปิด สื่ออารมณ์ครุ่นคิด
        แขนขวายกขึ้นงอศอก มือเท้าคาง
        แขนซ้ายทอดลงต่ำ วางพักบนเข่า
        ขาทั้งสองข้างพับราบ
      `),
      en: dedent(`
        Sitting with legs folded on the floor, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking off to the side
        Absent-minded, distant expression, lips closed, pensive mood
        Right arm raised and bent at the elbow, hand resting on the chin
        Left arm resting down, resting on the knee
        Both legs folded flat
      `),
    },
    details: {
      th: dedent(`
        - นั่งบนพื้น
      `),
      en: dedent(`
        - Sitting on the floor
      `),
    },
  },

  // Image 25
  {
    title: "กอดอกมองบน",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองเฉียงขึ้นข้างบน
        สีหน้าบึ้งเล็กน้อย ริมฝีปากเม้ม สื่ออารมณ์หงุดหงิด
        แขนทั้งสองกอดอกไว้แน่น
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking slightly upward
        Slightly sullen expression, lips pressed together, annoyed mood
        Both arms crossed firmly
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 26
  {
    title: "นั่งเท้าคางมองบน",
    guide: {
      th: dedent(`
        นั่งพับขาบนพื้น ลำตัวหันตรงมาข้างหน้า ไหล่ห่อเล็กน้อย
        ศีรษะเอียงเล็กน้อย สายตามองเฉียงขึ้นข้างบน
        สีหน้าเบื่อหน่าย ริมฝีปากปิด สื่ออารมณ์ครุ่นคิด
        แขนทั้งสองยกขึ้นงอศอก ประคองแก้มทั้งสองข้าง
        ขาทั้งสองข้างพับราบ
      `),
      en: dedent(`
        Sitting with legs folded on the floor, body facing forward, shoulders slightly hunched
        Head tilted slightly, eyes looking slightly upward
        Bored expression, lips closed, pensive mood
        Both arms raised and bent at the elbows, hands cupping both cheeks
        Both legs folded flat
      `),
    },
    details: {
      th: dedent(`
        - นั่งบนพื้น
      `),
      en: dedent(`
        - Sitting on the floor
      `),
    },
  },

  // Image 27
  {
    title: "ชูนิ้วชี้สองข้าง",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มหวาน ริมฝีปากปิด สื่ออารมณ์อ้อนวอน
        แขนทั้งสองยกขึ้นงอศอก ชูนิ้วชี้ทั้งสองข้างขึ้นระดับอก(Mini heart)
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head upright, eyes looking straight at the camera
        Sweet smile, lips closed, pleading mood
        Both arms raised and bent at the elbows, both index fingers raised at chest level (mini heart)
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 28
  {
    title: "ยิ้มตาหยีสองนิ้ว",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตาหลับตายิ้ม
        สีหน้ายิ้มกว้าง มีความสุข ริมฝีปากยิ้มเห็นฟัน สื่ออารมณ์สดใส
        แขนทั้งสองยกขึ้นงอศอก ชูสองนิ้วทั้งสองข้างแนบข้างแก้ม
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head upright, eyes closed and smiling
        Wide, happy smile, teeth showing, cheerful expression
        Both arms raised and bent at the elbows, making peace signs next to both cheeks
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 29
  {
    title: "ดูดชานมไข่มุก",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มบาง ๆ ริมฝีปากดูดหลอด สื่ออารมณ์เพลิดเพลิน
        แขนทั้งสองยกขึ้นงอศอก ประคองแก้วไว้ระดับอก
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head upright, eyes looking straight at the camera
        Faint smile, lips sipping the straw, enjoying mood
        Both arms raised and bent at the elbows, holding the cup at chest level
      `),
    },
    details: {
      th: dedent(`
        - แก้วชานมไข่มุก
      `),
      en: dedent(`
        - A bubble tea cup
      `),
    },
  },

  // Image 30
  {
    title: "อ่านหนังสือกับกาแฟ",
    guide: {
      th: dedent(`
        นั่งพับขาบนพื้น ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มอ่อนโยน ริมฝีปากปิด สื่ออารมณ์ผ่อนคลาย
        แขนขวายกขึ้นงอศอก ถือแก้วกาแฟไว้ระดับอก
        แขนซ้ายทอดลงต่ำ ถือหนังสือไว้บนตัก
        ขาทั้งสองข้างพับราบ
      `),
      en: dedent(`
        Sitting with legs folded on the floor, body facing forward, shoulders relaxed
        Head upright, eyes looking straight at the camera
        Gentle smile, lips closed, relaxed mood
        Right arm raised and bent at the elbow, holding a coffee cup at chest level
        Left arm resting down, holding a book on the lap
        Both legs folded flat
      `),
    },
    details: {
      th: dedent(`
        - แก้วกาแฟมีข้อความ Books & Coffee
        - หนังสือปกสีชมพู
        - นั่งบนพรมปุยสีครีม
      `),
      en: dedent(`
        - Coffee cup with "Books & Coffee" text
        - Pink-covered book
        - Sitting on a fluffy cream-colored rug
      `),
    },
  },

  // Image 31
  {
    title: "ทำมือสัญลักษณ์เลิฟ",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มหวาน ริมฝีปากปิด สื่ออารมณ์สดใส
        แขนขวายกขึ้นงอศอก ทำมือสัญลักษณ์เลิฟ (นิ้วชี้และนิ้วโป้งกาง) ไว้ระดับแก้ม
        แขนซ้ายซ่อนไว้ข้างหลังลำตัว
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking straight at the camera
        Sweet smile, lips closed, cheerful expression
        Right arm raised and bent at the elbow, making a love hand sign (index finger and thumb spread) at cheek level
        Left arm hidden behind the body
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 32
  {
    title: "กอดหมอนหัวใจ",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตาหลับตาพริ้ม
        สีหน้ายิ้มอ่อนโยน มีความสุข ริมฝีปากปิด สื่ออารมณ์อบอุ่น
        แขนทั้งสองโอบกอดหมอนไว้แนบอก
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head tilted slightly, eyes gently closed
        Gentle, happy smile, lips closed, warm expression
        Both arms hugging the pillow close to the chest
      `),
    },
    details: {
      th: dedent(`
        - หมอนรูปหัวใจสีชมพู
      `),
      en: dedent(`
        - Pink heart-shaped pillow
      `),
    },
  },

  // Image 33
  {
    title: "ยักไหล่ไม่รู้",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองเฉียงขึ้นข้างบน
        สีหน้างุนงง ริมฝีปากปิด สื่ออารมณ์ไม่แน่ใจ
        แขนทั้งสองกางออกข้างลำตัว ฝ่ามือหงายขึ้น
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking slightly upward
        Confused expression, lips closed, uncertain mood
        Both arms spread out at the sides, palms facing upward
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 34
  {
    title: "กอดอกเชิดหน้า",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันข้างเล็กน้อย ไหล่ผ่อนคลาย
        ศีรษะเชิดขึ้นเล็กน้อย สายตามองเฉียงขึ้นข้างบน
        สีหน้านิ่งเฉย ริมฝีปากปิด สื่ออารมณ์มั่นใจ
        แขนทั้งสองกอดอกไว้แน่น
      `),
      en: dedent(`
        Standing upright, body turned slightly to the side, shoulders relaxed
        Head raised slightly, eyes looking slightly upward
        Calm, composed expression, lips closed, confident mood
        Both arms crossed firmly
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 35
  {
    title: "ปวดหัวกังวล",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ห่อเล็กน้อย
        ศีรษะก้มลงเล็กน้อย สายตามองต่ำ
        สีหน้าเหนื่อยล้า เครียด คิ้วขมวด ริมฝีปากเม้ม
        แขนทั้งสองยกขึ้นงอศอก ประคองขมับทั้งสองข้าง
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders slightly hunched
        Head tilted slightly down, eyes looking low
        Tired, stressed expression, eyebrows furrowed, lips pressed together
        Both arms raised and bent at the elbows, hands holding both temples
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 36
  {
    title: "โบกมือสะพายกระเป๋า",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มอ่อนโยน ริมฝีปากปิด สื่ออารมณ์เป็นมิตร
        แขนขวายกขึ้นงอศอก โบกมือระดับไหล่
        แขนซ้ายทอดลงต่ำ สะพายกระเป๋าไว้ที่ไหล่
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head upright, eyes looking straight at the camera
        Gentle smile, lips closed, friendly expression
        Right arm raised and bent at the elbow, waving at shoulder level
        Left arm resting down, bag carried on the shoulder
      `),
    },
    details: {
      th: dedent(`
        - กระเป๋าสะพายสีดำ
      `),
      en: dedent(`
        - Black shoulder bag
      `),
    },
  },

  // Image 37
  {
    title: "หันข้างถือกาแฟ",
    guide: {
      th: dedent(`
        ยืนหันข้าง ลำตัวหันข้างเล็กน้อย ไหล่ผ่อนคลาย
        ศีรษะหันกลับมามองข้างหลัง สายตามองตรงเข้าหากล้อง
        สีหน้ายิ้มอ่อนโยน ริมฝีปากปิด สื่ออารมณ์สดใส
        แขนขวายกขึ้นงอศอก ถือแก้วกาแฟไว้ระดับอก
        แขนซ้ายทอดลงต่ำ สะพายกระเป๋าไว้ที่ไหล่
      `),
      en: dedent(`
        Standing turned to the side, body turned slightly sideways, shoulders relaxed
        Head turned back to look over the shoulder, eyes looking straight at the camera
        Gentle smile, lips closed, cheerful expression
        Right arm raised and bent at the elbow, holding a coffee cup at chest level
        Left arm resting down, bag carried on the shoulder
      `),
    },
    details: {
      th: dedent(`
        - แก้วกาแฟแบบ To-Go
        - กระเป๋าสะพายสีดำ
      `),
      en: dedent(`
        - To-go coffee cup
        - Black shoulder bag
      `),
    },
  },

  // Image 38
  {
    title: "ก้มตัวเหนื่อย",
    guide: {
      th: dedent(`
        ยืนก้มตัว ลำตัวโน้มไปข้างหน้า ไหล่ตก
        ศีรษะก้มลงเล็กน้อย สายตามองต่ำ
        สีหน้าเหนื่อยล้า ริมฝีปากเปิดเล็กน้อย สื่ออารมณ์หมดแรง
        แขนทั้งสองทอดลงต่ำตามธรรมชาติ
      `),
      en: dedent(`
        Standing slumped forward, body leaning forward, shoulders drooping
        Head tilted slightly down, eyes looking low
        Exhausted expression, lips slightly open, drained mood
        Both arms hanging down naturally
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 39
  {
    title: "เบะปากงอน",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะตั้งตรง สายตามองเฉียงขึ้นข้างบน
        สีหน้างอน เบะปาก ริมฝีปากเม้ม สื่ออารมณ์ไม่พอใจเล็กน้อย
        แขนทั้งสองทอดลงข้างลำตัว
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head upright, eyes looking slightly upward
        Pouting, sulky expression, lips pressed together, slightly annoyed mood
        Both arms hanging down at the sides
      `),
    },
    details: {
      th: dedent(`
      `),
      en: dedent(`
      `),
    },
  },

  // Image 40
  {
    title: "กอดอกมองข้าง หึ!",
    guide: {
      th: dedent(`
        ยืนตัวตรง ลำตัวหันตรงมาข้างหน้า ไหล่ผ่อนคลาย
        ศีรษะเอียงเล็กน้อย สายตามองเฉียงขึ้นข้างบน
        สีหน้าบึ้งเล็กน้อย ริมฝีปากปิด สื่ออารมณ์ไม่พอใจ
        แขนทั้งสองกอดอกไว้แน่น
      `),
      en: dedent(`
        Standing upright, body facing forward, shoulders relaxed
        Head tilted slightly, eyes looking slightly upward
        Slightly sullen expression, lips closed, displeased mood
        Both arms crossed firmly
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
