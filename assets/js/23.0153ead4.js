(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{474:function(s,a,t){"use strict";t.r(a);var n=t(12),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"shell编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell编程"}},[s._v("#")]),s._v(" SHELL编程")]),s._v(" "),t("p",[s._v("Shell是一个用C编写的程序，既是一种命令语言，又是一种程序设计语言。他可以提供用户与操作系统内核的交互。通过使用Shell脚本，人们可以很简便的执行一些重复性的操作，比如查看日志，处理文件，备份等等。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("环境")]),s._v(" "),t("p",[s._v("本文基于Ubuntu20.04与Bash进行介绍。")])]),s._v(" "),t("h2",{attrs:{id:"先上需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先上需求"}},[s._v("#")]),s._v(" 先上需求")]),s._v(" "),t("ol",[t("li",[s._v("编写 adduser.sh, 具体参数要求如下：")]),s._v(" "),t("li",[s._v("参数l表示总长度")]),s._v(" "),t("li",[s._v("参数s表示特殊字符数量")]),s._v(" "),t("li",[s._v("参数o表示编码顺序乱序")])]),s._v(" "),t("h2",{attrs:{id:"再上代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#再上代码"}},[s._v("#")]),s._v(" 再上代码")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用说明")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("usage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${0}")]),s._v(' [-o] [-l LENGTH] [-s CHAR LENGTH]"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Generate a random password'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'  -l LENGTH specify the password length'")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'  -s Append a special char to the password'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'  -o Disorder the password'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 密码总长度")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LEN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 特殊字符长度")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CHAR_LEN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取用户的操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("getopts")]),s._v(" ol:s: OPTION\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${OPTION}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n    o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打乱密码顺序")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DISORDER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    l"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取密码总长度")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LEN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${OPTARG}")]),s._v('"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取特殊字符长度")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("USE_SPEC_CHAR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CHAR_LEN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${OPTARG}")]),s._v('"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      usage\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获得数字和字母长度")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LEN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("$LEN"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("$CHAR_LEN"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随机生成 LEN 位数字和字母组成的密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%s%N$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("RANDOM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("RANDOM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sha256sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -c$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("LEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向 PASSWORD 添加 CHAR_LEN 位特殊字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${USE_SPEC_CHAR}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SPEC_CHAR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$(")]),s._v("echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!@#$%^&*()_+='")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fold")]),s._v(" -w1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shuf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -c"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CHAR_LEN}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PASSWORD}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SPEC_CHAR}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打乱密码顺序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DISORDER}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("PASSWORD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fold")]),s._v(" -w1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shuf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除已处理参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shift")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("OPTIND"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建账号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -m "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PASSWORD}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("chpasswd\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出提示信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your username is :'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your password is :'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PASSWORD}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add user successfully"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br")])]),t("p",[s._v("其中高亮部分:")]),s._v(" "),t("p",[s._v("getopts的使用形式是：getopts option_string variable")]),s._v(" "),t("p",[s._v("getopts一共有三个参数，第一个是"),t("code",[s._v("o")]),s._v("这样的选项，第二个参数是 "),t("code",[s._v("l")]),s._v("这样的参数，第三个是"),t("code",[s._v("s")]),s._v("这样的参数。")]),s._v(" "),t("p",[s._v("选项之间可以通过冒号"),t("code",[s._v(":")]),s._v("进行分隔，也可以直接相连接，"),t("code",[s._v(":")]),s._v("表示选项后面必须带有参数，如果没有可以不加实际值进行传递")]),s._v(" "),t("h2",{attrs:{id:"运行样例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行样例"}},[s._v("#")]),s._v(" 运行样例")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建用户star 自动分配长度8的英文数字密码")]),s._v("\nadduser.sh -l "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" star\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建用户star 自动分配长度8的密码 其中英文数字6位,后面特殊字符2位")]),s._v("\nadduser.sh -l "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" star\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建用户star 自动分配长度8的密码 其中英文数字6位,特殊字符2位, 英文数字和特殊字符乱序排列")]),s._v("\nadduser.sh -l "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -o star\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"以此类推"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以此类推"}},[s._v("#")]),s._v(" 以此类推")]),s._v(" "),t("p",[s._v("很多系统服务都以Shell脚本为基石，比如开机自启，定时任务，包括使用说明和操作，使用他们会给人们对于Linux环境下操作任务大大加速。这类似于Window下的Bat批处理任务。")]),s._v(" "),t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])])}),[],!1,null,null,null);a.default=r.exports}}]);