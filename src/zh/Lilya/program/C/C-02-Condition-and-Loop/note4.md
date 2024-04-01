---
title: 4-while
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

while 语称为循环结构，因为它在一个表达式为真时重复执行语句，不断循环。它的语法为：

```c
while (表达式) {
    循环体语句
}
```

表达式评估为真或假，执行体代码可以是单一语句，或者由大括号 { } 括起来的代码块。 例如： 

```c
    while (guess != number) {
        printf("Please guess a number between 1 and 100.\n");
        scanf("%d", &guess);
        if(guess < number){
            printf("You guess: %d, it's too small. ", guess);
        }else if(guess > number){
            printf("You guess: %d, it's too big. ", guess);
        }
    }
    printf("You guess: %d, it's right.", guess);
```

猜数游戏

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>


int main() {

    int guess;
    printf("Please guess a number between 1 and 100.\n");
    /*1表示为真，break终止了“真”*/
    while(1){
        scanf("%d", &guess);   //赋值
        while(!(guess >= 1 && guess <= 100)) {
            printf("The number must be between 1 and 100. Try again: \n");
            scanf("%d", &guess);
        }
/*      if(guess < 1 || guess > 100) {
            printf("The number must be between 1 and 100. Try again.\n");
            continue;
        }*/
        if(guess < number){
            printf("You guess: %d, it's too small.\n", guess);
        }else if(guess > number){
            printf("You guess: %d, it's too big.\n", guess);
        }else{
            printf("You guess: %d, it's right.\n", guess);
            break;
        }
    }
    return 0;
}


```

练习：阶乘和乘法表

```c
#include <stdio.h>

int main() {
    int a = 1 , b = 1;
    /* the factorial */    
    int n;
    printf("Of witch nummer the factorial do you want?");
    scanf("%d" , &n);

    while(n < 0){
        printf("It is illegal. Please input a new number.");
        scanf("%d" , &n);
    }

    while( b <= n ){
        a *= b;
        b ++ ;
    }
    printf("The factorial of the entered nummer is: %d\n",a);

    /*the multiplikation table*/
    int c = 0;
    a = 0;
    printf("the multiplikation table for n = ?");
    scanf("%d" , &n);
    while( c <= n ){
        while (a <= c){
            printf("%d * %d = %d  " , a , c , a*c);
            a ++ ;
        }
        printf("\n" );
        c ++ ;
        a = 1;
    }
    printf("The multiplikation table ends.\n");

    return 0;
}
```
