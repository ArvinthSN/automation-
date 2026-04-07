# automation-
i automated using n8n no code application nodation application helps me to implement faster to scrap the live data using API with workflows . only four node with java script API 

# 📊 Daily Stock Market Analyzer (n8n + Google Sheets)

An automated **data pipeline project** built using **n8n** that fetches daily stock market data, analyzes trends, and stores structured insights into Google Sheets for further analysis and visualization.

---

## 🚀 Project Overview

This project automates the process of:

* 📥 Fetching stock data from an API
* 🧠 Analyzing price trends (UP / DOWN)
* 📊 Calculating price change & percentage
* 🗂️ Storing structured data in Google Sheets
* ⏰ Running automatically every day using Cron

---

## 🧰 Tech Stack

* **n8n** – Workflow automation
* **JavaScript** – Data processing (Function Node)
* **Google Sheets API** – Data storage
* **Alpha Vantage API** – Stock data source

---

## 🔄 Workflow Architecture

```plaintext
Cron Trigger 
   ↓
HTTP Request (Fetch Stock Data)
   ↓
Function Node (Analyze Data)
   ↓
Google Sheets (Store Results)
```

---

## 📊 Data Fields Stored

| Column         | Description                |
| -------------- | -------------------------- |
| date           | Trading date               |
| stock          | Stock symbol (e.g., IBM)   |
| price          | Latest closing price       |
| previous_price | Previous day closing price |
| change         | Price difference           |
| change_percent | Percentage change          |
| trend          | UP 📈 / DOWN 📉            |
| status         | Bullish / Bearish          |
| day            | Day of execution           |
| month          | Month                      |
| year           | Year                       |
| timestamp      | Execution time             |

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/stock-analyzer-n8n.git
cd stock-analyzer-n8n
```

---

### 2. Setup n8n Locally

```bash
npm install -g n8n
n8n start
```

---

### 3. Get API Key

* Sign up at Alpha Vantage
* Replace in HTTP Request node:

```
https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=YOUR_API_KEY
```

---

### 4. Configure Google Sheets

* Create a new sheet
* Add headers:

```plaintext
date | stock | price | previous_price | change | change_percent | trend | status | day | month | year | timestamp
```

* Setup OAuth credentials via Google Cloud Console
* Connect Google Sheets node in n8n

---

### 5. Add Function Node Code

```javascript
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
```

---

## ⏰ Cron Schedule Example

Runs every day at 9 AM:

```
0 0 9 * * *
```

---

## 📈 Future Improvements

* 🔥 Multi-stock tracking
* 🤖 AI-based prediction models
* 📊 Dashboard integration (Power BI / Tableau)
* 📲 Email/Telegram alerts
* ☁️ Deployment using Docker + Cloud

---

## 🧠 Key Learnings

* Workflow automation with n8n
* API integration & data pipelines
* Data transformation using JavaScript
* Cloud authentication (OAuth2)
* Real-world ML/data engineering foundation

---

## 💼 Use Case

This project demonstrates:

* Data Engineering skills
* Automation workflows
* Real-world financial data processing

👉 Suitable for:

* Portfolio projects
* Internships
* Data/AI roles

---

## 📌 Author

**Arvinth SN**
Computer Science Student | Data & AI Enthusiast

---

## ⭐ Support

If you found this useful:

* ⭐ Star this repo
* 🔁 Share with others
* 💡 Contribute ideas

---

## 🔥 Final Note

This is not just a project — it's a **foundation for building real-world AI & data systems** 🚀
