// AOS animation
AOS.init({
    once: true,
});

// work with form
const form = document.querySelector(".js-form");
const loader = document.querySelector(".js-loader");

setInterval(() => {
    loader.classList.remove("active");
}, 1100);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    loader.classList.add("is-loader");
    document.body.classList.add("is-loader");

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbw6BvFz7bSvuhlrr2-Awv573qz-0OfB-cAhCNyMH3OcLNjKwJOncZVY3kzL3s79Gfg/exec";

    const dataTime = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    document.querySelector(".js-form-date").value = dataTime;

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            window.location.href =
                "https://alexandr-inna.vercel.app/thanks.html";
            console.log("Success!", response);
            document.body.classList.remove("is-loader");
        })
        .catch((error) => {
            console.error("Error!", error.message);
        });
});

// work with preloader
const preloader = document.querySelector(".js-preloader");

window.onload = function () {
    preloader.classList.add("active");
};
