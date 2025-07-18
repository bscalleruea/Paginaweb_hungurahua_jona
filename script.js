let index = 0;
const imagenes = [
  'assets/hungurahua.jpg',
  'assets/hungurahua2.jpg',
  'assets/hungurahua3.jpg'
];

function cambiarImagen() {
  const imgElements = document.querySelectorAll(".imagenes img");
  index = (index + 1) % imagenes.length;
  imgElements.forEach((img, i) => {
    img.src = imagenes[(index + i) % imagenes.length];
  });
}

