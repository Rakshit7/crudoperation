import React from "react"
import {connect} from "react-redux"
import { AddPost } from "../actions/actionCreator"

class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            title: "",
            body: "",
            titleError: "",
            bodyError: ""
        }
    }

    onValueChange = (e) => {
        if(e.target.value==="" && e.target.name==="title") {
            this.setState({titleError: "Please enter some value!"})
        } else if (e.target.value==="" && e.target.name==="body") {
            this.setState({bodyError: "Please enter some body!"})
        } else {
            this.setState({[e.target.name]: e.target.value, titleError: "", bodyError: ""})
        }
    }

    onValueSubmit = () => {
        let count = 0
        if (this.state.title === "") {
            this.setState({titleError: "Please enter some value!"})
            count++
        } 
        if(this.state.body === "") {
            this.setState({bodyError: "Please enter some body!"})
            count++
        }

        if (count === 0) {
            this.setState({id: this.state.id + 1})
            this.props.dispatch(AddPost(this.state))
        }
    }
    render(){
        return (
            <div>
                <input type="text" onChange={(e) => this.onValueChange(e)} placeholder="Title" name="title"/><br/>
                {this.state.titleError ? <span style={{color: "red"}}>{this.state.titleError}</span>: null}<br/>
                <textarea cols="50" rows="5" name="body" onChange={(e) => this.onValueChange(e)} placeholder="Whats in your mind"/><br/>
                {this.state.bodyError ? <span style={{color: "red"}}>{this.state.bodyError}</span>: null}
                <button onClick={(e)=>this.onValueSubmit(e)}>Add Post</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {posts: state}
}

export default connect(mapStateToProps)(CreatePost)