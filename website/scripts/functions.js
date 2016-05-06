<script>
function addEmail(){
    var input = document.getElementById("Email");
    var circ = ' <img src="images/red.png" alt="Off Campus" style="width:12px;height:12px;">';
    var fin = document.createElement("LI");
    fin.innerHTML = input.value.concat(circ);
    input.value = "";
    circ.value = "";

    document.getElementById("friends").appendChild(fin);
}
function changeName(){
  var text = document.getElementById("nickName");
  document.getElementById("name").innerHTML = text.value;
}
function changePic(){
    var x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    x.setAttribute("align", "center");
    document.body.appendChild(x);
}
function changeSchool(){
  var x = document.getElementById("schoolUpdate");
  document.getElementById("school").innerHTML = x.value;
}
</script>