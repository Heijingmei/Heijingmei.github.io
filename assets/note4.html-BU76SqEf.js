import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c,a as n,b as s,d as t,e as l}from"./app-Cv-TnXS7.js";const i={},r={href:"https://bornforthis.cn/column/Rust/01.html",target:"_blank",rel:"noopener noreferrer"},u=l(`<h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h3><p>Rust 语言中自带单元测试和集成测试方案。我们来看一个示例，在 <code>src/lib.rs</code> 或 <code>src/main.rs</code> 下有一段代码。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">u32</span> <span class="token punctuation">{</span> <span class="token number">10u32</span> <span class="token punctuation">}</span>

<span class="token attribute attr-name">#[cfg(test)]</span>            <span class="token comment">// 这里配置测试模块</span>
<span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token module-declaration namespace"><span class="token punctuation">::</span>foo</span><span class="token punctuation">;</span>
     
    <span class="token attribute attr-name">#[test]</span>             <span class="token comment">// 具体的单元测试用例</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">it_works</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 调用被测试的函数或功能</span>
        <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token number">10u32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 断言</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目目录下运行 <code>cargo test</code>，会输出类似如下结果。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code>running <span class="token number">1</span> test
test <span class="token namespace">tests<span class="token punctuation">::</span></span>it_works <span class="token punctuation">...</span> ok
test result<span class="token punctuation">:</span> ok<span class="token punctuation">.</span> <span class="token number">1</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">.</span>00s

running <span class="token number">0</span> tests
test result<span class="token punctuation">:</span> ok<span class="token punctuation">.</span> <span class="token number">0</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">.</span>00s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rust 自带测试方案，让我们能够非常方便地写测试用例，并且统一了社区的测试设计规范。</p><h2 id="配置文件-cargo-toml" tabindex="-1"><a class="header-anchor" href="#配置文件-cargo-toml"><span>配置文件 Cargo.toml</span></a></h2><p>这节课开头的时候，我们简单介绍过 <code>Cargo.toml</code>，它是 Rust 语言包和依赖管理器 Cargo 的配置文件，由官方定义约定。写 Rust 代码基本都会按照这种约定来使用它，对所在工程进行配置。这里面其实包含的知识点非常多，后面实战的部分，我们会详细解释用到的特性。</p><p>我们要对包依赖这件事情的复杂度有所了解。不知道你有没有听说过 <strong>npm 依赖黑洞</strong>？指的就是 Node.js 的包依赖太多太琐碎了。这怪不得 Node.js，其实 Rust 也类似。包依赖这件事儿，本身就很复杂，可以说这是软件工程固有的复杂性。对固有复杂性，不能绕弯过，只能正面刚。</p>`,9),d={href:"https://doc.rust-lang.org/cargo/",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"思考题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思考题"},[n("span",null,"思考题")])],-1),m=n("ol",null,[n("li",null,"Rust 中能否实现类似 JS 中的 number 这种通用的数字类型呢？"),n("li",null,"Rust 中能否实现 Python 中那种无限大小的数字类型呢？")],-1),g=n("p",null,":::",-1);function b(h,f){const a=o("ExternalLinkIcon");return p(),c("div",null,[n("p",null,[s("本文部分摘编自："),n("a",r,[s("快速入门：Rust中有哪些你不得不了解的基础语法？"),t(a)]),s("（著作权归AI悦创所有）")]),u,n("p",null,[s("幸运的是，Cargo 工具已经帮我们搞定了包依赖相关方方面面的麻烦事（此刻 C++ 社区羡慕不已）。为了应对这种复杂性，Cargo 工具的提供了非常多的特性，配置起来也相对比较复杂。有兴趣的话，你可以详细了解一下"),n("a",d,[s("各种配置属性"),t(a)]),s("。")]),k,m,g])}const _=e(i,[["render",b],["__file","note4.html.vue"]]),R=JSON.parse('{"path":"/zh/Lilya/program/Rust/note4.html","title":"04-测试和Debug","lang":"zh-CN","frontmatter":{"title":"04-测试和Debug","author":"黑静美","category":["编程"],"tag":["rust"],"icon":"/ico/Rust.ico","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"本文部分摘编自：快速入门：Rust中有哪些你不得不了解的基础语法？（著作权归AI悦创所有） 测试 Rust 语言中自带单元测试和集成测试方案。我们来看一个示例，在 src/lib.rs 或 src/main.rs 下有一段代码。 在项目目录下运行 cargo test，会输出类似如下结果。 Rust 自带测试方案，让我们能够非常方便地写测试用例，并且统...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/Rust/note4.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"04-测试和Debug"}],["meta",{"property":"og:description","content":"本文部分摘编自：快速入门：Rust中有哪些你不得不了解的基础语法？（著作权归AI悦创所有） 测试 Rust 语言中自带单元测试和集成测试方案。我们来看一个示例，在 src/lib.rs 或 src/main.rs 下有一段代码。 在项目目录下运行 cargo test，会输出类似如下结果。 Rust 自带测试方案，让我们能够非常方便地写测试用例，并且统..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-03T08:57:01.000Z"}],["meta",{"property":"article:author","content":"黑静美"}],["meta",{"property":"article:tag","content":"rust"}],["meta",{"property":"article:modified_time","content":"2024-05-03T08:57:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04-测试和Debug\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-03T08:57:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"黑静美\\"}]}"]]},"headers":[{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"配置文件 Cargo.toml","slug":"配置文件-cargo-toml","link":"#配置文件-cargo-toml","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1714726621000,"updatedTime":1714726621000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":2.07,"words":622},"filePathRelative":"zh/Lilya/program/Rust/note4.md","localizedDate":"2024年5月3日","excerpt":"<p>本文部分摘编自：<a href=\\"https://bornforthis.cn/column/Rust/01.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">快速入门：Rust中有哪些你不得不了解的基础语法？</a>（著作权归AI悦创所有）</p>\\n<h3>测试</h3>\\n<p>Rust 语言中自带单元测试和集成测试方案。我们来看一个示例，在 <code>src/lib.rs</code> 或 <code>src/main.rs</code> 下有一段代码。</p>\\n<div class=\\"language-rust\\" data-ext=\\"rs\\" data-title=\\"rs\\"><pre class=\\"language-rust\\"><code><span class=\\"token keyword\\">fn</span> <span class=\\"token function-definition function\\">foo</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">-&gt;</span> <span class=\\"token keyword\\">u32</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token number\\">10u32</span> <span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token attribute attr-name\\">#[cfg(test)]</span>            <span class=\\"token comment\\">// 这里配置测试模块</span>\\n<span class=\\"token keyword\\">mod</span> <span class=\\"token module-declaration namespace\\">tests</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">use</span> <span class=\\"token keyword\\">crate</span><span class=\\"token module-declaration namespace\\"><span class=\\"token punctuation\\">::</span>foo</span><span class=\\"token punctuation\\">;</span>\\n     \\n    <span class=\\"token attribute attr-name\\">#[test]</span>             <span class=\\"token comment\\">// 具体的单元测试用例</span>\\n    <span class=\\"token keyword\\">fn</span> <span class=\\"token function-definition function\\">it_works</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">let</span> result <span class=\\"token operator\\">=</span> <span class=\\"token function\\">foo</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>           <span class=\\"token comment\\">// 调用被测试的函数或功能</span>\\n        <span class=\\"token macro property\\">assert_eq!</span><span class=\\"token punctuation\\">(</span>result<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10u32</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>    <span class=\\"token comment\\">// 断言</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{_ as comp,R as data};
