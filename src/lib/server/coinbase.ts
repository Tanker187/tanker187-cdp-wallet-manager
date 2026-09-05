import { Coinbase } from "@coinbase/coinbase-sdk";

const { CDP_API_KEY_NAME, CDP_API_KEY_SECRET } = process.env;

// Configure Coinbase only when credentials are available. This keeps Next.js
// build-time module evaluation from failing while still requiring credentials
// before the SDK is actually used in a deployed environment.
if (CDP_API_KEY_NAME && CDP_API_KEY_SECRET) {
  Coinbase.configure({
    apiKeyName: CDP_API_KEY_NAME,
    privateKey: CDP_API_KEY_SECRET.replaceAll("\\n", "\n"),
  });
}

export function assertCoinbaseConfigured(): void {
  if (!CDP_API_KEY_NAME || !CDP_API_KEY_SECRET) {
    throw new Error("CDP_API_KEY_NAME and CDP_API_KEY_SECRET must be set");
  }
}
