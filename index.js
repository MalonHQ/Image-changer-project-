let malon = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

malon.addEventListener("wheel", (aaa) => {
    evt.preventDefault();
malon.scrollLeft += evt.deltY
malon.style.scrollBehavior = "auto";

});

nextBtn.addEventListener("click", () => {
    malon.style.scrollBehavior = "smooth";
    malon.scrollLeft += 900;
});

backBtn.addEventListener("click", () =>{
    malon.style.scrollBehavior = "smooth";
    malon.scrollLeft -= 900;
});