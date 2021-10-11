function na()
{
    window.location.href="./mee2.html";
}


function serviceS(){
  var pic=document.getElementById("im1")
  var silver=["selver.jpg"]
    pic.src = silver[0]
    
}


function serviceG() {
  var pic=document.getElementById("im2")
  var gold=["gold.jpg"]
   pic.src = gold[0]

}
function serviceP() {
  var pic=document.getElementById("im3")

  var platinum=["platinum.jpg"]
    pic.src = platinum[0]
    
}
function serviceD() {
  var pic=document.getElementById("im4")
var Diamond=["Diamond.jpg"]
pic.src = Diamond[0]

}
$("#but1").click(function(){
    $("#im4").hide();
  });
  $("#but2").click(function(){
    $("#im1").hide();
  });
  $("#but3").click(function(){
    $("#im2").hide();
  });
  $("#but4").click(function(){
    $("#im3").hide();
  });
  

  function card(){
    var name=$("#n").val()
    var lastName=$("#l").val()
    var email=$("#e").val()
    var date=$("#d").val()
    var package=$("#p").val()
    var coupon=$('<div class="mydiv"></div>')
   
    $coupon.appendTo("#dd")
    var arr = []
    arr.push(name)
    arr.push(lastName)
    arr.push(email)
    arr.push(date)
    arr.push(package)
    console.log(arr)
   localStorage.setItem("arr",JSON.stringify( arr));
  }



