# 🌳 Textree

Effortlessly convert indented text into beautiful LaTeX brace-style tree diagrams.

<div align="center">
  <h3>
    <a href="https://2005czq.github.io/Textree/">
      🚀 Try Textree Live! 🚀
    </a>
  </h3>
</div>

## 🤔 Why Textree?

Manually writing nested LaTeX code with `\left\{`, `\right.`, and `\begin{aligned}` to create tree diagrams is tedious, error-prone, and frustrating. Textree was built to solve this exact problem.

It allows you to focus on your content and structure using simple indentation, and instantly get clean, beautiful, and ready-to-use LaTeX code. It's the perfect tool for students, teachers, and researchers who need professional-looking diagrams without the headache.

## 🚀 How to Use

1. Navigate to the [Textree Live Demo](https://2005czq.github.io/Textree/).
2. Type your hierarchical text in the input box on the left, using the `Tab` key to denote levels.
3. Click the "Convert to LaTeX" button. The live preview and the generated code will appear on the right.
4. Copy the code and paste it into your LaTeX editor!

<details>
<summary>👀 Click to see a quick example</summary>

If you type this:

```
语文试卷结构
	积累运用
		古诗文默写
		词语填写
		病句
	阅读
		古文
		应用类文本
		文学类文本
	作文
```

You get this LaTeX code:
```latex
$$
语文试卷结构
\left\{\begin{aligned}
	&积累运用
	\left\{\begin{aligned}
		&古诗文默写\\
		&词语填写\\
		&病句\\
	\end{aligned}\right.\\
	&阅读
	\left\{\begin{aligned}
		&古文\\
		&应用类文本\\
		&文学类文本\\
	\end{aligned}\right.\\
	&作文\\
\end{aligned}\right.
$$
```
Rendered output:

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./assets/light.svg">
  <img alt="output example image" src="./assets/light.svg">
</picture>
</div>

</details>

## 💻 Local Development

Want to run or modify Textree locally? It's simple!

1.  Clone the repository:

	```bash
	git clone https://github.com/2005czq/Textree.git
	```

2.  Navigate to the directory:

	```bash
	cd Textree
	```

3.  Open `index.html` in your favorite web browser. That's it!

## 📜 License

This project is licensed under the [MIT License](./LICENSE).