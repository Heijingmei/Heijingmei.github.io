---
title: 2_0-C program languege
date: 
author: Lilya 黑静美
isOriginal: true
category: 
    - Programm
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

# 逻辑运算符

 ##  `&&`：逻辑与（AND） `||`：逻辑或（OR）

在 C 语言中，逻辑运算符用于比较两个或多个表达式，它们包括：

- `&&`：逻辑与（AND）
- `||`：逻辑或（OR）
-  `!`：逻辑非（NOT）

> &&此运算符用于验证两个表达式是否都为真。如果都为真，则整个表达式的结果为真。如果其中一个或两者都为假，则整个表达式的结果为假。


逻辑与运算符&&只有在两个表达式都为真时才会返回一个真结果。
例如：
```c
#include <stdio.h>

int main() {
    int n;
    int a =5 , b = 10;

    if(n > 0 && n <= 100){
        printf("Range(1 - 1OO).\n");
    }

    if(a == 5 && b == 10){
        printf("Both conditions are true.\n");
    }

    return 0;
}

```

> 逻辑运算符 && 和 || 用于形成一个复合布尔表达式，测试多个组合条件。


```c
    if(a == 5 && b == 10){
        printf("Both conditions are true.\n");
    }
```

> 第三个逻辑运算符是 !，用于反转布尔表达式的结果。
> 用于验证两个表达式是否都为真。如果都为真，则整个表达式的结果为真。如果其中一个或两者都为假，则整个表达式的结果为假。


逻辑与运算符&&只有在两个表达式都为真时才会返回一个真结果。
```c
    if(n == 'x' || n == 'X'){
        printf("Raman numeral value 10.\n");
    }
```

例如：

任何数量的表达式都可以用 && 和 || 连接。 例如：

```c

#include <stdio.h>

int main() {
    int n = 42;
    
    if (n == 999 || (n > 0 && n <= 100))
        printf("Input valid.\n");
}
```

填空，如果字符n等于'x'或'X' 则打印"Roman"。
```c
if (n == 'x' ___ n == 'X') {
    printf("Roman");
}
```
`==`
## 逻辑非 (!)

> 此运算符用于反转表达式的逻辑值。如果表达式为真，则它会返回假，反之亦然。

逻辑非运算符 ! 对结果进行取反。 NOT true 返回 false，而 NOT false 返回 true。
```c
#include <stdio.h>

int main() {
//    char n = 'V';
//    if(!(n == 'x' || n == 'X')){
//        printf("Roman numeral is not 10. \n");
//    }
    int a = 5;
    if (!(a == 6)){
        printf("a ist not equal to 6. \n");
    }
    if (!a == 0){
        printf("a is not 0\n"); //在 C 语言中，任何非零值都被认为是真，0 是假。 因此，逻辑非运算符将真值转换为 0，假值转换为 1。
    }
}

```
> 在 C 语言中，任何非零值都被认为是真，0 是假。 因此，逻辑非运算符将真值转换为 0，假值转换为 1。


```c
#include <stdio.h>

int main() {
    int temperature = 24;        // 假设温度是24°C
    int isSunny = 1;             // 假设天气是晴朗的（1表示真，0表示假）

    if (temperature >= 20 && temperature <= 30 && isSunny) {
        printf("天气很好，建议您外出散步！\n");
    } else {
        printf("或许您应该留在室内。\n");
    }

    return 0;
}
```
