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

<br>

## Scripts disponíveis

Neste projeto você pode executar:

| Comando | Descrição |
| ------  | ------ |
| `npm install` | Instala as dependências contidas no arquivo package.json para o diretório node_modules |
| `react-native info` | Verifica se as dependências do ambiente de desenvolvimento são satisfatórias |
| `npm run build-dev` | Gera os arquivos necessários para modo desenvolvimento |
| `npm start` | Inicia o servidor de desenvolvimento do Metro que irá para possibilitar a execução da app no emulador iOS ou Android  |
| `npm run android` | Abre a aplicação no AVD(Android virtual device) ou em um dispositivo android conectador por USB |
| `npm run ios` | Abre a aplicação no emulador iOS |

<br>

## Solução para possíveis erros
> **Error:** spawn ./gradlew EACCES
>> **Solução**
>> `$ chmod 755 android/gradlew`

<br>

> **ReferenceError:** SHA-1 for file /home/USER/.nvm/versions/node/v14.15.4/lib/node_modules/react-native/node_modules/metro/src/lib/polyfills/require.js (/home/USER/.nvm/versions/node/v14.15.4/lib/node_modules/react-native/node_modules/metro/src/lib/polyfills/require.js) is not computed
>> **Solução**
>> `$ npm install -i -g --force react-native-cli`

<br>

> **Error:** Network Error
> Possible Unhandled Promise Rejection
>> **Solução**
>> No arquivo api.js altere o baseUrl com ip da sua máquina na rede.
