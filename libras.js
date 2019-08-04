function calcularD(){
	var libras = (document.getElementById('libra').value)*1;
	var total = libras * 1.22;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}
function calcularP(){
	var libras = (document.getElementById('libra').value)*1;
	var total = libras * 54.11;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}
function calcularE(){
	var libras = (document.getElementById('libra').value)*1;
	var total = libras * 1.09;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}