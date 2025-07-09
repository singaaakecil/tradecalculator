// src/components/PositionCalculatorForm.jsx

import React from 'react';

function PositionCalculatorForm({
  portfolioSize, setPortfolioSize,
  riskPerTrade, setRiskPerTrade, handleRiskButtonClick,
  leverage, setLeverage,
  entryPrice, setEntryPrice,
  stopLossPrice, setStopLossPrice,
  takeProfitPrice, setTakeProfitPrice,
  onCalculateClick
}) {
  return (
    <section className="card position-calculator">
      <h2 className="calculator-title">Position Calculator</h2>
      <div className="form-group">
        <label htmlFor="portfolioSize">Portfolio Size (USD)</label>
        <input
          type="number"
          id="portfolioSize"
          value={portfolioSize}
          onChange={(e) => setPortfolioSize(e.target.value)}
          min="0"
          placeholder="e.g., 1000"
        />
      </div>

      <div className="form-group">
        <label htmlFor="riskPerTrade">Risk Per Trade (%)</label>
        <div className="risk-buttons">
          <button
            className={`risk-btn ${riskPerTrade === 1 ? 'active' : ''}`}
            onClick={() => handleRiskButtonClick(1)}
            data-risk="1"
          >
            1%
          </button>
          <button
            className={`risk-btn ${riskPerTrade === 2 ? 'active' : ''}`}
            onClick={() => handleRiskButtonClick(2)}
            data-risk="2"
          >
            2%
          </button>
          <button
            className={`risk-btn ${riskPerTrade === 3 ? 'active' : ''}`} // Hapus komentar di sini
            onClick={() => handleRiskButtonClick(3)}
            data-risk="3"
          >
            3%
          </button>
          <button
            className={`risk-btn ${riskPerTrade === 4 ? 'active' : ''}`} // Hapus komentar di sini
            onClick={() => handleRiskButtonClick(4)}
            data-risk="4"
          >
            4%
          </button>
          <button
            className={`risk-btn ${riskPerTrade === 5 ? 'active' : ''}`}
            onClick={() => handleRiskButtonClick(5)}
            data-risk="5"
          >
            5%
          </button>
          <input
            type="number"
            id="riskPerTrade"
            value={riskPerTrade}
            onChange={(e) => setRiskPerTrade(e.target.value)}
            min="0"
            max="100"
            placeholder="e.g., 2"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="leverage">Leverage</label>
        <input
          type="number"
          id="leverage"
          value={leverage}
          onChange={(e) => setLeverage(e.target.value)}
          min="1"
          placeholder="e.g., 10"
        />
      </div>

      <div className="form-group">
        <label htmlFor="entryPrice">Entry Price (USD)</label>
        <input
          type="number"
          id="entryPrice"
          value={entryPrice}
          onChange={(e) => setEntryPrice(e.target.value)}
          min="0"
          placeholder="e.g., 50000"
        />
      </div>

      <div className="form-group">
        <label htmlFor="stopLossPrice">Stop-Loss Price (USD)</label>
        <input
          type="number"
          id="stopLossPrice"
          value={stopLossPrice}
          onChange={(e) => setStopLossPrice(e.target.value)}
          min="0"
          placeholder="e.g., 49000"
        />
      </div>

      <div className="form-group">
        <label htmlFor="takeProfitPrice"
          >Take-Profit Price (USD) <span className="optional">(Optional)</span></label
        >
        <input
          type="number"
          id="takeProfitPrice"
          value={takeProfitPrice}
          onChange={(e) => setTakeProfitPrice(e.target.value)}
          min="0"
          placeholder="e.g., 51000"
        />
      </div>

      <button id="calculateBtn" className="btn-calculate" onClick={onCalculateClick}>
        Calculate Position Size
      </button>
    </section>
  );
}

export default PositionCalculatorForm;