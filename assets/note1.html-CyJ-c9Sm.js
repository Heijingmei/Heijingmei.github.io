import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,e as s}from"./app-BwRM82Yt.js";const t="/assets/image-20240404213720744-B-Ifu7UH.png",l="/assets/image-20240404213816087-DGFNRMFr.png",i="/assets/image-20240329175640930-Dowh6sMl.png",p={},o=s(`<blockquote><p>markdown包含基础语法和<a href="">各种语法扩展</a></p><p>基础语法兼容html标记,可以<strong>直接用<a href="">html</a>语法</strong>对markdown进行编写,实现各种多媒体功能、排版、自体本身的变化,但是Markdown也有自己的语法,不同的编辑器的Markdown语法有细微差别,但总的来说都实现了对部分常用的html代码的简化.比如下边的标题:</p></blockquote><h1 id="_0-标题" tabindex="-1"><a class="header-anchor" href="#_0-标题"><span>0. 标题</span></a></h1><h2 id="二级" tabindex="-1"><a class="header-anchor" href="#二级"><span>二级</span></a></h2><p>标题的代码为:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 标题</span>
<span class="token title important"><span class="token punctuation">##</span> 二级</span>
<span class="token title important"><span class="token punctuation">###</span> 三级</span>
<span class="token title important"><span class="token punctuation">####</span> 四级</span>
<span class="token title important"><span class="token punctuation">#####</span> 五级</span>
<span class="token title important"><span class="token punctuation">######</span> 六级</span>
<span class="token title important"><span class="token punctuation">#######</span> 最多六级标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三级" tabindex="-1"><a class="header-anchor" href="#三级"><span>三级</span></a></h3><h4 id="四级" tabindex="-1"><a class="header-anchor" href="#四级"><span>四级</span></a></h4><h5 id="五级" tabindex="-1"><a class="header-anchor" href="#五级"><span>五级</span></a></h5><h6 id="六级" tabindex="-1"><a class="header-anchor" href="#六级"><span>六级</span></a></h6><p>####### 最多六级标题</p><hr><p>html代码是这样的:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>怎么样,<code>Markdown</code>是不是简单一些?</p><blockquote><p>接下来将继续介绍这类Markdown独有的语法和使用Markdown编辑器的独特的操作功能</p><blockquote><p>作者本人采用<code>Typora</code>进行编辑,以下首先介绍Typora的一些功能</p><blockquote><p>(之后会更新有关<code>Obsidian</code>、<code>Notion</code>细微差别于Typora的内容,其中新增的基础Markdown语法以及它们的扩展内容.当然,还会更新借助于我的网址的搭建平台<code>VuePress</code>以及使用模版<code>vuepress-theme-hope</code> 的内容(挖坑ing)</p></blockquote><p>例举一处细微差别,比如受到VuePress的title的影响,Markdown一级标题放在最开始会不显示:<a href="../note1">Markdown语法-0</a></p></blockquote></blockquote><h2 id="_1-非标题-分割线" tabindex="-1"><a class="header-anchor" href="#_1-非标题-分割线"><span>1.(非标题)分割线</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token hr punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="_2-无序标题" tabindex="-1"><a class="header-anchor" href="#_2-无序标题"><span>2. 无序标题</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li></li></ul><h2 id="二级无序标题" tabindex="-1"><a class="header-anchor" href="#二级无序标题"><span>二级无序标题</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再进行<code>tab键</code>缩进</p><ul><li>​ <ul><li>二级无序标题 <ul><li>三级无序标题</li></ul></li></ul></li></ul><h2 id="_3-有序标题" tabindex="-1"><a class="header-anchor" href="#_3-有序标题"><span>3. 有序标题</span></a></h2><p>任意(#)级标题/或正文内容+</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>1. 
2.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li></li><li></li></ol><h3 id="_1" tabindex="-1"><a class="header-anchor" href="#_1"><span>1.</span></a></h3><h3 id="_2" tabindex="-1"><a class="header-anchor" href="#_2"><span>2.</span></a></h3><h2 id="_4-图片" tabindex="-1"><a class="header-anchor" href="#_4-图片"><span>4. 图片</span></a></h2><p>图片基本格式:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>![alt]<span class="token punctuation">(</span>URL <span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>半角<code>!</code>+<code>[]</code>+<code>()</code>(与<a href="#_5-%E9%93%BE%E6%8E%A5%F0%9F%94%97">链接</a>格式类似)</p><p>alt和title即对应HTML中的alt和title属性(都可省略):</p><ul><li>alt表示图片显示失败时的替换文本</li><li>title表示鼠标悬停在图片时的显示文本(注意这里要加引号)</li></ul><p>可以按照以上方法填入相应的<code>url</code>路径获得图片</p><p>当图片在粘贴板时,直接粘贴即可</p><p>系统会生成一个同目录文件夹储存文件</p><figure><img src="`+t+'" alt="image-20240404213720744" tabindex="0" loading="lazy"><figcaption>image-20240404213720744</figcaption></figure><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>(请不要再套娃啦!!!!!!)</p><h2 id="_5-链接🔗" tabindex="-1"><a class="header-anchor" href="#_5-链接🔗"><span>5. 链接🔗</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[名称](网址)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[名称](文件夹目录)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>半角<code>!</code>+<code>[]</code>+<code>()</code>(与<a href="#_5-%E9%93%BE%E6%8E%A5%F0%9F%94%97">链接</a>格式类似)</p><h2 id="_6-表格" tabindex="-1"><a class="header-anchor" href="#_6-表格"><span>6. 表格</span></a></h2><h6 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h6><p>导航栏找到<code>段落</code> &gt;&gt; <code>表格</code>&gt;&gt;<code>插入表格</code></p><img src="`+i+`" alt="image-20240329175640930"><p>输入表格的行列(以下为2 x 2 表格)</p><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td></td><td></td></tr></tbody></table><p>######方法二</p><div class="language-||| line-numbers-mode" data-ext="|||" data-title="|||"><pre class="language-|||"><code>|标题|名称|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>标题</th><th>名称</th></tr></thead><tbody><tr><td></td><td></td></tr></tbody></table><h2 id="_7-公式" tabindex="-1"><a class="header-anchor" href="#_7-公式"><span>7.公式</span></a></h2><p>输入以下代码 <code>enter</code>进入公式模式 一般为**<u>latex</u>**公式</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>$$ f_(x) $$</p><h2 id="_8-字体" tabindex="-1"><a class="header-anchor" href="#_8-字体"><span>8. 字体</span></a></h2><h3 id="_8-1-ctrl相关" tabindex="-1"><a class="header-anchor" href="#_8-1-ctrl相关"><span>8.1. ctrl相关</span></a></h3><h5 id="包括-类" tabindex="-1"><a class="header-anchor" href="#包括-类"><span>包括 <code>*</code>类</span></a></h5><h6 id="加粗字体、斜体" tabindex="-1"><a class="header-anchor" href="#加粗字体、斜体"><span>加粗字体、斜体</span></a></h6><h5 id="和-构成的一类-和-构成的一类代码" tabindex="-1"><a class="header-anchor" href="#和-构成的一类-和-构成的一类代码"><span>[<code>&lt;&gt;</code>和 <code>&lt;/&gt;</code>构成的一类](#__<code>&lt;&gt;</code>和 <code>&lt;/&gt;</code>构成的一类代码)</span></a></h5><p>下划线</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>**加粗字体**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或使用<code>ctrl</code> + <code>b</code></p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token italic"><span class="token punctuation">*</span><span class="token content">斜体</span><span class="token punctuation">*</span></span>
ctrl + i 
<span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token italic"><span class="token punctuation">*</span><span class="token content">加粗斜体</span><span class="token punctuation">*</span></span></span><span class="token punctuation">**</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ctrl</code> +<code> i</code> 再<code> ctrl</code> +<code>b</code>(这两个没有先后顺序)</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;u&gt;下划线&lt;/u&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>ctrl</code> +<code> u</code> 再<code> ctrl</code> +<code>b</code></p><p><strong>加粗字体</strong></p><p><em>斜体</em></p><p><em><strong>加粗斜体</strong></em></p><p><u>下划线</u></p><h3 id="_8-2-变换字体颜色" tabindex="-1"><a class="header-anchor" href="#_8-2-变换字体颜色"><span>8.2. 变换字体颜色</span></a></h3><p>变化字体颜色同样也是</p><h6 id="和-构成的一类代码-和-构成的一类" tabindex="-1"><a class="header-anchor" href="#和-构成的一类代码-和-构成的一类"><span>[<code>&lt;&gt;</code>和 <code>&lt;/&gt;</code>构成的一类代码](#__<code>&lt;&gt;</code>和 <code>&lt;/&gt;</code>构成的一类)</span></a></h6><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color: orange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这句话的颜色会改变为橙色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><span style="color:orange;">这句话的颜色会改变为橙色</span></strong></p><hr><p>变为不常见颜色,此处就会用到html公式</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> grey</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>这句话的颜色会改变为一种灰色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> #808080</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>按照编码值,这和上面的灰色是一样的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> #ABABAB</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>这句话的颜色会改变为一种不常见的灰色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> #BFBFBF</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>这句话的颜色会改变为另一种不常见的灰色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:grey;">这句话的颜色会改变为一种灰色</span></p><p><span style="color:#808080;">按照编码值,这和上面的灰色是一样的</span></p><p><span style="color:#ABABAB;">这句话的颜色会改变为一种不常见的灰色</span></p><p><span style="color:#BFBFBF;">这句话的颜色会改变为另一种不常见的灰色</span></p><h3 id="_8-3-其他文本效果" tabindex="-1"><a class="header-anchor" href="#_8-3-其他文本效果"><span>8.3. 其他文本效果</span></a></h3><h4 id="方框" tabindex="-1"><a class="header-anchor" href="#方框"><span>方框</span></a></h4><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code-snippet code keyword">\`你要放入方框中的文本\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>你要放入方框中的文本</code></p><h4 id="竖线" tabindex="-1"><a class="header-anchor" href="#竖线"><span>竖线</span></a></h4><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote></blockquote><h4 id="打卡框" tabindex="-1"><a class="header-anchor" href="#打卡框"><span>打卡框</span></a></h4><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>按<code>空格</code>实现该效果</p><ul><li>[ ]</li></ul><p>如果按成回车会变成这样</p><ul><li>[ ]</li><li></li></ul><h2 id="_9-如何显示渲染前的文本效果" tabindex="-1"><a class="header-anchor" href="#_9-如何显示渲染前的文本效果"><span>9.如何显示渲染前的文本效果</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>ctrl + /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_10-部分功能需要借助插件" tabindex="-1"><a class="header-anchor" href="#_10-部分功能需要借助插件"><span>10.部分功能需要借助插件</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">//让你的 VuePress 站点中的 Markdown 文件支持脚注。</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
        footnote<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,105),c=[o];function d(r,u){return n(),e("div",null,c)}const k=a(p,[["render",d],["__file","note1.html.vue"]]),g=JSON.parse('{"path":"/zh/Lilya/program/Markdown/note1.html","title":"markdown-1-基础语法","lang":"zh-CN","frontmatter":{"title":"markdown-1-基础语法","isOriginal":true,"icon":"m","star":true,"category":["前端"],"tag":["markdownn","html","插件扩展"],"description":"markdown包含基础语法和各种语法扩展 基础语法兼容html标记,可以直接用html语法对markdown进行编写,实现各种多媒体功能、排版、自体本身的变化,但是Markdown也有自己的语法,不同的编辑器的Markdown语法有细微差别,但总的来说都实现了对部分常用的html代码的简化.比如下边的标题: 0. 标题 二级 标题的代码为: 三级 四...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/Heijingmei/Heijingmei.github.io/Lilya/program/Markdown/note1.html"}],["link",{"rel":"alternate","hreflang":"ger-de","href":"https://github.com/Heijingmei/Heijingmei.github.io/de/Lilya/program/Markdown/note1.html"}],["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/Markdown/note1.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"markdown-1-基础语法"}],["meta",{"property":"og:description","content":"markdown包含基础语法和各种语法扩展 基础语法兼容html标记,可以直接用html语法对markdown进行编写,实现各种多媒体功能、排版、自体本身的变化,但是Markdown也有自己的语法,不同的编辑器的Markdown语法有细微差别,但总的来说都实现了对部分常用的html代码的简化.比如下边的标题: 0. 标题 二级 标题的代码为: 三级 四..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ger-De"}],["meta",{"property":"og:updated_time","content":"2024-04-14T01:23:43.000Z"}],["meta",{"property":"article:tag","content":"markdownn"}],["meta",{"property":"article:tag","content":"html"}],["meta",{"property":"article:tag","content":"插件扩展"}],["meta",{"property":"article:modified_time","content":"2024-04-14T01:23:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"markdown-1-基础语法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T01:23:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":1,"title":"0. 标题","slug":"_0-标题","link":"#_0-标题","children":[{"level":2,"title":"二级","slug":"二级","link":"#二级","children":[{"level":3,"title":"三级","slug":"三级","link":"#三级","children":[{"level":4,"title":"四级","slug":"四级","link":"#四级","children":[{"level":5,"title":"五级","slug":"五级","link":"#五级","children":[{"level":6,"title":"六级","slug":"六级","link":"#六级","children":[]}]}]}]}]},{"level":2,"title":"1.(非标题)分割线","slug":"_1-非标题-分割线","link":"#_1-非标题-分割线","children":[]},{"level":2,"title":"2. 无序标题","slug":"_2-无序标题","link":"#_2-无序标题","children":[]},{"level":2,"title":"二级无序标题","slug":"二级无序标题","link":"#二级无序标题","children":[]},{"level":2,"title":"3. 有序标题","slug":"_3-有序标题","link":"#_3-有序标题","children":[{"level":3,"title":"1.","slug":"_1","link":"#_1","children":[]},{"level":3,"title":"2.","slug":"_2","link":"#_2","children":[]}]},{"level":2,"title":"4. 图片","slug":"_4-图片","link":"#_4-图片","children":[]},{"level":2,"title":"5. 链接🔗","slug":"_5-链接🔗","link":"#_5-链接🔗","children":[]},{"level":2,"title":"6. 表格","slug":"_6-表格","link":"#_6-表格","children":[{"level":6,"title":"方法一","slug":"方法一","link":"#方法一","children":[]}]},{"level":2,"title":"7.公式","slug":"_7-公式","link":"#_7-公式","children":[]},{"level":2,"title":"8. 字体","slug":"_8-字体","link":"#_8-字体","children":[{"level":3,"title":"8.1. ctrl相关","slug":"_8-1-ctrl相关","link":"#_8-1-ctrl相关","children":[{"level":5,"title":"包括 *类","slug":"包括-类","link":"#包括-类","children":[{"level":6,"title":"加粗字体、斜体","slug":"加粗字体、斜体","link":"#加粗字体、斜体","children":[]}]},{"level":5,"title":"[<>和 </>构成的一类](#__<>和 </>构成的一类代码)","slug":"和-构成的一类-和-构成的一类代码","link":"#和-构成的一类-和-构成的一类代码","children":[]}]},{"level":3,"title":"8.2. 变换字体颜色","slug":"_8-2-变换字体颜色","link":"#_8-2-变换字体颜色","children":[{"level":6,"title":"[<>和 </>构成的一类代码](#__<>和 </>构成的一类)","slug":"和-构成的一类代码-和-构成的一类","link":"#和-构成的一类代码-和-构成的一类","children":[]}]},{"level":3,"title":"8.3. 其他文本效果","slug":"_8-3-其他文本效果","link":"#_8-3-其他文本效果","children":[{"level":4,"title":"方框","slug":"方框","link":"#方框","children":[]},{"level":4,"title":"竖线","slug":"竖线","link":"#竖线","children":[]},{"level":4,"title":"打卡框","slug":"打卡框","link":"#打卡框","children":[]}]}]},{"level":2,"title":"9.如何显示渲染前的文本效果","slug":"_9-如何显示渲染前的文本效果","link":"#_9-如何显示渲染前的文本效果","children":[]},{"level":2,"title":"10.部分功能需要借助插件","slug":"_10-部分功能需要借助插件","link":"#_10-部分功能需要借助插件","children":[]}]}],"git":{"createdTime":1713057823000,"updatedTime":1713057823000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":3.79,"words":1137},"filePathRelative":"zh/Lilya/program/Markdown/note1.md","localizedDate":"2024年4月14日","excerpt":"<blockquote>\\n<p>markdown包含基础语法和<a href=\\"\\">各种语法扩展</a></p>\\n<p>基础语法兼容html标记,可以<strong>直接用<a href=\\"\\">html</a>语法</strong>对markdown进行编写,实现各种多媒体功能、排版、自体本身的变化,但是Markdown也有自己的语法,不同的编辑器的Markdown语法有细微差别,但总的来说都实现了对部分常用的html代码的简化.比如下边的标题:</p>\\n</blockquote>\\n<h1>0. 标题</h1>\\n<h2>二级</h2>\\n<p>标题的代码为:</p>\\n<div class=\\"language-markdown\\" data-ext=\\"md\\" data-title=\\"md\\"><pre class=\\"language-markdown\\"><code><span class=\\"token title important\\"><span class=\\"token punctuation\\">#</span> 标题</span>\\n<span class=\\"token title important\\"><span class=\\"token punctuation\\">##</span> 二级</span>\\n<span class=\\"token title important\\"><span class=\\"token punctuation\\">###</span> 三级</span>\\n<span class=\\"token title important\\"><span class=\\"token punctuation\\">####</span> 四级</span>\\n<span class=\\"token title important\\"><span class=\\"token punctuation\\">#####</span> 五级</span>\\n<span class=\\"token title important\\"><span class=\\"token punctuation\\">######</span> 六级</span>\\n<span class=\\"token title important\\"><span class=\\"token punctuation\\">#######</span> 最多六级标题</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,g as data};