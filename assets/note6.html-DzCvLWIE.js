import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-DH3syj1R.js";const e={},o=t(`<h2 id="rc-t" tabindex="-1"><a class="header-anchor" href="#rc-t"><span><code>RC&lt;T&gt;</code></span></a></h2><p>由于rust的数据的所有权默认随着赋值（读取）而转移，但有时一个值会有多个所有者，为了<strong>支持多重所有权</strong>，我们使用：<code>RC&lt;T&gt;</code></p><p>比如数据需要被程序的多个部分读取(只读)，编译者无法确定哪个部分最后使用完这些数据时应该使用<code>RC&lt;T&gt;</code></p><h5 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h5><ul><li>支持多重所有权</li><li>只适用于单线程场景</li><li><code>RC&lt;T&gt;</code>不在预倒入模块</li></ul><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3><ul><li><code>Rc::clone(&amp;a)</code>: 增加引用计数</li><li><code>Rc::strong_count(&amp;a)</code>: 获得引用计数(强引用) <ul><li><code>Rc::weak_count</code>: 获得引用计数(弱引用)</li></ul></li></ul><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">enum</span> <span class="token type-definition class-name">List</span><span class="token punctuation">{</span>
    <span class="token class-name">Cons</span><span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span>list<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">use</span> <span class="token keyword">crate</span><span class="token punctuation">::</span><span class="token class-name">List</span><span class="token punctuation">::</span><span class="token punctuation">{</span><span class="token class-name">Cons</span><span class="token punctuation">,</span> <span class="token class-name">Nil</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token class-name">Cons</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span>
                 <span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">Cons</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span>
                               <span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">Nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token class-name">Cons</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token class-name">Cons</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[o];function c(l,i){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","note6.html.vue"]]),k=JSON.parse('{"path":"/zh/Lilya/program/Rust/note6.html","title":"06-多重所有权(RC<T>和)","lang":"zh-CN","frontmatter":{"title":"06-多重所有权(RC<T>和)","author":"黑静美","category":["编程"],"tag":["rust"],"icon":"/ico/Rust.ico","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"RC<T> 由于rust的数据的所有权默认随着赋值（读取）而转移，但有时一个值会有多个所有者，为了支持多重所有权，我们使用：RC<T> 比如数据需要被程序的多个部分读取(只读)，编译者无法确定哪个部分最后使用完这些数据时应该使用RC<T> 特点 支持多重所有权 只适用于单线程场景 RC<T>不在预倒入模块 Rc::clone(&a): 增加引用计数 R...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/Rust/note6.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"06-多重所有权(RC<T>和)"}],["meta",{"property":"og:description","content":"RC<T> 由于rust的数据的所有权默认随着赋值（读取）而转移，但有时一个值会有多个所有者，为了支持多重所有权，我们使用：RC<T> 比如数据需要被程序的多个部分读取(只读)，编译者无法确定哪个部分最后使用完这些数据时应该使用RC<T> 特点 支持多重所有权 只适用于单线程场景 RC<T>不在预倒入模块 Rc::clone(&a): 增加引用计数 R..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T09:24:46.000Z"}],["meta",{"property":"article:author","content":"黑静美"}],["meta",{"property":"article:tag","content":"rust"}],["meta",{"property":"article:modified_time","content":"2024-06-12T09:24:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06-多重所有权(RC<T>和)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T09:24:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"黑静美\\"}]}"]]},"headers":[{"level":2,"title":"RC<T>","slug":"rc-t","link":"#rc-t","children":[{"level":5,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]}],"git":{"createdTime":1718184286000,"updatedTime":1718184286000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":0.8,"words":240},"filePathRelative":"zh/Lilya/program/Rust/note6.md","localizedDate":"2024年6月12日","excerpt":"<h2><code>RC&lt;T&gt;</code></h2>\\n<p>由于rust的数据的所有权默认随着赋值（读取）而转移，但有时一个值会有多个所有者，为了<strong>支持多重所有权</strong>，我们使用：<code>RC&lt;T&gt;</code></p>\\n<p>比如数据需要被程序的多个部分读取(只读)，编译者无法确定哪个部分最后使用完这些数据时应该使用<code>RC&lt;T&gt;</code></p>\\n<h5>特点</h5>\\n<ul>\\n<li>支持多重所有权</li>\\n<li>只适用于单线程场景</li>\\n<li><code>RC&lt;T&gt;</code>不在预倒入模块</li>\\n</ul>","autoDesc":true}');export{d as comp,k as data};
