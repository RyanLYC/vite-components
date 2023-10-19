<template>
  <div
    class="zg-input"
    :class="{
      [`zg-input--${type}`]: type,
      [`zg-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
    }"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="zg-input__prepend">
        <slot name="prepend" />
      </div>
      <div class="zg-input__wrapper" :class="{ 'is-focus': isFocus }">
        <!-- prefix slot -->
        <span v-if="$slots.prefix" class="zg-input__prefix">
          <slot name="prefix" />
        </span>
        <input
          class="zg-input__inner"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          ref="inputRef"
          v-bind="attrs"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          v-model="innerValue"
          @input="handleInput"
          @focus="handleFocus"
          @change="handleChange"
          @blur="handleBlur"
        />
        <!-- suffix slot -->
        <span v-if="$slots.suffix || showClear || showPasswordArea" class="zg-input__suffix">
          <slot name="suffix" />
          <CloseCircleFilled v-if="showClear" class="zg-input__clear" @click="clear" />
          <EyeOutlined v-if="showPasswordArea && passwordVisible" class="zg-input__password" @click="togglePasswordVisible" />
          <EyeInvisibleOutlined v-if="showPasswordArea && !passwordVisible" class="zg-input__password" @click="togglePasswordVisible" />
        </span>
      </div>
      <!-- append slot -->
      <div v-if="$slots.append" class="zg-input__append">
        <slot name="append" />
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea
        class="zg-textarea__wrapper"
        v-bind="attrs"
        ref="inputRef"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useAttrs, type Ref } from 'vue'
import type { InputEmits, InputProps } from './types'
import { CloseCircleFilled, EyeOutlined, EyeInvisibleOutlined } from '../Icon'

defineOptions({
  name: 'ZgInput',
  inheritAttrs: false,
})
const props = withDefaults(defineProps<InputProps>(), { type: 'text', autocomplete: 'off' })
const emits = defineEmits<InputEmits>()
const attrs = useAttrs()
const isFocus = ref(false)
const passwordVisible = ref(false)
const innerValue = ref(props.modelValue)
const inputRef = ref() as Ref<HTMLInputElement> | Ref<HTMLTextAreaElement>

const showClear = computed(() => {
  return props.clearable && !props.disabled && !!innerValue.value && isFocus.value
})
const showPasswordArea = computed(() => {
  return props.showPassword && !props.disabled && !!innerValue.value
})

const handleInput = () => {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
}

const handleFocus = (event: FocusEvent) => {
  isFocus.value = true
  emits('focus', event)
}
const clear = () => {
  console.log('clear triggered')
  innerValue.value = ''
  emits('update:modelValue', '')
  emits('clear')
  emits('input', '')
  emits('change', '')
}
const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}
const handleChange = () => {
  emits('change', innerValue.value)
}
const handleBlur = (event: FocusEvent) => {
  console.log('blur triggered')
  isFocus.value = false
  emits('blur', event)
}
defineExpose({
  ref: inputRef,
})
</script>
