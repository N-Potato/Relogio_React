import React,{Component} from "react";

export default class Primeiro extends Component{
    constructor(props){
        super(props)
        this.state ={
            nome:"Tiago",
            idade:29
        }
        this.mudarTexto = this.mudarTexto.bind(this)

        this.voltarTexto = this.voltarTexto.bind(this)
        
    }

    mudarTexto(){
        this.setState(
             {
                nome:"Batata",
                idade:18
            }
        )
        
    }

    voltarTexto(){
        this.setState({
            nome:"Tiago",
            idade:29
        }
        )

    }
    
    render(){
        return(
            <div>Olá {this.state.nome}  {this.state.idade}
                <br/>
                <button onClick={this.mudarTexto}>Mudar Nome</button>
                <br/>
                <button onClick={this.voltarTexto}>Redefinir Nome</button>

            </div>
        )
    }
}