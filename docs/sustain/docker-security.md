---
sidebar:3
---

# Docker安全风险评估以及配置策略

:::tip 参考来源 

阿里云安全中心基线检查，该部分仅为最佳容器安全实践，仅供参考

:::

[[toc]]

## 安全审计类

### 审核Docker文件和目录 

**描述**

除了审核常规的Linux文件系统和系统调用之外，还审核所有与Docker相关的文件和目录。 Docker守护程序以“ root”特权运行。 其行为取决于某些关键文件和目录。如 /var/lib/docker、/etc/docker、docker.service、 docker.socket、/usr/bin/docker-containerd、/usr/bin/docker-runc等文件和目录

------

**检查提示**

\--

------

**加固建议**

在/etc/audit/audit.rules与/etc/audit/rules.d/audit.rules文件中添加以下行：

```
-w /var/lib/docker -k docker
-w /etc/docker -k docker
-w /usr/lib/systemd/system/docker.service -k docker
-w /usr/lib/systemd/system/docker.socket -k docker
-w /usr/bin/docker-containerd -k docker
-w /usr/bin/docker-runc -k docker
```

然后，重新启动audit程序。 例如

```
service auditd restart
```

------

操作时建议做好记录或备份

------

## 服务配置类

### 限制容器之间的网络流量 

**描述**

默认情况下，同一主机上的容器之间允许所有网络通信。 如果不需要，请限制所有容器间的通信。 将需要相互通信的特定容器链接在一起。默认情况下，同一主机上所有容器之间都启用了不受限制的网络流量。 因此，每个容器都有可能读取同一主机上整个容器网络上的所有数据包。 这可能会导致意外和不必要的信息泄露给其他容器。 因此，限制容器间的通信。

------

**检查提示**

\--

------

**加固建议**

在守护程序模式下运行docker并传递'--icc = false'作为参数。 例如，

```
/usr/bin/dockerd --icc=false
```

若使用systemctl管理docker服务则需要编辑

```
/usr/lib/systemd/system/docker.service
```

文件中的`ExecStart`参数添加 `--icc=false`选项 然后重启docker服务

```
systemctl daemon-reload
systemctl restart docker
```

------

操作时建议做好记录或备份

------

### 为Docker启用内容信任 

**描述**

默认情况下禁用内容信任。 您应该启用它。 内容信任提供了将数字签名用于发送到远程Docker注册表和从远程Docker注册表接收的数据的功能。 这些签名允许客户端验证特定图像标签的完整性和发布者。 这确保了容器图像的出处

------

**检查提示**

\--

------

**加固建议**

要在bash shell中启用内容信任，请输入以下命令：`export DOCKER_CONTENT_TRUST=1` 或者，在您的配置文件中设置此环境变量，以便在每次登录时启用内容信任。 内容信任目前仅适用于公共Docker Hub的用户。 当前不适用于Docker Trusted Registry或私有注册表。

------

操作时建议做好记录或备份

------

### 设置日志记录级别 

**描述**

设置适当的日志级别，将Docker守护程序配置为记录您以后想要查看的事件。 基本日志级别为“ info”及更高版本将捕获除调试日志以外的所有日志。 直到且除非有必要，否则您不应在“debug”日志级别运行Docker守护程序

------

**检查提示**

\--

------

**加固建议**

运行Docker守护程序，如下所示：

```
dockerd --log-level=info
```

若以systemctl管理docker服务则需要编辑`/usr/lib/systemd/system/docker.service`的ExecStart参数添加`--log-level="info"`，并重启docker

```
systemctl stop docker
systemctl start docker
```

------

操作时建议做好记录或备份

------

### 允许Docker对iptables进行更改 

**描述**

iptables用于在Linux内核中设置，维护和检查IP数据包过滤器规则表。 允许Docker守护程序对iptables进行更改。 如果您选择这样做，Docker将永远不会对您的系统iptables规则进行更改。 如果允许，Docker服务器将根据您为容器选择网络选项的方式自动对iptables进行所需的更改。 建议让Docker服务器自动对iptables进行更改，以避免网络配置错误，这可能会妨碍容器之间以及与外界的通信。 此外，每次选择运行容器或修改网络选项时，它都可以避免更新iptables的麻烦。

------

**检查提示**

\--

------

**加固建议**

不使用'--iptables = false'参数运行Docker守护程序。 若以systemctl管理docker服务则需要编辑`/usr/lib/systemd/system/docker.service`的ExecStart参数删除`--iptables = false`， 重启docker服务

```
systemctl daemon-reload
systemctl restart docker
```

------

操作时建议做好记录或备份

------

### 不要使用aufs存储驱动程序 

**描述**

“ aufs”存储驱动程序是最早的存储驱动程序。 它基于Linux内核补丁集，该补丁集不太可能合并到主要Linux内核中。 还已知“ aufs”驱动程序会导致一些严重的内核崩溃。 'aufs'刚刚获得了Docker的支持。 最重要的是，许多使用最新Linux内核的Linux发行版都不支持'aufs'驱动程序。

------

**检查提示**

\--

------

**加固建议**

不要明确使用“ aufs”作为存储驱动程序。 例如，请勿按以下方式启动Docker守护程序： 若以systemctl管理docker服务则需要编辑`/usr/lib/systemd/system/docker.service`的ExecStart参数删除`--storage-driver aufs`重启docker服务

```
systemctl daemon-reload
systemctl restart docker
```

------

操作时建议做好记录或备份

------

### 不要使用特权容器 

**描述**

使用--privileged标志将所有Linux内核功能赋予容器，从而覆盖--cap-add和--cap-drop标志。 确保不使用它。 --privileged标志为容器提供了所有功能，并且还解除了设备cgroup控制器强制执行的所有限制。 换句话说，容器可以完成主机可以做的几乎所有事情。 存在此标志是为了允许特殊用例，例如在Docker中运行Docker

------

**检查提示**

\--

------

**加固建议**

不要使用`--privileged`标志运行容器

------

操作时建议做好记录或备份

------

### 限制容器的内存使用量 

**描述**

默认情况下，Docker主机上的所有容器均等地共享资源。 通过使用Docker主机的资源管理功能（例如内存限制），您可以控制容器可能消耗的内存量。 默认情况下，容器可以使用主机上的所有内存。 您可以使用内存限制机制来防止由于一个容器消耗主机的所有资源而导致的服务拒绝，从而使同一主机上的其他容器无法执行其预期的功能。 对内存没有限制可能会导致一个问题，即一个容器很容易使整个系统不稳定并因此无法使用。

------

**检查提示**

\--

------

**加固建议**

仅使用所需的内存来运行容器。 始终使用'--memory'参数运行容器。 您应该按以下方式启动容器：

```
docker run --interactive --tty --memory 256m <Container Image Name or ID>
```

------

操作时建议做好记录或备份

------

## 文件权限类

### 确认Docker相关的文件具有合适的权限 

**描述**

确保可能包含敏感参数的文件和目录的安全对确保Docker守护程序的正确和安全运行至关重要

------

**检查提示**

\--

------

**加固建议**

执行以下命令为docker相关文件配置权限：

```
chown root:root /usr/lib/systemd/system/docker.service
chmod 644 /usr/lib/systemd/system/docker.service
chown root:root /usr/lib/systemd/system/docker.socket
chmod 644 /usr/lib/systemd/system/docker.socket
chown root:root /etc/docker
chmod 755 /etc/docker
```

若文件路径与实际系统中不同可以使用以下命令获取文件路径：

```
systemctl show -p FragmentPath docker.socket
systemctl show -p FragmentPath docker.service
```

------

操作时建议做好记录或备份

------

