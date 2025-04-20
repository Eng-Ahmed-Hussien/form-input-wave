const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
});
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var tabs = document.querySelectorAll(".tab");
var elemRemoveFunc = (elem) => elem.classList.remove("active"),
    elemAddFunc = (elem) => elem.classList.add("active"),
    n = document.querySelector(".reg"),
    _display = (elem, x) => elem.style.display = x;
tabs = Array.from(tabs);
n.addEventListener("click", function () {
    elemRemoveFunc(LoginForm)
    elemAddFunc(RegForm);
    elemRemoveFunc(tabs[0]),
        elemAddFunc(tabs[1])
})

function register() {
    elemRemoveFunc(LoginForm)
    elemAddFunc(RegForm);
    showIndicator();
}
function login() {
    elemRemoveFunc(RegForm)
    elemAddFunc(LoginForm);
    showIndicator()
}
function showIndicator() {
    tabs.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            tabs.forEach((e) => {
                elemRemoveFunc(e);
            });
            elemAddFunc(e.target);
        });
    });
}
showIndicator();