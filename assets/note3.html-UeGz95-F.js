import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-DCQpI7Ht.js";const t="/assets/1701603113235-0a2f85c5-4337-421c-acae-c91a40bd7805-DCbFX6E2.png",i="/assets/image-20240405215040893-DT4HPLCi.png",o={},c=e(`<h2 id="switch-结果与常量比较" tabindex="-1"><a class="header-anchor" href="#switch-结果与常量比较"><span>switch 结果与常量比较</span></a></h2><p>开关 switch 语句通过将表达式的<strong>结果</strong>与<strong>常量值</strong>进行比较来实现程序控制。</p><p><code>switch</code> 语句通常为 <code>if-else if</code>和<code>嵌套 if</code> 语句提供了一个更优雅的解决方案。</p><p>基本的 switch 语法为:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>expression<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> val1<span class="token operator">:</span>
        statements
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> val2<span class="token operator">:</span>
        statements
        <span class="token keyword">break</span><span class="token punctuation">;</span> 
    <span class="token keyword">default</span><span class="token operator">:</span>         <span class="token comment">//类似于if中的else</span>
        statements
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>哪个选项是 switch 开关语句的正确语法？</p><ul><li>[ ] A. switch test;</li><li>[ ] B. SWITCH test</li><li>[x] C. switch (test)</li></ul></blockquote><p>switch 可以有多个 case。 可选的默认 default 在没有其他匹配的情况下被执行。</p><p>每个 case 中都需要一个 break 语句，从而执行后跳出 switch 语句。</p><blockquote><p>⚠️注意 为什么需要break？——如果没有break， 则会在匹配之后执行后续的代码。代码示例如下：</p></blockquote><figure><img src="`+t+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="'+i+`" alt="image-20240405215040893" tabindex="0" loading="lazy"><figcaption>image-20240405215040893</figcaption></figure><p>如果没有 break 语句，程序的执行就会落到下一个 case 语句上。当多个 case 会执行相同逻辑，这一点很有用。考虑下面的 switch 语句： 以这种方式构建 switch 语句时，必须谨慎行事。之后的修改可能会导致意外的结果。</p><p>填空，测试变量 num 的值为3、5和42时，打印不同的文本。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token function">___</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a prime number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
___ <span class="token number">5</span><span class="token operator">:</span> 
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;another prime number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ___<span class="token punctuation">;</span>
<span class="token keyword">case</span> <span class="token number">42</span><span class="token operator">:</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;the meaning of life&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>switch case . break;</p></blockquote>`,15),p=[c];function l(r,d){return s(),a("div",null,p)}const k=n(o,[["render",l],["__file","note3.html.vue"]]),h=JSON.parse('{"path":"/zh/Lilya/program/C/C-02-Condition-and-Loop/note3.html","title":"3-switch","lang":"zh-CN","frontmatter":{"title":"3-switch","author":"Lilya 黑静美","isOriginal":true,"category":["编程"],"tag":["C","C#"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"switch 结果与常量比较 开关 switch 语句通过将表达式的结果与常量值进行比较来实现程序控制。 switch 语句通常为 if-else if和嵌套 if 语句提供了一个更优雅的解决方案。 基本的 switch 语法为: 哪个选项是 switch 开关语句的正确语法？ [ ] A. switch test; [ ] B. SWITCH tes...","head":[["link",{"rel":"alternate","hreflang":"ger-de","href":"https://github.com/Heijingmei/Heijingmei.github.io/de/Lilya/program/C/C-02-Condition-and-Loop/note3.html"}],["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/C/C-02-Condition-and-Loop/note3.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"3-switch"}],["meta",{"property":"og:description","content":"switch 结果与常量比较 开关 switch 语句通过将表达式的结果与常量值进行比较来实现程序控制。 switch 语句通常为 if-else if和嵌套 if 语句提供了一个更优雅的解决方案。 基本的 switch 语法为: 哪个选项是 switch 开关语句的正确语法？ [ ] A. switch test; [ ] B. SWITCH tes..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ger-De"}],["meta",{"property":"og:updated_time","content":"2024-04-14T00:08:01.000Z"}],["meta",{"property":"article:author","content":"Lilya 黑静美"}],["meta",{"property":"article:tag","content":"C"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:modified_time","content":"2024-04-14T00:08:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3-switch\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T00:08:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lilya 黑静美\\"}]}"]]},"headers":[{"level":2,"title":"switch 结果与常量比较","slug":"switch-结果与常量比较","link":"#switch-结果与常量比较","children":[]}],"git":{"createdTime":1713053281000,"updatedTime":1713053281000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":1.28,"words":384},"filePathRelative":"zh/Lilya/program/C/C-02-Condition-and-Loop/note3.md","localizedDate":"2024年4月14日","excerpt":"<h2>switch 结果与常量比较</h2>\\n<p>开关 switch 语句通过将表达式的<strong>结果</strong>与<strong>常量值</strong>进行比较来实现程序控制。</p>\\n<p><code>switch</code> 语句通常为 <code>if-else if</code>和<code>嵌套 if</code> 语句提供了一个更优雅的解决方案。</p>\\n<p>基本的 switch 语法为:</p>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token keyword\\">switch</span><span class=\\"token punctuation\\">(</span>expression<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">case</span> val1<span class=\\"token operator\\">:</span>\\n        statements\\n        <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">case</span> val2<span class=\\"token operator\\">:</span>\\n        statements\\n        <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span> \\n    <span class=\\"token keyword\\">default</span><span class=\\"token operator\\">:</span>         <span class=\\"token comment\\">//类似于if中的else</span>\\n        statements\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,h as data};
