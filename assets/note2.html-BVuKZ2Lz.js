import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e}from"./app-DCQpI7Ht.js";const t={},o=e(`<h2 id="「三元操作符」" tabindex="-1"><a class="header-anchor" href="#「三元操作符」"><span>「三元操作符」</span></a></h2><p><strong>除了if-else，c语言还提供了一个有用的条件操作符，有时也被称为三元操作符。</strong></p><blockquote><p><strong>另一种类似 if-else 语句的语法是在</strong>条件表达式<strong>中使用</strong><code>**?:**</code><strong>操作符。</strong></p></blockquote><p><code>?:</code>的使用方法为:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token operator">&lt;</span>表达式<span class="token number">1</span><span class="token operator">&gt;</span>？<span class="token operator">&lt;</span>表达式<span class="token number">2</span><span class="token operator">&gt;</span><span class="token operator">:</span><span class="token operator">&lt;</span>表达式<span class="token number">3</span><span class="token operator">&gt;</span>
condition ？value_if_true <span class="token operator">:</span> value_if_not_true<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> y<span class="token punctuation">;</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

    y <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">5</span> <span class="token operator">:</span> x<span class="token punctuation">;</span>
    <span class="token comment">/* if(x &gt;= 5){
           y = 5;
       }else{
           y = x;
       }

    */</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习"><span>练习</span></a></h3><p>将以下语句用三元操作符表达</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> max<span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> y<span class="token punctuation">)</span><span class="token punctuation">{</span>
        max <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        max <span class="token operator">=</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[o];function i(c,l){return a(),s("div",null,p)}const u=n(t,[["render",i],["__file","note2.html.vue"]]),m=JSON.parse('{"path":"/zh/Lilya/program/C/C-02-Condition-and-Loop/note2.html","title":"2-三元操作符","lang":"zh-CN","frontmatter":{"title":"2-三元操作符","author":"Lilya 黑静美","isOriginal":true,"category":["编程"],"tag":["C","C#"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"「三元操作符」 除了if-else，c语言还提供了一个有用的条件操作符，有时也被称为三元操作符。 另一种类似 if-else 语句的语法是在条件表达式中使用**?:**操作符。 ?:的使用方法为: 练习 将以下语句用三元操作符表达","head":[["link",{"rel":"alternate","hreflang":"ger-de","href":"https://github.com/Heijingmei/Heijingmei.github.io/de/Lilya/program/C/C-02-Condition-and-Loop/note2.html"}],["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/C/C-02-Condition-and-Loop/note2.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"2-三元操作符"}],["meta",{"property":"og:description","content":"「三元操作符」 除了if-else，c语言还提供了一个有用的条件操作符，有时也被称为三元操作符。 另一种类似 if-else 语句的语法是在条件表达式中使用**?:**操作符。 ?:的使用方法为: 练习 将以下语句用三元操作符表达"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ger-De"}],["meta",{"property":"og:updated_time","content":"2024-04-14T00:08:01.000Z"}],["meta",{"property":"article:author","content":"Lilya 黑静美"}],["meta",{"property":"article:tag","content":"C"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:modified_time","content":"2024-04-14T00:08:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2-三元操作符\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T00:08:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lilya 黑静美\\"}]}"]]},"headers":[{"level":2,"title":"「三元操作符」","slug":"「三元操作符」","link":"#「三元操作符」","children":[{"level":3,"title":"练习","slug":"练习","link":"#练习","children":[]}]}],"git":{"createdTime":1713053281000,"updatedTime":1713053281000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":0.64,"words":193},"filePathRelative":"zh/Lilya/program/C/C-02-Condition-and-Loop/note2.md","localizedDate":"2024年4月14日","excerpt":"<h2>「三元操作符」</h2>\\n<p><strong>除了if-else，c语言还提供了一个有用的条件操作符，有时也被称为三元操作符。</strong></p>\\n<blockquote>\\n<p><strong>另一种类似 if-else 语句的语法是在</strong>条件表达式<strong>中使用</strong><code>**?:**</code><strong>操作符。</strong></p>\\n</blockquote>\\n<p><code>?:</code>的使用方法为:</p>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token operator\\">&lt;</span>表达式<span class=\\"token number\\">1</span><span class=\\"token operator\\">&gt;</span>？<span class=\\"token operator\\">&lt;</span>表达式<span class=\\"token number\\">2</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">:</span><span class=\\"token operator\\">&lt;</span>表达式<span class=\\"token number\\">3</span><span class=\\"token operator\\">&gt;</span>\\ncondition ？value_if_true <span class=\\"token operator\\">:</span> value_if_not_true<span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
