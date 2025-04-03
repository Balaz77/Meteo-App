import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ForecastContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

const ForecastCard = styled.div`
    background: ${({ icon }) =>
            icon.includes("clear")
                ? "linear-gradient(135deg, #ffcc33, #ff9966)"
                : icon.includes("rain")
                ? "linear-gradient(135deg, #667eea, #764ba2)"
                : "linear-gradient(135deg, rgb(3, 70, 128), rgb(19, 146, 152))"};
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        width: 60px;
`;

const ForecastText = styled.p`
    font-size: 16px;
    margin: 5px 0;
`;

const ForecastCards = () => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const fetchForecast = async () => {
            const API_KEY = "35d57bd02732b3be1c8571e94e78cbe8"; 
            const CITY = "Brasília";
            const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric&lang=pt_br`;
        
            try {
                const response = await fetch(URL);
                const data = await response.json();
                if (data.list) {
                    const dailyData = data.list.filter((reading, index) => index % 8 === 0);
                    setForecast(dailyData.map((item) => ({
                        day: new Date(item.dt_txt).toLocaleDateString('pt-br', { weekday : 'short' }),
                        temp: `${Math.round(item.main.temp)}°C`,
                        icon: item.weather[0].description.toLowerCase(),
                    }))
                    );
                }
            }catch (error){
                console.error("Erro ao buscar previsão do tempo: ", error);
            }
        };

        fetchForecast();    
    }, []);

    return (
        <ForecastContainer>
            {forecast.map((day, index) => (
                <ForecastCard  key={index} icon={day.icon}>
                    <ForecastText>{day.day}</ForecastText>
                    <ForecastText>{day.temp}</ForecastText>
                    <ForecastText>{day.icon.includes("clear") ? "☀️" : day.icon.includes("rain") ? "🌧️" : "⛅" }</ForecastText>
                </ForecastCard>
            ))}
        </ForecastContainer>
    );
};

export default ForecastCards;