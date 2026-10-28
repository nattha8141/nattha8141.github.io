const details = {
  about: {
    eyebrow: "PROFILE / SHORT INTRODUCTION",
    title: "I turn complex needs into practical, working solutions.",
    intro:
      "I am an AI, analytics, and digital transformation specialist with more than eight years of experience. Today, I work hands-on as an engineer for Internal Audit - translating operational needs into automation, continuous monitoring, and GenAI-enabled solutions.",
    items: [
      ["Current focus", "GenAI-enabled audit tools, continuous monitoring, workflow automation, and capability building."],
      ["Working style", "I start with the need, engineer the solution, and make sure it works for the people and process around it."],
      ["Beyond work", "Playing guitar and producing music in Ableton - including the three previews on this page."],
    ],
  },
  "current-role": {
    eyebrow: "CURRENT ROLE / GRAB HOLDINGS",
    title: "Building the next generation of audit workflows.",
    intro:
      "As Assistant Manager for Audit Innovation and Analytics, I build automation and GenAI tools that help teams monitor operations, investigate anomalies, and work more efficiently.",
    items: [
      ["Continuous audit", "Automation workflows and dashboards using KNIME Analytics, Presto SQL, Power BI, and AWS Workspace."],
      ["GenAI tools", "Internal tools designed to streamline audit workflows and expand auditor capabilities."],
      ["Capability building", "Analytics training for internal audit and cross-functional teams."],
      ["Stakeholder support", "Critical data support for high-stakes cross-functional work, responding to complex inquiries and clarifying data-related matters."],
    ],
  },
  experience: {
    eyebrow: "PROFESSIONAL EXPERIENCE",
    title: "Eight years of systems, analytics, and transformation.",
    intro:
      "A progression from IT delivery to continuous audit, analytics enablement, and AI-assisted transformation.",
    timeline: [
      ["2024 - Present", "Assistant Manager, Audit Innovation & Analytics", "Grab Holdings Limited"],
      ["2023 - 2024", "Specialist, Audit Innovation & Analytics", "Grab Holdings Limited"],
      ["2020 - 2023", "Staff, Audit Support & System Development", "Telkomsel"],
      ["2018 - 2020", "Staff, Information Technology", "Rajawali Telekomunikasi Selular"],
    ],
  },
  education: {
    eyebrow: "EDUCATION",
    title: "From engineering to AI, there is always more to learn.",
    intro:
      "My formal training connects industrial engineering, design thinking, and applied artificial intelligence - each step building on the last.",
    items: [
      ["Imperial College London · 2025-2026", "MSc in Artificial Intelligence Applications and Innovation, EEE Department. Coursework included Machine Learning, Deep Learning, Design Thinking for AI, IoT and Applications, and Fundamentals and Innovative Applications of Robotics."],
      ["Universitas Indonesia · 2014-2018", "Bachelor of Engineering in Industrial Engineering; Laboratory Assistant at the Product Development and Innovation Laboratory."],
    ],
  },
  skills: {
    eyebrow: "TOOLS & CAPABILITIES",
    title: "A practical toolkit built across AI, analytics, and transformation.",
    intro:
      "Different problems call for different tools. I choose and connect them around the outcome, not the trend.",
    skills: ["Python", "KNIME Analytics", "Power BI", "Presto SQL", "Generative AI", "AWS Workspace", "Continuous Audit", "Workflow Automation", "Data Visualization", "Design Thinking", "IoT", "Robotics"],
  },
  achievements: {
    eyebrow: "SELECTED RECOGNITION",
    title: "Recognition across professional impact, learning, and research.",
    intro: "Four milestones from industry, postgraduate study, and funded research.",
    items: [
      ["Grab CEO Award · 2025", "Equity award for transforming Internal Audit workflows through GenAI-powered audit tools and supporting high-stakes organizational priorities."],
      ["LPDP Scholarship · 2023", "Nationwide scholarship fully funding tuition and living costs for postgraduate study."],
      ["PITTA Grant · 2018", "Research grant supporting international publication on inclusive learning tools for hearing-impaired elementary students."],
      ["MP3EI Grant · 2017", "Government-funded research on sustainable supply chains and local resource advantages in South Halmahera."],
    ],
  },
  research: {
    eyebrow: "RESEARCH & EXPLORATION",
    title: "Research that balances efficiency with human needs.",
    intro:
      "My research spans efficient deep learning, inclusive product design, and sustainable supply chains.",
    items: [
      ["Audio source separation", "A lightweight deep learning model focused on computational efficiency."],
      ["Inclusive learning tools · PITTA Grant", "A design-thinking approach to learning support tools for hearing-impaired elementary students."],
      ["Sustainable supply chains · MP3EI Grant", "Fairtrade requirements and local-resource strategy for South Halmahera agricultural products."],
    ],
  },
};

const careerMilestones = [
  { index: "01", period: "2018 - 2020", role: "Staff, Information Technology", company: "Rajawali Telekomunikasi Selular" },
  { index: "02", period: "2020 - 2023", role: "Staff, Audit Support & System Development", company: "Telkomsel" },
  { index: "03", period: "2023 - 2024", role: "Specialist, Audit Innovation & Analytics", company: "Grab Holdings Limited" },
  { index: "04", period: "2024 - Present", role: "Assistant Manager, Audit Innovation & Analytics", company: "Grab Holdings Limited" },
];

const dialog = document.querySelector("#detail-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogEyebrow = document.querySelector("#dialog-eyebrow");
const closeDialogButton = document.querySelector("#dialog-close");

function renderDetail(key) {
  const detail = details[key];
  if (!detail) return;

  dialogEyebrow.textContent = detail.eyebrow;
  const list = detail.items
    ? `<ul class="dialog-list">${detail.items
        .map(([heading, copy]) => `<li><strong>${heading}</strong><span>${copy}</span></li>`)
        .join("")}</ul>`
    : "";
  const timeline = detail.timeline
    ? `<ol class="dialog-timeline">${detail.timeline
        .map(
          ([period, role, company]) =>
            `<li><time>${period}</time><div><strong>${role}</strong><span>${company}</span></div></li>`,
        )
        .join("")}</ol>`
    : "";
  const skills = detail.skills
    ? `<div class="skill-cloud">${detail.skills.map((skill) => `<span>${skill}</span>`).join("")}</div>`
    : "";

  dialogContent.innerHTML = `<h2 id="dialog-title">${detail.title}</h2><p>${detail.intro}</p>${list}${timeline}${skills}`;
  dialog.showModal();
}

document.querySelectorAll("[data-modal]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    if (event.target.closest("a, button") && event.currentTarget !== event.target.closest("button")) return;
    renderDetail(trigger.dataset.modal);
  });

  if (trigger.getAttribute("role") === "button") {
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        renderDetail(trigger.dataset.modal);
      }
    });
  }
});

closeDialogButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const timelineButtons = [...document.querySelectorAll("[data-timeline]")];
const timelineIndex = document.querySelector(".timeline-index");
const timelinePeriod = document.querySelector(".timeline-period");
const timelineRole = document.querySelector(".timeline-detail h3");
const timelineCompany = document.querySelector(".timeline-company");

timelineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const milestone = careerMilestones[Number(button.dataset.timeline)];
    timelineButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    timelineIndex.textContent = milestone.index;
    timelinePeriod.textContent = milestone.period;
    timelineRole.textContent = milestone.role;
    timelineCompany.textContent = milestone.company;
  });
});

const cards = document.querySelectorAll(".bento-card");
cards.forEach((card, index) => {
  card.dataset.order = index;
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Math.min(Number(entry.target.dataset.order || 0) * 55, 320);
        window.setTimeout(() => entry.target.classList.add("is-visible"), delay);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08 },
  );
  cards.forEach((card) => observer.observe(card));
} else {
  cards.forEach((card) => card.classList.add("is-visible"));
}

// Keeps rapid anchor jumps or an immediate End key from leaving skipped cards hidden.
window.setTimeout(() => cards.forEach((card) => card.classList.add("is-visible")), 900);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reduceMotion.matches) {
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const tiltStrength = Math.max(rect.width, rect.height) < 520 ? 5.2 : 3.2;
      card.style.setProperty("--rx", `${(0.5 - y) * tiltStrength}deg`);
      card.style.setProperty("--ry", `${(x - 0.5) * tiltStrength}deg`);
      card.style.setProperty("--mx", `${x * 100}%`);
      card.style.setProperty("--my", `${y * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

const experienceCount = document.querySelector("[data-count]");
let countStarted = false;
const countObserver = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting || countStarted) return;
  countStarted = true;
  const target = Number(experienceCount.dataset.count);
  const start = performance.now();
  const duration = reduceMotion.matches ? 0 : 900;

  function update(now) {
    const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    experienceCount.textContent = String(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
  countObserver.disconnect();
});
countObserver.observe(experienceCount);

const audio = document.querySelector("#portfolio-audio");
const musicCard = document.querySelector(".music-card");
const playToggle = document.querySelector("#play-toggle");
const previousTrack = document.querySelector("#previous-track");
const nextTrack = document.querySelector("#next-track");
const trackItems = [...document.querySelectorAll(".track-item")];
const trackTitle = document.querySelector("#current-track-title");
const trackNumber = document.querySelector(".track-number");
const elapsedTime = document.querySelector("#elapsed-time");
const durationTime = document.querySelector("#duration-time");
const volume = document.querySelector("#volume");
const waveform = document.querySelector("#waveform");
let selectedTrack = 0;

const trackNames = trackItems.map((item) => item.querySelector("strong").textContent);
const waveHeights = [28, 56, 42, 76, 35, 64, 88, 48, 70, 34, 52, 84, 62, 39, 72, 94, 46, 61, 32, 78, 55, 90, 44, 69, 38, 81, 58, 35, 74, 92, 49, 66, 41, 85, 57, 73, 33, 63, 89, 47, 77, 54, 68, 36, 82, 59, 71, 43];
waveform.innerHTML = waveHeights.map((height) => `<span style="--height:${height}%"></span>`).join("");
const waveBars = [...waveform.children];

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function updatePlayState() {
  const isPlaying = !audio.paused;
  musicCard.classList.toggle("is-playing", isPlaying);
  playToggle.setAttribute("aria-label", `${isPlaying ? "Pause" : "Play"} ${trackNames[selectedTrack]}`);
}

async function playSelectedTrack() {
  try {
    await audio.play();
  } catch (error) {
    console.warn("Playback requires a user gesture or the audio file could not be loaded.", error);
  }
  updatePlayState();
}

function selectTrack(index, shouldPlay = false) {
  selectedTrack = (index + trackItems.length) % trackItems.length;
  const item = trackItems[selectedTrack];
  audio.pause();
  audio.src = item.dataset.src;
  audio.load();
  trackItems.forEach((track, trackIndex) => track.classList.toggle("is-selected", trackIndex === selectedTrack));
  trackTitle.textContent = trackNames[selectedTrack];
  trackNumber.textContent = String(selectedTrack + 1).padStart(2, "0");
  elapsedTime.textContent = "0:00";
  waveBars.forEach((bar) => bar.classList.remove("is-past"));
  updatePlayState();
  if (shouldPlay) playSelectedTrack();
}

playToggle.addEventListener("click", () => {
  if (audio.paused) playSelectedTrack();
  else audio.pause();
});

previousTrack.addEventListener("click", () => selectTrack(selectedTrack - 1, true));
nextTrack.addEventListener("click", () => selectTrack(selectedTrack + 1, true));
trackItems.forEach((item, index) => item.addEventListener("click", () => selectTrack(index, true)));

audio.addEventListener("play", updatePlayState);
audio.addEventListener("pause", updatePlayState);
audio.addEventListener("ended", () => {
  audio.currentTime = 0;
  updatePlayState();
});
audio.addEventListener("loadedmetadata", () => {
  durationTime.textContent = formatTime(audio.duration);
});
audio.addEventListener("timeupdate", () => {
  elapsedTime.textContent = formatTime(audio.currentTime);
  const progress = audio.duration ? audio.currentTime / audio.duration : 0;
  waveBars.forEach((bar, index) => bar.classList.toggle("is-past", index / waveBars.length <= progress));
});

waveform.addEventListener("click", (event) => {
  if (!Number.isFinite(audio.duration)) return;
  const rect = waveform.getBoundingClientRect();
  const progress = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
  audio.currentTime = progress * audio.duration;
});

audio.volume = Number(volume.value);
volume.addEventListener("input", () => {
  audio.volume = Number(volume.value);
});

const copyEmailButton = document.querySelector("#copy-email");
const copyLabel = copyEmailButton.querySelector(".copy-label");
copyEmailButton.addEventListener("click", async () => {
  const email = copyEmailButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyLabel.textContent = "Copied";
  } catch {
    window.location.href = `mailto:${email}`;
    copyLabel.textContent = "Open email";
  }
  window.setTimeout(() => (copyLabel.textContent = "Copy email"), 1800);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

// GoatCounter is loaded only after a site code is added to index.html and never during local previews.
const goatCounterCode = document.querySelector('meta[name="goatcounter-code"]')?.content.trim();
const visitCounter = document.querySelector(".visit-counter");
const visitCount = document.querySelector("#visit-count");
const isLocalPreview = ["", "localhost", "127.0.0.1"].includes(window.location.hostname);
if (goatCounterCode && /^[a-z0-9][a-z0-9-]*$/i.test(goatCounterCode) && !isLocalPreview) {
  const goatCounterScript = document.createElement("script");
  goatCounterScript.async = true;
  goatCounterScript.src = "https://gc.zgo.at/count.js";
  goatCounterScript.dataset.goatcounter = `https://${goatCounterCode}.goatcounter.com/count`;
  document.head.append(goatCounterScript);

  if (visitCount) {
    fetch(`https://${goatCounterCode}.goatcounter.com/counter/TOTAL.json`)
      .then((response) => {
        if (!response.ok) throw new Error("GoatCounter total is unavailable");
        return response.json();
      })
      .then((data) => {
        if (typeof data.count !== "string" && typeof data.count !== "number") return;
        visitCount.textContent = String(data.count);
        visitCounter?.classList.add("is-loaded");
      })
      .catch(() => {
        visitCount.textContent = "—";
      });
  }
}
