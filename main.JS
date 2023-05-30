//Changement des feuilles de style
let styles = document.querySelectorAll(".styling")
let documentStyle = document.querySelector('#changing')

styles.forEach(element => {
    console.log(element)
    element.addEventListener('click', function(){
        documentStyle.setAttribute("href", element.dataset.styling)
    })
});

