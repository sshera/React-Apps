import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("LinkedIn goes live", "Top news - 9099 readers")}
            {newsArticle("Best cat treats", "Top news - 886 readers")}
            {newsArticle("Python vs. Java: which is best?", "Software & tech - 300 readers")}
            {newsArticle("Cryptocurrency crash: are you affected?", "Crypto - 8000 readers")}
            {newsArticle("COVID surges again in L.A.", "Coronavirus - 123 readers")}
            {newsArticle("What kind of cat are you?", "Quiz - 6503 readers")}
        </div>
    )
}

export default Widgets;