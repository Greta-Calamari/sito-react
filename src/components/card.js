import React, { Component } from 'react';


class Card extends Component{
render(){
        return(
            <div className="col mt-3">
                <div className="card" style={{width:'18rem', textAlign:'center'}}>
                    <div className='row'>
                        <div className='col'>
                            <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">Aggiungi <span className='badge badge-light'>{this.props.card.quantità}</span> </button>

                        </div>
                        <div className='col'>
                            <button onClick={() => this.props.onDecrement(this.props.card)} className="btn btn-primary">Togli</button>
                        </div>


                    </div>
                    <img src={this.props.card.immagine} className="card-img-top" alt=""></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome} Roll</h5>
                        <p className="card-text">€ {this.props.card.prezzo}</p>
                        <button onClick={()=>this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
                        {/* se usi argomenti bisogna utilizzare una arrow function */}
                    </div>
                </div>
            </div>

        );
      }

}

export default Card;