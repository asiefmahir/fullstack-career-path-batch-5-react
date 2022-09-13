import React, { Component } from 'react';
import withFetch from '../hoc/withFetch';

class Posts extends Component {
  render() {
    return (
      <div>
            <h2>
                I am Posts
            </h2>
            <ul>
                {this.props.data?.map(item => (
                    <li key = {item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
      </div>
    )
  }
}

export default withFetch(Posts, `http://jsonplaceholder.typicode.com/posts`, [])
