import { shallowMount, mount } from '@vue/test-utils'
import SchemaForm, { NumberField } from '../../libs'

describe('SchemaForm', () => {
  it('should render correct number field', async () => {
    let value = ''
    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: 'number',
        },
        value: value,
        onChange: (v: any) => {
          value = v
        },
        rootSchema: {},
      },
    })

    const numberField = wrapper.findComponent(NumberField)
    expect(numberField.exists()).toBeTruthy()

    // 测试input事件
    const input = numberField.find('input')
    input.element.value = '123'
    input.trigger('input')
    expect(value).toBe(123)
  })
})
