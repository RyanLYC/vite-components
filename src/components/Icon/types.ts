import type { ExtractPropTypes } from 'vue'

// export const iconProps = {
//   spin: Boolean,
//   rotate: String,
//   tabIndex: Number,
// } as const

export const iconProps = {
  spin: {
    type: Boolean,
  },
  rotate: {
    type: String,
  },
  tabIndex: {
    type: Number,
  },
}

export type IconPropsType = Partial<ExtractPropTypes<typeof iconProps>>
