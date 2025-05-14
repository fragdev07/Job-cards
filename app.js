
let applyBtns = document.querySelectorAll('.cd-apply-btn');
let isActive = false;

applyBtns.forEach(btn => {
  let txt = btn.querySelector('.txt');
  let txtClone = btn.querySelector('.txt-clone');
  let overlay = btn.querySelector('.btn-overlay');

  btn.addEventListener('mouseenter', () => {
    gsap.to(txt, { y: '-100%', duration: 0.4, ease: 'expo.out' });
    gsap.to(txtClone, { bottom: '0%', duration: 0.4, ease: 'expo.out' });
    gsap.to(overlay, {
      bottom: '0%',
      duration: 0.4,
      borderTopLeftRadius: '0%',
      borderTopRightRadius: '0%',
      ease: 'expo.out'
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(txt, { y: '0%', duration: 0.4, ease: 'expo.out' });
    gsap.to(txtClone, { bottom: '-100%', duration: 0.4, ease: 'expo.out' });
    gsap.to(overlay, {
      bottom: '-110%',
      duration: 0.4,
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      ease: 'expo.out'
    });
  });
})
