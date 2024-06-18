import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as u,c as h,a as n,b as s,d as a,w as i,e as l}from"./app-BKwTevcG.js";const m="/assets/1698277773697-35cf5a84-5fff-482f-b4e3-b9dbea0d16f5-mQy_J2vZ.png",v="/assets/1698281890789-05ae81a1-668f-4b22-bff1-91a95f8e1d8f-B-Uj0p5H.png",k={},b=n("h2",{id:"_1-rust介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-rust介绍"},[n("span",null,"-1. rust介绍")])],-1),g=n("p",null,"Rust 是一种通用的编程语言，但是它更善于以下场景:",-1),_=n("ul",null,[n("li",null,"需要运行时的速度"),n("li",null,"需要内存安全"),n("li",null,"更好的利用多处理器")],-1),f={href:"https://zh.wikipedia.org/wiki/C%2B%2B",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"_0-安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0-安装"},[n("span",null,"0. 安装")])],-1),x={href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021",target:"_blank",rel:"noopener noreferrer"},y=l(`<p>网页 Playground 非常方便，可以用来快速验证一些代码片段，也便于将代码分享给别人。如果你的电脑本地没有安装 Rust 套件，可以临时使用这个 Playground 学习。</p><p>在<code>Mac OS</code>、 <code>Linux</code>、windows的 <code>WSL</code> 中开发：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--proto</span> <span class="token string">&#39;=https&#39;</span> <span class="token parameter variable">--tlsv1.2</span> <span class="token parameter variable">-sSf</span> https://sh.rustup.rs <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),R={href:"https://github.com/AndersonHJB/BornforthisData/blob/main/column/Rust/01/rustup-init.exe",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/AndersonHJB/BornforthisData/blob/main/column/Rust/01/rustup-init_64bit.exe",target:"_blank",rel:"noopener noreferrer"},B={href:"https://kaisery.github.io/trpl-zh-cn/ch01-01-installation.html",target:"_blank",rel:"noopener noreferrer"},E=l('<h5 id="以下为mac安装示例" tabindex="-1"><a class="header-anchor" href="#以下为mac安装示例"><span>以下为<code>mac</code>安装示例</span></a></h5><p>按1继续安装 <img src="'+m+`" alt="Bildschirmfoto 2023-10-26 um 01.48.31.png" loading="lazy"></p><h2 id="_1-其他terminal指令" tabindex="-1"><a class="header-anchor" href="#_1-其他terminal指令"><span>1.其他Terminal指令</span></a></h2><h5 id="安装指令" tabindex="-1"><a class="header-anchor" href="#安装指令"><span>安装指令</span></a></h5><p>（如上）</p><hr><h5 id="_1-rustup-update" tabindex="-1"><a class="header-anchor" href="#_1-rustup-update"><span>1. rustup update</span></a></h5><h5 id="_2-rustup-self-uninstall" tabindex="-1"><a class="header-anchor" href="#_2-rustup-self-uninstall"><span>2. rustup self uninstall</span></a></h5><h5 id="_3-rustc-version" tabindex="-1"><a class="header-anchor" href="#_3-rustc-version"><span>3. rustc --version</span></a></h5><h5 id="" tabindex="-1"><a class="header-anchor" href="#"><span>__</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>rustup update

rustup self uninstall

rustc <span class="token parameter variable">--version</span> <span class="token comment">#适用于windows！！！</span>
rustc <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="这个是一个win10的示例" tabindex="-1"><a class="header-anchor" href="#这个是一个win10的示例"><span>这个是一个<code>win10</code>的示例</span></a></h5><p>![Bildschirmfoto 2023-10-26 um 02.09.22](./note1.assets/Bildschirmfoto 2023-10-26 um 02.09.22.png)</p><p>**信息内容 ：rustc+版本号+(yyyy-mm-dd) **</p><h5 id="_4-rustc-doc" tabindex="-1"><a class="header-anchor" href="#_4-rustc-doc"><span>4. rustc doc</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>rustc doc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>view the lolal rust instruction document</p><h5 id="_5-新建文档-文件夹" tabindex="-1"><a class="header-anchor" href="#_5-新建文档-文件夹"><span>5. 新建文档（文件夹）</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mkdir+（文档名+. 文档格式）<span class="token comment">#不输入文档格式即为文件夹</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_6-通过编译器进入文件夹" tabindex="-1"><a class="header-anchor" href="#_6-通过编译器进入文件夹"><span>6. 通过编译器进入文件夹</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> 文档名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> *h  <span class="token comment">#（打开上述文件 *h代表重复的名字）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>首先新建文件夹再新建项目是因为，rust的每个项目需要单独配套的一套环境。</p></div><h5 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令"><span><a href="#_%E9%A1%B9%E7%9B%AE%E5%86%85%E9%83%A8%E7%9A%84%E6%A3%80%E6%9F%A5">其他命令</a></span></a></h5><h4 id="_7-新建项目" tabindex="-1"><a class="header-anchor" href="#_7-新建项目"><span>7. 新建项目</span></a></h4><h5 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1"><span>方法1</span></a></h5><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code>cargo new <span class="token operator">-</span><span class="token operator">-</span>bin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2"><span>方法2：</span></a></h5><h5 id="也可以先打开代码编译器-再由编译器创建项目" tabindex="-1"><a class="header-anchor" href="#也可以先打开代码编译器-再由编译器创建项目"><span>也可以先打开代码编译器，再由编译器创建项目</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>文件名 <span class="token builtin class-name">.</span> 　<span class="token comment">#mac linux</span>
<span class="token comment">#注意是 文件名（空格）.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span> code  <span class="token comment">#windows</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过默认设置的<code>代码编译器</code>打开该文件夹，一般为<code>VS Code</code></p><h5 id="项目最好单独建立在一个文件夹内" tabindex="-1"><a class="header-anchor" href="#项目最好单独建立在一个文件夹内"><span>！！项目最好单独建立在一个文件夹内</span></a></h5><h2 id="_2-编辑器-ide" tabindex="-1"><a class="header-anchor" href="#_2-编辑器-ide"><span>2. 编辑器 IDE</span></a></h2><p>开发 Rust，除了下载、安装 Rust 本身之外，还有一个工具也推荐你使用，就是 <strong>VS Code</strong>。需要提醒你的是，在 VS Code 中需要安装 rust-analyzer 插件才会有自动提示等功能。你可以看一下 VS Code 编辑 Rust 代码的效果。</p><p>VS Code 功能非常强大，除了基本的 IDE 功能外，还能实现<strong>远程编辑</strong>。比如在 Windows 下开发，代码放在 WSL Linux 里面，在 Windows Host 下使用 VS Code 远程编辑 WSL 中的代码，体验非常棒。</p><p>其他一些常用的 Rust 代码编辑器还有 VIM、NeoVIM、IDEA、Clion 等。</p>`,38),T={class:"hint-container tip"},S=n("p",{class:"hint-container-title"},"提示",-1),V=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,[s("JetBrains 最近推出了 Rust 专用的 IDE："),n("code",null,"RustRover"),s("，如果有精力的话，你也可以下载下来体验一下。")])],-1),z={href:"https://www.jetbrains.com/rust/",target:"_blank",rel:"noopener noreferrer"},L=l(`<p>@tab 推荐几个 Rust 的 VsCode 插件</p><ul><li>Rust Syntax：语法高亮</li><li>crates：分析项目依赖</li><li>Even Better Toml：项目配置管理</li><li>Rust Test Lens：Rust快速测试</li></ul><p>:::</p><h2 id="_3-创建一个工程" tabindex="-1"><a class="header-anchor" href="#_3-创建一个工程"><span>3. 创建一个工程</span></a></h2><p>打开终端，输入：</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code>cargo new <span class="token operator">-</span><span class="token operator">-</span>bin hello_world 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示：</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code>     <span class="token class-name">Created</span> <span class="token function">binary</span> <span class="token punctuation">(</span>application<span class="token punctuation">)</span> \`hello_world\` package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就创建好了一个新工程。这个新工程的目录组织结构是这样的：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hello_world
    ├── Cargo.toml
    └── src
        └── main.rss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第一层是一个 src 目录和一个 <code>Cargo.toml</code> 配置文件。src 是放置源代码的地方，而 <code>Cargo.toml</code> 是这个工程的配置文件，我们来看一下里面的内容。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token punctuation">[</span>package<span class="token punctuation">]</span>
name <span class="token operator">=</span> <span class="token string">&quot;helloworld&quot;</span>
version <span class="token operator">=</span> <span class="token string">&quot;0.1.0&quot;</span>
edition <span class="token operator">=</span> <span class="token string">&quot;2021&quot;</span>

# <span class="token class-name">See</span> more keys and their definitions at https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>doc<span class="token punctuation">.</span>rust<span class="token operator">-</span>lang<span class="token punctuation">.</span>org<span class="token operator">/</span>cargo<span class="token operator">/</span>reference<span class="token operator">/</span>manifest<span class="token punctuation">.</span>html

<span class="token punctuation">[</span>dependencies<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cargo.toml 中包含 package 等基本信息，里面有名字、版本和采用的 Rust 版次。Rust 3 年发行一个版次，目前有 2015、2018 和 2021 版次，最新的是 2021 版次，也是我们这门课使用的版次。</p><h3 id="在新建的项目内打开terminal" tabindex="-1"><a class="header-anchor" href="#在新建的项目内打开terminal"><span>在新建的项目内打开Terminal</span></a></h3><p>可以执行 <code>rustc -V</code> 来查看我们课程使用的 Rust 版本。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code>rustc <span class="token number">1.69</span><span class="token punctuation">.</span><span class="token number">0</span> <span class="token punctuation">(</span>84c898d65 <span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">16</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>好了，一切就绪后，我们可以来看看 src 下的 <code>main.rs</code> 里面的代码。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>cargo build</code> 来编译。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cargo</span> build
   Compiling helloworld v0.1.0 <span class="token punctuation">(</span>/home/mike/works/classes/helloworld<span class="token punctuation">)</span>
    Finished dev <span class="token punctuation">[</span>unoptimized + debuginfo<span class="token punctuation">]</span> target<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">1</span>.57s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>cargo run</code> 命令可以直接运行程序。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cargo</span> run
    Finished dev <span class="token punctuation">[</span>unoptimized + debuginfo<span class="token punctuation">]</span> target<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0</span>.01s
     Running <span class="token variable"><span class="token variable">\`</span>target/debug/helloworld<span class="token variable">\`</span></span>
Hello, world<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以看到，最后终端打印出了 Hello, world。我们成功地执行了第一个 Rust 程序。</p></blockquote><h4 id="vs-code-小技巧" tabindex="-1"><a class="header-anchor" href="#vs-code-小技巧"><span>vs code 小技巧</span></a></h4><h4 id="项目内部的检查" tabindex="-1"><a class="header-anchor" href="#项目内部的检查"><span>项目内部的检查</span></a></h4><p><a href="#_%E5%85%B6%E4%BB%96%E5%91%BD%E4%BB%A4">🔙</a></p><table><thead><tr><th>命令</th><th>用途</th><th style="text-align:left;">举例</th></tr></thead><tbody><tr><td>cargo</td><td>Rust 的包管理器，构建工具和依赖解决器。可以使用 cargo 命令创建、编辑和构建 Rust 项目</td><td style="text-align:left;">cargo new --bin <code>my_project</code> 可以创建-个名为 <code>my_project</code> 的新的 Rust 项目</td></tr><tr><td>ustup.</td><td>用来升级维护 Rust 编译器套件的版本同时支持维护多个版本，并可用来安装Rust 组件</td><td style="text-align:left;">rustup update stable 可将 Rust stable版本升级至最新</td></tr><tr><td>rust-fmt</td><td>可用来对 Rust 代码按配置格式进行自动排版，用来统- Rust 代码风格</td><td style="text-align:left;">配合 cargo，直接在工程目录下运行 cargofmt 就可以对整个工程进行排版</td></tr><tr><td>rust-clippy</td><td>可用来对 Rust 代码进行严谨性检查指出一些写得不规范的地方</td><td style="text-align:left;">配合 cargo，直接在工程目录下运行 cargoclippy 就可以对整个工程进行检查</td></tr></tbody></table><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h3><p>Rust 语言中自带单元测试和集成测试方案。</p><p>在 <code>src/lib.rs</code> 或 <code>src/main.rs</code> 中有以下测试代码：</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">u32</span> <span class="token punctuation">{</span> <span class="token number">10u32</span> <span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>            <span class="token comment">// 配置测试模块</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>foo</span><span class="token punctuation">;</span>
     
    <span class="token attribute attr-name">#[test]</span>             <span class="token comment">// 单元测试</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">it_works</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 调用被测试的函数或功能</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token number">10u32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 断言</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目目录下运行 <code>cargo test</code></p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code>running <span class="token number">1</span> test
test <span class="token namespace">tests<span class="token punctuation">::</span></span>it_works <span class="token punctuation">...</span> ok
test result<span class="token punctuation">:</span> ok<span class="token punctuation">.</span> <span class="token number">1</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">.</span>00s

running <span class="token number">0</span> tests
test result<span class="token punctuation">:</span> ok<span class="token punctuation">.</span> <span class="token number">0</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">.</span>00s 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function A(q,D){const o=t("RouteLink"),e=t("ExternalLinkIcon"),r=t("Tabs");return u(),h("div",null,[b,g,_,n("p",null,[s("它可以用来替换 "),a(o,{to:"/zh/Lilya/program/C/note1.html"},{default:i(()=>[s("C")]),_:1}),s("/"),n("a",f,[s("C++"),a(e)]),s("，Rust 和它们具有同样的性能，但是很多常见的 bug 在编译时就可以被消灭。")]),w,n("p",null,[s("如果你暂时不想在本地安装，或者本地安装有问题，对于我们初学者来说，也有一个方便、快捷的方式，就是 Rust 语言官方提供的一个网页端的 "),n("a",x,[s("Rust 试验场open in new window"),a(e)]),s("，可以让你快速体验。")]),y,n("p",null,[s("如果想在 Windows 原生平台上开发 Rust 代码，首先需要确定安装 "),n("a",R,[s("32 位的版本open in new window"),a(e)]),s("还是 "),n("a",C,[s("64 位的版本open in new window"),a(e)]),s("。在安装过程中，它会询问你是想安装 GNU 工具链的版本还是 MSVC 工具链的版本。安装 GNU 工具链版本的话，不需要额外安装其他软件包。而安装 MSVC 工具链的话，需要先安装微软的 "),n("a",B,[s("Visual Studioopen in new window"),a(e)]),s(" 依赖。")]),E,n("div",T,[S,a(r,{id:"141",data:[{id:"Tip1"}]},{title0:i(({value:c,isActive:p})=>[s("Tip1")]),tab0:i(({value:c,isActive:p})=>[V]),_:1})]),n("blockquote",null,[n("p",null,[n("a",z,[s("https://www.jetbrains.com/rust"),a(e)])])]),L])}const I=d(k,[["render",A],["__file","note1.html.vue"]]),N=JSON.parse('{"path":"/zh/Lilya/program/Rust/note1.html","title":"01-rust第一课","lang":"zh-CN","frontmatter":{"title":"01-rust第一课","author":"黑静美","isOriginal":true,"category":["编程"],"tag":["rust"],"icon":"/ico/Rust.ico","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"-1. rust介绍 Rust 是一种通用的编程语言，但是它更善于以下场景: 需要运行时的速度 需要内存安全 更好的利用多处理器 它可以用来替换 /C++，Rust 和它们具有同样的性能，但是很多常见的 bug 在编译时就可以被消灭。 0. 安装 如果你暂时不想在本地安装，或者本地安装有问题，对于我们初学者来说，也有一个方便、快捷的方式，就是 Rust...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/Rust/note1.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"01-rust第一课"}],["meta",{"property":"og:description","content":"-1. rust介绍 Rust 是一种通用的编程语言，但是它更善于以下场景: 需要运行时的速度 需要内存安全 更好的利用多处理器 它可以用来替换 /C++，Rust 和它们具有同样的性能，但是很多常见的 bug 在编译时就可以被消灭。 0. 安装 如果你暂时不想在本地安装，或者本地安装有问题，对于我们初学者来说，也有一个方便、快捷的方式，就是 Rust..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-18T20:53:57.000Z"}],["meta",{"property":"article:author","content":"黑静美"}],["meta",{"property":"article:tag","content":"rust"}],["meta",{"property":"article:modified_time","content":"2024-06-18T20:53:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-rust第一课\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-18T20:53:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"黑静美\\"}]}"]]},"headers":[{"level":2,"title":"-1. rust介绍","slug":"_1-rust介绍","link":"#_1-rust介绍","children":[]},{"level":2,"title":"0. 安装","slug":"_0-安装","link":"#_0-安装","children":[{"level":5,"title":"以下为mac安装示例","slug":"以下为mac安装示例","link":"#以下为mac安装示例","children":[]}]},{"level":2,"title":"1.其他Terminal指令","slug":"_1-其他terminal指令","link":"#_1-其他terminal指令","children":[{"level":5,"title":"安装指令","slug":"安装指令","link":"#安装指令","children":[]},{"level":5,"title":"1. rustup update","slug":"_1-rustup-update","link":"#_1-rustup-update","children":[]},{"level":5,"title":"2. rustup self uninstall","slug":"_2-rustup-self-uninstall","link":"#_2-rustup-self-uninstall","children":[]},{"level":5,"title":"3. rustc --version","slug":"_3-rustc-version","link":"#_3-rustc-version","children":[]},{"level":5,"title":"__","slug":"","link":"#","children":[]},{"level":5,"title":"这个是一个win10的示例","slug":"这个是一个win10的示例","link":"#这个是一个win10的示例","children":[]},{"level":5,"title":"4. rustc doc","slug":"_4-rustc-doc","link":"#_4-rustc-doc","children":[]},{"level":5,"title":"5. 新建文档（文件夹）","slug":"_5-新建文档-文件夹","link":"#_5-新建文档-文件夹","children":[]},{"level":5,"title":"6. 通过编译器进入文件夹","slug":"_6-通过编译器进入文件夹","link":"#_6-通过编译器进入文件夹","children":[]},{"level":5,"title":"其他命令","slug":"其他命令","link":"#其他命令","children":[]},{"level":4,"title":"7. 新建项目","slug":"_7-新建项目","link":"#_7-新建项目","children":[{"level":5,"title":"方法1","slug":"方法1","link":"#方法1","children":[]},{"level":5,"title":"方法2：","slug":"方法2","link":"#方法2","children":[]},{"level":5,"title":"也可以先打开代码编译器，再由编译器创建项目","slug":"也可以先打开代码编译器-再由编译器创建项目","link":"#也可以先打开代码编译器-再由编译器创建项目","children":[]},{"level":5,"title":"！！项目最好单独建立在一个文件夹内","slug":"项目最好单独建立在一个文件夹内","link":"#项目最好单独建立在一个文件夹内","children":[]}]}]},{"level":2,"title":"2. 编辑器  IDE","slug":"_2-编辑器-ide","link":"#_2-编辑器-ide","children":[]},{"level":2,"title":"3. 创建一个工程","slug":"_3-创建一个工程","link":"#_3-创建一个工程","children":[{"level":3,"title":"在新建的项目内打开Terminal","slug":"在新建的项目内打开terminal","link":"#在新建的项目内打开terminal","children":[{"level":4,"title":"vs code 小技巧","slug":"vs-code-小技巧","link":"#vs-code-小技巧","children":[]},{"level":4,"title":"项目内部的检查","slug":"项目内部的检查","link":"#项目内部的检查","children":[]}]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]}]}],"git":{"createdTime":1718744037000,"updatedTime":1718744037000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":5.63,"words":1688},"filePathRelative":"zh/Lilya/program/Rust/note1.md","localizedDate":"2024年6月18日","excerpt":"<h2>-1. rust介绍</h2>\\n<p>Rust 是一种通用的编程语言，但是它更善于以下场景:</p>\\n<ul>\\n<li>需要运行时的速度</li>\\n<li>需要内存安全</li>\\n<li>更好的利用多处理器</li>\\n</ul>\\n<p>它可以用来替换 <a href=\\"/zh/Lilya/program/C/note1.html\\" target=\\"_blank\\">C</a>/<a href=\\"https://zh.wikipedia.org/wiki/C%2B%2B\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">C++</a>，Rust 和它们具有同样的性能，但是很多常见的 bug 在编译时就可以被消灭。</p>","autoDesc":true}');export{I as comp,N as data};