import { Municipalities } from 'react-denmark-map'
import { municipalitiesData } from "./MunicipalitiesData"
  
const municipalityData = municipalitiesData

let spfSelected = 1;

export function DisplaySPF(){
  spfSelected = 1;
  console.log(spfSelected)
}
export function DisplayDMARC(){
  spfSelected = 0;
  console.log(spfSelected)
}

const App = () => {
  const customizeMunicipalities = (municipality) => {
    const result = municipalityData.find((item) => item.municipality === municipality.name)
    
    if (!result) return
    if (result.error !== undefined) {
      if(result.spf === "-all" || result.spf === "~all"){
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
    if (result.spf === "-all") {
      return {
        style: {
          fill: 'green'
        }
      }
    }
    if (result.spf === "~all") {
      return {
        style: {
          fill: 'orange'
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
  const url = "https://dmarcian.com/spf-survey/?domain="+thisMuniDomain;
  window.open(url, "_blank")  ;
}

export default App;