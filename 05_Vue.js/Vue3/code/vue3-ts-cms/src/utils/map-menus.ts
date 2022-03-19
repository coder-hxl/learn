import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function mapMenusToRouter(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((item) => {
    const route = require('../router/main' + item.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children ?? [])
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumb: IBreadcrumb[] = []

  for (const menu of userMenus) {
    if (menu.type === 1) {
      const MapBreadcrumbs = pathMapBreadcrumbs(
        menu.children ?? [],
        currentPath
      )
      if (MapBreadcrumbs) {
        breadcrumb.push({ name: menu.name })
        breadcrumb.push(...MapBreadcrumbs)
        return breadcrumb
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      breadcrumb.push({ name: menu.name })
      return breadcrumb
    }
  }
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recursePermissions = (userMenus: any[]) => {
    for (const menu of userMenus) {
      if (menu.type === 1 || menu.type === 2) {
        _recursePermissions(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  _recursePermissions(userMenus)

  return permissions
}

export { firstMenu }
