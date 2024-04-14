import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-DGtbKAIO.js";const t="/assets/1703512283448-2efbce83-fbaa-47ff-9d5b-794cd09c9713-hXigTBUw.png",p={},i=e(`<p>为避免不必要的修改，可以将部分代码独立成一个区块，这个区块可以以代码中的<code>函数</code>的形式表示</p><p><span style="color:grey;"><s>简而言之就是建立一个DLC</s></span></p><h1 id="什么是函数" tabindex="-1"><a class="header-anchor" href="#什么是函数"><span>什么是函数</span></a></h1><p>函数是 C 编程的核心，用于完成一系列子任务的程序解决方案。 至此，你已经知道每个 C 程序都包含一个<code>main()</code>函数，并且已熟悉 <code>printf()</code>函数。 你也可以创建自己的函数。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">funktion_name</span><span class="token punctuation">(</span>____x  <span class="token comment">/*声明变量（录入值）____为变量类型*/</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    ____y
    
    <span class="token keyword">return</span> y<span class="token punctuation">;</span> <span class="token comment">//返回值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：main函数因为直接被调用，所以不能随意规定录入值</p><h2 id="函数的特点" tabindex="-1"><a class="header-anchor" href="#函数的特点"><span>函数的特点：</span></a></h2><ul><li>是执行特定任务的代码块；</li><li>可以重复使用；</li><li>使程序易于测试；</li><li>可以在不更改<code>调用程序</code>的情况下进行修改；</li></ul><p>将 main() 分解为子任务，即使是简单的程序也更易于理解用功能实现的。</p><h2 id="「例」下面程序计算一个数字的平方" tabindex="-1"><a class="header-anchor" href="#「例」下面程序计算一个数字的平方"><span>「例」下面程序计算一个数字的平方：</span></a></h2><h3 id="例1-int" tabindex="-1"><a class="header-anchor" href="#例1-int"><span>例1. int **(){}</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//先声明函数---//</span>
                                <span class="token comment">//</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                    <span class="token comment">//</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span> result<span class="token punctuation">;</span>              <span class="token comment">//</span>
    x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>                      <span class="token comment">//</span>
    result <span class="token operator">=</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//</span>
    <span class="token comment">//result = x * x;__________ //</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;The x^2 is %d\\n&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> r <span class="token operator">=</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
    <span class="token keyword">return</span> r<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者（不推荐）： 0.</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> r <span class="token operator">=</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
    <span class="token keyword">return</span> r<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                   
    <span class="token keyword">int</span> x<span class="token punctuation">,</span> result<span class="token punctuation">;</span>              
    x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>                    
    result <span class="token operator">=</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>         
    <span class="token comment">//result = x * x;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;The x^2 is %d\\n&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>技巧 声明的函数代码行数过多，会影响代码可读性，不方便测试</p></blockquote><h3 id="_2-多个程序文件" tabindex="-1"><a class="header-anchor" href="#_2-多个程序文件"><span>2.多个程序文件：</span></a></h3><figure><img src="`+t+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h4 id="c-储存非main函数的其他函数" tabindex="-1"><a class="header-anchor" href="#c-储存非main函数的其他函数"><span>*.c （储存非main函数的其他函数）</span></a></h4><h4 id="h-头文件" tabindex="-1"><a class="header-anchor" href="#h-头文件"><span>*.h （头文件）</span></a></h4><p>在 C 语言中，<code>#endif</code> 是预处理指令的一部分，用于结束由 <code>#if</code>, <code>#ifdef</code>, 或 <code>#ifndef</code> 开始的条件编译部分。 在示例中，<code>#ifndef</code> 和 <code>#endif</code> 一起使用，形成了所谓的“包含卫士”（include guard）。包含卫士的作用是防止同一个头文件被多次包含（即重复包含）。</p><p>如何工作：</p><h5 id="ifndef-square-h" tabindex="-1"><a class="header-anchor" href="#ifndef-square-h"><span><code>**#ifndef SQUARE_H**</code>：</span></a></h5><ul><li>这行代码检查是否已经定义了名为 <code>SQUARE_H</code> 的宏。如果没有定义（即 &quot;if not defined&quot;），则编译器会继续编译 <code>#ifndef</code> 和相应的 <code>#endif</code> 之间的代码。</li></ul><h5 id="define-square-h" tabindex="-1"><a class="header-anchor" href="#define-square-h"><span><code>**#define SQUARE_H**</code>：</span></a></h5><ul><li>这行代码定义了一个名为 <code>SQUARE_H</code> 的宏。在后续的编译过程中，如果再次遇到对同一头文件的包含，<code>#ifndef SQUARE_H</code> 将评估为假，因为 <code>SQUARE_H</code> 已经定义了。</li></ul><h5 id="endif" tabindex="-1"><a class="header-anchor" href="#endif"><span><code>**#endif**</code>：</span></a></h5><ul><li>这标记了条件编译部分的结束。</li></ul><p>通过这种方式，即使头文件在同一编译单元中被多次包含（例如，通过不同的源文件或其他头文件间接包含），它的内容也只会被实际包含一次。这样可以防止重复定义和其他潜在的编译错误。</p><h2 id="声明函数" tabindex="-1"><a class="header-anchor" href="#声明函数"><span>声明函数</span></a></h2><p>声明通常出现在main()函数上方，形式如下：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>return_type <span class="token function">function_name</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>return_type</strong> : &quot;<code>_____</code>y&quot; 函数的返回值类型； <strong>funktion_name</strong>：函数名，后面有圆括号<code>()</code>； <strong>parameters</strong>：&quot;<code>_____x</code>&quot;带有声明类型的可选参数，放在括号内<code>()</code>;</p><blockquote><p>⚠️注意 当函数不需要返回值时，但在声明中仍然必须有一个返回类型。这种情况下，使用关键字<code>void</code>。 例如display_massege函数没有返回值：</p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">display_message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>C 程序必须至少具有一个 main() 的函数?</p><ul><li>[ ] A. 错误</li><li>[x] B. 正确</li></ul><h3 id="函数原型" tabindex="-1"><a class="header-anchor" href="#函数原型"><span>函数原型</span></a></h3><p>当声明中包含参数类型和名称时，该声明称为函数原型。 例如，square 函数原型出现在 main() 上面：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">/* 声明 */</span>
<span class="token keyword">int</span> <span class="token function">square</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span> result<span class="token punctuation">;</span>
    
    x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    result <span class="token operator">=</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d squared is %d\\n&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这里 square 函数<strong>返回</strong>一个整数，并<strong>接收</strong>一个 int 类型的参数。</p></blockquote><h3 id="定义功能" tabindex="-1"><a class="header-anchor" href="#定义功能"><span>定义功能</span></a></h3><p>最后一步实际上是定义功能。 函数的定义通常出现在 main() 函数之后。</p><p>下面的完整程序显示了 square 函数的声明和定义:</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">/* 函数声明 */</span>
<span class="token keyword">int</span> <span class="token function">square</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span> result<span class="token punctuation">;</span>
  
    x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    result <span class="token operator">=</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d squared is %d\\n&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 函数定义 */</span>
<span class="token keyword">int</span> <span class="token function">square</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> y<span class="token punctuation">;</span>

    y <span class="token operator">=</span> num <span class="token operator">*</span> num<span class="token punctuation">;</span>

    <span class="token keyword">return</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tips 正如你所见，square 函数<strong>计算并返回</strong>其参数的平方。 :::</p><p>一个函数可以接受多个参数--在这种情况下，它们必须用逗号 , 分隔。 return 语句将一个值返回给调用方。</p><p>填空，声明一个<code>triple</code>的函数，该函数带有一个<code>int</code>参数并返回其值乘以 3：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">triple</span> <span class="token punctuation">(</span>___ num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> y<span class="token punctuation">;</span>
    y <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>int</p></blockquote><h1 id="函数参数" tabindex="-1"><a class="header-anchor" href="#函数参数"><span>函数参数</span></a></h1><h2 id="按值传递参数" tabindex="-1"><a class="header-anchor" href="#按值传递参数"><span>按值传递参数</span></a></h2><p>在调用函数时, 大多数情况下，主调函数和被调函数之间有数据传递关系，这就是有参数的函数形式。函数参数的作用是传递数据给函数使用，函数利用接收的数据进行具体的操作处理。 默认情况下，参数按值传递，这意味着将数据副本提供给被调用函数的参数。 实际变量未传递到函数中，因此函数内修改参数的值不会更改到外部对应变量的值。 传递给函数的参数<strong>按位置与参数匹配</strong>。因此，<strong>第一个参数传递给第一个参数</strong>，第二个参数传递给第二个参数，依此类推。</p><p>下面的程序演示了按值传递（录入）参数： x、y传递给sum_up(当中的a、b)</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">sum_up</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> result<span class="token punctuation">;</span>
    x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    y <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
    result <span class="token operator">=</span> <span class="token function">sum_up</span><span class="token punctuation">(</span>x <span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d + %d = %d&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">sum_up</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    a <span class="token operator">+=</span> b<span class="token punctuation">;</span> <span class="token comment">// a ——&gt; a_1 </span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果： :::tips <strong>3 + 12 = 15</strong> :::</p><blockquote><p>⚠️注意 请注意，即使参数 x 的值在 sum_up 中被改变，main() 中参数 x 的值也没有改变，因为仅将其值(副本)传递到了参数 x 中。</p></blockquote><p>填空，声明带有两个 float 参数的函数 test()：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span> ___  a<span class="token punctuation">,</span> ___b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>float float</p></blockquote><h1 id="变量作用域-scope" tabindex="-1"><a class="header-anchor" href="#变量作用域-scope"><span>变量作用域 <code>Scope</code></span></a></h1><p>变量作用域（<code>Scope</code>），就是变量的有效范围，就是变量可以在哪个范围以内使用。有些变量可以在所有代码文件中使用，有些变量只能在当前的文件中使用，有些变量只能在函数内部使用，有些变量只能在 for 循环内部使用。</p><blockquote><p>变量的作用域是由变量定义的位置决定，在不同的位置定义的变量，它的作用域是不一样的</p></blockquote><ul><li>在函数内声明的变量是该代码块的局部变量，不能在函数外部引用。</li><li>在所有函数外部声明的变量是整个程序的全局变量。</li><li>例如，在程序顶部用 #define 声明的常量对整个程序可见。</li></ul><h6 id="define" tabindex="-1"><a class="header-anchor" href="#define"><span>#define</span></a></h6><h6 id="include-stdio-h" tabindex="-1"><a class="header-anchor" href="#include-stdio-h"><span>#include &lt;stdio.h&gt;</span></a></h6><h2 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量"><span>全局变量</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#include &lt;stdio.h&gt;

//全局变量
int global1 = 0;

int main() {
    //局部变量
    int local1, local2;
    local1 = 5;
    local2 = 10;
    global1 = local1 + local2;
    printf(&quot;%d\\n&quot;,global1);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存在到_ C _语言结束</p><h2 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量"><span>局部变量</span></a></h2><p>当参数传递给函数时，参数作为局部变量。在退出函数后，参数和函数中的任何<strong>局部变量</strong>都被销毁。</p><blockquote><p>⚠️注意 请谨慎使用全局变量。在使用它们之前，应先对其进行初始化，以避免意外结果。而且由于<strong>可以在程序中的任何地方更改它们</strong>，因此全局变量可能导致难以检测到错误(bug)。</p></blockquote><p>变量作用域指的是?</p><ul><li>[x] A. 程序中变量的有效可见范围</li><li>[ ] B. 程序中的变量数</li><li>[ ] C. 声明的函数数量</li></ul><h1 id="静态变量" tabindex="-1"><a class="header-anchor" href="#静态变量"><span>静态变量</span></a></h1><h6 id="static" tabindex="-1"><a class="header-anchor" href="#static"><span>static</span></a></h6><p>静态变量具有局部作用域，但在退出函数时<strong>不会被销毁</strong>。因此，静态变量将在程序生命周期内保留其值，并且每次重新输入该函数时都可以访问该静态变量。</p><blockquote><p>静态变量在声明时被初始化，并且需要用前缀static修饰。</p></blockquote><p>下面的程序使用了一个静态变量</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">say_hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">say_hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">say_hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//静态变量</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> num_calls <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello number %d\\n&quot;</span><span class="token punctuation">,</span> num_calls<span class="token punctuation">)</span><span class="token punctuation">;</span>
    num_calls<span class="token operator">++</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tips 如果没有声明静态变量，则不能完成“num_calls”的累加这一部 :::</p><p>填空，声明静态整数变量 var 并将其初始化为值1： ___ int var ___ 1;</p><blockquote><h1 id="static-1" tabindex="-1"><a class="header-anchor" href="#static-1"><span>static</span></a></h1></blockquote>`,82),c=[i];function l(o,u){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","note1.html.vue"]]),v=JSON.parse('{"path":"/zh/Lilya/program/C/C-03-Code-block/note1.html","title":"1-Function函数","lang":"zh-CN","frontmatter":{"title":"1-Function函数","author":"黑静美","isOriginal":true,"category":["编程"],"tag":["C","C++++"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"为避免不必要的修改，可以将部分代码独立成一个区块，这个区块可以以代码中的函数的形式表示 什么是函数 函数是 C 编程的核心，用于完成一系列子任务的程序解决方案。 至此，你已经知道每个 C 程序都包含一个main()函数，并且已熟悉 printf()函数。 你也可以创建自己的函数。 注：main函数因为直接被调用，所以不能随意规定录入值 函数的特点： 是...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/C/C-03-Code-block/note1.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"1-Function函数"}],["meta",{"property":"og:description","content":"为避免不必要的修改，可以将部分代码独立成一个区块，这个区块可以以代码中的函数的形式表示 什么是函数 函数是 C 编程的核心，用于完成一系列子任务的程序解决方案。 至此，你已经知道每个 C 程序都包含一个main()函数，并且已熟悉 printf()函数。 你也可以创建自己的函数。 注：main函数因为直接被调用，所以不能随意规定录入值 函数的特点： 是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T12:57:27.000Z"}],["meta",{"property":"article:author","content":"黑静美"}],["meta",{"property":"article:tag","content":"C"}],["meta",{"property":"article:tag","content":"C++++"}],["meta",{"property":"article:modified_time","content":"2024-04-14T12:57:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1-Function函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T12:57:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"黑静美\\"}]}"]]},"headers":[{"level":1,"title":"什么是函数","slug":"什么是函数","link":"#什么是函数","children":[{"level":2,"title":"函数的特点：","slug":"函数的特点","link":"#函数的特点","children":[]},{"level":2,"title":"「例」下面程序计算一个数字的平方：","slug":"「例」下面程序计算一个数字的平方","link":"#「例」下面程序计算一个数字的平方","children":[{"level":3,"title":"例1. int **(){}","slug":"例1-int","link":"#例1-int","children":[]},{"level":3,"title":"2.多个程序文件：","slug":"_2-多个程序文件","link":"#_2-多个程序文件","children":[{"level":4,"title":"*.c （储存非main函数的其他函数）","slug":"c-储存非main函数的其他函数","link":"#c-储存非main函数的其他函数","children":[]},{"level":4,"title":"*.h （头文件）","slug":"h-头文件","link":"#h-头文件","children":[{"level":5,"title":"**#ifndef SQUARE_H**：","slug":"ifndef-square-h","link":"#ifndef-square-h","children":[]},{"level":5,"title":"**#define SQUARE_H**：","slug":"define-square-h","link":"#define-square-h","children":[]},{"level":5,"title":"**#endif**：","slug":"endif","link":"#endif","children":[]}]}]}]},{"level":2,"title":"声明函数","slug":"声明函数","link":"#声明函数","children":[{"level":3,"title":"函数原型","slug":"函数原型","link":"#函数原型","children":[]},{"level":3,"title":"定义功能","slug":"定义功能","link":"#定义功能","children":[]}]}]},{"level":1,"title":"函数参数","slug":"函数参数","link":"#函数参数","children":[{"level":2,"title":"按值传递参数","slug":"按值传递参数","link":"#按值传递参数","children":[]}]},{"level":1,"title":"变量作用域 Scope","slug":"变量作用域-scope","link":"#变量作用域-scope","children":[{"level":6,"title":"#define","slug":"define","link":"#define","children":[]},{"level":6,"title":"#include <stdio.h>","slug":"include-stdio-h","link":"#include-stdio-h","children":[]},{"level":2,"title":"全局变量","slug":"全局变量","link":"#全局变量","children":[]},{"level":2,"title":"局部变量","slug":"局部变量","link":"#局部变量","children":[]}]},{"level":1,"title":"静态变量","slug":"静态变量","link":"#静态变量","children":[{"level":6,"title":"static","slug":"static","link":"#static","children":[]}]}],"git":{"createdTime":1713099447000,"updatedTime":1713099447000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":7.07,"words":2122},"filePathRelative":"zh/Lilya/program/C/C-03-Code-block/note1.md","localizedDate":"2024年4月14日","excerpt":"<p>为避免不必要的修改，可以将部分代码独立成一个区块，这个区块可以以代码中的<code>函数</code>的形式表示</p>\\n<p><span style=\\"color: grey\\"><s>简而言之就是建立一个DLC</s></span></p>\\n<h1>什么是函数</h1>\\n<p>函数是 C 编程的核心，用于完成一系列子任务的程序解决方案。\\n至此，你已经知道每个 C 程序都包含一个<code>main()</code>函数，并且已熟悉 <code>printf()</code>函数。\\n你也可以创建自己的函数。</p>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token keyword\\">int</span> <span class=\\"token function\\">funktion_name</span><span class=\\"token punctuation\\">(</span>____x  <span class=\\"token comment\\">/*声明变量（录入值）____为变量类型*/</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    ____y\\n    \\n    <span class=\\"token keyword\\">return</span> y<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//返回值</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,v as data};
