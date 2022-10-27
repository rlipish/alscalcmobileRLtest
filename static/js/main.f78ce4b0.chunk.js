(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(e,n,i){},206:function(e,n,i){"use strict";i.r(n);var t=i(0),s=i.n(t),a=i(27),o=i.n(a),r=(i(84),i(75)),l=i(76),c=i(6),h=i(7),u=i(12),d=i(11),g=i(8),m=i(13),f=(i(85),i(24)),p=function(){function e(){Object(c.a)(this,e),this.diagnosis=null,this.result=null}return Object(h.a)(e,[{key:"setDiagnosisStrategy",value:function(e){this.diagnosis=e,this.result=this.diagnosis.calculateDiagnosis()}}]),e}(),y=function(){function e(n){Object(c.a)(this,e),this.selections=n,this.UMNLevel=this.calcHighestLevel("umn"),this.LMNLevel=this.calcHighestLevel("lmn"),this.regionsWithUMN=this.countRegions("umn"),this.regionsWithLMN=this.countRegions("lmn"),this.spinalRegionsWithUMN=this.countSpinalRegions("umn"),this.spinalRegionsWithLMN=this.countSpinalRegions("lmn"),this.UMNAndLMNInBrainstem=this.containsTwoFindingsInOneRegion("umn","lmn","Brainstem")}return Object(h.a)(e,[{key:"calculateDiagnosis",value:function(){return this.UMNAndLMNInBrainstem&&this.spinalRegionsWithUMN>=2&&this.spinalRegionsWithLMN>=2?{diagnosis:"Definite ALS",explanation:"This scenario is classified as definite ALS as there are upper motor \n                    neuron and lower motor neuron findings in the brainstem in addition to upper motor \n                    neuron and lower motor neuron signs in two or more spinal regions."}:3===this.spinalRegionsWithUMN&&3===this.spinalRegionsWithLMN?{diagnosis:"Definite ALS",explanation:"This scenario is classified as Definite ALS as there are upper motor \n                    neuron and lower motor neuron findings in all three spinal regions."}:this.regionsWithUMN>=2&&this.regionsWithLMN>=2&&this.UMNLevel<this.LMNLevel?{diagnosis:"Probable ALS",explanation:"This scenario is classified as Probable ALS as there are upper motor \n                    neuron and lower motor neuron findings in two or more regions and some upper motor \n                    neuron signs are rostral to lower motor neuron signs."}:this.regionsWithUMN>=2&&this.regionsWithLMN>=2&&(this.UMNLevel<this.LMNLevel||this.selections.tilt)?{diagnosis:"Probable ALS",explanation:"This scenario is classified as Probable ALS as there are upper motor \n                    neuron and lower motor neuron findings in two or more regions and some upper motor \n                    neuron signs are rostral to lower motor neuron signs."}:this.areBothFindingsPresentInOneRegion()?{diagnosis:"Possible ALS",explanation:"This scenario is classified as Possible ALS as there are upper motor \n                    neuron and lower motor neuron signs \u201ctogether\u201d in one region."}:this.regionsWithUMN>=2&&0===this.regionsWithLMN?{diagnosis:"Possible ALS",explanation:"This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions."}:this.regionsWithUMN>=2&&this.regionsWithLMN>0?{diagnosis:"Possible ALS or NIL - Please see explanation below",explanation:'This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions. We interpret \u201calone\u201d as meaning that\n                     these findings \u201con their own\u201d would satisfy the criteria for possible ALS. If we interpret \n                     "alone" to mean absolutely NO lower motor neuron signs are present, the pattern would not fit within the El \n                     Escorial criteria classification scheme.'}:this.UMNLevel>this.LMNLevel&&this.regionsWithUMN>1&&this.regionsWithLMN>1?{diagnosis:"Possible ALS",explanation:"This scenario is classified as Possible ALS as lower motor neuron \n                    signs are rostral to upper motor neuron signs."}:this.regionsWithLMN>=2?{diagnosis:"Suspected ALS",explanation:"This scenario is classified as Suspected ALS as there are lower \n                    motor neuron signs in two or more regions."}:{diagnosis:"--",explanation:"A valid diagnosis is not available for the selected findings based\n                    on the El Escorial criteria."}}},{key:"calcHighestLevel",value:function(e){for(var n=0;n<this.selections.regions.length;n++)if(this.isFindingPresent(e,this.selections.regions[n].id))return n;return 5}},{key:"countRegions",value:function(e){for(var n=0,i=0;i<this.selections.regions.length;i++)n+=this.isFindingPresent(e,this.selections.regions[i].id);return n}},{key:"countSpinalRegions",value:function(e){return this.countRegions(e)-this.selections.regions[0][e]}},{key:"containsTwoFindingsInOneRegion",value:function(e,n,i){return this.isFindingPresent(e,i)&&this.isFindingPresent(n,i)}},{key:"areBothFindingsPresentInOneRegion",value:function(){for(var e=0;e<this.selections.regions.length;e++)if(this.containsTwoFindingsInOneRegion("umn","lmn",this.selections.regions[e].id))return!0;return!1}},{key:"isFindingPresent",value:function(e,n){return this.isPhysicalFindingPresent(e,n)}},{key:"isPhysicalFindingPresent",value:function(e,n){var i=this.selections.regions.findIndex(function(e){return e.id===n});return this.selections.regions[i][e]}}]),e}(),v=function(e){function n(e){var i;return Object(c.a)(this,n),(i=Object(u.a)(this,Object(d.a)(n).call(this,e))).regionsWithLMNByPhysicalOnly=i.countPhysicalRegions("lmn"),i.regionsWithLMNByEMGOnly=i.countLMNRegionsByEMG(),i.spinalRegionsWithLMNByPhysicalOnly=i.countPhysicalSpinalRegions("lmn"),i.UMNAndLMNInBrainstemByPhysicalOnly=i.containsTwoPhysicalFindingsInOneRegion("umn","lmn","Brainstem"),i.mostRostralFinding=i.findMostRostralFinding(),i}return Object(m.a)(n,e),Object(h.a)(n,[{key:"calculateDiagnosis",value:function(){return console.log("UMN regions: "+this.regionsWithUMN),console.log("LMN regions: "+this.regionsWithLMN),console.log("EMG LMN regions: "+this.regionsWithLMNByEMGOnly),console.log("Most rostral: "+this.mostRostralFinding),console.log("Tilt: "+this.selections.tilt),this.regionsWithUMN>=1&&this.regionsWithLMN>=1&&this.selections.gene?{diagnosis:"Clinically Definite Familial ALS - Laboratory Supported",explanation:"This scenario is classified as Clinically Definite Familial\n                    ALS - Laboratory Supported as there are upper and lower motor neuron signs\n                    in at least a single region as well as a family history of a defined \n                    pathogenic mutation."}:this.UMNAndLMNInBrainstemByPhysicalOnly&&this.spinalRegionsWithUMN>=2&&this.spinalRegionsWithLMNByPhysicalOnly>=2?{diagnosis:"Clinically Definite ALS",explanation:"This scenario is classified as Clinically Definite ALS as \n                    there are upper motor neuron and lower motor neuron findings in the\n                    brainstem as well as upper motor neuron and lower motor neuron findings\n                    in two or more spinal regions."}:3===this.spinalRegionsWithUMN&&3===this.spinalRegionsWithLMNByPhysicalOnly?{diagnosis:"Clinically Definite ALS",explanation:"This scenario is classified as Clinically Definite ALS as\n                    there are upper motor neuron and lower motor neuron findings in all \n                    three spinal regions."}:this.regionsWithUMN>=2&&this.regionsWithLMNByPhysicalOnly>=2&&("UMN"===this.mostRostralFinding||"uncertain"===this.mostRostralFinding&&this.selections.tilt)?{diagnosis:"Clinically Probable ALS",explanation:"This scenario is classified as Clinically Probable ALS as\n                        there are upper motor neuron and lower motor neuron findings in two or \n                        more regions and some upper motor neuron signs are rostral to lower \n                        motor neuron signs."}:1===this.regionsWithUMN&&1===this.regionsWithLMNByPhysicalOnly&&this.UMNLevel===this.LMNLevel&&this.selections.excluded||this.regionsWithUMN>=1&&this.regionsWithLMNByEMGOnly>=2&&this.selections.excluded?{diagnosis:"Clinically Probable ALS - Laboratory Supported",explanation:"This scenario is classified as Clinically Probable \n                        ALS - Laboratory Supported as there are clinical signs of:\n                        1. UMN and LMN dysfunction are in only one region, OR \n                        2. When UMN signs alone are present in one region, AND LMN signs defined by EMG criteria\n                        are present in at least two regions, \n                        3. With proper application of neuroimaging and clinical laboratory protocols to exclude other causes."}:this.areBothFindingsPresentInOnePhysicalRegion()?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Clinically Possible \n                    ALS as there are upper motor neuron and lower motor neuron signs \n                    in one region."}:this.regionsWithUMN>=2&&0===this.regionsWithLMN?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions."}:this.regionsWithUMN>=2&&this.regionsWithLMN>0?{diagnosis:"Clinically Possible ALS or NIL - Please see explanation below",explanation:'This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions. We interpret \u201calone\u201d as meaning that\n                     these findings \u201con their own\u201d would satisfy the criteria for possible ALS. If we interpret \n                     "alone" to mean absolutely NO lower motor neuron signs are present, the pattern would not fit within the El Escorial Revised (Airlie House)\n                     criteria classification scheme.'}:this.UMNLevel>this.LMNLevel&&this.regionsWithUMN>1&&this.regionsWithLMN>1?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Clinically Possible \n                    ALS as lower motor neuron signs are rostral to upper motor \n                    neuron signs."}:{diagnosis:"--",explanation:"A valid diagnosis is not available for the selected findings based\n                on the El Escorial revised (Airlie House) criteria."}}},{key:"findMostRostralFinding",value:function(){var e=this.calculateHighestPhysicalLevel("umn"),n=this.calculateHighestPhysicalLevel("lmn"),i=this.calculateHighestPhysicalLevel("fasics"),t=this.calculateHighestPhysicalLevel("fibs"),s=this.calculateHighestPhysicalLevel("chronicDenerv"),a=Math.min.apply(Math,[i,t,s]);return n<e?"LMN":e<Math.min.apply(Math,[n,a])?"UMN":5===e?"not selected":"uncertain"}},{key:"isTiltConfirmationNeeded",value:function(){return"uncertain"===this.mostRostralFinding}},{key:"calculateHighestPhysicalLevel",value:function(e){for(var n=0;n<this.selections.regions.length;n++)if(this.isPhysicalFindingPresent(e,this.selections.regions[n].id))return n;return 5}},{key:"countPhysicalRegions",value:function(e){for(var n=0,i=0;i<this.selections.regions.length;i++)n+=this.isPhysicalFindingPresent(e,this.selections.regions[i].id);return n}},{key:"countPhysicalSpinalRegions",value:function(e){return this.countPhysicalRegions(e)-this.selections.regions[0][e]}},{key:"isFindingPresent",value:function(e,n){return"lmn"===e?this.isLMNFindingPresent(n):this.isPhysicalFindingPresent(e,n)}},{key:"isLMNFindingPresent",value:function(e){var n=this.selections.regions.findIndex(function(n){return n.id===e});return this.selections.regions[n].lmn||this.selections.regions[n].fibs&&this.selections.regions[n].chronicDenerv}},{key:"countLMNRegionsByEMG",value:function(){for(var e=0,n=0;n<this.selections.regions.length;n++)e+=this.isFindingPresent("fibs",this.selections.regions[n].id)&&this.isFindingPresent("chronicDenerv",this.selections.regions[n].id);return e}},{key:"containsTwoPhysicalFindingsInOneRegion",value:function(e,n,i){return this.isPhysicalFindingPresent(e,i)&&this.isPhysicalFindingPresent(n,i)}},{key:"areBothFindingsPresentInOnePhysicalRegion",value:function(){for(var e=0;e<this.selections.regions.length;e++)if(this.containsTwoPhysicalFindingsInOneRegion("umn","lmn",this.selections.regions[e].id))return!0;return!1}}]),n}(y),b=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(h.a)(n,[{key:"calculateDiagnosis",value:function(){return this.regionsWithUMN>=1&&this.regionsWithLMN>=1&&this.selections.gene?{diagnosis:"Clinically Definite Familial ALS - Laboratory Supported",explanation:'This scenario is classified as Clinically Definite Familial \n                    ALS - Laboratory Supported as there are upper and lower motor neuron signs \n                    in at least a single region as well as a family history of a defined \n                    pathogenic mutation. This scenario is not specifically mentioned in the article \n                    but might be presumed to be obeying the "Principles (from the Airlie House criteria)"'}:this.UMNAndLMNInBrainstem&&this.spinalRegionsWithUMN>=2&&this.spinalRegionsWithLMN>=2?{diagnosis:"Clinically Definite ALS",explanation:"This scenario is classified as Clinically Definite ALS \n                    as there are upper motor neuron and lower motor neuron findings in \n                    the brainstem as well as upper motor neuron and lower motor neuron \n                    findings in two or more spinal regions."}:3===this.spinalRegionsWithUMN&&this.spinalRegionsWithLMN>=3?{diagnosis:"Clinically Definite ALS",explanation:"This scenario is classified as Clinically Definite ALS as there are \n                    upper motor neuron and lower motor neuron findings in all three spinal regions."}:this.regionsWithUMN>=2&&this.regionsWithLMN>=2&&("UMN"===this.mostRostralFinding||"uncertain"===this.mostRostralFinding&&this.selections.tilt)?{diagnosis:"Clinically Probable ALS",explanation:"This scenario is classified as Clinically Probable ALS as there \n                are upper motor neuron and lower motor neuron findings in two or more regions \n                and some upper motor neuron signs are rostral to lower motor neuron signs."}:this.areBothFindingsPresentInOneRegion()?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Clinically Possible ALS as \n                there are upper motor neuron and lower motor neuron signs together in one region."}:this.regionsWithUMN>=2&&0===this.regionsWithLMN?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions."}:this.regionsWithUMN>=2&&this.regionsWithLMN>0?{diagnosis:"Clinically Possible ALS or NIL - Please see explanation below",explanation:'This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions. We interpret \u201calone\u201d as meaning that\n                     these findings \u201con their own\u201d would satisfy the criteria for possible ALS. If we interpret \n                     "alone" to mean absolutely NO lower motor neuron signs are present, the pattern would not fit within the Awaji-Shima\n                     criteria classification scheme.'}:this.UMNLevel>this.LMNLevel&&this.regionsWithUMN>1&&this.regionsWithLMN>1?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Clinically Possible ALS \n                as lower motor neuron signs are rostral to upper motor neuron signs."}:{diagnosis:"--",explanation:"A valid diagnosis is not available for the selected findings based\n                on the Awaji-Shima criteria."}}},{key:"isLMNFindingPresent",value:function(e){var n=this.selections.regions.findIndex(function(n){return n.id===e});return this.selections.regions[n].lmn||this.selections.regions[n].chronicDenerv&&(this.selections.regions[n].fasics||this.selections.regions[n].fibs)}}]),n}(v),N=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(h.a)(n,[{key:"calculateDiagnosis",value:function(){return console.log("Progressive: "+this.selections.progressive),this.regionsWithLMN>=2&&this.selections.progressive?{diagnosis:"ALS",explanation:"This scenario is classified as  \n                    ALS as there is lower motor neuron dysfunction in at least 2 body regions."}:1===this.regionsWithUMN&&1===this.regionsWithLMN&&this.UMNLevel===this.LMNLevel&&this.selections.progressive?{diagnosis:"ALS",explanation:"This scenario is classified as  \n                    ALS as there is upper and lower motor neuron dysfunction noted in the same body region."}:{diagnosis:"--",explanation:"A valid diagnosis is not available for the selected findings based\n                on the Gold Coast criteria."}}},{key:"isLMNFindingPresent",value:function(e){var n=this.selections.regions.findIndex(function(n){return n.id===e});return this.selections.regions[n].lmn||this.selections.regions[n].chronicDenerv&&(this.selections.regions[n].fasics||this.selections.regions[n].fibs)}}]),n}(b),L=i(73),w=i.n(L),E=i(29),M=i.n(E),P=i(72),S=i.n(P),C={tabs:{background:"#bfbfbf",bottom:"0px"},slide:{paddingTop:0,minHeight:0,color:"#000",display:"flex",justifyContent:"center"}},A=function(e){function n(){var e,i;Object(c.a)(this,n);for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];return(i=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(s)))).state={index:0},i.handleChange=function(e,n){i.setState({index:n}),i.props.changed()},i.handleChangeIndex=function(e){i.setState({index:e}),i.props.changed()},i}return Object(m.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.state.index;return s.a.createElement("div",null,s.a.createElement(S.a,{index:e,onChangeIndex:this.handleChangeIndex},s.a.createElement("div",{style:Object.assign({},C.slide,C.slide3)},this.props.findings),s.a.createElement("div",{style:Object.assign({},C.slide,C.slide3)},this.props.findings1),s.a.createElement("div",{style:Object.assign({},C.slide,C.slide3)},this.props.results),s.a.createElement("div",{style:Object.assign({},C.slide,C.slide3)},this.props.final)),s.a.createElement(w.a,{value:e,variant:"fullWidth",onChange:this.handleChange,style:C.tabs},s.a.createElement(M.a,{label:"Physical"}),s.a.createElement(M.a,{label:"Lab"}),s.a.createElement(M.a,{label:"Additional"}),s.a.createElement(M.a,{label:"Calculation"})))}}]),n}(s.a.Component),R=(i(204),function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:"criteriaName"},e.title),s.a.createElement("div",{className:"diagnosis"},e.diagnosis),s.a.createElement("div",{className:"explanation"},e.explanation," ",s.a.createElement("br",null),e.additionalInfo))}),x=i(10),O=i.n(x),W=function(e){function n(e){var i;return Object(c.a)(this,n),(i=Object(u.a)(this,Object(d.a)(n).call(this,e))).state={regions:[{id:"Brainstem",umn:!1,lmn:!1,fibs:!1,fasics:!1,chronicDenerv:!1},{id:"Cervical",umn:!1,lmn:!1,fibs:!1,fasics:!1,chronicDenerv:!1},{id:"Thoracic",umn:!1,lmn:!1,fibs:!1,fasics:!1,chronicDenerv:!1},{id:"Lumbosacral",umn:!1,lmn:!1,fibs:!1,fasics:!1,chronicDenerv:!1}],excluded:!0,gene:!1,tilt:!1,progressive:null,isTiltNeeded:null,revealResults:!0,yesColor:"default",noColor:"default",yesColorP:"default",noColorP:"default",yesColorE:"primary",noColorE:"default",yesColorF:"default",noColorF:"primary"},i.changedHandler=function(e,n,t){var s=i.state.regions.findIndex(function(e){return e.id===n}),a=Object(l.a)({},i.state.regions[s]);switch(t){case 0:a.umn=e.target.checked;break;case 1:a.lmn=e.target.checked;break;case 2:a.fibs=e.target.checked;break;case 3:a.fasics=e.target.checked;break;case 4:a.chronicDenerv=e.target.checked}var o=Object(r.a)(i.state.regions);o[s]=a,i.setState({regions:o})},i.excludedButtonHandler=function(e){i.setState({excluded:e.target.checked})},i.geneButtonHandler=function(e){i.setState({gene:e.target.checked})},i.tiltButtonHandler=function(e){i.setState({tilt:e.target.checked})},i.yesButtonHandler=function(){i.setState({tilt:!0,revealResults:!0,yesColor:"primary",noColor:"default"})},i.noButtonHandler=function(){i.setState({tilt:!1,revealResults:!0,yesColor:"default",noColor:"primary"})},i.resetButtonHandler=function(){window.location.reload()},i.yesButtonHandlerProg=function(){i.setState({progressive:!0,revealResults:!0,yesColorP:"primary",noColorP:"default"})},i.noButtonHandlerProg=function(){i.setState({progressive:!1,revealResults:!0,yesColorP:"default",noColorP:"primary"})},i.yesButtonHandlerEx=function(){i.setState({excluded:!0,revealResults:!0,yesColorE:"primary",noColorE:"default"})},i.noButtonHandlerEx=function(){i.setState({excluded:!1,revealResults:!0,yesColorE:"default",noColorE:"primary"})},i.yesButtonHandlerFam=function(){i.setState({gene:!0,revealResults:!0,yesColorF:"primary",noColorF:"default"})},i.noButtonHandlerFam=function(){i.setState({gene:!1,revealResults:!0,yesColorF:"default",noColorF:"primary"})},i.getmostRostralFinding=function(){if(i.state.isTiltNeeded)switch(i.state.tilt){case!0:return"The most rostral findings were chosen to be UMN.";case!1:return"The most rostral findings were chosen to be LMN.";default:return null}return"Based on the selected values, the program determined \n            that the most rostral findings were "+i.mostRostralFinding+"."},i.results=new p,i.elEDiag=null,i.airlieDiag=null,i.awajiDiag=null,i.goldCoastDiag=null,i.mostRostralFinding="",i.showResults=i.showResults.bind(Object(g.a)(i)),i.yesButtonHandler=i.yesButtonHandler.bind(Object(g.a)(i)),i.noButtonHandler=i.noButtonHandler.bind(Object(g.a)(i)),i.yesButtonHandlerProg=i.yesButtonHandlerProg.bind(Object(g.a)(i)),i.noButtonHandlerProg=i.noButtonHandlerProg.bind(Object(g.a)(i)),i.yesButtonHandlerEx=i.yesButtonHandlerEx.bind(Object(g.a)(i)),i.noButtonHandlerEx=i.noButtonHandlerEx.bind(Object(g.a)(i)),i.yesButtonHandlerFam=i.yesButtonHandlerFam.bind(Object(g.a)(i)),i.noButtonHandlerFam=i.noButtonHandlerFam.bind(Object(g.a)(i)),i}return Object(m.a)(n,e),Object(h.a)(n,[{key:"showResults",value:function(){this.setState({yesColor:"default",noColor:"default"});var e=new v(this.state);this.results.setDiagnosisStrategy(e),this.mostRostralFinding=this.results.diagnosis.mostRostralFinding,this.setState({isTiltNeeded:this.results.diagnosis.isTiltConfirmationNeeded()}),this.results.diagnosis.isTiltConfirmationNeeded(),this.setState({revealResults:!0})}},{key:"revealResults",value:function(){var e=new y(this.state),n=new v(this.state),i=new b(this.state),t=new N(this.state);this.results.setDiagnosisStrategy(e),this.elEDiag=this.results.result,this.results.setDiagnosisStrategy(n),this.airlieDiag=this.results.result,this.results.setDiagnosisStrategy(i),this.awajiDiag=this.results.result,this.results.setDiagnosisStrategy(t),this.goldDiag=this.results.result}},{key:"render",value:function(){var e=this,n="Lower motor neuron (LMN) findings can be any of the following: 1. LMN clinical findings, 2. \n                    (fibrillations/positive sharp waves AND chronic denervation), OR\n                    3. (fasciculations AND chronic denervation).",i=s.a.createElement("div",{className:"physical"},s.a.createElement("div",{className:"titles"},s.a.createElement("span",{className:"region"},s.a.createElement("br",null),"UMN"),s.a.createElement("span",{className:"region"},"LMN")),s.a.createElement("div",{className:"selectors"},this.state.regions.map(function(n){return s.a.createElement("div",{key:n.id},s.a.createElement("span",{className:"regionName"},n.id),s.a.createElement("span",{className:"toggle"},s.a.createElement(f.Toggle,{name:n.id+"umn",onChange:function(i){return e.changedHandler(i,n.id,0)},checked:n.umn})),s.a.createElement("span",{className:"toggle"},s.a.createElement(f.Toggle,{className:"toggle",name:n.id+"lmn",onChange:function(i){return e.changedHandler(i,n.id,1)},checked:n.lmn})),s.a.createElement("hr",null))})),s.a.createElement("div",{className:"reset"},s.a.createElement(O.a,{className:"resetButton",variant:"outlined",onClick:function(){return e.resetButtonHandler()}},"Reset All"))),t=s.a.createElement("div",{className:"physical"},s.a.createElement("div",{className:"titles"},s.a.createElement("span",{className:"region"},"Fibs/ PSW"),s.a.createElement("span",{className:"region"},"Fascics"),s.a.createElement("span",{className:"region"},"Chronic Denervation")),s.a.createElement("div",{className:"selectors"},this.state.regions.map(function(n){return s.a.createElement("div",{key:n.id},s.a.createElement("span",{className:"regionName"},n.id),s.a.createElement("span",{className:"toggle"},s.a.createElement(f.Toggle,{className:"toggle",name:n.id+"fibs",onChange:function(i){return e.changedHandler(i,n.id,2)},checked:n.fibs})),s.a.createElement("span",{className:"toggle"},s.a.createElement(f.Toggle,{className:"toggle",name:n.id+"fasics",onChange:function(i){return e.changedHandler(i,n.id,3)},checked:n.fasics})),s.a.createElement("span",{className:"toggle"},s.a.createElement(f.Toggle,{className:"toggle",name:n.id+"chronic",onChange:function(i){return e.changedHandler(i,n.id,4)},checked:n.chronicDenerv})),s.a.createElement("hr",null))})),s.a.createElement("div",{className:"reset"},s.a.createElement(O.a,{className:"resetButton",variant:"outlined",onClick:function(){return e.resetButtonHandler()}},"Reset All"))),a=null;this.state.revealResults&&(this.revealResults(),a=s.a.createElement("div",{className:"diagResults"},s.a.createElement("div",{className:"rostralFinding"},s.a.createElement("p",null,this.getmostRostralFinding())),s.a.createElement("hr",null),s.a.createElement(R,{title:"El Escorial (1994)",diagnosis:this.elEDiag.diagnosis,explanation:this.elEDiag.explanation}),s.a.createElement("hr",null),s.a.createElement(R,{title:"El Escorial Revised (Airlie House) (2000)",diagnosis:this.airlieDiag.diagnosis,explanation:this.airlieDiag.explanation}),s.a.createElement("hr",null),s.a.createElement(R,{title:"Awaji-Shima (2008)",diagnosis:this.awajiDiag.diagnosis,explanation:this.awajiDiag.explanation,additionalInfo:n}),s.a.createElement("hr",null),s.a.createElement(R,{title:"Gold Coast (2020)",diagnosis:this.goldDiag.diagnosis,explanation:this.goldDiag.explanation,additionalInfo:n}),s.a.createElement("hr",null)));var o=null,r=s.a.createElement("div",{className:"prog"},"Has the patient experienced progressive motor impairment documented by history or repeated clinical assessment, preceded by normal motor function?",s.a.createElement("br",null),s.a.createElement("div",{className:"progButtons"},s.a.createElement(O.a,{variant:"contained",color:this.state.yesColorP,onClick:function(){return e.yesButtonHandlerProg()}},"Yes"),s.a.createElement(O.a,{variant:"contained",color:this.state.noColorP,onClick:function(){return e.noButtonHandlerProg()}},"No"))),l=s.a.createElement("div",{className:"prog"},"Other causes have been excluded with proper application of neuroimaging and clinical laboratory protocols:",s.a.createElement("br",null),s.a.createElement("div",{className:"progButtons"},s.a.createElement(O.a,{variant:"contained",color:this.state.yesColorE,onClick:function(){return e.yesButtonHandlerEx()}},"Yes"),s.a.createElement(O.a,{variant:"contained",color:this.state.noColorE,onClick:function(){return e.noButtonHandlerEx()}},"No"))),c=s.a.createElement("div",{className:"prog"},"A familial history of ALS is present, and a pathogenic \n      gene mutation in the patient has been identified:",s.a.createElement("br",null),s.a.createElement("div",{className:"progButtons"},s.a.createElement(O.a,{variant:"contained",color:this.state.yesColorF,onClick:function(){return e.yesButtonHandlerFam()}},"Yes"),s.a.createElement(O.a,{variant:"contained",color:this.state.noColorF,onClick:function(){return e.noButtonHandlerFam()}},"No")));o=this.state.isTiltNeeded?s.a.createElement("div",{className:"results"},s.a.createElement("div",{className:"tilt"},"On review, does the patient have any upper motor neuron findings rostral (i.e above) to lower motor neuron findings?",s.a.createElement("div",{className:"tiltButtons"},s.a.createElement(O.a,{variant:"contained",color:this.state.yesColor,onClick:function(){return e.yesButtonHandler()}},"Yes"),s.a.createElement(O.a,{variant:"contained",color:this.state.noColor,onClick:function(){return e.noButtonHandler()}},"No"))),r,l,c):s.a.createElement("div",{className:"results"},r,l,c);var h=s.a.createElement("div",{className:"results"},a);return console.log("RevealResults: "+this.state.revealResults),s.a.createElement("div",null,s.a.createElement("div",{className:"title"},s.a.createElement("h1",null,"ALS Calculator")),s.a.createElement(A,{findings:i,findings1:t,results:o,final:h,changed:this.showResults}))}}]),n}(t.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(s.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/alscalcmobileRLtest",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/alscalcmobileRLtest","/service-worker.js");B?(function(e,n){fetch(e).then(function(i){var t=i.headers.get("content-type");404===i.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):k(n,e)})}}()},79:function(e,n,i){e.exports=i(206)},84:function(e,n,i){},85:function(e,n,i){}},[[79,1,2]]]);
//# sourceMappingURL=main.f78ce4b0.chunk.js.map