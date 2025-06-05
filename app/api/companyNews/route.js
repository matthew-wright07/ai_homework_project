export async function POST(req){
    const stock = await req.json();
    const data = await fetch(`https://finnhub.io/api/v1/company-news?symbol=${stock.stock}&from=2025-01-01&to=2025-02-01&token=${process.env.API_KEY}`);
    const useable_data = await data.json();
    return new Response(JSON.stringify(useable_data))
}