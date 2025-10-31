import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e as i}from"./app-BU7A29OT.js";const a="/assets/image-20241115213347331-Bk7WFnui.png",t="/assets/image-20240404173439745-DeYHt9xp.png",l="/assets/image-20240407155234695-7NEfnLtQ.png",o="/assets/1712962768897-14c5a7cb-83fd-41d8-a986-ddcf39649a7e-BQXPdHfH.png",c={},d=i('<h2 id="本质-私密仓库的内容推送到公开仓库" tabindex="-1"><a class="header-anchor" href="#本质-私密仓库的内容推送到公开仓库"><span>本质：私密仓库的内容推送到公开仓库</span></a></h2><p>不想直接公开源代码，可以使用的 <strong><u>私有仓库</u></strong> 存放源代码，再推送到公开仓库</p><h2 id="_1-生成部署用的-ssh-key" tabindex="-1"><a class="header-anchor" href="#_1-生成部署用的-ssh-key"><span>1. 生成部署用的 <code>SSH KEY</code></span></a></h2><p>见</p><h3 id="_2-在控制台公开仓库部署key" tabindex="-1"><a class="header-anchor" href="#_2-在控制台公开仓库部署key"><span>2. 在控制台公开仓库部署KEY</span></a></h3><figure><img src="'+a+'" alt="image-20241115213347331" tabindex="0" loading="lazy"><figcaption>image-20241115213347331</figcaption></figure><p>注意勾选<code>Allow write access</code>，这样才能把私有仓库的内容写入</p><h3 id="_3-新建一个私密仓库" tabindex="-1"><a class="header-anchor" href="#_3-新建一个私密仓库"><span>3. 新建一个私密仓库</span></a></h3><figure><img src="'+t+`" alt="image-20240404173439745" tabindex="0" loading="lazy"><figcaption>image-20240404173439745</figcaption></figure><h3 id="_4-更改deploy-to-blog-yml文件" tabindex="-1"><a class="header-anchor" href="#_4-更改deploy-to-blog-yml文件"><span>4. 更改<code>deploy_to_blog.yml</code>文件</span></a></h3><p>:::</p><h4 id="对应的推送代码的参考" tabindex="-1"><a class="header-anchor" href="#对应的推送代码的参考"><span>对应的推送代码的参考</span></a></h4><p>把这段内容粘贴到<code>deploy_to_blog.yml</code>里面，替换掉之前的内容（之前模版内会有一个<code>deploy_to_blog.yml</code>，但是只适用于公开仓库）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># .github/workflows/deploy_to_blog.yml</span>

name: Build and Deploy to gh-pages of another repository

permissions:
  contents: <span class="token function">write</span>

on:
<span class="token comment"># 每当 push 到 main 分支时触发部署</span>

  push:
    branches: <span class="token punctuation">[</span>main<span class="token punctuation">]</span>

  jobs:
    build-and-deploy:
    concurrency: ci-<span class="token variable">\${{ github.ref }</span><span class="token punctuation">}</span>
    runs-on: ubuntu-latest
    steps:

   - name: checkout
     uses: actions/checkout@v3

   - name: <span class="token function">node</span> switch
     uses: actions/setup-node@v3
     with:
       node-version: <span class="token string">&#39;18.x&#39;</span>
       registry-url: <span class="token string">&#39;https://registry.npmjs.org&#39;</span>

   - name: Install and Build
     run: <span class="token operator">|</span>
     <span class="token function">npm</span> <span class="token function">install</span>
     <span class="token function">npm</span> run docs:build

   - name: Deploy
     uses: JamesIves/github-pages-deploy-action@v4
     with:
       clean: <span class="token boolean">true</span> <span class="token comment"># 默认清除，可以不配置</span>
       branch: gh-pages <span class="token comment"># 默认分支，可不配置</span>
       repository-name: AndersonHJB/blog <span class="token comment"># 提交的目的仓库</span>
       ssh-key:<span class="token variable">\${{ secrets.BLOG_PRIVATE_KEY }</span><span class="token punctuation">}</span> <span class="token comment"># 私钥配置在当前仓库中(settings/secrets and variables/actions/secrets),公钥配置在目的仓库中(settings/Deploy keys)</span>
       <span class="token comment"># 名称要和github中书写的一致</span>
       folder: src/.vuepress/dist <span class="token comment"># 需要提交的目录文件</span>
       clean-exclude: <span class="token operator">|</span>
       CNAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="hint-container details"><summary>（配置好`.git`文件到origin main branch即可）</summary><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><p>✅完成✅</p>',17),r=[d];function p(m,u){return n(),s("div",null,r)}const h=e(c,[["render",p],["__file","note2.html.vue"]]),b=JSON.parse('{"path":"/zh/Lilya/program/note2.html","title":"网站内容加密","lang":"zh-CN","frontmatter":{"title":"网站内容加密","isOriginal":false,"tag":["半原创"],"icon":"/ico/Secret.png","description":"本质：私密仓库的内容推送到公开仓库 不想直接公开源代码，可以使用的 私有仓库 存放源代码，再推送到公开仓库 1. 生成部署用的 SSH KEY 见 2. 在控制台公开仓库部署KEY image-20241115213347331image-20241115213347331 注意勾选Allow write access，这样才能把私有仓库的内容写入 3...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/note2.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"网站内容加密"}],["meta",{"property":"og:description","content":"本质：私密仓库的内容推送到公开仓库 不想直接公开源代码，可以使用的 私有仓库 存放源代码，再推送到公开仓库 1. 生成部署用的 SSH KEY 见 2. 在控制台公开仓库部署KEY image-20241115213347331image-20241115213347331 注意勾选Allow write access，这样才能把私有仓库的内容写入 3..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-10-31T16:38:26.000Z"}],["meta",{"property":"article:tag","content":"半原创"}],["meta",{"property":"article:modified_time","content":"2025-10-31T16:38:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网站内容加密\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-10-31T16:38:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"本质：私密仓库的内容推送到公开仓库","slug":"本质-私密仓库的内容推送到公开仓库","link":"#本质-私密仓库的内容推送到公开仓库","children":[]},{"level":2,"title":"1. 生成部署用的 SSH KEY","slug":"_1-生成部署用的-ssh-key","link":"#_1-生成部署用的-ssh-key","children":[{"level":3,"title":"2. 在控制台公开仓库部署KEY","slug":"_2-在控制台公开仓库部署key","link":"#_2-在控制台公开仓库部署key","children":[]},{"level":3,"title":"3. 新建一个私密仓库","slug":"_3-新建一个私密仓库","link":"#_3-新建一个私密仓库","children":[]},{"level":3,"title":"4. 更改deploy_to_blog.yml文件","slug":"_4-更改deploy-to-blog-yml文件","link":"#_4-更改deploy-to-blog-yml文件","children":[{"level":4,"title":"对应的推送代码的参考","slug":"对应的推送代码的参考","link":"#对应的推送代码的参考","children":[]}]}]}],"git":{"createdTime":1761928706000,"updatedTime":1761928706000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":1.22,"words":367},"filePathRelative":"zh/Lilya/program/note2.md","localizedDate":"2025年10月31日","excerpt":"<h2>本质：私密仓库的内容推送到公开仓库</h2>\\n<p>不想直接公开源代码，可以使用的 <strong><u>私有仓库</u></strong> 存放源代码，再推送到公开仓库</p>\\n<h2>1. 生成部署用的 <code>SSH KEY</code></h2>\\n<p>见</p>\\n<h3>2. 在控制台公开仓库部署KEY</h3>\\n<figure><figcaption>image-20241115213347331</figcaption></figure>\\n<p>注意勾选<code>Allow write access</code>，这样才能把私有仓库的内容写入</p>\\n<h3>3. 新建一个私密仓库</h3>","autoDesc":true}');export{h as comp,b as data};
