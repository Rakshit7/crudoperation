import React from "react"
import {connect} from "react-redux"
import { DeletePost } from "../actions/actionCreator"

class AllPosts extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <div className="postBody">
                All Posts:
                <table>
                    <tr><th>Title</th>
                    <th>body</th></tr>
                {
                    this.props.posts.map((post, index)=> (
                        <tr key={index}><td>{post.title}</td><td>{post.body}</td><button>Edit</button><button onClick={()=> this.props.dispatch(DeletePost(post.id))}>Delete</button></tr>
                    ))
                }
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPosts)