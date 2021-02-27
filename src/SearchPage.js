import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { Link, useHistory } from "react-router-dom";
import Search from "./Search";
import { UseStateValue } from "./StateProvider";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CircularProgress from "@material-ui/core/CircularProgress";

function SearchPage() {
  const history = useHistory();
  const [{ term }] = UseStateValue();
  const context_key = "3b4d2bf401cba80a4";
  const api_key = "AIzaSyAtk-o3fs4BkMS-E9bkNLnHAqcF45YFSdY";
  const fetchURL = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${context_key}&q=${term}`;

  const getItems = () => fetch(fetchURL).then((res) => res.json());

  const [items, setItems] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    getItems().then((data) => setItems(data));
    getItems().catch((err) => alert(err.message));
    getItems().catch((err) => setError(err.message));
  }, [term]);

  setTimeout(() => {
    if (error) {
      history.push("/");
    }
  }, 1000);

  return (
    <div className="searchPage">
      <div className="searchPageHeader">
        <div className="searchPageHeaderImgBox">
          <Link to="/">
            <img
              className="searchPageHeaderImg"
              src="img/1920px-Google_2015_logo.svg.png"
              alt="googl-image-logo"
            />
          </Link>
        </div>
        <div className="searchPageHeaderBody">
          <Search HideButton />

          <div className="searchPageOptions">
            <div className="searchPageOptionsLeft">
              <div className="searchPageOption">
                <SearchIcon />
                <Link to="/">All</Link>
              </div>
              <div className="searchPageOption">
                <DescriptionIcon />
                <Link to="/">News</Link>
              </div>
              <div className="searchPageOption">
                <ImageIcon />
                <Link to="/">Images</Link>
              </div>
              <div className="searchPageOption">
                <LocalOfferIcon />
                <Link to="/">Shopping</Link>
              </div>
              <div className="searchPageOption">
                <RoomIcon />
                <Link to="/">Maps</Link>
              </div>
              <div className="searchPageOption">
                <MoreVertIcon />
                <Link to="/">More</Link>
              </div>
            </div>
            <div className="searchPageOptionsRight">
              <div className="searchPageOption">
                <Link className="Settings" to="/">
                  Settings
                </Link>
              </div>
              <div className="searchPageOption">
                <Link className="Tools" to="/">
                  Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="searchPageResults">
        {items ? (
          items.items.map((item) => {
            return (
              <div key={item.id}>
                <div className="searchPageResult">
                  <a className="itemLink" href={item.link}>
                    <span>{item.displayLink}</span> <ArrowDropDownIcon />
                  </a>

                  <a href={item.link} className="searchPageResultTitle">
                    <h2>{item.title}</h2>
                  </a>

                  <p className="searchPageResultSnippet">{item.snippet}</p>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <div className="searchPageResultSpinner">
              <CircularProgress /> <span>Connecting...</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
