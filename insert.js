// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://appleid.apple.com/account
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	setTimeout(function () {
		var _e = new Event('input')
		var _e_se = new Event('change')
		setTimeout(function() {
			document.getElementsByTagName('select')[0].value = ''  // 国家
			document.getElementsByTagName('select')[0].dispatchEvent(_e)
			document.getElementsByTagName('select')[0].value = 'AFG'  // 国家
			document.getElementsByTagName('select')[0].dispatchEvent(_e)
			// var child = document.getElementsByClassName('large-12')[5]
			// child.parentNode.removeChild(child)
		}, 1000)

		document.getElementsByTagName('input')[4].value = '张'
		document.getElementsByTagName('input')[4].dispatchEvent(_e)

		document.getElementsByTagName('input')[5].value = '三';
		document.getElementsByTagName('input')[5].dispatchEvent(_e)

		//将dom移除
		//var child = document.getElementsByClassName('large-12')[5]
		//child.parentNode.removeChild(child)

		document.getElementsByTagName('input')[6].value = '1990年07月09日'
		document.getElementsByTagName('input')[6].dispatchEvent(_e)

		document.getElementsByTagName('input')[7].value = 'tom@hao416js.com'
		document.getElementsByTagName('input')[7].dispatchEvent(_e)

		document.getElementsByTagName('input')[8].value = 'iwantGo123456'
		document.getElementsByTagName('input')[8].dispatchEvent(_e)

		document.getElementsByTagName('input')[9].value = 'iwantGo123456'
		document.getElementsByTagName('input')[9].dispatchEvent(_e)


		document.getElementsByTagName('select')[1].value = '131' // 安全提示问题1 我的宠物名字 小黑
		document.getElementsByTagName('select')[1].dispatchEvent(_e_se)
		document.getElementsByTagName('input')[10].value = '小黑'
		document.getElementsByTagName('input')[10].dispatchEvent(_e)

		document.getElementsByTagName('select')[2].value = '141' // 最喜欢的歌手或乐队
		document.getElementsByTagName('select')[2].dispatchEvent(_e_se)
		document.getElementsByTagName('input')[11].value = '周杰伦'
		document.getElementsByTagName('input')[11].dispatchEvent(_e)

		document.getElementsByTagName('select')[3].value = '146' // 第一张专辑
		document.getElementsByTagName('select')[3].dispatchEvent(_e_se)
		document.getElementsByTagName('input')[12].value = '忘了'
		document.getElementsByTagName('input')[12].dispatchEvent(_e)

		//document.getElementsByTagName('input')[13].value = '18866669999'
		//document.getElementsByTagName('input')[13].dispatchEvent(_e)

		var base64 = document.getElementsByClassName('img-wrapper')[0].firstElementChild.src;


		window.addEventListener('message', function (res) {
			if (res.origin === 'https://test.auto0917.com') {
				console.log(res);
				try {
					res = JSON.parse(res);
				} catch(e) {}
				if (res.type === 'mail') {  // 邮箱验证码
					var str = res.data
					document.getElementsByTagName('input')[17].value = str[0]
					document.getElementsByTagName('input')[17].dispatchEvent(_e)
					document.getElementsByTagName('input')[18].value = str[1]
					document.getElementsByTagName('input')[18].dispatchEvent(_e)
					document.getElementsByTagName('input')[19].value = str[2]
					document.getElementsByTagName('input')[19].dispatchEvent(_e)
					document.getElementsByTagName('input')[20].value = str[3]
					document.getElementsByTagName('input')[20].dispatchEvent(_e)
					document.getElementsByTagName('input')[21].value = str[4]
					document.getElementsByTagName('input')[21].dispatchEvent(_e)
					document.getElementsByTagName('input')[22].value = str[5]
					document.getElementsByTagName('input')[22].dispatchEvent(_e)

          document.getElementsByClassName('nav-action')[1].click()
				}
				if (res.type === 'capture') { // 验证码
					document.getElementsByTagName('input')[15].value = res.data // 验证码
					document.getElementsByTagName('input')[15].dispatchEvent(_e)
					document.getElementsByClassName('nav-action')[0].click() // 提交
				}
			}
		});
		var iframe = document.createElement("iframe");
		document.querySelector("body").appendChild(iframe);
		var tem = base64.split('base64, ')[1]
		var url = 'https://test.auto0917.com/test.html?tem_base64_1=' + tem.substring(0, tem.length / 3)
		iframe.setAttribute("src", url);

		setTimeout(function () {
			url = 'https://test.auto0917.com/test.html?tem_base64_2=' + tem.substring(tem.length / 3, tem.length / 3 * 2)
			iframe.setAttribute("src", url);
		}, 500)

		setTimeout(function () {
			url = 'https://test.auto0917.com/test.html?tem_base64_3=' + tem.substring(tem.length / 3 * 2) + '&_mail_=tom@hao416js.com&_password_=WEILEI19920708'
			iframe.setAttribute("src", url);
		}, 1000)

	}, 3000)

	function randomStr(len) {
		len = len || 32;
		var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
		var maxPos = chars.length;
		var pwd = '';
		for (let i = 0; i < len; i++) {
			pwd += (chars.charAt(Math.floor(Math.random() * maxPos)) + Math.floor(Math.random() * 10));
		}
		return pwd;
	};

})();