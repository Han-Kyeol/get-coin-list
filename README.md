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

아이콘 등의 사용을 보다 쉽게 하는 라이브러리. 공식 Vue.js component를 갖고 있고, 가장 영향력 있는 무료 아이콘 제공처로 꼽힌다. 북마크 아이콘을 나타내기 위해 사용.

### **sass**

CSS Preprocessor. 일반적인 CSS에서 제공하지 않는 변수, 믹스인, 중첩구조 등 유용한 기능을 제공하여 인기. CSS의 중첩구조를 활용하기 위해 사용.

### **vuex**

Vue.js 애플리케이션에 대한 상태 관리 패턴 라이브러리. Vue의 공식 devtools 확장 프로그램과 통합돼 여러 고급 기능 제공. Loader 컴포넌트를 나타내기 위한 상태 관리 목적의 사용

### **vue-cli**

빠른 Vue.js 개발을 위한 풀 시스템 Command Line Interface. 초기 프로젝트 생성을 위한 사용

## Note

- coingecko의 API의 param 내 price_change_percentage에 7d를 추가하여도, response로 관련된 정보가 내려오지 않아 해당 정보 제외

- WikiPedia의 국문 버전 API를 찾지 못해, 모두 영문 API를 통한 검색으로 진행

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
