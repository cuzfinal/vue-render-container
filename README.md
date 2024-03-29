# vue-render-container
A vue component that combines render functions and templates, compatible with vue 2.x & 3.x  

## install
```bash
npm install vue-render-container
```

## usage
```vue
<template>
  <render-container
    v-for="(item, index) in list"
    :key="item"
    :render="renderItem"
    :params="[item, index]"
  />
</template>

<script setup lang="ts">
import { RenderContainer } from 'vue-render-container'

const list = [
  'learn',
  'work',
  'sleep'
]

const renderItem = (h, data: string, index: number) => h('p', {}, [`${index}. ${data}`])
</script>
```

## props
|name|value|type|required|
|---|---|---|---|
|render|Function |(h, ...params) => VNode |```true```|
|params|Array |any[] | ```false```|
