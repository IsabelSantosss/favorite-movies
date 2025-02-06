export const token = import.meta.env.VITE_TOKEN;
export const apiUrl = import.meta.env.VITE_API;
export const apiKey = import.meta.env.VITE_API_KEY;

export const requestConfig = (method: string, data: any) => {
      let config: RequestInit = {
            method,
            headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
            }
      };

      if (data) {
            config = {
                  ...config,
                  body: JSON.stringify(data)
            } 
      }

      return config;
};
