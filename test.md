# 📘 **LightGrid**

[![npm version](https://img.shields.io/npm/v/light-grid.svg?color=32c854)](https://www.npmjs.com/package/light-grid)
[![sass](https://img.shields.io/badge/Built%20with-Sass-cc6699.svg)](https://sass-lang.com/)

**LightGrid** is a lightweight, responsive, and fully configurable **Sass-based grid and utility framework**.  
It’s built for developers who want modern CSS features (Flexbox, CSS Grid, logical properties) in a clean, minimal, and customizable system.

---

## 🚀 Features

- 🧱 **12-column grid system**
- 📱 **Responsive design with breakpoint utilities**
- ⚙️ **Configurable spacing, containers, and breakpoints**
- 💡 **Utility-first classes (flex, text, spacing, display, etc.)**
- 🪶 **Ultra lightweight — only a few KB after build**
- 🧩 **Fully written in modern Sass (`@use`, `@each`, logical CSS)**

---

## 📦 Installation

```bash
npm install light-grid
```

Or add via CDN (compiled CSS):

```html
<link rel="stylesheet" href="https://unpkg.com/light-grid/dist/lightgrid.css" />
```

---

## 🧩 Usage

Import the main Sass entry file into your project:

```scss
@use "light-grid";
```

Or include the compiled CSS directly:

```html
<link rel="stylesheet" href="light-grid/dist/lightgrid.css" />
```

---

## 🧱 Basic Grid Example

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">Column 1</div>
  <div class="col-12 col-md-6 col-lg-4">Column 2</div>
  <div class="col-12 col-md-6 col-lg-4">Column 3</div>
</div>
```

| Class | Description |
|--------|-------------|
| `.row` | Creates a grid row |
| `.col-*` | Defines column width |
| `.col-lg-*` | Column width at `lg` breakpoint |

---

## 📐 Responsive Prefixes

Responsive classes follow this pattern:
```
.col-{breakpoint}-{columns}
```

**Example:**
```html
<div class="col-12 col-md-6 col-lg-4"></div>
```

- `sm` → 576px
- `md` → 768px
- `lg` → 992px
- `xl` → 1200px
- `xxl` → 1400px


Responsive classes are available not only for columns, but also for any utility class (display, flex, text, spacing, etc.).

---


## 🧰 Utility Classes

### 🪟 Display
| Class | CSS |
|-------|-----|
| `.d-block` | `display: block;` |
| `.d-flex` | `display: flex;` |
| `.d-grid` | `display: grid;` |
| `.d-none` | `display: none;` |

### 🧭 Flex
| Class | CSS |
|-------|-----|
| `.flex-row` | `flex-direction: row;` |
| `.flex-column` | `flex-direction: column;` |
| `.justify-center` | `justify-content: center;` |
| `.align-center` | `align-items: center;` |
| `.flex-wrap` | `flex-wrap: wrap;` |

### 📝 Text
| Class | CSS |
|-------|-----|
| `.text-start` | `text-align: start;` |
| `.text-center` | `text-align: center;` |
| `.text-end` | `text-align: end;` |
| `.text-uppercase` | `text-transform: uppercase;` |

### 📏 Spacing
| Class   | CSS                     |
|---------|-------------------------|
| `.m-1`  | `margin: 4px;`          |
| `.p-3`  | `padding: 16px;`        |
| `.mt-2` | `margin-top: 8px;`      |
| `.px-4` | `padding-inline: 24px;` |
| `.g-2`  | `gap: 8px;`             |
| `.gc-1` | `gap-column: 4px;`      |
| `.gr-4` | `gap-row: 24px;`        |

### 💨 Overflow
| Class | CSS |
|-------|-----|
| `.overflow-hidden` | `overflow: hidden;` |
| `.overflow-auto` | `overflow: auto;` |
---

## ⚙️ Configuration (Sass Variables)

You can customize **every core part of the system** — including grid behavior, breakpoints, container widths, gaps, and spacing.
All configurable variables are defined in `core/_variables.scss`.

```scss
// 🧱 Grid system
$grid_columns_count: 12 !default;   // Total number of columns
$grid_gap: 16px !default;           // Default gap between columns

// 📱 Responsive breakpoints
$breakpoints: (
        sm: 576px,
        md: 768px,
        lg: 992px,
        xl: 1200px,
) !default;

// 📦 Container max-widths
$container_max_widths: (
        sm: 540px,
        md: 720px,
        lg: 960px,
        xl: 1140px,
) !default;

// 📏 Spacing scale
$spacers: (
        0: 0,
        1: 4px,
        2: 8px,
        3: 16px,
        4: 24px,
        5: 32px,
) !default;

```
---

## 🔧 Example — Custom Configuration

You can override any variable before importing LightGrid:
```scss
@use "light-grid/core/config" with (
  $grid_columns_count: 16,
  $grid_gap: 24px,
  $breakpoints: (
    sm: 640px,
    lg: 1280px,
  ),
  $spacers: (
    1: 6px,
  )
);

```
This allows full control over grid layout and spacing logic without modifying the core files.

---

## 🧪 Example (CodePen / Sandbox)

You can test LightGrid directly in CodePen or StackBlitz:
👉 [LightGrid Playground (coming soon)](#)

---

## 📏 Browser Support

| Browser | Supported |
|----------|------------|
| Chrome | ✅ |
| Firefox | ✅ |
| Edge | ✅ |
| Safari | ✅ |
| Opera | ✅ |

*(IE is not supported — LightGrid uses modern CSS features like `logical properties` and `gap`.)*

---

## 🧠 Philosophy

> Minimal setup. Modern CSS. Maximum control.  
> LightGrid doesn’t try to replace frameworks — it’s designed to **complement** your existing UI kit or design system.

---

## 🧾 License

MIT License © 2025 [LightGrid](https://www.npmjs.com/package/light-grid)

---

## 👨‍💻 Author

**Samir Ahmadov**  
