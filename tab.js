const TABS = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: "🏠"
  },
  {
    id: "inventory",
    title: "Inventory",
    icon: "🎒"
  },
  {
    id: "market",
    title: "Market",
    icon: "📈"
  },
  {
    id: "json",
    title: "json",
    icon: "💠"
  }
];

function buildBottomNav() {
  const nav = document.querySelector(".bottom-nav");

  nav.innerHTML = "";

  TABS.forEach((tab, index) => {
    const button = document.createElement("button");

    button.className = "nav-item";
    if (index === 0) button.classList.add("active");

    button.dataset.tab = tab.id;

    button.innerHTML = `
      <span>${tab.icon}</span>
      <small>${tab.title}</small>
    `;

    button.addEventListener("click", () => openTab(tab.id));

    nav.appendChild(button);
  });
}

function openTab(tab) {
  document.querySelectorAll(".nav-item")
    .forEach(btn => btn.classList.remove("active"));

  document
    .querySelector(`[data-tab="${tab}"]`)
    .classList.add("active");

  console.log("Open:", tab);
}

buildBottomNav();