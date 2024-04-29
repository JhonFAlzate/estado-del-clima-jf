

const imageClame = (clima) => {
  let numImagen = 0
  if (clima < 20) {
    numImagen = 3
  } else if (clima < 30) {
        numImagen=1
  }else {
    numImagen= 2
  }
  
  return numImagen
}

export default imageClame