let cd1 = document.getElementById("clickme1");
let tracks1 = document.getElementById("table1");
let cd2 = document.getElementById("clickme2");
let tracks2 = document.getElementById("table2");
let firsttrack = document.getElementById("firsttrack");
let track11 = document.getElementById("track1-1");

function callCd1 (){
   tracks1.style.display = "inline";
   tracks2.style.display = "none"; 
   track11.style.display = "none";
}

    cd1.onclick = callCd1;

function callCd2 (){
    tracks1.style.display = "none"; 
    tracks2.style.display = "inline"; 
    track11.style.display = "none";
     }
     
    cd2.onclick = callCd2;

function callTrack11 (){
    tracks1.style.display = "inline";
    tracks2.style.display = "none"; 
    track11.style.display = "inline";

}

firsttrack.onclick = callTrack11;
