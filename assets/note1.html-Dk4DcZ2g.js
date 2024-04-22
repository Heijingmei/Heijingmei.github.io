import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as t}from"./app-CuXMYr2R.js";const r={},a=t(`<div class="language-forten line-numbers-mode" data-ext="forten" data-title="forten"><pre class="language-forten"><code>program pointerExample
implicit none

   integer, pointer :: p1
   integer, target :: t1 
   
   p1=&gt;t1
   p1 = 1
   
   Print *, p1
   Print *, t1
   
   p1 = p1 + 4
   
   Print *, p1
   Print *, t1
   
   t1 = 8
   
   Print *, p1
   Print *, t1
   
end program pointerExample
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[a];function o(d,s){return n(),i("div",null,l)}const p=e(r,[["render",o],["__file","note1.html.vue"]]),v=JSON.parse('{"path":"/Lilya/program/Fortran/note1.html","title":"","lang":"en-US","frontmatter":{"head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/Lilya/program/Fortran/note1.html"}],["meta",{"property":"og:site_name","content":"BH_English Version"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-22T15:32:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-22T15:32:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-22T15:32:09.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1713799929000,"updatedTime":1713799929000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":0.12,"words":35},"filePathRelative":"Lilya/program/Fortran/note1.md","localizedDate":"April 22, 2024","excerpt":"<div class=\\"language-forten\\" data-ext=\\"forten\\" data-title=\\"forten\\"><pre class=\\"language-forten\\"><code>program pointerExample\\nimplicit none\\n\\n   integer, pointer :: p1\\n   integer, target :: t1 \\n   \\n   p1=&gt;t1\\n   p1 = 1\\n   \\n   Print *, p1\\n   Print *, t1\\n   \\n   p1 = p1 + 4\\n   \\n   Print *, p1\\n   Print *, t1\\n   \\n   t1 = 8\\n   \\n   Print *, p1\\n   Print *, t1\\n   \\nend program pointerExample\\n</code></pre></div>"}');export{p as comp,v as data};
