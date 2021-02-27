---
title: HTTPS配置
---



# 个人性质域名申请以及https配置

**环境**：1.阿里云服务器ECS，nginx服务器

2.你所购买的域名    www.example.com

## 域名备案以及解析

域名备案可以使用https://beian.aliyun.com/，或者你所在购买的域名提供商代备案系统。

***注意：未备案之前域名都无法接入。***

备案需要经过阿里云代备案系统的人工审核，以及工信部https://beian.miit.gov.cn/的短信验证码审核，以及http://www.beian.gov.cn/的审核（你可能需要到填写所在地的网管大队进行责任书签名），才能拥有一个合法的非经营性个人网站。

#### 域名解析

登录阿里云域名控制台，点需要解析的域名，进入解析设置页面，添加记录。

**注意**：这里可产生带www和不带www的两种方式，若配置主机记录为www,则解析www.example.com的网站，但不能通过example.com进行访问。需要再配置主机纪录为@的解析规则才能不带www进行访问，注意记录值需要填写你的云服务器公网ip地址。解析线路如果你不知道如何设置，最好设置为**默认**（笔者在这里挖过一个坑，用的网络是电信的，解析路线走了移动的，就如何也找不到域名所对应的IP，起初以为是nginx的问题，最终才知道是域名的解析问题）

**申请好域名后**，先配置好基础nginx的80端口以供访问（新安装的nginx可以直接访问），该配置文件命名为example.com 放置nginx默认配置路径（非手动编译安装的为/etc/nginx/sites-enabled/下）

```yaml
server {
    listen 80;
    server_name www.example.com example.com; # // 你的域名
    # rewrite ^(.*)$ https://${server_name}$1 permanent; #// 把http的域名请求转成https
    location / {
        root /var/www/html; # //你的静态文件路径
        index index.html index.htm;
   }
}
```

确保example.com与www.example.com都可以访问页面。

此时你应该能成功访问nginx成功安装的页面或者你配置的页面，但是左上角的浏览器会认为该网站不安全，因为此时采用的是http明文传输协议。不安全的原因可以自行抓包看传输内容。

HTTPS的配置

如果是阿里云的域名，可以在控制台中找到ssl应用安全，阿里云提供免费的单域名证书，由digicert签发，如果采用了别家公司的可以看提供商是否提供免费的ssl应用安全证书，也可以上letsencrypt进行免费证书的申请（阿里云的路线是走不通letsencrypt的，就不用尝试阿里云服务器使用letsencrypt办法的证书了）

首先到证书资源包中申请证书总数，然后点击证书申请，可以看到单域名digicert公司签发的免费ssl证书，申请这一个申请的时候请注意你的应用服务器，笔者这里是nginx，然后完成域名的验证（如果使用的是阿里云的DNS,_TXT记录会自动生成到其中,直接点击验证即可，如果域名不同提供商，则需要手动填写一下记录）。

申请完后稍等片刻，等待证书显示已签发状态，则可以点击下载，下载该证书到本机上，有钱人可以体验部署功能。。。

手动配置ssl的请跟笔者往下走，下载的证书在本地解压出来，一个xxx.key和一个xxx.pem,将这两个文件上传至服务器的***/etc/nginx/cert***文件夹下（cert文件夹要先创建）

然后就可以进行nginx的配置了

```yaml
server {
    listen 443 ssl;
    server_name example.com; #// 你的域名
    # ssl on;
    root /var/www/html; #// 前台文件存放文件夹，可改成别的
    index index.html index.htm; # // 上面配置的文件夹里面的index.html
    ssl_certificate  cert/xxx.pem; #// 改成你的证书的名字
    ssl_certificate_key cert/xxx.key; #// 你的证书的名字
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    location / {
        index index.html index.htm;
    }
}
server {
    listen 80;
    server_name www.example.com example.com; # // 你的域名
    rewrite ^(.*)$ https://${server_name}$1 permanent; #// 把http的域名请求转成https
    # location / {
	# root /var/www/html;
	# index index.html index.htm;
   # }
}
```

接下来两个命令

```bash
nginx -t #测试nginx
nignx -s reload #重启nginx,主要是重新读取文件
```

这里注意一下阿里云的安全组规则定义的防火墙，80与443都需要关掉。

最后访问一下，就能从不同的访问路径跳过去了。

- http://www.example.com
- http://example.com
- https://www.example.com
- https://example.com

此时浏览器的地址栏呈现的就会是一把锁的状态了，通信信息均为加密信息。