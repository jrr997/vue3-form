import { defineComponent } from 'vue'

import { FilePropsDefine, Schema } from '../types'

import { useVJSFContext } from '../context'

/**
 * {
 *   items: { type: string },
 * }
 *
 * {
 *   items: [
 *    { type: string },
 *    { type: number }
 *   ]
 * }
 *
 * {
 *   items: { type: string, enum: ['1', '2'] },
 * }
 */
export default defineComponent({
  name: 'ArrayField',
  props: FilePropsDefine,
  setup(props) {
    const context = useVJSFContext()

    const handleMultiTypeChange = (v: any, index: number) => {
      const { value } = props
      console.log(666, value)

      const arr = Array.isArray(value) ? value : []

      arr[index] = v

      props.onChange(arr)
    }

    return () => {
      const { schema, rootSchema, value } = props

      const SchemaItem = context.SchemaItem

      const isMultitype = Array.isArray(schema.items)

      if (isMultitype) {
        const items: Schema[] = schema.items as any
        const arr = Array.isArray(value) ? value : []
        return items.map((s: Schema, index: number) => (
          <SchemaItem
            schema={s}
            key={index}
            rootSchema={rootSchema}
            value={arr[index]}
            onChange={v => handleMultiTypeChange(v, index)}
          />
        ))
      }

      return <div>hehe</div>
    }
  },
})
