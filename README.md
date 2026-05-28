# 🚀 Fusion Forge Editor

<div align="center">
	<img
		src="./src/vs/workbench/browser/parts/editor/media/slice_of_void.png"
	 	alt="Fusion Forge Editor"
		width="300"
	 	height="300"
	/>

	**The Open-Source AI-Powered Code Editor**

	*Fork of VS Code with integrated AI agents, multi-model support, and advanced coding assistance.*
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Support & Links](#support--links)
- [License](#license)

---

## 🎯 About

**Fusion Forge** is the open-source alternative to Cursor, built on Microsoft's VS Code. It's a sophisticated AI-enhanced code editor that combines:

- ✨ **Full IDE Capabilities**: Multi-language support, debugging, terminal integration
- 🤖 **AI Agent Integration**: Use AI agents directly on your codebase for coding assistance
- 🔄 **Code Checkpointing**: Save and visualize AI-generated changes
- 🌍 **Multi-Model Support**: Works with OpenAI, Claude, Gemini, Mistral, Groq, Ollama, and more
- 🔒 **Privacy-First**: Messages sent directly to providers without data retention
- 🔌 **50+ Extensions**: Built-in language support for Python, JavaScript, Java, Go, Rust, and more
- ⚡ **Modern UI**: React-based interface with Tailwind CSS

### Current Status
🔄 **Maintenance Mode**: The core team is exploring new innovations. The editor continues to run, and you can build and maintain your own version. Community PRs are welcome!

---

## ✨ Key Features

### AI Capabilities
- 🤖 **Multiple AI Models**: OpenAI (GPT-4, GPT-3.5), Anthropic (Claude), Google Gemini, Mistral, Groq, Ollama
- 🧠 **AI Agents**: Run autonomous agents on your codebase
- 💬 **Chat Interface**: Integrated chat with AI for code explanations and suggestions
- 🔍 **Regex AI**: AI-powered regex generation and explanation
- ✂️ **Code Editing**: AI-assisted code generation and refactoring

### Development Features
- 📝 **Full Editor**: Syntax highlighting for 50+ languages
- 🐛 **Debugging**: Integrated debuggers for Node.js, Python, and more
- 🔧 **Extensions**: Extensible architecture (Git, GitHub, Python, JavaScript, Docker, etc.)
- ⌨️ **Terminal**: Built-in terminal with xterm.js
- 📂 **Workspace Management**: Multi-folder workspace support
- 🎨 **Themes & Customization**: Extensive theming and configuration options

---

## 🖥️ System Requirements

### Minimum Requirements
- **OS**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **RAM**: 4 GB
- **Disk**: 2 GB free space
- **Node.js**: 20.18.2+ (check `.nvmrc`)

### Build Requirements

#### Windows
- Visual Studio 2022 or Visual Studio Build Tools with C++ development
- Python 3.x
- Git

#### macOS
- XCode and XCode Command Line Tools
- Python 3.x
- Git

#### Linux
```bash
sudo apt-get install -y \
  build-essential \
  libx11-dev \
  libkrb5-dev \
  libsecret-1-dev \
  libxkbfile-dev \
  python3 \
  git
```

---

## 📦 Installation & Setup

### 1️⃣ Prerequisites
Make sure you have installed:
- **Node.js 20.18.2+**: [Download](https://nodejs.org/)
- **Git**: [Download](https://git-scm.com/)
- **Build Tools**: See system requirements above

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/fusionvfx6/Fusion-Forge-Editor.git
cd Fusion-Forge-Editor
```

### 3️⃣ Install Dependencies
```bash
npm install
```

This will:
- Install npm packages
- Download and compile native modules
- Set up Electron
- Build React components

### 4️⃣ Verify Installation
```bash
npm run compile
```

---

## 🛠️ Development

### Watch Mode (Recommended for Development)

Start watching for changes in core, extensions, and React components:

```bash
# Watch all (core + extensions + React)
npm run watch

# Watch only core client
npm run watch-client

# Watch only extensions
npm run watch-extensions

# Watch only React UI
npm run watchreact
```

### Run the Editor

**Method 1: Using dev script**
```bash
.\scripts\code.bat          # Windows
./scripts/code.sh           # macOS/Linux
```

**Method 2: Using compiled output**
```bash
npm run electron
```

### Testing

```bash
# Run browser tests
npm run test-browser

# Run Node.js tests
npm run test-node

# Run smoke tests (integration tests)
npm run smoketest

# Run ESLint
npm run eslint

# Run code quality checks
npm run gulp hygiene
```

---

## 🏗️ Building

### One-Time Compilation
```bash
npm run compile
```

### Build for Production

#### Windows
```bash
npm run gulp vscode-win32-x64
```

#### macOS
```bash
npm run gulp vscode-darwin
```

#### Linux
```bash
npm run gulp vscode-linux-x64
```

The built files will be in the `./out/` directory.

### Available Build Targets
- `vscode-win32-x64` - Windows 64-bit
- `vscode-win32-arm64` - Windows ARM64
- `vscode-darwin` - macOS
- `vscode-linux-x64` - Linux 64-bit
- `vscode-linux-arm64` - Linux ARM64

---

## 📁 Project Structure

```
fusion-forge-editor/
├── src/
│   ├── vs/
│   │   ├── code/                    # Main entry point
│   │   ├── server/                  # Server-side code
│   │   ├── workbench/
│   │   │   ├── contrib/
│   │   │   │   └── void/           # ⭐ FUSION FORGE AI FEATURES
│   │   │   │       ├── browser/     # UI components, chat, services
│   │   │   │       │   ├── react/   # React-based UI
│   │   │   │       │   ├── chatThreadService.ts
│   │   │   │       │   ├── editCodeService.ts
│   │   │   │       │   └── aiRegexService.ts
│   │   │   │       └── electron-main/  # Main process
│   │   │   └── parts/               # Editor layout, menus
│   │   └── ...                      # Core VS Code modules
│   └── cli/                         # CLI tool (Rust)
├── extensions/                      # 50+ language extensions
│   ├── python/                      # Python support
│   ├── javascript/                  # JavaScript/TypeScript
│   ├── java/                        # Java support
│   ├── git/                         # Git integration
│   ├── github-authentication/       # GitHub authentication
│   ├── markdown-language-features/
│   └── ... (theme packages, tools, etc.)
├── build/
│   ├── gulpfile.js                 # Main build orchestration
│   ├── lib/                        # Build utilities
│   ├── win32/                      # Windows-specific builds
│   ├── darwin/                     # macOS-specific builds
│   └── linux/                      # Linux-specific builds
├── test/
│   ├── unit/                       # Unit tests
│   ├── smoke/                      # Integration tests
│   └── browser/                    # Browser tests
├── remote/                          # Remote connection code
├── scripts/
│   ├── code.bat                    # Run dev editor (Windows)
│   ├── code.sh                     # Run dev editor (macOS/Linux)
│   ├── code-server.bat             # Run server
│   └── test.bat                    # Run tests
├── package.json                    # Dependencies & scripts
├── product.json                    # Product configuration
└── VOID_CODEBASE_GUIDE.md          # Architecture guide
```

---

## 📜 Available Scripts

```bash
# Development
npm run watch                       # Watch all components
npm run watch-client               # Watch core
npm run watch-extensions           # Watch extensions
npm run watchreact                 # Watch React UI
npm run compile                    # One-time compile

# Running
npm run electron                   # Run with Electron
.\scripts\code.bat                 # Run dev editor

# Testing
npm run test-browser               # Browser tests
npm run test-node                  # Node tests
npm run smoketest                  # Smoke tests
npm run eslint                     # Lint code

# Building
npm run gulp vscode-win32-x64      # Build Windows
npm run gulp vscode-darwin         # Build macOS
npm run gulp vscode-linux-x64      # Build Linux

# Utilities
npm run download-builtin-extensions  # Download extensions
npm run update-grammars              # Update syntax grammars
npm run electron                     # Download Electron
npm run gulp hygiene                 # Code quality checks
```

---

## 🔌 AI Model Configuration

Fusion Forge supports multiple AI providers:

### Supported Providers
- **OpenAI**: GPT-4, GPT-3.5-turbo
- **Anthropic**: Claude 3.x (Opus, Sonnet, Haiku)
- **Google**: Gemini Pro
- **Mistral**: Large, Medium, Small
- **Groq**: Fast inference
- **Ollama**: Local models (self-hosted)

### Configuration
AI settings are configured in the editor settings or through environment variables. See `src/vs/workbench/contrib/void/browser/` for implementation details.

---

## 📚 Documentation

- **[Codebase Guide](./VOID_CODEBASE_GUIDE.md)** - Architecture and module overview
- **[Contributing Guide](./HOW_TO_CONTRIBUTE.md)** - Development guidelines
- **[VS Code Documentation](https://code.visualstudio.com/docs)** - VS Code features (base functionality)

---

## 🤝 Contributing

We welcome community contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly (`npm run test-browser && npm run test-node`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

See [HOW_TO_CONTRIBUTE.md](./HOW_TO_CONTRIBUTE.md) for detailed guidelines.

---

## 🔗 Support & Links

### Official Resources
- 🌐 **Website**: [voideditor.com](https://voideditor.com)
- 💬 **Discord**: [Join our community](https://discord.gg/RSNjgaugJs)
- 📋 **Project Board**: [GitHub Projects](https://github.com/orgs/voideditor/projects/2)
- 📧 **Email**: [hello@voideditor.com](mailto:hello@voideditor.com)

### Repository
- 🍴 **Original Void Editor**: [voideditor/void](https://github.com/voideditor/void)
- 🔱 **This Fork**: [fusionvfx6/Fusion-Forge-Editor](https://github.com/fusionvfx6/Fusion-Forge-Editor)
- 👨‍💻 **Based on**: [microsoft/vscode](https://github.com/microsoft/vscode)

### Related Projects
- 🛠️ **Void Builder**: [void-builder](https://github.com/voideditor/void-builder) - Build tool for custom versions
- 📦 **VS Code**: [microsoft/vscode](https://github.com/microsoft/vscode) - Base editor

---

## ⚖️ License

This project is licensed under the **MIT License** - see the [LICENSE.txt](./LICENSE.txt) file for details.

### Third-Party Licenses
- VS Code base: [LICENSE-VS-Code.txt](./LICENSE-VS-Code.txt)
- Dependencies: See [ThirdPartyNotices.txt](./ThirdPartyNotices.txt)

---

## 📝 Project Info

- **Name**: Fusion Forge Editor
- **Version**: 1.99.3
- **Void Version**: 1.4.9
- **Based on**: Microsoft VS Code
- **Built with**: TypeScript, Electron, React, Tailwind CSS
- **Package**: Node.js + npm

---

## 🎉 Getting Started Checklist

- [ ] Clone the repository
- [ ] Install Node.js 20.18.2+
- [ ] Run `npm install`
- [ ] Run `npm run watch` in one terminal
- [ ] Run `.\scripts\code.bat` in another terminal
- [ ] Start coding! 🚀

---

## ❓ FAQ

**Q: Is this still actively maintained?**
A: The original Void Editor team is exploring new innovations. This fork is available for community development.

**Q: Can I use my own AI model?**
A: Yes! Through Ollama or by configuring a compatible provider. See the codebase for implementation details.

**Q: How do I report bugs?**
A: Create an issue on GitHub or email hello@voideditor.com

**Q: Can I contribute?**
A: Absolutely! See the [Contributing Guide](./HOW_TO_CONTRIBUTE.md)

---

## 🙌 Acknowledgments

- Microsoft for the amazing [VS Code](https://github.com/microsoft/vscode) foundation
- The Void Editor team for the AI integration architecture
- All contributors and community members

---

**Made with ❤️ for the developer community.**

*Last Updated: May 2026*
