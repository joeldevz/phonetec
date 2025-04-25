function toggle() {
  let e = document.querySelector("#sec"),
    t = document.querySelector("#main"),
    o = document.querySelector("#navigation"),
    c = document.querySelector("header");
  o.classList.toggle("active"),
    e && e.classList.toggle("active"),
    t.classList.toggle("active"),
    c.classList.toggle("active");
}
window.addEventListener("scroll", (e) => {
  let t = document.querySelector("header");
  window.scrollY >= 100
    ? t.classList.add("bg-nav")
    : t.classList.remove("bg-nav");
});
let form = document.getElementById("sendmail");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var t = {
    subject: form.subject.value,
    name: form.name.value,
    email: form.email.value,
    text: form.texto.value,
  };
  fetch("./api/mail", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(t),
  })
    .then(function (e) {
      if (e.ok) return e.text();
      throw "Error en la llamada Ajax";
    })
    .then(function (e) 
	    {
		    console.log(e)
      alertify.success("Enviado"),
        (form.subject.value = ""),
        (form.name.value = ""),
        (form.email.value = ""),
        (form.texto.valu = "");
    })
    .catch(function (e) 
	    {
		    alertify.success("error")
      console.log(e);
    }),
    console.log(form.email);
});

function showTitle(position) {
  const mobile = document.querySelector("#mobile");
  const tablet = document.querySelector("#tablet");
  const pc = document.querySelector("#pc");
  switch (position) {
    case 1:
      mobile.classList.add("show");
      tablet.classList.remove("show");
      pc.classList.remove("show");
      time(position);
      break;
    case 2:
      mobile.classList.remove("show");
      tablet.classList.add("show");
      pc.classList.remove("show");
      time(position);
      break;
    case 3:
      mobile.classList.remove("show");
      tablet.classList.remove("show");
      pc.classList.add("show");
      time(0);
      break;
    default:
      break;
  }
}
function reviews(position) {
  let review1 = document.querySelector("#radio-1");
  let review2 = document.querySelector("#radio-2");
  let review3 = document.querySelector("#radio-3");
  let review4 = document.querySelector("#radio-4");

  switch (position) {
    case 1:
      review1.checked = true;
      review2.checked = false;
      review3.checked = false;
      review4.checked = false;
      time1(position);
      break;
    case 2:
      review1.checked = false;
      review2.checked = true;
      review3.checked = false;
      review4.checked = false;
      time1(position);
      break;
    case 3:
      review1.checked = false;
      review2.checked = false;
      review3.checked = true;
      review4.checked = false;
      time1(position);
      break;
    case 4:
      review1.checked = false;
      review2.checked = false;
      review3.checked = false;
      review4.checked = true;
      time1(0);
      break;
    default:
      break;
  }
}
function time(position) {
  setTimeout(() => {
    showTitle(position + 1);
  }, 2000);
}
function time1(position) {
  setTimeout(() => {
    reviews(position + 1);
  }, 2500);
}
function CheckCookies() {
  let show = document.getElementById("cookie");
  console.log(localStorage.getItem("Cookies"))
  if (localStorage.getItem("Cookies") === "Accept") {
    show.style.display = "none";
  }
}
function AcceptCookies() {
  let show = document.getElementById("cookie");
  localStorage.setItem("Cookies", "Accept");
  show.style.display="none"
}
