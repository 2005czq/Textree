// Default example
const defaultExample = `语文试卷结构
\t积累运用
\t\t古诗文默写
\t\t词语填写
\t\t病句
\t阅读
\t\t古文
\t\t应用类文本
\t\t文学类文本
\t作文`;

// Set default example on page load
window.onload = function () {
  document.getElementById("input").value = defaultExample;
  convertToLatex();
  initializeTheme();
};

// Initialize theme based on user preference or system preference
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (systemPrefersDark) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

// Toggle between light and dark themes
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Set theme and update icon
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  const themeIcon = document.getElementById('themeIcon');
  if (theme === 'dark') {
    themeIcon.className = 'fas fa-moon';
  } else {
    themeIcon.className = 'fas fa-sun';
  }
}

// Disable Tab key for switching focus in textarea
document.getElementById("input").addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    e.preventDefault();
    const start = this.selectionStart;
    const end = this.selectionEnd;
    this.value =
      this.value.substring(0, start) + "\t" + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 1;
  }
});

function convertToLatex() {
  const input = document.getElementById("input").value.split("\n");
  let output = [];
  let nowlayer = 0;

  function tabs(n) {
    return "\t".repeat(n);
  }

  output.push("$$\n");

  for (let s of input) {
    let layer = 0;
    while (s.startsWith("\t")) {
      layer++;
      s = s.slice(1);
    }

    if (nowlayer === layer) {
      if (nowlayer !== 0) output.push("\\\\\n" + tabs(layer) + "&");
      output.push(s);
    } else if (nowlayer < layer) {
      output.push("\n" + tabs(nowlayer));
      output.push("\\left\\{\\begin{aligned}\n" + tabs(layer) + "&" + s);
    } else if (nowlayer > layer) {
      while (nowlayer - 1 !== layer) {
        output.push("\\\\\n" + tabs(nowlayer - 1) + "\\end{aligned}\\right.");
        nowlayer--;
      }
      output.push("\\\\\n" + tabs(layer) + "\\end{aligned}\\right.");
      if (layer !== 0) output.push("\\\\\n" + tabs(layer) + "&" + s);
    }
    nowlayer = layer;
  }

  while (nowlayer--) {
    output.push("\\\\\n" + tabs(nowlayer) + "\\end{aligned}\\right.");
  }

  output.push("\n$$");

  const latexOutput = output.join("");

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `<code class="highlight">${latexOutput}</code>`;

  const renderDiv = document.getElementById("render");
  renderDiv.innerHTML = `<div style="overflow-x: auto;">\n\\[${latexOutput.slice(
    2,
    -2
  )}\\]\n</div>`;
  MathJax.typeset();
}

function copyToClipboard() {
  const outputDiv = document.getElementById("output");
  const textToCopy = outputDiv.innerText;
  const copyButton = document.getElementById("copyButton");

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.textContent = "📋 Copy Code to Clipboard";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
