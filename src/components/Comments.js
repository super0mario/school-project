import React from 'react';
import _ from 'lodash'

const Comments = ({ sticker }) => {
  console.log(sticker);

  return (
    <div>
      {_.map(sticker.comments, (comment, key) =>
        <div key={key} id="comment">
          <div id="name">{comment.name}:</div>
          <div id="data">{comment.data}</div>
          <div id="time">{comment.time}</div>
        </div>
      )}
    </div>
  );
}

export default Comments

