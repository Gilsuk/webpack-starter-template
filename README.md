# Webpack Starter Template

[Babel](https://babeljs.io/), [Webpack](https://webpack.js.org/)을 사용하여 SPA (Single Page Application) 프로젝트 개발환경을 구축하고 빌드하기 위한 초기 템플릿

## 초기 세팅

npm이 필요합니다. npm은 [node.js](https://nodejs.org/)에 포함되어 있습니다.

```bash
npm i
```

## build

빌드 명령 후, dist 폴더에 결과물이 컴파일됩니다. 이 파일을 배포용으로 사용하세요.

```bash
npm run build
```

## live

개발용 라이브 서버를 가동합니다. 서버가 가동되면 운영체제의 기본 브라우저가 실행됩니다. 라이브 업데이트를 지원하므로 소스를 편집하고 저장할 때마다 변경사항이 브라우저에 자동으로 반영됩니다.

빌드는 메모리에서 수행되며, 물리 저장소에 저장되지 않습니다. 따라서 배포용 빌드는 별도의 빌드 명령을 통해 수행해야 합니다.

```bash
npm run live
```

## live:ch

live명령어와 동일하지만 기본 브라우저 대신 크롬 브라우저를 실행합니다.

```bash
npm run live:ch
```

## live:port

특정 포트를 지정할 수 있습니다.

```bash
npm run live -- --port 8080
npm run live:ch -- --port 5000
```
