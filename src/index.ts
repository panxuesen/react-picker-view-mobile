import { PickerView } from './picker-view'
import { canUseDom } from './supports-passive'
import './global/global.less';
// import './picker-view.less'


canUseDom && document.addEventListener('touchstart', () => {}, true)

export type {
  PickerViewProps,
  PickerValue,
  PickerColumnItem,
  PickerColumn,
  PickerValueExtend,
} from './picker-view'

export default PickerView
