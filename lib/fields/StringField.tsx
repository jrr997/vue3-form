import { defineComponent } from 'vue'

import { FieldPropsDefine, CommonWidgetNames } from '../types'

import { getWidget } from '../theme'

export default defineComponent({
  name: 'StringFeild',
  props: FieldPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      console.log('StringField -> handleChange', v)
      props.onChange(v)
    }

    const TextWidgetRef = getWidget(CommonWidgetNames.TextWidget)

    return () => {
      const TextWidget = TextWidgetRef.value

      const { schema, rootSchema, ...rest } = props

      return <TextWidget {...rest} onChange={handleChange} />
      // return <input type="text" onInput={handleChange} value={value} />
    }
  },
})
