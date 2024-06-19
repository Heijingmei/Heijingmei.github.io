import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as l,a as n,b as s,d as t,e}from"./app-COC9mz0s.js";const i={},u={href:"https://bornforthis.cn/column/Rust/01.html",target:"_blank",rel:"noopener noreferrer"},r={href:"https://course.rs/basic/compound-type/string-slice.html",target:"_blank",rel:"noopener noreferrer"},d=e(`<h2 id="utf8编码的字符串" tabindex="-1"><a class="header-anchor" href="#utf8编码的字符串"><span>UTF8编码的字符串</span></a></h2><p><code>String</code> 赋值方式是</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code>x <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>虽然中文表述上，字符串只比前面的字符类型多了一个串字，但它们内部存储结构完全不同。String 内部存储的是 Unicode 字符串的 UTF8 编码，而 char 直接存的是 <code>Unicode Scalar Value</code>。也就是说 <strong>String 不是 char 的数组</strong>，这点与 C 语言也有很大区别。</p><p>通过下面示例我们可以看到，Rust 字符串对 Unicode 字符集<strong>有着良好的支持</strong>。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;السلام عليكم&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Dobrý den&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;שָׁלוֹם&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;नमस्ते&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;こんにちは&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;안녕하세요&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Olá&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Здравствуйте&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;Hola&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>注意，Rust 中的<code>String</code>不能通过下标(索引)去访问。</p></div><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// let a = hello[0];  // 你可能想把“你”字取出来，但实际上这样是错误的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>该代码会产生如下错误：</p><div class="language-console line-numbers-mode" data-ext="console" data-title="console"><pre class="language-console"><code>3 |     let h = hello[0];
  |             ^^^^^^^^ \`String\` cannot be indexed by \`{integer}\`
  |
  = help: the trait \`Index&lt;{integer}&gt;\` is not implemented for \`String\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 String 存储的 Unicode 序列的 UTF8 编码，而 UTF-8 编码是<strong>变长编码</strong>。</p><hr>`,12),k={id:"为何是变长编码-ref2",tabindex:"-1"},m={class:"header-anchor",href:"#为何是变长编码-ref2"},v={href:"https://course.rs/basic/compound-type/string-slice.html",target:"_blank",rel:"noopener noreferrer"},g=e(`<ul><li><h6 id="拉丁字母" tabindex="-1"><a class="header-anchor" href="#拉丁字母"><span>拉丁字母</span></a></h6><p>对于 <code>let hello = String::from(&quot;Hola&quot;);</code> 这行代码来说，<code>Hola</code> 的长度是 <code>4</code> 个字节，因为 <code>&quot;Hola&quot;</code> 中的每个字母在 UTF-8 编码中仅占用 1 个字节，但是对于下面的代码呢？</p></li><li><h6 id="中文" tabindex="-1"><a class="header-anchor" href="#中文"><span>中文</span></a></h6></li></ul><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;中国人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该字符串是 <code>9</code> 个字节的长度，因为大部分常用汉字在 UTF-8 中的长度是 <code>3</code> 个字节。</p><ul><li><h6 id="再来看一下用梵文写的字符串-नमस्ते" tabindex="-1"><a class="header-anchor" href="#再来看一下用梵文写的字符串-नमस्ते"><span>再来看一下用梵文写的字符串 <code>नमस्ते</code></span></a></h6> 它底层的字节数组如下形式：</li></ul><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">164</span><span class="token punctuation">,</span> <span class="token number">168</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">164</span><span class="token punctuation">,</span> <span class="token number">174</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">164</span><span class="token punctuation">,</span> <span class="token number">184</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">165</span><span class="token punctuation">,</span> <span class="token number">141</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">164</span><span class="token punctuation">,</span> <span class="token number">164</span><span class="token punctuation">,</span>
<span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">165</span><span class="token punctuation">,</span> <span class="token number">135</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>长度是 18 个字节，这也是计算机最终存储该字符串的形式。如果从字符的形式去看，则是：</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token char">&#39;न&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;म&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;स&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;्&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;त&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;े&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是书写过程中，第四和六两个字母根本就不存在，在这种语言中只是两个辅助值并不占位。接着再从字母串的形式去看：</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token punctuation">[</span><span class="token string">&quot;न&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;म&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;स्&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ते&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以，可以看出来 Rust 提供了不同的字符串展现方式，这样程序可以挑选自己想要的方式去使用，而无需去管字符串从人类语言角度看长什么样。</p><p>还有一个原因导致了 Rust 不允许去索引字符串：因为索引操作，我们总是期望它的性能表现是 O(1)，然而对于 <code>String</code> 类型来说，无法保证这一点，因为 Rust 可能需要从 0 开始去遍历字符串来定位合法的字符。</p><h5 id="强行采用-s-取值" tabindex="-1"><a class="header-anchor" href="#强行采用-s-取值"><span>强行采用<code>&amp;s[]</code>取值</span></a></h5><p>::: dinger</p><p>如果你想从索引 0 开始，可以使用如下的方式，这两个是等效的：</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;中国人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> slice <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> slice <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token punctuation">..</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>错误示例：</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;中国人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// let a = &amp;s[0..1];</span>
<span class="token comment">// println!(&quot;{}&quot;,a);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况下对 <code>s</code> 进行索引，访问 <code>&amp;s[0..1]</code> 没有任何意义，因为我们只取 <code>s</code> 字符串的前两个字节，但是本例中每个汉字占用3个字节，因此没有落在边界处，也就是连 <code>中</code> 字都取不完整，这是一个非常奇怪而且难以理解的返回值。此时程序会直接崩溃退出。</p><p>如果改成 <code>&amp;s[0..2]</code>，则可以正常通过编译。 因此，当你需要对字符串做切片索引操作时，需要格外小心这一点。</p><hr><h5 id="字符串的转义" tabindex="-1"><a class="header-anchor" href="#字符串的转义"><span>字符串的转义</span></a></h5><p>与 C 语言一样，Rust 中转义符号也是反斜杠 <code>\\</code> ，可用来转义各种字符。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 将&quot;&quot;号进行转义 */</span>
    <span class="token keyword">let</span> byte_escape <span class="token operator">=</span> <span class="token string">&quot;I&#39;m saying \\&quot;Hello\\&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> byte_escape<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">/* 分两行打印（转义换行符） */</span>
    <span class="token keyword">let</span> byte_escape <span class="token operator">=</span> <span class="token string">&quot;I&#39;m saying \\n 你好&quot;</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> byte_escape<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">/* Windows下的换行符 */</span>
    <span class="token keyword">let</span> byte_escape <span class="token operator">=</span> <span class="token string">&quot;I&#39;m saying \\r\\n 你好&quot;</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> byte_escape<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">/* 打印出 \\ 本身 */</span>
    <span class="token keyword">let</span> byte_escape <span class="token operator">=</span> <span class="token string">&quot;I&#39;m saying \\\\ Ok&quot;</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> byte_escape<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">/* 强行在字符串后面加个0，与C语言的字符串一致。*/</span>
    <span class="token keyword">let</span> byte_escape <span class="token operator">=</span> <span class="token string">&quot;I&#39;m saying hello.\\0&quot;</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> byte_escape<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，Rust 还支持通过 <code>\\x</code> 输入等值的 <code>ASCII </code>字符，以及通过 <code>\\u{}</code> 输入等值的 Unicode 字符。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用 \\x 输入等值的ASCII字符（最高7位）</span>
    <span class="token keyword">let</span> byte_escape <span class="token operator">=</span> <span class="token string">&quot;I&#39;m saying hello \\x7f&quot;</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> byte_escape<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 使用 \\u{} 输入等值的Unicode字符（最高24位）</span>
    <span class="token keyword">let</span> byte_escape <span class="token operator">=</span> <span class="token string">&quot;I&#39;m saying hello \\u{0065}&quot;</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> byte_escape<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),b={href:"https://doc.rust-lang.org/reference/tokens.html#character-escapes",target:"_blank",rel:"noopener noreferrer"},h=e(`<h5 id="不转义字符串" tabindex="-1"><a class="header-anchor" href="#不转义字符串"><span>不转义字符串</span></a></h5><p>有时候，我们不希望字符串被转义，也就是想输出原始字面量。这个在 Rust 中也有办法，使用 <code>r&quot;&quot;</code> 或 <code>r#&quot;&quot;#</code> 把字符串字面量套起来就行了。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 字符串字面量前面加r，表示不转义</span>
    <span class="token keyword">let</span> raw_str <span class="token operator">=</span> <span class="token string">r&quot;Escapes don&#39;t work here: \\x3F \\u{211D}&quot;</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> raw_str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 这个字面量必须使用r##这种形式，因为我们希望在字符串字面量里面保留&quot;&quot;</span>
    <span class="token keyword">let</span> quotes <span class="token operator">=</span> <span class="token string">r#&quot;And then I said: &quot;There is no escape!&quot;&quot;#</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> quotes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 如果遇到字面量里面有#号的情况，可以在r后面，加任意多的前后配对的#号，</span>
    <span class="token comment">// 只要能帮助Rust编译器识别就行</span>
    <span class="token keyword">let</span> longer_delimiter <span class="token operator">=</span> <span class="token string">r###&quot;A string with &quot;# in it. And even &quot;##!&quot;###</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> longer_delimiter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一点小提示，Rust 中的字符串字面量都支持换行写，默认把换行符包含进去。</p><h2 id="字节串" tabindex="-1"><a class="header-anchor" href="#字节串"><span>字节串</span></a></h2><p>字节串本质是<code>数组</code>，由“字符<code>char</code>”这样的“数“（标量）构成。</p><p>很多时候，我们的字符串字面量中用不到 Unicode 字符，只需要 ASCII 字符集。对于这种情况，Rust 还有一种更紧凑的表示法：<strong>字节串</strong>。用 b 开头，双引号括起来，比如 <code>b&quot;this is a byte string&quot;</code>。这时候字符串的类型已不是字符串，而是<strong>字节的数组</strong> <code>[u8; N]</code>，<code>N</code> 为字节数。</p><p>你可以在 Playground 里面运行一下代码，看看输出什么。</p><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 该类型是字节的数组，而不是字符串 “21“表示声明长度，数组类型必须固定长度</span>
    <span class="token keyword">let</span> bytestring<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">u8</span><span class="token punctuation">;</span> <span class="token number">21</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">b&quot;this is a byte string&quot;</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;A byte string: {:?}&quot;</span><span class="token punctuation">,</span> bytestring<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 可以看看下面这串打印出什么</span>
    <span class="token keyword">let</span> escaped <span class="token operator">=</span> <span class="token string">b&quot;\\x52\\x75\\x73\\x74 as bytes&quot;</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Some escaped bytes: {:?}&quot;</span><span class="token punctuation">,</span> escaped<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 字节串与原始字面量结合使用</span>
    <span class="token keyword">let</span> raw_bytestring <span class="token operator">=</span> <span class="token string">br&quot;\\u{211D} is not escaped here&quot;</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{:?}&quot;</span><span class="token punctuation">,</span> raw_bytestring<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>数组类型必须固定长度</p></div><p>字节串很有用，特别是在做系统级编程或网络协议开发的时候，经常会用到。</p>`,11);function q(f,y){const a=o("ExternalLinkIcon");return c(),l("div",null,[n("p",null,[s("本文内容摘编自： "),n("a",u,[s("快速入门：Rust中有哪些你不得不了解的基础语法？"),t(a)]),s("（著作权归AI悦创所有） "),n("a",r,[s("Rust语言圣经(Rust Course)-字符串与切片"),t(a)])]),d,n("h5",k,[n("a",m,[n("span",null,[s("为何是变长编码"),n("a",v,[s("[Ref2]"),t(a)])])])]),g,n("p",null,[s("注：字符串转义的详细知识点，请参考 "),n("a",b,[s("Tokens - The Rust Reference (rust-lang.org)"),t(a)])]),h])}const x=p(i,[["render",q],["__file","note2-2.html.vue"]]),S=JSON.parse('{"path":"/zh/Lilya/program/Rust2/note2-2.html","title":"02-字符串与字节串","lang":"zh-CN","frontmatter":{"title":"02-字符串与字节串","author":"黑静美","isOriginal":true,"category":["编程"],"tag":["rust"],"icon":"/ico/Rust.ico","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"本文内容摘编自： 快速入门：Rust中有哪些你不得不了解的基础语法？（著作权归AI悦创所有） Rust语言圣经(Rust Course)-字符串与切片 UTF8编码的字符串 String 赋值方式是 虽然中文表述上，字符串只比前面的字符类型多了一个串字，但它们内部存储结构完全不同。String 内部存储的是 Unicode 字符串的 UTF8 编码，而...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/Rust2/note2-2.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"02-字符串与字节串"}],["meta",{"property":"og:description","content":"本文内容摘编自： 快速入门：Rust中有哪些你不得不了解的基础语法？（著作权归AI悦创所有） Rust语言圣经(Rust Course)-字符串与切片 UTF8编码的字符串 String 赋值方式是 虽然中文表述上，字符串只比前面的字符类型多了一个串字，但它们内部存储结构完全不同。String 内部存储的是 Unicode 字符串的 UTF8 编码，而..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T11:09:18.000Z"}],["meta",{"property":"article:author","content":"黑静美"}],["meta",{"property":"article:tag","content":"rust"}],["meta",{"property":"article:modified_time","content":"2024-06-19T11:09:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02-字符串与字节串\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-19T11:09:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"黑静美\\"}]}"]]},"headers":[{"level":2,"title":"UTF8编码的字符串","slug":"utf8编码的字符串","link":"#utf8编码的字符串","children":[{"level":5,"title":"为何是变长编码[Ref2]","slug":"为何是变长编码-ref2","link":"#为何是变长编码-ref2","children":[]},{"level":5,"title":"强行采用&s[]取值","slug":"强行采用-s-取值","link":"#强行采用-s-取值","children":[]},{"level":5,"title":"字符串的转义","slug":"字符串的转义","link":"#字符串的转义","children":[]},{"level":5,"title":"不转义字符串","slug":"不转义字符串","link":"#不转义字符串","children":[]}]},{"level":2,"title":"字节串","slug":"字节串","link":"#字节串","children":[]}],"git":{"createdTime":1718795358000,"updatedTime":1718795358000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":5.82,"words":1746},"filePathRelative":"zh/Lilya/program/Rust2/note2-2.md","localizedDate":"2024年6月19日","excerpt":"<p>本文内容摘编自： <a href=\\"https://bornforthis.cn/column/Rust/01.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">快速入门：Rust中有哪些你不得不了解的基础语法？</a>（著作权归AI悦创所有）\\n<a href=\\"https://course.rs/basic/compound-type/string-slice.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Rust语言圣经(Rust Course)-字符串与切片</a></p>\\n<h2>UTF8编码的字符串</h2>","autoDesc":true}');export{x as comp,S as data};