import type { ObjectDirective, Plugin } from 'vue'

export type ZObjectDirective = ObjectDirective & {
  name: string
}

export type SFCWithInstall<T> = T & Plugin
