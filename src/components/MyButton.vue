<template>
  <div>
    <button
      :styles="myButtonStyle"
      @click="clickFn"
      :class="{
        small: type === 'small',
        normal: type === 'normal',
        big: type === 'big',

        default: propsStyle === 'default',
        warning: propsStyle === 'warning',
        danger: propsStyle === 'danger'
      }"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'myButton',
  data() {
    return {
      myButtonStyle: {},
      propsStyle: ''
    }
  },
  props: {
    // 默认的大小选项
    type: {
      type: String,
      default: 'normal'
    },
    // 默认文字
    text: {
      type: String,
      default: '按钮'
    },

    // 控制按钮的CSS 样式修改
    btnStyle: {
      type: [Object, String],
      default: 'default'
    }
  },
  created() {
    // CSS 样式进行格式化
    this.styleInit()
  },
  methods: {
    // 支持点击事件
    clickFn() {
      this.$emit('click')
    },

    // CSS 样式格式化
    styleInit() {
      if (typeof this.btnStyle === 'string') {
        this.propsStyle = this.btnStyle
      } else if (typeof this.btnStyle === 'object') {
        for (const key in this.btnStyle) {
          this.$set(this.myButtonStyle, key, this.btnStyle[key])
        }
      }
    }
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
/* 控制整体样式大小 */
.normal {
  height: 40px;
  font-size: 14px;
  padding: 0 20px;
  cursor: pointer;
}
.small {
  height: 30px;
  font-size: 12px;
  padding: 0 15px;
  cursor: pointer;
}
.big {
  height: 50px;
  font-size: 18px;
  padding: 0 50px;
  cursor: pointer;
}

/* 默认样式 */
.default {
  color: #000;
}
.warning {
  background-color: #ee0a24;
  border: 1px solid #ee0a24;
  color: #fff;
}
.danger {
  background-color: #ff976a;
  border: 1px solid #ff976a;
  color: #fff;
}
</style>
