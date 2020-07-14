/**
 * 新建路由
 * Created By neves 2020/07/14
 */
import GlobalLayout from '@/layout/GlobalLayout'

export default [
  {
    path: '/new', // 模块名 or 功能名称
    name: 'new',
    component: GlobalLayout,
    meta: {
      title: '新建学习',
      clickable: false
    },
    children: [
      {
        path: 'newForm',
        name: 'newForm',
        component: () => import('@/views/new/newForm'),
        meta: {
          title: '表单'
        }
      },
      {
        path: 'newTables',
        name: 'newTables',
        component: () => import('@/views/new/newTables'),
        meta: {
          title: '表格'
        }
      }
    ]
  }
]
