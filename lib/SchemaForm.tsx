import { defineComponent, provide, PropType } from 'vue'

import { Schema, SchemaTypes, FilePropsDefine } from './types'
import SchemaItem from './SchemaItems'
import { SchemaFormContextKey } from './context'

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  name: 'SchemaForm',
  setup(props, { slots, emit, attrs }) {
    const context: any = {
      SchemaItem,
    }

    provide(SchemaFormContextKey, context)

    const handleChange = (v: any) => {
      // wrapped
      props.onChange(v)
    }

    return () => {
      const { value, schema } = props
      return (
        <SchemaItem
          schema={schema}
          onChange={handleChange}
          value={value}
          rootSchema={schema}
        />
      )
    }
  },
})
