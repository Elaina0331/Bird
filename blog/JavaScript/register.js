		//检查用户账号与密码，并登录
        function check() {
			var name = document.getElementById("name").value;
			var pass = document.getElementById("pass").value;
			if(name=="Elaina"&&pass=="398811")
			{
				alert("登录成功");
				window.location.href="static/function.html";
			}else{
				alert("账号或密码错误");
			}
        }

        //JavaScript切换网页背景为模糊背景并显示隐藏的div
        //设置键盘监听器
        //隐藏div
        var mode = 1;
        var divElement = document.getElementById('myDiv');
        divElement.style.display = 'none';
        document.addEventListener("keydown",imgChange);
//按除去ESC的任意键进入登入界面，按ESC键返回初始界面
//在登录界面按enter登录，按ESC返回初始界面       
        function imgChange(event) {
            if(event.keyCode !== 27&&mode == 1) {
                mode = 2;
                document.body.style.background = "url("+"./Photo/robot2.png"+") no-repeat";
                document.body.style.backgroundSize = "cover";
                // 获取元素
                var divElement = document.getElementById('myDiv');
                // 显示元素
                divElement.style.display = 'block';
            }else if(event.keyCode === 27&&mode == 2) {
                mode = 1;
                document.body.style.background = "url("+"./Photo/robot1.png"+") no-repeat";
                document.body.style.backgroundSize = "cover";
                var divElement = document.getElementById ('myDiv');
                divElement.style.display = 'none';
            }else if(event.keyCode===13&&mode==2) {check();}
        }
//记得加一个用户注册
        function userCreat() {
            alert("前往注册");
            window.location.href="userCreat.html";
        }
