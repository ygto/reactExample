import React,{Component} from 'react';


class UserDetail extends Component {
    constructor(props) {
        super(props);

    }

    getImage() {
        return 'https://avatars.io/twitter/' + this.props.user.id;
    }

    render() {
        if (!this.props.user) {
            return (
                <div></div>
            )
        }
        return (
            <div className="col-xs-12">
                <div className="user-avatar col-xs-4">
                    <img src={this.getImage()} alt={this.props.user.name}/>
                </div>
                <div className="col-xs-8">
                    <div className="user-name">
                        {this.props.user.name} {this.props.user.surname}
                    </div>
                    <div className="user-number">
                        {this.props.user.number}
                    </div>

                </div>
            </div>
        )
    }
}

export default UserDetail;