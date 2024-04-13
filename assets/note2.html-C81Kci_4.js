import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-c593WojW.js";const e={},o=t(`<p><strong>C 语言的函数都支持递归</strong>, 也就是说，每个函数都可以直接或者间接第调用自己。 所谓的间接调用，是指在递归函数调用的<strong>下层函数中再调用自己</strong>。</p><p>考虑一个数字的阶乘，通常写为<code>5! = 5 * 4 * 3 * 2 * 1</code>。 也可以将此计算视为重复计算 <code>num*(num - 1)</code>,直到 <code>num</code>为 1 。 递归函数是一个调用其自身的函数，它包括一个<code>**退出条件**</code>⬆️，用于结束递归调用。</p><h6 id="for或while完成的循环" tabindex="-1"><a class="header-anchor" href="#for或while完成的循环"><span>for或while完成的循环</span></a></h6><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">factorial_while</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">factorial_for</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> num<span class="token punctuation">;</span>
    num <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d! = %lld\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">,</span> <span class="token function">factorial_while</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d! = %lld\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">,</span> <span class="token function">factorial_for</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">factorial_while</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">long</span> <span class="token keyword">long</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        result <span class="token operator">*=</span> n<span class="token punctuation">;</span>
        n<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>n <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">factorial_for</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">long</span> <span class="token keyword">long</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> n <span class="token operator">&gt;=</span> i<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">*=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="递归完成阶乘" tabindex="-1"><a class="header-anchor" href="#递归完成阶乘"><span>递归完成阶乘</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> <span class="token keyword">long</span> num<span class="token punctuation">;</span>
    num <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d! = %lld\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">,</span> <span class="token function">factorial</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">/*退出条件*/</span>
        <span class="token keyword">return</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">(</span>n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归的工作方式是&quot;堆叠&quot;调用，直到基本情况被执行。在这一点上，调用从最新的到最旧的完成。如上代码，阶乘调用栈类似 当达到退出条件时，factorial(1) 返回 1 触发堆叠调用的完成。</p><h6 id="递归函数需要一个基本退出条件-以防止出现无限循环。" tabindex="-1"><a class="header-anchor" href="#递归函数需要一个基本退出条件-以防止出现无限循环。"><span>递归函数需要一个基本退出条件，以防止出现无限循环。</span></a></h6><h6 id="从最新到最旧的返回值创建以下计算" tabindex="-1"><a class="header-anchor" href="#从最新到最旧的返回值创建以下计算"><span>从最新到最旧的返回值创建以下计算</span></a></h6><p>最后计算的（5 * 24），返回到调用函数 main()</p><blockquote><p>5 * factorial(4) factorial(4) 4 * factorial(3) factorial(3) 3 * factorial(2) factorial(2) 2 * factorial(1) factorial(1) 2*1</p></blockquote><h2 id="例-斐波那契" tabindex="-1"><a class="header-anchor" href="#例-斐波那契"><span>例 斐波那契</span></a></h2>`,12),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","note2.html.vue"]]),k=JSON.parse('{"path":"/zh/Lilya/program/C/C-03-Code-block/note2.html","title":"Please wait for some time! 敬请期待","lang":"zh-CN","frontmatter":{"title":"Please wait for some time! 敬请期待","author":"Lilya 黑静美","isOriginal":true,"category":["编程"],"tag":["c","c#"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"C 语言的函数都支持递归, 也就是说，每个函数都可以直接或者间接第调用自己。 所谓的间接调用，是指在递归函数调用的下层函数中再调用自己。 考虑一个数字的阶乘，通常写为5! = 5 * 4 * 3 * 2 * 1。 也可以将此计算视为重复计算 num*(num - 1),直到 num为 1 。 递归函数是一个调用其自身的函数，它包括一个**退出条件**⬆...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/C/C-03-Code-block/note2.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"Please wait for some time! 敬请期待"}],["meta",{"property":"og:description","content":"C 语言的函数都支持递归, 也就是说，每个函数都可以直接或者间接第调用自己。 所谓的间接调用，是指在递归函数调用的下层函数中再调用自己。 考虑一个数字的阶乘，通常写为5! = 5 * 4 * 3 * 2 * 1。 也可以将此计算视为重复计算 num*(num - 1),直到 num为 1 。 递归函数是一个调用其自身的函数，它包括一个**退出条件**⬆..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T21:31:09.000Z"}],["meta",{"property":"article:author","content":"Lilya 黑静美"}],["meta",{"property":"article:tag","content":"c"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:modified_time","content":"2024-04-13T21:31:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Please wait for some time! 敬请期待\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T21:31:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lilya 黑静美\\"}]}"]]},"headers":[{"level":6,"title":"for或while完成的循环","slug":"for或while完成的循环","link":"#for或while完成的循环","children":[]},{"level":2,"title":"递归完成阶乘","slug":"递归完成阶乘","link":"#递归完成阶乘","children":[{"level":6,"title":"递归函数需要一个基本退出条件，以防止出现无限循环。","slug":"递归函数需要一个基本退出条件-以防止出现无限循环。","link":"#递归函数需要一个基本退出条件-以防止出现无限循环。","children":[]},{"level":6,"title":"从最新到最旧的返回值创建以下计算","slug":"从最新到最旧的返回值创建以下计算","link":"#从最新到最旧的返回值创建以下计算","children":[]}]},{"level":2,"title":"例 斐波那契","slug":"例-斐波那契","link":"#例-斐波那契","children":[]}],"git":{"createdTime":1713043869000,"updatedTime":1713043869000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":1.55,"words":465},"filePathRelative":"zh/Lilya/program/C/C-03-Code-block/note2.md","localizedDate":"2024年4月13日","excerpt":"<p><strong>C 语言的函数都支持递归</strong>, 也就是说，每个函数都可以直接或者间接第调用自己。\\n所谓的间接调用，是指在递归函数调用的<strong>下层函数中再调用自己</strong>。</p>\\n<p>考虑一个数字的阶乘，通常写为<code>5! = 5 * 4 * 3 * 2 * 1</code>。\\n也可以将此计算视为重复计算 <code>num*(num - 1)</code>,直到 <code>num</code>为 1 。\\n递归函数是一个调用其自身的函数，它包括一个<code>**退出条件**</code>⬆️，用于结束递归调用。</p>\\n<h6>for或while完成的循环</h6>","autoDesc":true}');export{d as comp,k as data};
