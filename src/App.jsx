import React, { useState, useEffect } from 'react';
import './App.css'; // Mengimpor CSS spesifik untuk komponen App

// Impor komponen-komponen baru
import TradingAssistantInfo from './components/TradingAssistantInfo';
import PositionCalculatorForm from './components/PositionCalculatorForm';
import CalculationResultsDisplay from './components/CalculationResultsDisplay';

function App() {
  // === State untuk Input ===
  const [portfolioSize, setPortfolioSize] = useState('');
  const [riskPerTrade, setRiskPerTrade] = useState('');
  const [leverage, setLeverage] = useState('');
  const [entryPrice, setEntryPrice] = useState('');
  const [stopLossPrice, setStopLossPrice] = useState('');
  const [takeProfitPrice, setTakeProfitPrice] = useState('');

  // === State untuk Hasil Perhitungan ===
  const [recommendedPositionSize, setRecommendedPositionSize] = useState(0);
  const [contractsInfo, setContractsInfo] = useState('0.0000 contracts');
  const [riskAmount, setRiskAmount] = useState(0);
  const [leveragedAmount, setLeveragedAmount] = useState(0);
  const [riskToRewardRatio, setRiskToRewardRatio] = useState('0:0');

  // Fungsi pembantu untuk mereset hasil perhitungan ke nilai default
  const resetCalculationResults = () => {
    setRecommendedPositionSize(0);
    setContractsInfo('0.0000 contracts');
    setRiskAmount(0);
    setLeveragedAmount(0);
    setRiskToRewardRatio('0:0');
  };

  // Fungsi utama untuk menghitung ukuran posisi
  const calculatePosition = () => {
    // Mendapatkan nilai dari input dan mengonversinya ke angka
    const pSize = parseFloat(portfolioSize) || 0;
    const rPerTrade = (parseFloat(riskPerTrade) || 0) / 100;
    const lev = parseFloat(leverage) || 0;
    const ePrice = parseFloat(entryPrice) || 0;
    const slPrice = parseFloat(stopLossPrice) || 0;
    const tpPrice = parseFloat(takeProfitPrice) || 0;

    // --- Validasi Input ---
    if (pSize <= 0 || rPerTrade <= 0 || rPerTrade > 1 || lev < 1 || ePrice <= 0 || slPrice <= 0 || ePrice === slPrice) {
      resetCalculationResults();
      // Anda bisa menambahkan logika untuk menampilkan pesan error di UI di sini
      return;
    }

    // --- Logika Perhitungan ---
    const maxRiskAmount = pSize * rPerTrade;
    setRiskAmount(maxRiskAmount);

    let percentageLoss;
    if (ePrice > slPrice) {
      percentageLoss = (ePrice - slPrice) / ePrice;
    } else {
      percentageLoss = (slPrice - ePrice) / ePrice;
    }
    
    const recPositionSize = maxRiskAmount / percentageLoss;
    setRecommendedPositionSize(recPositionSize);

    const actualLeveragedAmount = recPositionSize / lev;
    setLeveragedAmount(actualLeveragedAmount);

    const numContracts = recPositionSize / ePrice;
    setContractsInfo(`${numContracts.toFixed(4)} contracts`); // Menggunakan toFixed sementara, formatContracts ada di child

    let potentialProfit = 0;
    if (!isNaN(tpPrice) && tpPrice > 0) {
      if (ePrice > slPrice) {
        potentialProfit = tpPrice - ePrice;
      } else {
        potentialProfit = ePrice - tpPrice;
      }
    }

    const riskPerUnit = Math.abs(ePrice - slPrice);
    const rewardPerUnit = potentialProfit > 0 ? potentialProfit : 0;

    let rrRatio = "N/A";
    if (riskPerUnit > 0 && rewardPerUnit > 0) {
      rrRatio = `1:${(rewardPerUnit / riskPerUnit).toFixed(2)}`;
    } else if (riskPerUnit > 0 && rewardPerUnit === 0) {
      rrRatio = "1:0 (No TP)";
    }
    setRiskToRewardRatio(rrRatio);
  };

  // useEffect hook: menjalankan calculatePosition setiap kali ada perubahan pada state input
  useEffect(() => {
    calculatePosition();
  }, [portfolioSize, riskPerTrade, leverage, entryPrice, stopLossPrice, takeProfitPrice]);

  // Handler untuk tombol risiko (1%, 2%, 5%)
  const handleRiskButtonClick = (riskValue) => {
    setRiskPerTrade(riskValue);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>4smepple Calculator  🦁</h1>
        <p>hi fellas, ini calculator trading yang sesuai dengan logika trade yang biasa gw pake. Semoga bermanfaat ^_^</p>
        <p className="tagline"> fortune favors the bold  |  "last dream" </p>
      </header>

      <main className="main-content">
        <div className="left-panel">
          {/* Memanggil komponen TradingAssistantInfo */}
          <TradingAssistantInfo />
        </div>

        <div className="right-panel">
          {/* Memanggil komponen PositionCalculatorForm dan meneruskan props */}
          <PositionCalculatorForm
            portfolioSize={portfolioSize}
            setPortfolioSize={setPortfolioSize}
            riskPerTrade={riskPerTrade}
            setRiskPerTrade={setRiskPerTrade}
            handleRiskButtonClick={handleRiskButtonClick}
            leverage={leverage}
            setLeverage={setLeverage}
            entryPrice={entryPrice}
            setEntryPrice={setEntryPrice}
            stopLossPrice={stopLossPrice}
            setStopLossPrice={setStopLossPrice}
            takeProfitPrice={takeProfitPrice}
            setTakeProfitPrice={setTakeProfitPrice}
            onCalculateClick={calculatePosition} // Pass the calculate function
          />

          {/* Memanggil komponen CalculationResultsDisplay dan meneruskan props */}
          <CalculationResultsDisplay
            recommendedPositionSize={recommendedPositionSize}
            contractsInfo={contractsInfo}
            riskAmount={riskAmount}
            leveragedAmount={leveragedAmount}
            riskToRewardRatio={riskToRewardRatio}
          />
        </div>
      </main>
    </div>
  );
}

export default App;