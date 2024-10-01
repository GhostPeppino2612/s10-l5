import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const WeatherInfo = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [cityNameCoo, setCityNameCoo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const API_KEY = "245c7b4baf894cbd70337a9d576cccbd";

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const geoResponse = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
        );
        const geoData = await geoResponse.json();

        if (geoData.length > 0) {
          const { lat, lon } = geoData[0];
          const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
          const weatherData = await weatherResponse.json();
          setWeatherData(weatherData);
        } else {
          console.error("Nessuna coordinate trovate per la città");
        }
      } catch (error) {
        console.error("Errore durante il recupero dei dati", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <Container className="p-5 text-center rounded-5 bg-dark text-white my-5">
      {loading ? (
        <p>Caricamento...</p>
      ) : weatherData ? (
        <>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              width="120px"
            />
          </div>
          <div className=" d-inline-block">
            <h2 className="display-2">
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p className="text-capitalize fst-italic">
              {weatherData.weather[0].description}
            </p>
            <p>
              <span className="fw-bold">
                <i class="fa-solid fa-temperature-half"></i> Temperatura:
              </span>{" "}
              {weatherData.main.temp}°C
            </p>
            <p>
              <span className="fw-bold">
                <i class="fa-solid fa-droplet"></i> Umidità:
              </span>{" "}
              {weatherData.main.humidity}%
            </p>
            <p>
              <span className="fw-bold">
                <i class="fa-solid fa-wind"></i> Vento:
              </span>{" "}
              {weatherData.wind.speed} m/s
            </p>
          </div>
        </>
      ) : (
        <p className="display-1 text-danger">
          Impossibile trovare i dati meteo per {city}
        </p>
      )}
    </Container>
  );
};

export default WeatherInfo;
