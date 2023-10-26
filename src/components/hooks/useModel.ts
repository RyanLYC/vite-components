import { computed, ref, watch, type WritableComputedRef } from 'vue'
import { isArray, isEqual, isUndefined } from 'lodash-es'

type UseNormalModelOptions = {
  prop?: string
  deep?: boolean
  defaultValue?: any
}

export const useNormalModel = <T>(
  props: Record<string, any>,
  emit: any,
  config: UseNormalModelOptions = {}
): [WritableComputedRef<T>, (val: T) => void] => {
  const { prop = 'modelValue', deep = false, defaultValue } = config
  const usingProp = prop
  const currentValue = ref(!isUndefined(props[usingProp]) ? props[usingProp] : defaultValue)

  const updateCurrentValue = (value: T) => {
    if (value === currentValue.value || isEqual(value, currentValue.value)) {
      return
    }
    currentValue.value = value
    emit(`update:${usingProp}`, currentValue.value)
  }

  watch(
    () => props[usingProp],
    (val) => {
      if (val === currentValue.value) {
        return
      }
      currentValue.value = val
    },
    {
      deep,
    }
  )
  return [
    computed<T>({
      get() {
        return currentValue.value
      },
      set(value) {
        updateCurrentValue(value)
      },
    }),
    updateCurrentValue,
  ]
}

export const useArrayModel = <T>(
  props: Record<string, any>,
  emit: any,
  config: UseNormalModelOptions = {}
): [WritableComputedRef<T[]>, (val: T | T[]) => void] => {
  const [computedValue, updateCurrentValue] = useNormalModel<T[]>(props, emit, {
    ...config,
    defaultValue: [],
  })
  if (!isArray(computedValue.value)) {
    console.warn('[useArrayModel] 绑定值类型不匹配, 仅支持数组类型, value:', props[config?.prop || 'modelValue'])
    updateCurrentValue([])
  }

  const updateItem = (value: T | T[]) => {
    if (isArray(value)) {
      updateCurrentValue(value)
      return
    }
    const val = computedValue.value
    const index = val.indexOf(value)
    if (index !== -1) {
      val.splice(index, 1)
    } else {
      val.push(value)
    }
    updateCurrentValue(val)
  }

  return [computedValue, updateItem]
}
