import type { InjectionKey } from 'vue'
import type { CollapseContext } from './types'

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
