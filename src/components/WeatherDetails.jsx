import styled from "styled-components";

const DetailsContainer = styled.div`
    margin-top: 15px;
    padding: 15px;
    background:  linear-gradient(135deg,rgb(73, 132, 184),rgb(235, 241, 241));
    border-radius: 10px;
    box-shadow: 0 4px 8px rgb(2, 23, 100);
    display: flex;
`;

const DetailText = styled.p`
    font-size: 16px;
    margin: 5px 0;
    font-weight: bold;
    color: #000;
`;

const WeatherDetails = ( { weatherData }) => {
    return(
        <DetailsContainer>
            <DetailText>🍃 Ventos: {weatherData.wind.speed} </DetailText>
            <DetailText>💧 Umidade: {weatherData.main.humidity}</DetailText>
            <DetailText>☔ Pressão: {weatherData.main.pressure}</DetailText>
        </DetailsContainer>
    );
};

export default WeatherDetails;