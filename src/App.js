import { useState } from "react";
function App() {
  const [cards] = useState([
    {
      title: "Card-1",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta nam vero sapiente eius fugit distinctio
      pariatur? A, molestias.`,
    },
    {
      title: "Card-2",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta`,
    },
    {
      title: "Card-3",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta dolor sit amet consectetur adipisicing elit.`,
    },
    {
      title: "Card-4",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta`,
    },
    {
      title: "Card-5",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta nam vero sapiente eius fugit distinctio
      pariatur? A, molestias.`,
    },
    {
      title: "Card-6",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta dolor sit amet consectetur adipisicing elit.`,
    },
  ]);
  return (
    <div>
      <section>
        <div className="container">
          <h1>Responsive Cards</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button className="btn">Explore</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
