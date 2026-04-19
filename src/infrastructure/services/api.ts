// API service layer - handles HTTP requests
export class ApiService {
  // private baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

  // async get<T>(endpoint: string): Promise<T> {
  //   try {
  //     const response = await fetch(`${this.baseUrl}${endpoint}`);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     console.error(`API GET ${endpoint} failed:`, error);
  //     throw error;
  //   }
  // }

  // async post<T>(endpoint: string, data: any): Promise<T> {
  //   try {
  //     const response = await fetch(`${this.baseUrl}${endpoint}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     console.error(`API POST ${endpoint} failed:`, error);
  //     throw error;
  //   }
  // }
}

// Singleton instance
export const apiService = new ApiService();
