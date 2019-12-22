const controller = new ScrollMagic.Controller();
const image = new TweenMax.to("#image", 2000, {
    scale: .2,
    translateY: 730,
});
const image2 = new TweenMax.to(".trainer", 2000, {
    height: '100vh',
    alpha: 1
});
new ScrollMagic.Scene({triggerElement: "#trigger1", duration: '100%', offset: $(window).height() / 1.5})
    .setTween(image)
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#trigger1", duration: '100%', offset: $(window).height() / 1.5})
    .setTween(image2)
    .addTo(controller);
