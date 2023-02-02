import AwajiShima from "./AwajiShima";

class GoldCoast extends AwajiShima {

  calculateDiagnosis() {

    console.log("Progressive: " + this.selections.progressive);

    if (this.regionsWithUMN === 1 && this.regionsWithLMN === 1 && 
      this.UMNLevel === this.LMNLevel && this.selections.progressive) {
    return {
      diagnosis:  "ALS",
      explanation: `This scenario is classified as  
                  ALS as there is upper and lower motor neuron dysfunction noted in the same body region 
                  with only one region being involved.`
    };
  }

    else if (((this.regionsWithUMN >= 2 && this.regionsWithLMN >= 1) || (this.regionsWithUMN >= 1 && this.regionsWithLMN >= 2)) && 
     this.selections.progressive) {
    return {
      diagnosis:  "ALS",
      explanation: `This scenario is classified as  
                  ALS as there is upper and lower motor neuron dysfunction noted in at least 1 body region.`
    };
  }

    else if (this.regionsWithLMN >= 2 && 
         this.selections.progressive) {
      return {
        diagnosis:  "ALS",
        explanation: `This scenario is classified as  
                    ALS as there is lower motor neuron dysfunction in at least 2 body regions.`
      };
    }

    else {
    return {
      diagnosis: "--",
      explanation: `A valid diagnosis is not available for the selected findings based
                on the Gold Coast criteria.`
    };
    }
  }

  isLMNFindingPresent(region) {
    const regionIndex = this.selections.regions.findIndex(r => {
      return r.id === region;
    });

    return (
      this.selections.regions[regionIndex].lmn ||
      (this.selections.regions[regionIndex].chronicDenerv &&
        (this.selections.regions[regionIndex].fasics || this.selections.regions[regionIndex].fibs))
    );
  }
}

export default GoldCoast;
