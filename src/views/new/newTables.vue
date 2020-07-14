<template>
  <div>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
  </div>
</template>

<script>
import { getNewTable } from '@/api'
export default {
  name: 'NewTable',
  data() {
    return {
      params: {},
      value: 'false'
    }
  },
  created() {
    this.getDataList()
    console.log(this.value)
  },
  methods: {
    async getDataList() {
      const pager = { currentPage: 1, pageSize: 20 }
      const res = await getNewTable({ ...this.params, ...pager })
      console.log(res)
    }
  }
}
</script>

<style scoped lang="scss"></style>
