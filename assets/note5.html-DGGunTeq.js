import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-Et2yoYA8.js";const t={},o=e(`<p>do-while 进入循环时不做检查，先在循环中执行一次之后再来检查循环的条件是否满足，若满足则进行下一次的循环，否则退出循环。 它的语法为：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
    statements
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>expression<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表达式评估为真或假，语句可以是单个语句或由大括号<code>{}</code>包围的代码块。例如：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token comment">//count = 1</span>
    <span class="token comment">//count = 2</span>
    <span class="token comment">//count = 3</span>
    <span class="token comment">//count = 4</span>
    <span class="token comment">//count = 5</span>
    <span class="token comment">//count = 6</span>
    <span class="token comment">//count = 7</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;count = %d\\n&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    count <span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>count<span class="token operator">&lt;</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当评估为假时仍执行一次：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


    <span class="token comment">//count = 1</span>
    <span class="token keyword">do</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;count = %d\\n&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        count <span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>count<span class="token operator">&lt;</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//todo 注意分号</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 while 后面的分号<code>；</code>。 <strong>do-while</strong>循环总是至少执行一次</p><blockquote><p>⚠️注意 <strong>do-while</strong>与<strong>while</strong>的区别： 进行检查循环条件的位置不同。</p></blockquote><p>下面代码，会打印多少次 count 变量?</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>[ ] A. 1</li><li>[x] B. 7</li><li>[ ] C. 8</li></ul>`,11),i=[o];function p(c,l){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","note5.html.vue"]]),m=JSON.parse('{"path":"/zh/Lilya/program/C/C-02-Condition-and-Loop/note5.html","title":"5-do_while循环","lang":"zh-CN","frontmatter":{"title":"5-do_while循环","author":"Lilya 黑静美","isOriginal":true,"category":["编程"],"tag":["C","C#"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"do-while 进入循环时不做检查，先在循环中执行一次之后再来检查循环的条件是否满足，若满足则进行下一次的循环，否则退出循环。 它的语法为： 表达式评估为真或假，语句可以是单个语句或由大括号{}包围的代码块。例如： 当评估为假时仍执行一次： 注意 while 后面的分号；。 do-while循环总是至少执行一次 ⚠️注意 do-while与while...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/Heijingmei/Heijingmei.github.io/Lilya/program/C/C-02-Condition-and-Loop/note5.html"}],["link",{"rel":"alternate","hreflang":"ger-de","href":"https://github.com/Heijingmei/Heijingmei.github.io/de/Lilya/program/C/C-02-Condition-and-Loop/note5.html"}],["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/C/C-02-Condition-and-Loop/note5.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"5-do_while循环"}],["meta",{"property":"og:description","content":"do-while 进入循环时不做检查，先在循环中执行一次之后再来检查循环的条件是否满足，若满足则进行下一次的循环，否则退出循环。 它的语法为： 表达式评估为真或假，语句可以是单个语句或由大括号{}包围的代码块。例如： 当评估为假时仍执行一次： 注意 while 后面的分号；。 do-while循环总是至少执行一次 ⚠️注意 do-while与while..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ger-De"}],["meta",{"property":"og:updated_time","content":"2024-04-13T16:02:27.000Z"}],["meta",{"property":"article:author","content":"Lilya 黑静美"}],["meta",{"property":"article:tag","content":"C"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:modified_time","content":"2024-04-13T16:02:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5-do_while循环\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T16:02:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lilya 黑静美\\"}]}"]]},"headers":[],"git":{"createdTime":1713024147000,"updatedTime":1713024147000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":0.95,"words":285},"filePathRelative":"zh/Lilya/program/C/C-02-Condition-and-Loop/note5.md","localizedDate":"2024年4月13日","excerpt":"<p>do-while 进入循环时不做检查，先在循环中执行一次之后再来检查循环的条件是否满足，若满足则进行下一次的循环，否则退出循环。\\n它的语法为：</p>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token keyword\\">do</span> <span class=\\"token punctuation\\">{</span>\\n    statements\\n<span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>expression<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n</code></pre></div>","autoDesc":true}');export{d as comp,m as data};