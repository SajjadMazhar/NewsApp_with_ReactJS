import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
    static defaultProps = {
        country:"in",
        pageSize:6,
        category:'general'
    }
    static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    constructor(){
        super();
        console.log("cons from news")
        this.state = {
            articles:[],
            loading:false,
            page:1
        }
    }

    // this function works as soon as the page loads
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34064a34625f4e8188a398ba7d829319&page=1&pagesize=6`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page:1,
            articles:parsedData.articles,
            loading:false
        })
    }
    handleNextClick = async ()=>{
        try{
            if(this.state.page + 1 > Math.ceil(this.state.totalResults/38)){

            }else{
                let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34064a34625f4e8188a398ba7d829319&page=${this.state.page +1}&pagesize=6`;
                this.setState({loading:true})
                let data = await fetch(url);
                let parsedData = await data.json();
                this.setState({
                    page:this.state.page +1,
                    articles:parsedData.articles,
                    loading:false
                })
                console.log(this.state.articles)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    handlePreviousClick = async()=>{
        try{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34064a34625f4e8188a398ba7d829319&page=${this.state.page -1}&pagesize=6`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page:this.state.page -1,
                articles:parsedData.articles,
                totalResults:parsedData.totalResults,
                loading:false
            })
            console.log(this.state.articles)
        }catch(err){
            console.log(err.message)
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Top News - Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                {!this.state.loading && this.state.articles.map((elem)=>{
                    return <div className='col-md-4 my-4' key={elem.url}>
                    <NewsItem title={elem.title?elem.title.slice(0, 45):""} description={elem.description?elem.description.slice(0,50):""} imgUrl={elem.urlToImage} newsUrl = {elem.url} author={elem.author} timeStamp={elem.publishedAt}/>
                </div>
                })}  <div id="root"></div>
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page<=1} onClick={this.handlePreviousClick} type='button' className='btn btn-dark'>&larr; Previous</button>
                    <button onClick={this.handleNextClick} type='button' className='btn btn-dark'>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
