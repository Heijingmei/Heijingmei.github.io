---
title: 6-for
 
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

for 语句是一个循环结构，它执行固定次数的循环

```c
for(initvalue; condition; increment){
    statements;
}
```

:

###### initvalue :

一个设置为**初始值**的计算器，这部分**for**循环只执行一次

###### condition：

一个布尔表达式，每次循环前将**计数器**和一个值进行比较，当返回值为**假**时停止循环

###### increment：

将计数器增加（或减少）设定的值。举例：

### 例子1：找出 0 到 10 之间的第一个能被 3 和 5 同时整除的数字。

使用 break 使循环在找到符合条件的数字后立即停止。

```c
#include <stdio.h>

int main() {
    int i;
    for (i = 0; i <= 10; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            printf("第一个能被3和5同时整除的数字是：%d\n", i);
            break;
        }
    }
    return 0;
}
```

打印0到9

```c
#include <stdio.h>

int main() {
    int i;
    int max = 9;
    for(i = 0; i <= max; i++){
        printf("%d\n", i );
    }
    return 0;
}

```

或

```c
#include <stdio.h>

int main() {
    int max = 10;
    for(int i = 0; i < max; i++){
        printf("%d\n", i );
    }
    return 0;
}

```

求和问题：
编写一个程序，使用 for 循环计算从 1 到 100 的所有整数的和。

```c
    int n = 100;
    int sum = 0;
    for (int i = 1; i <= n; i++){
        sum += i ;
    }
    printf("sum = %d\n",sum);
```

打印乘法表：
使用 for 循环打印一个 10x10 的乘法表。每一行显示的是一个数字（从 1 到 10）与 1 到 10 的每个数相乘的结果。

```c
int multi;
for (int i = 1; i <= 10; i++){
    for (int j = 1; j <= i; j++){
        multi = j * i;
        printf("%d * %d = %d\t", j, i, multi);
    }
    printf("\n");
}
```

找出偶数：
编写一个程序，使用 for 循环找出并打印 1 到 100 之间的所有偶数。

```c
for(int i = 1; i <= 100; i++){
        if(i%2 == 0){
            printf("%d\n", i );
        }
    }
```

计算阶乘：
编写一个程序来计算一个给定数（例如 5）的阶乘。阶乘表示为 n!，是所有小于等于 n 的正整数的乘积。

```c
int n = 5;
    int x = 1;
    for(int i = 1; i <= n; i++){
        x *= i;
    }
    printf("n! = %d\n",x);
```

打印星号图案：
使用 for 循环打印一个直角三角形星号图案。用户可以指定三角形的行数。

```c
    int n;
    printf("请给出三角形的行数\n");
    scanf("%d",&n);
    for(int i = 1; i <= n; i++){
            for (int j = 1; j <= i; j++){
                printf("* ");
            }
        printf("\n");
    }
```
