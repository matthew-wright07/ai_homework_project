export async function GET(){
    const data = await fetch(`https://finnhub.io/api/v1/stock/insider-sentiment?symbol=NVDA&from=2024-03-01&to=2025-03-01&token=${process.env.API_KEY}`);
    const useable_data = await data.json();
    return new Response(JSON.stringify(useable_data.data))
}