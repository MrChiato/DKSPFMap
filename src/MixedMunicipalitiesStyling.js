import { Municipalities } from 'react-denmark-map'
import { municipalitiesData } from "./MunicipalitiesData"
  
const municipalityData = municipalitiesData

const App = () => {
  const customizeMunicipalities = (municipality) => {
    const result = municipalityData.find((item) => item.municipality === municipality.name)
    
    if (!result) return
    if (result.error !== undefined) {
      if(result.spf === "-all" || result.spf === "~all"){
        if(result.dmarc === "reject" || result.dmarc === "quarantine"){
            return {
                style: {
                  fill: 'yellow'
                }
              }
        }
        else{
            return {
              style: {
                fill: 'red'
              }
            }
          }
      }
      else{
        return {
          style: {
            fill: 'red'
          }
        }
      }
    }
    if (result.spf === "-all") {
        if(result.dmarc === "reject"){
            return {
                style: {
                  fill: 'Green'
                }
              }
        }
        if(result.dmarc === "quarantine"){
            return {
                style: {
                  fill: 'Lime'
                }
              }
        }
        if (result.dmarc === "none"){
            return {
                style: {
                  fill: 'Orange'
                }
              }
        }
        else{
            return {
                style: {
                  fill: 'Red'
                }
              }
        }

    }
    if (result.spf === "~all") {
        if(result.dmarc === "reject"){
            return {
                style: {
                  fill: 'Lime'
                }
              }
        }
        if(result.dmarc === "quarantine"){
            return {
                style: {
                  fill: 'Orange'
                }
              }
        }
        if (result.dmarc === "none"){
            return {
                style: {
                  fill: 'Red'
                }
              }
        }
        else{
            return {
                style: {
                  fill: 'Red'
                }
              }
        }
    }
    return {
      style: {
        fill: 'red'
      }
    }
  }

  const customTooltip = (municipality) => {
    const result = municipalityData.find((item) => item.municipality === municipality.name)
    return (
      <div className='map-tooltip'>
        <p className='map-tooltip-name'>{municipality.display_name}</p>
        <p>{`Domain: ${result?.['official-mail'] ?? 'Not Found'}`}</p>
        <p>{`SPF: ${result?.spf ?? 'N/A'}`}</p>
        <p>{`DMARC: ${result?.dmarc ?? 'N/A'}`}</p>
        {result?.error !== undefined &&
        <p className='map-tooltip-error'>{`ERROR: ${result?.error}`}</p>
        }
      </div>
    )
  }


  return (
      <Municipalities
        clickable={true}
        onClick={(e) => SPFLookup(e)}
        customTooltip={customTooltip}
        customizeAreas={customizeMunicipalities}
      />
    )
}

export function SPFLookup(e){
  const thisMuni = municipalityData.find((item) => item.municipality === e.name);
  const thisMuniDomain = thisMuni['official-mail'];
  const url = "https://"+thisMuniDomain;
  window.open(url, "_blank")  ;
}

export default App;