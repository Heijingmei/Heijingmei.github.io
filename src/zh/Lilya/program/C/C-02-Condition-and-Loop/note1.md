---
title: 1-if条件判断与循环控制
 
author: Lilya 黑静美
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

#  if条件判断

条件表达式是用来执行不同的计算,key根据条件的结果(真true /假false)走不同的逻辑

## if语句

if 语句被称为条件控制语句,因为它在一个表达式为真时执行语句.由于这个原因,if被称为**决策结构**.它的形式为:

```c
if (expression){
    //code wiil be executed if the condition is true.
    statements
        
}
```

### 表达式`**expression**`为真或假,执行语句`statement`可以是 

###### **单个语句; **(分号!!!)

或者

###### **由**`**{}**`**包围的代码块 **.

```c
#include <stdio.h>
int main (){ 
    int score = 89;
    
    if (score > 75)
        printf("You passed.\n");

    return 0;
}
```

在上边语句中,我们检查`score`是否大于75.,如果为真,则打印一条消息.

填空
如果`a`大于`b`则打印"`hello`" 

```c
int a = 13;
int b = 12;
___(a >___) {
    printf("hello");
} 
```

> if b

获取用户输入,判断用户输入的是奇数还是偶数.

### 关系运算符

有 6 个关系运算符可以用来形成一个条件表达式(也称为布尔表达式),它返回真或假:

> `<`: 小于
> `<=`: 小于或等于
> `>=`: 大于
> `=`: 大于或等于
> `==`: 等于
> `!=`: 不等于

## if-else 

语句如果你想在条件为真时执行一个代码块,而在条件为假时执行另一个代码块,你可以使用 if-else.
if 语句可以包括一个可选的 else 子句,当表达式为假时执行 else 语句.
语法:

```c
if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
```

例如,下面的程序先评估表达式,然后执行 else 子句:

```c
int score = 89;
if (score >=90){
        printf("Top 10%%.\n");
    }else{
        printf("Less than 90.\n");
    }
```

`printf` 函数用于输出格式化文本.在格式化字符串中,`%` 符号通常用于指定变量的格式.然而,当我们需要在输出中直接显示一个 `%` 符号时,需要使用 `%%`.这是因为单个 `%` 符号会被解读为格式化指令的开始.

在代码中:

```c
printf("Top 10%%.\n");
```

`%%` 将会在输出中显示为一个单独的 `%` 符号.所以,该行代码的输出将会是:

```
Top 10%.
```

这表示如果分数 `score` 是 90 或更高,程序将打印 "Top 10%.".如果 `score` 小于 90,它将打印 "Less than 90.".



## if  -  else if  -  else 语句(多个条件)

### 当你有多个(3个及以上)条件要检查时,可以用`if -else if -else`.

 语法:

```c
if(condition1){
    // Code will be executed if c1 is true.
}else if(condition2){
    // Code will be executed if c2 is true.
}else(condistion3){
    // Code will be executed if c3 is true.
}
```

例如:

```
if( score > 90) {
    printf(" is greater than 90 \n");
    }else if(score > 80) {  //todo 因为if存在,所以实际上是 80 < score <= 90
        printf("The score is greater than 80 but less than or equal to 90. \n");
    }else{
        printf("The score is 80 or less\n");
    }
```

在编写一个 if-else if 语句时,要仔细考虑其中的逻辑.程序逐个检测每个分支,并执行第一个表达式为真的语句,其余的表达式都不会被测试.尽管缩进不会影响编译后的代码,但当 else 语句对齐时,if-else if 的逻辑更易阅读理解.
填空,如果数字 num 为正数,则打印"positive";如果 num 是负数,则打印 "negative";否则就打印 "zero".

```c
int num = -14;
if (num > 0)
    printf("positive");
else ___(num < 0)
    printf("negative");
___
    printf("zero");
```



### 多个变量条件

```c
#include <stdio.h>

int main() {
    int num1, num2, num3, max;
    char *maxVar = "num1"; // 用于记录最大值的变量名

    // 获取用户输入
    printf("请输入三个整数(用空格分隔): ");
    scanf("%d %d %d", &num1, &num2, &num3);

    // 初始化最大值为num1
    max = num1;

    // 比较并找出最大值,同时记录是哪个变量
    if (num2 > max) {
        max = num2;
        maxVar = "num2";
    }
    if (num3 > max) {
        max = num3;
        maxVar = "num3";
    }

    // 输出最大值及其变量名
    printf("最大的数是:%d (变量%s)\n", max, maxVar);

    return 0;
}
```

注意:在可能的情况下,if-else if 语句比嵌套的 if 语句要好,这样更加清晰易懂.

### 你可以在一个 if 语句内部使用 另一个if 语句⬇️

## 嵌套的 if 语句

一个 if 语句可以包括另一个 if 语句,形成一个嵌套的条件语句.嵌套的 if 可以形成复杂的条件判断.


```c
#include <stdio.h>  // 包含标准输入输出库,用于printf等函数
#include <time.h>   // 包含时间处理的库,用于time和localtime等函数

int main() {
    time_t current_time;  // 声明一个time_t类型的变量来存储自1970年以来的秒数
    struct tm * time_info;  // 声明一个指向tm结构的指针,用于存储本地时间信息
    char time_string[9];  // 声明一个字符数组,用于存储格式化的时间字符串

    // 获取当前时间
    // time函数接收一个指向time_t对象的指针,这里传入地址of current_time
    // 如果传入NULL,函数会返回当前时间,但不会存储在current_time
    time(&current_time);

    // 将当前时间(time_t类型)转换为本地时间(tm结构类型)
    // localtime函数接收一个指向time_t对象的指针,并返回一个指向tm结构的指针
    time_info = localtime(&current_time);

    // 使用asctime函数将tm结构转换为字符串,并打印出来
    // asctime接收一个指向tm结构的指针,返回一个指向字符串的指针,这个字符串包含了易读的日期和时间信息
    printf("当前日期和时间: %s", asctime(time_info));

    // 如果只想打印时间,可以使用strftime函数
    // strftime函数用于将时间格式化为指定的格式
    // 这里格式是"%H:%M:%S",意味着小时:分钟:秒
    // time_string作为目标字符串,sizeof(time_string)限定最大字符数,time_info是提供日期和时间信息的tm结构
    strftime(time_string, sizeof(time_string), "%H:%M:%S", time_info);
    printf("当前时间: %s\n", time_string);

    return 0;  // 程序结束
}
```


```c
#include <stdio.h>
#include <string.h>

int main() {
    char username[50], password[50];
    printf("请输入用户名和密码:");
    scanf("%s %s", username, password);

    if (strcmp(username, "admin") == 0) {
        if (strcmp(password, "12345") == 0) {
            printf("登录成功\n");
        } else {
            printf("密码错误\n");
        }
    } else {
        printf("用户名不存在\n");
    }

    return 0;
}
```


```c
int x = 15, y = 20;
if (x > 10) {
    if (y > 15) {
        printf("Both conditions are true.");
    }
}
```



**填空**

补全嵌套if语句中缺失的部分,并打印相应的信息.

```c
int x = 37;
if (x > 22) {
    ___ (x > 31) {
        ___ ("x is greater than 22 and 31");
    }
}
```

`if` `printf`



## 条件表达式「三元操作符」

**除了if-else,c语言还提供了一个有用的条件操作符,有时也被称为三元操作符.**

> **另一种类似 if-else 语句的语法是在**条件表达式**中使用**`**?:**`**操作符.**

`?:`的使用方法为:

```c
<表达式1>?<表达式2>:<表达式3>
condition ?value_if_true : value_if_not_true;
```

```c
#include <stdio.h>

int main (){
    int y;
    int x = 3;

    y = (x >= 5) ? 5 : x;
    /* if(x >= 5){
           y = 5;
       }else{
           y = x;
       }

    */

    printf("%d", y);


}
```

它是对第一个表达式作真/假检测,然后根据结果返回另外两个表达式中的一个.在运算中,首先对第一个表达式进行检验,如果为真,则返回表达式 2 的值;如果为假,则返回表达式 3 的值.

```c
#include <stdio.h>

int main (){
    int y = 20; x = 10;
    int max;

    if(x > y){
        max = x;
    }else{
        max = y;
    }
}
```

