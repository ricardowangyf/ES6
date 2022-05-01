
// 1. 题目一： arr => result，将 arr Array 数组对象转换成 result 树（Tree）对象
// 2. 题目二： result => arr，将 result  树（Tree）对象转换成 arr Array 数组对象

var arr = [
  { id: 1, name: '湖北省' },
  { id: 2, name: '北京市' },
  { id: 3, name: '上海市' },
  { parentId: 2, name: '东城区' },
  { parentId: 2, name: '西城区' },
  { parentId: 2, name: "朝阳区" },
  { parentId: 2, name: "丰台区" },
  { parentId: 2, name: "石景山区" },
  { parentId: 2, name: "海淀区" },
  { parentId: 1, name: '黄冈市' },
  { parentId: 1, name: '咸宁市' },
  { parentId: 1, name: "随州市" },
  { parentId: 3, name: "黄浦区",  },
  { parentId: 3, name: "徐汇区",  },
  { parentId: 3, name: "长宁区",  },
]


var result = [
  {
    id: 1,
    name: '湖北省'
    child: [
      { parentId: 1, name: '黄冈市'},
      { parentId: 1, name: '咸宁市'},
      { parentId: 1, name: "随州市"},
    ]
  },
  {
    id: 2,
    name: '北京市',
    child: [
      { parentId: 2, name: '东城区' },
      { parentId: 2, name: '西城区' },
      { parentId: 2, name: "朝阳区" },
      { parentId: 2, name: "丰台区" },
      { parentId: 2, name: "石景山区" },
      { parentId: 2, name: "海淀区" },
    ]
  },
  {
    id: 3,
    name: '上海市',
    child: [
      { parentId: 3, name: "黄浦区", },
      { parentId: 3, name: "徐汇区", },
      { parentId: 3, name: "长宁区", },
    ]
  },
]