import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const Home = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <Container className="my-5 py-2 text-center bg-light">
      <img
        src="https://www.brandbucket.com/sites/default/files/logo_uploads/559414/large_iceair.png"
        alt=""
      />
      <h1 className="my-4 display-3">L'App Meteo Più Affidabile</h1>
      <Form className="my-5 w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Inserisci il nome della città"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Cerca Meteo
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
