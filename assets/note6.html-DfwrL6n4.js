import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as t}from"./app-DIJTfBGT.js";const e={},p=t(`<p>for 语句是一个循环结构，它执行固定次数的循环</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">for</span><span class="token punctuation">(</span>initvalue<span class="token punctuation">;</span> condition<span class="token punctuation">;</span> increment<span class="token punctuation">)</span><span class="token punctuation">{</span>
    statements<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:</p><h6 id="initvalue" tabindex="-1"><a class="header-anchor" href="#initvalue"><span>initvalue :</span></a></h6><p>一个设置为<strong>初始值</strong>的计算器，这部分<strong>for</strong>循环只执行一次</p><h6 id="condition" tabindex="-1"><a class="header-anchor" href="#condition"><span>condition：</span></a></h6><p>一个布尔表达式，每次循环前将<strong>计数器</strong>和一个值进行比较，当返回值为<strong>假</strong>时停止循环</p><h6 id="increment" tabindex="-1"><a class="header-anchor" href="#increment"><span>increment：</span></a></h6><p>将计数器增加（或减少）设定的值。举例：</p><h3 id="例子1-找出-0-到-10-之间的第一个能被-3-和-5-同时整除的数字。" tabindex="-1"><a class="header-anchor" href="#例子1-找出-0-到-10-之间的第一个能被-3-和-5-同时整除的数字。"><span>例子1：找出 0 到 10 之间的第一个能被 3 和 5 同时整除的数字。</span></a></h3><p>使用 break 使循环在找到符合条件的数字后立即停止。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;第一个能被3和5同时整除的数字是：%d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印0到9</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> max<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> max<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[p];function i(c,l){return a(),s("div",null,o)}const d=n(e,[["render",i],["__file","note6.html.vue"]]),k=JSON.parse('{"path":"/zh/Lilya/program/C/C-02-Condition-and-Loop/note6.html","title":"6-for","lang":"zh-CN","frontmatter":{"title":"6-for","author":"黑静美","isOriginal":true,"category":["编程"],"tag":["C","cpp","C井"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"for 语句是一个循环结构，它执行固定次数的循环 : initvalue : 一个设置为初始值的计算器，这部分for循环只执行一次 condition： 一个布尔表达式，每次循环前将计数器和一个值进行比较，当返回值为假时停止循环 increment： 将计数器增加（或减少）设定的值。举例： 例子1：找出 0 到 10 之间的第一个能被 3 和 5 同时...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/C/C-02-Condition-and-Loop/note6.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"6-for"}],["meta",{"property":"og:description","content":"for 语句是一个循环结构，它执行固定次数的循环 : initvalue : 一个设置为初始值的计算器，这部分for循环只执行一次 condition： 一个布尔表达式，每次循环前将计数器和一个值进行比较，当返回值为假时停止循环 increment： 将计数器增加（或减少）设定的值。举例： 例子1：找出 0 到 10 之间的第一个能被 3 和 5 同时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-13T18:00:53.000Z"}],["meta",{"property":"article:author","content":"黑静美"}],["meta",{"property":"article:tag","content":"C"}],["meta",{"property":"article:tag","content":"cpp"}],["meta",{"property":"article:tag","content":"C井"}],["meta",{"property":"article:modified_time","content":"2024-06-13T18:00:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6-for\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-13T18:00:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"黑静美\\"}]}"]]},"headers":[{"level":6,"title":"initvalue :","slug":"initvalue","link":"#initvalue","children":[]},{"level":6,"title":"condition：","slug":"condition","link":"#condition","children":[]},{"level":6,"title":"increment：","slug":"increment","link":"#increment","children":[]},{"level":3,"title":"例子1：找出 0 到 10 之间的第一个能被 3 和 5 同时整除的数字。","slug":"例子1-找出-0-到-10-之间的第一个能被-3-和-5-同时整除的数字。","link":"#例子1-找出-0-到-10-之间的第一个能被-3-和-5-同时整除的数字。","children":[]}],"git":{"createdTime":1718301653000,"updatedTime":1718301653000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":0.95,"words":284},"filePathRelative":"zh/Lilya/program/C/C-02-Condition-and-Loop/note6.md","localizedDate":"2024年6月13日","excerpt":"<p>for 语句是一个循环结构，它执行固定次数的循环</p>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span>initvalue<span class=\\"token punctuation\\">;</span> condition<span class=\\"token punctuation\\">;</span> increment<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    statements<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,k as data};
