let symbols = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',
  '0','1','2','3','4','5','6','7','8','9',
  '!','@','#','$','%','^','&','*','(',')','-','_','=','+',
  '[',']','{','}',';',':',"'",'"',',','.','<','>','/','?','\\','|','`','~'
];

function givePassword() {
	
	let password_1 = "";
	let password_2 = "";
	
	for(let i=0; i<15; i++){
		password_1 += symbols[Math.floor(Math.random()*symbols.length)]
		password_2 += symbols[Math.floor(Math.random()*symbols.length)]
		}

	document.querySelector("#password1").textContent = password_1;
	document.querySelector("#password2").textContent = password_2;
	}

function copyText(newPassword){
	navigator.clipboard.writeText(newPassword.textContent);
	alert(newPassword.textContent + " Copied!");
	}
