// فارسی کننده اعداد

const persianNumbers = {
  0: "۰",
  1: "۱",
  2: "۲",
  3: "۳",
  4: "۴",
  5: "۵",
  6: "۶",
  7: "۷",
  8: "۸",
  9: "۹",
};

function convertToPersian(text) {
  return text.replace(/[0-9]/g, (match) => persianNumbers[match]);
}

// تاریخ

function gregorian_to_jalali(gy, gm, gd) {
  var g_d_m, jy, jm, jd, gy2, days;
  g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  gy2 = gm > 2 ? gy + 1 : gy;
  days =
    355666 +
    365 * gy +
    ~~((gy2 + 3) / 4) -
    ~~((gy2 + 99) / 100) +
    ~~((gy2 + 399) / 400) +
    gd +
    g_d_m[gm - 1];
  jy = -1595 + 33 * ~~(days / 12053);
  days %= 12053;
  jy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  if (days < 186) {
    jm = 1 + ~~(days / 31);
    jd = 1 + (days % 31);
  } else {
    jm = 7 + ~~((days - 186) / 30);
    jd = 1 + ((days - 186) % 30);
  }
  return [jy, jm, jd];
}

MyDate = new Date();
Year = MyDate.getFullYear();
Month = MyDate.getMonth() + 1;
Day = MyDate.getDate();

var Result = document.getElementById("Result");

Tarikh_Shamci = gregorian_to_jalali(Year, Month, Day);
Result.innerHTML = convertToPersian(
  String(Tarikh_Shamci[0]) +
    "/" +
    String(Tarikh_Shamci[1]) +
    "/" +
    String(Tarikh_Shamci[2])
);

// ساعت
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = convertToPersian(
    h + ":" + m + ":" + s
  );
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

// فرم ورود / ثبت نام

// باز شدن فرم
let backSabtNam = document.getElementById("backSabtNam");
let kadrSabtNam = document.getElementById("kadrSabtNam");

function openKadrLogin() {
  backSabtNam.style.opacity = "1";
  backSabtNam.style.zIndex = "9999";
  backSabtNam.style.height = "100vh";
  kadrSabtNam.style.opacity = "1";
  kadrSabtNam.style.zIndex = "9999";
}

// بسته شدن فرم

function closeKadrLogin() {
  backSabtNam.style.opacity = "0";
  backSabtNam.style.zIndex = "-9999";
  backSabtNam.style.height = "0px";
  kadrSabtNam.style.opacity = "0";
  kadrSabtNam.style.zIndex = "-9999";
}

// تایید فرم ثبت نام

function taeedShom() {
  phoneNumberUser = document.getElementById("phoneNumberUser").value;
  if (
    isNaN(phoneNumberUser) ||
    phoneNumberUser.length < 11 ||
    phoneNumberUser.length > 11
  ) {
    alert("لطفا شماره را به صورت صحیح (لاتین) وارد نمایید");
  } else {
    alert("ورود  موفقیت آمیز بود");
  }
}

// اسلایدر

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let intrevalSlider = setInterval("plusSlides(1)", 5000);

function stopSlide() {
  clearInterval(intrevalSlider);
}

function resumeSlide() {
  intrevalSlider = setInterval("plusSlides(1)", 5000);
}

// s2 swiper

const swiperEl = document.querySelector(".s2Swiper");
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 35,
    },

    1400: {
      slidesPerView: 3.5,
      spaceBetween: 35,
    },
  },
});
swiperEl.initialize();

// s5 swiper

const swiperEl2 = document.querySelector(".s5Swiper");
Object.assign(swiperEl2, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },

    1400: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },

    1800: {
      slidesPerView: 3.5,
      spaceBetween: 35,
    },
  },
});
swiperEl2.initialize();

// s7 swiper

const swiperEl3 = document.querySelector(".s7Swiper");
Object.assign(swiperEl3, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 35,
    },

    1400: {
      slidesPerView: 3.5,
      spaceBetween: 35,
    },
  },
});
swiperEl3.initialize();

// افزودن به سبد خرید

// notif

function openKadrNotif() {
  let backNotifSabad = document.getElementById("backNotifSabad");
  let kadrNotifSabad = document.getElementById("kadrNotifSabad");

  tasvirMahsool = document.querySelector(".tasvirMahsool").src;
  nameMahsool = document.querySelector(".nameMahsool").innerHTML;
  vaznMahsool = document.querySelector(".vaznMahsool");
  MatnVaznMahsool = vaznMahsool.options[vaznMahsool.selectedIndex].text;
  rangMahsool = document.querySelector(".rangMahsool");
  MatnRangMahsool = rangMahsool.options[rangMahsool.selectedIndex].text;
  sizeMahsool = document.querySelector(".sizeMahsool");
  MatnSizeMahsool = sizeMahsool.options[sizeMahsool.selectedIndex].text;

  if (
    MatnVaznMahsool == "وزن مورد نظر را انتخاب کنید" ||
    MatnRangMahsool == "رنگ مورد نظر را انتخاب کنید" ||
    MatnSizeMahsool == "سایز مورد نظر را انتخاب کنید"
  ) {
    alert("لطفا گزینه های مدنظر خود را انتخاب کنید");
  } else {
    // کادر

    backNotifSabad.style.opacity = "1";
    backNotifSabad.style.zIndex = "9999";

    kadrNotifSabad.style.opacity = "1";
    kadrNotifSabad.style.zIndex = "9999";

    // تصویر وزن اسم

    document.getElementById("tasvirMahsool").src = tasvirMahsool;
    document.getElementById("namMahsool").innerHTML = nameMahsool;
    document.getElementById("vaznMahsool").innerHTML = MatnVaznMahsool;

    closeNotifDealy = setTimeout(closeKadrNotif, 5000);
  }
}

function closeKadrNotif() {
  let backNotifSabad = document.getElementById("backNotifSabad");
  let kadrNotifSabad = document.getElementById("kadrNotifSabad");

  backNotifSabad.style.opacity = "0";
  backNotifSabad.style.zIndex = "-9999";

  kadrNotifSabad.style.opacity = "0";
  kadrNotifSabad.style.zIndex = "-9999";

  clearTimeout(closeNotifDealy);
}

function setNotifDelay() {
  setTimeout(closeKadrNotif, 5000);
}

function clearNotifDelay() {
  clearTimeout(closeNotifDealy);
}
