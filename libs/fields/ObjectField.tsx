import { defineComponent, inject } from 'vue'

import { SchemaFormContextKey } from '../context'

import { FilePropsDefine } from '../types'

import { isObject } from '../utils'

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'number',
    },
  },
}

const TypeHelperComponent = defineComponent({
  props: FilePropsDefine,
})

type SchemaItemDefined = typeof TypeHelperComponent

export default defineComponent({
  name: '',
  props: FilePropsDefine,
  setup(props) {
    const context: { SchemaItem: SchemaItemDefined } | undefined = inject(
      SchemaFormContextKey
    )

    if (!context) {
      throw Error('SchemaForm should be used')
    }

    const handleObjectFieldChange = (key: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {}

      if (v === undefined) {
        delete value[key]
      } else {
        value[key] = v
      }

      props.onChange(value)
    }

    return () => {
      const { schema, rootSchema, value } = props
      console.log(555, value)

      const { SchemaItem } = context

      const properties = schema.properties || {}

      const currentValue: any = isObject(value) ? value : {}

      return Object.keys(properties).map((k: string, index: number) => (
        <SchemaItem
          schema={properties[k]}
          rootSchema={rootSchema}
          value={currentValue[k]}
          key={index}
          onChange={(v: any) => handleObjectFieldChange(k, v)}
        />
      ))
    }
  },
})
