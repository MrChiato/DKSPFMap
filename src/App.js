import './App.css';
import SPFMunicipalities from "./SPFMunicipalitiesStyling"
import DMARCMunicipalities from "./DMARCMunicipalitiesStyling"
import MixedMunicipalities from "./MixedMunicipalitiesStyling"
import { Component } from 'react';
import { ChangeTabButton } from './Components/Button.styled';
import { ActiveButtonStyle } from './TabHandling';

class App extends Component {
  componentDidMount(){
    ActiveButtonStyle("SPFMapTabButton")
  }
  render(){
    return (
      <div className='topDiv'>
        <div className='navMenu'>
          <div className='navButtons'>
            <ChangeTabButton name="SPFMap"></ChangeTabButton>
            <ChangeTabButton name="DMARCMap"></ChangeTabButton>
            <ChangeTabButton name="Mixed"></ChangeTabButton>
          </div>
          <div className='navTextBox'>
            <p className='navText' id='navTextField'>SPF or Sender Policy Framework is a record, which contains a list of all IP addresses, that can send emails from a domain</p>
            <a id="navTextLink" target="_blank" className='navText' href="https://dmarcian.com/create-spf-record/">Read more about SPF</a>
          </div>
        </div>
        <div className='mapDiv'>
          <div id="SPFMap" className='TabContainers active'>
            <SPFMunicipalities/>
          </div>
          <div id="DMARCMap" className='TabContainers'>
            <DMARCMunicipalities/>
          </div>
          <div id="Mixed" className='TabContainers'>
            <MixedMunicipalities/>
          </div>
        </div>

      </div>
    )}
}

export default App;