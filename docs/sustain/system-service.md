# 系统服务

## 什么是系统服务

系统服务`Daemon`就是在后台运行的程序，提供本地系统或网络功能。由于 `Daemon` 的英文原意是"守护神"，所以经常将系统服务称为 `守护进程`。比如 `apache` 就是实现 Web 服务的, 其服务进程是守护进程 `httpd`。

> Linux 中就是通过启动 httpd 进程来启动 apache 服务。

## 服务的分类

Linux服务按照安装方法不同可以分为 `RPM包服务`和`源码包服务`两大类。其中，RPM 包服务根据启动方法不同分为`独立服务`和`基于xinetd的服务`。

## 软件包的区别

软件包的区别是安装位置不同，`源码包`安装到手工指定的位置，不能被服务管理命令识别; 而 `RPM` 包安装到系统默认位置，可以被服务管理命令识别；所以，`RPM` 包服务和源码包服务的管理方法不同，把它们作为不同的服务分类。

## RPM 包服务分类

RPM包服务又可以分为两种:

- 独立服务: 可以自行启动，不依赖其他的管理服务, 所以响应非常快，如 `apache`、`vsftp`、`Samba` 等。
- 基于xinetd的服务: 不能独立启动，客户请求时通过 `xinetd` 唤醒相应服务, 请求结束后，被唤醒的服务关闭释放资源。其优点是只要启动 xinetd 服务，而其他服务只在需要时启动，不会占用过多的资源。缺点是响应时间相对较长。

> xinetd 服务是系统的超级守护进程，作用是管理不能独立启动的服务。

## xinetd 服务

系统默认是不安装 `xinetd` 守护进程，需要手工安装。

```
$ yum  -y  install  xinetd*
```

## 源码包服务

源码包服务其安装位置都是手工指定的，所以不能被系统服务管理命令直接识别，每种服务的启动方法都是通过不同的启动脚本，需要查看说明文档才能确定。

## 如何区分RPM包服务和源码包服务

区分RPM包服务和源码包服务的方法一般**通过安装位置判断**，源码包服务不能被服务管理命令直接找到的，一般会安装到 `/usr/local/` 目录中；`RPM` 包服务都会安装到系统默认位置，可以被服务管理命令 `service|chkconfig` 识别。

## 如何区分独立服务

通过 `chkconfig` 可以区分`独立服务`和基于 `xinetd` 的服务。`chkconfig` 是管理 `RPM` 包服务的自启动的命令，可以查询 `RPM` 包默认安装的所有服务。命令格式如下:

```
# --list: 显示RPM包安装的所有服务的自启动状态；
$ chkconfig --list [服务名]
```

## chkconfig范例

第一列为服务名，后面 `0~6` 代表在不同的运行级别中服务是否自动启动。基于xinetd的服务不是独立的服务，没有自己的运行级别，在任何运行级别都可以自启动。

```bash
$ chkconfig --list
abrt-ccpp 0:关闭 1:关闭 2:关闭 3:启用 4:关闭 5:启用 6:关闭
abrt-oops 0:关闭 1:关闭 2:关闭 3:启用 4:关闭 5:启用 6:关闭
......
udev-post 0:关闭 1:启用 2:启用 3: 启用 4:启用 5:启用 6:关闭
xinetd 0:关闭 1:关闭 2:关闭 3:启用 4:启用 5:启用 6:关闭
ypbind 0:关闭 1:关闭 2:关闭 3:关闭 4:关闭 5:关闭 6:关闭
# 基于 xinetd 的服务
chargen-stream: 关闭
daytime-dgram: 关闭
echo-stream: 关闭
rsync: 关闭
tcpmux-server: 关闭
time-stream: 关闭
```

## 端口

服务是给系统提供功能的，除了有系统服务，还有网络服务。每个网络服务都有自己的端口，一般端口号都是固定的。

## 什么是端口

IP地址只能用来找到服务器，但是服务器上有可能搭建了多个网络服务，比如 `WWW` 服务、`FTP` 服务、`Mail` 服务，要访问哪个网络服务呢？这时就要靠端口来区分了，因为每个网络服务对应的端口都是固定的。根据 `IETF` 规定，`WWW` 服务对应的端口是 `80`，`FTP` 服务对应的端口是 `20` 和 `21`，`Mail` 服务对应的端口是 `25` 和 `110`。

## 网络协议

网络协议主要分为两大类:

- TCP协议: 面向连接的可靠 `传输控制协议`
- UDP协议: 面向无连接的不可靠 `用户数据报协议`

## 协议端口类型

上面的两种协议都支持 `65535` 个端口, 服务与端口的对应关系保存在`/etc/services`文件中。

```bash
$ vim /etc/services
# FTP服务端口
ftp-data 20/tcp
ftp-data 20/udp
ftp 21/tcp
ftp 21/udp
fsp fspd
# 邮件发送端口
smtp 25/tcp mail
smtp 25/udp mail
# WWW服务端口
http 80/tcp www www-http #WorldWideWeb HTTP
http 80/udp www www-http #HyperText Transfer Protocol
# 邮件接收端口
pop3 110/tcp pop-3
pop3 110/udp pop-3
```

## 修改服务端口

网络服务的端口是能够修改的，不过一旦修改了端口，客户机就不知道服务器端口是什么，也就不能正确地获取服务了。所以，除非在实验环境下，否则不要修改端口。

## 查询系统中已经启动的服务

我们可以通过查询`开启的端口`，判断服务器开启了哪些服务, 命令格式如下。

```bash
$ netstat 选项

# 选项: 
# -a: 列出所有网络连接(已经连接的网络服务|监听网络服务|Socket套接字)
# -t: 列出 TCP 数据
# -u: 列出 UDF 数据
# -l: 列出正在监听的网络服务(不包含已经连接的网络服务)
# -n: 用端口号来显示而不用服务名；
# -p: 列出该服务的进程PID；
```

## 查询服务范例

```bash
$ netstat -tlunp
# Active Internet connections (only servers)
# Proto Recv-Q Send-Q Local Address Foreign Address State PID/Program name
# tcp 0 0 0.0.0.0:53575 0.0.0.0:*
# LISTEN
# 1200/rpc.statd
# tcp 0 0 0.0.0.0:111 0.0.0.0:* LISTEN 1181/rpcbind
# tcp 0 0 0.0.0.0:22 O.O.O.O:* LISTEN 1405/sshd
# tcp 0 0 127.0.0.1:25 O.O.O.O:* LISTEN 1481/master
# tcp 0 0 :::57454 :::* LISTEN 1200/rpc.statd
# udp 0 0 0.0.0.0:58322 0.0.0.0:* 1276/avahi-daemon
# udp 0 0 0.0.0.0:5353 O.O.O.O:* 1276/avahi-daemon
# udp 0 0 0.0.0.0:111 O.O.O.O:* 1181/rpcbind
# udp 0 0 :::111 :::* 1181/rpcbind
# udp 0 0 :::47858 :::* 1200/rpc.statd
```

## netstat执行结果说明

netstat命令可以查看所有已经开启的端口，也就知道当前服务器上开启了哪些服务。

- Proto: 数据包的协议，分为 `TCP` 和 `UDP` 数据包
- Recv-Q: 收到的数据已经在本地接收缓冲，但是还没有被进程取走的数据包数量
- Send-Q: 对方没有收到的数据包数量, 或者没有 `Ack回复` 还在本地缓冲区的数据包数量
- Local Address: 本地IP端口, 可以知道本机开启了哪些服务
- Foreign Address: 远程主机端口, 即远程主机的IP和端口
- State: 连接状态，有已经建立连接 `ESTABLISED` 和监听 `LISTEN` 两种状态
- PID/Program name: 进程ID和进程命令名称

## 查询服务范例

`netstat -an` 能査看更多的信息，包括`Socket`套接字。除网络服务可以绑定端口，系统网络程序或自己开发的网络程序也可以绑定端口，用端口来接收客户端的请求数据。

```bash
$ netstat -an
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address Foreign Address State
tcp 0 0 0.0.0.0:53575 0.0.0.0:* LISTEN
tcp 0 0 0.0.0.0:22 0.0.0.0:* LISTEN
tcp 0 0 127.0.0.1:631 0.0.0.0:* LISTEN
tcp 0 0 127.0.0.1:25 0.0.0.0:* LISTEN
tcp 0 0 192.168.0.210:22 192.168.0.105:4868 ESTABLISHED
tcp 0 0 :::57454 :::* LISTEN
......
udp 0 0 :::932 :::*
Active UNIX domain sockets (servers and established)
Proto RefCnt Flags Type State I-Node Path
# Socket套接字输出
Unix 2 [ ACC ] STREAM LISTENING 11712 /var/run/dbus/system_bus_socket
unix 2 [ ACC ] STREAM LISTENING 8450 @/com/ubuntu/upstart unix 7. [ ] DGRAM 8651 @/org/kernel/udev/udevd
unix 2 [ ACC ] STREAM LISTENING 11942 @/var/run/hald/dbus-b4QVLkivf1
......
```

## Socket

网络服务或网络程序要想在网络中传递数据，必须利用 `Socket` 套接字绑定端口，并进行数据传递。`Socket` 套接字虽然不是网络服务，但是同样会占用端口，并在网络中传递数据。 `Socket` 套接字的输出:

- Proto: 协议名称，一般是unix
- RefCnt: 连接到Socket的进程数
- Flags: 连接标识
- Type: Socket访问类型
- State: 状态(LISTENING|CONNECTED)
- I-Node: 程序文件的 i 节点号
- Path: Socke路径或相关数据输出路径

## 独立服务的启动管理

独立服务的启动主要有两种方法。

- 使用 `/etc/init.d/` 目录中的启动脚本来启动独立的服务
- 使用service命令来启动独立的服务

## /etc/init.d/ 启动脚本

调用/etc/init.d/文件夹的脚本可以启动独立服务，一般推荐采用这种方式，命令格式如下:

```bash
$ /etc/init.d/独立服务名 start|stop|status|restart

# 选项
# - start:   启动服务
# - stop:    停止服务
# - status:  查看服务状态
# - restart: 重启动服务

$ /etc/init.d/httpd start|stop|restart|status
```

## service启动服务

CentOS还可以使用 `service` 命令启动独立的服务, 它仍然要调用 `/etc/init.d/` 的启动脚本来启动服务。该命令是红帽专有命令，其他发行版本不一定有这条命令，所以并不推荐使用。service 命令格式如下:

```bash
# --status -all: 列出所有独立服务的启动状态
$ service 独立服务名 start|stop|restart|...

# 启动 httpd 服务
$ service httpd start
# 查看所有独立服务的启动状态
$ service --status -all
```

> 随着 `httpd` 服务的启动和停止，使用 `netstat -tlun` 命令就会看到 `80` 端口出现和消失, 说明 `apache` 绑定端口是 `80`。

## 独立服务的自启动管理

自启动是指服务是否随着系统启动而自动启动。独立服务的自启动方法有三种如下。

- 使用 `chkconfig` 服务自启动管理命令
- 修改 `/etc/rc.d/rc.local` 文件
- 使用 `ntsysv` 管理自启动

## chkconfig

`chkconfig` 可以设置RPM包服务的自启动状态，`独立服务`和`基于xinetd的服务`的设定方法不同。命令格式如下:

```
$ chkconfig [--level 运行级别][独立服务名][on|off]

# 选项
--level: 设定开机自启动的运行级别 
```

> `chkconfig`只能识别RPM包服务，不能配置源码包服务。

## chkconfig 范例

```
# 所有级别都不是自启动
$ chkconfig --list | grep httpd
httpd 0:关闭 1:关 2:关 3:关 4:关 5:关 6:关
# 打开2、3、4、5级别的自启动
$ chkconfig --level 2345 httpd on
# 2、3、4、5级别开启
$ chkconfig --list | grep httpd
httpd 0:关闭 1:关 2:开 3:开 4:开 5:开 6:关
```

## 修改 /etc/rc.d/rc.local 文件

第二种方法是修改 `/etc/rc.d/rc.local` 文件，加入服务的启动命令。该文件是在系统启动时，在输入用户名和密码之前最后读取的文件，文件中的命令，都会在系统启动时调用。

> 注意: `/etc/rc.d/rc.loca`和`/etc/rc.local` 文件是软链接，修改哪个文件都可以

## 范例

如果把某个服务的启动命令放入这个文件，该服务就会在开机时自启动。比如下面范例，修改后只要重启系统，`apache` 服务就会开机自启动了。

```bash
$ vim /etc/rc.d/rc.local
#!/bin/sh

# 加入apache的启动命令
/etc/rc.d/init.d/httpd start
```

## /etc/rc.d/rc.local 方法的优点

推荐使用该方法管理自启动，有两点好处:

- 遇到陌生服务器时，只要查看该文件就知道自启动了哪些服务，便于集中管理。
- 源码包服务的自启动可以通过该文件实现自启动

> 注意: 修改 `/etc/rc.d/rc.local` 文件的结果，不会在 `chkconfig --list`" 中显示自启动的服务列表

## ntsysv

第三种方法是使用 `ntsysv` 命令调用窗口模式来管理服务的自启动。命令格式如下, 执行后会和 setup 命令类似出现命令界面。

```bash
$ yum install ntsysv
$ ntsysv [--level 运行级别]

# 选项: 
# --level 运行级别: 可以指定设定自启动的运行级别；

# 只设定2、3、5级别的服务自启动
$ ntsysv --level 235
# 按默认的运行级别设置服务自启动
$ ntsysv
```

> 注意: ntsysv 不仅可以管理独立服务，也可以管理xinetd服务, 但是不能管理源码包服务。而且它是红帽系列的专有命令，其他发行版本不一定有，所以推荐使用文件管理自启动。

## 基于 xinetd 服务的启动

基于xinetd的服务修改配置文件就可以启动，配置文件在 `/etc/xinetd.d/` 目录。使用 `Telnet` 服务为例, 目前Telnet服务器默认是不安装的，需要手工安装。

```bash
# 安装 telnet
$ yum install telnet telnet-server -y
# 编辑 telnet 配置
$ vi /etc/xinetd.d/telnet
service telnet {
  flags           = REUSE
  socket_type     = stream
  wait            = no
  user            = root
  server          = /usr/sbin/in.telnetd
  log_on_failure  += USERID
  disable         = no   # no表示启动服务，yes表示停止服务
}

# 启动 xinetd 服务器
$ service xinetd start
# 查看 xinetd服务列表
$ chkconfig --list | grep "telnet"
telnet:         on
# netstat -tlun|grep 23
tcp6       0      0 :::23                   :::*                    LISTEN     
udp        0      0 127.0.0.1:323           0.0.0.0:*                          
udp6       0      0 ::1:323                 :::* 
```

## 使用 chkconfig 命令管理自启动

chkconfig 管理基于xinetd自启动的命令格式如下:

```bash
#基于xinetd服务没有运行级别，不用指定--level选项
$ chkconfig 服务名 on|off
```

## 源码包服务的启动管理

源码包服务的文件都会安装到指定目录，包括管理脚本程序。因此只要找到管理脚本，然后执行即可。但是每个服务的启动脚本都不一样，怎么确定？安装时的说明文档(INSTALL|README)中会明确地说明启动脚本是哪个文件。比如 apache 服务的启动脚本就是 `/usr/local/apache2/bin/apachectl`。

## 源码包服务的自启动管理

源码包服务的自启动管理不能依靠系统的服务管理命令，而只能把标准启动命令写入 `/etc/rc.d/rc.local` 文件中, 系统在启动过程中调用启动脚本，从而让该服务开机自启动。

## 手动配置源码包自启动

在默认情况下，源码包服务是不能被系统的服务管理命令所识别和管理的，但是可以配置设定让源码包服务被系统的服务管理命令识别。不过不推荐，因为会混淆服务类型，不利于系统维护管理。

## service方案(不推荐)

`service`只是在`/etc/init.d/`目录中查找是否有服务的启动脚本，所以只要手动建立软链接把启动脚本链接到目录即可

```bash
$ ln -s /usr/local/apache2/bin/apachectl /etc/±nit.d/apache
# service命令可以管理 apache服务
$ service apache restart
```

## chkconfig管理

```bash
$ vi /etc/init.d/apache
#!/bin/sh
chkconfig: - 99 10                  # 格式  chkconfig:运行级别 启动顺序 关闭顺序

$ chkconfig --add apache
$ chkconfig --list | grep apache
apache    0:off   1:off   2:off   3:on   4:off   5:on   6:off
```

## 总结

- 如果想让源码包服务被`service`命令所识别和管理，则只需做一个软链接把启动脚本链接到 `/etc/init.d/` 目录中即可。
- chkconfig 命令: 把启动脚本链接到 `/etc/init.d/` 目录，启动脚本加入: `chkconfig:运行级别 启动顺序 关闭`, 然后用 `chkconfig --add 服务名` 把服务加入 `chkconfig` 管理。

## 常见服务

服务器维护的工作就是优化服务，即关闭不需要的服务，只开启需要的服务。因此就需要知道各种服务的功能。

| 服务名称       | 功能简介                                                     | 建议 |
| -------------- | ------------------------------------------------------------ | ---- |
| anacron        | 系统的定时任务程序                                           | 关闭 |
| atd            | 指定系统在特定时间执行某个任务，只能执行一次                 | 关闭 |
| bluetooth      | 蓝牙设备，一般不会在服务器上启用蓝牙                         | 关闭 |
| cpuspeed       | 调整CPU频率，当闲置时自动降低CPU频率来节省电量               | 开启 |
| crond          | 系统的定时任务                                               | 开启 |
| dovecot        | 邮件服务中 POP3/IMAP 服务的守护进程，主要用来接收信件。      | 关闭 |
| gpm            | 在字符终端 (ttyl~tty6) 中可以使用鼠标复制和粘贴，这就是这个服务的功能 | 开启 |
| haldaemon      | 检测和支持USB设备，如果是服务器则关闭，个人机建议开启        | 关闭 |
| hidd           | 蓝牙设备检测，必须启动 bluetooth 服务                        | 关闭 |
| httpd          | apache 服务的守护进程。如果需要启动 apache，就开启           | 开启 |
| iptables       | 防火墙功能，服务器的主要防护手段必须开启                     | 开启 |
| irda           | IrDA 提供红外线设备的通信支持                                | 关闭 |
| irqbalance     | 支持多核处理器，让CPU自动分配系统中断提高性能，多核CPU请开启 | 开启 |
| kudzu          | 开机时进行硬件检测，调用相关设置软件，建议关闭               | 关闭 |
| mcstrans       | SELinux 的支持服务，建议开启                                 | 开启 |
| messagebus     | IPC进程间通信服务，在软件中交换信息，建议关闭                | 关闭 |
| mysqld         | MySQL数据库服务器                                            | 开启 |
| named          | DNS服务的守护进程，用来进行域名解析，如果是DNS服务器开启否则关闭 | 关闭 |
| netfs          | 自动挂载网络中的共享文件空间，比如 NFS、Samba 等             | 关闭 |
| network        | 提供网络设罝管理功能，建议开启                               | 开启 |
| nfs            | NFS服务，Linux主机之间的文件共享服务                         | 关闭 |
| portmap        | 用在远程过程调用RPC的服务，如果没有RPC服务可以关闭           | 关闭 |
| rsync          | 远程数据备份守护进程                                         | 关闭 |
| sendmail       | sendmail 邮件服务的守护进程，根据邮件服务设置                | 关闭 |
| setroubleshoot | 将SELinux信息记录在日志中，建议开启                          | 开启 |
| smartd         | 该服务用于自动检测硬盘状态，建议开启                         | 开启 |
| smb            | 网络服务 samba 的守护进程，让Linux和Windows共享数据          | 关闭 |
| squid          | 代理服务的守护进程                                           | 关闭 |
| sshd           | ssh 加密远程登录管理的服务, 远程管理必须使用                 | 开启 |
| syslog         | 日志的守护进程                                               | 开启 |
| vsftpd         | vsftp 服务的守护进程                                         | 关闭 |
| xfs            | X Window字体守护进程，提供字体服务。如果不启动图形界面不用开启 | 关闭 |
| xinetd         | 超级守护进程。如果有依赖 xinetd 的服务，就必须开启           | 开启 |

## 什么是 daemon 与服务service

启动一个程序提供功能，那么这个程序就是 `daemon`，程序提供的功能就是 `service`。`daemon` 的命名方式，一般在原程序后面添加字母`d`，使用 `ps` 和 `top` 可以看到很多后缀为`d`的 `daemon` 程序。

## init服务

Unix系统服务管理通过 `init`进程 唤醒所有的系统所需要的服务。所有的服务启动脚本放在 `/etc/init.d/`，使用 `bash script` 脚本程序，管理命令 `/etc/init.d/daemon start|stop|restart|status`。

## 执行等级

`init`根据执行等级`runlevel`来唤醒不同的服务，以进入不同的操作界面。各等级启动脚本通过 `/etc/rc.d/rc[0-6]/SXXdaemon` 连结到 `/etc/init.d/daemon`。

```
0. -
1. 单人维护模式
2. -
3. 纯文本模式
4. -
5. 文字加图形界面
6. -
```

## systemd的优点

从 `CentOS 7.x` 后，改用 `systemd` 启动服务管理机制。好处如下

- 并行处理所有服务加速开机: init 启动脚本是依序启动，不想依赖的服务也是等待启动，`systemd` 可以让所有服务同时启动，加快系统启动速度。
- on-demand 启动方式: 只有一个 `systemd` 服务搭配 `systemctl` 指令处理，无需额外支持。
- 服务相互依赖自我检查: 可以自定义服务相依性检查，比如定义B依赖A时，自动启动A服务
- 根据 `daemon` 功能分类: 将所有服务定义为`unit`并且归类`type`，比如 `service`、`socket`、`target`、`path`、`snapshot`、`timer` ，方便管理员的分类与记忆。
- 将多个 `saemons` 集合成群组: 将多个`daemons`功能集合成为一个 `target` 项目，执行某个 `target` 就是执行好多个 `daemon`。
- 向下兼容旧的 `init` 服务脚本: 目前没有办法支持 `init` 服务脚本，只支持普通功能

## systemd缺点

systemd 某些地方无法完全取代 init，如:

- 在 `runlevel` 的对应上，仅有 `1|3|4` 对应到 `systemd` 的某些 `target` 类型
- 支持的语法有限制，无法像 `/etc/init.d/daemon` 纯脚本自定义参数
- 如果启动时是通过手动启动的，`systemd` 将无法管理该服务
- `systemd` 启动不支持标准IO，因此编写 `systemd` 的启动设置时，必须取消互动机制

## systemd 的配置文件目录

`systemd` 将 `daemon` 执行脚本称为服务单位 `unit`，每种服务单位按功能分为不同的类型，配置文件在以下位置。

- `/etc/systemd/system`: 管理员按系统需求建立的执行脚本，类似`/etc/rc.d/rc5.d/Sxx`功能，优先顺序最高
- `/run/systemd/system`: 系统执行过程中所产生的服务脚本，优先顺序其次
- `/usr/lib/systemd/system`: 每个服务主要启动脚本设置，类似`/etc/init.d/`中文件，优先顺序最低

> 注意: 要修改某个服务启动的设置，应该修改 `/usr/lib/systemd/system` 下配置，`/etc/systemd/system`只是软链接文件

## 文件的扩展名

可通过查看文件的扩展名，区分 `/usr/lib/systemd/system` 下的数据类型。

```bash
# 查询 vsftpd 和 crond 服务
$ ll /usr/lib/systemd/system/ | grep -E '(vsftpd|multi|cron)'
-rw-r--r--. 1 root root  318 Aug  9  2019 crond.service
-rw-r--r--. 1 root root  171 Oct 31  2018 vsftpd.service
-rw-r--r--. 1 root root   89 Oct 31  2018 vsftpd.target
-rw-r--r--. 1 root root  184 Oct 31  2018 vsftpd@.service
```

## unit 类型分类说明

| 扩展名             | 主要服务功能                                                 |
| ------------------ | ------------------------------------------------------------ |
| .service           | 一般系统服务类型，包括本地服务和网络服务                     |
| .socket            | 内部程序数据交换的 socket 服务 socket unit                   |
| .target            | 一群服务集合                                                 |
| .mount、.automount | 文件系统挂载相关的服务                                       |
| .path              | 侦测特定文件或目录类型, 比如打印服务侦测打印队列目录启动打印功能 |
| .timer             | 循环执行的服务，类似 anacrontab                              |

## 通过 systemctl 管理服务

`systemd` 启动服务的机制，主要是通过 `systemctl` 指令来处理。以前的系统需要 `service|chkconfig|setup|init` 等指令来完成。其指令格式如下:

```bash
systemctl [command] [unit]

commond清单: 
- start:     启动 unit
- stop:      关闭 unit
- restart:   重启 unit
- reload:    重载配置文件
- enable:    设置开机启动
- disable:   取消开机启动
- status:    显示服务信息
- is-active: 目前是否在运行
- is-enable: 是否开机启动
```

## 范例 1

看看目前 atd 这个服务的状态

```bash
# Loaded: 开机是否启动
# Active: 是否正在运行中
# 最后一行: 该服务的启动信息
# 登录文件格式为: 时间、信息发送主机、哪一个服务的信息、实际信息内容
$ systemctl status atd.service 
* atd.service - Job spooling tools
   Loaded: loaded (/usr/lib/systemd/system/atd.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2020-03-17 10:49:55 CST; 1 day 5h ago
 Main PID: 1398 (atd)
    Tasks: 1
   CGroup: /system.slice/atd.service
           -1398 /usr/sbin/atd -f
Mar 17 10:49:55 study.centos.mrcode systemd[1]: Started Job spooling tools.
```

## 范例 2

正常关闭 atd 服务，非 kill -9

```bash
# 最后两行信息是执行 stop 后发生的事件日志信息
$ systemctl stop atd.service 
$ systemctl status atd.service 
* atd.service - Job spooling tools
   Loaded: loaded (/usr/lib/systemd/system/atd.service; enabled; vendor preset: enabled)
   Active: inactive (dead) since Wed 2020-03-18 16:40:06 CST; 13s ago
  Process: 1398 ExecStart=/usr/sbin/atd -f $OPTS (code=exited, status=0/SUCCESS)
 Main PID: 1398 (code=exited, status=0/SUCCESS)

Mar 17 10:49:55 study.centos.mrcode systemd[1]: Started Job spooling tools.
Mar 18 16:40:06 study.centos.mrcode systemd[1]: Stopping Job spooling tools...
Mar 18 16:40:06 study.centos.mrcode systemd[1]: Stopped Job spooling tools.
```

## Active状态

不要用 `kill` 关掉正常的服务，否则 `systemctl` 无法监控。 `Active` 状态有多个状态:

- active(running): 有一个或多个程序正在运行
- active(exited): 仅执行一次就正常结束的服务，目前并没有任何程序在系统中执行。
- active(waiting): 正在执行中中，不过在在等待其他的事件才能继续处理
- inactive: 这个服务目前没有运行

## 开机预设状态

开机预设状态有以下:

- enabled: 开机执行
- disabled: 开机不执行
- static: 不可以自己启动, 可能会被其他的服务唤醒
- mask: 无法被启动，因为已经被强制注销, 可通过 unmask 恢复

## 观察系统上所有的服务

```bash
systemctl [command][--type=TYPE][--all]

command: 
    list-units: 按 unit 列出目前有启动的 unit。若加上 --all 才会列出没有启动的
    list-unit-files: 按 `/usr/lib/systemd/system` 内的文件，将所有文件列表说明
--type: 之前提到过的 unit type，主要有 service、socket、target 等
```

### 范例 1

列出系统上有启动的 unit, `systemctl` 不加参数，预设是 `list-units`

```bash
# UNIT: 项目名称
# LOAD: 开机时是否会被加载
# ACTIVE: 目前的状态
# DESCRIPTION: 详细描述
$ systemctl
UNIT                        LOAD      ACTIVE SUB       DESCRIPTION              
  proc-sys-fs-binfmt_misc.automount loaded    active running   Arbitrary Executable File Formats File System Aut>
  sys-devices-pci0000:00-0000:00:01.1-ata2-host1-target1:0:0-1:0:0:0-block-sr0.device loaded    active plugged  >
  sys-devices-pci0000:00-0000:00:03.0-virtio0-net-ens3.device loaded    active plugged   Virtio network device  >
  sys-devices-pci0000:00-0000:00:04.0-virtio1-block-vda-vda1.device loaded    active plugged   /sys/devices/pci0>
......
```

### 范例 2

列出所有已经安装的 unit 有哪些

```bash
$ systemctl list-unit-files 
UNIT FILE                                     STATE   
proc-sys-fs-binfmt_misc.automount             static  
dev-hugepages.mount                           static  
dev-mqueue.mount                              static 
abrt-ccpp.service                             enabled 
abrt-oops.service                             enabled 
......
```

### 范例 3

只列出某种类型的 unit

```bash
# 只显示 .service 类型的服务
$ systemctl list-units --type=service --all
  UNIT                                                  LOAD      ACTIVE   SUB     DESCRIPTION
  abrt-ccpp.service                                     loaded    active   exited  Install ABRT coredump hook
  abrt-oops.service                                     loaded    active   running ABRT kernel log watcher
  abrt-vmcore.service                                   loaded    inactive dead    Harvest vmcores for ABRT
......

# 查找是否有 cpu 为名的服务
$ systemctl list-units --type=service --all | grep cpu
  cpupower.service                                      loaded    inactive dead    Configure CPU power 
```

## systemctl 针对 service 类型的配置

以前建立系统服务，需要在 `/etc/init.d/` 创建对应的 `script`，如今在 `systemd` 环境下，该怎么设置相关的服务启动环境？

## 配置文件相关目录简介

`systemd` 的配置文件大部分在 `/usr/lib/systemd/system/` 目录内，该目录的文件主要是**默认设置建议不要修改**。管理员应该修改的目录是 `/etc/systemd/system/`。

比如: 想要额外修改 vsftpd.service ，建议放到的位置如下:

- `/usr/lib/systemd/vsftpd.service` : 默认配置文件
- `/etc/systemd/system/vsftp.service.d/custom.conf`: 建立同名以 `.d` 后缀结尾的目录，该配置会覆盖掉默认配置文件
- `/etc/systemd/system/vsftpd.service.wants/*`: 设置相依服务的链接, 启动服务后启动建议服务
- `/etc/systemd/system/vsftpd.service.requires/*`: 设置相依服务的链接, 启动服务前启动建议服务

## 配置文件的设置项目简介

通过 `sshd.service` 的配置文件来讲解配置文件的内容

```bash
$ cat /usr/lib/systemd/system/sshd.service
[Unit]
Description=OpenSSH server daemon
Documentation=man:sshd(8) man:sshd_config(5)
After=network.target sshd-keygen.service
Wants=sshd-keygen.service

[Service]       # 该项目于实际执行的指令参数有关
Type=notify
EnvironmentFile=/etc/sysconfig/sshd
ExecStart=/usr/sbin/sshd -D $OPTIONS
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process
Restart=on-failure
RestartSec=42s

[Install]       # 此 unit 要挂载到哪个 target 下
WantedBy=multi-user.target
```

## 配置文件组成

配置文件大概分为三个部分:

- `[Unit]`: unit说明和其他依赖 `daemon` 的设置
- `[Service]|[Socket][Timer][Mount][Path]...`: 不同的 unit type 需要使用对应的设置项目，规范服务启动脚本、环境配置文件名、重新启动的方式等
- `[Install]`: unit挂载的 target 位置

## 配置文件规则

配置文件内有些设置规则如下:

- 设置项目通常是可以重复的: 可以设置两个 `After`，不过后者会取代前者，可以用 `After=` 清空该项
- 设置参数是布尔类型，可以使用 `1|yes|true|on` 代表启动，`0|no|false|off` 代表关闭
- 空白行、开头为 `#` 或 `;` 都表示批注信息

## [unit]部分

- Description: 使用 `systemctl list-units` 时，显示的说明
- Documentation: 提供管理员能够进一步的文件查询功能
- After: 说明 `unit` 是在哪个 `daemon` 启动之后才能启动
- Before: 在什么服务启动前，启动本服务
- Rrquires: 相依性配置, `unit` 需要在哪个 `daemon` 启动后才能启动，否则不会启动
- Wants: unit 启动之后，还需要启动哪些服务
- Conflicts: 冲突服务

## [service]部分

- Type: 启动方式，会影响到 ExecStart。一般有 simple|forking|oneshot|dbus|idle
- EnvironmentFile: 指定启动脚本的环境配置文件
- ExecStart: 实际执行此 `daemon` 的指令或脚本程序
- ExecStop: 关闭服务时所执行的指令
- ExecReload: 重新加载时所执行的指令
- Restart: 设置 `1` 时，当此 `daemon` 服务终止后，会再次启动该服务
- RemainAfterExit: 设置 `1` 时，当 `daemon` 所属的所有程序都终止后，服务会再尝试启动。
- TimeoutSec: 在启动关闭时，因为某些缘故导致无法顺利启动结束，在进入强制结束状态之前的等待时间
- KillMode: 可以是 `process|control-group|none` 中的一种
- RestartSec: 服务重新启动时的 sleep 时间，预设是 `100ms`

## [Install]部分

- WantedBy: unit挂在哪一个 target, 大部分都是 `*.target unit` 。
- Also: 相依性 enable
- Alias: 别名

### 范例 1

```bash
# 复制启动脚本
$ cd /etc/systemd/system/
$ cp /usr/lib/systemd/system/vsftpd.service vsftpd.service
$ vim vsftpd.service
[Unit]
Description=Vsftpd ftp daemon
After=network.target

[Service]
Type=forking
ExecStart=/usr/sbin/vsftpd /etc/vsftpd/vsftpd.conf

[Install]
WantedBy=multi-user.target

# 重新加载配置文件
$ systemctl daemon-reload
$ systemctl list-unit-files --all | grep vsftpd
vsftpd.service                                enabled
$ systemctl status vsftpd.service
* vsftpd.service - vsftpd ftp daemon
   Loaded: loaded (/etc/systemd/system/vsftpd.service; enabled; vendor preset: enabled)
   Active: active
```

### 范例2

制作一个可以备份自己系统的服务，这脚本放在 `/backups` 下，内容如下

```bash
$ mkdir /backups 
$ vim /backups/backup.sh
#!/bin/bash

source="/etc /home /root /var/lib /var/spool/{cron,at,mail}"
target="/backups/backup-system-$(date +%Y-%m-%d).tar.gz"

[ ! -d /backups ] && mkdir /backups

tar -zcvf ${target} ${source} $> /backups/backup.log

$ chmod a+x /backups/backup.sh
$ ll /backups/backup.sh
-rwxr-xr-x. 1 root root 222 Mar 20 09:24 /backups/backup.sh
```

准备 `backup.service` 的启动脚本

```bash
$ vim /etc/systemd/system/backup.service
[unit]
Description=backup my server
Requires=atd.service

[Service]
Type=simple
ExecStart=/bin/bash -c " echo /backups/backup.sh | at now"

[Install]
WantedBy=multi-user.target

# 因为 ExecStart 里面用到了 at 指令，因此 atd.service 是一定需要的服务

$ systemctl daemon-reload
$ systemctl start backup.service
$ systemctl status backup.service
* backup.service - backup my server
   Loaded: loaded (/etc/systemd/system/backup.service; disabled; vendor preset: disabled)
   Active: inactive (dead)

Mar 20 09:30:56 study.centos.mrcode systemd[1]: Started backup my server.
Mar 20 09:30:56 study.centos.mrcode bash[17748]: job 8 at Fri Mar 20 09:30:00 2020
# 服务状态是 inactive ，因为不是驻留内存的服务，执行完成就退出
```

## systemctl 针对 timer 的配置文件

某些时候需要定期执行某项工作，或开机后执行，或是某服务启动多久后执行的需求。以前用 `crond` 处理定期任务，现在可以用 `timers.target` 可以定期处理各种任务。

## systemd.timer 优缺点

systemd.timer 的优势如下。

- 所有 `systemd` 服务产生`log`都会被记录，因此 `debug` 更清楚方便
- 各项 `timer` 工作可以跟 `systemd` 的服务相结合
- 各项 `timer` 工作可以跟 `control group` 结合来限制资源利用
- 时间安排可以精确到毫秒的单位

> 缺点: 没有 email 通知功能，也没有 anacron 一段时间内的随机取样功能

## 任务需求

`systemd` 的 `timer` 功能，必须有如下条件:

- 系统的 `timer.target` 必须启动
- 要有 `sname.service` 的服务存在(`sname` 是自定义的名称)
- 要有 `sname.timer` 的时间启动服务存在

## sname.timer 的设置

`[Timer]` 部分

- OnActiveSec: 当 timers.target 启动多久后才执行该 unit
- OnBootSec: 当开机后多久之后才执行
- OnStartupSec: 当 systemd 第一次启动后多久才执行
- OnUnitActiveSec: 这个 timer 配置文件所管理的那个 unit 服务在最后一次启动后，相隔多久后再执行一次
- OnUnitInactiveSec: 这个 timer 配置文件所管理的那个 unit 服务在最后一次停止后，隔多久再执行一次
- OnCalendar: 使用实际时间(非循环时间)的方式来启动服务。时间格式后续讲解
- Unit: sname.service 与 sname.timer 中的 sname 不一致时，这里指向的 service unit
- Persistent: 使用 `OnCalendar` 设置时是否持续，默认 yes

## 使用 OnCalendar 的时间

从 `crontab` 转成 `timer` 功能，需要了解时间格式如下

```bash
英文周名 YYYY-MM-DD HH:MM:SS
Thu    2020-03-20 10:00:00

# 通常英文的写法: 小单位写在前面，大单位写后面、先秒、分、小时、天等
隔 3 小时:              3h 或 3hr 或 3hours
隔 300 分钟过 10 秒:     10s 300m 
隔 5 天又 100 分钟:      100m 5day
```

## 循环运行范例

任务需求如下:

- 开机后 2 小时开始执行一次 `backup.service`
- 自从第一次执行后，未来每两天执行一次 `backup.service`

```bash
$ vim /etc/systemd/system/backup.timer
[Unit]
Description=backup my server timer

[Timer]
OnBootSec=2hrs
OnUnitActiveSec=2days

[Install]
WantedBy=multi-user.target

$ systemctl daemon-reload 
$ systemctl enable backup.timer
Created symlink from /etc/systemd/system/multi-user.target.wants/backup.timer to /etc/systemd/system/backup.timer.
$ systemctl restart backup.timer    
$ systemctl list-unit-files | grep backup
backup.service           disabled                   # 只需要 timer 启动就 ok
backup.timer             enabled

$ systemctl show timers.target 
ConditionTimestamp=Tue 2020-03-17 10:49:38 CST      # timer 这个 unit 启动的时间

$ systemctl show backup.service | grep ExecMainStartTimestamp
ExecMainStartTimestamp=Fri 2020-03-20 09:38:19 CST  # backup.service 上一次执行的时间

$ systemctl show backup.timer | grep NextElapseUSecMonotonic 
NextElapseUSecMonotonic=4d 22h 48min 56.756775s     # 下一次执行距离 timers.target 的时间
```

## 固定日期案例

```bash
$ vim /etc/systemd/system/backup2.timer
[Unit]
Description=backup my server timer2

[Timer]
OnCalendar=Sun *-*-* 02:00:00
Persistent=true
Unit=backup.service     # timer 名称与原来的 service 不一致

[Install]
WantedBy=multi-user.target

$ systemctl daemon-reload
$ systemctl enable backup2.timer
Created symlink from /etc/systemd/system/multi-user.target.wants/backup2.timer to /etc/systemd/system/backup2.timer.
$ systemctl restart backup2.timer 
$ systemctl list-unit-files | grep backup
backup.service                                disabled
backup.timer                                  enabled 
backup2.timer                                 enabled 
$ systemctl show timers.target | grep ConditionTimestamp
ConditionTimestamp=Tue 2020-03-17 10:49:38 CST
ConditionTimestampMonotonic=15862087
$  systemctl show backup.service | grep ExecMainStartTimestamp
# 由于运行一次，所以没有 NextElapseUSecMonotonic 值
# 时间是 Unix 标准时间, 即跟 1970-01-01 00:00:00 比较
# 50 年 2个月 2周 5天 9小时才会执行，注意时间的基准值
ExecMainStartTimestamp=Fri 2020-03-20 09:38:19 CST
ExecMainStartTimestampMonotonic=254936756737
$ systemctl show backup2.timer | grep NextElapseUSecRealtime
NextElapseUSecRealtime=50y 2month 2w 5d 9h
```