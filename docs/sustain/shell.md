# SHELL编程

Shell是一个用C编写的程序，既是一种命令语言，又是一种程序设计语言。他可以提供用户与操作系统内核的交互。通过使用Shell脚本，人们可以很简便的执行一些重复性的操作，比如查看日志，处理文件，备份等等。

:::tip 环境 

本文基于Ubuntu20.04与Bash进行介绍。

:::

## 先上需求

1. 编写 adduser.sh, 具体参数要求如下：
2. 参数l表示总长度
3. 参数s表示特殊字符数量
4. 参数o表示编码顺序乱序

## 再上代码

``` shell{18}
#!/bin/bash
# 使用说明
usage() {
  echo "Usage: ${0} [-o] [-l LENGTH] [-s CHAR LENGTH]" >&2
  echo 'Generate a random password'
  echo '  -l LENGTH specify the password length' 
  echo '  -s Append a special char to the password'
  echo '  -o Disorder the password'
  exit 1
}

# 密码总长度
LEN=48

# 特殊字符长度
CHAR_LEN=0
# 获取用户的操作
while getopts ol:s: OPTION
do
  case "${OPTION}" in
    o)  # 打乱密码顺序
      DISORDER='true'
      ;;
    l)  # 获取密码总长度
      LEN="${OPTARG}"
      ;;
    s)  # 获取特殊字符长度
      USE_SPEC_CHAR='true'
      CHAR_LEN="${OPTARG}"
      ;;
    ?)
      usage
      ;;
  esac
done

# 获得数字和字母长度
LEN=$(($LEN-$CHAR_LEN))

# 随机生成 LEN 位数字和字母组成的密码
PASSWORD=$(date +%s%N${RANDOM}${RANDOM} | sha256sum | head -c${LEN})

# 向 PASSWORD 添加 CHAR_LEN 位特殊字符
if [[ "${USE_SPEC_CHAR}" = 'true' ]]
then
  SPEC_CHAR=$(echo '!@#$%^&*()_+=' | fold -w1 | shuf | tr -d '\n' | head -c${CHAR_LEN} )
  PASSWORD="${PASSWORD}${SPEC_CHAR}"
fi

# 打乱密码顺序
if [[ "${DISORDER}" == 'true' ]]
then
  PASSWORD=$( echo ${PASSWORD} | fold -w1 | shuf | tr -d '\n')
fi

# 移除已处理参数
shift $((OPTIND-1))

# 创建账号
useradd -m $1

# 创建密码
echo $1:${PASSWORD}|chpasswd

# 输出提示信息
echo "your username is :$1"
echo "your password is :${PASSWORD}"
echo "add user successfully"

exit 0
```

其中高亮部分:

getopts的使用形式是：getopts option_string variable 

getopts一共有三个参数，第一个是`o`这样的选项，第二个参数是 `l`这样的参数，第三个是`s`这样的参数。

选项之间可以通过冒号`:`进行分隔，也可以直接相连接，`:`表示选项后面必须带有参数，如果没有可以不加实际值进行传递

## 运行样例

```shell
# 创建用户star 自动分配长度8的英文数字密码
adduser.sh -l 8 star

# 创建用户star 自动分配长度8的密码 其中英文数字6位,后面特殊字符2位
adduser.sh -l 8 -s 2 star

# 创建用户star 自动分配长度8的密码 其中英文数字6位,特殊字符2位, 英文数字和特殊字符乱序排列
adduser.sh -l 8 -s 2 -o star
```

## 以此类推

很多系统服务都以Shell脚本为基石，比如开机自启，定时任务，包括使用说明和操作，使用他们会给人们对于Linux环境下操作任务大大加速。这类似于Window下的Bat批处理任务。

## 





