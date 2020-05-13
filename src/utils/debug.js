let debugConfig = {
  Vue: null,
  // 项目名称
  entryName: 'entryName',
  // 脚本版本
  scriptVersion: '1.0',
  // 环境
  releaseStage: 'pro'
}
const debug = {
  notifyWarn({ message, metaData }) {
    const type = 'caught'
    const severity = 'warn'

    _logReport({
      type,
      severity,
      message,
      metaData
    })
  },
  notifyError({
    type = 'caught',
    error,
    message,
    metaData,
    lineNumber,
    columnNumber,
    fileName
  }) {
    const severity = 'error'

    _logReport({
      type,
      severity,
      error,
      metaData,
      message,
      lineNumber,
      columnNumber,
      fileName
    })
  }
}

// 日志上报
function _logReport({
  type,
  severity,
  error,
  metaData,
  message,
  lineNumber,
  columnNumber,
  fileName
}) {
  const { Vue } = debugConfig

  message = message || (error && error.message) || ''

  // 这里可以做一个灰度控制

  const { entryName, releaseStage, scriptVersion } = debugConfig
  const name = (error && error.name) || 'error'
  const stacktrace = (error && error.stack) || ''
  const time = Date.now()
  const title = document.title
  const url = window.location.href
  const client = {
    userAgent: window.navigator.userAgent,
    height: window.screen.height,
    width: window.screen.width,
    referrer: window.document.referrer
  }
  let pageLevel = 'p4'

  // 此处可以给你的页面进行分级
  pageLevel = 'p0' // getPageLevel();

  // 此处http请求使用的是vue-resource，可以根据各自的情况进行调整
  // Vue.http.post(logReportUrl, {
  //   entryName,
  //   scriptVersion,
  //   message,
  //   metaData,
  //   name,
  //   releaseStage,
  //   severity,
  //   stacktrace,
  //   time,
  //   title,
  //   type,
  //   url,
  //   client,
  //   lineNumber,
  //   columnNumber,
  //   fileName,
  //   pageLevel // 页面等级
  // })
  console.log({
    entryName,
    scriptVersion,
    message,
    metaData,
    name,
    releaseStage,
    severity,
    stacktrace,
    time,
    title,
    type,
    url,
    client,
    lineNumber,
    columnNumber,
    fileName,
    pageLevel // 页面等级
  })
}

export default function(Vue, option = {}) {
  debugConfig = Object.assign(debugConfig, {
    Vue,
    ...option
  })

  // 如果你想在开发环境不去捕获错误信息 可以在此处加上环境判断

  function formatComponentName(vm) {
    if (vm.$root === vm) return 'root'
    const name = vm._isVue
      ? (vm.$options && vm.$options.name) ||
        (vm.$options && vm.$options._componentTag)
      : vm.name
    return (
      (name ? 'component <' + name + '>' : 'anonymous component') +
      (vm._isVue && vm.$options && vm.$options.__file
        ? ' at ' + (vm.$options && vm.$options.__file)
        : '')
    )
  }

  Vue.config.errorHandler = function(err, vm, info) {
    if (vm) {
      const componentName = formatComponentName(vm)
      const propsData = vm.$options && vm.$options.propsData
      debug.notifyError({
        error: err,
        metaData: {
          componentName,
          propsData,
          info,
          userToken: {
            userId: 1
          } // metaData可以存一些额外数据，比如：用户信息等
        }
      })
    } else {
      debug.notifyError({
        error: err,
        metaData: {
          userToken: {
            userId: 1
          } // metaData可以存一些额外数据，比如：用户信息等
        }
      })
    }
  }

  window.onerror = function(msg, url, lineNo, columnNo, error) {
    debug.notifyError({
      type: 'uncaught',
      error,
      metaData: {
        userToken: {
          userId: 1
        } // metaData可以存一些额外数据，比如：用户信息等
      },
      message: msg,
      lineNumber: lineNo,
      columnNumber: columnNo,
      fileName: url
    })
  }
}

// 最后我们把debug抛到外面供其他地方调用
export { debug }
