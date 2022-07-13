import React from "react";
import { Card, CardContent } from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import moment from "moment";

import "./Tweet.css";

export default function Tweet(props) {
  const {
    tweet: { name, tweet, time },
    index,
    deleteTweet,
  } = props;
  return (
    <Card className="tweet">
      <CardContent>
        <div className="tweet_header">
          <h3>{name}</h3>
          <DeleteTwoToneIcon onClick={() => deleteTweet(index)} />
        </div>
        <p>{tweet}</p>
        <div className="tweet_date-add-tweet">
          {moment(time).format("DD/MM/YYYY  HH:mm")}
        </div>
      </CardContent>
    </Card>
  );
}
