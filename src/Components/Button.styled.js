import { Component } from "react";
import styled from "styled-components";
import { TabClick } from "../TabHandling";

const TabButton = styled.button`
    border-radius: 10px;
    border: 3px solid grey;
    box-shadow: 0 0 10px ${({bs}) => bs || 'rgba(0, 0, 0, 0.15)'};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 1vh 2vw;
    margin: 5px;
    background-color: ${({bg}) => bg || 'white'};
    color: black;

    &:hover{
        opacity: 0.8;
        border: 3px solid blue;
    }
    &:active{
        border: 3px solid royalblue;
        background-color: white;
    }
    &:disabled{
        opacity: 0.3;
    }
    &:buttonActive{
        border: 3px solid royalblue;
        background-color: white;
    }
`

export class ChangeTabButton extends Component{
    render(){
        return(
            <TabButton bg={this.props.bg} bs={this.props.bs} className="TabButtons" id={this.props.name+"TabButton"} onClick={() => TabClick(this.props.name, this.props.name+"TabButton")}>{this.props.name}</TabButton>
        )
    }
}