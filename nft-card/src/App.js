function App() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="img-container">
            <img src="/assets/image-equilibrium.jpg" alt="" />
          </div>
          <h3>Equilibrium #3429</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            amet.
          </p>
          <div className="details">
            <div className="eth">
              <img src="/assets/icon-ethereum.svg" alt="" />
              <span>0.041 ETH</span>
            </div>
            <div className="clock">
              <img src="/assets/icon-clock.svg" alt="" />
              <span>3 Days left</span>
            </div>
          </div>
          <div className="border"></div>
          <div className="author">
            <img src="/assets/image-avatar.png" alt="" />
            <span>
              Creation of <a href="#link">Hafiz Javaid</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
