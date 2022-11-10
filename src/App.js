import React, { Component } from "react";
import "./App.css";
import Toggle from 'react-toggle' //new react toggle
import "react-toggle/style.css"
import Results from "./Model/Results";
import ElEscorial from "./Model/ElEscorial";
import AirlieHouse from "./Model/AirlieHouse";
import AwajiShima from "./Model/AwajiShima";
import GoldCoast from "./Model/GoldCoast";
import Panel from "./Components/Panel/Panel";
import DiagnosisResults from "./Components/DiagnosisResults/DiagnosisResults";
import Button from "@material-ui/core/Button";
/* import { createMuiTheme } from "@material-ui/core/styles";

import lightBlue from "@material-ui/core/colors/lightBlue";
import pink from "@material-ui/core/colors/pink";
 */
// const muiTheme = createMuiTheme({ palette: { primary: lightBlue, secondary: pink } });

class App extends Component {
  constructor(props) {
    // Super means will get props from Component (from the parent class). JavaScript enforces that if you want to use this in a constructor, you have to call super first
    super(props);
    this.results = new Results();
    this.elEDiag = null;
    this.airlieDiag = null;
    this.awajiDiag = null;
    this.goldCoastDiag = null;
    this.mostRostralFinding = "";

    // The third approach. Binds this makes sure functions have access to component attributes
    this.showResults = this.showResults.bind(this);
    this.yesButtonHandler = this.yesButtonHandler.bind(this);
    this.noButtonHandler = this.noButtonHandler.bind(this);
    this.yesButtonHandlerProg = this.yesButtonHandlerProg.bind(this);
    this.noButtonHandlerProg = this.noButtonHandlerProg.bind(this);
    this.yesButtonHandlerEx = this.yesButtonHandlerEx.bind(this);
    this.noButtonHandlerEx = this.noButtonHandlerEx.bind(this);
    this.yesButtonHandlerFam = this.yesButtonHandlerFam.bind(this);
    this.noButtonHandlerFam = this.noButtonHandlerFam.bind(this);

  }

  state = {
    regions: [
      { id: "Brainstem", umn: false, lmn: false, fibs: false, fasics: false, chronicDenerv: false },
      { id: "Cervical", umn: false, lmn: false, fibs: false, fasics: false, chronicDenerv: false },
      { id: "Thoracic", umn: false, lmn: false, fibs: false, fasics: false, chronicDenerv: false },
      { id: "Lumbosacral", umn: false, lmn: false, fibs: false, fasics: false, chronicDenerv: false }
    ],

    excluded: true,
    gene: false,
    tilt: false,
    progressive: true,

    isTiltNeeded: null,
    revealResults: true,

    yesColor: "default",
    noColor: "default",
    yesColorP: "primary",
    noColorP: "default",
    yesColorE: "primary",
    noColorE: "default",
    yesColorF: "default",
    noColorF: "primary"

  };

  // For toggle button change and assigning new state. an arrow function to create the method will ensure the function has the proper this context when running the update.
  changedHandler = (event, id, finding) => {
    const regionIndex = this.state.regions.findIndex(p => {
      return p.id === id;
    });

    const region = {
      ...this.state.regions[regionIndex]
    };

    // The switch/case statement is a conditional operator that’s commonly used as an alternative to if...else statement. if-else statements don't work inside JSX. This is because JSX is just syntactic sugar for function calls and object construction.

    switch (finding) {
      case 0:
        region.umn = event.target.checked;
        break;
      case 1:
        region.lmn = event.target.checked;
        break;
      case 2:
        region.fibs = event.target.checked;
        break;
      case 3:
        region.fasics = event.target.checked;
        break;
      case 4:
        region.chronicDenerv = event.target.checked;
        break;
      default:
        break;
    }

    const regions = [...this.state.regions];

// region refers to all values in that region eg brainstem
    regions[regionIndex] = region;

    // state changes at this point
    this.setState({ regions: regions });

  };

  excludedButtonHandler = event => {
    this.setState({ excluded: event.target.checked });
  };

  geneButtonHandler = event => {
    this.setState({ gene: event.target.checked });
  };

  tiltButtonHandler = event => {
    this.setState({ tilt: event.target.checked });
  };

  yesButtonHandler = () => {
    this.setState({ tilt: true, revealResults: true, yesColor: "primary", noColor: "default" });
    // this.setState({ revealResults: true })
  };

  noButtonHandler = () => {
    this.setState({ tilt: false, revealResults: true, yesColor: "default", noColor: "primary" });
  };

  resetButtonHandler = () => {
    window.location.reload();
  };

  yesButtonHandlerProg = () => {
    this.setState({ progressive: true, revealResults: true, yesColorP: "primary", noColorP: "default" });
    // this.setState({ revealResults: true })
  };

  noButtonHandlerProg = () => {
    this.setState({ progressive: false, revealResults: true, yesColorP: "default", noColorP: "primary" });
  };

  yesButtonHandlerEx = () => {
    this.setState({ excluded: true, revealResults: true, yesColorE: "primary", noColorE: "default" });
    // this.setState({ revealResults: true })
  };

  noButtonHandlerEx = () => {
    this.setState({ excluded: false, revealResults: true, yesColorE: "default", noColorE: "primary" });
  };

  yesButtonHandlerFam = () => {
    this.setState({ gene: true, revealResults: true, yesColorF: "primary", noColorF: "default" });
    // this.setState({ revealResults: true })
  };

  noButtonHandlerFam = () => {
    this.setState({ gene: false, revealResults: true, yesColorF: "default", noColorF: "primary" });
  };

  getmostRostralFinding = () => {
    if (this.state.isTiltNeeded) {
      switch (this.state.tilt) {
        case true:
          return `The most rostral findings were chosen to be UMN.`;
        case false:
          return `The most rostral findings were chosen to be LMN. 
          NB: A diagnosis of (Clinically) Probable ALS cannot be made when LMN findings are rostral to UMN findings.`;
        default:
          return null;
      }
    }
if (this.mostRostralFinding === "UMN") {
  return (
    `Based on the selected values, the program determined 
          that the most rostral findings were ` +
    this.mostRostralFinding +
    ".");

  }

    return (
      `Based on the selected values, the program determined 
            that the most rostral findings were ` +
      this.mostRostralFinding +
      ". NB: A diagnosis of (Clinically) Probable ALS cannot be made when LMN findings are rostral to UMN findings."
    );
  };

  showResults() {
    this.setState({ yesColor: "default", noColor: "default" });

    const airlie = new AirlieHouse(this.state);

    this.results.setDiagnosisStrategy(airlie);

    this.mostRostralFinding = this.results.diagnosis.mostRostralFinding;

    this.setState({ isTiltNeeded: this.results.diagnosis.isTiltConfirmationNeeded() });

    if (this.results.diagnosis.isTiltConfirmationNeeded()) {
      this.setState({ revealResults: true });
    } else {
      this.setState({ revealResults: true });
    }
  }

  // For the last page
  revealResults() {
    const elE = new ElEscorial(this.state);
    const airlie = new AirlieHouse(this.state);
    const awaji = new AwajiShima(this.state);
    const gold = new GoldCoast(this.state);

    this.results.setDiagnosisStrategy(elE);

    this.elEDiag = this.results.result;

    this.results.setDiagnosisStrategy(airlie);

    this.airlieDiag = this.results.result;

    this.results.setDiagnosisStrategy(awaji);

    this.awajiDiag = this.results.result;

    this.results.setDiagnosisStrategy(gold);

    this.goldDiag = this.results.result;
  }

  render() {
    let awajiInfo = `Lower motor neuron (LMN) findings can be any of the following: 1. LMN clinical findings, 2. 
                    (fibrillations/positive sharp waves AND chronic denervation), OR
                    3. (fasciculations AND chronic denervation).`;

    let geneMessage = `A familial history of ALS is present, and a pathogenic 
      gene mutation in the patient has been identified:`;

    let excludedMessage = `Other causes have been excluded with proper application of neuroimaging and clinical laboratory protocols:`;

    // find and determine height of physical
    function vhToPixels (vh) {
      return Math.round(window.innerHeight / (100 / vh));
    }  
    let ht100 = vhToPixels(100)
    let ht = ht100 - 120
    let htpx = ht + 'px';
    let findings = (
      <div className="physical" style={{"height" : htpx}} >
        <div className="titles">
          {/* Puts title across the top of the table */}
          <span className="region"><br />UMN</span>
          <span className="region">LMN</span>
          {/* <span className="region">Fibs/ PSW</span>
          <span className="region">Fasciculations</span>
          <span className="region">Neurogenic Potentials/Chronic Denervation</span> */}
        </div>

        <div className="selectors">
          {this.state.regions.map(region => {
            return (
              <div key={region.id}>
                {/* Region.id e.g. cervical */}
                <span className="regionName">{region.id}</span>

                {/* <span className="toggle"> */}
                  <Toggle
                   icons={false}
                   className="toggle"
                   name={region.id + "umn"}
                    onChange={event => this.changedHandler(event, region.id, 0)}
                    // umn defined in class regions at the beginning
                    checked={region.umn}
                  />
                {/* </span> */}

                {/* <Toggle
    defaultChecked={this.state.tofuIsReady}
    icons={false}
    onChange={this.handleTofuChange} /> */}

                <span className="toggle">
                  <Toggle
                    className="toggle"
                    icons={false}

                    name={region.id + "lmn"}
                    onChange={event => this.changedHandler(event, region.id, 1)}
                    checked={region.lmn}
                  />
                </span>
                <hr />
              </div>
            );
          })}
        </div>

        {/* <div className="excluded">               
          <span>
            {excludedMessage}
            <Toggle
              className="excludedToggle"
              name="excluded"
              onChange={event => this.excludedButtonHandler(event)}
              checked={this.state.excluded}
            />
          </span>
        </div> */}

        <div className="reset">
          <Button className="resetButton" variant="outlined" onClick={() => this.resetButtonHandler()}>
            Reset All
          </Button>
        </div>
      </div>
    );

    let findings1 = (
      <div className="physical" style={{"height" : htpx}}>
        <div className="titles">
          {/* Puts title across the top of the table */}
          {/* <span className="region">UMN</span>
          <span className="region">LMN</span> */}
          <span className="region">Fibs/ PSW</span>
          <span className="region">Fascics</span>
          <span className="region">Chronic Denervation</span>
        </div>

        <div className="selectors">
          {this.state.regions.map(region => {
            return (
              <div key={region.id}>
                <span className="regionName">{region.id}</span>

                <span>
                  <Toggle
                    className="toggle"
                    icons={false}

                    name={region.id + "fibs"}
                    onChange={event => this.changedHandler(event, region.id, 2)}
                    checked={region.fibs}
                  />
                </span>

                <span className="toggle">
                  <Toggle
                    className="toggle"
                    icons={false}

                    name={region.id + "fasics"}
                    onChange={event => this.changedHandler(event, region.id, 3)}
                    checked={region.fasics}
                  />
                </span>

                <span className="toggle">
                  <Toggle
                    className="toggle"
                    icons={false}

                    name={region.id + "chronic"}
                    onChange={event => this.changedHandler(event, region.id, 4)}
                    checked={region.chronicDenerv}
                  />
                </span>

                <hr />
              </div>
            );
          })}
        </div>

        {/* <div className="gene">
          <span>
            {geneMessage}
            <Toggle
              className="geneToggle"
              name="gene"
              onChange={event => this.geneButtonHandler(event)}
              checked={this.state.gene}
            />
          </span>
        </div> */}

        <div className="reset">
          <Button className="resetButton" variant="outlined" onClick={() => this.resetButtonHandler()}>
            Reset All
          </Button>
        </div>
      </div>
    );

    let diagnosisResult = null;

    if (this.state.revealResults) {
      this.revealResults();

      diagnosisResult = (
        <div className="diagResults">
          <div className="rostralFinding">  {/* This div class name is not found ? not used */}
            {/* Statement on whether or UMN or LMN or null */}
            <p>{this.getmostRostralFinding()}</p>
          </div>

          <hr />

{/* From that component */}
          <DiagnosisResults
            title="El Escorial (1994)"
            diagnosis={this.elEDiag.diagnosis}
            explanation={this.elEDiag.explanation}
          />

          <hr />

          <DiagnosisResults
            title="El Escorial Revised (Airlie House) (2000)"
            diagnosis={this.airlieDiag.diagnosis}
            explanation={this.airlieDiag.explanation}
          />

          <hr />

          <DiagnosisResults
            title="Awaji-Shima (2008)"
            diagnosis={this.awajiDiag.diagnosis}
            explanation={this.awajiDiag.explanation}
            additionalInfo={awajiInfo}
          />

<hr />

          <DiagnosisResults
            title="Gold Coast (2020)"
            diagnosis={this.goldDiag.diagnosis}
            explanation={this.goldDiag.explanation}
            additionalInfo={awajiInfo}
          />
          <hr />
        </div>
      );
    }

    let results = null;

    let progdiv = (
      <div className="prog">
      Has the patient experienced progressive motor impairment documented by history or repeated clinical assessment, 
      preceded by normal motor function?
      <br />
        <div className="progButtons">
          <Button variant="contained" color={this.state.yesColorP} onClick={() => this.yesButtonHandlerProg()}>
            Yes
          </Button>

          <Button variant="contained" color={this.state.noColorP} onClick={() => this.noButtonHandlerProg()}>
            No
          </Button>
        </div>
      </div>
    )

    let exdiv = (
      <div className="prog">
     {excludedMessage}
      <br />

        <div className="progButtons">
          <Button variant="contained" color={this.state.yesColorE} onClick={() => this.yesButtonHandlerEx()}>
            Yes
          </Button>

          <Button variant="contained" color={this.state.noColorE} onClick={() => this.noButtonHandlerEx()}>
            No
          </Button>
        </div>
      </div>
    )

    let famdiv = (
      <div className="prog">
     {geneMessage}
      <br />

        <div className="progButtons">
          <Button variant="contained" color={this.state.yesColorF} onClick={() => this.yesButtonHandlerFam()}>
            Yes
          </Button>

          <Button variant="contained" color={this.state.noColorF} onClick={() => this.noButtonHandlerFam()}>
            No
          </Button>
        </div>
      </div>
    )

    if (this.state.isTiltNeeded) {
      results = (
 <div className="results">
          <div className="tilt">
            On review, does the patient have any upper motor neuron findings rostral (i.e above) to lower motor neuron
            findings?
            {/* <br /> */}

            <div className="tiltButtons">
              <Button variant="contained" color={this.state.yesColor} onClick={() => this.yesButtonHandler()}>
                Yes
              </Button>

              <Button variant="contained" color={this.state.noColor} onClick={() => this.noButtonHandler()}>
                No
              </Button>
            </div>
            </div>

{progdiv}
{exdiv}
{famdiv}

<div class="arrow animated bounce"></div>
        </div>
      );
    } else {
      results = <div className="results">

{progdiv}
{exdiv}
{famdiv}

        </div>;
    }

    let final = (
      <div className="final">
        {diagnosisResult}

      </div>
         
        );
console.log("RevealResults: " + this.state.revealResults);



    return (
      <div>
        <div className="title">
        <div className="App-header">

          {/* Title at the top of the page */}
          <h1>ALS Calculator</h1>
        </div>
        </div>

        <Panel findings={findings} findings1={findings1} results={results} final={final} changed={this.showResults} />
      </div>
    );
  }
}

// Exports this as a component
export default App;
