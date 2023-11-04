function calculate(){
    var height=document.getElementById("height").value
    var weight=document.getElementById("weight").value
    
    var imc = weight / height**2;
    var text=""
    
    if (imc < 18.5) {
        text="Você está abaixo do peso, procure ajuda profissional."
      } else if (imc < 24.9) {
        text="Você está com peso ideal."
      } else if (imc < 29.9) {
        text="Você está com sobrepeso, procure ajuda profissional."
      } else if (imc < 39.9) {
        text="Você está com obesidade, procure ajuda profissional."
      } else if (imc > 39.9) {
        text="Você está com obesidade mórbida, procure uma ajuda profissional."
      }
      document.getElementById("text_area").innerText=text
    }
