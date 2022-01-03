const respuestas = {
    firstQuestion: "Inca",
    secondQuestion: "Budapest",
    thirdQuestion: "Suiza",
    fourthQuestion: "1997",
    fifthQuestion: "Harry Potter",
}
    const v = document.querySelectorAll('input[name="firstQuestion"]');
    const w = document.querySelectorAll('input[name="secondQuestion"]');
    const x = document.querySelectorAll('input[name="thirdQuestion"]');
    const y = document.querySelectorAll('input[name="fourthQuestion"]');
    const z = document.querySelectorAll('input[name="fifthQuestion"]');

    // console.log("lo primero", x)
  

    const botonsubmit = document.getElementById("sendbuttom");

    // console.log(botonsubmit)

    const Arreglo = [v, w, x, y, z];

  //Cambiar colores para ver cual seleccione si le quito el circulo del input
  //   for (let i = 0; i < Arreglo.length; i++) {
  //     Arreglo[i].forEach (e => {
  //         e.addEventListener ("click", () => {
  //                 e.parentElement.style.background = "white"
  //         })
  //     })
  // }

  // for (let i = 0; i < Arreglo.length; i++) {
  //     Arreglo[i].forEach (e => {
  //         e.addEventListener ("blur", () => {
  //                 e.parentElement.style.background = "red"
  //         })
  //     })
  // }

    
  botonsubmit.addEventListener("click", e => {
      e.preventDefault();
      let valores = [];
      for (let i = 0; i < Arreglo.length; i++) {
        Arreglo[i].forEach(radio=> {
            if (radio.checked) {
            const valor = radio.value;
            valores.push(valor)
            // console.log("funciona",valores);
          }
        })        
      }
      if (valores.length === Object.keys(respuestas).length) {
            for (let i = 0; i < valores.length; i++) {
                if (valores[i] === Object.values(respuestas)[i]) {
                    // Condicion de pintar en verde
                    Arreglo[i].forEach(element => {
                        if (element.value === valores[i]) {
                            element.parentElement.style.background = "green"
                        } else {
                            element.parentElement.style.background = "red"
                        }
                    })
                } else {
                    // Condicion de pintar en rojo
                    Arreglo[i].forEach(element => {
                        if (element.checked) {
                            element.parentElement.style.background = "blue"
                        } else {
                            element.parentElement.style.background = "red"
                        }
                    })
                }
            }
      } else {
          alert ("Donde vas chaval rellena el formulario completo")
      }
  })

  
  

  // if (valores.length === Object.values(respuestas).length) {
  //   alert ("Form sent")
  // }
  // else {
  //   alert("All questions must be filled out")
  //   return false;
  // };    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // function validateForm() {
  //   let x = document.forms["myForm"]["fname"].value;
  //   if (x == "") {
  //     alert("Name must be filled out");
  //     return false;
  //   }
  // }










    // x.forEach(radio=>{
    //   radio.addEventListener("click", (entrada) => {
    //     // console.log("probando",entrada)
    //     const valor = radio.value;
    //     // console.log(valor)
    //     if (valor === respuestas.firstQuestion) {
    //       radio.parentElement.style.background= "green";
    //     }
    //     else {
    //       // console.log("...", radio)
    //       radio.parentElement.style.background= "red";
    //       // console.log("funciona",radio.parentElement)
    //     }
    //   })
    // })


    














    // let w = document.forms["myForm"]["secondQuestion"].value;
    // let x = document.forms["myForm"]["thirdQuestion"].value;
    // let y = document.forms["myForm"]["fourthQuestion"].value;
    // let z = document.forms["myForm"]["fifthQuestion"].value;
    // let arrPreg = [v, w, x, y, z];
    // console.log("Estas son las respuestas obtenidas", arrPreg);

    // console.log("Estas son las respuestas correctas", respuestas);
  
    

    

























    // function validateForm() {
    //   if (v === null) {
    //     alert('Question 1 must be filled out');
    //     return false;
    //   }
    //   else if (w === null) {
    //     alert('Question 2 must be filled out');
    //     return false;
    //   }
    //   else if (x === null) {
    //     alert('Question 3 must be filled out');
    //     return false;
    //   }
    //   else if (y === null) {
    //     alert('Question 4 must be filled out');
    //     return false;
    //   }
    //   else if (z === null) {
    //     alert('Question 5 must be filled out');
    //     return false;
    //   }
    
    //   // Si el script ha llegado a este punto, todas las condiciones
    //   // se han cumplido, por lo que se devuelve el valor true
    //   return true;
    // }

    // function validateForm() {
    //     if (v === "" || v === null) {
    //       alert("All questions must be filled out");
    //     } 
    //     if (w === "" || w === null) {
    //       alert("All questions must be filled out");
    //     } 
    //     if (x === "" || x === null) {
    //       alert("All questions must be filled out");
    //     } 
    //     if (y === "" || y === null) {
    //       alert("All questions must be filled out");
    //     } 
    //     if (z === "" || z === null) {
    //       alert("All questions must be filled out");
    //     } 
    //     return false;
    //   }
      

// function validateForm() {
//     for (let i = 0; i < arrPreg.length; i++) {
//     switch (true) {
//         case v == "":
//             alert("Pregunta 1 must be filled out");      
//             break;
//         case w == "":
//             alert("Pregunta 2 must be filled out");
//             break;
//         case x == "":
//             alert("Pregunta 3 must be filled out");
//             break;
//         case y == "":
//             alert("Pregunta 4 must be filled out");
//             break;
//         case z == "":
//             alert("Pregunta 5 must be filled out");
//       }
//     }
//   }


 