const list = document.getElementById("list");
document.getElementById("count").textContent =
  PROMPTS.length + " รายการ แตะปุ่มเพื่อคัดลอก";

function fullPrompt(item) {
  return PREFIX + item.prompt + SUFFIX;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    // fallback สำหรับเบราว์เซอร์ที่ไม่รองรับ clipboard API
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

function makeCard(item) {
  const text = fullPrompt(item);

  const card = document.createElement("article");
  card.className = "card";
  card.dataset.mood = item.mood;

  const title = document.createElement("h2");
  title.className = "title";
  title.textContent = item.title;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "copy";
  btn.textContent = "คัดลอก prompt";

  let timer;
  btn.addEventListener("click", async () => {
    const ok = await copyText(text);
    btn.textContent = ok ? "คัดลอกแล้ว" : "คัดลอกไม่ได้ ลองกดค้างที่ข้อความ";
    btn.classList.toggle("done", ok);
    clearTimeout(timer);
    timer = setTimeout(() => {
      btn.textContent = "คัดลอก prompt";
      btn.classList.remove("done");
    }, 1600);
  });

  card.append(title, btn);
  return card;
}

PROMPTS.forEach((item) => list.appendChild(makeCard(item)));
