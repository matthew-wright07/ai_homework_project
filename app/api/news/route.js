export async function GET(){
    const data = await fetch(`https://finnhub.io/api/v1/news?category=general&token=${process.env.API_KEY}`);
    const useable_data = await data.json();
    return new Response(JSON.stringify(useable_data))
}