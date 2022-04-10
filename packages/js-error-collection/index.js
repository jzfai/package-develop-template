export const jsErrorCollection = ({ runtimeError = true, rejectError = true, consoleError = false }, callback) => {
  if (runtimeError) {
    //JS运行时错误和资源加载错误
    window.addEventListener(
      'error',
      ({ error, target }) => {
        if (target.outerHTML) {
          //img error collection
          const errLog = `${JSON.stringify(target.outerHTML)}`
          callback(errLog)
        } else {
          const errLog = `${error?.stack?.substr(0, 300)}`
          callback(errLog)
        }
      },
      //use Event capture  to collection  img error
      true
    )
  }
  if (rejectError) {
    //promise被reject并且错误信息没有被处理的时候，会抛出一个unhandledrejection
    //接口错误处理，cross origin , 404,401
    window.addEventListener('unhandledrejection', ({ reason }) => {
      let errLog = ''
      if (typeof reason === 'string') {
        errLog = reason
      } else {
        errLog = `${reason?.stack?.substr(0, 300)}`
      }
      //未授权和取消不捕捉
      //此处可添加不捕捉状态码
      const unhandledCode = '403, 401'
      //此处可添加不捕捉string
      const unhandledString = 'cancel'
      if (!unhandledCode.includes(reason?.code) && !reason.includes(unhandledString)) {
        callback(errLog)
      }
    })
  }
  if (consoleError) {
    //些特殊情况下，还需要捕获处理console.error，捕获方式就是重写window.console.error
    const _oldConsoleError = window.console.error
    window.console.error = function () {
      // eslint-disable-next-line prefer-rest-params
      const errLog = Object.values(arguments).join(',')
      if (errLog.indexOf('custom') === -1) {
        callback(errLog)
      }
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params
      _oldConsoleError && _oldConsoleError.apply(window, arguments)
    }
  }
}

export default {}
