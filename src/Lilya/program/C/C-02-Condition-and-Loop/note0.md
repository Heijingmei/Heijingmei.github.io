---
title: Please wait for some time! 敬请期待
#date: 
author: Lilya 黑静美
isOriginal: true
category: 
    - 
tag:
    - 
    - 
icon: 
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

# Please wait for some time! 敬请期待

yyA conditional statement is used to perform different computations based on the result of a condition. The key leads to different logic paths based on the condition (true/false).

if Statement

The if statement, known as a conditional control statement, executes a statement when an expression is true. Because of this, if is referred to as a decision-making structure. Its syntax is:

```c
if (expression) {
    // code will be executed if the condition is true
    statements
}
```

The expression can be true or false. The statement to be executed can be a single statement terminated by a semicolon or a code block enclosed in curly braces {}.

```c
#include <stdio.h>
int main() {
    int score = 89;
    
    if (score > 75)
        printf("You passed.\n");

    return 0;
}
```

In the above statement, we check if the score is greater than 75. If true, it prints a message.

Fill in the blank:

```c
if (a > b) {
    printf("hello");
}
```

if-else Statement

The if-else statement is used when you want to execute one block of code when a condition is true and another block when it's false.

Syntax:

```c
if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
```

For example:

```c
int score = 89;
if (score >= 90) {
    printf("Top 10%%.\n");
} else {
    printf("Less than 90.\n");
}
```

If the score is 90 or higher, it prints "Top 10%." Otherwise, it prints "Less than 90." 

Continue with more examples of if-else if-else statement and nested if statement...
