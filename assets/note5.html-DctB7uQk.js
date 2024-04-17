import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e as t}from"./app-D25q21D7.js";const i="/assets/4681bb38c618a6135be39f486cc0e9b9-eXa-0Aq8-eXa-0Aq8.jpg",a={},r=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>title: 05-所有权
 
author: 黑静美

category: 
    - 编程
tag:
    - rust
icon: /img/Rust.ico
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 3
comment: true
lastUpdated: true
editLink: false
backToTop: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="所有权" tabindex="-1"><a class="header-anchor" href="#所有权"><span>所有权</span></a></h1><p>今天我们来讲讲 Rust 语言设计的出发点——所有权。Rust 的核心功能（之一）是 <strong>所有权</strong>（<em>ownership</em>）。 在第一节课中，我们了解了 Rust 语言里的值有两大类：一类是固定内存长度（简称固定尺寸）的值，比如 i32、u32、由固定尺寸的类型组成的结构体等；另一类是不固定内存长度（简称非固定尺寸）的值，比如字符串 String。这两种值的本质特征完全不一样。而<strong>怎么处理这两种值的差异，往往是语言设计的差异性所在。</strong></p><p>就拿数字类型来说，C、C++、Java 这些语言就明确定义了数字类型会占用内存中的几个字节，比如 8 位，也就是一个字节，16 位，也就是两个字节。而 JavaScript 这种语言，就完全屏蔽了底层的细节，统一用一个 Number 表示数字。Python 则给出了 int 整数、float 浮点、complex 复数三种数字类型。</p><p>Rust 语言因为在设计时就定位为一门通用的编程语言（对标 C++），它的应用范围很广，从最底层的嵌入式开发、OS 开发，到最上层的 Web 应用开发，它都要兼顾。所以它的数字类型不可避免地就得暴露出具体的字节数，于是就有了 i8、i16、i32、i64 等类型。</p><p>前面我们说到，一种类型如果具有固定尺寸，那么它就能够在编译期做更多的分析。实际上固定尺寸类型也可以用来管理非固定尺寸类型。具体来说，Rust 中的非固定尺寸类型就是靠指针或引用来指向，而指针或引用本身就是一种固定尺寸的类型。</p><h2 id="_1-栈与堆" tabindex="-1"><a class="header-anchor" href="#_1-栈与堆"><span>1. 栈与堆</span></a></h2><p>现代计算机会把内存划分为很多个区。比如，二进制代码的存放区、静态数据的存放区、栈、堆等。</p><p>栈上的操作比堆高效，因为栈上内存的分配和回收只需移动栈顶指针就行了。这就决定了分配和回收时都必须精确计算这个指针的增减量，因此<strong>栈上一般放固定尺寸的值</strong>。另一方面，栈的容量也是非常有限的，因此也不适合放尺寸太大的值，比如一个有 1000 万个元素的数组。</p><p>那么非固定尺寸的值怎么处理呢？在计算机体系架构里面，专门在内存中拿出一大块区域来存放这类值，这个区域就叫“堆”。</p><h2 id="_2-栈空间与堆空间" tabindex="-1"><a class="header-anchor" href="#_2-栈空间与堆空间"><span>2. 栈空间与堆空间</span></a></h2><p>在一般的程序语言设计中，栈空间都会与函数关联起来。每一个函数的调用，都会对应一个帧，也叫做 frame 栈帧，就像图片栈空间里的方块 main、fn1、fn2 等。一个函数被调用，就会分配一个新的帧，函数调用结束后，这个帧就会被自动释放掉。因此<strong>栈帧是一个运行时的事物</strong>。函数中的参数、局部变量之类的资源，都会放在这个帧里面，比如图里 fn2 中的局部变量 a，这个帧释放时，这些局部变量就会被一起回收掉。</p><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2><p>当变量离开作用域后，Rust 自动调用 <code>drop</code> 函数并清理变量的堆内存。不过图 4-2 展示了两个数据指针指向了同一位置。这就有了一个问题：当 <code>s2</code> 和 <code>s1</code> 离开作用域，它们都会尝试释放相同的内存。这是一个叫做 <strong>二次释放</strong>（<em>double free</em>）的错误，也是之前提到过的内存安全性 bug 之一。两次释放（相同）内存会导致内存污染，它可能会导致潜在的安全漏洞。</p><p>为了确保内存安全，在 <code>let s2 = s1;</code> 之后，Rust 认为 <code>s1</code> 不再有效，因此 Rust 不需要在 <code>s1</code> 离开作用域后清理任何东西。看看在 <code>s2</code> 被创建之后尝试使用 <code>s1</code> 会发生什么；这段代码不能运行：</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code>    <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> s2 <span class="token operator">=</span> s1<span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}, world!&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你会得到一个类似如下的错误，因为 Rust 禁止你使用无效的引用。</p><div class="language-console line-numbers-mode" data-ext="console" data-title="console"><pre class="language-console"><code>$ cargo run
   Compiling ownership v0.1.0 (file:///projects/ownership)
error[E0382]: borrow of moved value: \`s1\`
 --&gt; src/main.rs:5:28
  |
2 |     let s1 = String::from(&quot;hello&quot;);
  |         -- move occurs because \`s1\` has type \`String\`, which does not implement the \`Copy\` trait
3 |     let s2 = s1;
  |              -- value moved here
4 |
5 |     println!(&quot;{}, world!&quot;, s1);
  |                            ^^ value borrowed here after move
  |
  = note: this error originates in the macro \`$crate::format_args_nl\` which comes from the expansion of the macro \`println\` (in Nightly builds, run with -Z macro-backtrace for more info)

For more information about this error, try \`rustc --explain E0382\`.
error: could not compile \`ownership\` due to previous error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上内容摘编自：https://bornforthis.cn/column/Rust/02.html（著作权归AI悦创所有）</p><hr><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span></span></a></h1>`,22),l=[r];function o(c,d){return n(),s("div",null,l)}const m=e(a,[["render",o],["__file","note5.html.vue"]]),v=JSON.parse('{"path":"/zh/Lilya/program/Rust/note5.html","title":"所有权","lang":"zh-CN","frontmatter":{"description":"所有权 今天我们来讲讲 Rust 语言设计的出发点——所有权。Rust 的核心功能（之一）是 所有权（ownership）。 在第一节课中，我们了解了 Rust 语言里的值有两大类：一类是固定内存长度（简称固定尺寸）的值，比如 i32、u32、由固定尺寸的类型组成的结构体等；另一类是不固定内存长度（简称非固定尺寸）的值，比如字符串 String。这两种...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/Rust/note5.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"所有权"}],["meta",{"property":"og:description","content":"所有权 今天我们来讲讲 Rust 语言设计的出发点——所有权。Rust 的核心功能（之一）是 所有权（ownership）。 在第一节课中，我们了解了 Rust 语言里的值有两大类：一类是固定内存长度（简称固定尺寸）的值，比如 i32、u32、由固定尺寸的类型组成的结构体等；另一类是不固定内存长度（简称非固定尺寸）的值，比如字符串 String。这两种..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-17T18:44:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T18:44:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"所有权\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T18:44:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":1,"title":"所有权","slug":"所有权","link":"#所有权","children":[{"level":2,"title":"1. 栈与堆","slug":"_1-栈与堆","link":"#_1-栈与堆","children":[]},{"level":2,"title":"2. 栈空间与堆空间","slug":"_2-栈空间与堆空间","link":"#_2-栈空间与堆空间","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}]},{"level":1,"title":"","slug":"-1","link":"#-1","children":[]}],"git":{"createdTime":1713379477000,"updatedTime":1713379477000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":4.13,"words":1240},"filePathRelative":"zh/Lilya/program/Rust/note5.md","localizedDate":"2024年4月17日","excerpt":"<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>title: 05-所有权\\n \\nauthor: 黑静美\\n\\ncategory: \\n    - 编程\\ntag:\\n    - rust\\nicon: /img/Rust.ico\\nsticky: false\\nstar: false\\narticle: true\\ntimeline: true\\nimage: false\\nnavbar: true\\nsidebarIcon: true\\nheaderDepth: 3\\ncomment: true\\nlastUpdated: true\\neditLink: false\\nbackToTop: true\\n\\n</code></pre></div>","autoDesc":true}');export{m as comp,v as data};
