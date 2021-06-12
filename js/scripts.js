$(document).ready(function() {
  $("#pform").submit(function(event) {
    $("#pform").hide();
    const nameInput = $("#name").val();
    const qulInput = $("#qul").val();
    const ageInput = parseInt($("#Age").val());
    const operator = $("input:radio[name=operator]:checked").val();
   
    if(nameInput !== ' ' && qulInput !== ' ' && ageInput >= 15){
      if (operator === "hot") {
        $("#python").show()
      }else if (operator === "less") {
        $("#JavaScript").show()
      }else if (operator === "back") {
        $("#Ruby").show()
      }else if (operator === "front") {
        $("#React").show()
      }else if(operator === "timedue"){
        $("#Swift").show()
      }
    }else{
      $("#age").show()
    }  
      event.preventDefault();
  });
});

$(document).ready(function() {
$("#check").submit(function(event) {
  //$("#pform").hide();
 // $("#check").hide()
 // $("#JavaScript").show()
 $("#vhotmsg").show()
    const Iname = $("#uname").val()
    const veryhot = $("#market").val();
    console.log('veryhot',veryhot,Iname)
    if(veryhot === '1' && Iname !== ' ' ){
        console.log("test1")
        
        $("#vhotmsg").show()
    
  }
});
});

