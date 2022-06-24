import { Message, MessageBox, Notification } from 'element-ui'

/**
* Toast提示
* @param {String} text 提示语
* @param {String} type 提示类型 info: 0、success: 1、warning: 2、error: 3
* @param {Object} option 配置
*/
export const toast = (text = '提示内容', type = 0, option = {}) => {
  const typeArr = ['info', 'success', 'warning', 'error']
  Message({
    message: text,
    type: typeArr[type],
    duration: 2000,
    ...option
  })
}
/**
* 提示框
* @param {String} text 提示语
* @param {Object} option 配置
*/
export const alert = (text = '提示内容', option = {}) => {
  return new Promise((resolve, reject) => {
    MessageBox.alert(text, {
      title: '温馨提示',
      confirmButtonText: '确定',
      ...option,
      callback: action => {
        if (action === 'confirm') {
          resolve(action)
        } else {
          reject(action)
        }
      }
    })
  })
}
/**
* 确认框
* @param {String} text
* @param {String} type
*/
export const confirm = (text = '提示内容', option = {}) => {
  return new Promise((resolve, reject) => {
    MessageBox.confirm(text, {
      title: '温馨提示',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      ...option,
      callback(action) {
        if (action === 'confirm') {
          resolve(action)
        } else {
          reject(action)
        }
      }
    })
  })
}
/**
* 通知框
* @param {String} text
* @param {String} type
* @param {Number} time
*/
export const notify = {
  show(text = '通知内容', option = {}) {
    Notification({
      message: text,
      ...option
    })
  },
  hide() {
    Notification.closeAll()
  }
}
