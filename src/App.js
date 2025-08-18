
import React, { useState, useRef } from "react";
import "./App.css";
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import Results from "./Model/Results";
import ElEscorial from "./Model/ElEscorial";
import AirlieHouse from "./Model/AirlieHouse";
import AwajiShima from "./Model/AwajiShima";
import GoldCoast from "./Model/GoldCoast";
import Panel from "./Components/Panel/Panel";
import DiagnosisResults from "./Components/DiagnosisResults/DiagnosisResults";
import Button from "@material-ui/core/Button";

function App() {
  const results = useRef(new Results());
  const elEDiag = useRef(null);
  const airlieDiag = useRef(null);
  const awajiDiag = useRef(null);
  const goldDiag = useRef(null);
  const mostRostralFinding = useRef("");

  const [regions, setRegions] = useState([
    { id: "Brainstem", umn: false, lmn: false, fibs: false, fasics: false, chronicDenerv: false },
    { id: "Cervical", umn: false, lmn: false, fibs: false, fasics: false, chronicDenerv: false },
    { id: "Thoracic", umn: false, lmn: false, fibs: false, fasics: false, chronicDenerv: false },
    { id: "Lumbosacral", umn: false, lmn: false, fibs: false, fasics: false, chronicDenerv: false }
  ]);

  const [excluded, setExcluded] = useState(true);
  const [gene, setGene] = useState(false);
  const [tilt, setTilt] = useState(false);
  const [progressive, setProgressive] = useState(true);
  const [isTiltNeeded, setIsTiltNeeded] = useState(null);
  const [revealResults, setRevealResults] = useState(true);

  const [yesColor, setYesColor] = useState("default");
  const [noColor, setNoColor] = useState("default");
  const [yesColorP, setYesColorP] = useState("primary");
  const [noColorP, setNoColorP] = useState("default");
  const [yesColorE, setYesColorE] = useState("primary");
  const [noColorE, setNoColorE] = useState("default");
  const [yesColorF, setYesColorF] = useState("default");
  const [noColorF, setNoColorF] = useState("primary");

  const changedHandler = (event, id, finding) => {
    const regionIndex = regions.findIndex(p => p.id === id);
    const region = { ...regions[regionIndex] };

    switch (finding) {
      case 0: region.umn = event.target.checked; break;
      case 1: region.lmn = event.target.checked; break;
      case 2: region.fibs = event.target.checked; break;
      case 3: region.fasics = event.target.checked; break;
      case 4: region.chronicDenerv = event.target.checked; break;
      default: break;
    }

    const updatedRegions = [...regions];
    updatedRegions[regionIndex] = region;
    setRegions(updatedRegions);
  };

  const resetButtonHandler = () => window.location.reload();
  const yesButtonHandler = () => {
    setTilt(true);
    setRevealResults(true);
    setYesColor("primary");
    setNoColor("default");
  };
  const noButtonHandler = () => {
    setTilt(false);
    setRevealResults(true);
    setYesColor("default");
    setNoColor("primary");
  };
  const yesButtonHandlerProg = () => {
    setProgressive(true);
    setRevealResults(true);
    setYesColorP("primary");
    setNoColorP("default");
  };
  const noButtonHandlerProg = () => {
    setProgressive(false);
    setRevealResults(true);
    setYesColorP("default");
    setNoColorP("primary");
  };
  const yesButtonHandlerEx = () => {
    setExcluded(true);
    setRevealResults(true);
    setYesColorE("primary");
    setNoColorE("default");
  };
  const noButtonHandlerEx = () => {
    setExcluded(false);
    setRevealResults(true);
    setYesColorE("default");
    setNoColorE("primary");
  };
  const yesButtonHandlerFam = () => {
    setGene(true);
    setRevealResults(true);
    setYesColorF("primary");
    setNoColorF("default");
  };
  const noButtonHandlerFam = () => {
    setGene(false);
    setRevealResults(true);
    setYesColorF("default");
    setNoColorF("primary");
  };

  const getmostRostralFinding = () => {
    if (isTiltNeeded) {
      return tilt ? (
        <p>The most rostral findings were chosen to be <strong>UMN</strong>.</p>
      ) : (
        <p>
          The most rostral findings were chosen to be <strong>LMN</strong>.<br />
          <strong>NB:</strong> A diagnosis of (Clinically) Probable ALS cannot be made when <strong>LMN</strong> findings are rostral to <strong>UMN</strong> findings.
        </p>
      );
    }

    if (mostRostralFinding.current === "UMN") {
      return (
        <>Based on the selected values, the program determined 
              that the most rostral findings were <strong>{mostRostralFinding.current}</strong>.</>
      );
    }

    return (
      <>
        Based on the selected values, the program determined that the most rostral findings were <strong>{mostRostralFinding.current}</strong>.
        <br />
        <strong>NB:</strong> A diagnosis of (Clinically) Probable ALS cannot be made when LMN findings are rostral to UMN findings.
      </>
    );
  };

  const showResults = () => {
    setYesColor("default");
    setNoColor("default");

    const airlie = new AirlieHouse({ regions, excluded, gene, tilt, progressive });
    results.current.setDiagnosisStrategy(airlie);
    mostRostralFinding.current = results.current.diagnosis.mostRostralFinding;

    const tiltNeeded = results.current.diagnosis.isTiltConfirmationNeeded();
    setIsTiltNeeded(tiltNeeded);
    setRevealResults(true);
  };

  const revealResultsFn = () => {
    const state = { regions, excluded, gene, tilt, progressive };
    const elE = new ElEscorial(state);
    const airlie = new AirlieHouse(state);
    const awaji = new AwajiShima(state);
    const gold = new GoldCoast(state);

    results.current.setDiagnosisStrategy(elE);
    elEDiag.current = results.current.result;

    results.current.setDiagnosisStrategy(airlie);
    airlieDiag.current = results.current.result;

    results.current.setDiagnosisStrategy(awaji);
    awajiDiag.current = results.current.result;

    results.current.setDiagnosisStrategy(gold);
    goldDiag.current = results.current.result;
  };

  const vhToPixels = (vh) => Math.round(window.innerHeight / (100 / vh));
  const htpx = (vhToPixels(100) - 120) + 'px';

  let findings = (
    <div className="physical" style={{ height: htpx }}>
      <div className="titles">
        <span className="region"><br />UMN</span>
        <span className="region">LMN</span>
      </div>
      <div className="selectors">
        {regions.map(region => (
          <div key={region.id}>
            <span className="regionName">{region.id}</span>
            <Toggle icons={false} className="toggle" name={region.id + "umn"} onChange={e => changedHandler(e, region.id, 0)} checked={region.umn} />
            <span className="toggle">
              <Toggle className="toggle" icons={false} name={region.id + "lmn"} onChange={e => changedHandler(e, region.id, 1)} checked={region.lmn} />
            </span>
            <hr />
          </div>
        ))}
      </div>
      <div className="reset">
        <Button className="resetButton" variant="outlined" onClick={resetButtonHandler}>Reset All</Button>
      </div>
    </div>
  );

  let findings1 = (
    <div className="physical" style={{ height: htpx }}>
      <div className="titles">
        <span className="region">Fibs/ PSW</span>
        <span className="region">Fascics</span>
        <span className="region">Chronic Denervation</span>
      </div>
      <div className="selectors">
        {regions.map(region => (
          <div key={region.id}>
            <span className="regionName">{region.id}</span>
            <Toggle className="toggle" icons={false} name={region.id + "fibs"} onChange={e => changedHandler(e, region.id, 2)} checked={region.fibs} />
            <span className="toggle">
              <Toggle className="toggle" icons={false} name={region.id + "fasics"} onChange={e => changedHandler(e, region.id, 3)} checked={region.fasics} />
            </span>
            <span className="toggle">
              <Toggle className="toggle" icons={false} name={region.id + "chronic"} onChange={e => changedHandler(e, region.id, 4)} checked={region.chronicDenerv} />
            </span>
            <hr />
          </div>
        ))}
      </div>
      <div className="reset">
        <Button className="resetButton" variant="outlined" onClick={resetButtonHandler}>Reset All</Button>
      </div>
    </div>
  );

  let diagnosisResult = null;
  if (revealResults) {
    revealResultsFn();
    diagnosisResult = (
      <div className="diagResults">
        <div className="rostralFinding"><p>{getmostRostralFinding()}</p></div><hr />
        <DiagnosisResults title="El Escorial (1994)" diagnosis={elEDiag.current.diagnosis} explanation={elEDiag.current.explanation} />
        <hr />
        <DiagnosisResults title="El Escorial Revised (Airlie House) (2000)" diagnosis={airlieDiag.current.diagnosis} explanation={airlieDiag.current.explanation} />
        <hr />
        <DiagnosisResults title="Awaji-Shima (2008)" diagnosis={awajiDiag.current.diagnosis} explanation={awajiDiag.current.explanation} additionalInfo="Lower motor neuron (LMN) findings can be any of the following: 1. LMN clinical findings, 2. (fibrillations/positive sharp waves AND chronic denervation), OR 3. (fasciculations AND chronic denervation)." />
        <hr />
        <DiagnosisResults title="Gold Coast (2020)" diagnosis={goldDiag.current.diagnosis} explanation={goldDiag.current.explanation} additionalInfo="Lower motor neuron (LMN) findings can be any of the following: 1. LMN clinical findings, 2. (fibrillations/positive sharp waves AND chronic denervation), OR 3. (fasciculations AND chronic denervation)." />
        <hr />
      </div>
    );
  }

  
  const makeQuestionBlock = (text, yesColor, noColor, yesHandler, noHandler) => (
    <div className="prog">
      {text}<br />
      <div className="progButtons">
        <Button variant="contained" color={yesColor} onClick={yesHandler}>Yes</Button>
        <Button variant="contained" color={noColor} onClick={noHandler}>No</Button>
      </div>
    </div>
  );

  const resultsBlock = (
  <div className="results" style={{ minHeight: 300}}>
  {/* <div className="results" style={{ minHeight: 300, backgroundColor: "#eee" }}> */}
    {isTiltNeeded && (
      <div className="tilt" style={{ marginBottom: 20 }}>
        On review, does the patient have any upper motor neuron findings rostral (i.e above) to lower motor neuron findings?
        <div className="tiltButtons" style={{ marginTop: 10 }}>
          <Button variant="contained" color={yesColor} onClick={yesButtonHandler}>Yes</Button>
          <Button variant="contained" color={noColor} onClick={noButtonHandler}>No</Button>
        </div>
      </div>
    )}
    {makeQuestionBlock("Has the patient experienced progressive motor impairment documented by history or repeated clinical assessment, preceded by normal motor function?", yesColorP, noColorP, yesButtonHandlerProg, noButtonHandlerProg)}
    {makeQuestionBlock("Other causes have been excluded with proper application of neuroimaging and clinical laboratory protocols:", yesColorE, noColorE, yesButtonHandlerEx, noButtonHandlerEx)}
    {makeQuestionBlock("A familial history of ALS is present, and a pathogenic gene mutation in the patient has been identified:", yesColorF, noColorF, yesButtonHandlerFam, noButtonHandlerFam)}
  </div>
);

  // const resultsBlock = (
  //   <div className="results">
  //     {isTiltNeeded && (
  //       <div className="tilt">
  //         On review, does the patient have any upper motor neuron findings rostral (i.e above) to lower motor neuron findings?
  //         <div className="tiltButtons">
  //           <Button variant="contained" color={yesColor} onClick={yesButtonHandler}>Yes</Button>
  //           <Button variant="contained" color={noColor} onClick={noButtonHandler}>No</Button>
  //         </div>
  //       </div>
  //     )}
  //     {makeQuestionBlock("Has the patient experienced progressive motor impairment documented by history or repeated clinical assessment, preceded by normal motor function?", yesColorP, noColorP, yesButtonHandlerProg, noButtonHandlerProg)}
  //     {makeQuestionBlock("Other causes have been excluded with proper application of neuroimaging and clinical laboratory protocols:", yesColorE, noColorE, yesButtonHandlerEx, noButtonHandlerEx)}
  //     {makeQuestionBlock("A familial history of ALS is present, and a pathogenic gene mutation in the patient has been identified:", yesColorF, noColorF, yesButtonHandlerFam, noButtonHandlerFam)}
  //   </div>
  // );


const exportRegionsToCSV = () => {
  // Instead of calling showResults() + revealResultsFn(),
  // we run their key logic here so the values are ready immediately.

  const airlie = new AirlieHouse({ regions, excluded, gene, tilt, progressive });
  results.current.setDiagnosisStrategy(airlie);
  mostRostralFinding.current = results.current.diagnosis.mostRostralFinding;

  const tiltNeeded = results.current.diagnosis.isTiltConfirmationNeeded();
  setIsTiltNeeded(tiltNeeded); // still updates state for UI

  const elE = new ElEscorial({ regions, excluded, gene, tilt, progressive });
  const awaji = new AwajiShima({ regions, excluded, gene, tilt, progressive });
  const gold = new GoldCoast({ regions, excluded, gene, tilt, progressive });

  results.current.setDiagnosisStrategy(elE);
  elEDiag.current = results.current.result;

  results.current.setDiagnosisStrategy(airlie);
  airlieDiag.current = results.current.result;

  results.current.setDiagnosisStrategy(awaji);
  awajiDiag.current = results.current.result;

  results.current.setDiagnosisStrategy(gold);
  goldDiag.current = results.current.result;

  // 1) Regions table
  const headers = Object.keys(regions[0]).join(",");
  const rows = regions.map(region =>
    Object.values(region)
      .map(val => (typeof val === "boolean" ? (val ? "Yes" : "No") : val))
      .join(",")
  );

  // 2) Most rostral finding (plain text)
  const rostralFindingText = mostRostralFinding.current || "";

  // 3) Helper to format diagnosis
  const getDiagText = (diagObj) => {
    if (!diagObj || !diagObj.current) return "";
    const { diagnosis, explanation } = diagObj.current;
    const diagText = typeof diagnosis === "string" ? diagnosis : JSON.stringify(diagnosis);
    const expText = typeof explanation === "string" ? explanation : JSON.stringify(explanation);
    return `${diagText} - ${expText}`;
  };

  // 4) Extra info
  const extraInfo = [
    "",
    "Additional Information",
    `Most Rostral Finding,${tilt}`,
    // `Most Rostral Finding,${rostralFindingText}`,
    `El Escorial,${getDiagText(elEDiag)}`,
    `Airlie House,${getDiagText(airlieDiag)}`,
    `Awaji-Shima,${getDiagText(awajiDiag)}`,
    `Gold Coast,${getDiagText(goldDiag)}`,
    `Gene Present,${gene ? "Yes" : "No"}`,
    `Progressive,${progressive ? "Yes" : "No"}`,
    `Other Conditions Excluded,${excluded ? "Yes" : "No"}`
  ];

  // 5) Create CSV content
  const csvContent = [headers, ...rows, ...extraInfo].join("\n");

  // 6) Download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `regions_${new Date().toISOString().slice(0,19).replace(/[:T]/g, "-")}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <div>
      <div className="title">
        <div className="App-header">
          <h1>ALS Calculator</h1>
        </div>
      </div>
      
      <Panel
  findings={findings}
  findings1={findings1}
  results={resultsBlock}
// 
final={
  <div className="final">
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        className="export-button"
        variant="contained"
        color="secondary"
        onClick={exportRegionsToCSV}
      >
        Export Data to CSV
      </Button>
    </div>
    {diagnosisResult}
    <div style={{ marginTop: 20 }}></div>
  </div>
}
  changed={showResults}
/>

      {/* <Panel findings={findings} findings1={findings1} results={resultsBlock} final={<div className="final">{diagnosisResult}</div>} changed={showResults} /> */}
    </div>
  );
}

export default App;
