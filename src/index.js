const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

// header içindeki navın içindeki a ların yazı stilini italic yapıyoruz.
const navItems = document.querySelectorAll("header nav a");

navItems.forEach((item,i)=>{
  let sayi = i + 1;
  item.textContent = siteContent["nav"][`nav-item-${sayi}`];
  item.setAttribute("class","italic");
});

// const navItems = document.querySelectorAll("header nav a");

// const updatedNavItems = Array.from(navItems).map((item, i) => {
//   let sayi = i + 1;
//   item.textContent = siteContent["nav"][`nav-item-${sayi}`];
//   item.setAttribute("class","italic");
//   return item;
// });



//sayfadaki text'leri oluşturma;

// top-content textleri
const topContent = document.querySelectorAll(".top-content .text-content");

topContent[0].querySelector("h4").textContent = siteContent["ana-içerik"]["özellikler-h4"];

topContent[1].querySelector("h4").textContent=siteContent["ana-içerik"]["hakkımızda-h4"];

topContent[0].querySelector("p").textContent = siteContent["ana-içerik"]["özellikler-içerik"];

topContent[1].querySelector("p").textContent=siteContent["ana-içerik"]["hakkımızda-içerik"];

//bottom-content textleri

const bottomContent=document.querySelectorAll(".bottom-content .text-content");

bottomContent[0].querySelector("h4").textContent = siteContent["ana-içerik"]["servisler-h4"];

bottomContent[1].querySelector("h4").textContent = siteContent["ana-içerik"]["ürünler-h4"];

bottomContent[2].querySelector("h4").textContent = siteContent["ana-içerik"]["vizyon-h4"];

bottomContent[0].querySelector("p").textContent = siteContent["ana-içerik"]["servisler-içeriği"];

bottomContent[1].querySelector("p").textContent = siteContent["ana-içerik"]["ürünler-içeriği"];

bottomContent[2].querySelector("p").textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

//iletişim kısmı textleri;

const contactHead = document.querySelector(".contact h4");

contactHead.textContent = siteContent["iletisim"]["iletişim-h4"];

const contactParagraph = document.querySelectorAll(".contact p");

contactParagraph[0].textContent = siteContent["iletisim"]["adres"];
contactParagraph[1].textContent = siteContent["iletisim"]["telefon"];
contactParagraph[2].textContent = siteContent["iletisim"]["email"];

// footer kısmı text;

const footerLinks = document.querySelector("footer a");

footerLinks.textContent=siteContent["footer"]["copyright"];

footerLinks.setAttribute("class","bold");


// resimler

const logo =document.getElementById("logo-img")
const ctaImg=document.getElementById("cta-img");
const midImg=document.getElementById("middle-img");


logo.src= siteContent["images"]["logo-img"];
ctaImg.src= siteContent["images"]["cta-img"];
midImg.src= siteContent["images"]["accent-img"];

// button

const ctaHead = document.querySelector(".cta .cta-text h1");
const ctaBtn = document.querySelector(".cta .cta-text button");

ctaHead.textContent = siteContent["cta"]["h1"];

ctaBtn.textContent= siteContent ["cta"]["button"]
