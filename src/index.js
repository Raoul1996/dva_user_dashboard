import dva from 'dva'
import './index.css'
import {browserHistory} from 'dva/router'
import createLoading from 'dva-loading'
import {message} from 'antd'
import '../public/index.html'
import './index.css'
const ERROR_MSG_DURATION = 3
// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION)
  }
})
app.model(require('./models/users'))

// 2. Plugins
app.use(createLoading())

// 3. Model
// app.model(require('./models/users'))
// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root')
