import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-C6NhHoFt.js";const p={},e=t(`<h2 id="指针和数组" tabindex="-1"><a class="header-anchor" href="#指针和数组"><span>指针和数组</span></a></h2><p>指针在数组中特别有用。</p><p>声明一个数组后就为其元素保留了一个连续的内存地址块。通过指针，可以指向数组第一个元素，然后使用地址运算来遍历数组。</p><ul><li><code>+</code>向前移动到一个内存位置</li><li><code>-</code>向后移动到一个内存位置</li></ul><p>请看下面的程序：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    ptr <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span>ptr <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tips 程序输出值为： 22 33 44 55 66 :::</p><p>数组的一个重要概念是：数组的一个重要的概念是：<strong>数组名</strong>作为一个<strong>指针</strong>已经指向了数组的第一个元素。 因此，</p><h6 id="语句int-ptr-a等价于int-ptr-a-0" tabindex="-1"><a class="header-anchor" href="#语句int-ptr-a等价于int-ptr-a-0"><span>语句<code>int *ptr = a</code>等价于<code>int *ptr = &amp;a[0]</code></span></a></h6><h6 id="语句printf-d-a-将打印数组的第一个元素" tabindex="-1"><a class="header-anchor" href="#语句printf-d-a-将打印数组的第一个元素"><span>语句<code>printf(&quot;&amp;d&quot;, *a)</code>将打印数组的第一个元素</span></a></h6><p>下面代码运行输出是？</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> a<span class="token punctuation">;</span>
<span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>ptr <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>44</p></blockquote><h3 id="更多地址运算" tabindex="-1"><a class="header-anchor" href="#更多地址运算"><span>更多地址运算</span></a></h3><p>地址运算也认为是指针运算，因为其操作涉及到指针。 除了使用 + 和 - 来指向下一个和上一个内存位置，你还可以使用赋值运算符来改变指针包含的地址。</p><p>例如：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        
    ptr <span class="token operator">=</span> a<span class="token punctuation">;</span>  <span class="token comment">/* point to the first array element */</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d  %x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">,</span> ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 22 */</span>
    ptr<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d  %x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">,</span> ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 33 */</span>
    ptr <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d  %x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">,</span> ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 66 */</span>
    ptr<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d  %x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">,</span> ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 55 */</span>
    ptr <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d  %x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">,</span> ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 33 */</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tips 22 +地址 33 +地址（接邻上边） 66 +地址 55 +地址 33 +地址 :::</p><blockquote><p>⚠️注意 你也可以使用<code>==</code>、<code>&lt;</code>和<code>&gt;</code>运算符来比较指针地址</p></blockquote><p>填空，使用自增运算符增加指针 ptr 并输出存储的值：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> ptr <span class="token operator">=</span> arr<span class="token punctuation">;</span>
ptr __<span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> ___<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>++ *ptr</p></blockquote><h2 id="指针及函数" tabindex="-1"><a class="header-anchor" href="#指针及函数"><span>指针及函数</span></a></h2><p>指针大大扩展了函数的特性。我们不再局限于返回一个值。使用指针参数，函数可以更改实际数据，而不是数据副本。 为了改变变量的实际值，调用语句将地址传递给函数中的指针参数。</p><p>例如，以下程序交换两个值：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>num1<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;x is %d, y is %d\\n&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token operator">&amp;</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;x is %d, y is %d\\n&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>num1<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp<span class="token punctuation">;</span>
    temp <span class="token operator">=</span> <span class="token operator">*</span>num1<span class="token punctuation">;</span>
    <span class="token operator">*</span>num1 <span class="token operator">=</span> <span class="token operator">*</span>num2<span class="token punctuation">;</span>
    <span class="token operator">*</span>num2 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="具有数组参数的函数" tabindex="-1"><a class="header-anchor" href="#具有数组参数的函数"><span>具有数组参数的函数</span></a></h2><p>数值不能通过值传递给函数。但是，数组名是一个指针，因此仅将数组名传递给函数就是将指针传递给函数。 <strong>请看下面程序：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">add_up</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> num_elements<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> orders<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//此处数组不能不固定长度</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Total orers is %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">add_up</span><span class="token punctuation">(</span>orders<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">add_up</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> num_elements<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> num_elements<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        total <span class="token operator">+=</span> a<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>471</p></blockquote><p>取最大值：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">max</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> num_elements<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> orders<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">366</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;The max  is %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">max</span><span class="token punctuation">(</span>orders<span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">max</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> num_elements<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> max <span class="token operator">=</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num_elements<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span>a<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            max <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>声明函数 foo()，该函数使用指针数组参数并返回 int 整数:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>___ <span class="token function">foo</span><span class="token punctuation">(</span><span class="token keyword">int</span> ___ arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>int *</p></blockquote><h6 id="练习-学习struct结构体后-可以用指针或数字分别和函数组合-表达链表机构" tabindex="-1"><a class="header-anchor" href="#练习-学习struct结构体后-可以用指针或数字分别和函数组合-表达链表机构"><span>练习：学习<code>struct</code>结构体后，可以用指针或数字分别和函数组合，表达链表机构</span></a></h6><h2 id="返回数组参数的函数" tabindex="-1"><a class="header-anchor" href="#返回数组参数的函数"><span>返回数组参数的函数</span></a></h2><p>就像一个数组的指针可以传入一个函数一样，一个数组的指针也可以被返回，如下面的程序:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">get_evens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">;</span>
    <span class="token keyword">int</span> k<span class="token punctuation">;</span>
    a <span class="token operator">=</span> <span class="token function">get_evens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>k<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;    %d&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">get_evens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> k<span class="token punctuation">;</span>
    <span class="token keyword">int</span> even <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>k<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        even <span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> even<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tips 请注意，声明了一个指针（而不是数组）来存储该函数返回的值。还要注意， 当从函数传递局部变量时， 需要在函数中将其声明为静态变量。 请记住，<code>a[k]</code> 与 <code>*(a + k)</code>相同。填空，声明一个返回 int 数组的函数: :::</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">___getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li></li></ul></blockquote>`,42),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","note7.html.vue"]]),d=JSON.parse('{"path":"/Lilya/program/C/C-03-Code-block/note7.html","title":"7-指针与函数与数组","lang":"en-US","frontmatter":{"title":"7-指针与函数与数组","author":"黑静美","isOriginal":true,"category":["编程"],"tag":["c","c#"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"指针和数组 指针在数组中特别有用。 声明一个数组后就为其元素保留了一个连续的内存地址块。通过指针，可以指向数组第一个元素，然后使用地址运算来遍历数组。 +向前移动到一个内存位置 -向后移动到一个内存位置 请看下面的程序： :::tips 程序输出值为： 22 33 44 55 66 ::: 数组的一个重要概念是：数组的一个重要的概念是：数组名作为一个指...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/Lilya/program/C/C-03-Code-block/note7.html"}],["meta",{"property":"og:site_name","content":"BH_English Version"}],["meta",{"property":"og:title","content":"7-指针与函数与数组"}],["meta",{"property":"og:description","content":"指针和数组 指针在数组中特别有用。 声明一个数组后就为其元素保留了一个连续的内存地址块。通过指针，可以指向数组第一个元素，然后使用地址运算来遍历数组。 +向前移动到一个内存位置 -向后移动到一个内存位置 请看下面的程序： :::tips 程序输出值为： 22 33 44 55 66 ::: 数组的一个重要概念是：数组的一个重要的概念是：数组名作为一个指..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-14T00:05:28.000Z"}],["meta",{"property":"article:author","content":"黑静美"}],["meta",{"property":"article:tag","content":"c"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:modified_time","content":"2024-04-14T00:05:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7-指针与函数与数组\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T00:05:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"黑静美\\"}]}"]]},"headers":[{"level":2,"title":"指针和数组","slug":"指针和数组","link":"#指针和数组","children":[{"level":6,"title":"语句int *ptr = a等价于int *ptr = &a[0]","slug":"语句int-ptr-a等价于int-ptr-a-0","link":"#语句int-ptr-a等价于int-ptr-a-0","children":[]},{"level":6,"title":"语句printf(\\"&d\\", *a)将打印数组的第一个元素","slug":"语句printf-d-a-将打印数组的第一个元素","link":"#语句printf-d-a-将打印数组的第一个元素","children":[]},{"level":3,"title":"更多地址运算","slug":"更多地址运算","link":"#更多地址运算","children":[]}]},{"level":2,"title":"指针及函数","slug":"指针及函数","link":"#指针及函数","children":[]},{"level":2,"title":"具有数组参数的函数","slug":"具有数组参数的函数","link":"#具有数组参数的函数","children":[{"level":6,"title":"练习：学习struct结构体后，可以用指针或数字分别和函数组合，表达链表机构","slug":"练习-学习struct结构体后-可以用指针或数字分别和函数组合-表达链表机构","link":"#练习-学习struct结构体后-可以用指针或数字分别和函数组合-表达链表机构","children":[]}]},{"level":2,"title":"返回数组参数的函数","slug":"返回数组参数的函数","link":"#返回数组参数的函数","children":[]}],"git":{"createdTime":1713053128000,"updatedTime":1713053128000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":3.62,"words":1086},"filePathRelative":"Lilya/program/C/C-03-Code-block/note7.md","localizedDate":"April 14, 2024","excerpt":"<h2>指针和数组</h2>\\n<p>指针在数组中特别有用。</p>\\n<p>声明一个数组后就为其元素保留了一个连续的内存地址块。通过指针，可以指向数组第一个元素，然后使用地址运算来遍历数组。</p>\\n<ul>\\n<li><code>+</code>向前移动到一个内存位置</li>\\n<li><code>-</code>向后移动到一个内存位置</li>\\n</ul>\\n<p>请看下面的程序：</p>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> a<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token number\\">22</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">33</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">44</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">55</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">66</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">int</span> <span class=\\"token operator\\">*</span>ptr <span class=\\"token operator\\">=</span> <span class=\\"token constant\\">NULL</span><span class=\\"token punctuation\\">;</span>\\n\\n    ptr <span class=\\"token operator\\">=</span> a<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d \\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">*</span><span class=\\"token punctuation\\">(</span>ptr <span class=\\"token operator\\">+</span> i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};
