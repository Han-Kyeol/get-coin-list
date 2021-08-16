# get-coin-list-project

## Project Structure

```
|-- src
    |   |-- assets
    |   |   `-- styles
    |   |       |-- coinInfoModal.scss
    |   |       |-- coinListTable.scss
    |   |       |-- index.scss
    |   |       |-- priceListView.scss
    |   |       `-- reset.scss
    |   |-- components
    |   |   |-- CoinInfoModal.vue
    |   |   |-- CoinListTable.vue
    |   |   |-- Loader.vue
    |   |   `-- Nav.vue
    |   |-- gateways
    |   |   `-- GetCoinMarkets.ts
    |   |-- models
    |   |   |-- feature
    |   |   |   |-- CoinInfoInTable.ts
    |   |   |   |-- GetCoinMarketsParams.ts
    |   |   |   `-- GetCoinMarketsResponse.ts
    |   |   `-- shared
    |   |       `-- RootState.ts
    |   |-- presentations
    |   |   `-- PriceListPresentation.ts
    |   |-- router
    |   |   `-- index.ts
    |   |-- store
    |   |   `-- index.ts
    |   |-- useCases
    |   |   `-- PriceListUseCase.ts
    |   |-- views
    |   |   |-- BookMarkList.vue
    |   |   `-- PriceList.vue
    |   |-- App.vue
    |   |-- main.ts
    |   |-- shims-tsx.d.ts
    |   `-- shims-vue.d.ts
    |-- tests
    |   `-- unit
    |-- babel.config.js
    |-- jest.config.js
    |-- package-lock.json
    |-- package.json
    `-- tsconfig.json
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```

### Lints and fixes files

```
npm run lint
```

## External Libraries

### **fontawesome**

### **sass**

### **vuex**

### **vue-cli**

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
