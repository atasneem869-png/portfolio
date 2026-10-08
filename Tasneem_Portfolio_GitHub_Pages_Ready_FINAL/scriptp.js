/* ============================================================
   EDIT HERE — change your info, everything else updates itself
   ============================================================ */
const DATA = {
  name: "Tasneem Ashraf",
  accentWord: "Ashraf",                     // the part of the name shown in the accent color
  photo: "profile.jpeg",
  bio: "Junior React.js developer building responsive, user-friendly web apps with HTML, CSS, JavaScript, Bootstrap and React. Passionate about modern UI/UX design and always improving my craft.",
  contactText: "I'm open to freelance projects. Send me a message and I'll get back to you.",
  cvLink: "CV.pdf",                         // keep CV.pdf in the same folder as index.html
  accent: "#b0524a",
  accentOptions: ["#b0524a", "#8a5a44", "#6f8f7a", "#c79a4b"],
  contacts: [
    { label: "Email",    text: "tasneem.ashraf.ll23@gmail.com", url: "mailto:tasneem.ashraf.ll23@gmail.com" },
    { label: "LinkedIn", text: "linkedin.com/in/tasneemashraf1", url: "https://www.linkedin.com/in/tasneemashraf1" }
  ],
  projects: [
    { title: "Jewelry Website",
      desc: "A multi-page jewelry store I built with HTML, CSS and JavaScript: home page, store with add-to-cart, shopping cart saved in the browser, and a customer information form with validation.",
      tags: ["HTML", "CSS", "JavaScript"],
      url: "jewelry/index.html",    // opens the Jewelry website
      thumb: "Screenshot 2026-09-30 075212.png" }  // image shown on the card
  ],
  skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  experience: [
    { period: "07/2026 – Now", role: "Front-End Trainee", text: "DEPI – React Frontend Development" }
  ],
  education: [
    { period: "2026 – 2029", role: "Computer & Information Science, Mansoura University", text: "Bachelor of Science in Computer & Information Science." }
  ]
};

/* ============================================================ */

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

document.title = DATA.name + " – Frontend Developer";
$("name").innerHTML = esc(DATA.name).replace(esc(DATA.accentWord), `<span>${esc(DATA.accentWord)}</span>`);
$("bio").textContent = DATA.bio;
$("photo").src = DATA.photo;
$("heroBtns").innerHTML = `<a class="btn primary" id="cvBtn" target="_blank" rel="noopener" href="${esc(DATA.cvLink)}">Download CV</a>`;

$("projectList").innerHTML = DATA.projects.map(p => `
  <${p.url ? `a href="${esc(p.url)}" target="_blank" rel="noopener"` : "article"} class="card">
    <div class="thumb" ${p.thumb ? `style="background-image:url('${esc(p.thumb)}')"` : ""}>${p.thumb ? "" : esc(p.title)}</div>
    <div class="body">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      ${p.url ? '<span class="go">Open website</span>' : ""}
    </div>
  </${p.url ? "a" : "article"}>`).join("");

$("skillList").innerHTML = DATA.skills.map(s => `<span>${esc(s)}</span>`).join("");
const jobRow = j => `
  <div class="job"><time>${esc(j.period)}</time><div><h3>${esc(j.role)}</h3><p>${esc(j.text)}</p></div></div>`;
$("jobList").innerHTML = DATA.experience.map(jobRow).join("");
$("eduList").innerHTML = DATA.education.map(jobRow).join("");

$("contactText").textContent = DATA.contactText;
$("contactLinks").innerHTML = DATA.contacts.map(c => `<a href="${esc(c.url)}" ${c.url.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'}><b>${esc(c.label)}</b><span>${esc(c.text)}</span></a>`).join("");
$("footer").textContent = "© " + new Date().getFullYear() + " " + DATA.name;

function setAccent(c){ document.documentElement.style.setProperty("--accent", c); }
setAccent(DATA.accent);
$("swatches").innerHTML = DATA.accentOptions.map(c => `<button style="background:${c}" aria-label="Accent ${c}" data-c="${c}"></button>`).join("");
$("swatches").addEventListener("click", e => { if (e.target.dataset.c) setAccent(e.target.dataset.c); });
