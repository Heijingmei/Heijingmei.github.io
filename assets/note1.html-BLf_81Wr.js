import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e}from"./app-fPziIAf5.js";const t="/assets/image-20240416122646662-BBGnWA7Q.png",p="/assets/image-20240416100207349-B3EMgPai.png",o="/assets/image-20240416100740962-ChPprLfh.png",i="/assets/image-20240416121632963-qXWeNZfy.png",l="/assets/image-20240419155100018-BkBOas6q.png",c={},r=e(`<h1 id="来个传统" tabindex="-1"><a class="header-anchor" href="#来个传统"><span>来个传统</span></a></h1><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span> <span class="token string">&quot;hello word&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><details class="hint-container details"><summary>Python中的变量</summary><p>变量就是在内存中开辟空间。</p><p>每个变量用的是同一块内存空间，所以新一次改变变量（如：<strong>赋值</strong>），变量旧的属性被覆盖（新的值取代旧的值）。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment"># 1赋值给了x，x代表1</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">10</span> <span class="token comment"># x+10等价于 1+10，最后得出11，11赋值给x</span>
<span class="token comment"># 也就是说11 覆盖了 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># 打印x 结果：11</span>
<span class="token comment"># 用来注释（注意井号后面有空格）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">井号 # 用来注释，解释某一行代码的功能和作用</p></div></details><div class="hint-container info"><p class="hint-container-title">代码的运行逻辑：</p><p>从上到下，从右到左，最后才是赋值</p></div><p>也可以通过变量把一个变量的值直接赋给另一个变量</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>name1 <span class="token operator">=</span> <span class="token string">&quot;lilei&quot;</span>
name2 <span class="token operator">=</span> name1
<span class="token keyword">print</span><span class="token punctuation">(</span>name1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-输出print" tabindex="-1"><a class="header-anchor" href="#_1-输出print"><span>1.输出print</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-同时输出变量" tabindex="-1"><a class="header-anchor" href="#_1-同时输出变量"><span>1.同时输出变量</span></a></h3><p>python支持同一命令同时输出变量，<strong>默认</strong>以空格（占位字符）输出变量</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">2</span>
c <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>使用<code>sep =</code> 更改间隔的内容</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">2</span>
c <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span> sep <span class="token operator">=</span> <span class="token string">&quot;间隔&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><p>不同行的<code>print</code>默认输出换行</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用<code>end = </code>改变换行内容</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token string">&quot;结束&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token string">&quot;结束&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token string">&quot;结束&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><code>end</code> 可以和<code>sep</code>同时使用</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">2</span>
c <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;~&quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;love Python&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果将没有换行,如有需要添加<code>peint()</code>换行</p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',27),d=[r];function u(m,g){return a(),s("div",null,d)}const v=n(c,[["render",u],["__file","note1.html.vue"]]),y=JSON.parse('{"path":"/zh/Lilya/program/python/note1.html","title":"01-python第一课","lang":"zh-CN","frontmatter":{"title":"01-python第一课","author":"黑静美","isOriginal":true,"category":["编程"],"tag":["python"],"icon":"/img/Python.ico","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"来个传统 Python中的变量 变量就是在内存中开辟空间。 每个变量用的是同一块内存空间，所以新一次改变变量（如：赋值），变量旧的属性被覆盖（新的值取代旧的值）。 井号 # 用来注释，解释某一行代码的功能和作用 代码的运行逻辑： 从上到下，从右到左，最后才是赋值 也可以通过变量把一个变量的值直接赋给另一个变量 1.输出print 1.同时输出变量 py...","head":[["link",{"rel":"alternate","hreflang":"ger-de","href":"https://github.com/Heijingmei/Heijingmei.github.io/de/Lilya/program/python/note1.html"}],["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/python/note1.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"01-python第一课"}],["meta",{"property":"og:description","content":"来个传统 Python中的变量 变量就是在内存中开辟空间。 每个变量用的是同一块内存空间，所以新一次改变变量（如：赋值），变量旧的属性被覆盖（新的值取代旧的值）。 井号 # 用来注释，解释某一行代码的功能和作用 代码的运行逻辑： 从上到下，从右到左，最后才是赋值 也可以通过变量把一个变量的值直接赋给另一个变量 1.输出print 1.同时输出变量 py..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ger-De"}],["meta",{"property":"og:updated_time","content":"2024-04-19T13:51:54.000Z"}],["meta",{"property":"article:author","content":"黑静美"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:modified_time","content":"2024-04-19T13:51:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-python第一课\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T13:51:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"黑静美\\"}]}"]]},"headers":[{"level":1,"title":"来个传统","slug":"来个传统","link":"#来个传统","children":[{"level":2,"title":"1.输出print","slug":"_1-输出print","link":"#_1-输出print","children":[{"level":3,"title":"1.同时输出变量","slug":"_1-同时输出变量","link":"#_1-同时输出变量","children":[]}]}]}],"git":{"createdTime":1713534714000,"updatedTime":1713534714000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":1.39,"words":418},"filePathRelative":"zh/Lilya/program/python/note1.md","localizedDate":"2024年4月19日","excerpt":"\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">print</span> <span class=\\"token string\\">\\"hello word\\"</span>\\n</code></pre></div><figure><figcaption></figcaption></figure>\\n<hr>\\n<details class=\\"hint-container details\\"><summary>Python中的变量</summary>\\n<p>变量就是在内存中开辟空间。</p>\\n<p>每个变量用的是同一块内存空间，所以新一次改变变量（如：<strong>赋值</strong>），变量旧的属性被覆盖（新的值取代旧的值）。</p>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code>x <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span>  <span class=\\"token comment\\"># 1赋值给了x，x代表1</span>\\nx <span class=\\"token operator\\">=</span> x <span class=\\"token operator\\">+</span> <span class=\\"token number\\">10</span> <span class=\\"token comment\\"># x+10等价于 1+10，最后得出11，11赋值给x</span>\\n<span class=\\"token comment\\"># 也就是说11 覆盖了 1</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># 打印x 结果：11</span>\\n<span class=\\"token comment\\"># 用来注释（注意井号后面有空格）</span>\\n</code></pre></div><div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">井号 # 用来注释，解释某一行代码的功能和作用</p>\\n</div>\\n</details>","autoDesc":true}');export{v as comp,y as data};
