$(document).ready(function() {
  $("#pform").submit(function(event) {
    $("#pform").hide();
    const nameInput = $("#name").val();
    const qulInput = $("#qul").val();
    const ageInput = parseInt($("#Age").val());
    const operator = $("input:radio[name=operator]:checked").val();
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
      const veryhot = $("select#vhot").val();

      $("#check").submit(function(event) {
        $("#check").hide();
        if(veryhot == 'vhot'){
          alert('you can select python')
        }
    });
    event.preventDefault();
  });
  
  
      $("#check").submit(function(event) {
        $("#check").hide();
        const Iname = $("#uname")
        const veryhot = $("select#vhot").val();
        if(veryhot === 'vhot' && Iname === 'uname' ){
          $("#vhotmsg").show()
        }
    });
});

