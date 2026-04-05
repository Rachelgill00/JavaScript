// 1. 导入http模块
const http = require('http')

// 2. 创建web服务器实例
const server = http.createServer()

// 3. 为server实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => {
  const url = req.url
  let content = '<h1>404 Not Found! </h1>'
  if (url === '/' || url === '/index.html') {
    content = '<h1>Welcome to Home Page 首页! </h1>'
  }else if (url === '/about.html') {
    content = '<h1>Welcome to About Page 关于页面! </h1>'
  }
  // 设置Content-type响应头，告诉浏览器响应体的内容类型和编码格式,防止中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8') 
  // 把内容发送给客户端
  res.end(content)
})

// 4. 启动服务器
server.listen(8000, () => {
    console.log('Server running at http://127.0.0.1:8000')
})