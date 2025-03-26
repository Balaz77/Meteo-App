import styled from "styled-components";

const ForecastContainer = styled.div`
    display: flex;
    justify-content: space-around; 
    margin-top: 20px; 
`;

const ForecastCard = styled.div`
    background: ${({icon}) => 
        icon === "🌞"
    ? "linear-gradient(135deg, #ffcc33, #ff9966)"
    : icon === "🌧️"
    ? "linear-gradient(135deg, #667eea, #764ba2)"
    : "linear-gradient(135deg,rgb(3, 70, 128),rgb(19, 146, 152))"
};
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
    const forecast = [
        { day: "Seg", temp: "25°C", icon: "🌤️" },
        { day: "Ter", temp: "23°C", icon: "⛅" },
        { day: "Qua", temp: "26°C", icon: "🌞" },
        { day: "Qui", temp: "22°C", icon: "🌧️" },
        { day: "Sex", temp: "24°C", icon: "🌥️" },
        { day: "Sab", temp: "29°C", icon: "🌞" },
        { day: "Dom", temp: "24°C", icon: "🌧️" },
    ];

    return (
        <ForecastContainer>
            {forecast.map((day) => (
                <ForecastCard key={day.day} icon={day.icon}>
                    <ForecastText>{day.icon}</ForecastText>
                    <ForecastText>{day.day}</ForecastText>
                    <ForecastText>{day.temp}</ForecastText>
                </ForecastCard>
            ))}
        </ForecastContainer>
    );
};

export default ForecastCards;