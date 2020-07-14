import Mock from 'mockjs'

const tableData = Mock.mock({
  'data|20': [
    {
      id: '@id', //id
      date: '@date(yyyy-MM-dd)', //时间
      status: '@boolean', //状态
      name: '@name', //姓名
      address: '@county',
      display_time: '@datetime',
      cparagraph: '@cparagraph',
      csentence: '@csentence',
      email: '@email',
      region: '@region', //区域
      city: '@city',
      province: '@province',
      county: '@county', //县
      image: '@image(200x200)',
      pageviews: '@integer(300, 5000)'
    }
  ]
})

export default [
  {
    url: '/newTable/list',
    type: 'get',
    response: () => {
      return {
        code: 200,
        ...tableData,
        currentPage: 1,
        total: 100,
        pageSize: 10
      }
    }
  }
]
