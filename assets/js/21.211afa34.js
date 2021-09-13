(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{476:function(s,e,r){"use strict";r.r(e);var t=r(12),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"docker安全风险评估以及配置策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker安全风险评估以及配置策略"}},[s._v("#")]),s._v(" Docker安全风险评估以及配置策略")]),s._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[s._v("参考来源")]),s._v(" "),r("p",[s._v("阿里云安全中心基线检查，该部分仅为最佳容器安全实践，仅供参考")])]),s._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#安全审计类"}},[s._v("安全审计类")]),r("ul",[r("li",[r("a",{attrs:{href:"#审核docker文件和目录"}},[s._v("审核Docker文件和目录")])])])]),r("li",[r("a",{attrs:{href:"#服务配置类"}},[s._v("服务配置类")]),r("ul",[r("li",[r("a",{attrs:{href:"#限制容器之间的网络流量"}},[s._v("限制容器之间的网络流量")])]),r("li",[r("a",{attrs:{href:"#为docker启用内容信任"}},[s._v("为Docker启用内容信任")])]),r("li",[r("a",{attrs:{href:"#设置日志记录级别"}},[s._v("设置日志记录级别")])]),r("li",[r("a",{attrs:{href:"#允许docker对iptables进行更改"}},[s._v("允许Docker对iptables进行更改")])]),r("li",[r("a",{attrs:{href:"#不要使用aufs存储驱动程序"}},[s._v("不要使用aufs存储驱动程序")])]),r("li",[r("a",{attrs:{href:"#不要使用特权容器"}},[s._v("不要使用特权容器")])]),r("li",[r("a",{attrs:{href:"#限制容器的内存使用量"}},[s._v("限制容器的内存使用量")])])])]),r("li",[r("a",{attrs:{href:"#文件权限类"}},[s._v("文件权限类")]),r("ul",[r("li",[r("a",{attrs:{href:"#确认docker相关的文件具有合适的权限"}},[s._v("确认Docker相关的文件具有合适的权限")])])])])])]),r("p"),s._v(" "),r("h2",{attrs:{id:"安全审计类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全审计类"}},[s._v("#")]),s._v(" 安全审计类")]),s._v(" "),r("h3",{attrs:{id:"审核docker文件和目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#审核docker文件和目录"}},[s._v("#")]),s._v(" 审核Docker文件和目录")]),s._v(" "),r("p",[r("strong",[s._v("描述")])]),s._v(" "),r("p",[s._v("除了审核常规的Linux文件系统和系统调用之外，还审核所有与Docker相关的文件和目录。 Docker守护程序以“ root”特权运行。 其行为取决于某些关键文件和目录。如 /var/lib/docker、/etc/docker、docker.service、 docker.socket、/usr/bin/docker-containerd、/usr/bin/docker-runc等文件和目录")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("检查提示")])]),s._v(" "),r("p",[s._v("--")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("加固建议")])]),s._v(" "),r("p",[s._v("在/etc/audit/audit.rules与/etc/audit/rules.d/audit.rules文件中添加以下行：")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("-w /var/lib/docker -k docker\n-w /etc/docker -k docker\n-w /usr/lib/systemd/system/docker.service -k docker\n-w /usr/lib/systemd/system/docker.socket -k docker\n-w /usr/bin/docker-containerd -k docker\n-w /usr/bin/docker-runc -k docker\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br")])]),r("p",[s._v("然后，重新启动audit程序。 例如")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("service auditd restart\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("hr"),s._v(" "),r("p",[s._v("操作时建议做好记录或备份")]),s._v(" "),r("hr"),s._v(" "),r("h2",{attrs:{id:"服务配置类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务配置类"}},[s._v("#")]),s._v(" 服务配置类")]),s._v(" "),r("h3",{attrs:{id:"限制容器之间的网络流量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#限制容器之间的网络流量"}},[s._v("#")]),s._v(" 限制容器之间的网络流量")]),s._v(" "),r("p",[r("strong",[s._v("描述")])]),s._v(" "),r("p",[s._v("默认情况下，同一主机上的容器之间允许所有网络通信。 如果不需要，请限制所有容器间的通信。 将需要相互通信的特定容器链接在一起。默认情况下，同一主机上所有容器之间都启用了不受限制的网络流量。 因此，每个容器都有可能读取同一主机上整个容器网络上的所有数据包。 这可能会导致意外和不必要的信息泄露给其他容器。 因此，限制容器间的通信。")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("检查提示")])]),s._v(" "),r("p",[s._v("--")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("加固建议")])]),s._v(" "),r("p",[s._v("在守护程序模式下运行docker并传递'--icc = false'作为参数。 例如，")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("/usr/bin/dockerd --icc=false\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("若使用systemctl管理docker服务则需要编辑")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("/usr/lib/systemd/system/docker.service\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("文件中的"),r("code",[s._v("ExecStart")]),s._v("参数添加 "),r("code",[s._v("--icc=false")]),s._v("选项 然后重启docker服务")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("systemctl daemon-reload\nsystemctl restart docker\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br")])]),r("hr"),s._v(" "),r("p",[s._v("操作时建议做好记录或备份")]),s._v(" "),r("hr"),s._v(" "),r("h3",{attrs:{id:"为docker启用内容信任"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为docker启用内容信任"}},[s._v("#")]),s._v(" 为Docker启用内容信任")]),s._v(" "),r("p",[r("strong",[s._v("描述")])]),s._v(" "),r("p",[s._v("默认情况下禁用内容信任。 您应该启用它。 内容信任提供了将数字签名用于发送到远程Docker注册表和从远程Docker注册表接收的数据的功能。 这些签名允许客户端验证特定图像标签的完整性和发布者。 这确保了容器图像的出处")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("检查提示")])]),s._v(" "),r("p",[s._v("--")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("加固建议")])]),s._v(" "),r("p",[s._v("要在bash shell中启用内容信任，请输入以下命令："),r("code",[s._v("export DOCKER_CONTENT_TRUST=1")]),s._v(" 或者，在您的配置文件中设置此环境变量，以便在每次登录时启用内容信任。 内容信任目前仅适用于公共Docker Hub的用户。 当前不适用于Docker Trusted Registry或私有注册表。")]),s._v(" "),r("hr"),s._v(" "),r("p",[s._v("操作时建议做好记录或备份")]),s._v(" "),r("hr"),s._v(" "),r("h3",{attrs:{id:"设置日志记录级别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置日志记录级别"}},[s._v("#")]),s._v(" 设置日志记录级别")]),s._v(" "),r("p",[r("strong",[s._v("描述")])]),s._v(" "),r("p",[s._v("设置适当的日志级别，将Docker守护程序配置为记录您以后想要查看的事件。 基本日志级别为“ info”及更高版本将捕获除调试日志以外的所有日志。 直到且除非有必要，否则您不应在“debug”日志级别运行Docker守护程序")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("检查提示")])]),s._v(" "),r("p",[s._v("--")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("加固建议")])]),s._v(" "),r("p",[s._v("运行Docker守护程序，如下所示：")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("dockerd --log-level=info\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("若以systemctl管理docker服务则需要编辑"),r("code",[s._v("/usr/lib/systemd/system/docker.service")]),s._v("的ExecStart参数添加"),r("code",[s._v('--log-level="info"')]),s._v("，并重启docker")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("systemctl stop docker\nsystemctl start docker\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br")])]),r("hr"),s._v(" "),r("p",[s._v("操作时建议做好记录或备份")]),s._v(" "),r("hr"),s._v(" "),r("h3",{attrs:{id:"允许docker对iptables进行更改"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#允许docker对iptables进行更改"}},[s._v("#")]),s._v(" 允许Docker对iptables进行更改")]),s._v(" "),r("p",[r("strong",[s._v("描述")])]),s._v(" "),r("p",[s._v("iptables用于在Linux内核中设置，维护和检查IP数据包过滤器规则表。 允许Docker守护程序对iptables进行更改。 如果您选择这样做，Docker将永远不会对您的系统iptables规则进行更改。 如果允许，Docker服务器将根据您为容器选择网络选项的方式自动对iptables进行所需的更改。 建议让Docker服务器自动对iptables进行更改，以避免网络配置错误，这可能会妨碍容器之间以及与外界的通信。 此外，每次选择运行容器或修改网络选项时，它都可以避免更新iptables的麻烦。")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("检查提示")])]),s._v(" "),r("p",[s._v("--")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("加固建议")])]),s._v(" "),r("p",[s._v("不使用'--iptables = false'参数运行Docker守护程序。 若以systemctl管理docker服务则需要编辑"),r("code",[s._v("/usr/lib/systemd/system/docker.service")]),s._v("的ExecStart参数删除"),r("code",[s._v("--iptables = false")]),s._v("， 重启docker服务")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("systemctl daemon-reload\nsystemctl restart docker\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br")])]),r("hr"),s._v(" "),r("p",[s._v("操作时建议做好记录或备份")]),s._v(" "),r("hr"),s._v(" "),r("h3",{attrs:{id:"不要使用aufs存储驱动程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不要使用aufs存储驱动程序"}},[s._v("#")]),s._v(" 不要使用aufs存储驱动程序")]),s._v(" "),r("p",[r("strong",[s._v("描述")])]),s._v(" "),r("p",[s._v("“ aufs”存储驱动程序是最早的存储驱动程序。 它基于Linux内核补丁集，该补丁集不太可能合并到主要Linux内核中。 还已知“ aufs”驱动程序会导致一些严重的内核崩溃。 'aufs'刚刚获得了Docker的支持。 最重要的是，许多使用最新Linux内核的Linux发行版都不支持'aufs'驱动程序。")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("检查提示")])]),s._v(" "),r("p",[s._v("--")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("加固建议")])]),s._v(" "),r("p",[s._v("不要明确使用“ aufs”作为存储驱动程序。 例如，请勿按以下方式启动Docker守护程序： 若以systemctl管理docker服务则需要编辑"),r("code",[s._v("/usr/lib/systemd/system/docker.service")]),s._v("的ExecStart参数删除"),r("code",[s._v("--storage-driver aufs")]),s._v("重启docker服务")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("systemctl daemon-reload\nsystemctl restart docker\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br")])]),r("hr"),s._v(" "),r("p",[s._v("操作时建议做好记录或备份")]),s._v(" "),r("hr"),s._v(" "),r("h3",{attrs:{id:"不要使用特权容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不要使用特权容器"}},[s._v("#")]),s._v(" 不要使用特权容器")]),s._v(" "),r("p",[r("strong",[s._v("描述")])]),s._v(" "),r("p",[s._v("使用--privileged标志将所有Linux内核功能赋予容器，从而覆盖--cap-add和--cap-drop标志。 确保不使用它。 --privileged标志为容器提供了所有功能，并且还解除了设备cgroup控制器强制执行的所有限制。 换句话说，容器可以完成主机可以做的几乎所有事情。 存在此标志是为了允许特殊用例，例如在Docker中运行Docker")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("检查提示")])]),s._v(" "),r("p",[s._v("--")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("加固建议")])]),s._v(" "),r("p",[s._v("不要使用"),r("code",[s._v("--privileged")]),s._v("标志运行容器")]),s._v(" "),r("hr"),s._v(" "),r("p",[s._v("操作时建议做好记录或备份")]),s._v(" "),r("hr"),s._v(" "),r("h3",{attrs:{id:"限制容器的内存使用量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#限制容器的内存使用量"}},[s._v("#")]),s._v(" 限制容器的内存使用量")]),s._v(" "),r("p",[r("strong",[s._v("描述")])]),s._v(" "),r("p",[s._v("默认情况下，Docker主机上的所有容器均等地共享资源。 通过使用Docker主机的资源管理功能（例如内存限制），您可以控制容器可能消耗的内存量。 默认情况下，容器可以使用主机上的所有内存。 您可以使用内存限制机制来防止由于一个容器消耗主机的所有资源而导致的服务拒绝，从而使同一主机上的其他容器无法执行其预期的功能。 对内存没有限制可能会导致一个问题，即一个容器很容易使整个系统不稳定并因此无法使用。")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("检查提示")])]),s._v(" "),r("p",[s._v("--")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("加固建议")])]),s._v(" "),r("p",[s._v("仅使用所需的内存来运行容器。 始终使用'--memory'参数运行容器。 您应该按以下方式启动容器：")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("docker run --interactive --tty --memory 256m <Container Image Name or ID>\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("hr"),s._v(" "),r("p",[s._v("操作时建议做好记录或备份")]),s._v(" "),r("hr"),s._v(" "),r("h2",{attrs:{id:"文件权限类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件权限类"}},[s._v("#")]),s._v(" 文件权限类")]),s._v(" "),r("h3",{attrs:{id:"确认docker相关的文件具有合适的权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#确认docker相关的文件具有合适的权限"}},[s._v("#")]),s._v(" 确认Docker相关的文件具有合适的权限")]),s._v(" "),r("p",[r("strong",[s._v("描述")])]),s._v(" "),r("p",[s._v("确保可能包含敏感参数的文件和目录的安全对确保Docker守护程序的正确和安全运行至关重要")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("检查提示")])]),s._v(" "),r("p",[s._v("--")]),s._v(" "),r("hr"),s._v(" "),r("p",[r("strong",[s._v("加固建议")])]),s._v(" "),r("p",[s._v("执行以下命令为docker相关文件配置权限：")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("chown root:root /usr/lib/systemd/system/docker.service\nchmod 644 /usr/lib/systemd/system/docker.service\nchown root:root /usr/lib/systemd/system/docker.socket\nchmod 644 /usr/lib/systemd/system/docker.socket\nchown root:root /etc/docker\nchmod 755 /etc/docker\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br")])]),r("p",[s._v("若文件路径与实际系统中不同可以使用以下命令获取文件路径：")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("systemctl show -p FragmentPath docker.socket\nsystemctl show -p FragmentPath docker.service\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br")])]),r("hr"),s._v(" "),r("p",[s._v("操作时建议做好记录或备份")]),s._v(" "),r("hr")])}),[],!1,null,null,null);e.default=a.exports}}]);