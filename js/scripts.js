$(document).ready(function() {
  $("#pform").submit(function(event) {
    $("#pform").hide();
    const nameInput = $("#name").val();
    const qulInput = $("#qul").val();
    const ageInput = $("#Age").val();
    const operator = $("input:radio[name=operator]:checked").val();
      if (operator === "hot") {
        console.log("hot")
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
      if(nameInput>=0 && ageInput >= 15 && qulInput >=0){
        $("Age").show()
      }
      event.preventDefault();
  });
});