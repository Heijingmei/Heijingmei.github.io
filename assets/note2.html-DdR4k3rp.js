import{_ as v}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as u,c as m,a as e,b as i,d as a,w as n,e as t}from"./app-_tdSEuND.js";const b={},p=t(`<h2 id="类的概念-公有和私有" tabindex="-1"><a class="header-anchor" href="#类的概念-公有和私有"><span><code>类</code>的概念，公有和私有</span></a></h2><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include&lt;iostream&gt; // 类似于c中的#include &lt;stdio.h&gt; ，由于C++于c是被继承关系，所以也可以写&lt;stdio.h&gt; 。但是&lt;iostream&gt;有所扩展（比如说这个class，c中是没有的）
#include&lt;string&gt;
 
using namespace std;
 
class AccessTest
{
	public:
		
	protected:
		
	private:
		
		
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="public-private-以及protected" tabindex="-1"><a class="header-anchor" href="#public-private-以及protected"><span><code>public</code>/<code>private</code> 以及<code>protected</code></span></a></h2><h3 id="_1-类的成员及其他方式的访问权限" tabindex="-1"><a class="header-anchor" href="#_1-类的成员及其他方式的访问权限"><span>1. 类的成员及其他方式的访问权限</span></a></h3><p>类的成员以及成员函数函数，可以访问<code>本类</code>内的任何成员变量和成员函数（自身不受影响）</p><p>访问方式分为<code>本类成员</code>：<code> 本类的变量</code>，<code>本类的函数</code>；<code>友类</code>，<code>友类的函数</code>，<code>友元</code> ； <code>类的实例变量</code> (在main函数中访问)，以及 <code>派生类</code>(继承关系)等</p><p>下文总结：除本类外，public在任何地方都能访问，protected只能在派生类(包括友元)中访问， private只能在友元中访问。</p><hr>`,8),o={href:"https://blog.csdn.net/ycf74514/article/details/49053041",target:"_blank",rel:"noopener noreferrer"},_=t(`<h3 id="_2-public的访问权限" tabindex="-1"><a class="header-anchor" href="#_2-public的访问权限"><span>2.public的访问权限</span></a></h3><p>一个类的public成员变量、成员函数，可以通过类的成员函数、类的实例变量进行访问</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include&lt;iostream&gt;
#include&lt;string&gt;

using namespace std;

class AccessTest
{
	public:
		int pub_mem;
		int pub_fun(){};
	protected:
		int prot_mem;
		int prot_fun(){};
	private:
		int priv_memb;
		int priv_fun(){};
};

int main()
{
	AccessTest at;
	at.pub_mem;     //OK, 类变量可以访问public成员
	at.pub_func();  //OK, 访问public成员函数
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-private的访问权限" tabindex="-1"><a class="header-anchor" href="#_3-private的访问权限"><span>3. private的访问权限</span></a></h3><p>一个类的private成员变量、成员函数，无法通过<code>类的实例</code>变量进行访问。但是可以通过类的<code>友元</code>函数、<code>友元</code>类进行访问。</p>`,5),h=e("div",{class:"language-c++ line-numbers-mode","data-ext":"c++","data-title":"c++"},[e("pre",{class:"language-c++"},[e("code",null,`#include<iostream>
#include<string>

using namespace std;

class AccessTest
{
	friend void Atest();
	friend class CAtest;
	public:
		int pub_mem;
		void pub_fun(){}
	protected:
		int prot_mem;
		void prot_fun(){}
	private:
		int priv_memb;
		void priv_fun(){}	
};

class CAtest
{
	public:
	void x()
	{
	       AccessTest t;
    	       t.priv_fun();   //OK,友元类可以访问private成员函数
	       int x=t.priv_memb;  //OK,友元类可以访问private成员变量
        }
};

void Atest()
{
	AccessTest t;
	t.priv_fun();            //OK,友元函数可以访问private成员函数
	int x=t.priv_memb;       //OK,友元函数可以访问private成员变量
} 

int main()
{
	AccessTest at;
	at.priv_memb;       //ERROR,类实例变量无法访问private成员变量
	at.priv_fun();      //ERROR,类实例变量无法访问private成员函数
	Atest();
        return 0;
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`#include<iostream>
#include<string>

using namespace std;

class AccessTest
{
	friend void Atest();
	friend class CAtest;
	public:
		int pub_mem;
		void pub_fun(){}
	protected:
		int prot_mem;
		void prot_fun(){}
	private:
		int priv_memb;
		void priv_fun(){}	
};

class CAtest
{
	public:
	void x()
	{
	       AccessTest t;
    	       t.priv_fun();   //OK,友元类可以访问private成员函数
	       int x=t.priv_memb;  //OK,友元类可以访问private成员变量
        }
};

void Atest()
{
	AccessTest t;
	t.priv_fun();            //OK,友元函数可以访问private成员函数
	int x=t.priv_memb;       //OK,友元函数可以访问private成员变量
} 

int main()
{
	AccessTest at;
	at.priv_memb;       //ERROR,类实例变量无法访问private成员变量
	at.priv_fun();      //ERROR,类实例变量无法访问private成员函数
	Atest();
        return 0;
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=t(`<h3 id="_4-protected的访问权限" tabindex="-1"><a class="header-anchor" href="#_4-protected的访问权限"><span>4.protected的访问权限</span></a></h3><p><code>protected</code>的代码放到上面进行对比</p><p>没有继承关系，<code>protected</code> 和 <code>private</code>访问的内容是一样的</p><h3 id="_5-继承的访问权限控制" tabindex="-1"><a class="header-anchor" href="#_5-继承的访问权限控制"><span>5. 继承的访问权限控制</span></a></h3><h4 id="_1-public继承" tabindex="-1"><a class="header-anchor" href="#_1-public继承"><span>1. public继承</span></a></h4><p>​ 派生类通过public继承，基类的各种权限不变 。</p><pre><code> 派生类的成员函数，可以访问基类的public成员、protected成员，但是无法访问基类的private成员。

 派生类的实例变量，可以访问基类的public成员，但是无法访问protected、private成员，仿佛基类的成员之间加到了派生类一般。

 可以将public继承看成派生类将基类的public,protected成员囊括到派生类，但是不包括private成员。
</code></pre><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>#include&lt;iostream&gt;
#include&lt;string&gt;

using namespace std;

class AccessTest
{
public:
    int pub_mem;
    void pub_fun(){}
protected:
    int prot_mem;
    void prot_fun(){}
private:
    int priv_memb;
    void priv_fun(){}
};

class DAccessTest : public AccessTest
{
public:
    void test(){
        int x = pub_mem;     //OK
        pub_fun();           //OK

        int y = prot_mem;    //OK
        prot_fun();          //OK
        
        // int z = priv_memb;   //ERROR: 无法访问基类的私有成员
        // priv_fun();          //ERROR: 无法访问基类的私有成员函数
    }
};

int main(){
    DAccessTest dt;
    int x = dt.pub_mem;    //OK 继承后转为public，可以访问该内容
    // int y = dt.prot_mem;   //ERROR: 无法访问基类的保护成员
    // int z = dt.priv_memb;  //ERROR: 无法访问基类的私有成员
    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-protected继承" tabindex="-1"><a class="header-anchor" href="#_2-protected继承"><span>2. protected继承</span></a></h4><p>​ 派生类通过protected继承，基类的public成员在派生类中的权限变成了protected 。protected和private不变。 ​ 派生类的成员函数，可以访问基类的public成员、protected成员，但是无法访问基类的private成员。</p><pre><code> 派生类的实例变量，无法访问基类的任何成员，因为基类的public成员在派生类中变成了protected。

 可以将protected继承看成派生类将基类的public,protected成员囊括到派生类，全部作为派生类的protected成员，但是不包括private成员。

 private成员是基类内部的隐私，除了友元，所有人员都不得窥探。派生类的友元，都不能访问
</code></pre><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>#include&lt;iostream&gt;
#include&lt;string&gt;

using namespace std;

class AccessTest
{
    friend void Atest();
    friend class CAtest;
    public:
        int pub_mem;
        void pub_fun(){}
    protected:
        int prot_mem;
        void prot_fun(){}
    private:
        int priv_memb;
        void priv_fun(){}
        
};

class DAccessTest:protected AccessTest
{
    public:
        void test()
        {
            int x=pub_mem;     //OK
            pub_fun();         //OK
            

            int y=prot_mem;    //OK
            prot_fun();        //OK
            
            //int z=priv_memb;   //ERROR
            //priv_fun();        //ERROR
        }

};

 

int main()
{
    DAccessTest dt;
    int x=dt.pub_mem;    //ERROR，基类的成员现在是派生类的保护成员
    int y=dt.prot_mem;   //ERROR，基类的成员现在是派生类的保护成员
    int z=dt.priv_memb;  //ERROR
  return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-private继承" tabindex="-1"><a class="header-anchor" href="#_3-private继承"><span>3.private继承</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> 派生类通过private继承，基类的所有成员在派生类中的权限变成了private。
 派生类的成员函数，可以访问基类的public成员、protected成员，但是无法访问基类的private成员。

 派生类的实例变量，无法访问基类的任何成员，因为基类的所有成员在派生类中变成了private。

 可以将private继承看成派生类将基类的public,protected成员囊括到派生类，全部作为派生类的private成员，但是不包括private成员。

 private成员是基类内部的隐私，除了友元，所有人员都不得窥探。派生类的友元，都不能访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include&lt;iostream&gt;
#include&lt;string&gt;

using namespace std;

class AccessTest
{
	friend void Atest();
	friend class CAtest;
	public:
		int pub_mem;
		void pub_fun(){}
	protected:
		int prot_mem;
		void prot_fun(){}
	private:
		int priv_memb;
		void priv_fun(){}

};

class DAccessTest:private AccessTest
{
	public:
    void test(){
        int x=pub_mem;     //OK
        pub_fun();         //OK

        int y=prot_mem;    //OK
        prot_fun();        //OK

        //int z=priv_memb;   //ERROR
        //priv_fun();        //ERROR
    }
};



int main(){
	DAccessTest dt;
	//int x=dt.pub_mem;    //ERROR，基类的成员现在是派生类的私有成员
	//int y=dt.prot_mem;   //ERROR，基类的成员现在是派生类的私有成员
	//int z=dt.priv_memb;  //ERROR, private成员无法访问
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：继承修饰符，就像是一种筛子，将基类的成员筛到派生类。public、protected、private，就是筛子的眼。</p><pre><code>    通过public继承，所有基类成员（除了private），public、protected都到了派生类里面，public筛眼比较大，不会改变访问权限。
    通过protected继承，所有基类成员（除了private），public、protected都到了派生类里面，protected筛眼大小适中，所有过来的成员都变成了protected。
    通过private继承，所有基类成员（除了private），public、protected都到了派生类里面，private筛眼最小，所有过来的成员都变成了private。
</code></pre><h3 id="ps-关于class和struct的区别" tabindex="-1"><a class="header-anchor" href="#ps-关于class和struct的区别"><span>PS:关于class和struct的区别</span></a></h3><ol><li>class不写修饰符，成员默认是private的，而struct 默认是public的</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Base   //默认private
{
    int a;
    int b;
}

Base ba;
int x=ba.a;//错误
int y=ba.b;//错误

struct St  //默认public
{
    int a;
    int b;
}；

St st;
int x=st.a; //OK
int y=st.b;//OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>class的继承默认是private的，而struct默认是public的</li></ol><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>class Base{...};
class Derive:Base{...}  //private继承

struct BStruct{...};
struct DStruct:BStruct{...};//public继承
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><pre><code>                        版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
</code></pre><p>原文链接：https://blog.csdn.net/ycf74514/article/details/49053041</p>`,25);function R(x,A){const c=d("ExternalLinkIcon"),r=d("CodeTabs");return u(),m("div",null,[p,e("p",null,[i("以下为转载内容。原文链接："),e("a",o,[i("C++中关于public、protect、private的访问权限控制"),a(c)])]),_,a(r,{id:"36",data:[{id:"private"},{id:"protected"}]},{title0:n(({value:s,isActive:l})=>[i("private")]),title1:n(({value:s,isActive:l})=>[i("protected")]),tab0:n(({value:s,isActive:l})=>[h]),tab1:n(({value:s,isActive:l})=>[g]),_:1}),f])}const C=v(b,[["render",R],["__file","note2.html.vue"]]),y=JSON.parse('{"path":"/zh/Lilya/program/Cpp/note2.html","title":"2-类的概念","lang":"zh-CN","frontmatter":{"title":"2-类的概念","author":"黑静美(大自然的搬运工版)","category":["编程"],"tag":["cpp","C井"],"icon":"c","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":3,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"description":"类的概念，公有和私有 public/private 以及protected 1. 类的成员及其他方式的访问权限 类的成员以及成员函数函数，可以访问本类内的任何成员变量和成员函数（自身不受影响） 访问方式分为本类成员： 本类的变量，本类的函数；友类，友类的函数，友元 ； 类的实例变量 (在main函数中访问)，以及 派生类(继承关系)等 下文总结：除本类...","head":[["meta",{"property":"og:url","content":"https://github.com/Heijingmei/Heijingmei.github.io/zh/Lilya/program/Cpp/note2.html"}],["meta",{"property":"og:site_name","content":"BH工作室"}],["meta",{"property":"og:title","content":"2-类的概念"}],["meta",{"property":"og:description","content":"类的概念，公有和私有 public/private 以及protected 1. 类的成员及其他方式的访问权限 类的成员以及成员函数函数，可以访问本类内的任何成员变量和成员函数（自身不受影响） 访问方式分为本类成员： 本类的变量，本类的函数；友类，友类的函数，友元 ； 类的实例变量 (在main函数中访问)，以及 派生类(继承关系)等 下文总结：除本类..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T09:02:01.000Z"}],["meta",{"property":"article:author","content":"黑静美(大自然的搬运工版)"}],["meta",{"property":"article:tag","content":"cpp"}],["meta",{"property":"article:tag","content":"C井"}],["meta",{"property":"article:modified_time","content":"2024-06-12T09:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2-类的概念\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T09:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"黑静美(大自然的搬运工版)\\"}]}"]]},"headers":[{"level":2,"title":"类的概念，公有和私有","slug":"类的概念-公有和私有","link":"#类的概念-公有和私有","children":[]},{"level":2,"title":"public/private 以及protected","slug":"public-private-以及protected","link":"#public-private-以及protected","children":[{"level":3,"title":"1. 类的成员及其他方式的访问权限","slug":"_1-类的成员及其他方式的访问权限","link":"#_1-类的成员及其他方式的访问权限","children":[]},{"level":3,"title":"2.public的访问权限","slug":"_2-public的访问权限","link":"#_2-public的访问权限","children":[]},{"level":3,"title":"3. private的访问权限","slug":"_3-private的访问权限","link":"#_3-private的访问权限","children":[]},{"level":3,"title":"4.protected的访问权限","slug":"_4-protected的访问权限","link":"#_4-protected的访问权限","children":[]},{"level":3,"title":"5. 继承的访问权限控制","slug":"_5-继承的访问权限控制","link":"#_5-继承的访问权限控制","children":[{"level":4,"title":"1. public继承","slug":"_1-public继承","link":"#_1-public继承","children":[]},{"level":4,"title":"2. protected继承","slug":"_2-protected继承","link":"#_2-protected继承","children":[]},{"level":4,"title":"3.private继承","slug":"_3-private继承","link":"#_3-private继承","children":[]}]},{"level":3,"title":"PS:关于class和struct的区别","slug":"ps-关于class和struct的区别","link":"#ps-关于class和struct的区别","children":[]}]}],"git":{"createdTime":1718182921000,"updatedTime":1718182921000,"contributors":[{"name":"Heijingmei","email":"bh.heijingmei@gmail.com","commits":1}]},"readingTime":{"minutes":6.45,"words":1936},"filePathRelative":"zh/Lilya/program/Cpp/note2.md","localizedDate":"2024年6月12日","excerpt":"<h2><code>类</code>的概念，公有和私有</h2>\\n<div class=\\"language-c++\\" data-ext=\\"c++\\" data-title=\\"c++\\"><pre class=\\"language-c++\\"><code>#include&lt;iostream&gt; // 类似于c中的#include &lt;stdio.h&gt; ，由于C++于c是被继承关系，所以也可以写&lt;stdio.h&gt; 。但是&lt;iostream&gt;有所扩展（比如说这个class，c中是没有的）\\n#include&lt;string&gt;\\n \\nusing namespace std;\\n \\nclass AccessTest\\n{\\n\\tpublic:\\n\\t\\t\\n\\tprotected:\\n\\t\\t\\n\\tprivate:\\n\\t\\t\\n\\t\\t\\n};\\n</code></pre></div>","autoDesc":true}');export{C as comp,y as data};
