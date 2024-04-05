---
title: 2-三元操作符
 
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

## 「三元操作符」

**除了if-else，c语言还提供了一个有用的条件操作符，有时也被称为三元操作符。**

> **另一种类似 if-else 语句的语法是在**条件表达式**中使用**`**?:**`**操作符。**

`?:`的使用方法为:

```c
<表达式1>？<表达式2>:<表达式3>
condition ？value_if_true : value_if_not_true;
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



### 练习

将以下语句用三元操作符表达

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

