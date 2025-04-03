import styled from "styled-components";
import WeatherInfo from "./components/WeatherInfo";
import WeatherDetails from "./components/WeatherDetails";
import ForecastCards from "./components/ForecastCards";
import React, { useState, useEffect } from "react";

const AppContainer = styled.div`
  background-color: white;
  max-width: 800px;
  max-height: 1000px;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgb(0, 197, 241);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #000000;
`;

const API_KEY = "35d57bd02732b3be1c8571e94e78cbe8"; 
const CITY = "Brasília";
const URL =  `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=pt_br`;

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() =>{
    const fetchWeather = async () => {
      try {
        const response = await fetch(URL);

        const data = await response.json();
        setWeatherData(data);

      } catch (error) {
        console.error("Erro ao buscar os dados da API: ", error )
      } 
    };

    fetchWeather();

  }, []);


  return (
    <AppContainer>
      <Title>{CITY} 📍</Title>
      {weatherData ? (
        <>
          <WeatherInfo weatherData={weatherData} />
          <WeatherDetails weatherData={weatherData} />
          <ForecastCards />
        </>
     
      ) : (
        <p>Carregando...</p>
      )}
     
    </AppContainer>
  );
};

export default App;