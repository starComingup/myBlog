---
sidebar:3
---

# Nginx安全风险评估以及配置策略

:::tip 参考来源 

阿里云安全中心基线检查，该部分仅为最佳安全实践，仅供参考

:::

[[toc]]	

## 身份鉴别类

### 检查是否配置Nginx账号锁定策略

**描述**

1.执行系统命令passwd -S nginx来查看锁定状态 出现Password locked证明锁定成功 如：nginx LK ..... (Password locked.)或nginx L .... 2.默认符合，修改后才有（默认已符合） 3.执行系统命令passwd -l nginx进行锁定

------

**检查提示**

\--

------

**加固建议**

配置Nginx账号登录锁定策略： Nginx服务建议使用非root用户(如nginx，nobody)启动，并且确保启动用户的状态为锁定状态。可执行passwd -l <Nginx启动用户> 如`passwd -l nginx` 来锁定Nginx服务的启动用户。命令 `passwd -S <用户>` 如`passwd -S nginx`可查看用户状态。 修改配置文件中的nginx启动用户修改为nginx或nobody 如： `user nobody;` 如果您是docker用户，可忽略该项（或添加白名单）

------

操作时建议做好记录或备份

------



## 服务配置类

### 检查Nginx进程启动账号

**描述**

Nginx进程启动账号状态，降低被攻击概率

------

**检查提示**

\--

------

**加固建议**

修改Nginx进程启动账号： 1、打开`conf/nginx.conf`配置文件； 2、查看配置文件的user配置项，确认是非root启动的； 3、如果是`root`启动，修改成`nobody`或者`nginx账号`； 备注： 4、修改完配置文件之后需要重新启动Nginx。

------

操作时建议做好记录或备份

------

### Nginx后端服务指定的Header隐藏状态  

**描述**

隐藏Nginx后端服务X-Powered-By头

------

**检查提示**

\--

------

**加固建议**

隐藏Nginx后端服务指定Header的状态： 1、打开`conf/nginx.conf`配置文件； 2、在`http`下配置`proxy_hide_header`项； 增加或修改为 `proxy_hide_header X-Powered-By;` `proxy_hide_header Server;`

------

操作时建议做好记录或备份

------

### Nginx的WEB访问日志记录状态 

**描述**

应为每个核心站点启用access_log指令。默认情况下启用。

------

**检查提示**

\--

------

**加固建议**

开启Nginx的WEB访问日志记录： 1、打开`conf/nginx.conf`配置文件，含主配置文件中include项包含的子配置文件； 2、在http下配置`access_log`项
`access_log logs/host.access.log main;` 3、并在主配置文件，及主配置文件下的include文件中 删除`off`项或配置为适当值

------

操作时建议做好记录或备份

------

### 隐藏Nginx服务的Banner 

**描述**

Nginx服务的Banner隐藏状态

------

**检查提示**

\--

------

**加固建议**

Nginx后端服务指定的Header隐藏状态隐藏Nginx服务Banner的状态： 1、打开`conf/nginx.conf`配置文件； 2、在server栏目下，配置`server_tokens`项 `server_tokens off;` 如出现多项不支持，执行`ln <conf_path> /etc/nginx/nginx.conf`

------

操作时建议做好记录或备份

------

### 针对Nginx SSL协议进行安全加固  

**描述**

Nginx SSL协议的加密策略进行加固

------

**检查提示**

\--

------

**加固建议**

Nginx SSL协议采用TLSv1.2： 1、打开`conf/nginx.conf`配置文件（或主配置文件中的inlude文件）； 2、配置

```
server { 
               ...
              ssl_protocols TLSv1.2;
               ...
                     }
```

备注：配置此项请确认nginx支持OpenSSL，运行`nginx -V` 如果返回中包含`built with OpenSSL`则表示支持OpenSSL。 如不支持，可能需要增加配置ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 如果尚未配置ssl协议，请尽快配置（参考连接[https://www.nginx.cn/doc/optional/ssl.html）](https://www.nginx.cn/doc/optional/ssl.html%EF%BC%89)

------

操作时建议做好记录或备份

------

## 访问控制类

### 确保已禁用自动索引模块 

**描述**

自动索引模块处理以斜杠字符结尾的请求。此功能启用目录列表，这在攻击者侦察中可能很有用，因此应将其禁用。

------

**检查提示**

\--

------

**加固建议**

执行以下操作以禁用自动索引模块: 搜索NGINX配置文件（NGINX.conf和任何包含的配置文件）以查找autoindex指令。
`egrep -i '^\s*autoindex\s+' <main_config_path>` `egrep -i '^\s*autoindex\s+' <sub_config_path>` 在location下删除或者修改为 `autoindex off;`

------

操作时建议做好记录或备份

------

## 文件权限类

### 确保Nginx配置文件权限为644 

**描述**

把控配置文件权限以抵御外来攻击

------

**检查提示**

\--

------

**加固建议**

修改Nginx配置文件权限： 执行`chmod 644 <conf_path>`来限制Nginx配置文件的权限；(<conf_path>为配置文件的路径，如默认/安装目录/conf/nginx.conf或者/etc/nginx/nginx.conf，或用户自定义，请 自行查找)

------

操作时建议做好记录或备份

------

