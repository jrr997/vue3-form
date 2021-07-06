import { options } from 'json-schema-merge-allof'
import { defineComponent, PropType, ref, watch } from 'vue'
import { SelectionWidgetPropsDefine, SelectionWidgetDefine } from '../types'

const SelectionWidget: SelectionWidgetDefine = defineComponent({
  name: 'Selection',
  props: SelectionWidgetPropsDefine,
  setup(props) {
    // 双向绑定
    const currentValueRef = ref(props.value)

    watch(currentValueRef, (newV, oldV) => {
      if (newV !== props.value) {
        props.onChange(newV)
      }
    })

    // watch(
    //   () => props.value,
    //   (v) => {
    //     if (v !== currentValueRef.value) {
    //       currentValueRef.value = v
    //     }
    //   },
    // )

    return () => {
      const { options } = props
      return (
        <select multiple={true} v-model={currentValueRef.value}>
          {options.map(op => (
            <option value={op.value}>{op.key}</option>
          ))}
        </select>
      )
    }
  },
})
export default SelectionWidget
