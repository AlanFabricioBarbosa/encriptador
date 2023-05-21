function encrypt() {
	let input = document.getElementById('input').value
	let output = input
		.replace(/e/g, 'enter')
		.replace(/i/g, 'imes')
		.replace(/a/g, 'ai')
		.replace(/o/g, 'ober')
		.replace(/u/g, 'ufat')
	document.getElementById('output').value = output
}

function decrypt() {
	let input = document.getElementById('input').value
	let output = input
		.replace(/enter/g, 'e')
		.replace(/imes/g, 'i')
		.replace(/ai/g, 'a')
		.replace(/ober/g, 'o')
		.replace(/ufat/g, 'u')
	document.getElementById('output').value = output
}

function copyToClipboard() {
	let output = document.getElementById('output').value
	navigator.clipboard.writeText(output)
}
