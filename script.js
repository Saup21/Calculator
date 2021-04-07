s="";
$(document).ready(function() {


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
        let s1=s.replace("%", "*0.01*");
        let s2=s1.replace("undefined","");
        let ans = eval(s2);
        if(ans.search("undefined")===-1)
        {
          $("#screen").val(ans);
        s = ans;
      }
    });
});
$(document).keydown(function(e) { if (e.keyCode == 8) e.preventDefault(); });
 $(document).keyup(function(e){
   if(e.keyCode == 8)
   {
     s=$("#screen").val();
     $("#screen").val(s.substring(0, s.length-1));
     s=$("#screen").val();
   }

 });


$(document).keypress(function(e) {

    if(isNumberKey(e))
    $("#screen").focus();
    if(e.key=="Enter") {
        s=$("#screen").val();
        let s1=s.replace("%", "*0.01*");
        let s2=s1.replace("undefined","");
        let ans = eval(s2);
                  $("#screen").val(ans);
        s = ans;

    }

});

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 37 || charCode == 42 || charCode == 43 || charCode == 45 || charCode == 46 || charCode == 47)
    {
        s+=evt.key;
        // console.log(s);
        // $("#screen").val(s);
        return true;
    }
    else if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    else
    {
        s+=evt.key;
        // console.log(s);
        // $("#screen").val(s);
        return true;
    }
}
