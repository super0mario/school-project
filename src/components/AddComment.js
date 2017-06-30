import React from 'react';

class AddComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', comment: '' };
  }

  render() {
    const { handleAddComment } = this.props.handleAddComment
    return (
      <div>
        <label>
          Name:
          <input type="text" value={this.state.name}
            onChange={(event) => this.setState({ name: event.target.value })} />
        </label>
        <label>
          Name:
          <textarea value={this.state.comment}
            onChange={(event) => this.setState({ comment: event.target.value })} />
        </label>
        <button className="btn" onClick={() => handleAddComment(this.state.name, this.state.comment)}>send</button>
      </div>)
  }
}

export default AddComment;

