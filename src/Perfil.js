import React from "react";
import Card from "react-bootstrap/Card";

export default function Perfil() {
    return (
        <div className="perfil">
            <h1>Oi eu sou o Celovinho</h1>
            <p>I'm only available in the internet</p>
            <Card style={{ width: '18rem', backgroundColor: 'red' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}