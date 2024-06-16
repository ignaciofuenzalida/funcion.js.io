

const caja1 = document.getElementById("caja1")
    
function cambiarColor (caja1 ,color = "black"){
  caja1.style.backgroundColor = color
  }
  
  caja1.addEventListener("click", () => {
      cambiarColor (caja1, "black")
  });


const caja2 = document.getElementById("caja2")
    
function cambiarColor (caja2 ,color = "black"){
  caja2.style.backgroundColor = color
  }
  
  caja2.addEventListener("click", () => {
      cambiarColor (caja2, "black")
  });


const caja3 = document.getElementById("caja3")
    
function cambiarColor (caja3 ,color = "black"){
  caja3.style.backgroundColor = color
  }
  
  caja3.addEventListener("click", () => {
      cambiarColor (caja3, "black")
  });


const caja = document.getElementById("caja4")
    
function cambiarColor (caja4 ,color = "black"){
  caja4.style.backgroundColor = color
  }
  
caja4.addEventListener("click", () => {
      cambiarColor (caja4, "black")
  });

  //key////

  document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    key.style.backgroundColor = 'pink'
    } else if (event.key === 's') {
     key.style.backgroundColor = 'orange'
    } else if (event.key === 'd') {
    key.style.backgroundColor = 'skyBlue'
    }


   })
    
//key2///

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
    key2.style.backgroundColor = 'purple'
    } else if (event.key === 'w') {
     key2.style.backgroundColor = 'gray'
    } else if (event.key === 'e') {
    key2.style.backgroundColor = 'brown'
    }
   })