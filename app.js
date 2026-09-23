const list = document.getElementById("list");

document.getElementById("count").textContent =
  PROMPTS.length + " รายการ แตะปุ่มเพื่อคัดลอก";

const ACTION_OPTIONS = {
  normal: "ปกติ",
  reference: "อ้างอิงภาพที่ 2",
};

const BACKGROUND_OPTIONS = {
  white: "ขาวล้วน",
  prompt: "ตาม Prompt",
};

const FRAMING_OPTIONS = {
  half: "ครึ่งตัว",
  full: "เต็มตัว",
};

const ACTION_PROMPTS = {
  normal: "ปรับท่าทางและสีหน้า",
  reference: "ปรับท่าทางและสีหน้าให้เหมือนภาพที่ 2 โดยคงตัวละครจากภาพที่ 1",
};

const BACKGROUND_PROMPTS = {
  white: "ฉากหลังสีขาวล้วน",
  prompt: "ฉากหลังตาม Prompt",
};

const FRAMING_PROMPTS = {
  half: "ภาพครึ่งตัว",
  full: "ภาพเต็มตัว",
};

function buildPrompt(item, options) {
  const parts = [];

  const action = ACTION_PROMPTS[options.action];
  const background = BACKGROUND_PROMPTS[options.background];
  const framing = FRAMING_PROMPTS[options.framing];

  if (action) {
    parts.push(action);
  }

  parts.push("");

  parts.push("Guide:");
  parts.push(item.guide.trim());

  const details = [];

  if (item.details && item.details.trim()) {
    details.push(item.details.trim());
  }

  if (item.keep && item.keep.trim()) {
    details.push(item.keep.trim());
  }

  if (background) {
    details.push(`- ${background}`);
  }

  if (framing) {
    details.push(`- ${framing}`);
  }

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

function makeOptionGroup(title, options, selectedValue, optionName, cardIndex) {
  const group = document.createElement("div");
  group.className = "option-group";

  const heading = document.createElement("div");
  heading.className = "option-label";
  heading.textContent = title;

  const choices = document.createElement("div");
  choices.className = "options";

  Object.entries(options).forEach(([value, text]) => {
    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");

    input.type = "radio";
    input.name = `${optionName}-${cardIndex}`;
    input.value = value;
    input.dataset.option = optionName;
    input.checked = value === selectedValue;

    const span = document.createElement("span");
    span.textContent = text;

    label.append(input, span);
    choices.appendChild(label);
  });

  group.append(heading, choices);

  return group;
}

function getSelectedValue(card, optionName) {
  const input = card.querySelector(
    `input[data-option="${optionName}"]:checked`,
  );

  return input ? input.value : null;
}

function makeCard(item, index) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h2");
  title.className = "title";
  title.textContent = `${index + 1}. ${item.title}`;

  const options = document.createElement("div");
  options.className = "prompt-options";

  options.appendChild(
    makeOptionGroup(
      "วิธีปรับภาพ",
      ACTION_OPTIONS,
      item.action || "normal",
      "action",
      index,
    ),
  );

  options.appendChild(
    makeOptionGroup(
      "ฉากหลัง",
      BACKGROUND_OPTIONS,
      item.background || "white",
      "background",
      index,
    ),
  );

  options.appendChild(
    makeOptionGroup("ขนาดภาพ", FRAMING_OPTIONS, "half", "framing", index),
  );

  const btn = document.createElement("button");

  btn.type = "button";
  btn.className = "copy";

  const icon = document.createElement("span");
  icon.className = "copy-icon";

  icon.innerHTML = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="7" width="11" height="11" rx="2"></rect>
    <rect x="10" y="2" width="11" height="11" rx="2"></rect>
  </svg>
`;

  const text = document.createElement("span");
  text.textContent = "คัดลอก prompt";

  btn.append(icon, text);

  let timer;

  btn.addEventListener("click", async () => {
    const selectedOptions = {
      action: getSelectedValue(card, "action"),
      background: getSelectedValue(card, "background"),
      framing: getSelectedValue(card, "framing"),
    };

    const prompt = buildPrompt(item, selectedOptions);
    const ok = await copyText(prompt);

    if (ok) {
      icon.innerHTML = "✓";
      text.textContent = "คัดลอกแล้ว";
      btn.classList.add("done");
    } else {
      icon.textContent = "!";
      text.textContent = "คัดลอกไม่ได้";
      btn.classList.remove("done");
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      icon.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="7" width="11" height="11" rx="2"></rect>
          <rect x="10" y="2" width="11" height="11" rx="2"></rect>
        </svg>
`;

      text.textContent = "คัดลอก prompt";
      btn.classList.remove("done");
    }, 1600);
  });

  card.append(title, options, btn);

  return card;
}

PROMPTS.forEach((item, index) => {
  list.appendChild(makeCard(item, index));
});
