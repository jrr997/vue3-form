import { defineComponent } from "vue"

import { FilePropsDefine } from '../types'

export default defineComponent({
  name: 'StringFeild',
  props: {
    ...FilePropsDefine
  },
  setup(props) {
    const handleChange = (e: any) => {
      console.log(e);
      props.onChange && props.onChange(e.target.value)
    }
    return () => (
      <input type="text" onInput={handleChange} />
    )
  }
})