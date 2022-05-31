import { handler } from './handler'

if (require.main === module) {
  const {
    RELAYER_API_KEY,
    RELAYER_API_SECRET,
    ETHEREUM_MAINNET_PROVIDER_URL: ethereumRinkebyProviderURL,
    POLYGON_MAINNET_PROVIDER_URL: polygonMumbaiProviderURL,
    AVALANCHE_MAINNET_PROVIDER_URL: avalancheFujiProviderURL
  } = process.env;
  handler({
    apiKey: RELAYER_API_KEY,
    apiSecret: RELAYER_API_SECRET,
    secrets: {
      ethereumRinkebyProviderURL,
      polygonMumbaiProviderURL,
      avalancheFujiProviderURL
    }
  })
    .then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}

export function main() {}