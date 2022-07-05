import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/blog/blogpage.css";
import Button from "../components/UI/button/Button.jsx";
import Calendar from "../images/blog/latest-articles/calendar.svg";
import GreyCalendar from "../images/blog/latest-articles/greyCalendar.svg"
import Eye from "../images/blog/popular/eye.svg";
import Arrow from "../images/blog/arrow-right.svg";
import Article from "../components/blog/Article";

const Blogpage = () => {
  const [activeTitle, setActiveTitle] = useState(1)
  const [activeMost, setActiveMost] = useState(1)

  const [limitOfArticles, setLimitOfArticles] = useState(1)
  const [limitOfPopular, setLimitOfPopular] = useState(1)
  const [limitOfRecomendations, setLimitOfRecomendations] = useState(1)

  const [loadMoreArticlesButton, setLoadMoreArticlesButton] = useState(false)
  const [loadMorePopularButton, setLoadMorePopularButton] = useState(false)
  const [loadMoreRecomendationsButton, setLoadMoreRecomendationsButton] = useState(false)

  const titles = [
    {
    id: 1, 
    img: require("../images/blog/title-bg.jpg"), 
    title: "It Might Be More Affordable than You Think to Fly to Your Destination",
    subtitle: "Diam facilisi amet velit facilisi nulla sit proin eget. Fringilla proin nulla fames massa. \
              Elit enim quis iaculis sed praesent lectus...."
    },
    {
    id: 2, 
    img: require("../images/blog/title-bg.jpg"), 
    title: "This is second title",
    subtitle: "This is second subtitle"
    },
    {
    id: 3, 
    img: require("../images/blog/title-bg.jpg"), 
    title: "This is third title",
    subtitle: "This is third subtitle"
    }
  ]
  const articles = [
    [{
      id: 1,
      img: require("../images/blog/latest-articles/23092021.jpg"),
      title: "Shell unveils new sustainable aviation fuels (SAF) ambition",
      date: '23 September 2021',
      tags: ["Spirit", "News", "Aircrafts"]
    },
    {
      id: 2,
      img: require("../images/blog/latest-articles/22092021.jpg"),
      title: "Munich Airport’s brewery turns beer into a gin-style spirit",
      date: '22 September 2021',
      tags: ["Spirit", "News", "Aircrafts"]
    },
    {
      id: 3,
      img: require("../images/blog/latest-articles/20092021.jpg"),
      title: "Shell unveils new sustainable aviation fuels (SAF) ambition",
      date: '20 September 2021',
      tags: ["News", "Aircrafts"]
    },
    {
      id: 4,
      img: require("../images/blog/latest-articles/16092021.jpg"),
      title: "Transforming KIX",
      date: '16 September 2021',
      tags: ["News", "Aircrafts"]
    },
    {
      id: 5,
      img: require("../images/blog/latest-articles/10092021.jpg"),
      title: "Munich Airport’s brewery turns beer into a gin-style spirit",
      date: '10 September 2021',
      tags: ["News", "Aircrafts"]
    }],
    [{
      id: 6,
      img: require("../images/blog/latest-articles/23092021.jpg"),
      title: "Shell unveils new sustainable aviation fuels (SAF) ambition",
      date: '23 September 2021',
      tags: ["Spirit", "News", "Aircrafts"]
    },
    {
      id: 7,
      img: require("../images/blog/latest-articles/22092021.jpg"),
      title: "Munich Airport’s brewery turns beer into a gin-style spirit",
      date: '22 September 2021',
      tags: ["Spirit", "News", "Aircrafts"]
    },
    {
      id: 8,
      img: require("../images/blog/latest-articles/20092021.jpg"),
      title: "Shell unveils new sustainable aviation fuels (SAF) ambition",
      date: '20 September 2021',
      tags: ["News", "Aircrafts"]
    },
    {
      id: 9,
      img: require("../images/blog/latest-articles/16092021.jpg"),
      title: "Transforming KIX",
      date: '16 September 2021',
      tags: ["News", "Aircrafts"]
    },
    {
      id: 10,
      img: require("../images/blog/latest-articles/10092021.jpg"),
      title: "Munich Airport’s brewery turns beer into a gin-style spirit",
      date: '10 September 2021',
      tags: ["News", "Aircrafts"]
    }],
  ]
  const popular = [
    [
      {
      id: 1,
      title: "Shell unveils new sustainable aviation fuels (SAF) ambition",
      subtitle: "Diam facilisi amet velit facilisi nulla sit proin eget.\
                Fringilla proin nulla fames massa. Elit enim quis iaculis sed praesent lectus....",
      img: require("../images/blog/popular/first.jpg"),
      tags: ["News", "Aircraft", "Passengers"],
      views: 2950,
      date: "20 Sep 2021"
      },
      {
      id: 2,
      title: "Airport Health Accreditation for Greenville-Spartanburg",
      subtitle: "Diam facilisi amet velit facilisi nulla sit proin eget.\
                Fringilla proin nulla fames massa. Elit enim quis iaculis sed praesent lectus....",
      img: require("../images/blog/popular/second.jpg"),
      tags: ["News", "Aircraft", "Passengers"],
      views: 2667,
      date: "20 Sep 2021"
      },
      {
      id: 3,
      title: "KAC exporting its expertise internationally",
      subtitle: "Diam facilisi amet velit facilisi nulla sit proin eget.\
                Fringilla proin nulla fames massa. Elit enim quis iaculis sed praesent lectus....",
      img: require("../images/blog/popular/third.jpg"),
      tags: ["News", "Aircraft", "Passengers"],
      views: 2420,
      date: "20 Sep 2021"
      },
      {
      id: 4,
      title: "Whataburger to open outlet at San Antonio International...",
      subtitle: "Diam facilisi amet velit facilisi nulla sit proin eget.\
                Fringilla proin nulla fames massa. Elit enim quis iaculis sed praesent lectus....",
      img: require("../images/blog/popular/fourth.jpg"),
      tags: ["News", "Aircraft", "Passengers"],
      views: 1551,
      date: "20 Sep 2021"
      }
    ],
    [
      {
        id: 5,
        title: "Shell unveils new sustainable aviation fuels (SAF) ambition",
        subtitle: "Diam facilisi amet velit facilisi nulla sit proin eget.\
                  Fringilla proin nulla fames massa. Elit enim quis iaculis sed praesent lectus....",
        img: require("../images/blog/popular/first.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2950,
        date: "20 Sep 2021"
        },
        {
        id: 6,
        title: "Airport Health Accreditation for Greenville-Spartanburg",
        subtitle: "Diam facilisi amet velit facilisi nulla sit proin eget.\
                  Fringilla proin nulla fames massa. Elit enim quis iaculis sed praesent lectus....",
        img: require("../images/blog/popular/second.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2667,
        date: "20 Sep 2021"
        },
        {
        id: 7,
        title: "KAC exporting its expertise internationally",
        subtitle: "Diam facilisi amet velit facilisi nulla sit proin eget.\
                  Fringilla proin nulla fames massa. Elit enim quis iaculis sed praesent lectus....",
        img: require("../images/blog/popular/third.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2420,
        date: "20 Sep 2021"
        },
        {
        id: 8,
        title: "Whataburger to open outlet at San Antonio International...",
        subtitle: "Diam facilisi amet velit facilisi nulla sit proin eget.\
                  Fringilla proin nulla fames massa. Elit enim quis iaculis sed praesent lectus....",
        img: require("../images/blog/popular/fourth.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 1551,
        date: "20 Sep 2021"
        }
    ]
  ]
  const mostViewed = [
    [
    {
      id: 1,
      title: "COVID safety audit praises Aberdeen and Glasgow airports",
      date: "20 September 2021"
    },
    {
      id: 2,
      title: "Helsinki’s “magnificent” new entrance to T2 to open on December ",
      date: "20 September 2021"
    },
    {
      id: 3,
      title: "Helsinki’s “magnificent” new entrance to T2 to open on December ",
      date: "20 September 2021"
    },
    {
      id: 4,
      title: "COVID safety audit praises Aberdeen and Glasgow airports",
      date: "20 September 2021"
    }
    ],
    [
      {
      id: 5,
      title: "COVID safety audit praises Aberdeen and Glasgow airports",
      date: "21 September 2021"
    },
    {
      id: 6,
      title: "Helsinki’s “magnificent” new entrance to T2 to open on December ",
      date: "21 September 2021"
    },
    {
      id: 7,
      title: "Helsinki’s “magnificent” new entrance to T2 to open on December ",
      date: "21 September 2021"
    },
    {
      id: 8,
      title: "COVID safety audit praises Aberdeen and Glasgow airports",
      date: "21 September 2021"
    }
    ],
    [
      {
      id: 9,
      title: "COVID safety audit praises Aberdeen and Glasgow airports",
      date: "23 September 2021"
    },
    {
      id: 10,
      title: "Helsinki’s “magnificent” new entrance to T2 to open on December ",
      date: "23 September 2021"
    },
    {
      id: 11,
      title: "Helsinki’s “magnificent” new entrance to T2 to open on December ",
      date: "23 September 2021"
    },
    {
      id: 12,
      title: "COVID safety audit praises Aberdeen and Glasgow airports",
      date: "23 September 2021"
    }
    ]
  ]
  const recomendations = [
    [
      {
        id: 1,
        title: "Non sagittis, faucibus eu rhoncus vitae. Pretium, molestie lacus, magna duis enim",
        subtitle: "Faucibus magna aliquam risus blandit lectus libero, purus tortor porttitor.\
                  In dictum bibendum eget eget at non cursus porttitor tristique.",
        img: require("../images/blog/recomendations/first.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      },
      {
        id: 2,
        title: "Leo eget proin rhoncus, et. Mauris morbi eget convallis felis curabitur lorem.",
        subtitle: "Mauris sit donec pulvinar pretium congue sagittis. \
                  Habitant tortor enim leo nulla hac arcu aliquam. Scelerisque tincidunt posuere tellus erat at.",
        img: require("../images/blog/recomendations/second.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      },
      {
        id: 3,
        title: "Dictumst eget tellus faucibus nisl mi. At egestas sagittis egestas vitae, sed.",
        subtitle: "Molestie neque, at massa elit vulputate. Eleifend urna sed consectetur iaculis. \
                  Volutpat placerat mus id ultricies magna malesuada vel accumsan sit.",
        img: require("../images/blog/recomendations/third.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      },
      {
        id: 4,
        title: "Enim interdum odio senectus risus amet, senectus. A dui vitae, malesuada ut dui.",
        subtitle: "Et eget auctor ridiculus mauris. Quis cursus urna fermentum pretium pellentesque lorem. \
                  Nulla nunc tincidunt nisi, viverra ornare tellus eget viverra.",
        img: require("../images/blog/recomendations/fourth.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      },
      {
        id: 5,
        title: "Tellus ac tempor interdum aliquam, mauris. Massa diam quam dui facilisi.",
        subtitle: "Auctor cursus tellus volutpat sit diam egestas eu. \
                  Eget sit velit feugiat tempus lobortis eu mi. Rhoncus congue suspendisse leo, tempus neque semper et arcu.",
        img: require("../images/blog/recomendations/fifth.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      },
      {
        id: 6,
        title: "Feugiat etiam ornare eleifend dignissim dolor. Nisl vitae scelerisque nibh sit.",
        subtitle: "Facilisis egestas etiam pellentesque dictum vestibulum feugiat. \
                  Hac dolor egestas facilisis suspendisse sed aliquet id semper ut.",
        img: require("../images/blog/recomendations/sixth.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      }
    ],
    [
      {
        id: 7,
        title: "Non sagittis, faucibus eu rhoncus vitae. Pretium, molestie lacus, magna duis enim",
        subtitle: "Faucibus magna aliquam risus blandit lectus libero, purus tortor porttitor.\
                  In dictum bibendum eget eget at non cursus porttitor tristique.",
        img: require("../images/blog/recomendations/first.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      },
      {
        id: 8,
        title: "Leo eget proin rhoncus, et. Mauris morbi eget convallis felis curabitur lorem.",
        subtitle: "Mauris sit donec pulvinar pretium congue sagittis. \
                  Habitant tortor enim leo nulla hac arcu aliquam. Scelerisque tincidunt posuere tellus erat at.",
        img: require("../images/blog/recomendations/second.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      },
      {
        id: 9,
        title: "Dictumst eget tellus faucibus nisl mi. At egestas sagittis egestas vitae, sed.",
        subtitle: "Molestie neque, at massa elit vulputate. Eleifend urna sed consectetur iaculis. \
                  Volutpat placerat mus id ultricies magna malesuada vel accumsan sit.",
        img: require("../images/blog/recomendations/third.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      },
      {
        id: 10,
        title: "Enim interdum odio senectus risus amet, senectus. A dui vitae, malesuada ut dui.",
        subtitle: "Et eget auctor ridiculus mauris. Quis cursus urna fermentum pretium pellentesque lorem. \
                  Nulla nunc tincidunt nisi, viverra ornare tellus eget viverra.",
        img: require("../images/blog/recomendations/fourth.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      },
      {
        id: 11,
        title: "Tellus ac tempor interdum aliquam, mauris. Massa diam quam dui facilisi.",
        subtitle: "Auctor cursus tellus volutpat sit diam egestas eu. \
                  Eget sit velit feugiat tempus lobortis eu mi. Rhoncus congue suspendisse leo, tempus neque semper et arcu.",
        img: require("../images/blog/recomendations/fifth.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      },
      {
        id: 12,
        title: "Feugiat etiam ornare eleifend dignissim dolor. Nisl vitae scelerisque nibh sit.",
        subtitle: "Facilisis egestas etiam pellentesque dictum vestibulum feugiat. \
                  Hac dolor egestas facilisis suspendisse sed aliquet id semper ut.",
        img: require("../images/blog/recomendations/sixth.jpg"),
        tags: ["News", "Aircraft", "Passengers"],
        views: 2648,
        date: "20 Sep 2021"
      }
    ]
  ]

  const titleToShow = titles.slice((activeTitle - 1), activeTitle)
  const articlesSlicing = articles.slice(0, limitOfArticles)
  const popularSlicing = popular.slice(0, limitOfPopular)
  const mostViewedSlicing = mostViewed.slice((activeMost - 1), activeMost)
  const recomendationsSlicing = recomendations.slice(0, limitOfRecomendations)

  const loadMoreArticles = () => {
    setLimitOfArticles(limitOfArticles + 1)
  }
  const loadMorePopular = () => {
    setLimitOfPopular(limitOfPopular + 1)
  }
  const loadMoreRecomendations = () => {
    setLimitOfRecomendations(limitOfRecomendations + 1)
  }

  useEffect(() => 
  {
    {limitOfArticles == articles.length ? setLoadMoreArticlesButton(true) : setLoadMoreArticlesButton(false)}
    {limitOfPopular == popular.length ? setLoadMorePopularButton(true) : setLoadMorePopularButton(false)}
    {limitOfRecomendations == recomendations.length ? setLoadMoreRecomendationsButton(true) : setLoadMoreRecomendationsButton(false)}
  },
  [
    limitOfArticles, articlesSlicing, 
    limitOfPopular, popularSlicing,
    limitOfRecomendations, recomendationsSlicing
  ]
  )

  return(
    <div className="blog">
      <div className="wrapper">

        <section className="blog__title">

          {titleToShow.map(title => 
            <div key={title.id} className="blog__title-content">
              <img src={title.img} alt="" />
              <h1>{title.title}</h1>
              <h4>{title.subtitle}</h4>
            </div>
          )}
          
          <div className="blog__title-slider">
            {titles.map(button =>
              <button 
                key={button.id} 
                className={button.id == activeTitle ? "blog__title-slider-button _active" : "blog__title-slider-button"}
                type="button"
                onClick={() =>setActiveTitle(button.id)}
              >
              </button>)}
          </div>
          
        </section>
        
        <section className="blog__latest-articles">
            <h1>Latest articles</h1>
            {articlesSlicing.map((arr,index) =>
              <div
                key={index}
                className="blog__latest-articles-content">

                {arr.map(article =>
                <Link
                  to={`/blog/${article.id}`}
                  key={article.id} 
                  className="blog__latest-articles-item"
                > 
                  <img src={article.img} alt="" />
                  <h3>{article.title}</h3>
                  <div className="blog-latest-articles-item-footer">

                    <div className="blog__latest-articles-item-date">
                      <img src={Calendar} alt="" />
                      <span>{article.date}</span>
                    </div>

                    <div className="blog__latest-articles-item-tags">
                      {article.tags.map(tag => 
                      <span
                        key={tag}
                        className="blog__latest-articles-item-tag">{tag}</span>
                      )}
                    </div>

                  </div>
                  
                </Link>
                )}

              </div>
            )}
            
          
            <Button
              disabled={loadMoreArticlesButton}
              type="button"
              text="Load More"
              className="UI__load-more-button"
              onClick={loadMoreArticles}
            />
        </section>
        
        <section className="blog__popular">
          <h1>Popular topics</h1>
          {popularSlicing.map((arr,index) =>
            <div
              key={index}
              className="blog__popular-content"
            >
              {arr.map(topic =>
                <Link
                  key={topic.id}
                  to={`/${topic.id}`}
                  className="blog__popular-item"
                >
                  <div className="blog__popular-item-header">
                    <img src={topic.img} alt="" />
                    <div className="blog__popular-item-date">
                      <img src={Calendar} alt="" />
                      <span>{topic.date}</span>
                    </div>
                    <div className="blog__popular-item-views">
                      <img src={Eye} alt="" />
                      <span>{topic.views}</span>
                    </div>
                  </div>
                  <div className="blog__popular-item-tags">
                    {topic.tags.map(tag =>
                      <span
                        key={tag}
                        className="blog__popular-item-tag"
                      >{tag}
                      </span>
                      )}
                  </div>
                  <div className="blog__popular-item-text">
                    <h3>{topic.title}</h3>
                    <h5>{topic.subtitle}</h5>
                  </div>
                </Link>
                )}
            </div>
          )}


          <Button
              disabled={loadMorePopularButton}
              type="button"
              text="Load More"
              className="UI__load-more-button"
              onClick={loadMorePopular}
            />
        </section>
        
        <section className="blog__most-viewed">
          <h1>Most viewed</h1>
          {mostViewedSlicing.map((arr,index) =>
            <div
              key={index} 
              className="blog__most-viewed-content"
            >
              {arr.map( item =>  
                <div
                  key={item.id}
                  className="blog__most-viewed-item"
                >
                  <h3>{item.title}</h3>
                  <div className="blog__most-viewed-item-footer">
                    <div className="blog__most-viewed-item-date">
                      <img src={GreyCalendar} alt="" />
                      <span>{item.date}</span>
                    </div>
                    <Link
                      to={`#${item.id}`}
                      className="blog__most-viewed-item-link"
                      >
                      <img src={Arrow} alt="" />
                    </Link>
                  </div>
                </div>
              )}
            </div>  
          )}
          <div className="blog__most-viewed-slider">
            {mostViewed.map((button, index) =>
              <button 
                key={index} 
                className={(index + 1) == activeMost ? "blog__most-viewed-slider-button _active" : "blog__most-viewed-slider-button"}
                type="button"
                onClick={() =>setActiveMost(index + 1)}
              >
              </button>)}
          </div>
        </section>
        
        <section className="blog__recomendations">
          <h1>AT.Flight Recomended for you</h1>
          {recomendationsSlicing.map((arr,index) =>
            <div
              key={index}
              className="blog__recomendations-content"
            >
              {arr.map(topic =>
                <Link
                  key={topic.id}
                  to={`/${topic.id}`}
                  className="blog__recomendations-item"
                >
                  <div className="blog__recomendations-item-header">
                    <img src={topic.img} alt="" />
                    <div className="blog__recomendations-item-date">
                      <img src={Calendar} alt="" />
                      <span>{topic.date}</span>
                    </div>
                    <div className="blog__recomendations-item-views">
                      <img src={Eye} alt="" />
                      <span>{topic.views}</span>
                    </div>
                  </div>
                  <div className="blog__recomendations-item-tags">
                    {topic.tags.map(tag =>
                      <span
                        key={tag}
                        className="blog__recomendations-item-tag"
                      >{tag}
                      </span>
                      )}
                  </div>
                  <div className="blog__recomendations-item-text">
                    <h3>{topic.title}</h3>
                    <h5>{topic.subtitle}</h5>
                  </div>
                </Link>
                )}
            </div>
          )}
          <Button
              disabled={loadMoreRecomendationsButton}
              type="button"
              text="Load More"
              className="UI__load-more-button"
              onClick={loadMoreRecomendations}
            />
        </section>

      </div>
    </div>
  )

}


export default Blogpage