---
title: 01-rust01
#date: 
author: Lilya 黑静美
isOriginal: true
category: 
    - 编程
tag:
    - rust
    -
icon: /img/Rust.ico
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

## 1. Install

When I Use Mac OS :
input the following command  `in your terminal`

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs
```


![注意rust up 和cargo的路径](https://cdn.nlark.com/yuque/0/2023/png/39218772/1698277578713-6087c784-ba0c-4626-b3cb-57119b0c3790.png#averageHue=%23202120&clientId=ud85b67a3-b82a-4&from=paste&height=504&id=u08084f79&originHeight=970&originWidth=1320&originalType=binary&ratio=2&rotation=0&showTitle=true&size=393857&status=done&style=none&taskId=uf6e303af-3e8c-460e-9cc5-8ec8831d717&title=%E6%B3%A8%E6%84%8Frust%20up%20%E5%92%8Ccargo%E7%9A%84%E8%B7%AF%E5%BE%84&width=686 "注意rust up 和cargo的路径")
choose 1 to continue the installation
![Bildschirmfoto 2023-10-26 um 01.48.31.png](./note1.assets/1698277773697-35cf5a84-5fff-482f-b4e3-b9dbea0d16f5-20240331142323695.png)

## 2. other commands in Terminal

0. commands for install

---

> ⚠️Check whether the Rust Environment is installed correctly. The following shows the information from rust on your computer containing the version of rust
>
> Prüfen Sie, ob das Rust Environment richtig installiert wird. Folgend zeigt die Informantion von rust auf deine Computer enthalrend Version des rustes

##### 1. rustup update

![这是一个windows系统的示例 1.47.0是所展示图片的当前安装的rsut的版本号](https://cdn.nlark.com/yuque/0/2023/png/39218772/1698278979636-f4034022-070c-47fa-bc91-18f58db98160.png#averageHue=%23151515&clientId=ud85b67a3-b82a-4&from=drop&id=u49952e8b&originHeight=958&originWidth=1742&originalType=binary&ratio=2&rotation=0&showTitle=true&size=471046&status=done&style=none&taskId=u777302b2-b763-47af-8366-fd8a9a245a0&title=%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AAwindows%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%A4%BA%E4%BE%8B%201.47.0%E6%98%AF%E6%89%80%E5%B1%95%E7%A4%BA%E5%9B%BE%E7%89%87%E7%9A%84%E5%BD%93%E5%89%8D%E5%AE%89%E8%A3%85%E7%9A%84rsut%E7%9A%84%E7%89%88%E6%9C%AC%E5%8F%B7 "这是一个windows系统的示例 1.47.0是所展示图片的当前安装的rsut的版本号")
**the information of this picture：rustc+[the_version]+(commit hash+yyyy-mm-dd) **

##### 2. rustc --version

```bash
rustc --version #for windows！！！
```

##### 3. rustup self uninstall

```bash
rustup self uninstall
```

##### 4. rustc doc

```
rustc doc
```

view the lolal rust instruction document

