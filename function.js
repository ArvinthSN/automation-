const series = items[0].json["Time Series (Daily)"];
const dates = Object.keys(series);

const latestDate = dates[0];
const prevDate = dates[1];

const latestClose = parseFloat(series[latestDate]["4. close"]);
const prevClose = parseFloat(series[prevDate]["4. close"]);

const change = latestClose - prevClose;
const changePercent = ((change / prevClose) * 100).toFixed(2);

const now = new Date();

return [{
  json: {
    date: latestDate,
    stock: "IBM",
    price: latestClose,
    previous_price: prevClose,
    change: change.toFixed(2),
    change_percent: changePercent + "%",
    trend: latestClose > prevClose ? "UP 📈" : "DOWN 📉",
    status: latestClose > prevClose ? "Bullish" : "Bearish",
    day: now.toLocaleString('en-US', { weekday: 'long' }),
    month: now.toLocaleString('en-US', { month: 'long' }),
    year: now.getFullYear(),
    timestamp: now.toISOString()
  }
}];
