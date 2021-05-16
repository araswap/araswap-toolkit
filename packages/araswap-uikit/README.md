# 🍀 Araswap UIkit

[![Version](https://img.shields.io/npm/v/@araswap/uikit)](https://www.npmjs.com/package/@araswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@araswap/uikit)](https://www.npmjs.com/package/@araswap/uikit)

Araswap UIkit is a set of React components and hooks used to build pages on Araswap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @araswap/uikit`

## Setup

### Theme

Before using Araswap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@araswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@araswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://araswap.github.io/araswap-uikit/)
