import React, { Component } from 'react'

export default class ShoesItem extends Component {
  render() {
    console.log("props của producItem",this.props);
    let {name, image,price}= this.props.product;
    return (
      <div>
        <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <button onClick={() => {

                            this.props.renderDetail(this.props.product);

                        }} data-toggle="modal" data-target="#exampleModal" type='button' className='btn btn-success'>Xem chi tiết</button>
                    </div>
                </div>
      </div>
    )
  }
}
