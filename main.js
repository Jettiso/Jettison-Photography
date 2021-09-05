gsap.registerPlugin(ScrollTrigger);

gsap.from('.grid1', {
    y: -55,
    duration: 1,
    opacity: 0,
    ease: "power1",
    scrollTrigger: {
        trigger: ".grid1 h1",
        start:"top ",
        end: "bottom",
        scrub: 1
    }
});
gsap.from('.anim-flex', {
    y: -55,
    duration: 1,
    opacity: 0,
    ease: "power1",
    scrollTrigger: {
        trigger: ".anim-flex",
        start:"top 70% ",
        end: "bottom",
        scrub: 1
    }
});
gsap.from('.grid2', {
    x: -55,
    duration: 1,
    opacity: 0,
    ease: "power1",
    scrollTrigger: {
        trigger: ".grid2",
        start:"top 90% ",
        end: "bottom",
        scrub: 1
    }
});
gsap.from('.grid3', {
    x: 55,
    duration: 1,
    opacity: 0,
    ease: "power1",
    scrollTrigger: {
        trigger: ".grid3",
        start:"top 90% ",
        end: "bottom",
        scrub: 1
    }
});
gsap.from('.grid4', {
    x: -55,
    duration: 1,
    opacity: 0,
    ease: "power1",
    scrollTrigger: {
        trigger: ".grid4",
        start:"top 90% ",
        end: "bottom",
        scrub: 1
    }
});
gsap.from('.img1', {
    x: -55,
    duration: 1,
    opacity: 0,
    ease: "power1",
    scrollTrigger: {
        trigger: ".img1",
        start:"top 90% ",
        end: "bottom",
        scrub: 1
    }
});
gsap.from('.img2', {
    x: 55,
    duration: 1,
    opacity: 0,
    ease: "power1",
    scrollTrigger: {
        trigger: ".img2",
        start:"top 90% ",
        end: "bottom",
        scrub: 1
    }
});
gsap.from('.img3', {
    x: -55,
    duration: 1,
    opacity: 0,
    ease: "power1",
    scrollTrigger: {
        trigger: ".img3",
        start:"top 90% ",
        end: "bottom",
        scrub: 1
    }
});
gsap.from('.img4', {
    x: -100,
    duration: 1,
    opacity: 0,
    ease: "power1",
    scrollTrigger: {
        trigger: ".grid6",
        start:"top center",
        end: "bottom",
        scrub: 1,
    }
});
gsap.from('.nxt', {
    x: -100,
    duration: 3,
    opacity: 0,
    ease: "power1",
    scrollTrigger: {
        trigger: ".grid6",
        start:"top ",
        end: "top",
        scrub: 1
    }
});

