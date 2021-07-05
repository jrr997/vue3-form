import { options } from 'json-schema-merge-allof'
import { defineComponent, PropType, ref, watch } from 'vue'

export default defineComponent({
  name: 'Selection',
  props: {
    value: {},
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
    options: {
      type: Array as PropType<
        {
          key: string
          value: any
        }[]
      >,
      required: true,
    },
  },
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
