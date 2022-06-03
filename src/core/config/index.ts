export const environments: Record<string, { apiURL: string }> = {
  production: {
    apiURL: process.env.API_URL ||  '',
  },
}

export const getCurrentEnvConfig = () => environments.production
