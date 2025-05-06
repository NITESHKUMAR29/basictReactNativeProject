class PreferenceManager {
    cognitoToken: string | null = null;
    accessToken: string | null = null;
    language: string | null = 'en';
  
    constructor() {
      // In a real app, you'd retrieve this from secure storage or context
      this.cognitoToken = 'eyJraWQiOiI3NUJYbzN2bExGMThxQVBRY0FxSkkxa1JoT3IzVkFmNTVocm9BZGtCaXU4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzbjVvNjh2bmJhODFoYWsxNzUzNmhpbzM3OSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiZGVmYXVsdC1tMm0tcmVzb3VyY2Utc2VydmVyLWxubDcyalwvcmVhZCIsImF1dGhfdGltZSI6MTc0MTc2ODUwNSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9ONFhLRlEybEQiLCJleHAiOjE3NDE4NTQ5MDUsImlhdCI6MTc0MTc2ODUwNSwidmVyc2lvbiI6MiwianRpIjoiOGIyYjdiMjQtZDc2YS00OWNjLThiMWMtZTJmMDhmYzNiNTAxIiwiY2xpZW50X2lkIjoiM241bzY4dm5iYTgxaGFrMTc1MzZoaW8zNzkifQ.XK3pT9KITnc821dv5dRuHk86xx_i-lFlQRpy3AJBV7fj2o-aFlPMT6XVtWkUjC_X3iSGlWNMOQcrtUJXSth4ssbUYx5rLI2wrb9c1ty142t8yyhTr50eU6nol7Qs3fOkoflu9AQsnhmFlJo5fZkYbap7wVgVbRn_tlqTnyJ0LlGZxCnxpWp7L8lh4SNeGPjfgLTgBRUPWS_0rGIYZwRG5siH4KFdbMmnQTj0gs9jUFkn6uw1lzHG5weQUatsfLyi4aff4oR9wF9BjTySbvcOjGYMveeNOuqHIWhWUsoxHuD8QkmOxqmnLES4UhbxvcHxFj0fLer2ZNaVK2uTw2ldnQ';
      this.accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSUQiOiIrOTE5MTIzNDcxMjk2IiwiYXV0aFR5cGUiOiIxNzY2IiwidWlkIjoiSEsxOW5OZUNYZlQ2THhVeXE0cGZmSzBTdHgwMyIsIm5hbWUiOiJOSVRFU0ggS1VNQVIgTUFOREFMIiwiaWF0IjoxNzQ3MTM2OTQyLCJleHAiOjE3NDcyMjMzNDJ9.IxLUtc2LwkhJhbEt3lTyTOE3jJWTz5A8nCeWU-Snvf0';
      this.language = 'en';
    }
  }
  
  export const preferences = new PreferenceManager();