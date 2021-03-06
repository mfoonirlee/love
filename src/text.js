const text = `我想了解你什么？
1.我想了解你的过去
2.想知道你是哪年哪月哪日降生在这世上
3.想了解孕育你温柔的家
4.想知道你善良的源头
5.想了解孩童时代你的嬉戏打闹
6.想知道蹒跚学步时的种种
7.想了解学说话是你的第一句话
8.想知道你学拿筷子时欢乐的样子
9.想了解你第一堂课紧张的模样
10.想知道你离开父母时的担惊受怕
11.想了解你初上小学的紧张与不安
12.想知道你和同学一起早早早的快乐
13.想了解你那时的怯生生的“你好”
14.想知道你第一个字稚拙的欢喜
15.想了解你第一支笔欢乐与否
16.想知道你第一幅画画的是什么
17.想了解你第一次懵懂的作业
18.想知道你第一次春游的景象
19.想了解初中就开始刻苦用功的岁月
20.想知道你中考时茫然的疑惑
21.想了解你与游戏结缘的瞬间
22.想知道你与动漫相遇的刹那
23.想了解你与同学后会无期的怅然
24.想知道凌晨5点勉力学习的坚强
25.想了解数十万人无法击垮的坚毅
26.想知道终于离别高中你的留念
27.想了解你大学时迷茫的前途
28.想知道你本科时浑浑噩噩的时光
29.想了解你考研时的专心与刻苦
30.想知道你毕设时艰难的岁月
31.想了解你学车时匆忙与慌张
32.想知道找工作时犹豫与迟疑
33.想了解你进入社会时的成长与感动
34.我还想了解你的现在
35.想知道你工作中的每一分辛酸
36.想了解你喜欢北京的殷红的秋叶吗
37.想知道你喜欢怎样颜色的天空
38.想了解你喜欢看怎样的电影
39.想知道你喜欢哪一种乐器
40.想了解你喜欢哪一位作家
41.想知道你喜欢哪一类数据
42.想了解你喜欢怎样的动画
43.想知道你喜欢何种游戏
44.想了解你无所事事的午后
45.想知道你来去匆匆的背影
46.想了解你喜欢怎样的香味
47.想知道你喜欢如何的穿着
48.想了解你与室友的友谊
49.想知道你与母亲深厚的亲情
50.想了解你不愿接受我背后的深思
51.想知道你拒绝我遥远的思绪
52.想了解你沉默之下的深意
53.想知道你对我的所有疑虑
54.想了解你半夜起夜时的疑虑
55.想知道你仰望星空的样子
56.想了解你大雨的夜晚
57.想知道你无声的黑夜
58.想了解你欢乐的逛街
59.想知道你愉悦的周末
60.想了解你繁重工作中的无力
61.想知道你重复工作中的困惑
62.想了解你争辩时的气恼
63.想知道你失败时的气馁
64.想了解你成长时痛苦的感悟
65.想知道你失意时眼泪的温度
66.想了解你寂寞时孤单的身影
67.我想了解未来的你
68.想知道拉着你的手的温度
69.想了解你并肩而行的日常
70.想知道你在日本的笑容
71.想了解你穿和服的样子
72.想知道你吃日料的满足
73.想了解你赏樱的感动
74.想知道你看枫叶的记忆
75.想了解你登山的模样
76.想知道你看演唱会的表情
77.想了解你做饭的味道
78.想知道你发丝的香味
79.想了解与你一起看日出的感动
80.想知道和你漫步在多瑙河畔时的声乐回响
81.想了解和你走过贝克街的历史沧桑
82.想知道和你携手俯瞰爱琴海的浪漫
83.想了解和你一起流连布鲁日巧克力的芬芳
84.想知道和你相拥在埃菲尔铁塔下日光的温度
85.想了解和你坐在威尼斯扁舟上的波澜不惊
86.想知道和你一起走过安宁之国时内心的涟漪
87.想了解和你一起仰观风车嗅着郁金香的馥郁
88.想知道和你为柴米油盐争吵后的歉意
89.想了解和你争论后你生气的模样
90.想知道和你在日常琐碎中纠结的细节
91.想了解和你产生分歧时争辩的不快
92.想知道和你化解矛盾时的美好
93.想了解你对面真实的我的感情
94.想知道你了解我之后的神情
95.想了解彼此跨越时间的思念的彼端
96.想知道我们畅想未来的美好
97.想了解终于与你走到一起的前路
98.想知道你穿着婚纱的样子
99.想了解与你许下誓言的眼泪
100.我想知道,你喜欢我吗
`

const txtRunner = (txt) => {
  const txtArr = txt.split('\n').filter((i) => i)
  /* eslint-disable */
  console.log(txtArr.length)
  const d = document.createElement('div');
  d.className = 'move-text';
  d.innerHTML = `<div class="move-list">${txtArr.map(msg => `<p>${msg}</p>`).join('')}</div>`;
  document.body.appendChild(d);
}

export default function execute() {
  txtRunner(text)
}
