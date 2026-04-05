// 1. 导入http模块
const http = require('http')

// 2. 创建web服务器实例
const server = http.createServer()

// 3. 为server实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => {
    // 只要有client访问了服务器，就会触发request事件，从而调用这个回调函数
    console.log('Someone visit our web server.')
})

// 4. 启动服务器
server.listen(8000, () => {
    console.log('Server running at http://127.0.0.1:8000')
})