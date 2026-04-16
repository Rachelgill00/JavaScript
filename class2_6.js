// 1. 导入用于生成jwt字符串的包
const jwt = require('jsonwebtoken')
// 2. 导入用于将client发送过来的jwt的字符串，解析还原成json对象的包
const expressJWT = require('express-jwt')
// 3. secret密钥的本质：就是一个字符串，字符串可以随便写，但必须保证唯一且保密
const secretKey = 'itheima No1 ^_^'
// 4. 在登录成功后生成jwt字符串