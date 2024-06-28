# **CryptoScreener**

CryptoScreener is a React-based web application that allows users to search for and view detailed information about various cryptocurrencies. The app leverages the CoinGecko API to fetch real-time data, ensuring users have access to the latest market information.

## **Features**

- **Search with Datalist**: Users can search for cryptocurrencies using an autocomplete search bar that provides suggestions as they type.
- **Individual Coin Data**: Users can view detailed information about individual cryptocurrencies, including price, market cap, and 24-hour high/low prices.
- **Line Chart**: A line chart is displayed for each cryptocurrency, showing its price trend over the past 10 days.
- **Responsive Design**: The app is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

## **Technologies Used**

- **React.js**: A JavaScript library for building user interfaces.
- **CoinGecko API**: A free API for cryptocurrency data.
- **CSS**: For styling the components and layout.
- **React Router**: For navigating between different pages of the app.

## **Installation**

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/cryptoscreener.git
    ```

2. **Navigate to the project directory**:
    ```sh
    cd CryptoScreenerApp
    ```

3. **Install dependencies**:
    ```sh
    npm install
    ```

4. **Start the development server**:
    ```sh
    npm run dev
    ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## **Usage**

### **Home Page**
- **Search Bar**: Type in the name of a cryptocurrency to search for it. The search bar provides autocomplete suggestions based on the available cryptocurrencies.
- **Cryptocurrency Table**: The home page displays a table of the top cryptocurrencies, including their price, 24-hour change, and market cap.

### **Coin Page**
- **Coin Details**: Clicking on a cryptocurrency in the table navigates to a detailed view of the coin. This view includes the coin's name, image, market cap rank, current price, market cap, and 24-hour high/low prices.
- **Line Chart**: The coin's page includes a line chart showing its price trend over the past 10 days.

## **API Key**
The app uses a demo API key provided by CoinGecko. For production use, you may need to obtain your own API key from [CoinGecko](https://www.coingecko.com/en/api) and replace the existing key in the fetch requests.
