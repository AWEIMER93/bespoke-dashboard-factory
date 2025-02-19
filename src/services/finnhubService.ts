
import * as finnhub from 'finnhub';
import { useQuery } from '@tanstack/react-query';

interface StockQuote {
  c: number; // Current price
  d: number; // Change
  dp: number; // Percent change
  h: number; // High price of the day
  l: number; // Low price of the day
  o: number; // Open price of the day
  pc: number; // Previous close price
}

// Initialize the Finnhub client
const finnhubClient = new finnhub.ApiClient();

export const getStockQuote = async (symbol: string): Promise<StockQuote> => {
  return new Promise((resolve, reject) => {
    const finnhubApi = new finnhub.DefaultApi(finnhubClient);
    finnhubApi.quote(symbol, (error: any, data: StockQuote, response: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

export const useStockQuote = (symbol: string) => {
  return useQuery({
    queryKey: ['stock-quote', symbol],
    queryFn: () => getStockQuote(symbol),
    refetchInterval: 30000, // Refresh every 30 seconds
  });
};
