---
title: 2-递归数组
 
author: Lilya 黑静美
isOriginal: true
category: 
    - 编程
tag:
    - c
    - c#
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

**C 语言的函数都支持递归**, 也就是说，每个函数都可以直接或者间接第调用自己。
所谓的间接调用，是指在递归函数调用的**下层函数中再调用自己**。

考虑一个数字的阶乘，通常写为`5! = 5 * 4 * 3 * 2 * 1`。
也可以将此计算视为重复计算 `num*(num - 1)`,直到 `num`为 1 。
递归函数是一个调用其自身的函数，它包括一个`**退出条件**`⬆️，用于结束递归调用。

###### for或while完成的循环

```c
#include <stdio.h>

long long factorial_while(int n);
long long factorial_for(int n);

int main() {
    int num;
    num = 5;
    printf("%d! = %lld\n", num, factorial_while(num));
    printf("%d! = %lld\n", num, factorial_for(num));
    return 0;
}

long long factorial_while(int n){
    long long result = 1;
    do {
        result *= n;
        n--;
    }while(n >= 1);
    return result;
};

long long factorial_for(int n){
    long long result = 1;
    for (int i = 1; n >= i; i++) {
        result *= i;
    }
    return result;
}
```



## 递归完成阶乘

```c
#include <stdio.h>

long long factorial(int n);

int main() {
    long long num;
    num = 5;
    printf("%d! = %lld\n", num, factorial(num));
    return 0;
}

long long factorial(n){
    if (n == 1){/*退出条件*/
        return(1);
    }else{
        return(n * factorial(n - 1));
    }
};

```

递归的工作方式是"堆叠"调用，直到基本情况被执行。在这一点上，调用从最新的到最旧的完成。如上代码，阶乘调用栈类似
当达到退出条件时，factorial(1) 返回 1 触发堆叠调用的完成。

###### 递归函数需要一个基本退出条件，以防止出现无限循环。

###### 
从最新到最旧的返回值创建以下计算，最后计算的（5 * 24）返回到调用函数 main()：

> 5 * factorial(4)
>   factorial(4) 4 * factorial(3)
>   factorial(3) 3 * factorial(2)
>   factorial(2) 2 * factorial(1)
>   factorial(1) 2*1



## 例 斐波那契

