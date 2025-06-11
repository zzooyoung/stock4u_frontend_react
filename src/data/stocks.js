const stocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    category: "tech",
    currentPrice: 191.45,
    change: 2.13,
    changePercent: 1.12,
    prediction: {
      close: 193.5,
      high: 195.0,
      low: 189.8,
    },
    data: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-05-${String(i + 1).padStart(2, "0")}`,
      price: 160 + i * 1.1,
    })),
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    category: "tech",
    currentPrice: 417.88,
    change: -1.75,
    changePercent: -0.42,
    prediction: {
      close: 420.15,
      high: 423.5,
      low: 415.75,
    },
    data: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-05-${String(i + 1).padStart(2, "0")}`,
      price: 390 + i * 0.9,
    })),
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    category: "auto",
    currentPrice: 182.34,
    change: 3.22,
    changePercent: 1.8,
    prediction: {
      close: 185.5,
      high: 187.2,
      low: 180.6,
    },
    data: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-05-${String(i + 1).padStart(2, "0")}`,
      price: 160 + i * 0.75,
    })),
  },
  {
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
    category: "commerce",
    currentPrice: 145.12,
    change: 0.87,
    changePercent: 0.6,
    prediction: {
      close: 146.9,
      high: 148.3,
      low: 144.1,
    },
    data: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-05-${String(i + 1).padStart(2, "0")}`,
      price: 130 + i * 0.5,
    })),
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    category: "semiconductor",
    currentPrice: 926.75,
    change: 8.33,
    changePercent: 0.91,
    prediction: {
      close: 935.0,
      high: 950.0,
      low: 915.5,
    },
    data: Array.from({ length: 30 }, (_, i) => ({
      date: `2024-05-${String(i + 1).padStart(2, "0")}`,
      price: 850 + i * 2.5,
    })),
  },
];

export default stocks;