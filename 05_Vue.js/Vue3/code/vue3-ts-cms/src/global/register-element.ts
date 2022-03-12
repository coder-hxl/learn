import { App } from 'vue'

// 组件
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElUpload,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElSubMenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElConfigProvider,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus'

// icon
import {
  UserFilled,
  Iphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Expand,
  Fold,
  Avatar,
  CircleCloseFilled
} from '@element-plus/icons-vue'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElUpload,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElSubMenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElConfigProvider,
  ElBreadcrumb,
  ElBreadcrumbItem
]
const componentsIcons = [
  UserFilled,
  Iphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Expand,
  Fold,
  CircleCloseFilled,
  Avatar
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }

  for (const component of componentsIcons) {
    app.component(component.name, component)
  }
}
