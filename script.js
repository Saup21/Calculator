let s="";

$(document).ready(function() {


  if($(window).width()<700)
  $("#screen").attr("readonly",true)
// $("#screen").focus();
    $("#ac").click(function() {
        $("#screen").val("");
        s="";
    });
    $("#del").click(function() {
        s=$("#screen").val();
        $("#screen").val(s.substring(0, s.length-1));
        s=$("#screen").val();
    });
    $(".no").click(function() {
        s+=$(this).val();
        $("#screen").val(s);
    });
    $("#eq").click(function() {
        s=$("#screen").val();
        if(s=="") {
            $("#screen").val("");
            s="";
        }
        else {
            let s1,s2;
            if(s.charAt(s.length-1)=="%"){
                s1=s.replace("%", "*0.01");
            }
            else {
                s1=s.replace("%", "*0.01*");
            }
            s2=s1.replace("undefined", "");
            let ans = eval(s2);
            $("#screen").val(ans);
            s = ans;
        }
    });
});
if($(window).width()>=700)
{
  $(document).keypress(function(e) {
  // $("#screen").focus();
      if(e.key=="Enter") {
          s=$("#screen").val();
          if(s=="") {
              $("#screen").val("");
              s="";
          }
          else {
              let s1,s2;
              if(s.charAt(s.length-1)=="%"){
                  s1=s.replace("%", "*0.01");
              }
              else {
                  s1=s.replace("%", "*0.01*");
              }
              s2=s1.replace("undefined", "");
              let ans = eval(s2);
              $("#screen").val(ans);
              s = ans;
          }
      }
      // if(e.key=="Backspace") {
      //     s=$("#screen").val();
      //     $("#screen").val(s.substring(0, s.length-1));
      //     s=$("#screen").val();
      // }
      // console.log(e.key);
  });

}

$(document).keydown(function(e) {
    if (e.keyCode == 8) e.preventDefault();
});
$(document).keyup(function(e) {
    if(e.keyCode == 8) {
        s=$("#screen").val();
        $("#screen").val(s.substring(0, s.length-1));
        s=$("#screen").val();
    }
});
if($(window).width()>=700)
{
  function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 37 || charCode == 42 || charCode == 43 || charCode == 45 || charCode == 46 || charCode == 47)
    {
        s+=evt.key;
        // $("#screen").val(s);
        return true;
    }
    else if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    else
    {
        s+=evt.key;
        // $("#screen").val(s);
        return true;
    }
}
}
else
function isNumberKey(evt){
  return false;
}
