# SSH配置

编程实现 nginx 源代码的自动编译，并且将编译后的程序更新到远程服务器，并且将服务器的老版本应用和运行日志自动备份，最好通过浏览器远程显示所有备份的数据历史信息。 

实现方法：

1. ssh配置免密命令执行
2. 编写sh脚本，自动编译nginx
3. 远程命令发送文件，备份
4. 远程监控页面

## 1.SSH配置免密命令

首先说一下逻辑

1 本地机生成ssh密钥后在用户目录文件夹下会有.ssh文件

2 .ssh文件夹下有四个文件

authorized_keys 已经认证并信任的身份

id_rsa 生成的私钥文件

id_rsa.pub 生成的公钥文件（需要发送至远程服务器的文件）

known_hosts

本地机A的家目录下的.ssh目录下生成一对秘钥 

```shell
ssh-keygen -t rsa -P "" #生成空密码
scp /root/.ssh/id_rsa.pub root@xx.xx.xx.xx:/root/.ssh/
```

远程机B目录下执行

```shell
cd .ssh
chattr -ia authorized_keys #将文件属性修改为可更改
chmod 600 authorized_keys #修改为文件权限
cat id_rsa.pub > authorized_keys #将公钥放到认证的密钥文件
chmod 400 authorized_keys #修改文件权限
chattr +ia authorized_keys
```

## 2.编写shell自动编译Nginx

```shell
vim nginx-auto.sh
#写入文件
if [ ! -d "nginx-1.19.0.tar.gz" ]; then
wget -pq http://nginx.org/download/nginx-1.19.0.tar.gz >/dev/null #下载
fi
tar -xvf nginx-1.19.0.tar.gz >/dev/null#解压
apt -y install gcc libpcre3 libpcre3-dev libssl-dev libperl-dev zlib1g zlib1g-dev make > /dev/null #下载编译所需依赖与软件
cd nginx-1.19.0 #进入文件夹
./configure >/dev/null #确认配置文件
make > makerecord.txt
echo "success"
exit 0
```

至此，nginx就编译好了

只需要到目标服务器上进行一次安装就好了

3.远程命令发送文件与备份

发送文件

```shell
cd ..
tar -zcvf new-nginx.tar.gz nginx-1.19.0 >/dev/null #先打包编译好的文件
scp new-nginx.tar.gz root@111.229.84.70:/root /dev/null #发送编译好的文件
```

本地备份脚本

```shell
echo '
tar -zcvf usr-sbin-bak.tar.gz /usr/sbin
tar -zcvf var-log.bak.tar.gz /var/log
if [ ! -d "/usr/local/nginx" ]; then
	exit 0
else
	tar -zcvf usr-local-nginx-bak.tar.gz /usr/local/nginx
fi
tar -xvf new-nginx.tar.gz > dev/null
cd new-nginx
#make install #该句尝试执行
exit 0
' > backup.sh
chmod 755 remote.sh
#不需要有标准输出
ssh root@111.229.84.70 < backup.sh > /tmp/backup.txt #开头不是/的可以舍弃
```

