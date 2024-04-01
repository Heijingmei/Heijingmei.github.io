---
title: x-选择“break;”还是"continue;"
date: 
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

在 C 语言中，break 和 continue 都是循环控制语句，但它们的用途和效果是不同的。

1.  **break 语句**：用于立即退出循环，跳过循环后的其余部分，并执行循环后的下一个语句。 例子2：打印 0 到 10 之间的数字，但跳过所有能被 3 整除的数字。

使用 continue 在当前迭代遇到能被 3 整除的数字时跳过。

```c
#include <stdio.h>

int main() {
    int i;
    for (i = 0; i <= 10; i++) {
        if (i % 3 == 0) {
            continue;
        }
        printf("%d\n", i);
    }
    return 0;
}
```

2. ** continue 语句**：用于立即跳过当前迭代的其余部分，并继续执行下一个循环迭代。 

使用依据：

- 当需要中断跳出循环使用`**break**`
- 当跳过某一步（当前迭代）并继续执行下一次时使用`**continue**`



**练习**
不使用else 

```c
    for(int i = 1; i <= 11; i++){
        if(i % 2 != 0){
            continue;
        }
        printf("%d\n", i);
```



