const loader = document.getElementById("loader");
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 2200);
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);

  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll("nav > a:not(.tenant-btn)");

  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 140;
    if (window.scrollY >= top) current = section.id;
  });

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

year.textContent = new Date().getFullYear();

/* -------------------------------------------------
   GOPMAHALL Dil Desteği
------------------------------------------------- */
const translations = {
  tr: {
    tenantPanel: "Kiracı Paneli",
    navHome: "Ana Sayfa",
    navAbout: "Hakkımızda",
    navGallery: "Galeri",
    navContact: "İletişim",
    heroEyebrow: "GOPMAHALL • TOKAT",
    heroTitle: "Şehrin",
    heroTitleStrong: "Buluşma Noktası",
    heroText: "Modern anlayışı, seçkin hizmetleri ve merkezi konumuyla GOPMAHALL sizi bekliyor.",
    discover: "Keşfet",
    aboutEyebrow: "GOPMAHALL",
    aboutTitle1: "Modern.",
    aboutTitle2: "Seçkin.",
    aboutTitle3: "Merkezi.",
    aboutCardTitle: "GOPMAHALL",
    aboutCardText: "Tokat'ın gelişen bölgelerinden birinde yer alan GOPMAHALL, modern mimari anlayışı ve seçkin işletmeleriyle ziyaretçilerine kaliteli bir deneyim sunmayı hedefler.",
    centralTitle: "Merkezi<br>Konum",
    centralText: "Tokat Merkez'de kolay ulaşılabilir bir lokasyon.",
    businessTitle: "Seçkin<br>İşletmeler",
    businessText: "Farklı ihtiyaçlara hitap eden kiracı ve işletmeler.",
    galleryEyebrow: "GÖRSELLER",
    galleryTitle1: "GOPMAHALL'dan",
    galleryTitle2: "Kareler",
    galleryNote: "GOPMAHALL • TOKAT",
    galleryMainAlt: "GOPMAHALL",
    galleryPlaceAlt: "GOPMAHALL Mekân",
    galleryDetailAlt: "GOPMAHALL Detay",
    contactEyebrow: "BİZE ULAŞIN",
    contactTitle1: "İletişim &",
    contactTitle2: "Konum",
    callUs: "BİZİ ARAYIN",
    whatsapp: "WHATSAPP",
    sendMessage: "Mesaj Gönder",
    instagram: "INSTAGRAM",
    address: "ADRES",
    addressText: "Bedestenlioğlu Mahallesi<br>Kampüs Caddesi 17/2<br>60100 Tokat Merkez / Tokat",
    openMaps: "Google Maps'te Aç",
    openLocation: "Google Maps'te Konumu Aç",
    rights: "Tüm hakları saklıdır."
  },
  en: {
    tenantPanel: "Tenant Panel",
    navHome: "Home",
    navAbout: "About",
    navGallery: "Gallery",
    navContact: "Contact",
    heroEyebrow: "GOPMAHALL • TOKAT",
    heroTitle: "The City's",
    heroTitleStrong: "Meeting Point",
    heroText: "GOPMAHALL welcomes you with its modern approach, distinguished businesses and central location.",
    discover: "Discover",
    aboutEyebrow: "GOPMAHALL",
    aboutTitle1: "Modern.",
    aboutTitle2: "Distinctive.",
    aboutTitle3: "Central.",
    aboutCardTitle: "GOPMAHALL",
    aboutCardText: "Located in one of Tokat's developing areas, GOPMAHALL aims to offer visitors a quality experience with its modern architectural approach and distinguished businesses.",
    centralTitle: "Central<br>Location",
    centralText: "An easily accessible location in central Tokat.",
    businessTitle: "Selected<br>Businesses",
    businessText: "Tenants and businesses serving a variety of needs.",
    galleryEyebrow: "GALLERY",
    galleryTitle1: "Moments from",
    galleryTitle2: "GOPMAHALL",
    galleryNote: "GOPMAHALL • TOKAT",
    galleryMainAlt: "GOPMAHALL",
    galleryPlaceAlt: "GOPMAHALL Interior",
    galleryDetailAlt: "GOPMAHALL Detail",
    contactEyebrow: "GET IN TOUCH",
    contactTitle1: "Contact &",
    contactTitle2: "Location",
    callUs: "CALL US",
    whatsapp: "WHATSAPP",
    sendMessage: "Send a Message",
    instagram: "INSTAGRAM",
    address: "ADDRESS",
    addressText: "Bedestenlioğlu District<br>Kampüs Avenue 17/2<br>60100 Tokat Center / Tokat",
    openMaps: "Open in Google Maps",
    openLocation: "Open Location in Google Maps",
    rights: "All rights reserved."
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.tr;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.dataset.i18nAlt;
    if (dict[key] !== undefined) el.alt = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("gopmahall-language", lang);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

const savedLanguage = localStorage.getItem("gopmahall-language") || "tr";
setLanguage(savedLanguage);
