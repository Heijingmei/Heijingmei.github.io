import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as l,a,b as n,d,e as c}from"./app--knCZuqE.js";const i="/assets/af0bfe2293a5decf19f76d0431fe98cb-B1vfeVcq-B1vfeVcq.jpg",r={},p=c(`<h2 id="_0-hello-world" tabindex="-1"><a class="header-anchor" href="#_0-hello-world"><span>0. Hello, World</span></a></h2><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算机传统⬆️</p><p>打印出“Hello, World!”字样</p><p>使用 <code>cargo build</code> 来编译。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cargo</span> build
   Compiling helloworld v0.1.0 <span class="token punctuation">(</span>/home/mike/works/classes/helloworld<span class="token punctuation">)</span>
    Finished dev <span class="token punctuation">[</span>unoptimized + debuginfo<span class="token punctuation">]</span> target<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">1</span>.57s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>cargo run</code> 命令可以直接运行程序。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cargo</span> run
    Finished dev <span class="token punctuation">[</span>unoptimized + debuginfo<span class="token punctuation">]</span> target<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0</span>.01s
     Running <span class="token variable"><span class="token variable">\`</span>target/debug/helloworld<span class="token variable">\`</span></span>
Hello, world<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以看到，最后终端打印出了 Hello, world。我们成功地执行了第一个 Rust 程序。</p></blockquote><h2 id="_1-数据类型" tabindex="-1"><a class="header-anchor" href="#_1-数据类型"><span>1.数据类型</span></a></h2><p>Rust 的数据类型主要分为两大类：标量（Scalar）类型和复合（Compound）类型。以下是一个概览表格：</p><details class="hint-container details"><summary>点击展开详情</summary><table><thead><tr><th>类别</th><th>数据类型</th><th>描述</th></tr></thead><tbody><tr><td>标量</td><td>整型</td><td>包括 <code>i8</code>、<code>i16</code>、<code>i32</code>、<code>i64</code>、<code>i128</code>、<code>isize</code>（有符号整型）和 <code>u8</code>、<code>u16</code>、<code>u32</code>、<code>u64</code>、<code>u128</code>、<code>usize</code>（无符号整型）</td></tr><tr><td>标量</td><td>浮点型</td><td>包括 <code>f32</code> 和 <code>f64</code></td></tr><tr><td>标量</td><td>布尔型</td><td><code>bool</code> 类型，它的值可以是 <code>true</code> 或 <code>false</code></td></tr><tr><td>标量</td><td>字符型</td><td><code>char</code> 类型，表示单个 Unicode 字符；<br></td></tr><tr><td>复合</td><td>元组</td><td>元组（Tuple）类型，可以包含多种类型的几个值</td></tr><tr><td>复合</td><td>数组</td><td>数组（Array）类型，所有元素都必须是相同类型</td></tr><tr><td>复合</td><td>结构体</td><td>自定义数据类型，允许命名和包装多个相关值</td></tr><tr><td>复合</td><td>枚举</td><td>枚举（Enum）类型，用于定义通过多个具体变量来表示的类型</td></tr><tr><td>复合</td><td>切片</td><td>切片（Slice）类型，引用集合的一部分数据</td></tr><tr><td>复合</td><td>引用</td><td>引用（Reference）类型，允许以不拥有数据的方式借用值</td></tr><tr><td>特殊</td><td>动态大小类型</td><td>如 <code>str</code>，它是一个动态大小的字符串类型</td></tr><tr><td>特殊</td><td>指针</td><td>包括裸指针 <code>*const T</code> 和 <code>*mut T</code>，不建议直接使用</td></tr><tr><td>特殊</td><td>函数</td><td>函数也是一种类型，可以通过函数签名来指定</td></tr><tr><td>特殊</td><td>单元类型</td><td><code>()</code>，它是一个空元组，也称为单元类型</td></tr></tbody></table></details><ul><li><strong>枚举（Enum）</strong>：允许你定义一个类型，该类型可以是几个定义好的变体中的任何一个。枚举非常适合用于那些可以有固定数目变体的值的情况。</li><li><strong>切片（Slice）</strong>：引用一个数组的部分数据。与数组不同，切片的长度不需要在编译时确定，提供了一种灵活处理数组的方法。</li><li><strong>引用（Reference）</strong>：引用允许你以不拥有数据的方式借用值，它们本身并不拥有它们所指向的值。在 Rust 中，引用的使用遵循严格的借用规则，以确保内存安全。</li></ul><h3 id="_1-标量" tabindex="-1"><a class="header-anchor" href="#_1-标量"><span>1. 标量</span></a></h3><h4 id="_1-整数" tabindex="-1"><a class="header-anchor" href="#_1-整数"><span>1. 整数</span></a></h4><p>与一些动态语言不同，Rust 中的数字类型是区分位数的。</p><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>举例</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a<span class="token punctuation">:</span> <span class="token keyword">u32</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">类型写在变量名的后面</p><div class="hint-container warning"><p class="hint-container-title">类型写在变量名的后面</p></div></div><h3 id="_2-浮点数" tabindex="-1"><a class="header-anchor" href="#_2-浮点数"><span>2. 浮点数</span></a></h3><p>浮点数有两种类型：f32 和 f64，分别代表 32 位浮点数类型和 64 位浮点数类型。它们也可以跟在字面量的后面，用来指定浮点数值的类型，比如</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10.0f32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该语句就定义了一个变量 a，初始化成 32 位浮点数类型，值为 10.0。</p><h3 id="_3-布尔类型" tabindex="-1"><a class="header-anchor" href="#_3-布尔类型"><span>3. 布尔类型</span></a></h3><p>Rust 中的布尔类型为<code>bool</code>，它只有两个值，<code>true</code>和 <code>false</code>。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token punctuation">:</span> <span class="token keyword">bool</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-字符" tabindex="-1"><a class="header-anchor" href="#_4-字符"><span>4. 字符</span></a></h3><p>Rust 中的字符类型是 char，值用单引号括起来。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token char">&#39;z&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> z<span class="token punctuation">:</span> <span class="token keyword">char</span> <span class="token operator">=</span> <span class="token char">&#39;ℤ&#39;</span><span class="token punctuation">;</span> 
    <span class="token keyword">let</span> heart_eyed_cat <span class="token operator">=</span> &#39;😻&#39;<span class="token punctuation">;</span>
    <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token char">&#39;中&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),u={href:"https://unicode.org/glossary/#unicode_scalar_value",target:"_blank",rel:"noopener noreferrer"};function k(m,h){const e=t("ExternalLinkIcon");return o(),l("div",null,[p,a("p",null,[n("Rust 的 char 类型是 "),a("a",u,[n("Unicode 散列值"),d(e)]),n("。，在内存中总是占用 4 个字节大小。这一点与 C 语言或其他某些语言中的 char 有很大不同。 这意味着它可以表达各种符号，比如中文符号、emoji 符号等。")])])}const b=s(r,[["render",k],["__file","note2.html.vue"]]),f=JSON.parse('{"path":"/zh/Lilya/program/Rust/note2.html","title":"02-基本语法","lang":"zh-CN","frontmatter":{"title":"02-基本语法","author":"黑静美","isOriginal":true,"category":["编程"],"tag":["rust"],"icon":"/img/Rust.ico","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"0. Hello, World 计算机传统⬆️ 打印出“Hello, World!”字样 使用 cargo build 来编译。 使用 cargo run 命令可以直接运行程序。 可以看到，最后终端打印出了 Hello, world。我们成功地执行了第一个 Rust 程序。 1.数据类型 Rust 的数据类型主要分为两大类：标量（Scalar）类型和复...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/Rust/note2.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"02-基本语法"}],["meta",{"property":"og:description","content":"0. Hello, World 计算机传统⬆️ 打印出“Hello, World!”字样 使用 cargo build 来编译。 使用 cargo run 命令可以直接运行程序。 可以看到，最后终端打印出了 Hello, world。我们成功地执行了第一个 Rust 程序。 1.数据类型 Rust 的数据类型主要分为两大类：标量（Scalar）类型和复..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T19:52:33.000Z"}],["meta",{"property":"article:author","content":"黑静美"}],["meta",{"property":"article:tag","content":"rust"}],["meta",{"property":"article:modified_time","content":"2024-04-15T19:52:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02-基本语法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T19:52:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"黑静美\\"}]}"]]},"headers":[{"level":2,"title":"0. Hello, World","slug":"_0-hello-world","link":"#_0-hello-world","children":[]},{"level":2,"title":"1.数据类型","slug":"_1-数据类型","link":"#_1-数据类型","children":[{"level":3,"title":"1. 标量","slug":"_1-标量","link":"#_1-标量","children":[{"level":4,"title":"1. 整数","slug":"_1-整数","link":"#_1-整数","children":[]}]},{"level":3,"title":"2. 浮点数","slug":"_2-浮点数","link":"#_2-浮点数","children":[]},{"level":3,"title":"3. 布尔类型","slug":"_3-布尔类型","link":"#_3-布尔类型","children":[]},{"level":3,"title":"4. 字符","slug":"_4-字符","link":"#_4-字符","children":[]}]}],"git":{"createdTime":1713210753000,"updatedTime":1713210753000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":3.14,"words":942},"filePathRelative":"zh/Lilya/program/Rust/note2.md","localizedDate":"2024年4月15日","excerpt":"<h2>0. Hello, World</h2>\\n<div class=\\"language-rust\\" data-ext=\\"rs\\" data-title=\\"rs\\"><pre class=\\"language-rust\\"><code><span class=\\"token keyword\\">fn</span> <span class=\\"token function-definition function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token macro property\\">println!</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Hello, world!\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{b as comp,f as data};
