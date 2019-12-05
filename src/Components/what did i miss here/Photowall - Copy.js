import React, {Component} from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
//anchor tag, href attribute
function Photowall(props) {
    return  <div>
                <Link className = "addIcon" to="/AddPhoto">  </Link>
                <div className="photoGrid"> 
                    {props.posts
                        .sort(function(x,y) {
                            return x.id - y.id
                        }) 
                        .map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
                </div>
            </div>
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

// class Photowall extends Component {
//     render() {
//         return <div className="photoGrid"> 
//                     {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
//                 </div>
//     }
// }


export default Photowall