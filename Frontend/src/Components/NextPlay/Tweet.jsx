import React from 'react'
import "./Tweet.css";
const Tweet = ({ name, handle, time, text, likes, replies, retweets }) => {

    
        return (
          <div className="tweet-card">
            <div className="tweet-header">
              <strong>{name}</strong> <span className="handle">@{handle}</span>
              <span className="time"> · {time}</span>
            </div>
            <p className="tweet-text">{text}</p>
            <div className="tweet-actions">
              <span>❤️ {likes}</span>
              <span>💬 {replies}</span>
              <span>🔄 {retweets}</span>
            </div>
          </div>
        );
      }
 

export default Tweet;