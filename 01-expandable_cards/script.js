const panels = document.getElementsByClassName("panel");

console.log(panels);

for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", () => {
        panels[i].classList.add("active");
    });
}
