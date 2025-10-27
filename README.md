# 📘 **LightGrid**

[![npm version](https://img.shields.io/npm/v/light-grid.svg?color=32c854)](https://www.npmjs.com/package/light-grid)
[![license](https://img.shields.io/npm/l/light-grid.svg)](./LICENSE)
[![sass](https://img.shields.io/badge/Built%20with-Sass-cc6699.svg)](https://sass-lang.com/)

**LightGrid** is a lightweight, responsive, and fully configurable **Sass-based grid and utility framework**.  
It’s built for developers who want modern CSS features (Flexbox, CSS Grid, logical properties) in a clean, minimal, and
customizable system.

---

## 🚀 Features

- 🧱 **12-column grid system**
- 📱 **Responsive design with breakpoint utilities**
- ⚙️ **Configurable spacing, containers, and breakpoints**
- 💡 **Utility-first classes (flex, text, spacing, display, etc.)**
- 🪶 **Ultra lightweight — only a few KB after build**
- 🧩 **Fully written in modern Sass**

---

## 📦 Installation

```
npm install light-grid
```

Or add via CDN (compiled CSS):

```html

<link rel="stylesheet" href="https://unpkg.com/light-grid/dist/lightgrid.css"/>
```

---

## 🧩 Usage

Import the main Sass entry file into your project:

```scss
@use "light-grid/dist/_index.scss";
```

Or include the compiled CSS directly:

```html

<link rel="stylesheet" href="light-grid/dist/lightgrid.css"/>
```

---

## 🧱 Layout Classes

LightGrid provides a simple, responsive layout structure based on containers, rows, and columns.

These core classes help you create structured, flexible, and centered layouts easily.

### `.container`

Centers your content horizontally and sets a maximum width based on the current breakpoint.
It also adds horizontal padding (`padding-inline`) for consistent spacing.

Each breakpoint can define its own container max-width through `$container_max_widths` in `core/_variables.scss`.

### `.row`

Defines a horizontal grid wrapper for columns.
By default, it uses CSS Grid or Flex (depending on the version) to align child `.col-*` elements.

### `.col-*`

Defines how many columns an element spans inside a `.row`.

The default grid has **12 columns**, controlled by `$grid_columns_count`.

### Basic Grid Example:

```html

<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">Column 1</div>
        <div class="col-12 col-md-6 col-lg-4">Column 2</div>
        <div class="col-12 col-md-6 col-lg-4">Column 3</div>
    </div>
</div>
```

---

## ⚙️ Configuration (Sass Variables)

You can customize **every core part of the system** — including grid behavior, breakpoints, container widths, gaps, and
spacing.

All configurable variables are defined in `core/_variables.scss`.

```scss
// 🧱 Grid system
$grid_columns_count: 12 !default; // Total number of columns
$grid_gap: 16px !default; // Default gap between columns

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

// 📏 Spacing scale (used by .m-* / .p-* utilities)
$spacers: (
        0: 0,
        1: 4px,
        2: 8px,
        3: 16px,
        4: 24px,
        5: 32px,
) !default;
```

### Example — Custom Configuration:

You can override any variable before importing LightGrid:

```scss
@use "light-grid/core/variables" with (
  $grid_columns_count: 16,
  $grid_gap: 24px,
  $breakpoints: (
    sm: 640px,
    md: 960px,
    lg: 1280px,
  ),
  $container_max_widths: (
    sm: 600px,
    md: 880px,
    lg: 1120px,
  ),
  $spacers: (
    0: 0,
    1: 6px,
    2: 12px,
    3: 20px,
    4: 32px,
  )
);
```

This allows full control over grid layout and spacing logic without modifying the core files.

---

## Display

Control the `display` behavior of an element.

All display utilities are responsive-capable, e.g. `d-md-flex`, `d-lg-none`.

| Class             | CSS                      |
|-------------------|--------------------------|
| `.d-block`        | `display: block;`        |
| `.d-inline`       | `display: inline;`       |
| `.d-inline-block` | `display: inline-block;` |
| `.d-flex`         | `display: flex;`         |
| `.d-inline-flex`  | `display: inline-flex;`  |
| `.d-grid`         | `display: grid;`         |
| `.d-none`         | `display: none;`         |

### Example:

```html

<div class="d-flex d-md-block">
    ...
</div>
```

---

## Flex

Provides control over flexbox layout alignment and direction.

| Class                  | CSS                               |
|------------------------|-----------------------------------|
| `.flex-row`            | `flex-direction: row;`            |
| `.flex-column`         | `flex-direction: column;`         |
| `.flex-row-reverse`    | `flex-direction: row-reverse;`    |
| `.flex-column-reverse` | `flex-direction: column-reverse;` |
| `.justify-start`       | `justify-content: flex-start;`    |
| `.justify-center`      | `justify-content: center;`        |
| `.justify-end`         | `justify-content: flex-end;`      |
| `.justify-between`     | `justify-content: space-between;` |
| `.justify-around`      | `justify-content: space-around;`  |
| `.align-start`         | `align-items: flex-start;`        |
| `.align-center`        | `align-items: center;`            |
| `.align-end`           | `align-items: flex-end;`          |
| `.align-stretch`       | `align-items: stretch;`           |
| `.flex-wrap`           | `flex-wrap: wrap;`                |
| `.flex-nowrap`         | `flex-wrap: nowrap;`              |

### Example:

```html

<div class="d-flex flex-column justify-between-md align-center">
    <div>Left</div>
    <div>Right</div>
</div>
```

---

## Text

Text formatting and alignment helpers.

| Class              | CSS                           |
|--------------------|-------------------------------|
| `.text-start`      | `text-align: start;`          |
| `.text-center`     | `text-align: center;`         |
| `.text-end`        | `text-align: end;`            |
| `.text-uppercase`  | `text-transform: uppercase;`  |
| `.text-lowercase`  | `text-transform: lowercase;`  |
| `.text-capitalize` | `text-transform: capitalize;` |

### Example:

```html
<p class="text-center text-uppercase">text</p>
```

---

## Spacing

Add margin or padding with shorthand utilities.

| Pattern                            | Description      |
|------------------------------------|------------------|
| `.m-*`                             | `margin`         |
| `.p-*`                             | `padding`        |
| `.mt-*`, `.mb-*`, `.ml-*`, `.mr-*` | Margin per side  |
| `.pt-*`, `.pb-*`, `.pl-*`, `.pr-*` | Padding per side |
| `.mx-*`, `.my-*`, `.px-*`, `.py-*` | Axis shortcuts   |

### Spacing scale (defaults):

```scss
$spacers: (
        0: 0,
        1: 4px,
        2: 8px,
        3: 16px,
        4: 24px,
        5: 32px,
);
```

### Example:

```html

<div class="p-3 pr-1 mx-2">...</div>
```

---

## Alignment Utilities

Used for vertical and horizontal positioning in flex or grid contexts.

| Class              | CSS                               |
|--------------------|-----------------------------------|
| `.align-start`     | `align-items: flex-start;`        |
| `.align-center`    | `align-items: center;`            |
| `.align-end`       | `align-items: flex-end;`          |
| `.justify-start`   | `justify-content: flex-start;`    |
| `.justify-center`  | `justify-content: center;`        |
| `.justify-end`     | `justify-content: flex-end;`      |
| `.justify-between` | `justify-content: space-between;` |

### Example:

```html

<div class="d-flex align-center justify-between">
    <span>Left</span>
    <span>Right</span>
</div>
```

## Other helpers

| Class                | CSS                       |
|----------------------|---------------------------|
| `.w-100`             | `width: 100%`             |
| `.h-100`             | `height: 100%;`           |
| `.overflow-hidden`   | `overflow: hidden;`       |
| `.overflow-auto`     | `overflow: auto;`         |
| `.position-relative` | `position: relative;`     |
| `.position-absolute` | `position: absolute;`     |
| `.rounded`           | `border-radius: 0.25rem;` |
| `.rounded-circle`    | `border-radius: 50%;`     |

---

## 📐 Responsive Prefixes

Responsive classes are available **for all major utility types** — including `display`, `col`, `spacing`, `text`, `flex`
and other utilities.

You can apply responsive modifiers to adjust layout and styles per breakpoint.

### 🔠 Naming Convention

Depending on the utility type, the **position of the breakpoint prefix** differs slightly for readability and
consistency:

| Category                                  | Pattern                           | Example                                           |
|-------------------------------------------|-----------------------------------|---------------------------------------------------|
| 🧱 **Grid / Display / Spacing**           | `{property}-{breakpoint}-{value}` | `col-lg-4`, `d-md-flex`, `p-sm-3`                 |
| 🎨 **Other Utilities (Text, Flex, etc.)** | `{property}-{value}-{breakpoint}` | `text-center-lg`, `justify-center-md`, `w-100-sm` |

This separation makes it easier to visually group layout-based utilities (`col`, `d`, `p/m`) with breakpoint first, and
behavioral/text utilities with breakpoint last.

### Available Breakpoints:

| Prefix | Min Width | Typical Use            |
|--------|-----------|------------------------|
| `sm`   | 576px     | Small devices (phones) |
| `md`   | 768px     | Tablets                |
| `lg`   | 992px     | Desktops               |
| `xl`   | 1200px    | Large screens          |

---
## 📏 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome  | ✅         |
| Firefox | ✅         |
| Edge    | ✅         |
| Safari  | ✅         |
| Opera   | ✅         |

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
