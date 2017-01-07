import React,{Component} from 'react';
import SearchBar from './searchbar';
import SearchResult from './search_results';
import UserDetail from './user_detail'
var request = require('superagent');


function callApi(search, callback) {
    request.get('http://localhost:9999/index.php?data=' + search)
        .set('Accept', 'application/json')
        .end(function (err, res) {
            console.log(res.body);
            callback(res.body);
        });
}


class App extends Component {


    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
        this.onUserSelect = this.onUserSelect.bind(this);
        //console.log(callApi('mur'));
        //this.state = {users: []}
        this.state = {
            users: [{"id": 0, "name": "D'angelo", "surname": "Murazik", "number": "(582) 455-6413 x90030"}],
            selectedUser: null,
        }
    }

    onUserSelect(user) {
        this.setState({selectedUser: user});
    }

    onSearch(searchText) {
        let $this = this;
        $this.setState({
            searchMessage: 'searching..'
        });
        callApi(searchText, function (result) {
            if (result) {
                $this.setState({users: result, searchMessage: ''});

            }
        });
    }


    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-4">
                        <SearchBar onSearch={this.onSearch} message={this.state.searchMessage}/>
                        <SearchResult onUserSelect={this.onUserSelect} users={this.state.users}/>
                    </div>
                    <div className="col-xs-8">
                        <UserDetail user={this.state.selectedUser}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App