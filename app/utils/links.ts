import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  {
    label: 'Главная',
    icon: 'i-lucide-home',
    to: '/'
  },
  {
    label: 'Технологии',
    icon: 'i-lucide-folder',
    to: '/technologies'
  },
  {
    label: 'Проекты',
    icon: 'i-lucide-file-text',
    to: '/blog'
  }
  // ,
  // {
  //   label: 'Компоненты',
  //   icon: 'i-lucide-file-text',
  //   to: '/components'
  // }
]
