import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,e as a}from"./app-DIJTfBGT.js";const t={},i=a(`<h2 id="队列" tabindex="-1"><a class="header-anchor" href="#队列"><span>队列</span></a></h2><p>遵循先进先出<strong>FIFO</strong>（first in first out）的原则。在这种结构中，数据被依次添加到队列末端，并从队列的前端移除。类似于结账排队。</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>队列主要支持以下几种操作</p><ul><li>Enqueue：将一个元素添加到队列的尾部</li><li>Dequeue：从队列头部移除一个元素</li><li>Front：获取头部元素（不移除）</li><li>IsEmpty：检查队列是否为空</li><li>Size：返回队列中元素的数量</li></ul><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h3><p>队列可以通过多种方式实现:</p><h5 id="使用数组或列表" tabindex="-1"><a class="header-anchor" href="#使用数组或列表"><span>使用数组或列表</span></a></h5><h5 id="使用链表" tabindex="-1"><a class="header-anchor" href="#使用链表"><span>使用链表</span></a></h5><p>可以在O(1)的时间复杂度内进行插入和删除操作</p><h6 id="" tabindex="-1"><a class="header-anchor" href="#"><span>__</span></a></h6><ul><li>使用库queue.Queue: 这是Python标准库提供的一个线程安全的队列实现，适用于多线程环境</li><li>使用双端队列(duque): Python 的 collections.deque提供了一个优化的双端队列实现，适合用作队列</li></ul><h3 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h3><p>实现一个循环队列。循环队列的容量可以动态调整，在队列空间不足时，需要扩大到当前容量的两倍。队列需要支持以下操作：</p><ol><li><strong>入队</strong>：将一个元素添加到队列末尾。</li><li><strong>出队</strong>：从队列前端移除一个元素，并返回它。</li><li><strong>获取前端元素</strong>：返回队列前端的元素但不移除它。</li><li><strong>获取后端元素</strong>：返回队列后端的元素但不移除它。</li><li><strong>队列大小</strong>：返回队列中的元素数量。</li><li><strong>队列是否为空</strong>：检查队列是否为空。</li><li><strong>队列是否已满</strong>：检查队列是否达到当前容量上限。</li></ol><p>队列初始化时为空，且初始容量设为8。</p><h3 id="功能要求" tabindex="-1"><a class="header-anchor" href="#功能要求"><span>功能要求</span></a></h3><ol><li><strong>自动扩容</strong>：当尝试进行入队操作时，如果队列已满，则自动将队列容量扩大到当前的两倍。</li><li><strong>循环处理</strong>：队列使用循环的方式处理数组边界，即如果队列末尾到达数组末端但数组前端有空间，则继续在数组前端进行操作。</li></ol><h3 id="输入输出示例" tabindex="-1"><a class="header-anchor" href="#输入输出示例"><span>输入输出示例</span></a></h3><p><strong>输入</strong>：</p><ol><li>入队5次（元素为1, 2, 3, 4, 5）</li><li>出队2次</li><li>入队2次（元素为6, 7）</li><li>获取前端元素</li><li>获取后端元素</li><li>队列大小</li></ol><p><strong>输出</strong>：</p><ol><li>元素出队：1, 2</li><li>队列前端元素：3</li><li>队列后端元素：7</li><li>队列大小：5</li></ol><h3 id="代码模板" tabindex="-1"><a class="header-anchor" href="#代码模板"><span>代码模板</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">CircularQueue</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> capacity<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 初始化队列</span>

    <span class="token keyword">def</span> <span class="token function">enqueue</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 元素入队操作</span>

    <span class="token keyword">def</span> <span class="token function">dequeue</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 元素出队操作</span>

    <span class="token keyword">def</span> <span class="token function">peek_front</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 获取队列前端元素</span>

    <span class="token keyword">def</span> <span class="token function">peek_rear</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 获取队列后端元素</span>

    <span class="token keyword">def</span> <span class="token function">size</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 返回队列大小</span>

    <span class="token keyword">def</span> <span class="token function">is_empty</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 检查队列是否为空</span>

    <span class="token keyword">def</span> <span class="token function">is_full</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 检查队列是否已满</span>

    <span class="token keyword">def</span> <span class="token function">resize</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 扩大队列容量</span>

<span class="token comment"># 示例使用</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    queue <span class="token operator">=</span> CircularQueue<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 进行入队、出队等操作，并打印结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>option</code> + <code>command</code>+<code>L</code></p>`,26),l=[i];function o(p,c){return s(),e("div",null,l)}const d=n(t,[["render",o],["__file","note3.html.vue"]]),m=JSON.parse('{"path":"/zh/Lilya/program/Algorithm/data-structure/note3.html","title":"数据结构--队列","lang":"zh-CN","frontmatter":{"title":"数据结构--队列","author":"黑静美","category":["编程"],"tag":["python","数据结构"],"isOriginal":true,"icon":"/ico/Python.ico","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"队列 遵循先进先出FIFO（first in first out）的原则。在这种结构中，数据被依次添加到队列末端，并从队列的前端移除。类似于结账排队。 操作 队列主要支持以下几种操作 Enqueue：将一个元素添加到队列的尾部 Dequeue：从队列头部移除一个元素 Front：获取头部元素（不移除） IsEmpty：检查队列是否为空 Size：返回队...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/Algorithm/data-structure/note3.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"数据结构--队列"}],["meta",{"property":"og:description","content":"队列 遵循先进先出FIFO（first in first out）的原则。在这种结构中，数据被依次添加到队列末端，并从队列的前端移除。类似于结账排队。 操作 队列主要支持以下几种操作 Enqueue：将一个元素添加到队列的尾部 Dequeue：从队列头部移除一个元素 Front：获取头部元素（不移除） IsEmpty：检查队列是否为空 Size：返回队..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-13T18:00:53.000Z"}],["meta",{"property":"article:author","content":"黑静美"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"数据结构"}],["meta",{"property":"article:modified_time","content":"2024-06-13T18:00:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据结构--队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-13T18:00:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"黑静美\\"}]}"]]},"headers":[{"level":2,"title":"队列","slug":"队列","link":"#队列","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"实现","slug":"实现","link":"#实现","children":[{"level":5,"title":"使用数组或列表","slug":"使用数组或列表","link":"#使用数组或列表","children":[]},{"level":5,"title":"使用链表","slug":"使用链表","link":"#使用链表","children":[{"level":6,"title":"__","slug":"","link":"#","children":[]}]}]},{"level":3,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":3,"title":"功能要求","slug":"功能要求","link":"#功能要求","children":[]},{"level":3,"title":"输入输出示例","slug":"输入输出示例","link":"#输入输出示例","children":[]},{"level":3,"title":"代码模板","slug":"代码模板","link":"#代码模板","children":[]}]}],"git":{"createdTime":1718301653000,"updatedTime":1718301653000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":2.59,"words":778},"filePathRelative":"zh/Lilya/program/Algorithm/data-structure/note3.md","localizedDate":"2024年6月13日","excerpt":"<h2>队列</h2>\\n<p>遵循先进先出<strong>FIFO</strong>（first in first out）的原则。在这种结构中，数据被依次添加到队列末端，并从队列的前端移除。类似于结账排队。</p>\\n<h2>操作</h2>\\n<p>队列主要支持以下几种操作</p>\\n<ul>\\n<li>Enqueue：将一个元素添加到队列的尾部</li>\\n<li>Dequeue：从队列头部移除一个元素</li>\\n<li>Front：获取头部元素（不移除）</li>\\n<li>IsEmpty：检查队列是否为空</li>\\n<li>Size：返回队列中元素的数量</li>\\n</ul>\\n<h3>实现</h3>","autoDesc":true}');export{d as comp,m as data};