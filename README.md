# Nature Remo

[![npm version](https://badge.fury.io/js/nature-remo.svg)](https://badge.fury.io/js/nature-remo)
![npm: total downloads](https://badgen.net/npm/dt/nature-remo)
[![Build Status](https://travis-ci.com/uetchy/nature-remo.svg?branch=master)](https://travis-ci.com/uetchy/nature-remo)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/7913641e31be48f6ba6cf2c68fa8b698)](https://www.codacy.com/manual/uetchy/nature-remo?utm_source=github.com&utm_medium=referral&utm_content=uetchy/nature-remo&utm_campaign=Badge_Coverage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7913641e31be48f6ba6cf2c68fa8b698)](https://www.codacy.com/manual/uetchy/nature-remo?utm_source=github.com&utm_medium=referral&utm_content=uetchy/nature-remo&utm_campaign=Badge_Grade)

```bash
yarn add nature-remo
# or
npm install nature-remo
```

## Basic Usage

```js
const NatureRemo = require('nature-remo')

const client = new NatureRemo.Cloud(process.env.NATURE_REMO_CLOUD_API_TOKEN)

async function turnOffAirConditioner() {
  const airconList = await client.listAircon()
  const aircon = airconList[0]

  await client.updateAirconSettings(aircon.id, {
    button: 'power-off',
  })

  console.log('Aircon: turned off')
}

async function turnOnAirConditioner() {
  const airconList = await client.listAircon()
  const aircon = airconList[0]

  await client.updateAirconSettings(aircon.id, {
    operation_mode: 'cool',
    temperature: 24,
  })

  console.log('Aircon: turned on')
}
```

You might want to grab an API token from https://home.nature.global.

- **RunKit Notebook**: Check out [RunKit Notebook](https://runkit.com/uetchy/nature-remo-cloud-api-nodejs-example) for runnable code snippets.
- **Code Example**: See [examples](https://github.com/nature-remo/nature-remo/tree/master/examples) for various code examples.
- **Documents**: See [API Documents](https://uetchy.github.io/nature-remo/) for detailed API documents.

## API

```js
const NatureRemo = require('nature-remo')
```

### Cloud API

See [Cloud API Documents](https://uetchy.github.io/nature-remo/classes/cloud.html).

```js
const client = new NatureRemo.Cloud(NATURE_REMO_CLOUD_API_TOKEN)
```

### Local API

See [Local API Documents](https://uetchy.github.io/nature-remo/classes/local.html).

```js
const client = new NatureRemo.Local(NATURE_REMO_LOCAL_ADDRESS)
```

## Development

```bash
git clone https://github.com/nature-remo/nature-remo # clone this repository
cd nature-remo # move to the repository folder
yarn install # install deps
NATURE_REMO_CLOUD_TOKEN=<nature-remo-cloud-api-token> yarn test # run test before creating a pull request
```

## Sibling projects

- 🌇 [Nature Remo for Rust](https://github.com/nature-remo/nature-remo-rs)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://uechi.io"><img src="https://avatars0.githubusercontent.com/u/431808?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yasuaki Uechi</b></sub></a><br /><a href="https://github.com/nature-remo/nature-remo/commits?author=uetchy" title="Code">💻</a> <a href="https://github.com/nature-remo/nature-remo/commits?author=uetchy" title="Documentation">📖</a></td>
    <td align="center"><a href="http://kksg.net"><img src="https://avatars0.githubusercontent.com/u/781452?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kosuge Kazuya</b></sub></a><br /><a href="https://github.com/nature-remo/nature-remo/commits?author=kkosuge" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/satoshicano"><img src="https://avatars0.githubusercontent.com/u/7578069?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Satoshi Nakamatsu</b></sub></a><br /><a href="https://github.com/nature-remo/nature-remo/commits?author=satoshicano" title="Code">💻</a></td>
    <td align="center"><a href="http://kyo5884.com"><img src="https://avatars1.githubusercontent.com/u/286439?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kyo5884</b></sub></a><br /><a href="https://github.com/nature-remo/nature-remo/commits?author=kyo5884" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/asari-mtr"><img src="https://avatars.githubusercontent.com/u/857715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mitsuteru Asari</b></sub></a><br /><a href="https://github.com/nature-remo/nature-remo/commits?author=asari-mtr" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Ekristoffe"><img src="https://avatars.githubusercontent.com/u/5562219?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chris</b></sub></a><br /><a href="https://github.com/nature-remo/nature-remo/commits?author=Ekristoffe" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
