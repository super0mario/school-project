import React from 'react';

class AddComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', comment: '' };
  }

  render() {
    const { handleAddComment, sticker } = this.props
    return (
      <div id="addComment">
        <div>
          Name:
          <input type="text" value={this.state.name}
            onChange={(event) => this.setState({ name: event.target.value })} />
        </div>
        <div>
          Comment:
          <textarea value={this.state.comment}
            onChange={(event) => this.setState({ comment: event.target.value })} />
        </div>
        <button className="btn" onClick={() => handleAddComment(this.state.name, this.state.comment, sticker.key)}>send</button>
      </div>)
  }
}

export default AddComment;

