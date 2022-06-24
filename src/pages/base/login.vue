<template>
  <div class="login_box">
    <h1 @click="fn">Login</h1>
  </div>
</template>

<script>
import { toast } from '@/utils/toast'

export default {
  name: 'Login',
  methods: {
    fn() {
      toast()
    }
  }
}
</script>

<style scoped lang="scss"></style>
