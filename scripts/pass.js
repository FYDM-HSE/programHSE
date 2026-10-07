const change = document.getElementById("change")
change.addEventListener("click", change_all)

function change_all(){
     if(document.getElementsByTagName("div")[0].innerHTML==="Иванов") {
         document.getElementsByTagName("div")[0].innerHTML = "Ivanov"
         document.getElementsByTagName("div")[1].innerHTML = "Ivan"
         document.getElementsByTagName("div")[2].innerHTML = "Ivanovich"
         document.getElementsByTagName("div")[3].innerHTML="Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01.01.2000"
         document.getElementsByTagName("div")[6].innerHTML="GU MVD PO G.MOSKVE"
         document.getElementsByTagName("div")[7].innerHTML="G.MOSKVA"
     }
     else{
         document.getElementsByTagName("div")[0].innerHTML="Иванов"
         document.getElementsByTagName("div")[1].innerHTML="Иван"
         document.getElementsByTagName("div")[2].innerHTML="Иванович"
         document.getElementsByTagName("div")[3].innerHTML="Муж &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01.01.2000"
         document.getElementsByTagName("div")[6].innerHTML="ГУ МВД ПО Г.МОСКВЕ"
         document.getElementsByTagName("div")[7].innerHTML="Г.МОСКВА"

     }
}