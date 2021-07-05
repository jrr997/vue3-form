import { mount, shallowMount } from '@vue/test-utils'
import { Schema } from 'lib/types'
import { defineComponent, h } from 'vue'

import SchemaForm, { NumberField, StringField } from '../../lib'

describe('ObjectField', () => {
  let schema: Schema
  beforeEach(() => {
    schema = {
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
  })
  it('should render properties to correct fileds', async () => {
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: {},
        onChange: () => {},
      },
    })

    const strField = wrapper.findComponent(StringField)
    const numField = wrapper.findComponent(NumberField)

    expect(strField.exists()).toBeTruthy()
    expect(numField.exists()).toBeTruthy()
  })

  it('value should be changed when sub fields trigger onChange', async () => {
    let value: any = {}
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: value,
        onChange: (v: any) => {
          value = v
        },
      },
    })

    const strField = wrapper.findComponent(StringField)
    const numField = wrapper.findComponent(NumberField)

    await strField.props('onChange')('1')
    expect(value.name).toEqual('1')
    await numField.props('onChange')(1)
    expect(value.age).toEqual(1)
  })

  it('when pass undefined to onChange', async () => {
    let value: any = {
      name: '123',
    }
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: value,
        onChange: (v: any) => {
          value = v
        },
      },
    })

    const strFiled = wrapper.findComponent(StringField)
    // const numField = wrapper.findComponent(NumberFiled)
    await strFiled.props('onChange')(undefined)

    expect(value.name).toBeUndefined()
    // expect(numField.exists()).toBeTruthy()
  })
})
