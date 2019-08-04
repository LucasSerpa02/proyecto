function calcularD(){
	var pesos = (document.getElementById('peso').value)*1;
	var total = pesos * 0.022;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}
function calcularE(){
	var pesos = (document.getElementById('peso').value)*1;
	var total = pesos * 0.02;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}
function calcularL(){
	var pesos = (document.getElementById('peso').value)*1;
	var total = pesos * 0.018;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}