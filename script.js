// Change this to the developer's WhatsApp number (country code, no + or spaces)
const WHATSAPP = "254791433904";

// Unit data: edit sizes and prices per project
const units = {
  1: { img: "images/1bedroom.jpeg", title: "1 Bedroom", size: "58 sqm", price: "From KES 9,500,000" },
  2: { img: "images/3bedroom.jpeg", title: "2 Bedroom", size: "96 sqm", price: "From KES 14,800,000" },
  3: { img: "images/2bedroom.jpeg", title: "3 Bedroom", size: "142 sqm", price: "From KES 22,000,000" }
};

// Tabs: swap the unit details when clicked
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
    const u = units[tab.dataset.type];
    document.getElementById("u-img").src = u.img;
    document.getElementById("u-title").textContent = u.title;
    document.getElementById("u-size").textContent = u.size;
    document.getElementById("u-price").textContent = u.price;
  });
});

// Form: open WhatsApp with the visitor's details pre-filled
document.getElementById("visit-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const msg = `Hi, I'm ${name} (${phone}). I'd like to visit The Arden on ${date}.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
});