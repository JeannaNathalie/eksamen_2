window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  hideAllScreens();

  document.querySelector("#tema_2_knap").addEventListener("mousedown", tema2);
  document.querySelector("#tema_3_knap").addEventListener("mousedown", tema3);
  document.querySelector("#tema_4_knap").addEventListener("mousedown", tema4);
  document.querySelector("#tema_5_knap").addEventListener("mousedown", tema5);
  document.querySelector("#tema_6_knap").addEventListener("mousedown", tema6);
}

function hideAllScreens() {
  console.log("hideallscreens");
  document.querySelector("#tema_2_img").classList.add("hide");
  document.querySelector("#tema_2_img_2").classList.add("hide");
  document.querySelector("#tema_3_img").classList.add("hide");
  document.querySelector("#tema_3_img_2").classList.add("hide");
  document.querySelector("#tema_4_img").classList.add("hide");
  document.querySelector("#tema_5_img").classList.add("hide");
  document.querySelector("#tema_5_img_2").classList.add("hide");
  // document.querySelector("#tema_6_img").classList.add("hide");

  // --------LINKS-------
  document.querySelector("#website_link").classList.add("hide");
  document.querySelector("#emnesite_link").classList.add("hide");
  document.querySelector("#xd_link").classList.add("hide");
  document.querySelector("#animation_link").classList.add("hide");
  document.querySelector("#pilot_link").classList.add("hide");
  document.querySelector("#redesign_link").classList.add("hide");
}

function tema2() {
  hideAllScreens();
  console.log("tema2");
  document.querySelector("#tema_2_img").classList.remove("hide");
  document.querySelector("#tema_2_img_2").classList.remove("hide");
  document.querySelector("#tema_2_knap").addEventListener("click", tema2);
  document.querySelector("#website_link").classList.remove("hide");
  document.querySelector("#emnesite_link").classList.remove("hide");
}

function tema3() {
  hideAllScreens();
  document.querySelector("#tema_3_img").classList.remove("hide");
  document.querySelector("#tema_3_img_2").classList.remove("hide");
  document.querySelector("#tema_3_knap").addEventListener("click", tema3);
  document.querySelector("#xd_link").classList.remove("hide");
}

function tema4() {
  hideAllScreens();
  document.querySelector("#tema_4_img").classList.remove("hide");
  document.querySelector("#tema_4_knap").addEventListener("click", tema4);
  document.querySelector("#animation_link").classList.remove("hide");
}

function tema5() {
  hideAllScreens();
  document.querySelector("#tema_5_img").classList.remove("hide");
  document.querySelector("#tema_5_img_2").classList.remove("hide");
  document.querySelector("#tema_5_knap").addEventListener("click", tema5);
  document.querySelector("#pilot_link").classList.remove("hide");
  document.querySelector("#redesign_link").classList.remove("hide");
}

function tema6() {
  hideAllScreens();
  document.querySelector("#tema_6_img").classList.remove("hide");
  document.querySelector("#tema_6_knap").addEventListener("click", tema6);
}
