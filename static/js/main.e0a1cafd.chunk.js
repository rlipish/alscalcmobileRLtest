(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,n,i){},199:function(e,n,i){"use strict";i.r(n);var s=i(0),t=i.n(s),a=i(27),o=i.n(a),r=(i(76),i(69)),l=i(70),c=i(6),h=i(7),d=i(13),g=i(12),u=i(8),m=i(14),p=(i(77),i(24)),f=i.n(p),y=(i(83),function(){function e(){Object(c.a)(this,e),this.diagnosis=null,this.result=null}return Object(h.a)(e,[{key:"setDiagnosisStrategy",value:function(e){this.diagnosis=e,this.result=this.diagnosis.calculateDiagnosis()}}]),e}()),v=function(){function e(n){Object(c.a)(this,e),this.selections=n,this.UMNLevel=this.calcHighestLevel("umn"),this.LMNLevel=this.calcHighestLevel("lmn"),this.regionsWithUMN=this.countRegions("umn"),this.regionsWithLMN=this.countRegions("lmn"),this.spinalRegionsWithUMN=this.countSpinalRegions("umn"),this.spinalRegionsWithLMN=this.countSpinalRegions("lmn"),this.UMNAndLMNInBrainstem=this.containsTwoFindingsInOneRegion("umn","lmn","Brainstem"),this.mostRostralFinding=this.findMostRostralFinding()}return Object(h.a)(e,[{key:"calculateDiagnosis",value:function(){return this.UMNAndLMNInBrainstem&&this.spinalRegionsWithUMN>=2&&this.spinalRegionsWithLMN>=2&&this.selections.progressive?{diagnosis:"Definite ALS",explanation:"This scenario is classified as definite ALS as there are upper motor \n                    neuron and lower motor neuron findings in the brainstem in addition to upper motor \n                    neuron and lower motor neuron signs in two or more spinal regions."}:3===this.spinalRegionsWithUMN&&3===this.spinalRegionsWithLMN&&this.selections.progressive?{diagnosis:"Definite ALS",explanation:"This scenario is classified as Definite ALS as there are upper motor \n                    neuron and lower motor neuron findings in all three spinal regions."}:this.regionsWithUMN>=2&&this.regionsWithLMN>=2&&this.UMNLevel<this.LMNLevel&&this.selections.progressive?{diagnosis:"Probable ALS",explanation:"This scenario is classified as Probable ALS as there are upper motor \n                    neuron and lower motor neuron findings in two or more regions and some upper motor \n                    neuron signs are rostral to lower motor neuron signs."}:this.regionsWithUMN>=2&&this.regionsWithLMN>=2&&("UMN"===this.mostRostralFinding||"uncertain"===this.mostRostralFinding&&this.selections.tilt)&&this.selections.progressive?{diagnosis:"Probable ALS",explanation:"This scenario is classified as Probable ALS as there are upper motor \n                    neuron and lower motor neuron findings in two or more regions and some upper motor \n                    neuron signs are rostral to lower motor neuron signs."}:this.areBothFindingsPresentInOneRegion()&&this.selections.progressive?{diagnosis:"Possible ALS",explanation:"This scenario is classified as Possible ALS as there are upper motor \n                    neuron and lower motor neuron signs \u201ctogether\u201d in one region."}:this.regionsWithUMN>=2&&0===this.regionsWithLMN&&this.selections.progressive?{diagnosis:"Possible ALS",explanation:"This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions."}:this.regionsWithUMN>=2&&this.regionsWithLMN>0&&this.selections.progressive?{diagnosis:"Possible ALS or NIL - Please see explanation below",explanation:'This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions. We interpret \u201calone\u201d as meaning that\n                     these findings \u201con their own\u201d would satisfy the criteria for possible ALS. If we interpret \n                     "alone" to mean absolutely NO lower motor neuron signs are present, the pattern would not fit within the El \n                     Escorial criteria classification scheme.'}:this.UMNLevel>this.LMNLevel&&this.regionsWithUMN>1&&this.regionsWithLMN>1&&this.selections.progressive?{diagnosis:"Possible ALS",explanation:"This scenario is classified as Possible ALS as lower motor neuron \n                    signs are rostral to upper motor neuron signs."}:this.regionsWithLMN>=2&&this.selections.progressive?{diagnosis:"Suspected ALS",explanation:"This scenario is classified as Suspected ALS as there are lower \n                    motor neuron signs in two or more regions."}:{diagnosis:"--",explanation:"A valid diagnosis is not available for the selected findings based\n                    on the El Escorial criteria."}}},{key:"calcHighestLevel",value:function(e){for(var n=0;n<this.selections.regions.length;n++)if(this.isFindingPresent(e,this.selections.regions[n].id))return n;return 5}},{key:"countRegions",value:function(e){for(var n=0,i=0;i<this.selections.regions.length;i++)n+=this.isFindingPresent(e,this.selections.regions[i].id);return n}},{key:"countSpinalRegions",value:function(e){return this.countRegions(e)-this.selections.regions[0][e]}},{key:"containsTwoFindingsInOneRegion",value:function(e,n,i){return this.isFindingPresent(e,i)&&this.isFindingPresent(n,i)}},{key:"areBothFindingsPresentInOneRegion",value:function(){for(var e=0;e<this.selections.regions.length;e++)if(this.containsTwoFindingsInOneRegion("umn","lmn",this.selections.regions[e].id))return!0;return!1}},{key:"isFindingPresent",value:function(e,n){return this.isPhysicalFindingPresent(e,n)}},{key:"isPhysicalFindingPresent",value:function(e,n){var i=this.selections.regions.findIndex(function(e){return e.id===n});return this.selections.regions[i][e]}},{key:"findMostRostralFinding",value:function(){var e=this.calculateHighestPhysicalLevel("umn"),n=this.calculateHighestPhysicalLevel("lmn"),i=this.calculateHighestPhysicalLevel("fasics"),s=this.calculateHighestPhysicalLevel("fibs"),t=this.calculateHighestPhysicalLevel("chronicDenerv"),a=Math.min.apply(Math,[i,s,t]);return n<e?"LMN":e<Math.min.apply(Math,[n,a])?"UMN":5===e?"not selected":"uncertain"}},{key:"isTiltConfirmationNeeded",value:function(){return"uncertain"===this.mostRostralFinding}},{key:"calculateHighestPhysicalLevel",value:function(e){for(var n=0;n<this.selections.regions.length;n++)if(this.isPhysicalFindingPresent(e,this.selections.regions[n].id))return n;return 5}}]),e}(),b=function(e){function n(e){var i;return Object(c.a)(this,n),(i=Object(d.a)(this,Object(g.a)(n).call(this,e))).regionsWithLMNByPhysicalOnly=i.countPhysicalRegions("lmn"),i.regionsWithLMNByEMGOnly=i.countLMNRegionsByEMG(),i.spinalRegionsWithLMNByPhysicalOnly=i.countPhysicalSpinalRegions("lmn"),i.UMNAndLMNInBrainstemByPhysicalOnly=i.containsTwoPhysicalFindingsInOneRegion("umn","lmn","Brainstem"),i}return Object(m.a)(n,e),Object(h.a)(n,[{key:"calculateDiagnosis",value:function(){return console.log("UMN regions: "+this.regionsWithUMN),console.log("LMN regions: "+this.regionsWithLMN),console.log("EMG LMN regions: "+this.regionsWithLMNByEMGOnly),console.log("Most rostral: "+this.mostRostralFinding),console.log("Tilt: "+this.selections.tilt),this.regionsWithUMN>=1&&this.regionsWithLMN>=1&&this.selections.gene&&this.selections.progressive?{diagnosis:"Clinically Definite Familial ALS - Laboratory Supported",explanation:"This scenario is classified as Clinically Definite Familial\n                    ALS - Laboratory Supported as there are upper and lower motor neuron signs\n                    in at least a single region as well as a family history of a defined \n                    pathogenic mutation."}:this.UMNAndLMNInBrainstemByPhysicalOnly&&this.spinalRegionsWithUMN>=2&&this.spinalRegionsWithLMNByPhysicalOnly>=2&&this.selections.progressive?{diagnosis:"Clinically Definite ALS",explanation:"This scenario is classified as Clinically Definite ALS as \n                    there are upper motor neuron and lower motor neuron findings in the\n                    brainstem as well as upper motor neuron and lower motor neuron findings\n                    in two or more spinal regions."}:3===this.spinalRegionsWithUMN&&3===this.spinalRegionsWithLMNByPhysicalOnly&&this.selections.progressive?{diagnosis:"Clinically Definite ALS",explanation:"This scenario is classified as Clinically Definite ALS as\n                    there are upper motor neuron and lower motor neuron findings in all \n                    three spinal regions."}:this.regionsWithUMN>=2&&this.regionsWithLMNByPhysicalOnly>=2&&("UMN"===this.mostRostralFinding||"uncertain"===this.mostRostralFinding&&this.selections.tilt)&&this.selections.progressive?{diagnosis:"Clinically Probable ALS",explanation:"This scenario is classified as Clinically Probable ALS as\n                        there are upper motor neuron and lower motor neuron findings in two or \n                        more regions and some upper motor neuron signs are rostral to lower \n                        motor neuron signs."}:1===this.regionsWithUMN&&1===this.regionsWithLMNByPhysicalOnly&&this.UMNLevel===this.LMNLevel&&this.selections.excluded||this.regionsWithUMN>=1&&this.regionsWithLMNByEMGOnly>=2&&this.selections.excluded&&this.selections.progressive?{diagnosis:"Clinically Probable ALS - Laboratory Supported",explanation:"This scenario is classified as Clinically Probable \n                        ALS - Laboratory Supported as there are clinical signs of:\n                        1. UMN and LMN dysfunction are in only one region, OR \n                        2. When UMN signs alone are present in one region, AND LMN signs defined by EMG criteria\n                        are present in at least two regions, \n                        3. With proper application of neuroimaging and clinical laboratory protocols to exclude other causes."}:this.areBothFindingsPresentInOnePhysicalRegion()&&this.selections.progressive?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Clinically Possible \n                    ALS as there are upper motor neuron and lower motor neuron signs \n                    in one region."}:this.regionsWithUMN>=2&&0===this.regionsWithLMN&&this.selections.progressive?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions."}:this.regionsWithUMN>=2&&this.regionsWithLMN>0&&this.selections.progressive?{diagnosis:"Clinically Possible ALS or NIL - Please see explanation below",explanation:'This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions. We interpret \u201calone\u201d as meaning that\n                     these findings \u201con their own\u201d would satisfy the criteria for possible ALS. If we interpret \n                     "alone" to mean absolutely NO lower motor neuron signs are present, the pattern would not fit within the El Escorial Revised (Airlie House)\n                     criteria classification scheme.'}:this.UMNLevel>this.LMNLevel&&this.regionsWithUMN>1&&this.regionsWithLMN>1&&this.selections.progressive?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Clinically Possible \n                    ALS as lower motor neuron signs are rostral to upper motor \n                    neuron signs."}:{diagnosis:"--",explanation:"A valid diagnosis is not available for the selected findings based\n                on the El Escorial revised (Airlie House) criteria."}}},{key:"countPhysicalRegions",value:function(e){for(var n=0,i=0;i<this.selections.regions.length;i++)n+=this.isPhysicalFindingPresent(e,this.selections.regions[i].id);return n}},{key:"countPhysicalSpinalRegions",value:function(e){return this.countPhysicalRegions(e)-this.selections.regions[0][e]}},{key:"isFindingPresent",value:function(e,n){return"lmn"===e?this.isLMNFindingPresent(n):this.isPhysicalFindingPresent(e,n)}},{key:"isLMNFindingPresent",value:function(e){var n=this.selections.regions.findIndex(function(n){return n.id===e});return this.selections.regions[n].lmn||this.selections.regions[n].fibs&&this.selections.regions[n].chronicDenerv}},{key:"countLMNRegionsByEMG",value:function(){for(var e=0,n=0;n<this.selections.regions.length;n++)e+=this.isFindingPresent("fibs",this.selections.regions[n].id)&&this.isFindingPresent("chronicDenerv",this.selections.regions[n].id);return e}},{key:"containsTwoPhysicalFindingsInOneRegion",value:function(e,n,i){return this.isPhysicalFindingPresent(e,i)&&this.isPhysicalFindingPresent(n,i)}},{key:"areBothFindingsPresentInOnePhysicalRegion",value:function(){for(var e=0;e<this.selections.regions.length;e++)if(this.containsTwoPhysicalFindingsInOneRegion("umn","lmn",this.selections.regions[e].id))return!0;return!1}}]),n}(v),N=function(e){function n(){return Object(c.a)(this,n),Object(d.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(h.a)(n,[{key:"calculateDiagnosis",value:function(){return this.regionsWithUMN>=1&&this.regionsWithLMN>=1&&this.selections.gene&&this.selections.progressive?{diagnosis:"Clinically Definite Familial ALS - Laboratory Supported",explanation:'This scenario is classified as Clinically Definite Familial \n                    ALS - Laboratory Supported as there are upper and lower motor neuron signs \n                    in at least a single region as well as a family history of a defined \n                    pathogenic mutation. This scenario is not specifically mentioned in the article \n                    but might be presumed to be obeying the "Principles (from the Airlie House criteria)"'}:this.UMNAndLMNInBrainstem&&this.spinalRegionsWithUMN>=2&&this.spinalRegionsWithLMN>=2&&this.selections.progressive?{diagnosis:"Clinically Definite ALS",explanation:"This scenario is classified as Clinically Definite ALS \n                    as there are upper motor neuron and lower motor neuron findings in \n                    the brainstem as well as upper motor neuron and lower motor neuron \n                    findings in two or more spinal regions."}:3===this.spinalRegionsWithUMN&&this.spinalRegionsWithLMN>=3&&this.selections.progressive?{diagnosis:"Clinically Definite ALS",explanation:"This scenario is classified as Clinically Definite ALS as there are \n                    upper motor neuron and lower motor neuron findings in all three spinal regions."}:this.regionsWithUMN>=2&&this.regionsWithLMN>=2&&("UMN"===this.mostRostralFinding||"uncertain"===this.mostRostralFinding&&this.selections.tilt)&&this.selections.progressive?{diagnosis:"Clinically Probable ALS",explanation:"This scenario is classified as Clinically Probable ALS as there \n                are upper motor neuron and lower motor neuron findings in two or more regions \n                and some upper motor neuron signs are rostral to lower motor neuron signs."}:this.areBothFindingsPresentInOneRegion()&&this.selections.progressive?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Clinically Possible ALS as \n                there are upper motor neuron and lower motor neuron signs together in one region."}:this.regionsWithUMN>=2&&0===this.regionsWithLMN&&this.selections.progressive?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions."}:this.regionsWithUMN>=2&&this.regionsWithLMN>0&&this.selections.progressive?{diagnosis:"Clinically Possible ALS or NIL - Please see explanation below",explanation:'This scenario is classified as Possible ALS as there are upper motor\n                     neuron signs \u201calone\u201d in two or more regions. We interpret \u201calone\u201d as meaning that\n                     these findings \u201con their own\u201d would satisfy the criteria for possible ALS. If we interpret \n                     "alone" to mean absolutely NO lower motor neuron signs are present, the pattern would not fit within the Awaji-Shima\n                     criteria classification scheme.'}:this.UMNLevel>this.LMNLevel&&this.regionsWithUMN>1&&this.regionsWithLMN>1&&this.selections.progressive?{diagnosis:"Clinically Possible ALS",explanation:"This scenario is classified as Clinically Possible ALS \n                as lower motor neuron signs are rostral to upper motor neuron signs."}:{diagnosis:"--",explanation:"A valid diagnosis is not available for the selected findings based\n                on the Awaji-Shima criteria."}}},{key:"isLMNFindingPresent",value:function(e){var n=this.selections.regions.findIndex(function(n){return n.id===e});return this.selections.regions[n].lmn||this.selections.regions[n].chronicDenerv&&(this.selections.regions[n].fasics||this.selections.regions[n].fibs)}}]),n}(b),L=function(e){function n(){return Object(c.a)(this,n),Object(d.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(h.a)(n,[{key:"calculateDiagnosis",value:function(){return console.log("Progressive: "+this.selections.progressive),(this.regionsWithUMN>=2&&this.regionsWithLMN>=1||this.regionsWithUMN>=1&&this.regionsWithLMN>=2)&&this.selections.progressive?{diagnosis:"ALS",explanation:"This scenario is classified as  \n                  ALS as there is upper and lower motor neuron dysfunction noted in at least 1 body region."}:this.regionsWithLMN>=2&&this.selections.progressive?{diagnosis:"ALS",explanation:"This scenario is classified as  \n                    ALS as there is lower motor neuron dysfunction in at least 2 body regions."}:1===this.regionsWithUMN&&1===this.regionsWithLMN&&this.UMNLevel===this.LMNLevel&&this.selections.progressive?{diagnosis:"ALS",explanation:"This scenario is classified as  \n                    ALS as there is upper and lower motor neuron dysfunction noted in the same body region \n                    with only one region being involved."}:{diagnosis:"--",explanation:"A valid diagnosis is not available for the selected findings based\n                on the Gold Coast criteria."}}},{key:"isLMNFindingPresent",value:function(e){var n=this.selections.regions.findIndex(function(n){return n.id===e});return this.selections.regions[n].lmn||this.selections.regions[n].chronicDenerv&&(this.selections.regions[n].fasics||this.selections.regions[n].fibs)}}]),n}(N),M=i(67),E=i.n(M),w=i(28),P=i.n(w),S=i(66),C=i.n(S),A={tabs:{background:"#bfbfbf",bottom:"0px"},slide:{paddingTop:0,minHeight:0,color:"#000",display:"flex",justifyContent:"center"}},R=function(e){function n(){var e,i;Object(c.a)(this,n);for(var s=arguments.length,t=new Array(s),a=0;a<s;a++)t[a]=arguments[a];return(i=Object(d.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(t)))).state={index:0},i.handleChange=function(e,n){i.setState({index:n}),i.props.changed()},i.handleChangeIndex=function(e){i.setState({index:e}),i.props.changed()},i}return Object(m.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.state.index;return t.a.createElement("div",null,t.a.createElement(C.a,{index:e,onChangeIndex:this.handleChangeIndex},t.a.createElement("div",{style:Object.assign({},A.slide,A.slide3)},this.props.findings),t.a.createElement("div",{style:Object.assign({},A.slide,A.slide3)},this.props.findings1),t.a.createElement("div",{style:Object.assign({},A.slide,A.slide3)},this.props.results),t.a.createElement("div",{style:Object.assign({},A.slide,A.slide3)},this.props.final)),t.a.createElement(E.a,{value:e,variant:"fullWidth",onChange:this.handleChange,style:A.tabs},t.a.createElement(P.a,{label:"Physical"}),t.a.createElement(P.a,{label:"Lab"}),t.a.createElement(P.a,{label:"Additional"}),t.a.createElement(P.a,{label:"Calculation"})))}}]),n}(t.a.Component),x=(i(197),function(e){return t.a.createElement("div",null,t.a.createElement("div",{className:"criteriaName"},e.title),t.a.createElement("div",{className:"diagnosis"},e.diagnosis),t.a.createElement("div",{className:"explanation"},e.explanation," ",t.a.createElement("br",null),e.additionalInfo))}),B=i(10),O=i.n(B),W=function(e){function n(e){var i;return Object(c.a)(this,n),(i=Object(d.a)(this,Object(g.a)(n).call(this,e))).state={regions:[{id:"Brainstem",umn:!1,lmn:!1,fibs:!1,fasics:!1,chronicDenerv:!1},{id:"Cervical",umn:!1,lmn:!1,fibs:!1,fasics:!1,chronicDenerv:!1},{id:"Thoracic",umn:!1,lmn:!1,fibs:!1,fasics:!1,chronicDenerv:!1},{id:"Lumbosacral",umn:!1,lmn:!1,fibs:!1,fasics:!1,chronicDenerv:!1}],excluded:!0,gene:!1,tilt:!1,progressive:!0,isTiltNeeded:null,revealResults:!0,yesColor:"default",noColor:"default",yesColorP:"primary",noColorP:"default",yesColorE:"primary",noColorE:"default",yesColorF:"default",noColorF:"primary"},i.changedHandler=function(e,n,s){var t=i.state.regions.findIndex(function(e){return e.id===n}),a=Object(l.a)({},i.state.regions[t]);switch(s){case 0:a.umn=e.target.checked;break;case 1:a.lmn=e.target.checked;break;case 2:a.fibs=e.target.checked;break;case 3:a.fasics=e.target.checked;break;case 4:a.chronicDenerv=e.target.checked}var o=Object(r.a)(i.state.regions);o[t]=a,i.setState({regions:o})},i.excludedButtonHandler=function(e){i.setState({excluded:e.target.checked})},i.geneButtonHandler=function(e){i.setState({gene:e.target.checked})},i.tiltButtonHandler=function(e){i.setState({tilt:e.target.checked})},i.yesButtonHandler=function(){i.setState({tilt:!0,revealResults:!0,yesColor:"primary",noColor:"default"})},i.noButtonHandler=function(){i.setState({tilt:!1,revealResults:!0,yesColor:"default",noColor:"primary"})},i.resetButtonHandler=function(){window.location.reload()},i.yesButtonHandlerProg=function(){i.setState({progressive:!0,revealResults:!0,yesColorP:"primary",noColorP:"default"})},i.noButtonHandlerProg=function(){i.setState({progressive:!1,revealResults:!0,yesColorP:"default",noColorP:"primary"})},i.yesButtonHandlerEx=function(){i.setState({excluded:!0,revealResults:!0,yesColorE:"primary",noColorE:"default"})},i.noButtonHandlerEx=function(){i.setState({excluded:!1,revealResults:!0,yesColorE:"default",noColorE:"primary"})},i.yesButtonHandlerFam=function(){i.setState({gene:!0,revealResults:!0,yesColorF:"primary",noColorF:"default"})},i.noButtonHandlerFam=function(){i.setState({gene:!1,revealResults:!0,yesColorF:"default",noColorF:"primary"})},i.getmostRostralFinding=function(){if(i.state.isTiltNeeded)switch(i.state.tilt){case!0:return"The most rostral findings were chosen to be UMN.";case!1:return"The most rostral findings were chosen to be LMN. \n          NB: A diagnosis of (Clinically) Probable ALS cannot be made when LMN findings are rostral to UMN findings.";default:return null}return"UMN"===i.mostRostralFinding?"Based on the selected values, the program determined \n          that the most rostral findings were "+i.mostRostralFinding+".":"Based on the selected values, the program determined \n            that the most rostral findings were "+i.mostRostralFinding+". NB: A diagnosis of (Clinically) Probable ALS cannot be made when LMN findings are rostral to UMN findings."},i.results=new y,i.elEDiag=null,i.airlieDiag=null,i.awajiDiag=null,i.goldCoastDiag=null,i.mostRostralFinding="",i.showResults=i.showResults.bind(Object(u.a)(i)),i.yesButtonHandler=i.yesButtonHandler.bind(Object(u.a)(i)),i.noButtonHandler=i.noButtonHandler.bind(Object(u.a)(i)),i.yesButtonHandlerProg=i.yesButtonHandlerProg.bind(Object(u.a)(i)),i.noButtonHandlerProg=i.noButtonHandlerProg.bind(Object(u.a)(i)),i.yesButtonHandlerEx=i.yesButtonHandlerEx.bind(Object(u.a)(i)),i.noButtonHandlerEx=i.noButtonHandlerEx.bind(Object(u.a)(i)),i.yesButtonHandlerFam=i.yesButtonHandlerFam.bind(Object(u.a)(i)),i.noButtonHandlerFam=i.noButtonHandlerFam.bind(Object(u.a)(i)),i}return Object(m.a)(n,e),Object(h.a)(n,[{key:"showResults",value:function(){this.setState({yesColor:"default",noColor:"default"});var e=new b(this.state);this.results.setDiagnosisStrategy(e),this.mostRostralFinding=this.results.diagnosis.mostRostralFinding,this.setState({isTiltNeeded:this.results.diagnosis.isTiltConfirmationNeeded()}),this.results.diagnosis.isTiltConfirmationNeeded(),this.setState({revealResults:!0})}},{key:"revealResults",value:function(){var e=new v(this.state),n=new b(this.state),i=new N(this.state),s=new L(this.state);this.results.setDiagnosisStrategy(e),this.elEDiag=this.results.result,this.results.setDiagnosisStrategy(n),this.airlieDiag=this.results.result,this.results.setDiagnosisStrategy(i),this.awajiDiag=this.results.result,this.results.setDiagnosisStrategy(s),this.goldDiag=this.results.result}},{key:"render",value:function(){var e=this,n="Lower motor neuron (LMN) findings can be any of the following: 1. LMN clinical findings, 2. \n                    (fibrillations/positive sharp waves AND chronic denervation), OR\n                    3. (fasciculations AND chronic denervation).";var i,s=(i=100,Math.round(window.innerHeight/(100/i)))-134+"px",a=t.a.createElement("div",{className:"physical",style:{height:s}},t.a.createElement("div",{className:"titles"},t.a.createElement("span",{className:"region"},t.a.createElement("br",null),"UMN"),t.a.createElement("span",{className:"region"},"LMN")),t.a.createElement("div",{className:"selectors"},this.state.regions.map(function(n){return t.a.createElement("div",{key:n.id},t.a.createElement("span",{className:"regionName"},n.id),t.a.createElement(f.a,{icons:!1,className:"toggle",name:n.id+"umn",onChange:function(i){return e.changedHandler(i,n.id,0)},checked:n.umn}),t.a.createElement("span",{className:"toggle"},t.a.createElement(f.a,{className:"toggle",icons:!1,name:n.id+"lmn",onChange:function(i){return e.changedHandler(i,n.id,1)},checked:n.lmn})),t.a.createElement("hr",null))})),t.a.createElement("div",{className:"reset"},t.a.createElement(O.a,{className:"resetButton",variant:"outlined",onClick:function(){return e.resetButtonHandler()}},"Reset All"))),o=t.a.createElement("div",{className:"physical",style:{height:s}},t.a.createElement("div",{className:"titles"},t.a.createElement("span",{className:"region"},"Fibs/ PSW"),t.a.createElement("span",{className:"region"},"Fascics"),t.a.createElement("span",{className:"region"},"Chronic Denervation")),t.a.createElement("div",{className:"selectors"},this.state.regions.map(function(n){return t.a.createElement("div",{key:n.id},t.a.createElement("span",{className:"regionName"},n.id),t.a.createElement("span",null,t.a.createElement(f.a,{className:"toggle",icons:!1,name:n.id+"fibs",onChange:function(i){return e.changedHandler(i,n.id,2)},checked:n.fibs})),t.a.createElement("span",{className:"toggle"},t.a.createElement(f.a,{className:"toggle",icons:!1,name:n.id+"fasics",onChange:function(i){return e.changedHandler(i,n.id,3)},checked:n.fasics})),t.a.createElement("span",{className:"toggle"},t.a.createElement(f.a,{className:"toggle",icons:!1,name:n.id+"chronic",onChange:function(i){return e.changedHandler(i,n.id,4)},checked:n.chronicDenerv})),t.a.createElement("hr",null))})),t.a.createElement("div",{className:"reset"},t.a.createElement(O.a,{className:"resetButton",variant:"outlined",onClick:function(){return e.resetButtonHandler()}},"Reset All"))),r=null;this.state.revealResults&&(this.revealResults(),r=t.a.createElement("div",{className:"diagResults"},t.a.createElement("div",{className:"rostralFinding"},"  ",t.a.createElement("p",null,this.getmostRostralFinding())),t.a.createElement("hr",null),t.a.createElement(x,{title:"El Escorial (1994)",diagnosis:this.elEDiag.diagnosis,explanation:this.elEDiag.explanation}),t.a.createElement("hr",null),t.a.createElement(x,{title:"El Escorial Revised (Airlie House) (2000)",diagnosis:this.airlieDiag.diagnosis,explanation:this.airlieDiag.explanation}),t.a.createElement("hr",null),t.a.createElement(x,{title:"Awaji-Shima (2008)",diagnosis:this.awajiDiag.diagnosis,explanation:this.awajiDiag.explanation,additionalInfo:n}),t.a.createElement("hr",null),t.a.createElement(x,{title:"Gold Coast (2020)",diagnosis:this.goldDiag.diagnosis,explanation:this.goldDiag.explanation,additionalInfo:n}),t.a.createElement("hr",null)));var l=null,c=t.a.createElement("div",{className:"prog"},"Has the patient experienced progressive motor impairment documented by history or repeated clinical assessment, preceded by normal motor function?",t.a.createElement("br",null),t.a.createElement("div",{className:"progButtons"},t.a.createElement(O.a,{variant:"contained",color:this.state.yesColorP,onClick:function(){return e.yesButtonHandlerProg()}},"Yes"),t.a.createElement(O.a,{variant:"contained",color:this.state.noColorP,onClick:function(){return e.noButtonHandlerProg()}},"No"))),h=t.a.createElement("div",{className:"prog"},"Other causes have been excluded with proper application of neuroimaging and clinical laboratory protocols:",t.a.createElement("br",null),t.a.createElement("div",{className:"progButtons"},t.a.createElement(O.a,{variant:"contained",color:this.state.yesColorE,onClick:function(){return e.yesButtonHandlerEx()}},"Yes"),t.a.createElement(O.a,{variant:"contained",color:this.state.noColorE,onClick:function(){return e.noButtonHandlerEx()}},"No"))),d=t.a.createElement("div",{className:"prog"},"A familial history of ALS is present, and a pathogenic \n      gene mutation in the patient has been identified:",t.a.createElement("br",null),t.a.createElement("div",{className:"progButtons"},t.a.createElement(O.a,{variant:"contained",color:this.state.yesColorF,onClick:function(){return e.yesButtonHandlerFam()}},"Yes"),t.a.createElement(O.a,{variant:"contained",color:this.state.noColorF,onClick:function(){return e.noButtonHandlerFam()}},"No")));l=this.state.isTiltNeeded?t.a.createElement("div",{className:"results"},t.a.createElement("div",{className:"tilt"},"On review, does the patient have any upper motor neuron findings rostral (i.e above) to lower motor neuron findings?",t.a.createElement("div",{className:"tiltButtons"},t.a.createElement(O.a,{variant:"contained",color:this.state.yesColor,onClick:function(){return e.yesButtonHandler()}},"Yes"),t.a.createElement(O.a,{variant:"contained",color:this.state.noColor,onClick:function(){return e.noButtonHandler()}},"No"))),c,h,d):t.a.createElement("div",{className:"results"},c,h,d);var g=t.a.createElement("div",{className:"results"},r);return console.log("RevealResults: "+this.state.revealResults),t.a.createElement("div",null,t.a.createElement("div",{className:"title"},t.a.createElement("div",{className:"App-header"},t.a.createElement("h1",null,"ALS Calculator"))),t.a.createElement(R,{findings:a,findings1:o,results:l,final:g,changed:this.showResults}))}}]),n}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(t.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,n,i){e.exports=i(199)},76:function(e,n,i){},77:function(e,n,i){}},[[71,1,2]]]);
//# sourceMappingURL=main.e0a1cafd.chunk.js.map