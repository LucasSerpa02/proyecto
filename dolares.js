function calcularP(){
	var dolares = (document.getElementById('dolar').value)*1;
	var total = dolares * 45;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}
function calcularE(){
	var dolares = (document.getElementById('dolar').value)*1;
	var total = dolares * 0.9;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}
function calcularL(){
	var dolares = (document.getElementById('dolar').value)*1;
	var total = dolares * 0.8;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}