import React,{Component} from 'react';
import User from './user'

class SearchResult extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let onUserSelect = this.props.onUserSelect;
        return (
            <div>
                <div>Users</div>
                {
                    this.props.users.map(function (item) {
                        return (<User onUserSelect={onUserSelect} user={item}/>);
                    })
                }
            </div>
        )
    }


}


export default SearchResult;