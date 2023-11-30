var ctx;
const LARGURA=window.innerWidth-200,ALTURA=400
var vetCor=["#FF0000","FFFF00","#0000FF","#008000"];
var vetNomes=["vermelho","Amarelo","Azul","Verde"]
var vetCirculos=[];
var intervalo;
var placar=[];
var correndo=false;

//1 usage

function criarCanvas(){

    var pai=document.getElementsByTagName("div")[0];
    var canvas=document.createElement("camvas");
    canvas.style="border: solid 1px black";
    canvas.setAttribute("width", LARGURA);
    canvas.setAttribute("height", ALTURA);
    pai.appendChild(canvas);
    ctx = canvas.getContext("2d");
    criarCirculo();
}
