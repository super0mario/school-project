import React, { Component } from 'react';
import Tab from './Tab'
import AddComment from './AddComment'
import Comments from './Comments'
import { PanelGroup } from 'react-bootstrap'

const Sticker = ({ sticker, handleAddComment }) => {
  // console.log(sticker);

  return (
    <div>
      <PanelGroup>
        <Tab tabName="Comments" Comp={Comments} sticker={sticker} />
        <Tab tabName="Add comment" Comp={AddComment} handleAddComment={handleAddComment} sticker={sticker} />
      </PanelGroup>
    </div>
  );
}

export default Sticker

