import React, { Component } from 'react'

export class NewsItems extends Component {


  render() {
    let {title, description, imageUrl, newsUrl}= this.props
    return (
        <div className="my-3 shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card" >
                <img src={!imageUrl?"https://bsmedia.business-standard.com/_media/bs/img/article/2023-01/13/full/1673585127-3075.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItems
