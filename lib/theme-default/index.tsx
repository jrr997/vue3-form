import SelectionWidget from './SelectionWidget'
import TextWidget from './TextWidget'
import { CommonWidgetDefine, CommonWidgetPropsDefine } from '../types'
import { defineComponent } from 'vue'

const CommonWidget: CommonWidgetDefine = defineComponent({
  props: CommonWidgetPropsDefine,
  setup() {
    return () => null
  },
})

export default {
  widgets: {
    SelectionWidget,
    TextWidget,
    NumberWidget: CommonWidget,
  },
}
