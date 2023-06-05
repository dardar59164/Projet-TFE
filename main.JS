//Changement des feuilles de style
let styles = document.querySelectorAll(".styling")
let documentStyle = document.querySelector('#changing')

styles.forEach(element => {
    console.log(element)
    element.addEventListener('click', function(){
        documentStyle.setAttribute("href", element.dataset.styling);
    })
});

/* ↓↓ JavaScript Page 2000-2005 ↓↓ */
let articles2005 = document.querySelectorAll('#annee2005 article')
function showArticle(articleID){
    articles2005.forEach(e => {
        e.style.display = 'none';
    })
    articles2005[articleID].style.display = 'block';
}
gsap.registerPlugin(ScrollTrigger);
gsap.to(".parallax",{
  scrollTrigger: {
    trigger:"#Parallax-header",
    toggleActions:"play pause reverse pause",
    start:"bottom center",
    end:"bottom top",
    scrub:1,
    // markers:true,
  },
  y: 300,
  ease: "none",
  backdropFilter: "blur(50px)",
  duration: 2
});