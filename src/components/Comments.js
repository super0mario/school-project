import React from 'react';
import _ from 'lodash'

const Comments = ({ sticker }) => {
  console.log(sticker);

  return (
    <div>
      {_.map(sticker.comments, (comment, key) =>
        <div key={key}>
          <div>{comment.name}</div>
          <div>{comment.data}</div>
          <div>{comment.time}</div>
        </div>
      )}
    </div>
  );
}

export default Comments

