import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-DSxK65c9.js";const t={},p=e(`<h1 id="if条件判断" tabindex="-1"><a class="header-anchor" href="#if条件判断"><span>if条件判断</span></a></h1><p>条件表达式是用来执行不同的计算,key根据条件的结果(真true /假false)走不同的逻辑</p><h2 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句"><span>if语句</span></a></h2><p>if 语句被称为条件控制语句,因为它在一个表达式为真时执行语句.由于这个原因,if被称为<strong>决策结构</strong>.它的形式为:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>expression<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//code wiil be executed if the condition is true.</span>
    statements
        
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表达式-expression-为真或假-执行语句statement可以是" tabindex="-1"><a class="header-anchor" href="#表达式-expression-为真或假-执行语句statement可以是"><span>表达式<code>**expression**</code>为真或假,执行语句<code>statement</code>可以是</span></a></h3><h6 id="单个语句-分号" tabindex="-1"><a class="header-anchor" href="#单个语句-分号"><span>**单个语句; **(分号!!!)</span></a></h6><p>或者</p><h6 id="由-包围的代码块" tabindex="-1"><a class="header-anchor" href="#由-包围的代码块"><span><strong>由</strong><code>**{}**</code>**包围的代码块 **.</span></a></h6><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token keyword">int</span> score <span class="token operator">=</span> <span class="token number">89</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&gt;</span> <span class="token number">75</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;You passed.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上边语句中,我们检查<code>score</code>是否大于75.,如果为真,则打印一条消息.</p><p>填空 如果<code>a</code>大于<code>b</code>则打印&quot;<code>hello</code>&quot;</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token function">___</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span>___<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>if b</p></blockquote><p>获取用户输入,判断用户输入的是奇数还是偶数.</p><h3 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符"><span>关系运算符</span></a></h3><p>有 6 个关系运算符可以用来形成一个条件表达式(也称为布尔表达式),它返回真或假:</p><blockquote><p><code>&lt;</code>: 小于 <code>&lt;=</code>: 小于或等于 <code>&gt;=</code>: 大于 <code>=</code>: 大于或等于 <code>==</code>: 等于 <code>!=</code>: 不等于</p></blockquote><h2 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else"><span>if-else</span></a></h2><p>语句如果你想在条件为真时执行一个代码块,而在条件为假时执行另一个代码块,你可以使用 if-else. if 语句可以包括一个可选的 else 子句,当表达式为假时执行 else 语句. 语法:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// code to be executed if the condition is true</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// code to be executed if the condition is false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如,下面的程序先评估表达式,然后执行 else 子句:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> score <span class="token operator">=</span> <span class="token number">89</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&gt;=</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Top 10%%.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Less than 90.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>printf</code> 函数用于输出格式化文本.在格式化字符串中,<code>%</code> 符号通常用于指定变量的格式.然而,当我们需要在输出中直接显示一个 <code>%</code> 符号时,需要使用 <code>%%</code>.这是因为单个 <code>%</code> 符号会被解读为格式化指令的开始.</p><p>在代码中:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Top 10%%.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>%%</code> 将会在输出中显示为一个单独的 <code>%</code> 符号.所以,该行代码的输出将会是:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Top 10%.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这表示如果分数 <code>score</code> 是 90 或更高,程序将打印 &quot;Top 10%.&quot;.如果 <code>score</code> 小于 90,它将打印 &quot;Less than 90.&quot;.</p><h2 id="if-else-if-else-语句-多个条件" tabindex="-1"><a class="header-anchor" href="#if-else-if-else-语句-多个条件"><span>if - else if - else 语句(多个条件)</span></a></h2><h3 id="当你有多个-3个及以上-条件要检查时-可以用if-else-if-else" tabindex="-1"><a class="header-anchor" href="#当你有多个-3个及以上-条件要检查时-可以用if-else-if-else"><span>当你有多个(3个及以上)条件要检查时,可以用<code>if -else if -else</code>.</span></a></h3><p>语法:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">if</span><span class="token punctuation">(</span>condition1<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Code will be executed if c1 is true.</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>condition2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Code will be executed if c2 is true.</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">(</span>condistion3<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Code will be executed if c3 is true.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if( score &gt; 90) {
    printf(&quot; is greater than 90 \\n&quot;);
    }else if(score &gt; 80) {  //todo 因为if存在,所以实际上是 80 &lt; score &lt;= 90
        printf(&quot;The score is greater than 80 but less than or equal to 90. \\n&quot;);
    }else{
        printf(&quot;The score is 80 or less\\n&quot;);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在编写一个 if-else if 语句时,要仔细考虑其中的逻辑.程序逐个检测每个分支,并执行第一个表达式为真的语句,其余的表达式都不会被测试.尽管缩进不会影响编译后的代码,但当 else 语句对齐时,if-else if 的逻辑更易阅读理解. 填空,如果数字 num 为正数,则打印&quot;positive&quot;;如果 num 是负数,则打印 &quot;negative&quot;;否则就打印 &quot;zero&quot;.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">14</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;positive&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token function">___</span><span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;negative&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
___
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;zero&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个变量条件" tabindex="-1"><a class="header-anchor" href="#多个变量条件"><span>多个变量条件</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3<span class="token punctuation">,</span> max<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>maxVar <span class="token operator">=</span> <span class="token string">&quot;num1&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 用于记录最大值的变量名</span>

    <span class="token comment">// 获取用户输入</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入三个整数(用空格分隔): &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d %d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>num1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>num2<span class="token punctuation">,</span> <span class="token operator">&amp;</span>num3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化最大值为num1</span>
    max <span class="token operator">=</span> num1<span class="token punctuation">;</span>

    <span class="token comment">// 比较并找出最大值,同时记录是哪个变量</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num2 <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        max <span class="token operator">=</span> num2<span class="token punctuation">;</span>
        maxVar <span class="token operator">=</span> <span class="token string">&quot;num2&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num3 <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        max <span class="token operator">=</span> num3<span class="token punctuation">;</span>
        maxVar <span class="token operator">=</span> <span class="token string">&quot;num3&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 输出最大值及其变量名</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;最大的数是:%d (变量%s)\\n&quot;</span><span class="token punctuation">,</span> max<span class="token punctuation">,</span> maxVar<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:在可能的情况下,if-else if 语句比嵌套的 if 语句要好,这样更加清晰易懂.</p><h3 id="你可以在一个-if-语句内部使用-另一个if-语句⬇️" tabindex="-1"><a class="header-anchor" href="#你可以在一个-if-语句内部使用-另一个if-语句⬇️"><span>你可以在一个 if 语句内部使用 另一个if 语句⬇️</span></a></h3><h2 id="嵌套的-if-语句" tabindex="-1"><a class="header-anchor" href="#嵌套的-if-语句"><span>嵌套的 if 语句</span></a></h2><p>一个 if 语句可以包括另一个 if 语句,形成一个嵌套的条件语句.嵌套的 if 可以形成复杂的条件判断.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span>  <span class="token comment">// 包含标准输入输出库,用于printf等函数</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span>   <span class="token comment">// 包含时间处理的库,用于time和localtime等函数</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">time_t</span> current_time<span class="token punctuation">;</span>  <span class="token comment">// 声明一个time_t类型的变量来存储自1970年以来的秒数</span>
    <span class="token keyword">struct</span> <span class="token class-name">tm</span> <span class="token operator">*</span> time_info<span class="token punctuation">;</span>  <span class="token comment">// 声明一个指向tm结构的指针,用于存储本地时间信息</span>
    <span class="token keyword">char</span> time_string<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 声明一个字符数组,用于存储格式化的时间字符串</span>

    <span class="token comment">// 获取当前时间</span>
    <span class="token comment">// time函数接收一个指向time_t对象的指针,这里传入地址of current_time</span>
    <span class="token comment">// 如果传入NULL,函数会返回当前时间,但不会存储在current_time</span>
    <span class="token function">time</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>current_time<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 将当前时间(time_t类型)转换为本地时间(tm结构类型)</span>
    <span class="token comment">// localtime函数接收一个指向time_t对象的指针,并返回一个指向tm结构的指针</span>
    time_info <span class="token operator">=</span> <span class="token function">localtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>current_time<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用asctime函数将tm结构转换为字符串,并打印出来</span>
    <span class="token comment">// asctime接收一个指向tm结构的指针,返回一个指向字符串的指针,这个字符串包含了易读的日期和时间信息</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;当前日期和时间: %s&quot;</span><span class="token punctuation">,</span> <span class="token function">asctime</span><span class="token punctuation">(</span>time_info<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果只想打印时间,可以使用strftime函数</span>
    <span class="token comment">// strftime函数用于将时间格式化为指定的格式</span>
    <span class="token comment">// 这里格式是&quot;%H:%M:%S&quot;,意味着小时:分钟:秒</span>
    <span class="token comment">// time_string作为目标字符串,sizeof(time_string)限定最大字符数,time_info是提供日期和时间信息的tm结构</span>
    <span class="token function">strftime</span><span class="token punctuation">(</span>time_string<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>time_string<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;%H:%M:%S&quot;</span><span class="token punctuation">,</span> time_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间: %s\\n&quot;</span><span class="token punctuation">,</span> time_string<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 程序结束</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> username<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span> password<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入用户名和密码:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s %s&quot;</span><span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> <span class="token string">&quot;12345&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;登录成功\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;密码错误\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;用户名不存在\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Both conditions are true.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>填空</strong></p><p>补全嵌套if语句中缺失的部分,并打印相应的信息.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">37</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">22</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">___</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">___</span> <span class="token punctuation">(</span><span class="token string">&quot;x is greater than 22 and 31&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if</code> <code>printf</code></p><h2 id="条件表达式「三元操作符」" tabindex="-1"><a class="header-anchor" href="#条件表达式「三元操作符」"><span>条件表达式「三元操作符」</span></a></h2><p><strong>除了if-else,c语言还提供了一个有用的条件操作符,有时也被称为<a href="./note2">三元操作符</a>.</strong></p><blockquote><p><strong>另一种类似 if-else 语句的语法是在</strong>条件表达式<strong>中使用</strong><code>**?:**</code><strong>操作符.</strong></p></blockquote><p><code>?:</code>的使用方法为:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token operator">&lt;</span>表达式<span class="token number">1</span><span class="token operator">&gt;</span><span class="token operator">?</span><span class="token operator">&lt;</span>表达式<span class="token number">2</span><span class="token operator">&gt;</span><span class="token operator">:</span><span class="token operator">&lt;</span>表达式<span class="token number">3</span><span class="token operator">&gt;</span>
condition <span class="token operator">?</span>value_if_true <span class="token operator">:</span> value_if_not_true<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,55),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","note1.html.vue"]]),k=JSON.parse('{"path":"/zh/Lilya/program/C/C-02-Condition-and-Loop/note1.html","title":"1-if条件判断与循环控制","lang":"zh-CN","frontmatter":{"title":"1-if条件判断与循环控制","author":"Lilya 黑静美","isOriginal":true,"category":["编程"],"tag":["C","C#"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"if条件判断 条件表达式是用来执行不同的计算,key根据条件的结果(真true /假false)走不同的逻辑 if语句 if 语句被称为条件控制语句,因为它在一个表达式为真时执行语句.由于这个原因,if被称为决策结构.它的形式为: 表达式**expression**为真或假,执行语句statement可以是 **单个语句; **(分号!!!) 或者 由...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/Heijingmei/Heijingmei.github.io/Lilya/program/C/C-02-Condition-and-Loop/note1.html"}],["link",{"rel":"alternate","hreflang":"ger-de","href":"https://github.com/Heijingmei/Heijingmei.github.io/de/Lilya/program/C/C-02-Condition-and-Loop/note1.html"}],["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/C/C-02-Condition-and-Loop/note1.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"1-if条件判断与循环控制"}],["meta",{"property":"og:description","content":"if条件判断 条件表达式是用来执行不同的计算,key根据条件的结果(真true /假false)走不同的逻辑 if语句 if 语句被称为条件控制语句,因为它在一个表达式为真时执行语句.由于这个原因,if被称为决策结构.它的形式为: 表达式**expression**为真或假,执行语句statement可以是 **单个语句; **(分号!!!) 或者 由..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ger-De"}],["meta",{"property":"og:updated_time","content":"2024-04-05T16:07:17.000Z"}],["meta",{"property":"article:author","content":"Lilya 黑静美"}],["meta",{"property":"article:tag","content":"C"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:modified_time","content":"2024-04-05T16:07:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1-if条件判断与循环控制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-05T16:07:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lilya 黑静美\\"}]}"]]},"headers":[{"level":2,"title":"if语句","slug":"if语句","link":"#if语句","children":[{"level":3,"title":"表达式**expression**为真或假,执行语句statement可以是","slug":"表达式-expression-为真或假-执行语句statement可以是","link":"#表达式-expression-为真或假-执行语句statement可以是","children":[{"level":6,"title":"**单个语句; **(分号!!!)","slug":"单个语句-分号","link":"#单个语句-分号","children":[]},{"level":6,"title":"由**{}****包围的代码块 **.","slug":"由-包围的代码块","link":"#由-包围的代码块","children":[]}]},{"level":3,"title":"关系运算符","slug":"关系运算符","link":"#关系运算符","children":[]}]},{"level":2,"title":"if-else","slug":"if-else","link":"#if-else","children":[]},{"level":2,"title":"if  -  else if  -  else 语句(多个条件)","slug":"if-else-if-else-语句-多个条件","link":"#if-else-if-else-语句-多个条件","children":[{"level":3,"title":"当你有多个(3个及以上)条件要检查时,可以用if -else if -else.","slug":"当你有多个-3个及以上-条件要检查时-可以用if-else-if-else","link":"#当你有多个-3个及以上-条件要检查时-可以用if-else-if-else","children":[]},{"level":3,"title":"多个变量条件","slug":"多个变量条件","link":"#多个变量条件","children":[]},{"level":3,"title":"你可以在一个 if 语句内部使用 另一个if 语句⬇️","slug":"你可以在一个-if-语句内部使用-另一个if-语句⬇️","link":"#你可以在一个-if-语句内部使用-另一个if-语句⬇️","children":[]}]},{"level":2,"title":"嵌套的 if 语句","slug":"嵌套的-if-语句","link":"#嵌套的-if-语句","children":[]},{"level":2,"title":"条件表达式「三元操作符」","slug":"条件表达式「三元操作符」","link":"#条件表达式「三元操作符」","children":[]}],"git":{"createdTime":1711976878000,"updatedTime":1712333237000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":5}]},"readingTime":{"minutes":5.83,"words":1748},"filePathRelative":"zh/Lilya/program/C/C-02-Condition-and-Loop/note1.md","localizedDate":"2024年4月1日","excerpt":"\\n<p>条件表达式是用来执行不同的计算,key根据条件的结果(真true /假false)走不同的逻辑</p>\\n<h2>if语句</h2>\\n<p>if 语句被称为条件控制语句,因为它在一个表达式为真时执行语句.由于这个原因,if被称为<strong>决策结构</strong>.它的形式为:</p>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>expression<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">//code wiil be executed if the condition is true.</span>\\n    statements\\n        \\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,k as data};
