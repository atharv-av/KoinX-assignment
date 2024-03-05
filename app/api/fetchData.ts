export const fetchBtcRates = async (): Promise<{ bitcoin: { usd: number; inr: number } } | null> => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true"
    );
    const data = await response.json()!;
    console.log("Bitcoin data:", data);
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching Bitcoin data:", error);
    throw error;
  }
};


export async function fetchTrendingData() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  