import { Municipalities } from 'react-denmark-map'
import { municipalitiesData } from "./MunicipalitiesData"
  
const municipalityData = municipalitiesData

const App = () => {
  const customizeMunicipalities = (municipality) => {
    const result = municipalityData.find((item) => item.municipality === municipality.name)
    
    if (!result) return
    if (result.error !== undefined) {
      if(result.dmarc === "reject" || result.dmarc === "quarantine"){
        return {
          style: {
            fill: 'yellow'
          }
        }
      }
      if(result.dmarc === "none"){
        return {
            style: {
              fill: 'red'
            }
          }
      }
      else{
        return {
          style: {
            fill: 'black'
          }
        }
      }
    }
    if (result.dmarc === "reject") {
      return {
        style: {
          fill: 'green'
        }
      }
    }
    if (result.dmarc === "quarantine") {
      return {
        style: {
          fill: 'orange'
        }
      }
    }
    if (result.dmarc === "none") {
        return {
          style: {
            fill: 'red'
          }
        }
      }
    return {
      style: {
        fill: 'black'
      }
    }
  }

  const customTooltip = (municipality) => {
    const result = municipalityData.find((item) => item.municipality === municipality.name)
    return (
      <div className='map-tooltip'>
        <p className='map-tooltip-name'>{municipality.display_name}</p>
        <p>{`Domain: ${result?.['official-mail'] ?? 'Not Found'}`}</p>
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
  const url = "https://dmarcian.com/dmarc-inspector/?domain="+thisMuniDomain;
  window.open(url, "_blank")  ;
}

export default App;