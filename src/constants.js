const prod = {
    url: {
     API_URL: 'https://second-chance-book-club-api.herokuapp.com'
     }
   };
   const dev = {
    url: {
     API_URL: 'https://localhost:5001'
    }
   };

export const config = process.env.NODE_ENV === 'development' ? dev : prod;