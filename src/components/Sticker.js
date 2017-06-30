import React, { Component } from 'react';
import Tab from './Tab'
import AddComment from './AddComment'
import Comments from './Comments'
import { PanelGroup } from 'react-bootstrap'

const Sticker = (props) => {
  const { comments, handleAddComment } = props.comments
  return (
    <div>
      <PanelGroup>
        <Tab tabName="Comments" comp={Comments} comments={comments} />
        <Tab tabName="Add comment" comp={AddComment} handleAddComment={handleAddComment} />
      </PanelGroup>
    </div>
  );
}

export default Sticker

