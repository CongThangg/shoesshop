import React, { Component } from 'react'
import ShoesItem from './ShoesItem';


export default class ShoesList extends Component {

    renderShoes = ()=>{
        return this.props.shoesArray.map((product) => {
            
            return <div className='col-4' key={product.id}>
                <ShoesItem renderDetail={this.props.renderDetail} product={product}/>

            </div>
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className='container'>
                <div className='row'>

                    {this.renderShoes()}

                </div>
            </div>
        )
    }
}
