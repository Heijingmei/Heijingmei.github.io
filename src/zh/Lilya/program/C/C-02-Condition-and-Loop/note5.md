---
title: 5-do_while循环
 
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

do-while 进入循环时不做检查，先在循环中执行一次之后再来检查循环的条件是否满足，若满足则进行下一次的循环，否则退出循环。
它的语法为：

```c
do {
    statements
}while(expression);

```

表达式评估为真或假，语句可以是单个语句或由大括号`{}`包围的代码块。例如：

```c
#include <stdio.h>

int main() {
    int count = 1;

    //count = 1
    //count = 2
    //count = 3
    //count = 4
    //count = 5
    //count = 6
    //count = 7

        printf("count = %d\n", count);
        count ++;
    }while(count<8);

    return 0;
}

```

 当评估为假时仍执行一次：

```c
#include <stdio.h>

int main() {
    int count = 1;


    //count = 1
    do{
        printf("count = %d\n", count);
        count ++;
    }while(!(count<8) ); //todo 注意分号

    return 0;
}

```

注意 while 后面的分号`；`。 **do-while**循环总是至少执行一次

> ⚠️注意
> **do-while**与**while**的区别：
> 进行检查循环条件的位置不同。


下面代码，会打印多少次 count 变量?

```c
int count = 1;
do {
    printf("%d\n", count);
    count++;
} while (count < 8);
```

- [ ] A. 1
- [x] B. 7
- [ ] C. 8

