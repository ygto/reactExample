import React,{Component} from 'react';

class SearchBar extends Component {
    debounce = 10;

    constructor(props) {
        super(props);
        this.state = {input: ''};
        this.onChange = this.onChange.bind(this);
        console.log(this.props.onSearch);

    }


    onChange(event) {
        let $this = this;
        $this.setState({input: event.target.value});
        clearTimeout($this.debounce);
        $this.debounce = setTimeout(function () {
            let val = $this.state.input;
            console.log('i search:' + val);
            $this.props.onSearch(val);
        }, 200);
    }

    render() {
        return (
            <div>
                <input className="form-control"
                       value={this.state.input}
                       onChange={this.onChange}/>
                <label>{this.props.message}</label>
            </div>

        )
    }
}
export default SearchBar