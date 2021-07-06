import { defineComponent } from 'vue'

import { FieldPropsDefine } from '../types'

export default defineComponent({
  name: 'StringFeild',
  props: FieldPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      console.log(e)
      props.onChange && props.onChange(e.target.value)
    }
    return () => {
      const { value }: any = props
      return <input type="text" onInput={handleChange} value={value} />
    }
  },
})
