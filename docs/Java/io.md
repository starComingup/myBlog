# 网络IO



进程与线程？

进程：操作系统调度单元 --CPU核心

线程: 进程调度的最小单元

> 实际问题：Nginx worker的数量 进程数量 
>
> netty线程的数量
>
> redis worker 一个线程 
>
> cpu核心数

tomcat很多线程池 线程的总数加起来远超过CPU的核心数

BIO:一个线程对应一个客户端

测试环境:jdk1.4

使用Java写一个BIO

```java
public Class SocketIO{
    public static void main(String[] args) throw Exception{
        ServerSocket server = new ServerSocket(9090);
        
        System.out.println("step1: new ServerSocket(9090)");
        
        while(true) {
            final Socket client = server.accept();//阻塞
            System.out.println("step2:client\t" + client.getPort());
            new Thread(new Runnable(){
                public void run() {
                    InputStream in = null;
                    try {
                        in = client.getInputStream();
                        BufferedReader reader = new BufferedReader(new InputStreamReader(in));
                        while(true) {
                            String dataline = reader.readLine();//阻塞2
                            if(null != dataline){
                               System.out.println(dataline) 
                            }else{
                                System.out.println("发送为空")
                            }
                        }
                    } catch(Exception e){
                        System.out.println("发送错误!")
                    }
                }
            });
        }
    }
}
```

```shell
strace -ff -o ./out /usr/java/j2sdk1.4.2_19/bin/java SocketBIO.class
```

通过nc链接该客户端

```shell
nc localhost 9090
```

Recv-Q与Send-Q均处于内核中

BIO最大缺点:每个连接对应一个线程,block 阻塞,造成线程过多。

NIO（NONE_BLOCK IO) linux内核2.26开始支持

Java 中的 NIO 于 Java 1.4 中引入，对应 `java.nio` 包，提供了 `Channel` , `Selector`，`Buffer` 等抽象。NIO 中的 N 可以理解为 Non-blocking，不单纯是 New。它支持面向缓冲的，基于通道的 I/O 操作方法。 对于高负载、高并发的（网络）应用，应使用 NIO  。

```java
public class SocketNI0 {
    public static void main(String[] args) throws Exception{
        LinkedL ist<Soc ketChannel> clients = new LinkedL ist<>();
        ServerSocketChannel ss = ServerSocketChannel. open(); //服务 端开启监听:接受客户端
        ss.bind(new InetSocketAddress(9090));
        ss.configureBlocking(false); //重点 0S NONBL OCKING! ! // 只让接受客户端不阻塞
        //ss.setOption (StandardSocketOptions.TCP_NODELAY, false);
        //StandardSocketOptions.TCP_NODELAY
        //StandardSocketOptions.SO_KEEPALIVE
        white (true) {
            //接受客户端的连接
            SocketChannel client = ss.accept()i //不会阻塞? -1 NULL
            if (client == null) {  
                System.out.println("null.....");
            }else {
                client.configureBlocking(false);
                int port = client.socket().getPort();
                System.out.println("client...port:"+port);
                clients.add(client);
            }
            
            ByteBuffer buffer = ByteBuffer .allocateDirect(4096); //可以在堆里
            for(SocketChannel c:clients){
                int num = c.read(buffer); //0 -1 0 //不会阻塞
                if(num > 0) {
                    buffer.flop();
                    byte[] aaa = new byte[buffer.limit()];
                    buffer.get(aaa);
                    
                    String b = new String(aaa);
                 System.out.println(c.socket().getPort() + ":" + b);
                    buffer.clear();
                }
            }
```



**网络IO从哪里读取出来的?**

从自己的队列中读取,而不是要读再发。



