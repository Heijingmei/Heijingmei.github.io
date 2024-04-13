import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-c593WojW.js";const e={},p=t(`<h1 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符"><span>逻辑运算符</span></a></h1><h2 id="逻辑与-and-逻辑或-or" tabindex="-1"><a class="header-anchor" href="#逻辑与-and-逻辑或-or"><span><code>&amp;&amp;</code>:逻辑与(AND) <code>||</code>:逻辑或(OR)</span></a></h2><p>在 C 语言中,逻辑运算符用于比较两个或多个表达式,它们包括:</p><ul><li><code>&amp;&amp;</code>:逻辑与(AND)</li><li><code>||</code>:逻辑或(OR)</li><li><code>!</code>:逻辑非(NOT)</li></ul><blockquote><p>&amp;&amp;此运算符用于验证两个表达式是否都为真.如果都为真,则整个表达式的结果为真.如果其中一个或两者都为假,则整个表达式的结果为假.</p></blockquote><p>逻辑与运算符&amp;&amp;只有在两个表达式都为真时才会返回一个真结果. 例如:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span><span class="token number">5</span> <span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">//这样避免了嵌套</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Range(1 - 1OO).\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//该行代码由于不满足if的条件没有打印</span>
    <span class="token punctuation">}</span>
   


    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>逻辑运算符 &amp;&amp; 和 || 用于形成一个复合布尔表达式,测试多个组合条件.</p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>    <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> b <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Both conditions are true.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第三个逻辑运算符是 !,用于反转布尔表达式的结果. 用于验证两个表达式是否都为真.如果都为真,则整个表达式的结果为真.如果其中一个或两者都为假,则整个表达式的结果为假.</p></blockquote><p>逻辑与运算符&amp;&amp;只有在两个表达式都为真时才会返回一个真结果.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//这样可以合并两个if 减少代码</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token char">&#39;x&#39;</span> <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token char">&#39;X&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Raman numeral value 10.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如:</p><p>任何数量的表达式都可以用 &amp;&amp; 和 || 连接. 例如:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">999</span> <span class="token operator">||</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Input valid.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>填空,如果字符n等于&#39;x&#39;或&#39;X&#39; 则打印&quot;Roman&quot;.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token char">&#39;x&#39;</span> ___ n <span class="token operator">==</span> <span class="token char">&#39;X&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Roman&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>==</code></p><h2 id="逻辑非" tabindex="-1"><a class="header-anchor" href="#逻辑非"><span>逻辑非 (!)</span></a></h2><blockquote><p>此运算符用于反转表达式的逻辑值.如果表达式为真,则它会返回假,反之亦然.</p></blockquote><p>逻辑非运算符 ! 对结果进行取反. NOT true 返回 false,而 NOT false 返回 true.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> n <span class="token operator">=</span> <span class="token char">&#39;V&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token char">&#39;x&#39;</span> <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token char">&#39;X&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Roman numeral is not 10. \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a ist not equal to 6. \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>a <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a is not 0\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//在 C 语言中,任何非零值都被认为是真,0 是假. 因此,逻辑非运算符将真值转换为 0,假值转换为 1.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在 C 语言中,任何非零值都被认为是真,0 是假. 因此,逻辑非运算符将真值转换为 0,假值转换为 1.</p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">int</span> temperature <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">;</span>        <span class="token comment">// 假设温度是24°C</span>
    <span class="token keyword">int</span> isSunny <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>             <span class="token comment">// 假设天气是晴朗的(1表示真,0表示假)</span>
    <span class="token keyword">int</span> isRainy <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>temperature <span class="token operator">&gt;=</span> <span class="token number">20</span> <span class="token operator">&amp;&amp;</span> temperature <span class="token operator">&lt;=</span> <span class="token number">30</span> <span class="token operator">&amp;&amp;</span> isSunny<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;天气很好,建议您外出散步!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;或许您应该留在室内.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>isRainy<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;不用带伞\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>isRainy<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;逻辑非将假值（原本为0的值）转换为 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;出门记得得带伞\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","note0.html.vue"]]),k=JSON.parse('{"path":"/zh/Lilya/program/C/C-02-Condition-and-Loop/note0.html","title":"0-逻辑运算符","lang":"zh-CN","frontmatter":{"title":"0-逻辑运算符","author":"Lilya 黑静美","isOriginal":true,"category":["编程"],"tag":["C","C#"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"逻辑运算符 &&:逻辑与(AND) ||:逻辑或(OR) 在 C 语言中,逻辑运算符用于比较两个或多个表达式,它们包括: &&:逻辑与(AND) ||:逻辑或(OR) !:逻辑非(NOT) &&此运算符用于验证两个表达式是否都为真.如果都为真,则整个表达式的结果为真.如果其中一个或两者都为假,则整个表达式的结果为假. 逻辑与运算符&&只有在两个表达式都...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/Heijingmei/Heijingmei.github.io/Lilya/program/C/C-02-Condition-and-Loop/note0.html"}],["link",{"rel":"alternate","hreflang":"ger-de","href":"https://github.com/Heijingmei/Heijingmei.github.io/de/Lilya/program/C/C-02-Condition-and-Loop/note0.html"}],["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/C/C-02-Condition-and-Loop/note0.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"0-逻辑运算符"}],["meta",{"property":"og:description","content":"逻辑运算符 &&:逻辑与(AND) ||:逻辑或(OR) 在 C 语言中,逻辑运算符用于比较两个或多个表达式,它们包括: &&:逻辑与(AND) ||:逻辑或(OR) !:逻辑非(NOT) &&此运算符用于验证两个表达式是否都为真.如果都为真,则整个表达式的结果为真.如果其中一个或两者都为假,则整个表达式的结果为假. 逻辑与运算符&&只有在两个表达式都..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ger-De"}],["meta",{"property":"og:updated_time","content":"2024-04-13T21:31:09.000Z"}],["meta",{"property":"article:author","content":"Lilya 黑静美"}],["meta",{"property":"article:tag","content":"C"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:modified_time","content":"2024-04-13T21:31:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"0-逻辑运算符\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T21:31:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lilya 黑静美\\"}]}"]]},"headers":[{"level":1,"title":"逻辑运算符","slug":"逻辑运算符","link":"#逻辑运算符","children":[{"level":2,"title":"&&:逻辑与(AND) ||:逻辑或(OR)","slug":"逻辑与-and-逻辑或-or","link":"#逻辑与-and-逻辑或-or","children":[]},{"level":2,"title":"逻辑非 (!)","slug":"逻辑非","link":"#逻辑非","children":[]}]}],"git":{"createdTime":1713043869000,"updatedTime":1713043869000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":2.57,"words":772},"filePathRelative":"zh/Lilya/program/C/C-02-Condition-and-Loop/note0.md","localizedDate":"2024年4月13日","excerpt":"\\n<h2><code>&amp;&amp;</code>:逻辑与(AND) <code>||</code>:逻辑或(OR)</h2>\\n<p>在 C 语言中,逻辑运算符用于比较两个或多个表达式,它们包括:</p>\\n<ul>\\n<li><code>&amp;&amp;</code>:逻辑与(AND)</li>\\n<li><code>||</code>:逻辑或(OR)</li>\\n<li><code>!</code>:逻辑非(NOT)</li>\\n</ul>\\n<blockquote>\\n<p>&amp;&amp;此运算符用于验证两个表达式是否都为真.如果都为真,则整个表达式的结果为真.如果其中一个或两者都为假,则整个表达式的结果为假.</p>\\n</blockquote>","autoDesc":true}');export{d as comp,k as data};
