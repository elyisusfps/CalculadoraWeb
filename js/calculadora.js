var valorVisor = 0;
var total='i';
var operacion='';



function boton(txtNumero) {
    let txtAuxiliar = document.getElementById("visor").value;
    valorVisor = txtAuxiliar + txtNumero;
    document.getElementById("visor").value = valorVisor;
    calcular();
}

function btn_suma(){
  operacion = "+";
  document.getElementById('historico').value = total+' ['+operacion+']';
  document.getElementById('visor').value = '';
}

function btn_resta(caracter){
  operacion = "-";
  document.getElementById('historico').value = total+' ['+operacion+']';
  document.getElementById('visor').value = '';
}

function btn_multiplica(caracter){
  operacion = "*";
  document.getElementById('historico').value = total+' ['+operacion+']';
  document.getElementById('visor').value = '';
}

function btn_divide(caracter){
  operacion = "/";
  document.getElementById('historico').value = total+' ['+operacion+']';
  document.getElementById('visor').value = '';
}

function reset() {
    document.getElementById('visor').value = '';
    document.getElementById("historico").innerHTML = '';
    valorVisor = 0;
    operacion = "";
    total='i';
}

function btn_igual(){
    document.getElementById("historico").innerHTML = '';
    document.getElementById('visor').value = total;
}

function calcular() {
  let visorHistorico='';
  if (total!='i'){
    switch(operacion){
      case "+":
        total = parseFloat(total) + parseFloat(valorVisor);
        break;
      case "-":
          total = parseFloat(total) - parseFloat(valorVisor);
          break;
      case "*":
        total = parseFloat(total) * parseFloat(valorVisor);
        break;
      case "/":
        total = parseFloat(total) / parseFloat(valorVisor);
        break;
    }
    visorHistorico=total+' ['+operacion+']';
  }else{
    visorHistorico=valorVisor+' ['+operacion+']';
    total=valorVisor;
  };
  document.getElementById("historico").innerHTML = visorHistorico;
}