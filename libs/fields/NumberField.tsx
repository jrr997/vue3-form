import { defineComponent } from 'vue'

import { FilePropsDefine } from '../types'

export default defineComponent({
  name: 'NumberFeild',
  props: FilePropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      const value = e.target.value

      const num = Number(value)

      if (Number.isNaN(num)) {
        props.onChange && props.onChange(undefined)
      } else {
        props.onChange && props.onChange(e.target.value)
      }
    }
    return () => {
      const { value }: any = props

      return <input type="text" onInput={handleChange} value={value} />
    }
  },
})
