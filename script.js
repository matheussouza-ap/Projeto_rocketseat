function toggleMode(){
    const hmtl = document.documentElement
    hmtl.classList.toggle('light')

  //  if (hmtl.classList.contains('light')){
  //      hmtl.classList.remove('light')
  //  }else{
  //      hmtl.classList.add('light')
 //   }

 const img = document.querySelector("#profile img")

 if (hmtl.classList.contains('light')){
    img.setAttribute('src', './assets/avatar1.png')

 }else{
    img.setAttribute('src', './assets/avatar.png')
 }



}