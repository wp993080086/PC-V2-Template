import { Loading } from 'element-ui'

const loadingExamples = {
  examples: null,
  /**
  * 打开Loading
  * @param {String} options 额外配置
  */
  show(options = {
    text: 'loading...',
    lock: true,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.5)'
  }) {
    loadingExamples.examples = Loading.service(options)
  },
  /**
  * 关闭Loading
  */
  hide() {
    this.$nextTick(() => {
      loadingExamples.examples.close()
      loadingExamples.examples = null
    })
  }
}

export default loadingExamples
