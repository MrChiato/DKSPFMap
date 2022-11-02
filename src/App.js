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
            <div style={{display:"none"}} id="SPFColors" className='active'>
              <p className='navText'><span className='navText' style={{color:'green', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Green</span> means everything is correctly setup</p>
              <p className='navText'><span className='navText' style={{color:'yellow', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Yellow</span> means there's an error</p>
              <p className='navText'><span className='navText' style={{color:'orange', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Orange</span> means improvements could be needed</p>
              <p className='navText'><span className='navText' style={{color:'red', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Red</span> means something critical is wrong</p>
            </div>
            <div style={{display:"none"}} id="DMARCColors">
              <p className='navText'><span className='navText' style={{color:'green', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Green</span> means everything is correctly setup</p>
              <p className='navText'><span className='navText' style={{color:'orange', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Orange</span> means DMARC policy is set to quarantine</p>
              <p className='navText'><span className='navText' style={{color:'red', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Red</span> means DMARC policy is set to none</p>
              <p className='navText'><span className='navText' style={{color:'black', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Black</span> means DMARC policy is missing</p>
            </div>
            <div style={{display:"none"}} id="MixedColors">
              <p className='navText'><span className='navText' style={{color:'green', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Green</span> means everything is correctly setup</p>
              <p className='navText'><span className='navText' style={{color:'lime', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Lime</span> means it's almost there, either SPF is ~all OR DMARC policy is quarantine, not both</p>
              <p className='navText'><span className='navText' style={{color:'orange', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Orange</span> means improvements is needed, both SPF is ~all and DMARC policy is quarantine, or worse.</p>
              <p className='navText'><span className='navText' style={{color:'red', fontSize:"20px", fontWeight:"700", WebkitTextStroke:"1px black"}}>Red</span> means something critical is wrong, such as DMARC policy being none or an SPF error</p>
            </div>
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