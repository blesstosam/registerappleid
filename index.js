const NightMare = require('nightmare')
const nightmare = NightMare({show: true, waitTimeout: 6000})
const axios = require('axios')
let timer;
let totaltime = 0;

const run = async () => {
  await nightmare.goto('https://appleid.apple.com/account#!&page=create')
  await nightmare.wait('.last')
  await nightmare.wait('input')
  await nightmare.type('.generic-input-field[placeholder=姓氏]', '韦')
  await nightmare.type('.generic-input-field[placeholder=名字]', '磊')
  await nightmare.type('.country-picker', '阿富汗')
  await nightmare.type('.birthday-field', '1990年08月09日')
  await nightmare.type('.email-field', 'tom12@hao416js.com')
  await nightmare.type('#password', 'Iwantgo123456')
  await nightmare.type('input[placeholder=确认密码]', 'Iwantgo123456')

  await nightmare.type('.qa-set0 .form-dropdown-selectnone.form-dropdown.content-dropdown', '你的第一个宠物叫什么名字？')
  await nightmare.type('.qa-set0 input[placeholder=答案]', '小黑')
  await nightmare.type('.qa-set1 .form-dropdown-selectnone.form-dropdown.content-dropdown', '你的理想工作是什么？')
  await nightmare.type('.qa-set1 input[placeholder=答案]', '不工作')
  await nightmare.type('.qa-set2 .form-dropdown-selectnone.form-dropdown.content-dropdown', '你购买的第一张专辑是什么？')
  await nightmare.type('.qa-set2 input[placeholder=答案]', '忘了')

  // 获取验证码
  const _s = '.idms-captcha-wrapper img';
  const _tem = await nightmare.evaluate(_s => document.querySelector(_s).src, _s);
  const base64 = _tem.split('base64, ')[1]

  const res = await reqCapture(base64);
  console.log(res.data)
  if (res.status === 200) {
    try {
      result = JSON.parse(res.data);
    } catch(e) {}
    if (result.success) {
      await nightmare.type('input[placeholder=键入图中的字符]', result.data)
      await nightmare.click('.last')
      await nightmare.wait('.has-option-button .last')  // 等到确定按钮渲染出来
    
      timer = setInterval(function() {
        if (totaltime < 300) {
          totaltime += 5;
          reqMailCode();
        } else {
          clearInterval(timer)
        }
      }, 5000)
    }
  }
}

const reqCapture = async (code) => {
  return axios.post('http://10.0.0.77:8080/interface-platform-1.0/mail/getVerificationVode', stringify({
    // code: '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'
    code: code
  }))
}

const reqMailCode = async () => {
  const res = await axios.get('http://10.0.0.77:8080/interface-platform-1.0/mail/mailCode', {params: {
    mail: 'tom12@hao416js.com', mailPassWord: 'tomk'
  }})
  console.log(res.data)
  // res.status === 200 && res.data.success
  if (true) {
    clearInterval(timer)
    const str = '123456';  // res.data.data
    await nightmare.type('#char0', str[0])
    await nightmare.type('#char1', str[1])
    await nightmare.type('#char2', str[2])
    await nightmare.type('#char3', str[3])
    await nightmare.type('#char4', str[4])
    await nightmare.type('#char5', str[5])
    await nightmare.click('.has-option-button .last')

    nightmare.wait('#heading-account');

    // 跳转页面之后获取账号密码 发送给后台
    const result = axios.get('http://10.0.0.90:8080/message-platform-1.0-SNAPSHOT/handle/saveAccountRegiste', {params: {
      appId: 'test', appPwd: '123456'
    }})
    if (result.status === 200 && res.data.code == 200) {
      run();  // 继续注册下一个
    }
  }
}

run()


function stringifyPrimitive (v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

function stringify(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).filter(Boolean).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
        encodeURIComponent(stringifyPrimitive(obj));
};

