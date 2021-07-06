import { defineComponent } from 'vue'

import { FieldPropsDefine, CommonWidgetNames } from '../types'

import { getWidget } from '../theme'

export default defineComponent({
  name: 'NumberFeild',
  props: FieldPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      const value = v
      console.log('NumberFIeld -> handleChange -> value:', v)

      const num = Number(value)
      console.log('NumberFIeld -> handleChange -> num:', num)

      const isEmpty = value === ''

      if (Number.isNaN(num) || isEmpty) {
        props.onChange && props.onChange(undefined)
      } else {
        props.onChange && props.onChange(num)
      }
    }

    const NumberWidgetRef = getWidget(CommonWidgetNames.NumberWidget)

    return () => {
      const NumberWidget = NumberWidgetRef.value

      const { value }: any = props

      // return <input type="text" onInput={handleChange} value={value} />
      return <NumberWidget onChange={handleChange} value={value} />
    }
  },
})
