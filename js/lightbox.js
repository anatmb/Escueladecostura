const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1=document.querySelector('.hamburger');

imagenes.forEach( imagen =>{
    imagen.addEventListener('click', ()=>{
      /*alert("auch, me dolio")*/
      aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
 if(e.target !== imageneslight){
     contenedorLight.classList.toggle('show')
     imageneslight.classList.toggle('showImage')
     hamburguer1.style.opacity = '1'
 }

})

const aparecerImagen = (imagen)=>{
   imageneslight.src = imagen;
   contenedorLight.classList.toggle('show')
   imageneslight.classList.toggle('showImage')
   hamburguer1.style.opacity = '0'
}