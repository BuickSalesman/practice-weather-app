import { useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${process.env.OPEN_WEATHER_API_KEY}` //remember to replace api key here until you can figure out the interpolation
      );

      const data = await response.json();

      console.log(data, "data");
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  console.log(loading);

  return (
    <div>
      <Search
        //search comment for readability
        search={search}
        //setSearch comment for readability
        setSearch={setSearch}
        //handleSearch comment for readability
        handleSearch={handleSearch}
      />
      Weather
    </div>
  );
}

//
//RETURN TO VIDEO 5:34:33
