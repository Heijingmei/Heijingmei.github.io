---
title: 3-switch 
 
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

## switch 结果与常量比较

开关 switch 语句通过将表达式的**结果**与**常量值**进行比较来实现程序控制。

`switch` 语句通常为 `if-else if`和`嵌套 if` 语句提供了一个更优雅的解决方案。

基本的 switch 语法为:

```c
switch(expression){
    case val1:
        statements
        break;
    case val2:
        statements
        break; 
    default:
        statements
}
```


> 


> 哪个选项是 switch 开关语句的正确语法？
>
> - [ ] A. switch test;
> - [ ] B. SWITCH test { }
> - [x] C. switch (test) { }

switch 可以有多个 case。
可选的默认 default 在没有其他匹配的情况下被执行。

每个 case 中都需要一个 break 语句，从而执行后跳出 switch 语句。

> ⚠️注意
> 为什么需要break？——如果没有break， 则会在匹配之后执行后续的代码。代码示例如下：

![image.png](./note3.assets/1701603113235-0a2f85c5-4337-421c-acae-c91a40bd7805.png)![image.png](./note3.assets/1701603149535-4c7ac571-7a1a-412f-b805-878ccad77e4b.png)

如果没有 break 语句，程序的执行就会落到下一个 case 语句上。当多个 case 会执行相同逻辑，这一点很有用。考虑下面的 switch 语句：
以这种方式构建 switch 语句时，必须谨慎行事。之后的修改可能会导致意外的结果。

填空，测试变量 num 的值为3、5和42时，打印不同的文本。

```c
___ (num) {
case 3:
    printf("a prime number");
    break;
___ 5: 
    printf("another prime number");
    ___;
case 42:
    printf("the meaning of life");
    break;
}
```

> switch  case . break;

