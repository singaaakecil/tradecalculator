import React from 'react';

function TradingAssistantInfo() {
  return (
    <section className="card trading-assistant">
      <h2>
        Trading Assistant <span style={{ fontSize: '0.8em' }}>🙇‍♀️</span> {/* Mengurangi ukuran emoji */}
      </h2>
      <div className="entry-exit">
        <h3>Portofolio Size (USD) </h3>
        <p>
          Total amount of your trading capital.
          (one that u use for trades)
        </p>
      </div>
      <div className="quick-reference">
        <h3>Quick Reference</h3>
        <ul>
          <li>Conservative Risk: <span>1-2%</span></li>
          <li>Moderate Risk: <span>2-3%</span></li>
          <li>Aggressive Risk: <span>3%+</span></li>
          <li>Good R/R Ratio: <span>1:2 or better</span></li>
        </ul>
      </div>
      <div className="learn-more">
        <h3>Learn More</h3>
        <div className="learn-item">
          <h4>Risk Per Trade (%)</h4>
          <p>how much drowdown u willingly to accept of 1 failed play for ur total porofolio</p>
        </div>
        <div className="learn-item">
          <h4>Risk Amount</h4>
          <p>estimate loss u get from one failed trade</p>
        </div>
        <div className="learn-item">
          <h4>R/R Ratio</h4>
          <p>Compares potential profit to potential loss on each trade</p>
        </div>
      </div>
    </section>
  );
}

export default TradingAssistantInfo;