(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{479:function(_,v,t){"use strict";t.r(v);var a=t(12),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"计算机系统概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机系统概述"}},[_._v("#")]),_._v(" 计算机系统概述")]),_._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#计算机系统层次结构"}},[_._v("计算机系统层次结构")])]),t("li",[t("a",{attrs:{href:"#计算机硬件的基本组成"}},[_._v("计算机硬件的基本组成")]),t("ul",[t("li",[t("a",{attrs:{href:"#计算机功能部件"}},[_._v("计算机功能部件")])])])]),t("li",[t("a",{attrs:{href:"#计算机软件的分类"}},[_._v("计算机软件的分类")]),t("ul",[t("li",[t("a",{attrs:{href:"#系统软件和应用软件-按功能分类"}},[_._v("系统软件和应用软件--按功能分类")])]),t("li",[t("a",{attrs:{href:"#各种级别的语言"}},[_._v("各种级别的语言")])]),t("li",[t("a",{attrs:{href:"#各种程序"}},[_._v("各种程序")])])])]),t("li",[t("a",{attrs:{href:"#计算机的工作过程-以c为例"}},[_._v("计算机的工作过程--以C为例")]),t("ul",[t("li",[t("a",{attrs:{href:"#计算机系统的多级层次结构"}},[_._v("计算机系统的多级层次结构")])])])]),t("li",[t("a",{attrs:{href:"#计算机性能指标"}},[_._v("计算机性能指标")]),t("ul",[t("li",[t("a",{attrs:{href:"#计算机的主要性能指标"}},[_._v("计算机的主要性能指标")])])])]),t("li",[t("a",{attrs:{href:"#易混淆知识整理"}},[_._v("易混淆知识整理")])])])]),t("p"),_._v(" "),t("h2",{attrs:{id:"计算机系统层次结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机系统层次结构"}},[_._v("#")]),_._v(" 计算机系统层次结构")]),_._v(" "),t("p",[_._v("计算机系统：硬件与软件共同组成。硬件效率高，成本高；软件灵活性高。两者逻辑上等效")]),_._v(" "),t("h2",{attrs:{id:"计算机硬件的基本组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机硬件的基本组成"}},[_._v("#")]),_._v(" 计算机硬件的基本组成")]),_._v(" "),t("p",[t("strong",[_._v("冯 · 诺依曼机--“存储程序”")])]),_._v(" "),t("ol",[t("li",[_._v("硬件系统由运算器、存储器、控制器、输入设备和输出设备组成")]),_._v(" "),t("li",[_._v("指令和数据同等地位存储在存储器中，并可按地址寻访")]),_._v(" "),t("li",[_._v("指令、数据均用二进制代码表示")]),_._v(" "),t("li",[_._v("指令由操作码和地址码组成，操作码表示操作类型，地址码给出操作数地址")]),_._v(" "),t("li",[_._v("指令在存储器中"),t("strong",[_._v("顺序存放")])]),_._v(" "),t("li",[_._v("以"),t("strong",[_._v("运算器")]),_._v("为中心，输入/输出设备通过运算器与存储器传送数据")])]),_._v(" "),t("p",[t("strong",[_._v("现代计算机的组织的结构--IO与CPU的差距")])]),_._v(" "),t("ol",[t("li",[_._v("以存储器为中心，IO绕过CPU(中央处理器)")])]),_._v(" "),t("h3",{attrs:{id:"计算机功能部件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机功能部件"}},[_._v("#")]),_._v(" 计算机功能部件")]),_._v(" "),t("p",[_._v("（1）"),t("strong",[_._v("输入设备")])]),_._v(" "),t("p",[_._v("（2）"),t("strong",[_._v("输出设备")])]),_._v(" "),t("p",[_._v("（3）"),t("strong",[_._v("存储器")])]),_._v(" "),t("p",[_._v("主存储器：CPU能够直接访问（内存），逻辑图如下所示")]),_._v(" "),t("p",[t("img",{attrs:{src:"/1621563998078.png",alt:"1621563998078"}})]),_._v(" "),t("p",[_._v("MAR(地址寄存器)用于寻址，"),t("strong",[_._v("位数对应存储单元个数，与地址码长度相同")])]),_._v(" "),t("p",[_._v("MDR（数据寄存器）"),t("strong",[_._v("位数与存储字长(1B的偶次倍)相等")]),_._v("。存储字为一串二进制代码")]),_._v(" "),t("p",[_._v("hits: MAR与MDR存在现代存于CPU中")]),_._v(" "),t("p",[_._v("与相联存储器区别：内存智能按存储单元地址存取，相联存储器还可以按内容（某些字段）寻址。")]),_._v(" "),t("p",[_._v("辅助存储器：帮助主存记忆更多信息（外存）")]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("CPU存取速度比较")]),_._v(" "),t("p",[_._v("寄存器 > Cache > 内存")])]),_._v(" "),t("p",[_._v("（4）"),t("strong",[_._v("运算器")])]),_._v(" "),t("p",[_._v("ALU(算术逻辑单元)、"),t("code",[_._v("ACC(累加器)、MQ(乘商寄存器)、X(操作数寄存器) 必须具备")]),_._v("、IX(变址寄存器)、BR(基址寄存器)")]),_._v(" "),t("p",[_._v("PSW(程序状态寄存器)")]),_._v(" "),t("p",[_._v("（5）"),t("strong",[_._v("控制器")])]),_._v(" "),t("p",[_._v("PC(程序计数器)、IR(指令寄存器)、CU(控制单元)")]),_._v(" "),t("p",[_._v("冯·诺依曼模型机CPU结构略")]),_._v(" "),t("p",[_._v("CPU和主存通过一组总线（地址、控制和数据信号线）相连")]),_._v(" "),t("h2",{attrs:{id:"计算机软件的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机软件的分类"}},[_._v("#")]),_._v(" 计算机软件的分类")]),_._v(" "),t("h3",{attrs:{id:"系统软件和应用软件-按功能分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统软件和应用软件-按功能分类"}},[_._v("#")]),_._v(" 系统软件和应用软件--按功能分类")]),_._v(" "),t("p",[t("strong",[_._v("系统软件")])]),_._v(" "),t("p",[_._v("保证计算机高效、正确运行的基础软件：OS(操作系统)、DBMS(数据库管理系统)、语言处理程序、分布式软件系统、网络软件系统、标准库程序、服务性程序。")]),_._v(" "),t("p",[t("strong",[_._v("应用软件")])]),_._v(" "),t("p",[_._v("为解决某个应用领域中的各类问题而编制的程序：各种科学计算类程序、工程设计类、数据统计与处理程序。")]),_._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),t("p",[_._v("DBMS(数据库管理系统)与DBS(数据库系统)区别：DBMS为系统软件，DBS构成：数据库、数据库管理系统、数据库管理员（DBA)、应用系统")])]),_._v(" "),t("h3",{attrs:{id:"各种级别的语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#各种级别的语言"}},[_._v("#")]),_._v(" 各种级别的语言")]),_._v(" "),t("p",[_._v("机器语言（二进制代码语言）：计算机唯一可以直接识别和执行的语言")]),_._v(" "),t("p",[_._v("汇编语言：用引文单词或其缩写代替二进制指令代码，ccl（编译器）产生的文本")]),_._v(" "),t("p",[_._v("高级语言：方便程序设计人员解决问题的语言。先编译为汇编语言，在汇编得到机器语言")]),_._v(" "),t("h3",{attrs:{id:"各种程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#各种程序"}},[_._v("#")]),_._v(" 各种程序")]),_._v(" "),t("p",[_._v("编译程序：将高级语言一次性全部翻译成目标程序（机器级目标代码）。")]),_._v(" "),t("p",[_._v("解释程序：一条源程序语句翻译成对应机器目标代码并立即执行，直至所有源程序语句被翻译并执行完成。")]),_._v(" "),t("p",[_._v("汇编程序：汇编语言翻译为机器语言程序。as")]),_._v(" "),t("p",[_._v("链接程序：将可重定位模块（目标程序与标准库函数）合并生成可执行文件。ld")]),_._v(" "),t("h2",{attrs:{id:"计算机的工作过程-以c为例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机的工作过程-以c为例"}},[_._v("#")]),_._v(" 计算机的工作过程--以C为例")]),_._v(" "),t("p",[_._v("三步走")]),_._v(" "),t("ol",[t("li",[_._v("把程序和数据装入内存")]),_._v(" "),t("li",[_._v("将源程序转换成可执行文件")]),_._v(" "),t("li",[_._v("从可执行文件的首地址开始逐条执行指令")])]),_._v(" "),t("p",[t("strong",[_._v("将源程序转换为可执行文件")]),_._v("过程图如下所示")]),_._v(" "),t("p",[t("img",{attrs:{src:"/1621566175930.png",alt:"1621566175930"}})]),_._v(" "),t("p",[t("strong",[_._v("指令执行过程的描述")])]),_._v(" "),t("p",[_._v("第一条执行置于PC，取出第一条指令，译码，执行完成后计算下一条指令的地址，继续读出新地址的指令并执行，直到程序结束")]),_._v(" "),t("p",[_._v("待完善~指令执行过程详情请看"),t("a",{attrs:{href:""}},[_._v("第五章")])]),_._v(" "),t("h3",{attrs:{id:"计算机系统的多级层次结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机系统的多级层次结构"}},[_._v("#")]),_._v(" 计算机系统的多级层次结构")]),_._v(" "),t("p",[t("img",{attrs:{src:"/1621567807601.png",alt:"1621567807601"}})]),_._v(" "),t("p",[_._v("下层是上层的基础，上层是下层的扩展")]),_._v(" "),t("p",[_._v("对于某层使用者而言，只能通过该层次了解与使用计算机，不必关心下层是如何工作的")]),_._v(" "),t("h2",{attrs:{id:"计算机性能指标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机性能指标"}},[_._v("#")]),_._v(" 计算机性能指标")]),_._v(" "),t("h3",{attrs:{id:"计算机的主要性能指标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机的主要性能指标"}},[_._v("#")]),_._v(" 计算机的主要性能指标")]),_._v(" "),t("h4",{attrs:{id:"_1-机器字长"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-机器字长"}},[_._v("#")]),_._v(" 1.机器字长")]),_._v(" "),t("p",[_._v("一次整数运算所能处理的二进制数据位数，字长越长，数的表示范围越大，计算精度越高")]),_._v(" "),t("h4",{attrs:{id:"_2-数据通路的带宽"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据通路的带宽"}},[_._v("#")]),_._v(" 2.数据通路的带宽")]),_._v(" "),t("p",[_._v("数据总线一次所能并行传送信息的位数，通常是外部数据总线宽度，可能与CPU内部不同")]),_._v(" "),t("h4",{attrs:{id:"_3-主存容量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-主存容量"}},[_._v("#")]),_._v(" 3.主存容量")]),_._v(" "),t("p",[_._v("主存储器所能存储信息的最大容量，以字节来衡量，字数 x 字长"),t("code",[_._v("512K x 16位")]),_._v("表示.MAR位数反映可寻址范围的最大值")]),_._v(" "),t("h4",{attrs:{id:"_4-运算速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-运算速度"}},[_._v("#")]),_._v(" 4.运算速度")]),_._v(" "),t("p",[t("strong",[_._v("吞吐量")]),_._v("：单位时间内处理请求的数量，主要取决于主存的存取时间")]),_._v(" "),t("p",[t("strong",[_._v("响应时间")]),_._v("：从用户向计算机发送一个请求，到系统对该请求做出响应并获取所需结果的等待时间。CPU时间+等待时间"),t("code",[_._v("I/O，磁盘访问，存储器访问等")])]),_._v(" "),t("p",[t("strong",[_._v("CPU时钟周期")]),_._v("：节拍脉冲或"),t("em",[_._v("T")]),_._v("周期，即主频的倒数。CPU最小时间单位，执行指令动作的最小时钟周期为1")]),_._v(" "),t("p",[t("strong",[_._v("主频（CPU时钟频率）")]),_._v(":机器内部主时钟的频率，主频高，执行指令所用时间越短，单位Hz")]),_._v(" "),t("p",[t("strong",[_._v("CPI")]),_._v(":执行一条指令所需的时钟周期")]),_._v(" "),t("p",[t("strong",[_._v("CPU执行时间")]),_._v("：运行一个程序所花费的时间")]),_._v(" "),t("p",[t("strong",[_._v("MIPS")]),_._v(":每秒执行多少百万条指令")]),_._v(" "),t("p",[t("strong",[_._v("MFLOPS")]),_._v("（每秒执行多少百万次浮点运算，10^6）、"),t("strong",[_._v("GFLOPS")]),_._v("(每秒执行多少十亿浮点运算，10^9)、"),t("strong",[_._v("TFLOPS")]),_._v("(每秒执行多少万亿次浮点运算，10^12)")]),_._v(" "),t("h4",{attrs:{id:"_5-基准程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-基准程序"}},[_._v("#")]),_._v(" 5.基准程序")]),_._v(" "),t("h2",{attrs:{id:"易混淆知识整理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#易混淆知识整理"}},[_._v("#")]),_._v(" 易混淆知识整理")]),_._v(" "),t("p",[_._v("在CPU中，IR、MAR、MDR对各类程序员都是透明的")]),_._v(" "),t("p",[t("strong",[_._v("机器字长")]),_._v("：计算机能直接处理的二进制数据位数，数据运算的基本单位长度")]),_._v(" "),t("p",[t("strong",[_._v("指令字长")]),_._v("：一个指令字中包含的二进制代码的位数，指令字长一般取存储字长的整数倍")]),_._v(" "),t("p",[t("strong",[_._v("存储字长")]),_._v("：一个存储单元存储的二进制代码的位数（长度）")]),_._v(" "),t("p",[t("strong",[_._v("数据字长")]),_._v("：总线一次能并行传送信息的位数")])])}),[],!1,null,null,null);v.default=s.exports}}]);