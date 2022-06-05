import React from "react";
import Header from "./Header";
import Main from "./Main";
import destinations from "../data";

function App() {
    const mainPart = destinations.map((event) => {
        return (
            <Main 
                key={event.id}
                title={event.title}
                location={event.location}
                googleMapsUrl={event.googleMapsUrl}
                startDate={event.startDate}
                endDate={event.endDate}
                description={event.description}
                imageUrl={event.imageUrl}
            />
        )
    })
    return (
        <div>
            <Header />
            <section>
                {mainPart}
            </section>
        </div>
    )
}

export default App;