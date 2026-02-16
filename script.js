function goToInvite() {
  const name = document.getElementById("guestName").value;
  
  if (name.trim() === "") {
    alert("Please enter your name ❤️");
    return;
  }
  
  localStorage.setItem("guestName", name);
  window.location.href = "invitation.html";
}

const welcome = document.getElementById("welcomeText");
const special = document.getElementById("specialMessage");

if (welcome) {
  const guest = localStorage.getItem("guestName");
  welcome.innerText = "Dear " + guest + ",";
  special.innerText = `Your presence will make our day truly special, ${guest} ❤️`;
  
  if (guest && guest.toLowerCase().includes("saranya")) {
    alert("From this moment, till forever — it's you ❤️");
  }
}



// Guest name animation
const name = new URLSearchParams(location.search).get("name");
if (name) {
  const el = document.getElementById("guestText");
  el.innerText = "Dear " + name + ",";
  el.style.animation = "fade 2s ease";
}

// Countdown
console.log("script.js loaded ✅");

const timerEl = document.getElementById("timer");

if (!timerEl) {
  console.error("❌ Timer element not found");
} else {
  console.log("✅ Timer element found");
}

// SET WEDDING DATE (YYYY-MM-DDTHH:MM:SS)
const weddingDate = new Date("2026-05-18T09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;
  
  if (diff <= 0) {
    timerEl.innerHTML = "💍 Wedding Day 💍";
    return;
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  
  timerEl.innerHTML =
    days + " Days " +
    hours + " Hours " +
    minutes + " Minutes " +
    seconds + " Seconds";
}

updateCountdown();
setInterval(updateCountdown, 1000);