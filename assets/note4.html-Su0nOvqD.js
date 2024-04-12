import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-BJf-UfZK.js";const p={},e=t(`<h2 id="二维数组的概念" tabindex="-1"><a class="header-anchor" href="#二维数组的概念"><span>二维数组的概念</span></a></h2><p>二维数组是数组的数组，可以认为是一个表格。也可以吧二维数组看成国际象棋棋盘、城市街区等的网络。</p><table><thead><tr><th>arr[0][0]</th><th>arr[0][1]</th><th>arr[0][2]</th><th>arr[0][3]</th><th></th></tr></thead><tbody><tr><td>arr[1][0]</td><td>arr[1][1]</td><td>arr[1][2]</td><td>arr[1][3]</td><td></td></tr><tr><td>arr[2][0]</td><td>arr[2][1]</td><td>arr[2][2]</td><td>arr[2][3]</td><td></td></tr></tbody></table><p>以上为3 X 4的二维表格</p><h2 id="二维数组的声明" tabindex="-1"><a class="header-anchor" href="#二维数组的声明"><span>二维数组的声明</span></a></h2><h6 id="二维数组声明需要给出行数和列数" tabindex="-1"><a class="header-anchor" href="#二维数组声明需要给出行数和列数"><span>二维数组声明需要给出行数和列数</span></a></h6><p>比如：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>嵌套花括号<code>{}</code>用于<strong>逐行</strong>初始化元素，如下：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以采用以下形式</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::tips 前者提供了更清晰的可视化阵列结构 :::</p><hr><p>打印数组：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span>  <span class="token function">print_arr</span><span class="token punctuation">(</span><span class="token keyword">int</span> rows<span class="token punctuation">,</span> <span class="token keyword">int</span> cols<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span>
            <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">print_arr</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span>  <span class="token function">print_arr</span><span class="token punctuation">(</span><span class="token keyword">int</span> rows<span class="token punctuation">,</span> <span class="token keyword">int</span> cols<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> cols<span class="token punctuation">;</span> j <span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">!=</span> cols <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;    &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><blockquote><p>⚠️注意</p></blockquote><h2 id="一个数组可以有两个以上的维度" tabindex="-1"><a class="header-anchor" href="#一个数组可以有两个以上的维度"><span>一个数组可以有两个以上的维度</span></a></h2><blockquote><p>例如：</p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 声明并初始化一个三维数组</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>
            <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token punctuation">{</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// ... 可以继续添加更多的初始化值</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 以示例方式打印数组中的某个值</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a[1][2][3] = %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: a[1][2][3] = 24</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tips a[5][3][4] 是一个有 5 个元素的数组，每个元素存储 3 个元素，且这三个元素的每个元素又存储 4 个元素。 :::</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>填空，下面二维数组有多少个元素？</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>2 x 5 = 10</p></blockquote><h2 id="访问二维数组" tabindex="-1"><a class="header-anchor" href="#访问二维数组"><span>访问二维数组</span></a></h2><p>要访问二维数组的元素，需要行索引和列索引。</p><p>例如，以下语句打印元素的值，然后分配一个新值：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span>
            <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Element 3 in row 2 is %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*20*/</span>
    a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;The new element 3 in row 2 is %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*25*/</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就像 for 循环遍历一维数组一样，嵌套的 for 循环用来遍历二维数组</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> k<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
    <span class="token comment">/* 打印数组内容 */</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot; %d&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>求和：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">sum_fn</span><span class="token punctuation">(</span><span class="token keyword">int</span> row<span class="token punctuation">,</span> <span class="token keyword">int</span> col<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//todo 注意二维数值的声明</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Sum：%d&quot;</span><span class="token punctuation">,</span> <span class="token function">sum_fn</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">sum_fn</span><span class="token punctuation">(</span><span class="token keyword">int</span> row<span class="token punctuation">,</span> <span class="token keyword">int</span> col<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> col<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组旋转" tabindex="-1"><a class="header-anchor" href="#数组旋转"><span>数组旋转</span></a></h2>`,36),o=[e];function c(u,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","note4.html.vue"]]),d=JSON.parse('{"path":"/zh/Lilya/program/C/C-03-Code-block/note4.html","title":"4-二维数组","lang":"zh-CN","frontmatter":{"title":"4-二维数组","author":"Lilya 黑静美","isOriginal":true,"category":["编程"],"tag":["c","c#"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"二维数组的概念 二维数组是数组的数组，可以认为是一个表格。也可以吧二维数组看成国际象棋棋盘、城市街区等的网络。 以上为3 X 4的二维表格 二维数组的声明 二维数组声明需要给出行数和列数 比如： 嵌套花括号{}用于逐行初始化元素，如下： 也可以采用以下形式 :::tips 前者提供了更清晰的可视化阵列结构 ::: 打印数组： ⚠️注意 一个数组可以有两...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/C/C-03-Code-block/note4.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"4-二维数组"}],["meta",{"property":"og:description","content":"二维数组的概念 二维数组是数组的数组，可以认为是一个表格。也可以吧二维数组看成国际象棋棋盘、城市街区等的网络。 以上为3 X 4的二维表格 二维数组的声明 二维数组声明需要给出行数和列数 比如： 嵌套花括号{}用于逐行初始化元素，如下： 也可以采用以下形式 :::tips 前者提供了更清晰的可视化阵列结构 ::: 打印数组： ⚠️注意 一个数组可以有两..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T13:18:35.000Z"}],["meta",{"property":"article:author","content":"Lilya 黑静美"}],["meta",{"property":"article:tag","content":"c"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:modified_time","content":"2024-04-12T13:18:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4-二维数组\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T13:18:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lilya 黑静美\\"}]}"]]},"headers":[{"level":2,"title":"二维数组的概念","slug":"二维数组的概念","link":"#二维数组的概念","children":[]},{"level":2,"title":"二维数组的声明","slug":"二维数组的声明","link":"#二维数组的声明","children":[{"level":6,"title":"二维数组声明需要给出行数和列数","slug":"二维数组声明需要给出行数和列数","link":"#二维数组声明需要给出行数和列数","children":[]}]},{"level":2,"title":"一个数组可以有两个以上的维度","slug":"一个数组可以有两个以上的维度","link":"#一个数组可以有两个以上的维度","children":[]},{"level":2,"title":"访问二维数组","slug":"访问二维数组","link":"#访问二维数组","children":[]},{"level":2,"title":"数组旋转","slug":"数组旋转","link":"#数组旋转","children":[]}],"git":{"createdTime":1712927915000,"updatedTime":1712927915000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":2.48,"words":744},"filePathRelative":"zh/Lilya/program/C/C-03-Code-block/note4.md","localizedDate":"2024年4月12日","excerpt":"<h2>二维数组的概念</h2>\\n<p>二维数组是数组的数组，可以认为是一个表格。也可以吧二维数组看成国际象棋棋盘、城市街区等的网络。</p>\\n<table>\\n<thead>\\n<tr>\\n<th>arr[0][0]</th>\\n<th>arr[0][1]</th>\\n<th>arr[0][2]</th>\\n<th>arr[0][3]</th>\\n<th></th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>arr[1][0]</td>\\n<td>arr[1][1]</td>\\n<td>arr[1][2]</td>\\n<td>arr[1][3]</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>arr[2][0]</td>\\n<td>arr[2][1]</td>\\n<td>arr[2][2]</td>\\n<td>arr[2][3]</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{r as comp,d as data};
