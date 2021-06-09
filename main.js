 function showparagraph1(){
     var inputs=[];
     for(var i=1;i<=6;i++){
         inputs.push(document.getElementById("paral_input_box_"+i).value);
       }
       inputs.join(".");
       document.getElementById("showparagraph1").innerHTML = inputs;
       

 }


 function showparagraph2(){
  var inputs=[];
  for(var i=7;i<=12;i++){
      inputs.push(document.getElementById("paral_input_box_"+i).value);
    }
    inputs.join(".");
    document.getElementById("showparagraph2").innerHTML = inputs;
    

}
