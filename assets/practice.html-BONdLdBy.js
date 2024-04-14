import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e}from"./app-C6NhHoFt.js";const t={},p=e(`<h2 id="if条件" tabindex="-1"><a class="header-anchor" href="#if条件"><span>if条件</span></a></h2><h3 id="question-连续整数序列判断" tabindex="-1"><a class="header-anchor" href="#question-连续整数序列判断"><span>Question 连续整数序列判断</span></a></h3><p><strong>描述</strong>:给定三个整数,编写一个程序来检查它们是否形成一个连续的整数序列.</p><p><strong>示例输入</strong>:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token number">3</span> <span class="token number">2</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例输出</strong>:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>Yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="question-奇偶性和正负性组合判断" tabindex="-1"><a class="header-anchor" href="#question-奇偶性和正负性组合判断"><span>Question 奇偶性和正负性组合判断</span></a></h3><p>描述:输入两个整数,编写一个程序来判断它们的奇偶性和正负性,并输出以下其中一个结果:</p><ul><li>Both numbers are positive and even.</li><li>Both numbers are positive and odd.</li><li>Both numbers are negative and even.</li><li>Both numbers are negative and odd.</li><li>One number is positive and even, while the other is positive and odd.</li></ul><p>示例输入:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token number">4</span> <span class="token operator">-</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例输出:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>One number is positive and even<span class="token punctuation">,</span> <span class="token keyword">while</span> the other is negative and odd<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="question-日期有效性检查" tabindex="-1"><a class="header-anchor" href="#question-日期有效性检查"><span>Question 日期有效性检查</span></a></h3><p>描述:输入一个日期(由日、月和年组成),检查其是否是有效的.考虑平年和闰年.请注意,你只需要使用 if 语句,并且不需要使用其他知识点. 示例输入:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token number">29</span> <span class="token number">2</span> <span class="token number">2023</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例输出:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>Invalid date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2><p>求和问题： 编写一个程序，使用 for 循环计算从 1 到 100 的所有整数的和。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>    <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> i <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sum = %d\\n&quot;</span><span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印乘法表： 使用 for 循环打印一个 10x10 的乘法表。每一行显示的是一个数字（从 1 到 10）与 1 到 10 的每个数相乘的结果。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> multi<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        multi <span class="token operator">=</span> j <span class="token operator">*</span> i<span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d * %d = %d\\t&quot;</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> i<span class="token punctuation">,</span> multi<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出偶数： 编写一个程序，使用 for 循环找出并打印 1 到 100 之间的所有偶数。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算阶乘： 编写一个程序来计算一个给定数（例如 5）的阶乘。阶乘表示为 n!，是所有小于等于 n 的正整数的乘积。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        x <span class="token operator">*=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;n! = %d\\n&quot;</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印星号图案： 使用 for 循环打印一个直角三角形星号图案。用户可以指定三角形的行数。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请给出三角形的行数\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;* &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),o=[p];function i(c,l){return a(),s("div",null,o)}const d=n(t,[["render",i],["__file","practice.html.vue"]]),k=JSON.parse('{"path":"/Lilya/program/C/C-02-Condition-and-Loop/practice.html","title":"练习","lang":"en-US","frontmatter":{"title":"练习","author":"Lilya 黑静美","isOriginal":true,"category":["编程"],"tag":["C","C#"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"if条件 Question 连续整数序列判断 描述:给定三个整数,编写一个程序来检查它们是否形成一个连续的整数序列. 示例输入: 示例输出: Question 奇偶性和正负性组合判断 描述:输入两个整数,编写一个程序来判断它们的奇偶性和正负性,并输出以下其中一个结果: Both numbers are positive and even. Both n...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/C/C-02-Condition-and-Loop/practice.html"}],["link",{"rel":"alternate","hreflang":"ger-de","href":"https://github.com/Heijingmei/Heijingmei.github.io/de/Lilya/program/C/C-02-Condition-and-Loop/practice.html"}],["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/Lilya/program/C/C-02-Condition-and-Loop/practice.html"}],["meta",{"property":"og:site_name","content":"BH_English Version"}],["meta",{"property":"og:title","content":"练习"}],["meta",{"property":"og:description","content":"if条件 Question 连续整数序列判断 描述:给定三个整数,编写一个程序来检查它们是否形成一个连续的整数序列. 示例输入: 示例输出: Question 奇偶性和正负性组合判断 描述:输入两个整数,编写一个程序来判断它们的奇偶性和正负性,并输出以下其中一个结果: Both numbers are positive and even. Both n..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ger-De"}],["meta",{"property":"og:updated_time","content":"2024-04-14T00:05:28.000Z"}],["meta",{"property":"article:author","content":"Lilya 黑静美"}],["meta",{"property":"article:tag","content":"C"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:modified_time","content":"2024-04-14T00:05:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"练习\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T00:05:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lilya 黑静美\\"}]}"]]},"headers":[{"level":2,"title":"if条件","slug":"if条件","link":"#if条件","children":[{"level":3,"title":"Question 连续整数序列判断","slug":"question-连续整数序列判断","link":"#question-连续整数序列判断","children":[]},{"level":3,"title":"Question 奇偶性和正负性组合判断","slug":"question-奇偶性和正负性组合判断","link":"#question-奇偶性和正负性组合判断","children":[]},{"level":3,"title":"Question  日期有效性检查","slug":"question-日期有效性检查","link":"#question-日期有效性检查","children":[]}]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":1713053128000,"updatedTime":1713053128000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":2.01,"words":602},"filePathRelative":"Lilya/program/C/C-02-Condition-and-Loop/practice.md","localizedDate":"April 14, 2024","excerpt":"<h2>if条件</h2>\\n<h3>Question 连续整数序列判断</h3>\\n<p><strong>描述</strong>:给定三个整数,编写一个程序来检查它们是否形成一个连续的整数序列.</p>\\n<p><strong>示例输入</strong>:</p>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token number\\">3</span> <span class=\\"token number\\">2</span> <span class=\\"token number\\">4</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,k as data};
