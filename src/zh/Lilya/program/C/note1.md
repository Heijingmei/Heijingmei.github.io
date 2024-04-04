---
title: 01-C 语言基础概念
date: 2024-03-27 16:09:18
author: 黑静美
isOriginal: true
category: 
    - 编程
tag:
    - C
    - C#
icon: c
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 3
comment: true
lastUpdated: true
editLink: false
backToTop: true
---

# What is C programm languege?

**C语言**（英語：**C Language**）是一种通用的、**[过程式](https://zh.wikipedia.org/wiki/过程式编程)**[**编程**語言](https://zh.wikipedia.org/wiki/程式語言)，支持[结构化编程](https://zh.wikipedia.org/wiki/结构化编程)、词法作用域和**<u>递归</u>**，使用静态类型系统，并且广泛用于[系统软件](https://zh.wikipedia.org/wiki/系统软件)与[应用软件](https://zh.wikipedia.org/wiki/应用软件)的开发。
C语言于1969年至1973年间，为了移植与开发[UNIX](https://z.wikipedia.org/wiki/UNIX)[作业系统](https://zh.wikipedia.org/wiki/作業系統)，由[丹尼斯·里奇](https://zh.wikipedia.org/wiki/丹尼斯·里奇)与[肯·汤普逊](https://zh.wikipedia.org/wiki/肯·汤普逊)，以[B语言](https://zh.wikipedia.org/wiki/B语言)为基础，在[贝尔实验室](https://zh.wikipedia.org/wiki/贝尔实验室)设计、开发出来。
(返回🔙 [rust](../rust/note1))

# Hallo, world!

```c
#include <stdio.h> //TODO:引入头文件 studio.h
//为了使用printf函数，需要首先包括所需文件，也称为头文件

/*TODO: "int main()" main()函数是程序入口
*大括号{}表示函数的开始与结束
*大括号内的语句决定了该函数在执行程序的作用*/

int main() {
    printf("Hello, world!\nHello, world!\n"); //分号代表语句结束
    return 0; //该语句则终止了 main() 函数，并返回数值0。数字0通常意味着我们的程序已经成功执行。（0 bug）任何其他数字都表示程序失败了。
}


```
### printf()

## 数据类型 Data type

每种类型所需的存储大小因平台而异
C语言有一个内置的sizeof操作符，可以返回特定的数据类型的内存占用大小。例如：

```c
int main() {
    /*TODO: int 整数，一个整数
     *TODO: float 浮点数，一个带有小部分数字
     *TODO: double: 双精度浮点数
     *TODO: char 单个字符
     *TODO：c语言有一个内置的sizeof，可以返回特定的数据类型的内存占用内存大小
    */
    printf("int: %ld \n",sizeof(int));
    printf("float: %ld \n",sizeof(float));
    printf("doucle: %ld \n",sizeof(double));
    printf("char: %ld \n",sizeof(char));
    return 0; //该语句则终止了 main() 函数，并返回数值0。数字0通常意味着我们的程序已经成功执行。（0 bug）任何其他数字都表示程序失败了。*/

    //TODO: syntax 语法
    //TODO: 程序输出限时的每种数据类型相对应大小（byte）
    //TODO: 格式指定符（%ld）的字符串
}
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218772/1697281955806-6ad2a6e4-683d-45cd-b19c-e7294d546103.png#averageHue=%232d2c2c&clientId=uc1e0b81b-207e-4&from=paste&height=165&id=OpAyL&originHeight=206&originWidth=421&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=12249&status=done&style=none&taskId=u755595bc-41f3-48a7-9c9e-09d39f14911&title=&width=336.8)

A. int, double, char, boolean
B. int, bool, string
C. int, float, double, char☑️
D. int, float, string, char



### int：整数

### float：浮点数

### double：双精度浮点数

### char：单个字符

## 变量 Variable

变量是内存中某块值的名称。
变量名（也称为标识符）必须以字母或下划线_开头，可以

---

由字母、数字和下划线_字符组成。
不同语言中，变量的命名规则各不相同，但是使用小写字母和下划线来分隔单词是很常见的（snake_case）。
变量在使用前也必须声明为一种数据类型。
### 命名规则

C 语言中的变量命名遵循一系列规则和约定。以下是主要的命名规则：

1.  **首字符**：变量名必须以字母（`a-z` 或 `A-Z`）或下划线（`_`）开始。 
2.  **后续字符**：变量名的后续字符可以是字母、数字（`0-9`）或下划线。 
3.  **区分大小写**：C 语言是区分大小写的，所以 `Variable` 和 `variable` 是两个不同的变量名。 
4.  **长度限制**：尽管 C 语言标准没有明确变量名的最大长度，但大多数编译器对标识符长度都有一定的限制。然而，这个长度通常都很长，足以满足大多数应用的需要。 
5.  **关键字限制**：不能使用 C 语言的关键字作为变量名。例如，`int`, `return`, `if` 等都是保留的关键字，不能用作变量名。 
6.  **含义**：尽管不是严格的规则，但建议变量名应该有意义，并描述其用途或内容。例如，如果一个变量用于存储年龄，那么 `age` 是一个比 `x` 或 `a1` 更好的选择。 
7.  **命名约定**： 
   - **驼峰式命名**：例如，`myVariableName`。
   - **下划线分隔**：例如，`my_variable_name`。
   - **常量命名**：有些程序员选择使用全部大写字母来命名常量，例如，`PI` 或 `MAX_LENGTH`。
8.  **避免使用特定前缀**：在某些编程约定中，以下划线开始的变量名（如 `_variable`）可能有特定的含义或用途。为了避免与库或编译器特定命名冲突，最好避免使用这样的前缀，除非你知道它的确切含义和用途。 
9.  **全局变量**：有些编程约定建议为全局变量使用特定的前缀，以便更容易地区分它们和局部变量。 
### 示例

#### int & float：整数和浮点数

```c
int main() {
    //声明的数据类型
    int my_var;
    int wuyue;  //int 声明的数据类型为int

    my_var = 42;//赋值
    printf("%d",my_var);

    //同时声明多个变量
    int x,y,z; //不能重复声明同一变量
    //int x;
    x = 1;
    printf("x = %d \n",x);
    y = 2;
    z = 10;

    x =
//TODO:变量就是在计算机的内存当中开辟空间
// 内存
    int l = 12, yy = 1111;
    
    return 0;
}
```
遵循这些规则和约定可以确保你的代码更具可读性，减少出错的机会，并与其他 C 程序员更容易协作。

示例：求和
```c
    int x,y,z;
    x = 1;
    printf("x = %d \n",x);
    y = 2;
    z = 10;

//求和
    x = x + 1;
    x += x;
    printf("x = %d \n",x);
    x = x + y;
    printf("x = %d \n",x);
```
```c
int main() {
    float wy_lucky = 1.2f;
    printf("%f\n", wy_lucky);
    printf("%.3f", wy_lucky);//不同精度 %.3 小数点后3位
    return 0;
}

```
#### char

```c
int main() {
    char ch = 'w';
    printf("%c\n", ch);
    return 0;
}
```
## 常量  Constant

一个常量存储了一个不能改变值的变量(但必须初始化变量)。
通过使用有意义的常量名，代码会更易阅读和理解。 为了区分常量和变量，一个常见的做法是使用大写的标识符来声明常量。
定义常量的一种方法是在变量声明前使用 const 关键字。

### 示例：const double

```c
int main() {
    //const声明常量并初始化值
    const double PI = 3.14;
    printf("%f",PI) //在程序执行期间，常量PI的值不能改变
    //PI = 888
    return 0;
}
```

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218772/1697886032745-a6a9c745-d596-4a42-9a2c-c909047449a8.png#averageHue=%232f2e2e&clientId=u5dabb720-b140-4&from=paste&height=171&id=u65949d67&originHeight=214&originWidth=628&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=19402&status=done&style=none&taskId=ub3f7b669-ac35-4735-9c28-c795a77a114&title=&width=502.4)

常量在声明时**必须用一个值进行初始化**，因为常量在创建出来之后，不能被修改。所以，一开始如果不赋值的话，在后面你就无法赋值了。
## define

### const 和 define 在 C 语言中都可以用来定义常量，但是它们的工作方式有所不同，并且各有各的用途。以下是它们之间的一些主要区别：

#### 预处理器和编译器：

define 是预处理器指令，它在编译过程的预处理阶段进行替换，而 const 是编译器指令，它在编译阶段进行处理。 
####  作用域：

define 不考虑作用域，只要在定义之后，都可以使用。而 const 具有作用域，只在定义它的作用域内有效。 
####  内存占用：

define 定义的常量不会占用内存，因为它们在预处理阶段就被替换了。但是 const 定义的常量会占用内存，因为它们在运行时还存在。 
####  类型和检查：

define 定义的常量没有类型，它只是简单的文本替换，编译器无法进行类型检查。但 const 定义的常量有类型，编译器会进行类型检查。 

现在我们来看一些代码示例：

使用 define

```c
#include <stdio.h>

#define PI 3.14159 //没有分号

int main() {
    float radius = 5.0f;
    float area = PI * radius * radius;
    printf("Area: %f\n", area);

    printf("Area: %d\n", area); //错误的声明Format
    return 0;

}
```

在上面的代码中，PI 被定义为 3.14159，并在计算面积时使用。

对比使用 const
```c
int main() {
    const float pi = 3.14159;
    float radius = 5.0;
    float area = pi * radius * radius;
    printf("Area: %f\n", area);
    return 0;
}
```
::: info

在这个代码中，pi 是一个 const 常量，也被用来计算面积。注意，pi 有一个类型（double/float），并且只在 main 函数的作用域内有效。
:::



在编译之前，预处理程序将代码中的每个宏标识符替换为指令中的相应值。在这种情况下，每个出现的 PI 都被替换为 3.14。 发送给编译器的最终代码将已经有了常量值。const和#define的区别在于，前者使用内存进行存储，而后者不使用。
### Question 1 在具体使用的时候我们应该如何选择？

选择 const 或者 define 的决定依赖于具体的应用场景和你的需求。以下是一些考虑的因素：

### 类型检查：
如果你需要编译器进行类型检查，你应该选择 const，因为 define 不提供类型检查。如果你试图使用一个与定义的类型不同的值，使用 const 的代码会在编译时报错。
### 作用域：
如果你希望常量只在特定的作用域内有效，你应该使用 const，因为它会考虑作用域。define 定义的宏在定义后的所有地方都是有效的。
### 性能：
由于 define 在预处理阶段就进行了文本替换，所以它不会占用内存，这可能会有一些性能优势。然而，这个优势通常很小，并且在现代计算机上可能无法察觉。
### 编程风格：
在一些编程风格中，例如 C++，推荐使用 const 而不是 define，因为 const 提供了更多的类型安全性和更好的集成到语言中。

总的来说，两者都可以用来定义常量，但它们的适用场合并不完全相同。如果你需要更多的类型安全性或更细的作用域控制，使用 const 会更好。而如果你正在定义一个需要在多个文件或整个项目中使用的常量，define 可能是一个更好的选择。
# 输入及输出
## 输入 Input

C 支持多种方式获取用户输入。 如 `getchar()` 获取一个单字符的输入。

**比如**:
### char
```c
#include <stdio.h>

//#define


int main() {
    char a = getchar(); //获取单个输入字符
    //输入字符储存在变量a中
    return 0;

}
```
** **
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218772/1698576958288-4f092b95-2347-480a-9c08-57ecc64ac7af.png#averageHue=%23303030&clientId=udb70a852-d27c-4&from=paste&height=146&id=tHTSW&originHeight=292&originWidth=1122&originalType=binary&ratio=2&rotation=0&showTitle=false&size=22657&status=done&style=none&taskId=uda598012-d9ae-4948-905d-f9dc916e460&title=&width=561)

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218772/1698577028253-05ebd10f-3f16-4335-9d57-6062a6bb3821.png#averageHue=%232e2e2e&clientId=udb70a852-d27c-4&from=paste&height=147&id=HcfmM&originHeight=388&originWidth=1494&originalType=binary&ratio=2&rotation=0&showTitle=false&size=30557&status=done&style=none&taskId=u2eab4ef3-7c92-4b2d-84ae-cedbc6a62c0&title=&width=565)
使用数组已获得更多可识别的输入类型
```c
#include <stdio.h>

//#define


int main() {
    char a[100]; //在这里，我们将输入一个大小100的字符串中
    //获取字符串
    gets(a); //旧代码，不安全 unsafe
    printf("You entered: %s", a);
    return 0;

}
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218772/1698577789867-d4c85d35-d4ee-4513-91c9-ca9792207571.png#averageHue=%23323030&clientId=udb70a852-d27c-4&from=paste&height=183&id=VgTlC&originHeight=366&originWidth=1140&originalType=binary&ratio=2&rotation=0&showTitle=false&size=33956&status=done&style=none&taskId=u5c176e08-c0f5-459e-81aa-038e7623b55&title=&width=570)
### scanf
 
`scanf()` 扫描符合格式指定符的输入。

**例如：**

```c
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a); //%d 等共同使用 &代表地址

    printf("You entered: %d", a);
    
    
    return 0;
}
```

变量名前的 `&` 符号是**地址运算符**。它给出了一个变量的地址，或在内存中的位置。这样做是因为 **scanf** 将一个输入值放在一个变量地址上。

1. scanf：获取用户输入
2. %d：指定用户输入的数据类型；
3. 上面得到用户输入的值，存储在 a 变量中。但是，想要存储在 a 变量中，我们需要知道 a 的家庭住址「在这里，也就是 a 变量的物理地址」

想要获取用户输入的字符串，代码如下：

```c
#include <stdio.h>

int main() {
    char inputString[100];
    printf("请输入一串字符：");
    scanf("%s", inputString);

    printf("You entered: %s", inputString);

    return 0;
}
```

## Question 2

**scanf("%s", inputString); 为什么不需要 &？**

在 C 语言中，当你需要使用 `scanf()` 函数读取一个整型、浮点型等基本数据类型的值时，你需要在变量名前添加 `&` 操作符，这是因为 `scanf()` 函数需要知道这个变量的内存地址，以便将用户的输入值存储在那里。这就是 `&` 操作符的作用——获取变量的内存地址。

然而，当你使用 `scanf()` 函数读取字符串时，情况就不同了。在 C 语言中，字符串其实是字符数组，而数组名本身就是一个指向数组首元素的指针，也就是说，它已经是一个地址了。因此，当你使用 `scanf()` 函数读取字符串时，你只需要直接传入数组名（即字符串名），而无需在前面添加 `&` 操作符。

所以，当你写 `scanf("%s", inputString);` 时，你实际上是在告诉 `scanf()` 函数：“请将输入的字符串存储在名为 `inputString` 的字符数组的起始位置（即 `inputString` 的地址）”。这也是为什么你不需要添加 `&` 操作符的原因。

**练习：** 输入两个整数并输出它们的和。

```c
#include <stdio.h>

int main() {
    int a, b;
    printf("Enter two numbers:");
    scanf("%d %d", &a, &b);

    printf("\nSum: %d", a+b);

    return 0;
}
```
> `scanf()`一旦遇到空格就会停止读取，所以像 "Hello World "这样的文本对`scanf()`来说是两个独立的输入。

## 探究 scanf 获取字符串的特性

首先，我们需要明白 `scanf()` 是如何工作的。`scanf()` 是一个用于读取用户输入的函数。它通常和特定的格式说明符一起使用，例如：

###### `%s`（对应字符串 char xxx[]）
###### `%d`（对应整数 int）
###### `%f`（对应浮点数 float）等等。

这些说明符告诉 `scanf()` 我们期待输入的数据类型。

特别地，当我们用 `%s` 格式说明符与 `scanf()` 一起使用时，它会读取连续的字符，直到遇到一个"空白"字符（比如空格、制表符或换行符）。因此，如果我们试图使用 `scanf()` 读取"Hello World"这样的带空格的字符串，那么 `scanf()` 只会读取"Hello"，因为空格就在这之后。

这是一个代码示例，以及运行它的结果：

```c
#include <stdio.h>

int main() {
    char str[20];
    printf("请输入一个字符串: ");
    scanf("%s", str);
    printf("你输入的字符串是: %s\n", str);
    return 0;
}
```
 
如果你在提示下输入"Hello World"，输出将会是：

```
请输入一个字符串: Hello World
你输入的字符串是: Hello
```

如果你想读取含有空格的字符串，你应该使用`fgets()`函数，它可以读取整行（包括空格），直到遇到换行符或者达到给定的最大字符数。例如：

```c
#include <stdio.h>

int main() {
    char str[20];
    printf("请输入一个字符串: ");
    fgets(str, 20, stdin); // 从标准输入（stdin）读取最多20个字符
    printf("你输入的字符串是: %s\n", str);
    return 0;
}
```

这次，如果你在提示下输入"Hello World"，输出将会是：

```
请输入一个字符串: Hello World
你输入的字符串是: Hello World
```

注意：`fgets()`会读取换行符（如果在给定字符限制内），因此在输出中可能会包含换行符。如果你想移除这个换行符，你可以编写额外的代码来处理这个问题。

`fgets()` 函数的第二个参数并不是限制 `stdin` 的输入，而是你定义的缓冲区大小。这个参数应当等于你的字符数组的大小。如果你的数组大小为 20，那么`fgets()` 函数将最多读取 19 个字符和一个 `\0` 结束符。这是因为在C语言中，字符串是以 `\0` 字符结束的。

这就意味着如果你想读取更长的字符串，你应该定义一个更大的字符数组。例如，如果你想读取最多200个字符，你可以这样做：

```c
#include <stdio.h>

int main() {
    char str[200];
    printf("请输入一个字符串: ");
    fgets(str, 200, stdin);
    printf("你输入的字符串是: %s\n", str);
    return 0;
}
```

这个程序将允许用户输入最多199个字符（因为还需要一个字符空间来存放`\0`结束符）。如果用户输入超过199个字符，`fgets()`函数将只读取前199个字符。


details fgets 中如果缓冲区的数字大于数组中的数字会怎么样？

解析 

如果在 `fgets()` 函数中，你指定的缓冲区大小大于你实际定义的字符数组大小，那么可能会导致缓冲区溢出。这是一种非常危险的情况，因为它可能会覆盖掉你的程序其他部分的数据，或者导致程序崩溃。

例如，假设你有一个只能存储 10 个字符的数组，但是你试图从 `stdin` 中读取 100 个字符：

```c
#include <stdio.h>

int main() {
    char str[10];
    printf("请输入一个字符串: ");
    fgets(str, 100, stdin); // 这里定义的缓冲区大小比数组的大小大，可能会导致缓冲区溢出
    printf("你输入的字符串是: %s\n", str);
    return 0;
}
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218772/1698580542956-fa9eb424-cc2f-4244-a2a6-0968008dd9c7.png#averageHue=%232e2e2e&clientId=udb70a852-d27c-4&from=paste&height=254&id=E9wj5&originHeight=508&originWidth=1340&originalType=binary&ratio=2&rotation=0&showTitle=false&size=45620&status=done&style=none&taskId=u16d131db-3529-419a-bcbf-09be2d98965&title=&width=670)
这段代码是有问题的，因为当用户输入的字符串长度超过数组的长度时，`fgets()` 将会写入超过数组长度的数据，可能会破坏内存中的其他数据，导致未定义的行为。这可能会引发安全问题，因此必须避免。

总的来说，你总是需要确保你为 `fgets()` 提供的缓冲区大小不超过你的字符数组的实际大小，以防止缓冲区溢出。

示例 

```c
#include <stdio.h>

int main() {
    char str1[10];
    char str2[10] = "important";

    printf("str1: %s\n", str1);
    printf("str2: %s\n", str2);

    printf("请输入一个字符串: ");
    fgets(str1, 20, stdin);  // 这里故意使得缓冲区大小大于数组大小

    printf("str1: %s\n", str1);
    printf("str2: %s\n", str2);

    return 0;
}
```

但并不是百分百能正确运行出来，现在计算机都有内存溢出保护的机制。


**填空，读取单个字符，并存储在字符变量**`**c**`**中。**

```c
char c = ___();
```
`getchar`

##  scanf 是否需要 & 速查表

在 C 语言中，当使用 `scanf` 函数来获取用户输入时，我们经常需要使用取址符( & )来指定我们想要存放数据的变量的地址。这样，`scanf` 可以直接修改该内存位置的值。以下是一个基于数据类型的简单表格，显示了哪些类型需要取址符以及哪些不需要：

| 数据类型 | 是否需要取址符 (&) | 示例 |
| --- | --- | --- |
| `int` | 需要 | `scanf("%d", &num);` |
| `float` | 需要 | `scanf("%f", &f);` |
| `double` | 需要 | `scanf("%lf", &d);` |
| `char` | 需要 | `scanf(" %c", &c);` |
| `long` | 需要 | `scanf("%ld", &l);` |
| `short` | 需要 | `scanf("%hd", &s);` |
| `long long` | 需要 | `scanf("%lld", &ll);` |
| `unsigned int` | 需要 | `scanf("%u", &unum);` |
| `char[]`
 (字符串数组) | 不需要 | `scanf("%s", str);` |
| `char*`
 (字符指针) | 不需要 | `scanf("%s", strPtr);` |


**注意**:

1. 字符串 (`char[]`或`char*`) 在使用 `scanf` 时不需要取址符，因为数组名或字符指针本身就代表一个地址。
2. 当读取 `char` 类型时，通常在格式字符串中放置一个空格（如`" %c"`），以跳过可能存在的换行符或空格。
3. 在实际使用中，应确保为 `scanf` 提供足够大小的缓冲区以避免溢出，特别是当读取字符串时。
4. 使用 `scanf` 读取其他复杂数据结构或自定义数据类型时，通常也需要使用取址符。

总的来说，基本的数据类型（如`int`，`float`，`char`等）在使用`scanf`时都需要取址符。但字符串和指针不需要取址符，因为它们本身就是地址。

## 输出 Output
### 6.4 输出 Output

在前面的小节中，我们已经使用了 `printf()` 函数来输出内容。在本小节中，我们将介绍其他几个同于**输出**的函数。关于 printf 函数，我后面会专门讲一下。

#### `putchar()` 输出单一字符。 比如:

```c
#include <stdio.h>

int main() {
  char a = getchar();

  printf("You entered: ");
  putchar(a);

  return 0;
}
```

输入存储在变量 **a** 中，并用 `putchar(a)` 输出字符变量 `a`。

####  puts( )
`puts()`函数用于将输出一个**字符串**。 一个字符串存储在一个 char 数组中。 **例如：**

```c
#include <stdio.h>

int main() {
  char a[100];

  gets(a); 

  printf("You entered: ");
  puts(a); 

  return 0;
}
```

在这里，我们将输入的内容存储在 100 个字符的数组中，并用 `puts()` 来输出该字符串。

#### `scanf()` 扫描符合格式指定符的输入。printf( )

**例如:**

```c
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);

    printf("You entered: %d", a);

    return 0;
}
```

变量名前的 `&` 符号是**地址运算符**。它给出了一个变量的地址，或在内存中的位置。需要这样做是因为 **scanf** 将一个输入值放在一个变量地址上

作为另一个例子，让我们输入整数并输出它们的总和：

```c
#include <stdio.h>

int main() {
    int a, b;
    printf("Enter two numbers:");
    scanf("%d %d", &a, &b);

    printf("\nSum: %d", a+b);

    return 0;
}
```

**填空，输出单字符变量**`**c**`**。**

```c
char c = 's';
___(c);
```

'putchar' 
##  printf 函数

C 语言中，输出内容到屏幕的基本函数是 `printf()` 函数，该函数声明在 `stdio.h` 头文件中。

在第一个"Hello World"程序中引入了 **printf** 函数。对这个函数的调用需要一个**格式字符串**，其中可以包括用于输出特殊字符的**转义字符**和由值替换的**格式指定符**。

**例如：**

```c
#include <stdio.h>

int main() {
    printf("The tree has %d apples.\n", 22);
    /* output: The tree has 22 apples. */

    printf("\"Hello World!\"\n");
    /* output: "Hello World!" */
}
```

现在，我们来学习如何使用它。

### printf() 函数基本使用


 C 语言中**输出内容到屏幕**的基本函数是 `printf()` 函数，该函数的声明在
 `stdio.h` 头文件中。

在第一个"Hello World"程序中引入了 **printf** 函数。对这个函数的调用需要一个**格式字符串**，其中可以包括用于输出特殊字符的**转义字符**和由值替换的**格式指定符**。

**例如：**

```c
#include <stdio.h>

int main() {
    printf("The tree has %d apples.\n", 22);
    /* output: The tree has 22 apples. */

    printf("\"Hello World!\"\n");
    /* output: "Hello World!"  todo: \" */ 
}
```
#### 

首先，我们从最基础的 `printf()` 函数开始。下面是一个最简单的 C 程序，该程序使用 `printf()` 函数向控制台打印出一段文字。

```c
#include <stdio.h>  // 引入stdio.h头文件，这个头文件中声明了printf()函数

int main() {  // main函数是C程序的入口
    printf("Hello, World!\n");  // 使用printf函数打印一段文字到控制台
    return 0;  // main函数结束，返回0
}
```

###  printf() 函数中的转译序列
#### `\n`换行符，打印完这个字符后，光标会移动到下一行开始位置
#### `\t`制表符，打印完这个字符后，光标会移动到下一个制表位置
#### `\\`反斜杠，打印\符号
#### `\'`单引号
#### `\“`双引号
#### `\b`退格  删除特定值
```c
   printf("Hello,\nworld!\n");
    /*
    Hello,
    world!
    */
    printf("Hello\tworld!\n"); //Hello	world!
    printf("Hello\\world!\n"); //Hello\world!
    printf("Hello/world!\n"); //Hello/world! todo 不需要特殊转义
    printf("Hello\'world!\'\n"); //Hello'world!'
    printf("Hello\"world!\"\n"); //Hello"world!"
    printf("Hello world!\b\n"); //Hello world
```
###  printf() 函数中的格式化输出

格式化指定符以百分号开始，并由格式字符串后的相应参数取代。一个格式指定符可以包括几个选项，以及一个转换字符：
```c
%[-][wid].[precision]conversion character
```
`-`指定字符串中的数据的左对齐 没有该符号为右对齐
可选的`[width]`提供了最小字符数
其中`.`将宽度⬆️与精度⬇️分开
可选的精度`[presicion]` 给出了数字的小数位数。如果-
如果有必要，转换字符将参数`conversion character`转换为指定的类型:
`%d`：整数数据（十进制）
`%c`：字符
`%s`：字符串
`%f`：浮点数
`%e`：科学记数法
`%x`：十六进制
`%o`:  八进制

  C语言中的 `printf` 函数支持多种格式控制符来打印各种数据类型。以下是最常用的格式控制符列表：

| 控制符 | 描述 |
| --- | --- |
| `%d` | 以十进制形式输出带符号整数 |
| `%i` | 以十进制形式输出带符号整数（与 `%d`相同） |
| `%u` | 以十进制形式输出无符号整数 |
| `%f` | 输出单精度浮点数 |
| `%lf` | 输出双精度浮点数 |
| `%e` | 使用科学计数法格式输出单精度浮点数 |
| `%E` | 使用科学计数法格式输出单精度浮点数（使用大写的 `E`） |
| `%g` | 对于 `%f` 和 `%e`，输出长度较短的一种 |
| `%G` | 对于 `%f`和 `%E`，输出长度较短的一种 |
| `%x` | 以十六进制形式输出无符号整数（小写字母） |
| `%X` | 以十六进制形式输出无符号整数（大写字母） |
| `%o` | 以八进制形式输出无符号整数 |
| `%s` | 输出一个字符串 |
| `%c` | 输出一个字符 |
| `%p` | 输出指针的值 |
| `%n` | 将到目前为止输出的字符数存入整数指针参数所指的位置 |
| `%%` | 输出 `%`符号 |


这些控制符可以与标志、宽度、精度和长度修饰符结合使用，以控制输出的格式。例如，`%6.2f` 表示输出的浮点数至少有6个字符宽，且小数点后有两位数字。

长度修饰符可以与某些格式控制符结合，以表示特定的大小或者长度的变量类型，例如：

| 长度修饰符 | 描述 |
| --- | --- |
| `hh` | 与整数格式控制符一起使用，表示 `signed char`
 或 `unsigned char` |
| `h` | 与整数格式控制符一起使用，表示 `short int` |
| `l` | 与整数格式控制符一起使用，表示 `long int`；
与 `%f`， `%e`, `%g`一起使用表示 `double` |
| `ll` | 与整数格式控制符一起使用，表示 `long long int` |
| `L` | 与 `%f`, `%e`, `%g`一起使用，表示 `long double` |
| `j` | 与整数格式控制符一起使用，表示 `intmax_t`
 或 `uintmax_t` |
| `z` | 与整数格式控制符一起使用，表示 `size_t` |
| `t` | 与整数格式控制符一起使用，表示 `ptrdiff_t` |


请注意，支持的长度修饰符可能会根据不同的编译器和平台而有所不同。

## 格式化输入
scanf 函数用于将输入分配给变量。对于这个函数的调用是根据格式指定符扫描输入，在必要时转换输入/
如果输入不能被转换，那么就不能被赋值。scanf()语句会等待输入，然后进行赋值。
```c
    int x;
    float num;
    char text[20];
    scanf ("%d %f %s", &x, &num, text);
    printf("%d %f %s", x, num, text);
    
```

输入 10 22.5 abcd，然后按回车键，将 10 分配给 x，22.5 分配给 num，abcd 分配给 text。

注意，**必须使用 & 来访问变量地址**。字符串不需要 &，因为字符串的名字就像一个指针。

格式指定符以百分号 % 开始，用于为控制字符串后的相应参数赋值。空白、制表符和换行符被忽略。

一个格式指定符可以包括几个选项和一个转换字符:

```c
%[*][max_field]conversion character
```

- 可选的*将跳过输入字段
- 可选的max_field指定了输入字段的最大字符

如有必要，转换字符将参数conversion character转换为制定类型，如

- **d** - 十进制
- **c** - 字符
- **s**- 字符串
- **f** - 浮点数
- **x** - 十六进制

例如：每个程序都从读取用户输入开始，然后打印出用户输入的值。在这些例子中，'%' 后面的字符定义了输入或输出值的类型，而 '&' 用于获取变量的地址，以便 scanf 可以将读取的值存储在正确的位置。
详细解释上面的 demo 代码：

这个程序首先从用户输入获取数据，然后将数据赋值给指定的变量，最后打印这些变量的值。

以下是具体步骤的解释：

1. 程序首先调用 scanf 函数从用户输入读取数据。格式字符串 "%2d %d %*f %5s" 定义了需要读取的数据类型和格式。这个字符串表示：

- 读取一个最多两位的十进制整数并存储到变量 x 中（对应 "`%2d`" ）
- 然后跳过一个或多个空格（对应 " "）
- 再读取一个十进制整数并存储到变量 y 中（对应 "%d"）
- 然后跳过一个或多个空格（对应 " "）
- 然后读取一个浮点数，但是忽略它不保存（对应 "`%*f`"）
- 然后跳过一个或多个空格（对应 " "）
- 最后读取一个最多五个字符的字符串并存储到 text 数组中（对应 "%5s"）。
## 代码注释
###  多行注释
注释是程序代码的解释信息，你可以在程序中添加注释，让代码更易阅读理解。编译器会**忽略注释**，所以它们对程序没有影响。
注释以斜线 `/*` 开始，以斜线 `*/` 结束，可以出现在代码的任何地方。 注释可以和语句在同一行，也可以跨越多行。 **例如：**

```c
#include <stdio.h>

/* 简单的c语程序
 *  Version 1.0
 */
int main() {
    /* 输出字符串 */
    printf("Hello World!");
    return 0;
}
```

> 正如你所看到的，注释向读者澄清了程序的意图。使用注释来澄清代码段背后的目的和逻辑。


### 单行注释
C++ 引入了双斜线注释 `//` 作为注释单行的一种方式。大部分 C 语言编译器也支持单行注释。 **例如：**
```c
#include <stdio.h>

int main() {
    int x = 42; // 声明int变量x
    
    //%d 占位符，此处代表x
    printf("%d", x);
    
    return 0;
}
```

> 给代码添加注释是良好的编程实践。它有助于你和他人清楚地了解代码。符号|内容|


# **算术运算符**
### C 支持的 **算术运算符**：
`+`（加法）、`-`（减法）、`*`（乘法）、`/`（除法）和 `%`（模除法）。
运算符经常用来组成一个**算术表达式**，如`10+5`，在这种情况下，它包含两个**操作数**和**加法**运算符。

算术表达式经常用于赋值语句中。 **例如：**
```c
#include <stdio.h>

int main() {
    int length = 10;
    int width = 5;
    int area;

    area = length * width;
    printf("%d \n", area);  /* 50 */

    return 0;
}
```

- 除法 

C 语言有两个除法运算符: `/`  和  `%`。 根据操作数的数据类型，除法 `/` 运算符有不同的表现。
当两个操作数都是 **int** 数据类型时，为**整数除法**，也称为**截断除法**，去掉任何余数，结果是一个整数。
当一个或两个操作数都是实数（`float` 或 `double` ）时，结果是一个实数。
`%` 运算符只返回整数除法的余数。它对许多算法很有用，如欧几里得算法求最大公约数。但**模数除法**不能在浮点数上执行。
下面的例子演示了除法：
```c
#include <stdio.h>

int main() {

    // TODO 除法
    int i1 = 10;
    int i2 = 3;
    int quotient, remainder;
    float f1 = 4.2;
    float f2 = 2.5;
    float result;

    quotient = i1 / i2; //3
    remainder = i1 % i2; //1
    result = f1 / f2; //1.68

    printf("%d \n", quotient);
    printf("%d \n", remainder);
    printf("%f \n", result);

    return 0;

}
```

假设你有一个两位的整数，我们需要通过以下规则产生两个新的数字

- 第一个新数字是原数字的两位数中的各个数字的和
- 第二个新数字是原数字的反转 (如原数字为21，反转后的数字为12)。
- 


输入:
一个整数 `**x**`(10 ≤ `x` ≤ 99)
输出:
两个整数，或者一个错误信息字符串。
示例:
假设输入的数字为 91，那么你的代码应当输出两个数字: 10 (9和1的和)和19 (91的反转)。
假设输入的数字为 26，那么你的代码应当输出两个数字: 8 (2和6的和)和62 (26的反转)。
假设输入的数字为 18，那么你的代码应当输出两个数字: 9 (1和8的和)和81 (18的反转)。
```c
#include <stdio.h>

int main() {
   int x;
   int x_0, x_1;
   printf("Please input a 2-dig number" );
   scanf("%d",&x);
   x_1 = x/10;
   x_0 = x%10;

   printf("The sum number is %d", x_0 + x_1);

   printf("The units and tens remainded number is %d", x_0 * 10 + x_1);

   return 0;

}
```
C 语言根据运算符的**优先级**来计算算术表达式。

`+` 和 `-` 的优先级相同，`*`、`/` 和 `%` 的优先级也相同。

首先按照从左到右的顺序执行 `*`、`/` 和 `%`，然后是 `+` 和 `-` 。 你可以通过使用圆括号 `()` 来改变计算的顺序，表示哪些运算要先执行。

例如，`5+3*2`的结果是 11，而 `(5+3)*2` 的结果是16。

**例如：**

```c
#include <stdio.h>

int main() {
    int a = 6;
    int b = 4;
    int c = 2;
    int result;
    result = a - b + c;  // 4
    printf("%d \n", result);
    result = a + b / c;  // 8
    printf("%d \n", result);
    result = (a + b) / c;  // 5
    printf("%d \n", result);

    return 0;
}
```


:::warning
C 在执行计算算术表达式时，对于顺序无关的运算可能不是严格的从左到右计算。例如，`x*y*z` 可能被视为`(x * y) * z` 或 `x * (y * z)`。如果顺序很重要，请将表达式分成不同的语句。
:::

**练习：** 填空，变量 `x` 减去 `y`，再相加 `z`  并将结果赋值给 `result`。

```c
int x = 6;
int y = 4;
int z = 2;

int res = (x - y) + z;
```

### C 语言运算符优先级

C 语言的运算符优先级决定了表达式中多个运算符的运算顺序。以下是 C 语言运算符的优先级列表，从最高到最低：

1.  **后缀**： 
   - `()`: 函数调用
   - `[]`: 数组下标
   - `.`: 结构体成员选择
   - `->`: 通过指针选择结构体/联合体成员
   - `++`: 后缀递增
   - `--`: 后缀递减
2.  **前缀**： 
   - `++`: 前缀递增
   - `--`: 前缀递减
   - `+`: 正号
   - `-`: 负号
   - `!`: 逻辑非
   - `~`: 位非
   - `*`: 解引用
   - `&`: 取址
   - `sizeof`: 获取大小
   - `_Alignof`: 对齐要求 (C11起)
   - `(类型)`：强制类型转换
3.  **乘除**： 
   - `*`: 乘
   - `/`: 除
   - `%`: 取余
4.  **加减**： 
   - `+`: 加
   - `-`: 减
5.  **位移**： 
   - `<<`: 左移
   - `>>`: 右移
6.  **关系**： 
   - `<`: 小于
   - `<=`: 小于等于
   - `>`: 大于
   - `>=`: 大于等于
7.  **相等**： 
   - `==`: 等于
   - `!=`: 不等于
8.  **位与**： 
   - `&`
9.  **位异或**： 
   - `^`
10.  **位或**： 
   - `|`
11.  **逻辑与**： 
   - `&&`
12.  **逻辑或**： 
   - `||`
13.  **条件**： 
   - `? :` (三元运算符)
14.  **赋值**： 
   - `=`: 赋值
   - `+=`: 加并赋值
   - `-=`: 减并赋值
   - `*=`: 乘并赋值
   - `/=`: 除并赋值
   - `%=`: 取余并赋值
   - `<<=`: 左移并赋值
   - `>>=`: 右移并赋值
   - `&=`: 位与并赋值
   - `^=`: 位异或并赋值
   - `|=`: 位或并赋值
15.  **逗号**： 
   - `,` (逗号运算符)

#### 在一个复杂的表达式中，你可以使用括号 `()` 来改变运算顺序，明确优先级。

### 类型转换
当一个算术表达式包含不同的数据类型操作时，它们会在一个被称为类型转换的过程中自动进行必要的转换。
例如,在一个同时涉及浮点数`float`和`int`的计算中，编译器会把整数转化为浮点数。
#### 自动类型转换
在下面的程序中，变量**increase**被自动转换为**浮点数**：
```c
#include <stdio.h>

int main() {
   float price = 6.50;
   int increase = 2;
   float new_price;

   new_price = price + increase;
   printf("New price is %4.2f", new_price);
/*Output: new price is 8.50 */

    return 0;

}
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39218772/1700394800397-3911208d-f2ae-44fa-badd-9f7231e8f722.png#averageHue=%23393e42&clientId=u7150809b-39e5-4&from=paste&height=162&id=u7e87a5dc&originHeight=324&originWidth=1160&originalType=binary&ratio=2&rotation=0&showTitle=false&size=38689&status=done&style=none&taskId=u30c80c94-bad8-4a8d-a1bb-18711c3886c&title=&width=580)
浮点数默认为double类型，如果想要使用单精度，请标明“f”

在 C 语言中，当两个不同的数据类型进行运算时，C 语言会进行自动类型转换，以确保数据不会因为类型不匹配而发生错误。这种转换通常是根据类型的“精度”来进行的。以下是 C 语言中基本数据类型的精度顺序，从最低到最高：
1.`char`/`unsigned char`
2.`short int`/`unsigned short int`
3.`int`/`unsigned int`
4.`long int`/`unsigned long int`
5.`long long int`/`unsigned long long int`
6.`float`
7.`double`
8.`long double`
，C 语言会自动将精度较低的类型转换为精度较高的类型，然后再进行运算。

例如，如果你有一个 int 值和一个 double 值并将它们相加，C 语言会首先将 int 值转换为 double，然后再进行加法运算。

注意：这种自动类型转换可能会引起某些不预期的问题，尤其是当涉及到有符号和无符号类型时。因此，编程时最好明确数据类型，确保类型转换的准确性。

当你想把表达式的结果强制转换成不同的类型时，你可以通过类型转换进行显式的转换，如下代码：
```c
#include <stdio.h>

int main() {
/*   float price = 6.50;
   int increase = 2;
   float new_price;

   new_price = price + increase;
   printf("New price is %4.2f", new_price);
                                             */
/*Output: new price is 8.50 */
    float averange;
    int total = 23;
    int count = 4;
    //total 转换为float 强制转换
    averange = (float)total / count;
    printf("%4.2f", averange);
    return 0;

}
```
5.75

### 赋值运算符
赋值语句首先评估等号( = )右边的表达式，然后将该值赋给 = 左边的变量。 这使得在赋值语句的两边使用同一个变量是有可能的，且在编程中经常使用该特性。

例如：
```c
int x = 3;
x = x + 1;
```
为了缩短此类型的赋值语句，C 语言提供了 += 赋值运算符。上面的语句可以写成:
```c
x += 1
```
许多 C 语言的运算符都有一个相应的赋值运算符。下面的程序演示了算术赋值运算符:
```c
int x = 2; 
x -= 1; //
x *= 3;
x /= 2;
x %= 2;
x += 3 * 2; 
    
```
仔细看一下最后一条赋值语句。右边的整个表达式被计算，然后和 x 相加，再赋值给 x。等价于 x = x + (3 * 2)。

练习
填空，将 int 类型变量num2相加到变量num1中：
```c
int num1 = 8;
int num2 = 42;
num1___num2;
```
> +=


### 自增和自减运算
给一个变量加1可以用自增`++`完成
同样的`**--**`** **用于减1
```c
int z = 6;
--z; //5
++z; //6
```

自加（自减）位置不同，代表的运算意义也不同
```c
int y = 3, z = 3;
x = z--;
/* x = z;
   z = z - 1;
*/
x = --y;
```
`前缀形式是先增加、减少变量，然后在赋值语句中使用它。`
`后缀形式首先使用变量的值，然后再进行增减。`

下面代码，变量 x 最终等于多少？

```c
int x = 8;
int y = 7;
x++; //9
x += y--;//x = 9+7 = 16 y = 6 
```

## 练习

1. C 语言执行的主入口是？
- [ ] A. 代码第一行
- [x] B. main() 函数
- [ ] C. <stdio.h> 头文件
2. 填空，使用 printf 输出文本"I love C":
```c
___("I love C")___
```
> printf ;

3. 下面哪一项是 c 语言单行注释？
- [ ] A. ## 单行注释
- [ ] B. ** 单行注释
- [x] C. // 单行注释
4. 填空，声明一个变量 sum，并将变量 a、b 相加赋值给 sum:
```c
int___ = a ___ b;
```
> sum +

5. 填空，输出变量 v。
```c
___include <stdio.h>
int main() {
    int v = 42135;
    printf("%d", ___);
    return 0;
}
```
> #
> v

