import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: '辽宁省实验中学生存指南',
  description:
    '欢迎阅读<辽宁省实验中学生存指南>，这是由LNSY极维电脑社提出的、接受全体在读同学和学哥学姐贡献的文档站，希望能给未来的实验在读和入学新生同学带来微小的帮助。',

  base: '/SurviveLNSY/',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg', href: '/SurviveLNSY/favicon.svg' },
    ],
  ],

  themeConfig: {
    logo: '/favicon.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jiboyu78/SurviveLNSY' },
    ],
    nav: [
      { text: '首页', link: '/' },
      { text: '附录', link: '/fu-lu/gong-xian-ming-dan' },
    ],

    sidebar: [
      {
        text: '开始',
        collapsed: true,
        items: [
          { text: 'README', link: '/' },
          { text: '提issue', link: '/ti-issue' },
        ],
      },
      {
        text: '序',
        collapsed: true,
        items: [
          { text: '声明', link: '/xu/sheng-ming' },
          { text: '序', link: '/xu/xu' },
        ],
      },
      {
        text: '立志篇',
        collapsed: true,
        items: [
          {
            text: '欢迎来到辽宁省实验',
            link: '/li-zhi-pian/huan-ying-lai-dao-liao-ning-sheng-shi-yan',
          },
          {
            text: '你想要做什么',
            link: '/li-zhi-pian/ni-xiang-yao-zuo-shen-me',
          },
          {
            text: '提高思维的品质',
            link: '/li-zhi-pian/ti-gao-si-wei-de-pin-zhi',
          },
          {
            text: '失败的思维方式',
            link: '/li-zhi-pian/shi-bai-de-si-wei-fang-shi/README',
            items: [
              {
                text: '中考思维',
                link: '/li-zhi-pian/shi-bai-de-si-wei-fang-shi/zhong-kao-si-wei',
              },
              {
                text: '被动思维',
                link: '/li-zhi-pian/shi-bai-de-si-wei-fang-shi/bei-dong-si-wei',
              },
            ],
          },
          { text: '反对PUA', link: '/li-zhi-pian/fan-dui-pua' },
          {
            text: '你的身价是多少',
            link: '/li-zhi-pian/ni-de-shen-jia-shi-duo-shao',
          },
          {
            text: '正确地浪费剩下的时间',
            link: '/li-zhi-pian/zheng-que-di-lang-fei-sheng-xia-de-shi-jian',
          },
          {
            text: '总有更值得做的事情',
            link: '/li-zhi-pian/zong-you-geng-zhi-de-zuo-de-shi-qing',
          },
          {
            text: '认识信息素养',
            link: '/li-zhi-pian/ren-shi-xin-xi-su-yang/README',
            items: [
              {
                text: '提问的智慧',
                link: '/li-zhi-pian/ren-shi-xin-xi-su-yang/README-zh_CN',
              },
            ],
          },
          {
            text: '学竞赛的兴趣',
            link: '/li-zhi-pian/xue-jing-sai-de-xing-qu',
          },
        ],
      },
      {
        text: '访谈集',
        collapsed: true,
        items: [
          { text: '大学和高中', link: '/fang-tan-ji/da-xue-he-gao-zhong' },
          { text: '关于社团', link: '/fang-tan-ji/guan-yu-she-tuan' },
          { text: '关于永志班', link: '/fang-tan-ji/guan-yu-yong-zhi-ban' },
          {
            text: '关于竞赛',
            link: '/fang-tan-ji/guan-yu-jing-sai/README',
            items: [
              {
                text: '“只是去听一听”',
                link: '/fang-tan-ji/guan-yu-jing-sai/zhi-shi-qu-ting-yi-ting',
              },
            ],
          },
          { text: '师说', link: '/fang-tan-ji/shi-shuo' },
        ],
      },
      {
        text: '生存技巧',
        collapsed: true,
        items: [
          {
            text: '大事记',
            link: '/sheng-cun-ji-qiao/da-shi-ji/README',
            items: [
              { text: '高一', link: '/sheng-cun-ji-qiao/da-shi-ji/gao-yi' },
              { text: '高二', link: '/sheng-cun-ji-qiao/da-shi-ji/gao-er' },
              { text: '高三', link: '/sheng-cun-ji-qiao/da-shi-ji/gao-san' },
            ],
          },
          {
            text: '课程与日程',
            link: '/sheng-cun-ji-qiao/ke-cheng-yu-ri-cheng/README',
            items: [
              {
                text: '长课间',
                link: '/sheng-cun-ji-qiao/ke-cheng-yu-ri-cheng/chang-ke-jian',
              },
              {
                text: '体活',
                link: '/sheng-cun-ji-qiao/ke-cheng-yu-ri-cheng/ti-huo',
              },
              {
                text: '间操',
                link: '/sheng-cun-ji-qiao/ke-cheng-yu-ri-cheng/jian-cao',
              },
              {
                text: '晚课',
                link: '/sheng-cun-ji-qiao/ke-cheng-yu-ri-cheng/wan-ke',
              },
              {
                text: '竞赛课',
                link: '/sheng-cun-ji-qiao/ke-cheng-yu-ri-cheng/jing-sai-ke',
              },
              {
                text: '教师答疑辅导',
                link: '/sheng-cun-ji-qiao/ke-cheng-yu-ri-cheng/jiao-shi-da-yi-fu-dao',
              },
            ],
          },
          {
            text: '纪律',
            link: '/sheng-cun-ji-qiao/ji-l/README',
            items: [
              { text: '班分', link: '/sheng-cun-ji-qiao/ji-l/ban-fen' },
              {
                text: '一日常规',
                link: '/sheng-cun-ji-qiao/ji-l/yi-ri-chang-gui',
              },
              { text: '巡视', link: '/sheng-cun-ji-qiao/ji-l/xun-shi' },
              {
                text: '班容班貌评比',
                link: '/sheng-cun-ji-qiao/ji-l/ban-rong-ban-mao-ping-bi',
              },
              {
                text: '间操和周会评比',
                link: '/sheng-cun-ji-qiao/ji-l/jian-cao-he-zhou-hui-ping-bi',
              },
              {
                text: '寝室评比',
                link: '/sheng-cun-ji-qiao/ji-l/qin-shi-ping-bi',
              },
              {
                text: '违纪处罚',
                link: '/sheng-cun-ji-qiao/ji-l/wei-ji-chu-fa',
              },
            ],
          },
          {
            text: '管理组织',
            link: '/sheng-cun-ji-qiao/guan-li-zu-zhi/README',
            items: [
              {
                text: '学生会',
                link: '/sheng-cun-ji-qiao/guan-li-zu-zhi/xue-sheng-hui',
              },
              {
                text: '社联',
                link: '/sheng-cun-ji-qiao/guan-li-zu-zhi/she-lian',
              },
              {
                text: '团委',
                link: '/sheng-cun-ji-qiao/guan-li-zu-zhi/tuan-wei',
              },
              {
                text: '（注）省实验家长群',
                link: '/sheng-cun-ji-qiao/guan-li-zu-zhi/zhu-sheng-shi-yan-jia-zhang-qun',
              },
            ],
          },
          {
            text: '消费',
            link: '/sheng-cun-ji-qiao/xiao-fei/',
            items: [
              { text: '食堂', link: '/sheng-cun-ji-qiao/xiao-fei/shi-tang' },
              {
                text: '小卖部',
                link: '/sheng-cun-ji-qiao/xiao-fei/xiao-mai-bu',
              },
              {
                text: '文印室',
                link: '/sheng-cun-ji-qiao/xiao-fei/wen-yin-shi',
              },
              {
                text: '网络办',
                link: '/sheng-cun-ji-qiao/xiao-fei/wang-luo-ban',
              },
              {
                text: '学生处',
                link: '/sheng-cun-ji-qiao/xiao-fei/xue-sheng-chu',
              },
              {
                text: '嘉年华学校周边',
                link: '/sheng-cun-ji-qiao/xiao-fei/jia-nian-hua-xue-xiao-zhou-bian',
              },
              { text: '寝室', link: '/sheng-cun-ji-qiao/xiao-fei/qin-shi' },
            ],
          },
          {
            text: '住宿',
            link: '/sheng-cun-ji-qiao/zhu-su/README',
            items: [
              {
                text: '寝室条件',
                link: '/sheng-cun-ji-qiao/zhu-su/qin-shi-tiao-jian',
              },
              {
                text: '作息时间',
                link: '/sheng-cun-ji-qiao/zhu-su/zuo-xi-shi-jian',
              },
              {
                text: '寝室巡查和评比',
                link: '/sheng-cun-ji-qiao/zhu-su/qin-shi-xun-cha-he-ping-bi',
              },
            ],
          },
          {
            text: '公共设施',
            link: '/sheng-cun-ji-qiao/gong-gong-she-shi/README',
            items: [
              {
                text: '体育场',
                link: '/sheng-cun-ji-qiao/gong-gong-she-shi/ti-yu-chang',
              },
              {
                text: '教学设施',
                link: '/sheng-cun-ji-qiao/gong-gong-she-shi/jiao-xue-she-shi',
              },
              {
                text: '热水',
                link: '/sheng-cun-ji-qiao/gong-gong-she-shi/re-shui',
              },
              {
                text: '厕所',
                link: '/sheng-cun-ji-qiao/gong-gong-she-shi/ce-suo',
              },
              {
                text: '空调',
                link: '/sheng-cun-ji-qiao/gong-gong-she-shi/kong-tiao',
              },
              {
                text: '图书馆',
                link: '/sheng-cun-ji-qiao/gong-gong-she-shi/tu-shu-guan',
              },
            ],
          },
        ],
      },
      {
        text: '附录',
        collapsed: true,
        items: [{ text: '贡献名单', link: '/fu-lu/gong-xian-ming-dan' }],
      },
    ],
  },
});
