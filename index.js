let symbols_uppercase = [
'A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let symbols_lowercase = [
'a','b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z'];
let symbols_numbers = [
  '0','1','2','3','4','5','6','7','8','9'];
let symbols_special = [
  '!','@','#','$','%','^','&','*','(',')','-','_','=','+',
  '[',']','{','}',';',':',"'",'"',',','.','<','>','/','?','\\','|','`','~'];

function givePassword() {
	
	let password_1 = "";
	let password_2 = "";
	let password_3 = "";

	let symbols = [];
	
	if (document.getElementById("uppercase").checked){
		symbols.push(...symbols_uppercase);}
	if (document.getElementById("lowercase").checked){
		symbols.push(...symbols_lowercase);}
	if (document.getElementById("numbers").checked){
		symbols.push(...symbols_numbers);}
	if (document.getElementById("special").checked){
		symbols.push(...symbols_special);}

	for(let i=0; i<15; i++){
		password_1 += symbols[Math.floor(Math.random()*symbols.length)]
		password_2 += symbols[Math.floor(Math.random()*symbols.length)]
		password_3 += symbols[Math.floor(Math.random()*symbols.length)]
		}

	document.querySelector("#password1").textContent = password_1;
	document.querySelector("#password2").textContent = password_2;
	document.querySelector("#password3").textContent = password_2;
	}

function copyText(newPassword){
	navigator.clipboard.writeText(newPassword.textContent);
	alert(newPassword.textContent + " Copied!");}
