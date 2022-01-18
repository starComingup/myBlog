# 安装环境

### 关闭selinux

```
vi /etc/sysconfig/selinux
SELINUX=enforcing 改为 SELINUX=disabled
```

![null](http://img.ewomail.com/uploads/ewomail/images/m_9ba76510d0d3fd48064dd1d07dab241c_r.png)

------

### 检查swap

如果没启动swap，这会导致EwoMail的防病毒组件不能启动，所以在安装前先检查swap是否已经启动，如已启动可跳过该步骤。

```
查看swap
free -m
```

如果swap位置都显示是0，那么系统还没创建swap
![null](http://img.ewomail.com/uploads/ewomail/images/m_4179b6b847297e1672d5222e4bd87831_r.png)

------

### 创建swap分区（内存超过2G，可不配置）

创建1G的swap，可以根据你的服务器配置来调整大小

```
dd if=/dev/zero of=/mnt/swap bs=1M count=1024  
```

设置交换分区文件

```
mkswap /mnt/swap
```

启动swap

```
swapon /mnt/swap
```

设置开机时自启用 swap 分区

```
需要修改文件 /etc/fstab 中的 swap 行，添加
/mnt/swap swap swap defaults 0 0
```

![null](http://img.ewomail.com/uploads/ewomail/images/m_baaf4a449aedf39b1faf3f17031472bb_r.png)

------

### 邮箱域名

EwoMail本身是可以配置多个域名来收发邮件的，但在安装前需要一个邮箱的主域名。
本次教程例子使用的主域名是ewomail.cn

### 请在以下选择一种方式安装

### git安装 （centos7/8）

###### gitee安装（centos7/8） 安装方式(一)

gitee 项目地址 https://gitee.com/laowu5/EwoMail

```
yum -y install git
cd /root
git clone https://gitee.com/laowu5/EwoMail.git
cd /root/EwoMail/install
#需要输入一个邮箱域名，不需要前缀，列如下面的ewomail.cn
sh ./start.sh ewomail.cn
```

**国外网络** 请在安装域名后面加空格加en，例如 sh ./start.sh ewomail.cn en

###### github安装 国外 （centos7/8）安装方式(二)

github 项目地址 https://github.com/gyxuehu/EwoMail

```
yum -y install git
cd /root
git clone https://github.com/gyxuehu/EwoMail.git
cd /root/EwoMail/install
#需要输入一个邮箱域名，不需要前缀，列如下面的ewomail.cn，域名后面要加空格加en
sh ./start.sh ewomail.cn en
```

**国外网络** 请在安装域名后面加空格加en，例如 sh ./start.sh ewomail.cn en

### 在线安装 （centos7/8）安装方式(三)

安装前请服务器必须已链接网络，安装时间将会根据你的系统配置和网络环境大概会在10分钟内安装完成。（需要root权限）

安装前需要先安装wget

打开：http://www.ewomail.com/list-11.html 输入你的域名获取安装代码

![null](http://img.ewomail.com/uploads/ewomail/images/m_2056b8aa6c05d8b7f0e8ca193ed22181_r.png)

执行安装命令后全程会自动安装（需要root权限）
如果有提示，请输入Y

安装成功后将会输出”Complete installation”。

查看安装的域名和数据库密码

```
cat /ewomail/config.ini
```

**V1.09版本开始使用 firewalld 防火墙**

------

### 下载过慢 (centos7)

当clamav下载过慢的时候，可以用按键 ctrl+c 跳过下载，等安装完成后然后关闭杀毒软件。
关闭杀毒软件请查看 [降低内存占用](http://doc.ewomail.com/docs/ewomail/reduce_memory)

![null](http://img.ewomail.com/uploads/ewomail/images/m_06631adf19b5bfaa18f23b83b58592aa_r.png)

### 安装后的常规配置

将你安装的域名，例如安装的域名时 xxx.com，就将这行加在服务器的hosts文件里 /etc/hosts

127.0.0.1 mail.xxx.com smtp.xxx.com imap.xxx.com

[域名解析](http://doc.ewomail.com/docs/ewomail/main_domain)

[SSL证书更换](http://doc.ewomail.com/docs/ewomail/ssl)

[常规配置](http://doc.ewomail.com/docs/ewomail/changguipeizhi)

[开放端口](http://doc.ewomail.com/docs/ewomail/open_port)

[降低内存占用](http://doc.ewomail.com/docs/ewomail/reduce_memory)

------

### 访问地址（将IP更换成你服务器IP即可）

邮箱管理后台：[http://IP:8010](http://ip:8010/) （默认账号admin，密码ewomail123）

项目IP：ctgmail.chinatelecomglobal.com

项目登陆密码harryzhang.mx@chinatelecomglobal.com密码：CTG@!QAZ@WSX

ssl端口 [https://IP:7010](https://ip:7010/)

web邮件系统：[http://IP:8000](http://ip:8000/)
ssl端口 [https://IP:7000](https://ip:7000/)

域名解析完成后，可以用子域名访问，例如下面
[http://mail.xxx.com:8000](http://mail.xxx.com:8000/) (http)
[https://mail.xxx.com:7000](https://mail.xxx.com:7000/) (ssl)

项目地址1：https://gitee.com/laowu5/EwoMail
项目地址2：https://github.com/gyxuehu/EwoMail

### 授权协议

http://www.ewomail.com/license.html