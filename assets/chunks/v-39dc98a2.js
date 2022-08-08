"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7436],{7078:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s=JSON.parse('{"key":"v-39dc98a2","path":"/deploy/VPS.html","title":"服务器 VPS","lang":"zh-CN","frontmatter":{"article":false,"title":"服务器 VPS","icon":"IO","order":2,"summary":"环境部署 部署应用前，必须要为服务器配置好包管理工具，以便节省部署时间。 主流的前端包管理工具有 npm、yarn、pnpm、以及国内的镜像 cnpm、tyarn 等，这些包管理器都是基于 nodejs。 包管理安装 npm：Node.js 集成了 npm 安装。; yarn：npm i yarn -g，全局安装。; pnpm：npm install pnp","head":[["meta",{"property":"og:url","content":"https://newzone.top/deploy/VPS.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"服务器 VPS"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-08T01:34:44.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-08T01:34:44.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"环境部署","slug":"环境部署","children":[{"level":3,"title":"包管理安装","slug":"包管理安装","children":[]},{"level":3,"title":"源管理","slug":"源管理","children":[]},{"level":3,"title":"部署包","slug":"部署包","children":[]}]},{"level":2,"title":"网站字体","slug":"网站字体","children":[]},{"level":2,"title":"米拓","slug":"米拓","children":[]},{"level":2,"title":"服务器 ECS","slug":"服务器-ecs","children":[{"level":3,"title":"系统修正","slug":"系统修正","children":[]},{"level":3,"title":"网站重定向","slug":"网站重定向","children":[]},{"level":3,"title":"服务器初始配置","slug":"服务器初始配置","children":[]},{"level":3,"title":"服务器报错","slug":"服务器报错","children":[]},{"level":3,"title":"服务器转移配置","slug":"服务器转移配置","children":[]}]}],"git":{"createdTime":1658511538000,"updatedTime":1659922484000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":6}]},"readingTime":{"minutes":4.81,"words":1442},"filePathRelative":"deploy/VPS.md","localizedDate":"2022年7月22日"}')},2881:(n,e,a)=>{a.r(e),a.d(e,{default:()=>K});var s=a(8e3);const l=(0,s._)("h2",{id:"环境部署",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#环境部署","aria-hidden":"true"},"#"),(0,s.Uk)(" 环境部署")],-1),i=(0,s._)("p",null,"部署应用前，必须要为服务器配置好包管理工具，以便节省部署时间。",-1),t=(0,s._)("p",null,"主流的前端包管理工具有 npm、yarn、pnpm、以及国内的镜像 cnpm、tyarn 等，这些包管理器都是基于 nodejs。",-1),r=(0,s._)("h3",{id:"包管理安装",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#包管理安装","aria-hidden":"true"},"#"),(0,s.Uk)(" 包管理安装")],-1),c=(0,s.Uk)("npm："),d={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Uk)("Node.js"),p=(0,s.Uk)(" 集成了 npm 安装。"),u=(0,s._)("li",null,[(0,s.Uk)("yarn："),(0,s._)("code",null,"npm i yarn -g"),(0,s.Uk)("，全局安装。")],-1),m=(0,s._)("li",null,[(0,s.Uk)("pnpm："),(0,s._)("code",null,"npm install pnpm -g"),(0,s.Uk)("，全局安装。")],-1),h=(0,s.uE)('<h3 id="源管理" tabindex="-1"><a class="header-anchor" href="#源管理" aria-hidden="true">#</a> 源管理</h3><p>源管理的命令类似，把 npm 换为 yarn 或 pnpm 就能更改对应包管理工具的设置。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#查看源</span>\n<span class="token function">npm</span> config get registry\n<span class="token comment">#更换国内源</span>\n<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/\n<span class="token comment">#换回默认源</span>\n<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署包" tabindex="-1"><a class="header-anchor" href="#部署包" aria-hidden="true">#</a> 部署包</h3><p>npm、yarn 和 pnpm 的包安装及管理命令。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#全局安装</span>\n<span class="token function">npm</span> i 包 -g\n<span class="token function">yarn</span> global <span class="token function">add</span> 包\n<span class="token function">pnpm</span> <span class="token function">add</span> 包 -g\n\n<span class="token comment">#移除全局包</span>\n<span class="token function">pnpm</span> remove 包 --global\n<span class="token comment">#更新全局包</span>\n<span class="token function">pnpm</span> upgrade 包 --global\n\n<span class="token comment">#升级当前目录的依赖以确保你的项目只包含单个版本的相关包</span>\n<span class="token comment">#本方法能解决大部分的部署报错</span>\n<span class="token function">npm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> update\n<span class="token function">yarn</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> upgrade\n<span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网站字体" tabindex="-1"><a class="header-anchor" href="#网站字体" aria-hidden="true">#</a> 网站字体</h2><p>网站为了提高访问速度并保持设计的一致性，通常会选默认字体。这导致网站设计难以突出重点。针对这点，我通常会修改网站的导航栏字体，将其从默认字体改为 <code>思源黑体-粗</code>。</p>',8),v=(0,s.Uk)("进入 "),b={href:"https://www.iconfont.cn/webfont",target:"_blank",rel:"noopener noreferrer"},k=(0,s.Uk)("iconfont‑webfont"),g=(0,s.Uk)("，输入导航栏内所有文字，并设置所需字体。"),f=(0,s._)("li",null,"点击「生成字体」后，在选中字体的下方，点击「本地下载」。",-1),w=(0,s._)("li",null,"将字体包上传到服务器，修改新字体的位置参数。",-1),_=(0,s._)("li",null,[(0,s.Uk)("在导航栏的 "),(0,s._)("code",null,"class"),(0,s.Uk)(" 属性中添加 "),(0,s._)("code",null,"web-font"),(0,s.Uk)("。")],-1),x=(0,s._)("h2",{id:"米拓",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#米拓","aria-hidden":"true"},"#"),(0,s.Uk)(" 米拓")],-1),y=(0,s.Uk)("后台忘记密码，使用 "),U={href:"https://www.metinfo.cn/download/54.html",target:"_blank",rel:"noopener noreferrer"},S=(0,s.Uk)("Metinfo 米拓重置工具"),P=(0,s.Uk)("。"),q=(0,s._)("li",null,"metinfo 新版静态页会删除 index.html，后续都改用 index.php。",-1),E=(0,s.uE)('<h2 id="服务器-ecs" tabindex="-1"><a class="header-anchor" href="#服务器-ecs" aria-hidden="true">#</a> 服务器 ECS</h2><h3 id="系统修正" tabindex="-1"><a class="header-anchor" href="#系统修正" aria-hidden="true">#</a> 系统修正</h3><p>服务器以 centos 为主</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 系统升级，大版本更新后重启服务器</span>\nyum update -y\n\n<span class="token function">sudo</span> dnf makecache <span class="token comment">#更新DNF包库</span>\n<span class="token function">sudo</span> dnf check-update <span class="token comment">#检查更新</span>\n<span class="token function">sudo</span> dnf update <span class="token comment">#更新所有的软件包</span>\n\n<span class="token comment"># 新建用户，非 root 权限</span>\nadduser xxxx\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),C={id:"网站重定向",tabindex:"-1"},j=(0,s._)("a",{class:"header-anchor",href:"#网站重定向","aria-hidden":"true"},"#",-1),L=(0,s.Uk)(),T={href:"https://www.jb51.net/article/146957.htm",target:"_blank",rel:"noopener noreferrer"},W=(0,s.Uk)("网站重定向"),$=(0,s.uE)('<p>更改 nginx 配置后，nginx 重载配置后实现网站重定向。<code>$1</code> 表示第一个 <code>()</code> 内的正则匹配内容，<code>$2</code> 为第二个。</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment">#隐性链接跳转</span>\nlocation /xx1 {proxy_pass &lt;https://xxx.com/;&gt;}\n\n<span class="token comment">#404 前，将旧文章链接格式转为新的，使用绝对路径</span>\nlocation ^~ /p{\n    rewrite ^/p/(.*)$  https://newzone.top/_posts/$1.html;\n}\n\n<span class="token comment"># huginn 设置中 location 添加 301 定向，兼容老路径链接</span>\n<span class="token key attr-name">if ( $request_uri</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;/users/1/web_requests/21/guoke.xml&quot; ) {</span>\nrewrite ^ http://xxx.com/users/1/web_requests/19/guoke.xml permanent;\n}\n\n<span class="token comment">#只匹配主页，将主页跳转为其中一个子页面</span>\n<span class="token key attr-name">location</span> <span class="token punctuation">=</span> <span class="token value attr-value">/ {</span>\n rewrite https://xxx.com/ permanent;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务器初始配置" tabindex="-1"><a class="header-anchor" href="#服务器初始配置" aria-hidden="true">#</a> 服务器初始配置</h3>',3),D=(0,s.Uk)("安装"),N={href:"https://www.bt.cn/bbs/thread-19376-1-1.html",target:"_blank",rel:"noopener noreferrer"},V=(0,s.Uk)("宝塔面板"),z=(0,s.Uk)("。"),H=(0,s.uE)('<li><p>删除阿里云主机监控。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> aegis stop  <span class="token comment">#停止服务</span>\n<span class="token function">chkconfig</span> --del aegis  <span class="token comment"># 删除服务</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>',1),I=(0,s.Uk)("配置 "),Z={href:"https://www.bt.cn/bbs/thread-2897-1-1.html",target:"_blank",rel:"noopener noreferrer"},O=(0,s.Uk)("阿里云端口开放"),R=(0,s.Uk)("，导入安全规则。"),B=(0,s.uE)("<li><p>宝塔上修改默认账号密码，并修改登录 22 的默认 SSH 端口。</p></li><li><p>网站-添加站点，将站点根目录放在 /www/wwwroot/xxx，同时新建数据库。</p></li><li><p>上传全站文件并解压，然后按照安装提示重新安装一次，最后导入备份数据库。</p></li><li><p>404.html 起效，宝塔网站配置文件中，删除 <code>error_page 404 /404.html;</code> 中的 <code>#</code>。</p></li><li><p>SSL 证书设置，开启强制 HTTPS；PHP 版本；301 重定向；添加伪静态设置（metinfo 或其他网站后台有代码）。如果 301 设置失败，直接在「伪静态」配置中，放入跳转代码。</p></li>",5),M={href:"https://www.bt.cn/bbs/forum.php?mod=viewthread&tid=3117",target:"_blank",rel:"noopener noreferrer"},F=(0,s.Uk)("ECS 宝塔设置优化"),J=(0,s._)("ul",null,[(0,s._)("li",null,"添加计划任务，定期释放内存，建议设置每天释放一次，执行时机为半夜，如：04:00。"),(0,s._)("li",null,"打开 Linux 工具箱添加 Swap。Swap 推荐与物理内存相同。"),(0,s._)("li",null,"安装 PHP 缓存扩展，尽量使用更高的 PHP 版本，另外安装 opcache(脚本缓存)、redis(内容缓存)、imagemagick、fileinfo、exif。"),(0,s._)("li",null,[(0,s.Uk)("Redis 优化，在/etc/sysctl.conf 中添加 "),(0,s._)("code",null,"net.core.somaxconn = 2048"),(0,s.Uk)("，然后终端运行 "),(0,s._)("code",null,"sysctl -p"),(0,s.Uk)("。")])],-1),A=(0,s.uE)('<h3 id="服务器报错" tabindex="-1"><a class="header-anchor" href="#服务器报错" aria-hidden="true">#</a> 服务器报错</h3><h4 id="cpu-100" tabindex="-1"><a class="header-anchor" href="#cpu-100" aria-hidden="true">#</a> CPU 100%</h4><p>当服务器 cpu 或内存突然飙升 100% 时，依次排除当前运行进程，检查是否安装更新了插件、应用或服务。</p><p>如果找不到原因，可以临时设置定期任务。每隔 3 小时重启一次 nginx/apache。有时重启不正常，因此重启命令后 10 秒，再启动一次 nginx/apache。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/etc/init.d/nginx restart\n<span class="token function">sleep</span> 10s\n/etc/init.d/nginx start\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ssl-证书" tabindex="-1"><a class="header-anchor" href="#ssl-证书" aria-hidden="true">#</a> SSL 证书</h4><p>如果 SSL 证书部署报错，可以按自动生成来部署。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#证书设置修改 /www/server/panel/vhost/nginx</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$server_port</span> <span class="token operator">!</span>~ <span class="token number">443</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> <span class="token operator">&lt;</span>https://www.xxx.com<span class="token variable">$1</span><span class="token operator">&gt;</span> permanent<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">#证书修改</span>\n/www/server/panel/vhost/cert/\n<span class="token comment">#证书位置</span>\n/www/server/panel/vhost/ssl\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据库出错解决" tabindex="-1"><a class="header-anchor" href="#数据库出错解决" aria-hidden="true">#</a> 数据库出错解决</h4><ol><li>mysql 配置中 <code>mysqld</code> 在一行添加 <code>innodb_force_recovery=4</code>，数值可以 0-6，数值越大对数据库损害越大。正常启动 mysql 后，备份所有数据库和管理密码，并下载到本地。</li><li>在宝塔的「数据库」中删除所有数据库，卸载并重装 mysql。</li><li>重新导入数据库。</li></ol><h4 id="piwik-手动升级" tabindex="-1"><a class="header-anchor" href="#piwik-手动升级" aria-hidden="true">#</a> piwik 手动升级</h4><p>Matomo/Piwik 是免费的统计服务。有时无法使用自动安装包，需要手动升级。</p><ol><li>下载最新版应用，并解压到服务器。</li><li>将原目录中的 config/config.ini.php 粘贴到新版中，然后就可以更新数据库进行升级了。</li><li>设置-系统-地理位置，拖到页面底部，按页面要求下载 DBIP 包，并重命名保存为 <code>/www/wwwroot/piwik/misc/DBIP-City.mmdb</code>。</li></ol><h3 id="服务器转移配置" tabindex="-1"><a class="header-anchor" href="#服务器转移配置" aria-hidden="true">#</a> 服务器转移配置</h3><ul><li>添加 url 规则 <code>^/rss.php</code> 到防火墙 URL 白名单，防止 rss 服务被屏蔽。</li></ul>',15),G={},K=(0,a(1935).Z)(G,[["render",function(n,e){const a=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[l,i,t,r,(0,s._)("ul",null,[(0,s._)("li",null,[c,(0,s._)("a",d,[o,(0,s.Wm)(a)]),p]),u,m]),h,(0,s._)("ol",null,[(0,s._)("li",null,[v,(0,s._)("a",b,[k,(0,s.Wm)(a)]),g]),f,w,_]),x,(0,s._)("ul",null,[(0,s._)("li",null,[y,(0,s._)("a",U,[S,(0,s.Wm)(a)]),P]),q]),E,(0,s._)("h3",C,[j,L,(0,s._)("a",T,[W,(0,s.Wm)(a)])]),$,(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("p",null,[D,(0,s._)("a",N,[V,(0,s.Wm)(a)]),z])]),H,(0,s._)("li",null,[(0,s._)("p",null,[I,(0,s._)("a",Z,[O,(0,s.Wm)(a)]),R])]),B,(0,s._)("li",null,[(0,s._)("p",null,[(0,s._)("a",M,[F,(0,s.Wm)(a)])]),J])]),A])}]])},1935:(n,e)=>{e.Z=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}}}]);