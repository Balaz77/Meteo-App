import styled from "styled-components";

const WeatherContainer = styled.div`
    text-align: center;
    background: linear-gradient(135deg,rgb(73, 132, 184),rgb(235, 241, 241));
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0,2);
`;

const Temperature = styled.h2`
    font-size: 40px;
    margin: 10px 0;
    color: #000000;
`;

const Condition = styled.p`
    font-size: 18px; 
    font-weight: bold;
    color: #000000;
`;

const Weatherday = styled.p`
    font-size: 18px; 
    font-weight: bold;
    color: #000000;
`;

const WeatherInfo = ({ weatherData }) =>{

    return (
        <WeatherContainer>
            <h1>🌤️</h1>
            <Weatherday>Hoje</Weatherday>
            <Temperature> {weatherData.main.temp} C°</Temperature>
            <Condition> {weatherData.weather[0].description} </Condition>
        </WeatherContainer>
    );
};

export default WeatherInfo;