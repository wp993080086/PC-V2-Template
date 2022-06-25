<template>
  <div class="login_box">
    <el-row>
      <el-button type="info" @click="handleToast(0)">普通Toast</el-button>
      <el-button type="success" @click="handleToast(1)">成功Toast</el-button>
      <el-button type="warning" @click="handleToast(2)">警告Toast</el-button>
      <el-button type="danger" @click="handleToast(3)">危险Toast</el-button>
    </el-row>
    <br />
    <el-row>
      <el-button plain @click="handleAlert">Alert</el-button>
      <el-button type="primary" plain @click="handleConfirm">Confirm</el-button>
      <el-button type="success" plain @click="handleNotify">Notify</el-button>
      <el-button type="info" plain @click="openHomePage">打开首页</el-button>
    </el-row>
    <br />
    <h1>{{ getB }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { toast, alert, confirm, notify } from '@/utils/toast'

export default {
  name: 'Login',
  mounted() {
    this.handleVueX()
    this.handleMapState()
    this.handleMapGetters()
  },
  computed: {
    ...mapState(['base']),
    ...mapGetters('base', ['getB'])
  },
  methods: {
    toHome() {},
    // toast
    handleToast(type) {
      toast('这是一个Toast提示', type)
    },
    // alert
    handleAlert() {
      alert('确认删除吗？')
        .then(() => {
          toast('你点了确认')
        })
        .catch(() => {
          toast('你点了关闭')
        })
    },
    // confirm
    handleConfirm() {
      confirm('是否确认删除？')
        .then(() => {
          toast('你点了确认')
        })
        .catch(() => {
          toast('你点了取消')
        })
    },
    // notify
    handleNotify() {
      notify.show()
    },
    // 新开页面
    openHomePage() {
      const path = this.$router.resolve({
        name: 'Home',
        query: {
          id: '123'
        }
      })
      window.open(path.href, '_blank')
    },
    // 去登陆页
    toHmoe() {
      this.$router.push({
        name: 'Login',
        query: {
          id: '123',
          type: 'edit'
        }
      })
    },
    // 使用vuex读取state
    handleVueX() {
      console.log(this.$store.state.base.b)
    },
    // 使用mapState映射vuex
    handleMapState() {
      console.log(this.base.b)
    },
    // 使用mapGetters映射getters
    handleMapGetters() {
      console.log(this.getB)
    }
  }
}
</script>

<style scoped lang="scss">
.login_box {
  @include box_shadow(0.2, red);
  padding: 20px;
}
</style>
