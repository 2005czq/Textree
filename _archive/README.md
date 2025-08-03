# 📦 C++ Prototype (Archived)

> [!note]
> 
> Note: This is the original C++ prototype for Textree. It is a fully functional, cross-platform command-line tool. It is preserved here for historical context and for those who prefer a command-line interface. The main, recommended version of Textree is the web tool in the root directory.

## 🤔 What is this?

This is a small, efficient, Unix-style command-line utility that performs the core function of Textree: converting indented text into LaTeX brace-style tree diagrams.

It reads from standard input (`stdin`) and writes to standard output (`stdout`), allowing it to be seamlessly integrated into shell pipelines.

## ⚙️ Compile

You need a C++ compiler (like g++ or clang).

```bash
# Using g++
g++ prototype.cpp -o textree_cli -std=c++11

# Using clang
clang++ prototype.cpp -o textree_cli -std=c++11
```

This will create an executable file named `textree_cli`.