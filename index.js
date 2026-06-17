const counters =
    document.querySelectorAll("[data-count]");

counters.forEach(counter => {

    const target =
        +counter.getAttribute("data-count");

    let count = 0;

    const update = () => {

        const increment = target / 100;

        if (count < target) {

            count += increment;

            counter.innerText =
                Math.ceil(count);

            requestAnimationFrame(update);

        }
        else {

            counter.innerText = target + "+";

        }

    };

    update();

});

window.addEventListener("scroll", () => {

    let scrollTop =
        document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress =
        (scrollTop / height) * 100;

    document.querySelector(".scroll-bar")
        .style.width = progress + "%";

});