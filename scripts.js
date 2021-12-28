const respuestas = {
    firstQuestion: "Inca",
    secondQuestion: "Budapest",
    thirdQuestion: "Suiza",
    fourthQuestion: 1997,
    fifthQuestion: "Harry Potter",
}

    let v = document.forms["myForm"]["firstQuestion"].value;
    let w = document.forms["myForm"]["secondQuestion"].value;
    let x = document.forms["myForm"]["thirdQuestion"].value;
    let y = document.forms["myForm"]["fourthQuestion"].value;
    let z = document.forms["myForm"]["fifthQuestion"].value;
    let arrPreg = [v, w, x, y, z];

    console.log("Estas son las respuestas correctas", respuestas);
    console.log("Estas son las respuestas obtenidas", arrPreg);

    function validateForm() {
        if (v == "") {
          alert("The First Question must be filled out");
          return false;
        }
      }

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


 