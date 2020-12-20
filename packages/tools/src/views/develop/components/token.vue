<template>
  <div class="tools-token">
    <h3>解析token信息</h3>
    <div class="token">
      <section>
        <textarea v-model="token"></textarea>
        <a-button-group>
          <a-button type="primary" @click="parseToken">解析</a-button>
          <a-button type="default" @click="clear">清空</a-button>
        </a-button-group>
      </section>
      <pre>{{ parsedToken }}</pre>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Button } from 'ant-design-vue';

import { parseToken } from '../utils/index';

@Component({
  name: "tools",
  components: {
    AButton: Button,
    AButtonGroup: Button.Group,
  }
})
export default class ComponentName extends Vue {
  token: string = '';
  parsedToken: any = '';

  parseToken() {
    try {
      this.parsedToken = parseToken(this.token);
    } catch (error) {
      this.parsedToken = '非法Token，请检查！'
    }
  }

  clear() {
    this.token = '';
    this.parsedToken = '';
  }
}
</script>
<style lang="less" scoped>
.tools-token {
  margin-bottom: 15px;
  .token {
    display: flex;
    height: 100%;
  }
  textarea {
    display: block;
    width: 500px;
    height: 300px;
    margin-bottom: 15px;
    border-radius: 3px;
  }
  pre {
    flex: 1;
    margin-left: 15px;
    padding: 8px;
    width: 500px;
    height: 100%;
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: #efefef;
  }
}
</style>