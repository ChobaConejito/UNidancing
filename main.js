function unicorniodance()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dbLVM9bS4/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("unisultado1").innerHTML = 'Escucho - '+ results[0].label;
    document.getElementById("unisultado2").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("unisultado1").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("unisultado2").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('uni1') 
    img1 = document.getElementById('uni2')
    img2 = document.getElementById('uni3')
    img3 = document.getElementById('uni4')

    if (results[0].label == "aplausos") {
      img.src = 'uni1.gif';
      img1.src = 'uni2.2.PNG';
      img2.src = 'uni3.2.PNG';
      img3.src = 'uni4.2.PNG';
    } else if (results[0].label == "conejo") {
      img.src = 'uni1.PNG';
      img1.src = 'uni2.2.gif';
      img2.src = 'uni3.2.PNG';
      img3.src = 'uni4.2.PNG';
    } else if (results[0].label == "unipollo") {
      img.src = 'uni1.PNG';
      img1.src = 'uni2.2.PNG';
      img2.src = 'uni3.2.gif';
      img3.src ='uni4.2.PNG';
    }else{
      img.src = 'uni1.PNG';
      img1.src ='uni2.2.PNG';
      img2.src ='uni3.2.PNG';
      img3.src ='uni4.2.gif';
    }
  }
}

