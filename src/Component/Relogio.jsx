import React,{Component} from "react";

export default class Relogio extends Component {
    
    
    constructor(){
        super()
        this.state = {
            data: new Date()
        }

    }
    
    componentDidMount(){
        this.atualizarHora()
    }
    

    atualizarHora(){
       setInterval(() => {
           this.setState({
               data: new Date()
           })
       }, 1000);
    }
    
    
    render(){
        return(
            <div className="principal">
                <div className="quadrado">{this.state.data.getHours()}h</div>
                <div className="quadrado">{this.state.data.getMinutes()}m</div>
                <div className="quadrado">{this.state.data.getSeconds()}s</div>
            </div>
        ) 
    }
}