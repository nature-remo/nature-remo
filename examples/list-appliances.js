const NatureRemo = require('nature-remo')

async function listAppliances() {
  // Instantiate Nature Remo client with an API token
  const client = new NatureRemo.Cloud(process.env.NATURE_REMO_CLOUD_API_TOKEN)

  // Get a list of the appliances
  const appliances = await client.getAppliances()
  for (const appliance of appliances) {
    const { id, nickname, type } = appliance
    console.log({
      id,
      nickname,
      type,
    })
  }
}

listAppliances().catch((err) => console.log(err))
