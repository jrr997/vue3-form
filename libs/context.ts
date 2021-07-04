import { CommonFileType } from './types'
import { inject } from 'vue'

export const SchemaFormContextKey = Symbol()

// 表单的子组件通过inject的方式获取表单组件的provide
export function useVJSFContext() {
  const context: { SchemaItem: CommonFileType } | undefined = inject(
    SchemaFormContextKey
  )

  if (!context) {
    throw Error('SchemaForm should be used')
  }

  return context
}
