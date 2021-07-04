import { defineComponent, provide } from 'vue'

import { Schema, SchemaTypes, FilePropsDefine } from './types'
import SchemaItem from './SchemaItems'
import { SchemaFormContextKey } from './context'

export default defineComponent({
  props: FilePropsDefine,
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
      const { value, schema, rootSchema } = props
      return (
        <SchemaItem
          schema={schema}
          onChange={handleChange}
          value={value}
          rootSchema={rootSchema}
        />
      )
    }
  },
})
