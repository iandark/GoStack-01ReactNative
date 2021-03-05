# 🐱‍👓 React Native

### Conteúdo 03 do GoStack da RocketSeat, este repositório aborda sobre:

- Estilização de componentes
- Utilização do axios para se comunicar ao backend (baseURL)
- **iOS com emulador:** localhost
- **iOS com físico:** ip da máquina
- **Android com emulador:** localhost (adb reverse tcp:3333 tcp:3333)
- **Android com emulador:** 10.0.2.2 (Android studio)
- **Android com emulador:** 10.0.3.2 (Genymotion)
- **Android com físico:** ip da máquina#
- Utilização de componentes SafeAreaView, FlatList, TouchableOpacity

**Para esta aplicação é necessário que o projeto [GoStack-01NodeJS](https://github.com/iandark/GoStack-01NodeJS) esteja em execução.**

## Scripts disponíves

Neste projeto você pode executar:

### `npm install`

Instala as dependências contidas no arquivo package.json para o diretório node_modules

```bash
$ npm install
```

### `react-native info`

Gera os arquivos necessários para modo produção

```bash
$ react-native info
```

### `npm run build-dev`

Gera os arquivos necessários para modo desenvolvimento

```bash
$ npm run build-dev
```

### `npm start`

Executa o projeto em modo desenvolvimento

```bash
$ npm start
```

## Solução para possíveis erros

> **Error:** spawn ./gradlew EACCES

```bash
$ chmod 755 android/gradlew
```

> **ReferenceError:** SHA-1 for file /home/USER/.nvm/versions/node/v14.15.4/lib/node_modules/react-native/node_modules/metro/src/lib/polyfills/require.js (/home/USER/.nvm/versions/node/v14.15.4/lib/node_modules/react-native/node_modules/metro/src/lib/polyfills/require.js) is not computed

```bash
$ npm install -i -g --force react-native-cli
```

> **Error:** Network Error
> Possible Unhandled Promise Rejection

No arquivo api.js altere o baseUrl com ip da sua máquina na rede
