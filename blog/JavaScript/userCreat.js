//创建对象生成函数
// function createNewUser(name,password) {
// 	this.name = name;
// 	this.password = password;
// }

//创建数组来储存用户
// var myUser = new Array();

// var userNumber = 0;//创建变量代表用户数量，也是检索用户信息时的索引
// Elaina = new createNewUser("Elaina",398811);//创建默认用户，管理员用户
// myUser[0] = Elaina;//将管理员用户放在第一位

//创建函数用来创建对象并将其放入数组中
// function pickNewUser(userName,name,password) {
// 	userName = new createNewUser(name,password);
// 	userNumber = userNumber + 1;
// 	myUser[userNumber] = userName;
// 	window.document.g.action="register.html";
// 	window.g.submit();
// }

//调试
// document.addEventListener("keydown",printMessage);
// function printMessage(event) {
// 	if(event.keyCode === 13) {
// 		var inputName = document.getElementById("myName").value;
// 		var inputPassword = document.getElementById("myPassword").value;
// 		var inputTrueName = document.getElementById("Name").value;
// 		pickNewUser(inputTrueName,inputName,inputPassword);
// 		// document.getElementById("printName").innerHTML = myUser[useNumber].name;
// 		// document.getElementById("printPassword").innerHTML = myUser[useNumber].password;
// 	}else if(event.keyCode === 32) {
// 		alert(myUser[userNumber].password);
// 		alert(userNumber);
// 	}
// }

function pickNewUser() {
	alert("创建成功");
	window.location.href="register.html";
}