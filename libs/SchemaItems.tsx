import { computed, defineComponent, inject } from 'vue'

import { SchemaTypes, FilePropsDefine } from './types'

import { retrieveSchema } from './utils'

import NumberField from './fields/NumberField'
import StringField from './fields/StringField'
import ObjectField from './fields/ObjectField'
import ArrayField from './fields/ArrayField'

export default defineComponent({
  name: 'SchemaItems',
  props: FilePropsDefine,
  setup(props) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })

    return () => {
      const { schema, rootSchema, value } = props
      const retrievedSchema = retrievedSchemaRef.value

      // TODO: 如果type没有指定，我们要猜测这个type
      const type = schema.type
      let Component: any

      switch (type) {
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.OBJECT: {
          Component = ObjectField
          break
        }
        case SchemaTypes.ARRAY: {
          Component = ArrayField
          break
        }
        default: {
          console.warn(`${type} is not supported`)
        }
      }

      return <Component {...props} schema={retrievedSchema} /> // ? 这里的schema重复传了
    }
  },
})
