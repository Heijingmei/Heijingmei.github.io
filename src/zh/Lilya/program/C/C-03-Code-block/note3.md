---
title: Please wait for some time! 敬请期待
 
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



## 1 数组概念

**数组**是一种数据结构，存储了所有**相同类型**的值的集合
数组很有用，因为可以用一个描述性名称表示相关数据，而不须分别命名单独的变量。
例如，数组 `test_scores[25]` 可以容纳 25 个考试分数。

## 2 数组的声明

数组的声明包括其储存的值的类型，标识符和

###### 带有数组大小的数字的方括号`[ ]`。

**例如**：

```c
int test_scores[25]; /*数组大小 25*/
```

也可以初始化：

```c
float prices[5] = {3.2, 6.55, 10.49, 1.25, 0.99};
```

###### 注意，初始值用逗号`,`隔开，

###### 并放大在大括号`{}`内。

###### 一个数组可以**部分初始化**

如：

```c
float prices[5] = {3.2, 6.55};
```

缺少的值默认为0。

> ⚠️注意
> 数组存储在**连续**的内存位置，在声明后不能改变大小。

这个描述涉及到数组在 C 语言中的本质特性。

######  1. **数组存储在连续的内存位置**：

这意味着当你在 C 语言中声明一个数组，例如 `int arr[5];`，这五个整数值将存储在连续的内存地址中。如果 `arr[0]` 的地址是 `0x1000`（假设的地址），那么 `arr[1]` 的地址可能是 `0x1004`（考虑到一个 `int` 通常为4字节）。这使得数组访问非常快，因为知道第一个元素的地址和数组的类型后，就可以通过简单的指针算术找到任何元素。 

###### 2. **在声明后不能改变大小**：

当你声明了一个数组，例如 `int arr[5];`，你为这个数组分配了固定大小的内存（在这个例子中是5个整数）。这个大小在数组的生命周期中是固定的，不能在运行时改变。如果你需要更多的空间，你不能简单地“扩展”这个数组。相反，你需要声明一个新的、更大的数组并复制数据，或者考虑使用其他数据结构，例如链表或动态数组（例如 C 语言中的动态内存分配和 `realloc` 函数）。 

这些特性意味着数组在某些情境中非常高效（例如，当你知道所需的确切大小时），但在其他情境中可能不那么灵活（例如，当你在运行时需要改变数据结构的大小时）。

### **声明一个新的、更大的数组并复制数据**：

###### （需要每个地址逐`值(元素)`替换）

```c
#include <stdio.h>

int main() {
    int old_array[5] = {1, 2, 3, 4, 5};
    int new_array[10];

    for (int i = 0; i < 5; i++) {
        new_array[i] = old_array[i];
    }

    // 初始化新数组的其余元素，或做其他操作
    for (int i = 5; i < 10; i++) {
        new_array[i] = 0;
    }

    for (int i = 0; i < 10; i++) {
        printf("%d ", new_array[i]);
    }

    return 0;
}
```

### **使用动态内存分配和 **`**realloc**`：

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *array = (int *) malloc(5 * sizeof(int)); // 分配初始大小
    if (!array) {
        printf("Memory allocation failed!");
        return 1;
    }

    for (int i = 0; i < 5; i++) {
        array[i] = i + 1;
    }

    // 重新分配内存以容纳更多的元素
    int *temp = (int *) realloc(array, 10 * sizeof(int));
    if (!temp) {
        printf("Memory reallocation failed!");
        free(array);
        return 1;
    }

    array = temp;

    // 初始化或修改新分配的内存部分
    for (int i = 5; i < 10; i++) {
        array[i] = 0;
    }

    for (int i = 0; i < 10; i++) {
        printf("%d ", array[i]);
    }

    free(array);

    return 0;
}
```

这两种方法都将原始数组的内容复制到一个更大的数组中，但第二种方法使用动态内存分配，并允许在运行时调整数组的大小。

当你在 C 语言中声明一个数组并没有为其提供初始值，该数组的元素会有一个“默认值”，但这并不意味着该值是确定的。事实上，对于自动存储期（通常是局部变量）的未初始化数组，其中的值是不确定的。但是，对于静态存储期（例如全局变量或使用 `static`修饰符声明的变量）的未初始化数组，其元素会被初始化为零值。
以下是一个关于不同类型数组和它们的“默认值”的表格：

| 数组类型 | 默认数据
(局部变量/自动存储期) | 默认数据
(全局变量/静态存储期) |
| --- | --- | --- |
| `int` | 不确定 | 0 |
| `float` | 不确定 | 0.0 |
| `double` | 不确定 | 0.0 |
| `char` | 不确定 | ‘\\0’ |
| `pointer` | 不确定 | NULL |


请注意，对于局部变量或自动存储期的未初始化数组，你不应该假设其中的值是0或任何其他具体的值。最好总是在使用前初始化你的变量，以避免不确定的行为。

---

**填空，声明大小为 4 的整数数组：**

```c
___ x ___ 4 ___ = {1, 2, 3, 4};
```

> int
> [ ]


# 3 访问数组元素

数组的内容成为元素，每个元素都可以通过一系列索引号来访问。在 C 语言中，索引号从 **0 **开始。
一个有5个元素的数组，其索引号为0、1、2、3、4。考虑一个数组`x`：  

```c
int x[5] = {20, 45, 16, 18, 22}
```

其中对应的元素如下

```
0 => 20
1 => 45
2 => 16
3 => 18
4 => 22
```

要访问一个数组元素，请使用其索引号。

**例如**：

```c
#include <stdio.h>
/*todo*/
void print_array(int arry[], int size);
/*todo*/
int max_search(int arry[], int size);
int sum_search(int arry[], int size);


int main() {
    int arry[5] = {20, 45, 16, 18,22};
    //一次性输出所有数据，一行以四个空格间隔
    print_array(arry,5);
    //
    printf("The second element is %d\n", arry[1]);
    //对数组求和
    printf("数组和为%d\n",sum_search(arry,5));
    //找到数组中的最大值
    printf("最大值为%d\n",max_search(arry,5));
    return 0;
}

void print_array(int arry[], int size){
    for (int i = 0; i < size; i++) {
        printf("%d", arry[i]);
        if (i < size-1){
            printf("    ");
        }
    }
    printf("\n");
}

int sum_search(int arry[], size){
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arry[i];
    }
    return sum;
}

int max_search(int arry[], size){
    int max = arry[0];
    for (int i = 0; i < size-1; i++) {
        if (arry[i + 1] >= arry[i]) {
            max = arry[i + 1];
        }
    }
    return max;
}
```

# 4 数组循环

许多算法要求访问数组的每个元素，以检查数据，存储信息或其他任务。

这可以通过遍历数组来完成，该过程通常使用 **for** 循环实现，因为循环控制变量自然对应于数组的索引。

考虑以下程序：

```c
#include <stdio.h>

int main() {
    float purchases[3] = {10.99, 14.25, 90.50};
    float total = 0;
    int k;

    /* 遍历 purchases，并累加 */
    for (k = 0; k < 3; k++) {
        total += purchases[k];
    }

    printf("Purchases total is %6.2f\n", total);
    /* Output:  Purchases total is 115.74 */

    return 0;
}
```

循环控制变量从 `0` 开始，

###### 达到数组大小时结束(注意是 `<数组大小` 

非 `<=数组大小` )

也可以通过循环，来改变数组的元素，例如：

```c
#include <stdio.h>

int main() {
    int a[10];
    int k;

    for(k = 0; k < 10; k++){
        a[k] = k * 10;
    }

    for(k = 0; k < 10; k++){
        printf("%d" a[k]);
    }

    return 0;
}
```


填空，使用**for**循环打印数组的元素：

```c
int arr[5] = {1, 2, 3, 4, 5};
___ (int x = 0; x < ___; x++) {
    printf("%d", arr[___]);
}
```

> for
> 5
> x


# 5 数组长度

在 C 语言中，数组本身不直接存储其长度信息。如果你定义了一个数组，但在其他地方你没有储存或保留它的长度，那么你无法直接从数组本身获取其长度。
但是，有一些常用的方法来获取数组长度，尤其是在定义数组的时候：

##  `固定大小数组`

你定义一个数组时，你可以指定其大小，并始终记住这个大小。例如，`int arr[10];` 表示一个包含 10 个整数的数组。

## 使用`sizeof`运算符：

如果你在定义数组的地方，或者在某个范围内可以直接访问到数组的定义，你可以使用`sizeof`运算符计算数组的长度。例如：

```c
int arr[ ]= {1,2,3,4,5};
int length = sizeof(arr)/sizeof(arr[0]);
```

 在这个例子中，`sizeof(arr)`返回整个数组的字节大小，而`sizeof(arr[0])`返回数组中的一个元素的字节大小。两者相除即可得到数组的长度。 


## `结尾标记法`

对于某些特定类型的数组，例如字符串（char构成的字符数组），可以使用一个特殊的值（例如`\0`）来表示数组的结束。通过遍历数组来查找这个特殊值，你可以确定数组的实际长度。但是，这种方法并不适用于所有类型的数组。

### **方法1**

字符串在 C 语言中其实就是字符数组，并且已经内建了结尾标记法：每个字符串的结尾都有一个

###### `'\0'`字符作为终止标记。

以下是获取字符串长度的代码示例，不使用 `strlen()` 函数：

```c
#include <stdio.h>

int main() {
    char str[] = "Hallo, world!";
    int length = 0;

    while(str[length] != '\0'){
        length++ ;
    }
    printf("\"The length of string is %d\" \n", length);
    return 0;
}
```

上述代码将输出 `"The length of the string is: 13"`，因为字符串 "`Hello, World!`" 的长度是 13。

然而，在实际应用中，你可能会直接使用 C 标准库中的 `strlen()` 函数，因为它也是使用同样的方式来计算字符串长度的。

---

###### 定义标记

结尾标记法通常用于字符串，但这里我会展示一个整数数组的例子，其中我们将使用 -1 作为数组的结束标志。

首先是定义数组：

```c
#include <stdio.h>

int main() {
    int arr[ ] = {1,2,3,4,5,-1}; //最后放了一个-1作为标记
    int length = 0;

    for(int i = 0; arr[i]!= -1; i++){
        length++;
    }
    printf("the length of the array is %d\n", length);
    return 0;
}
```

在上述代码中，我们遍历数组直到遇到 -1 这个标记，然后使用一个计数器来计算数组长度。
请注意，结尾标记法的缺点是你不能在数组中使用标记值作为其实际内容。在上述示例中，我们不能有 -1 作为数组的一个实际值，因为它被用作结束标记。在实践中，这可能会限制数组的使用，所以这种方法并不总是理想的选择。

### **方法2**

###### `strlen（）`

strlen 是 C 语言中的一个函数，用于获取 C 字符串（以 \0 结尾的字符数组）的长度。它位于头文件 string.h 中。

以下是 strlen 的基本用法：

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hallo, world!";
    int length = 0;

    length =strlen(str);

    printf("\"The length of string is %d\" \n", length);
    return 0;
}

```

:::tips
strlen 函数返回的是字符串中字符的数量，不包括结尾的 \0。所以上述示例中 "Hello, World!" 的长度是 13。
:::

注意： 使用 strlen 时要确保传递的**字符数组**确实是一个以 `\0`结尾的有效字符串。如果传递的字符数组没有以 \0 结尾，strlen 将会继续读取内存，直到找到一个 \0，这可能会导致未定义的行为或程序崩溃。

如果你需要经常获取数组的长度，并且数组的大小可能发生变化，那么你可能需要考虑使用其他数据结构，例如链表或动态数组。在 C 标准库中，也有类似的数据结构，如`malloc`和`realloc`，可以用来动态地分配和调整内存。
# 
