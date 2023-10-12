import type { Component, Plugin, App } from 'vue'
import type { ZObjectDirective } from './interface'

export function withInstall<T extends Plugin>(main: T, extra?: Record<string, Component>, directives?: ZObjectDirective[]): T {
  const _main = main as any
  _main.install = (app: App) => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component((comp as any).name, comp)
    }
    if (directives) {
      for (const directive of directives) {
        app.directive(directive.name, directive)
      }
    }
  }
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      _main[key] = comp
    }
  }
  return _main as T
}
