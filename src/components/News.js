import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Load from './Load'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
      country:'in',
      category:'general',
      pageSize:5
    }
    static propTypes={
      country:PropTypes.string,
      category:PropTypes.string,
      pageSize:PropTypes.number
    }
    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1
        }
        document.title=`Newzz-${this.props.category[0].toUpperCase()+this.props.category.substring(1)}`;
    }
    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7fa2a5b424124eba8558f2663a954bb0&pageSize=6`;

      this.setState({loading:true})
      let data= await fetch(url);
      let parsdata=await data.json()
      this.setState({articles:parsdata.articles, 
        totalresults:parsdata.totalResults,
          loading: false});
    }
    prev=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7fa2a5b424124eba8558f2663a954bb0&page=${this.state.page-1}&pageSize=6`;
        this.setState({loading:true})
        let data= await fetch(url);
        let parsdata=await data.json()
          this.setState({
              page:this.state.page-1,
              articles:parsdata.articles,
              loading:false
          })
    }
    next=async()=>{
         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7fa2a5b424124eba8558f2663a954bb0&page=${this.state.page+1}&pageSize=6`;
         this.setState({loading:true})
      let data= await fetch(url);
      let parsdata=await data.json()
        this.setState({
            page:this.state.page+1,
            articles:parsdata.articles,
            loading:false
        })
    }
  render() {
    document.body.style.backgroundImage = 'url(https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg)'
    return (
      <div className="container my-3 text-center">
        <h1 style={{margin:'70px', color:'lavender'}} >Newzz-Top {this.props.category[0].toUpperCase()+this.props.category.substring(1)} Headlines</h1>
        {this.state.loading&&<Load/>}
        <div className="row my-4">
        {!this.state.loading&&this.state.articles?.map((element)=>{
                return <div className="col-md-4 my-3" key={element.url}>
                 <NewsItem title={element.title?element.title.slice(0,45):""} description= {element.description?element.description.slice(0,80):""} imurl={element.urlToImage} nzirl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                 </div>
        })}
        </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.prev}>&laquo;Previous</button>
          <button disabled={this.state.page===Math.ceil(this.state.totalresults/6)}type="button" class="btn btn-dark" onClick={this.next}>Next&raquo;</button>
          </div>
      </div>
    )
  }
}

export default News
