const list = document.getElementById("list");

document.getElementById("count").textContent =
  PROMPTS.length + " รายการ แตะปุ่มเพื่อคัดลอก";

let lang = localStorage.getItem("lang") || "th";

// เลือกข้อความตามภาษาปัจจุบัน รองรับทั้ง string เดิม และ object {th, en}
function pick(field) {
  if (!field) return "";
  if (typeof field === "string") return field; // ชุดที่ยังไม่แปล ใช้ตามเดิม
  return field[lang] || field.th || field.en || ""; // มี fallback กันพลาด
}

function buildPrompt(item) {
  const parts = [];
  // prettier-ignore
  parts.push(lang === "en" ? "Adjust pose and facial expression" : "ปรับท่าทางและสีหน้า");

  parts.push("");

  parts.push("Guide:");
  parts.push(pick(item.guide).trim());

  const details = [];

  const detailText = pick(item.details).trim();
  if (detailText) {
    details.push(detailText);
  }

  if (item.keep && item.keep.trim()) {
    details.push(item.keep.trim());
  }

  details.push("- ฉากหลังสีขาวล้วน");
  details.push("- ภาพครึ่งตัว");

  if (details.length > 0) {
    parts.push("");
    parts.push(details.join("\n"));
  }

  return PREFIX + parts.join("\n") + SUFFIX;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    const ta = document.createElement("textarea");

    ta.value = text;
    ta.setAttribute("readonly", "");

    ta.style.position = "fixed";
    ta.style.opacity = "0";

    document.body.appendChild(ta);

    ta.select();

    let ok = false;

    try {
      ok = document.execCommand("copy");
    } catch (err) {
      ok = false;
    }

    document.body.removeChild(ta);

    return ok;
  }
}

function makeCard(item, index) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h2");
  title.className = "title";
  title.textContent = `${index + 1}. ${item.title}`;

  const btn = document.createElement("button");

  btn.type = "button";
  btn.className = "copy";

  const text = document.createElement("span");
  text.textContent = "📋 ก๊อปเลย";

  btn.append(text);

  let timer;

  btn.addEventListener("click", async () => {
    const prompt = buildPrompt(item);
    const ok = await copyText(prompt);

    if (ok) {
      text.textContent = "ก๊อปแล้ว";
      btn.classList.add("done");
    } else {
      text.textContent = "ก๊อปไม่ได้";
      btn.classList.remove("done");
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      text.textContent = "📋 ก๊อปเลย";
      btn.classList.remove("done");
    }, 1600);
  });

  card.append(title, btn);

  return card;
}

PROMPTS.forEach((item, index) => {
  list.appendChild(makeCard(item, index));
});

// ---------------------------------
// สลับภาษา (ปุ่มคู่ TH / EN)
// ---------------------------------
function setLang(newLang) {
  lang = newLang;
  localStorage.setItem("lang", lang);

  const thBtn = document.getElementById("lang-th");
  const enBtn = document.getElementById("lang-en");
  if (thBtn) thBtn.classList.toggle("active", lang === "th");
  if (enBtn) enBtn.classList.toggle("active", lang === "en");
}

const thBtn = document.getElementById("lang-th");
const enBtn = document.getElementById("lang-en");
if (thBtn && enBtn) {
  thBtn.addEventListener("click", () => setLang("th"));
  enBtn.addEventListener("click", () => setLang("en"));
  setLang(lang);
}
