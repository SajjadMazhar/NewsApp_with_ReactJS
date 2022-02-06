import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imgUrl, newsUrl, author, timeStamp} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imgUrl?imgUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">By {author? author:"Anonymous"} on {timeStamp}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
