import ZgIconWrapper from '../IconWrapper'
import type { IconPropsType } from '../types'
import '../style/index.scss'

export default (props?: IconPropsType) => (
  <ZgIconWrapper {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 1024">
      <path d="m158.464 314.581 336.64 434.048a21.333 21.333 0 0 0 33.75 0l336.682-434.048a21.333 21.333 0 0 0-3.755-29.952l-16.896-13.056a21.333 21.333 0 0 0-27.306.939l-2.603 2.859L512 665.984 209.067 275.371a21.333 21.333 0 0 0-26.71-5.888l-3.242 2.09-16.896 13.056a21.333 21.333 0 0 0-3.755 29.952z" />
    </svg>
  </ZgIconWrapper>
)
