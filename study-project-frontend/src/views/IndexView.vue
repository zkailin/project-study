<template>
  <div>
    欢迎{{store.auth.user.username}}进入学习平台
  </div>
  <el-button @click="logout()" type="danger" plain>退出登录</el-button>
</template>

<script setup>
import {get} from "@/net";
import {ElMessage} from "element-plus";
import router from "@/router/index.js";
import {useStore} from "@/stores/index.js";
const store = useStore()
const logout = () => {
  get('/api/auth/logout', (message) => {
    ElMessage.success(message)
    store.auth.user = null
    router.push('/')
  })
}

</script>
<style scoped>

</style>