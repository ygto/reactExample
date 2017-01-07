import React,{Component} from 'react';


class User extends Component {

    constructor(props) {
        super(props);
        this.theyClickMe = this.theyClickMe.bind(this)

    }

    theyClickMe() {

        this.props.onUserSelect(this.props.user);
    }

    render() {
        return (
            <div className="cursor-pointer" onClick={this.theyClickMe}>
                {this.props.user.name} {this.props.user.surname} ({this.props.user.number})
            </div>
        )
    }
}
export default User