import React from 'react';

function CalculationResultsDisplay({
  recommendedPositionSize, contractsInfo,
  riskAmount, leveragedAmount, riskToRewardRatio
}) {

  // Fungsi pembantu untuk memformat angka menjadi mata uang USD
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  // Fungsi pembantu untuk memformat angka menjadi kontrak dengan desimal tinggi
  const formatContracts = (value) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 8
    }).format(value);
  };

  return (
    <section className="card calculation-results">
      <h2>Calculation Results</h2>
      <div className="results-grid">
        <div className="result-item">
          <h3>Recommended Position Size</h3>
          <p id="recommendedPositionSize">{formatCurrency(recommendedPositionSize)}</p>
          <small id="contractsInfo">{contractsInfo}</small>
        </div>
        <div className="result-item">
          <h3>Risk Amount</h3>
          <p id="riskAmount">{formatCurrency(riskAmount)}</p>
          <small>Maximum potential loss</small>
        </div>
        <div className="result-item">
          <h3>Leveraged Amount</h3>
          <p id="leveragedAmount">{formatCurrency(leveragedAmount)}</p>
          <small>Actual capital used</small>
        </div>
        <div className="result-item">
          <h3>Risk-to-Reward Ratio</h3>
          <p id="riskToRewardRatio">{riskToRewardRatio}</p>
          <small>Consider better ratio</small>
        </div>
      </div>

      <div className="quick-tips">
        <h3>Quick Tips:</h3>
        <ul>
          <li>Risk-to-reward ratio of 1:2 or better is generally recommended</li>
          <li>Never risk more than you can afford to lose</li>
          <li>Diversify into low correlation assets</li>
          <li>Always use proper risk management techniques</li>
        </ul>
      </div>
    </section>
  );
}

export default CalculationResultsDisplay;