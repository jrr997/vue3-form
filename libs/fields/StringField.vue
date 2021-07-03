<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script lang="ts">
// import { ref } from 'vue'
import { FilePropsDefine } from '../types'

export default {
  props: FilePropsDefine,
  // setup(props) {
  //   return
  // },
  methods:{
    handleChange(e: any) {
      console.log(e)
      this.onChange && this.onChange(e.target.value)
      // props.onChange(e.target.value)
  }
}

}

// declare const props: {
//   value: any
//   onChange: (v: string) => void
//   schame: Schema
// }

// export const handleChange = (e: any) => {
//   console.log(e)
//   props.onChange(e.target.value)
// }
</script>
