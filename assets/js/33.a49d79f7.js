(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{437:function(s,t,r){"use strict";r.r(t);var n=r(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("# 字符串常用方法")]),s._v(" "),t("p",[s._v("// str.slice(start,end) 截取字符串 返回被截取的元素\n    var str = 'abcde'\n    str = str.slice() // 'abcde' 不传递参数默认复制\n    console.log(str);\n    str = str.slice(2, str.length-1)// 输出'cd',传递两个，为提取的起始点和结束点（不含）\nstr = str.slice(2,-1) // -1等价于最后一个字符\n    console.log(str);")]),s._v(" "),t("p",[s._v("// str.split(分隔符,个数) 字符串转数组，使用指定的分隔符将一个字符串拆分\n    var str = 'A"),t("em",[s._v("B")]),s._v("C"),t("em",[s._v("D")]),s._v("E"),t("em",[s._v("F")]),s._v("G';\n    str = str.split('*') // 输出 [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\"]\n    str = 'abcd'\n    str = str.split() // 输出 ['abcd']\n    // 注意分隔符为引号\n    str = str.split('') // 输出 ['abcd']\n    // substr(start,strLen)  截取个数\n    // substring(start, end) 不包括end\n    // 截取一个字符串的片段，并返回截取的字符串 区别在于参数二\n    var str = 'ABCDEFGHIJKLMN';\n    str.substr(2) // 输出 'CDEFGHIJKLMN'\n    str.substring(2)   // 输出 'CDEFGHIJKLMN'\n    str.substr(2, 9) // 输出 'CDEFGHIJK'\n    str.substring(2, 9)   // 输出 'CDEFGHI'")])])}),[],!1,null,null,null);t.default=e.exports}}]);