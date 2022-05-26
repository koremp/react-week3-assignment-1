# 리액트 3주차 과제 1 풀이 순서

## Set up jest-plugin-context

### Install jest-plugin-context

```bash
npm i -D jest-plugin-context
```

### Add jest-plugin-context/setup to jest.config.js

```js
module.exports = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    './jest.setup',
  ]
};
```

## Write Test Files from Outside of App

1. App.test.jsx
2. Page.test.jsx
3. List.test.jsx
4. Input.test.jsx
