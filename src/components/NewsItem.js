import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imurl, nzirl, author, date, source,}=this.props;
    return (
      <div>
        <div className="card" >
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zindex:1 }}>
    {!source?"Newzz":source}</span>
  <img src={!imurl?"https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg":imurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}.... </h5>
   
    <p className="card-text">{!description?title:description}....</p>
    <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on {!date?"a day":new Date(date).toGMTString()}</small></p>
    <a href={nzirl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
