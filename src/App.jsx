import styled from "styled-components";
import WeatherInfo from "./components/WeatherInfo";
import WeatherDetails from "./components/WeaatherDetails";
import ForecastCards from "./components/ForecastCards";

const AppContainer = styled.div`
  background-color: white;
  max-width: 400px;
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

function App() {
  return (
    <AppContainer>
      <Title>📍 São Paulo</Title>
      <WeatherInfo />
      <WeatherDetails />
      <ForecastCards />
    </AppContainer>
  );
}

export default App;