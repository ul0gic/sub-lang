# SUB Language Syntax Highlighting on GitHub

This document explains how syntax highlighting is configured for SUB language (.sb files) on GitHub.

---

## 🌈 Overview

The SUB language now has full syntax highlighting support on GitHub, making code more readable with color-coded:
- **Keywords** (`#var`, `#function`, `#if`, etc.)
- **Strings** ("text" and 'text')
- **Numbers** (integers, floats, hex, binary)
- **Comments** (// and /* */)
- **Operators** (+, -, *, /, ==, !=, etc.)
- **Built-in functions** (`#print`, `#input`, etc.)
- **Booleans** (true, false, null)

---

## 📚 Configuration Files

### 1. `.gitattributes`

Tells GitHub which files are SUB language files:

```gitattributes
*.sb linguist-language=SUB linguist-detectable=true
```

**Purpose**: Marks all `.sb` files as SUB language for statistics and highlighting.

### 2. `.github/linguist.yml`

Defines the SUB language for GitHub Linguist:

```yaml
SUB:
  type: programming
  color: "#FF6B35"        # Orange color for language badge
  extensions:
    - ".sb"
  tm_scope: source.sub
  language_id: 999999999
  aliases:
    - sublang
    - sub-lang
```

**Purpose**: Registers SUB as a recognized programming language.

### 3. `.github/linguist/sub.tmLanguage.json`

TextMate grammar defining syntax patterns:

```json
{
  "name": "SUB",
  "scopeName": "source.sub",
  "fileTypes": ["sb"],
  "patterns": [
    { "include": "#keywords" },
    { "include": "#strings" },
    { "include": "#numbers" },
    ...
  ]
}
```

**Purpose**: Provides detailed syntax highlighting rules.

---

## 🎨 Syntax Patterns

### Keywords

**Control Flow:**
- `#if`, `#elif`, `#else`, `#end`
- `#for`, `#while`, `#do`
- `#break`, `#continue`, `#return`

**Declarations:**
- `#var` - Variable declaration
- `#const` - Constant declaration
- `#function` - Function declaration

**Special:**
- `#embed`, `#endembed` - Embedded code blocks
- `#ui` - UI components
- `#import`, `#export` - Module system

### Operators

**Arithmetic:** `+`, `-`, `*`, `/`, `%`

**Comparison:** `==`, `!=`, `<`, `>`, `<=`, `>=`

**Logical:** `&&`, `||`, `!`, `and`, `or`, `not`

**Bitwise:** `&`, `|`, `^`, `~`, `<<`, `>>`

### Literals

**Strings:**
```sub
"double quoted"
'single quoted'
"with \"escapes\""
```

**Numbers:**
```sub
42              # Integer
3.14            # Float
1.5e10          # Scientific notation
0xFF            # Hexadecimal
0b1010          # Binary
```

**Booleans:**
```sub
true
false
null
nil
```

---

## 🛠️ How It Works

### GitHub Linguist Process

1. **Detection**: GitHub scans repository for `.sb` files
2. **Attribution**: `.gitattributes` marks them as SUB language
3. **Grammar Loading**: TextMate grammar applied for highlighting
4. **Statistics**: SUB counted in language statistics
5. **Display**: Syntax highlighted on GitHub web interface

### Color Scheme

The highlighting uses GitHub's default theme colors:

| Element | Color (Light) | Color (Dark) |
|---------|--------------|-------------|
| Keywords | Blue | Light Blue |
| Strings | Green | Light Green |
| Numbers | Orange | Light Orange |
| Comments | Gray | Light Gray |
| Functions | Purple | Light Purple |
| Operators | Red | Light Red |

---

## ✅ Validation Workflow

A GitHub Actions workflow automatically validates the syntax highlighting configuration:

**Workflow:** `.github/workflows/syntax-highlighting.yml`

**Checks:**
- ✅ Grammar JSON validity
- ✅ Pattern completeness
- ✅ .gitattributes configuration
- ✅ Linguist config presence
- ✅ Sample file testing

**Trigger:**
- On push to `.sb` files
- On changes to highlighting config
- Manual workflow dispatch

---

## 📝 Example

### Before Highlighting

```
#var name = "World"
#function greet(person)
    #return "Hello, " + person
#end
#print(greet(name))
```

### After Highlighting

Keywords in **blue**, strings in **green**, functions in **purple**:

```sub
#var name = "World"
#function greet(person)
    #return "Hello, " + person
#end
#print(greet(name))
```

---

## 📊 Repository Statistics

With syntax highlighting configured, GitHub will show:

**Language Bar:**
```
SUB 45.2%  C 40.1%  Shell 8.7%  Makefile 6.0%
```

**Language Badge:**
- Color: Orange (#FF6B35)
- Label: "SUB"
- Percentage: Based on `.sb` file lines

---

## 🚀 VS Code Extension

For local development, we also provide a VS Code extension:

**Location:** `.vscode-extension/`

**Features:**
- Syntax highlighting in VS Code
- IntelliSense support
- Code snippets
- Linting integration

**Installation:**
```bash
cd .vscode-extension
npm install
vsce package
code --install-extension sub-language-*.vsix
```

---

## 🔧 Testing

### Test Syntax Highlighting Locally

1. **Install VS Code extension** (see above)
2. **Open `.sb` file** in VS Code
3. **Verify colors** match expected patterns

### Test on GitHub

1. **Push changes** to GitHub
2. **Navigate to `.sb` file** on GitHub
3. **Wait 1-2 minutes** for Linguist to process
4. **Verify highlighting** appears correctly

---

## 🐛 Troubleshooting

### Highlighting Not Appearing

**Problem:** `.sb` files show as plain text

**Solutions:**
1. Check `.gitattributes` includes `*.sb linguist-language=SUB`
2. Wait 2-5 minutes for GitHub to process changes
3. Clear browser cache and refresh
4. Check workflow validation passed

### Wrong Colors

**Problem:** Colors don't match expected theme

**Solutions:**
1. Verify TextMate grammar patterns are correct
2. Check scope names match convention
3. Review `.tmLanguage.json` for errors
4. Run validation workflow

### Language Statistics Wrong

**Problem:** SUB not showing in language bar

**Solutions:**
1. Ensure `.gitattributes` configured correctly
2. Check `linguist-detectable=true` is set
3. Verify `.sb` files not marked as documentation
4. Wait for GitHub to regenerate statistics

---

## 📚 Resources

### Documentation
- [GitHub Linguist](https://github.com/github/linguist)
- [TextMate Grammars](https://macromates.com/manual/en/language_grammars)
- [VS Code Language Extensions](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)

### Tools
- [TextMate Grammar Tester](https://github.com/PanAeon/vscode-tmgrammar-test)
- [Linguist Debug Tool](https://github.com/github/linguist#testing)
- [VS Code Extension Generator](https://github.com/Microsoft/vscode-generator-code)

---

## 🤝 Contributing

To improve syntax highlighting:

1. Edit `.github/linguist/sub.tmLanguage.json`
2. Add/modify patterns in `repository` section
3. Test with VS Code extension
4. Run validation workflow
5. Submit pull request

**Example: Adding new keyword**

```json
{
  "name": "keyword.control.sub",
  "match": "\\b(#new_keyword)\\b"
}
```

---

## ✨ Summary

✅ **Complete syntax highlighting** for SUB language on GitHub
✅ **Automatic validation** via GitHub Actions
✅ **VS Code extension** for local development
✅ **Language statistics** in repository insights
✅ **Professional appearance** for code reviews

---

Built with ❤️ by the SUB community

**Making SUB code beautiful everywhere!** 🌈✨
