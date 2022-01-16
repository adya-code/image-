Webcam.attach('#camera');
camera= document.getElementById('camera');

  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  function capture_image(){

  Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selie_image" src='+data_uri+'"/>';

    }
    )
  }
  console.log('ml5 version:', ml5.version);
  // Initialize the Image Classifier method with MobileNet
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JACkTMciY/model.json',modelLoaded);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

// When the model is loaded
function modelLoaded(){
console.log('model Loaded!');
}
function check(){
  
  img=document.getElementById("selfie_image");
  classifier.classify(img,gotResult);

}

// A function to run when we get any errors and the results
function gotResult(error,result){
  // Display Error in the code
  if(error){
    console.error(error)   ;      
  }else{
    console.log(result)
    document.getElementById("result_object_name").innerHTML=result[0].lable;
    document.getElementById("result_object_accuraccy").innerHTML=result[0].confidence.toFix(3);

  }
}

