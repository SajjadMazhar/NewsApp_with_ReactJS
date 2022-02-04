import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Ukraine tensions: US trying to draw Russia into war says Putin - BBC News",
            "description": "Russia's president makes a stinging attack on the US and Nato as tension continues over Ukraine.",
            "url": "https://www.bbc.com/news/world-europe-60220702",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F526/production/_123085726_mediaitem123085725.jpg",
            "publishedAt": "2022-02-02T02:00:09Z",
            "content": "Image caption, Mr Putin was speaking after talks with Hungarian Prime Minister Viktor Orban in Moscow\r\nRussia's President Vladimir Putin has accused the US of trying to draw his country into a war in… [+3495 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nathan Hodge, Uliana Pavlova and Darya Tarasova, CNN",
            "title": "Vladimir Putin says the West has 'ignored' Russia's key concerns over Ukraine - CNN",
            "description": "Russian President Vladimir Putin said Tuesday that his government was studying the responses from the United States and NATO to his security demands related to Ukraine but that it was clear the Kremlin's main complaints \"had been ignored.\"",
            "url": "https://www.cnn.com/2022/02/01/europe/vladimir-putin-west-ignored-russia-concerns-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220201131843-03-putin-orban-020122-super-tease.jpg",
            "publishedAt": "2022-02-02T01:55:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "KARE11.com"
            },
            "author": "Bill Strande",
            "title": "1 student dead, another critically wounded in shooting outside Richfield school; 2 arrested - KARE11.com",
            "description": "Squads from multiple departments were dispatched to the South Education Center just after noon on reports of a shooting with injuries.",
            "url": "https://www.kare11.com/article/news/local/1-student-killed-another-injured-shooting-outside-richfield-school/89-3e77b3ca-ed16-4ae7-8661-751be3ab661d",
            "urlToImage": "https://media.kare11.com/assets/KARE/images/d151dffe-0f2b-42a7-80a3-3afc05c95290/d151dffe-0f2b-42a7-80a3-3afc05c95290_1140x641.jpg",
            "publishedAt": "2022-02-02T01:52:30Z",
            "content": "RICHFIELD, Minn. One student is dead and another is in critical condition after a shooting outside a school in Richfield Tuesday.\r\nAt a news conference Tuesday afternoon, Richfield Police Chief Jay H… [+9040 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Kevin Dotson, CNN",
            "title": "Former Miami Dolphins coach Brian Flores sues NFL and 3 NFL teams alleging racial discrimination - CNN",
            "description": "Brian Flores, the former head coach of the Miami Dolphins, filed a lawsuit Tuesday against the NFL, the New York Giants, the Denver Broncos and the Miami Dolphins organizations alleging racial discrimination.",
            "url": "https://www.cnn.com/2022/02/01/sport/brian-flores-lawsuit-nfl-racial-discrimination-spt/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220201164756-brian-flores-file-restricted-super-tease.jpg",
            "publishedAt": "2022-02-02T01:52:00Z",
            "content": "Programming note:Watch CNN's interview with Brian Flores on \"New Day\" on Wednesday, February 2, at 8 a.m. ET.\r\n (CNN)Brian Flores, the former head coach of the Miami Dolphins, filed a lawsuit Tuesday… [+7260 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Ben Shpigel",
            "title": "Tom Brady, 7-Time Super Bowl Champion, Retires After 22 Seasons - The New York Times",
            "description": "Brady walked away from professional football after a generation in which he and his teams redefined the N.F.L.’s notions of reliability, consistency and success.",
            "url": "https://www.nytimes.com/live/2022/02/01/sports/tom-brady-retires",
            "urlToImage": "https://static01.nyt.com/images/2022/02/01/sports/01brady-header-promo/01brady-header-promo-facebookJumbo.jpg",
            "publishedAt": "2022-02-02T01:38:32Z",
            "content": "Brady after beating the St. Louis Rams in Super Bowl XXXVI.Credit... Mike Segar/Reuters\r\nNot surprisingly, Tom Bradys time in the N.F.L. spotlight had an almost fairy-tale, prescient beginning. In a … [+2320 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kotaku"
            },
            "author": "Ian Walker",
            "title": "Resident Evil 4 HD Mod, Out Now After 8 Years In Development, Looks Amazing - Kotaku",
            "description": "Capcom’s undying GameCube classic gets its greatest graphics overhaul ever thanks to two dedicated fans",
            "url": "https://kotaku.com/resident-evil-4-capcom-gamecube-steam-pc-mod-hd-remake-1848464090",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c9a70fb3bfbd9cd31f3330fbf937cff8.jpg",
            "publishedAt": "2022-02-02T01:25:00Z",
            "content": "Resident Evil 4, inarguably one of the greatest games of all time, is now playable with full high-definition textures, enhanced 3D models, and revamped lighting courtesy of the Resident Evil 4 HD Pro… [+3645 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Scott Nover",
            "title": "Google is outdoing Apple and Tesla with a 20-for-1 stock split - Quartz",
            "description": "Based on current prices, the split will lower the cost of a Google shares to under $150 per share, down from $2,700.",
            "url": "https://qz.com/2120990/google-is-outdoing-apple-and-tesla-with-a-20-for-1-stock-split/",
            "urlToImage": "https://cms.qz.com/wp-content/uploads/2022/02/2019-01-18T130518Z_489220944_RC1CD079D0A0_RTRMADP_3_BRITAIN-GOOGLE-e1643760556316.jpg?quality=75&strip=all&w=1200&h=630&crop=1",
            "publishedAt": "2022-02-02T00:47:41Z",
            "content": "Alphabet, the parent company of Google, announced a 20-for-1 stock split along with its quarterly earnings report (pdf) on Feb. 1. Its only the second split for the stock since it went public in 2004… [+1413 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Luján stroke sends Senate Democrats reeling - POLITICO - POLITICO",
            "description": "While the 49-year-old New Mexico Democrat is expected to make a full recovery, Democrats lose their working majority in his absence.",
            "url": "https://www.politico.com/news/2022/02/01/democratic-senate-reels-after-lujan-stroke-00004432",
            "urlToImage": "https://static.politico.com/46/9a/2e35368b4ea98cea1960ce66783f/190222-ben-ray-lujan-politico-773.jpg",
            "publishedAt": "2022-02-02T00:20:21Z",
            "content": "Senate Majority Leader Chuck Schumer said Tuesday evening that Democrats are grateful that Luján will make a full recovery and that he looks forward to his return to the Senate. He predicted that the… [+3258 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Microsoft-Activision Blizzard Deal Will Be Investigated By the FTC - IGN Now - IGN",
            "description": "The US Federal Trade Commission (FTC) will reportedly be taking the reins on reviewing Microsoft's intended acquisition of Activision Blizzard - amid a more ...",
            "url": "https://www.youtube.com/watch?v=TzbVh4SvfQ8",
            "urlToImage": "https://i.ytimg.com/vi/TzbVh4SvfQ8/hqdefault.jpg",
            "publishedAt": "2022-02-02T00:08:42Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Lost Coast Outpost"
            },
            "author": null,
            "title": "COVID-19 Statistics | Feb. 1, 2022 - Lost Coast Outpost",
            "description": "COVID-19 Daily Report for Humboldt County, Feb. 1, 2022",
            "url": "https://lostcoastoutpost.com/covid-report/2022/feb/1/",
            "urlToImage": "https://lostcoastoutpost.com/media/uploads/flatpage/106/cov.jpg",
            "publishedAt": "2022-02-01T23:30:51Z",
            "content": "Humboldt County Public Health reported today the death of a resident in their 70s due to COVID-19. Staff in the Department Operations Center extend their condolences to all who have lost a loved one … [+5813 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "GOP to Tucker Carlson: We're the decision-makers on Ukraine, not you - POLITICO",
            "description": "“He’s obviously not in a position of being responsible for those decisions. And we are,” said Sen. John Cornyn.",
            "url": "https://www.politico.com/news/2022/02/01/gop-tucker-carlson-ukraine-00004370",
            "urlToImage": "https://static.politico.com/71/ce/2d08d7db47bcae467097be520f68/gettyimages-1139127493.jpg",
            "publishedAt": "2022-02-01T23:03:38Z",
            "content": "In recent days, Carlson has attacked Republicans who are pushing for a stronger response to Moscows aggression slamming Sen. Joni Ernst (R-Iowa) as ignorant and Sen. Jim Risch (R-Idaho) as a moron ma… [+6431 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MLB Trade Rumors"
            },
            "author": "Anthony Franco",
            "title": "MLBPA Drops Proposed Bonus Pool Allotment From $105MM To $100MM - MLB Trade Rumors",
            "description": "There was another round of collective bargaining negotiations this afternoon, at which the Major League Baseball Players Association made its &hellip;",
            "url": "https://www.mlbtraderumors.com/2022/02/mlbpa-drops-proposed-bonus-pool-allotment-from-105mm-to-100mm.html",
            "urlToImage": "https://cdn.mlbtraderumors.com/files/2016/02/USATSI_8717732-1024x758.jpg",
            "publishedAt": "2022-02-01T22:55:14Z",
            "content": "There was another round of collective bargaining negotiations this afternoon, at which the Major League Baseball Players Association made its latest proposal. According to various reports, the union … [+4097 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Mack DeGeurin",
            "title": "Here’s How to Save Wordle in Its Pure, Pre-NYT Form - Gizmodo",
            "description": "Users can save Wordle as an HTML file and play the game offline for over 2,000 days.",
            "url": "https://gizmodo.com/how-to-play-the-original-wordle-offline-1848463004",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cb74dde5643d5024ef05a9f0189b6058.jpg",
            "publishedAt": "2022-02-01T22:40:00Z",
            "content": "Users lamenting online word game Wordles decision to sell out to The New York Times this week may have at least one way to preserve the original games free, anti-money leaching spirit. Since Wordle r… [+3732 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Alan Rappeport",
            "title": "U.S. National Debt Tops $30 Trillion as Borrowing Surged Amid Pandemic - The New York Times",
            "description": "The record red ink, fueled by spending to combat the coronavirus, comes as interest rates are expected to rise, which could add to America’s costs.",
            "url": "https://www.nytimes.com/2022/02/01/us/politics/national-debt-30-trillion.html",
            "urlToImage": "https://static01.nyt.com/images/2022/02/01/business/00dc-debt1/00dc-debt1-facebookJumbo.jpg",
            "publishedAt": "2022-02-01T22:19:06Z",
            "content": "The Fed has also been keeping long-term interest rates low by buying government-backed debt and holding those securities on its balance sheet. Those purchases are set to wrap up next month, and last … [+2808 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Caroll Alvarado, CNN",
            "title": "Two officers shot in active shooter incident at Bridgewater College - CNN",
            "description": "Two officers have been shot in an active shooter incident at Bridgewater College, Virginia State Police tweeted.",
            "url": "https://www.cnn.com/2022/02/01/us/bridgewater-college-active-shooter-reports/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220201143215-01-bridgewater-college-super-tease.jpg",
            "publishedAt": "2022-02-01T22:14:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "KTVI Fox 2 St. Louis"
            },
            "author": "Joe Millitzer, Associated Press",
            "title": "School closings, canceled flights, and more Midwest winter storm disruptions - KTVI Fox 2 St. Louis",
            "description": "Many St. Louis area schools have already canceled classes for Wednesday and Thursday. Others have decided to go remote and hold virtual classes this week.",
            "url": "https://fox2now.com/news/missouri/school-closings-canceled-flights-and-more-midwest-winter-storm-disruptions/",
            "urlToImage": "https://fox2now.com/wp-content/uploads/sites/14/2022/02/GettyImages-89315066.jpg?w=1280",
            "publishedAt": "2022-02-01T22:02:48Z",
            "content": "ST. LOUIS, Mo. – A huge swath of the U.S. braced Tuesday for a major winter storm that was expected to dump heavy snow in the Rockies, ice highways, disrupt travel across the Midwest, and plunge temp… [+2612 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Vivien Lou Chen",
            "title": "As Fed sets stage for March rate hike, stock-market investors face 'perilous' backdrop of higher volatility - MarketWatch",
            "description": "Investors, particularly those reliant on computer-generated decisions to buy or sell, face a dangerous backdrop of volatility driven by the Federal Reserve.",
            "url": "https://www.marketwatch.com/story/as-fed-sets-stage-for-march-rate-hike-stock-market-investors-face-perilous-backdrop-of-higher-volatility-11643752475",
            "urlToImage": "https://images.mktw.net/im-478172/social",
            "publishedAt": "2022-02-01T21:54:00Z",
            "content": "Investors, particularly those reliant on computer-generated decisions to buy or sell, face a treacherous backdrop of volatility driven by the Federal Reserve, following a brutal month of stock tradin… [+4909 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "John Bowden",
            "title": "White House urges Spotify to take further action on Joe Rogan: ‘More can be done’ - The Independent",
            "description": "Psaki says Spotify disclaimer is welcome, but platform could actually fight misinformation",
            "url": "https://www.independent.co.uk/news/world/americas/us-politics/joe-rogan-spotify-covid-white-house-b2005488.html",
            "urlToImage": "https://static.independent.co.uk/2022/02/01/20/GettyImages-975449576.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2022-02-01T21:37:24Z",
            "content": "White House press secretary Jen Psaki called on music and podcast streaming giant Spotify to do more in the fight against Covid-19 misinformation on Tuesday.\r\nAt her daily press briefing, President J… [+3393 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "John Wagner, Josh Dawsey, Felicia Sonmez",
            "title": "Trump says congressional investigators should examine why Pence didn't reject electoral college results - The Washington Post",
            "description": "The former president says the committee investigating the Jan. 6, 2021, insurrection should instead focus on his former vice president's role that day.",
            "url": "https://www.washingtonpost.com/politics/2022/02/01/trump-says-congress-investigate-pence/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7GB6X2XTQVHJTNJGPUNCNAJBME.jpg&w=1440",
            "publishedAt": "2022-02-01T21:35:41Z",
            "content": "In a fresh statement Tuesday, Trump offered a more nuanced take on what he would have liked to have seen from Pence, saying he could have sent the votes back to various legislators for reassessment a… [+3962 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Bryan Mena",
            "title": "U.S. Job Openings, Quits Remained Elevated at End of Last Year - The Wall Street Journal",
            "description": "Private-sector data for January showed early signs of a pullback in demand for workers",
            "url": "https://www.wsj.com/articles/job-openings-us-growth-labor-market-turnover-02-01-2022-11643670099",
            "urlToImage": "https://images.wsj.net/im-477319/social",
            "publishedAt": "2022-02-01T21:35:00Z",
            "content": "The U.S. labor market remained tight at the end of last year with job openings and worker turnover hovering near the highest levels on record, though there are signs demand cooled as the Omicron vari… [+5171 chars]"
        }
    ]
    constructor(){
        super();
        console.log("cons from news")
        this.state = {
            articles:this.articles,
            loading:false
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Top News - Headlines</h2>
                <div className='row'>
                {this.state.articles.map((elem)=>{
                    return <div className='col-md-4 my-4' key={elem.url}>
                    <NewsItem title={elem.title.slice(0, 45)} description={elem.description.slice(0,50)} imgUrl={elem.urlToImage} newsUrl = {elem.url}/>
                </div>
                })} 
                </div>

            </div>
        )
    }
}

export default News
