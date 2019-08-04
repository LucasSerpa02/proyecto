function calcularD(){
	var euros = (document.getElementById('euro').value)*1;
	var total = euros * 1.11;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}
function calcularP(){
	var euros = (document.getElementById('euro').value)*1;
	var total = euros * 49.53;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}
function calcularL(){
	var euros = (document.getElementById('euro').value)*1;
	var total = euros * 0.92;
	total = total.toFixed(2);
	document.getElementById('resultado').innerHTML = total;
}