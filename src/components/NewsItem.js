import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imgUrl, newsUrl, author, timeStamp, source, badge } = this.props;
        return (
            <div>
                <div className="card">
                    <span className={`position-absolute top-0 start-50 translate-middle badge rounded-pill bg-${badge}`}>
                            {source}
                        </span>
                    <img src={imgUrl ? imgUrl : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Anonymous"} on {new Date(timeStamp).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-danger">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
