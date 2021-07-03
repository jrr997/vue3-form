import { defineComponent, PropType} from "vue";

import { Schema, SchemaTypes } from './types'

import NumberField from './fields/NumberField'
import StringField from './fields/StringField'
// import StringField from './fields/StringField.vue'

export default defineComponent({
 name: "SchemaItems",
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
 setup(props) {
   return() => {
    const {schema} = props
    const type = schema.type
    let Component : any
    switch(type) {
     case SchemaTypes.NUMBER : { 
       Component = NumberField
       break
     }
     case SchemaTypes.STRING : {
       Component = StringField
       break
     }
     default: {
       console.warn(`${type} is not supported`)
     }
    }
    return (<Component {...props} />)
 } 
}
})