import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as a,e as s}from"./app-CFx_4KlG.js";const n="/assets/image-20240404173020972-Bw-oZwKJ.png",t="/assets/image-20240404172850054-CfBZb-Lx.png",d="/assets/image-20240404171854136-CB9oPtP3.png",l="/assets/image-20240404173439745-DeYHt9xp.png",r="/assets/image-20240404174047813-BI2E3-aI.png",c="/assets/image-20240404174928012-ClQJUHeh.png",o="/assets/image-20240407155234695-7NEfnLtQ.png",p="/assets/1712962768897-14c5a7cb-83fd-41d8-a986-ddcf39649a7e-BQXPdHfH.png",m={},u=s(`<h2 id="不同仓库的自动化部署" tabindex="-1"><a class="header-anchor" href="#不同仓库的自动化部署"><span>不同仓库的自动化部署</span></a></h2><p>不想直接公开源代码，可以使用不同于网址关联的 <strong>服务器<u>仓库</u></strong> 的 <strong><u>私有仓库</u></strong> 存放源代码</p><h3 id="_1-生成部署用的-ssh-key" tabindex="-1"><a class="header-anchor" href="#_1-生成部署用的-ssh-key"><span>1. 生成部署用的 <code>SSH KEY</code></span></a></h3><p>为避免覆盖之前的ssh文件<code>rsa</code>，影响Github的使用权，可以换另一种密钥<code>ed25519</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-c</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container warning"><p class="hint-container-title">目前github只支持`rsa`、`ed25519` 这两种密钥</p></div><hr><details class="hint-container details"><summary>或者可以像之前搭建网站时一样给密钥换个名字</summary><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-f</span> ~/.ssh/id_rsaxxx <span class="token parameter variable">-C</span> <span class="token string">&quot;这里换上你的邮箱&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命名方式为<code>id_rsaxxx</code></p><p><code>xxx</code>的部分可以用 <code>_</code> “下划线” 加其他内容的格式</p><p>详见</p></details><h3 id="_2-配置生成新的-ssh-key" tabindex="-1"><a class="header-anchor" href="#_2-配置生成新的-ssh-key"><span>2.配置生成新的 <code>SSH KEY</code></span></a></h3><p>注：每个<code>private_key</code>只能用一次，需要生成多个ssh Key</p><table><thead><tr><th>Key</th><th>value</th><th></th></tr></thead><tbody><tr><td>id_ed25519.pub</td><td>Git_Hub公开部分</td><td><a href="#_%E4%BE%9D%E7%84%B6%E4%BD%BF%E7%94%A8cat%E6%8A%93%E5%8F%96KEY">见下</a></td></tr><tr><td>id_ed25519</td><td>Git_Hub私有仓库</td><td></td></tr></tbody></table><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="image-20240404173439745" tabindex="0" loading="lazy"><figcaption>image-20240404173439745</figcaption></figure><h3 id="_3-在公开仓库部署key" tabindex="-1"><a class="header-anchor" href="#_3-在公开仓库部署key"><span>3. 在公开仓库部署KEY</span></a></h3><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="依然使用cat抓取key" tabindex="-1"><a class="header-anchor" href="#依然使用cat抓取key"><span>依然使用cat抓取<code>KEY</code></span></a></h4><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="在公开仓库key处填入该内容" tabindex="-1"><a class="header-anchor" href="#在公开仓库key处填入该内容"><span>在公开仓库<code>KEY</code>处填入该内容</span></a></h4><h3 id="_4-对应的自动化部署脚本参考" tabindex="-1"><a class="header-anchor" href="#_4-对应的自动化部署脚本参考"><span>4. 对应的自动化部署脚本参考</span></a></h3><p>在当前仓库和目的仓库配置好密钥</p><p>对应的 <code>ssh-key: \${{ secrets.BLOG_PRIVATE_KEY }}</code> 要和仓库中的定义匹配</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># .github/workflows/deploy_to_blog.yml

name: Build and Deploy to gh-pages of another repository

permissions:
  contents: write

on:
# 每当 push 到 main 分支时触发部署

  push:
    branches: [main]

  jobs:
    build-and-deploy:
    concurrency: ci-\${{ github.ref }}
    runs-on: ubuntu-latest
    steps:

   - name: checkout
     uses: actions/checkout@v3

   - name: node switch
     uses: actions/setup-node@v3
     with:
       node-version: &#39;18.x&#39;
       registry-url: &#39;https://registry.npmjs.org&#39;

   - name: Install and Build
     run: |
     npm install
     npm run docs:build

   - name: Deploy
     uses: JamesIves/github-pages-deploy-action@v4
     with:
       clean: true # 默认清除，可以不配置
       branch: gh-pages # 默认分支，可不配置
       repository-name: AndersonHJB/blog # 提交的目的仓库
       ssh-key: \${{ secrets.BLOG_PRIVATE_KEY }} # 私钥配置在当前仓库中(settings/secrets and variables/actions/secrets),公钥配置在目的仓库中(settings/Deploy keys)
       folder: src/.vuepress/dist # 需要提交的目录文件
       clean-exclude: |
       CNAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>之后的步骤同上线网站时一样，本地添加gitHub仓库</p><details class="hint-container details"><summary>（配置好`.git`文件到创立main branch即可）</summary><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><p>✅完成✅</p>',28),g=[u];function h(v,b){return i(),a("div",null,g)}const f=e(m,[["render",h],["__file","note2.html.vue"]]),k=JSON.parse('{"path":"/zh/Lilya/program/note2.html","title":"网站内容加密","lang":"zh-CN","frontmatter":{"title":"网站内容加密","isOriginal":false,"tag":["半原创"],"icon":"/img/Secret.png","description":"不同仓库的自动化部署 不想直接公开源代码，可以使用不同于网址关联的 服务器仓库 的 私有仓库 存放源代码 1. 生成部署用的 SSH KEY 为避免覆盖之前的ssh文件rsa，影响Github的使用权，可以换另一种密钥ed25519 目前github只支持`rsa`、`ed25519` 这两种密钥 或者可以像之前搭建网站时一样给密钥换个名字 命名方式为...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/note2.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"网站内容加密"}],["meta",{"property":"og:description","content":"不同仓库的自动化部署 不想直接公开源代码，可以使用不同于网址关联的 服务器仓库 的 私有仓库 存放源代码 1. 生成部署用的 SSH KEY 为避免覆盖之前的ssh文件rsa，影响Github的使用权，可以换另一种密钥ed25519 目前github只支持`rsa`、`ed25519` 这两种密钥 或者可以像之前搭建网站时一样给密钥换个名字 命名方式为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T19:20:15.000Z"}],["meta",{"property":"article:tag","content":"半原创"}],["meta",{"property":"article:modified_time","content":"2024-04-14T19:20:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网站内容加密\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-14T19:20:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"不同仓库的自动化部署","slug":"不同仓库的自动化部署","link":"#不同仓库的自动化部署","children":[{"level":3,"title":"1. 生成部署用的 SSH KEY","slug":"_1-生成部署用的-ssh-key","link":"#_1-生成部署用的-ssh-key","children":[]},{"level":3,"title":"2.配置生成新的 SSH KEY","slug":"_2-配置生成新的-ssh-key","link":"#_2-配置生成新的-ssh-key","children":[]},{"level":3,"title":"3. 在公开仓库部署KEY","slug":"_3-在公开仓库部署key","link":"#_3-在公开仓库部署key","children":[{"level":4,"title":"依然使用cat抓取KEY","slug":"依然使用cat抓取key","link":"#依然使用cat抓取key","children":[]},{"level":4,"title":"在公开仓库KEY处填入该内容","slug":"在公开仓库key处填入该内容","link":"#在公开仓库key处填入该内容","children":[]}]},{"level":3,"title":"4. 对应的自动化部署脚本参考","slug":"_4-对应的自动化部署脚本参考","link":"#_4-对应的自动化部署脚本参考","children":[]}]}],"git":{"createdTime":1713122415000,"updatedTime":1713122415000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":1.74,"words":522},"filePathRelative":"zh/Lilya/program/note2.md","localizedDate":"2024年4月14日","excerpt":"<h2>不同仓库的自动化部署</h2>\\n<p>不想直接公开源代码，可以使用不同于网址关联的 <strong>服务器<u>仓库</u></strong> 的 <strong><u>私有仓库</u></strong> 存放源代码</p>\\n<h3>1. 生成部署用的 <code>SSH KEY</code></h3>\\n<p>为避免覆盖之前的ssh文件<code>rsa</code>，影响Github的使用权，可以换另一种密钥<code>ed25519</code></p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>ssh-keygen <span class=\\"token parameter variable\\">-t</span> ed25519 <span class=\\"token parameter variable\\">-c</span> \\n</code></pre></div>","autoDesc":true}');export{f as comp,k as data};