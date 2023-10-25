import { computed, ref, watch, type WritableComputedRef } from 'vue'
import { isEqual, isUndefined } from 'lodash-es'

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
