import { Component } from 'react';

function withFetch (WrappedComponent, url, initState) {
    class NewComponent extends Component {
        state = {
            data: initState,
            isLoading: true,
            error: ''
        }

        componentDidMount () {
            fetch(url)
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        error: '',
                        data: result
                    })
                })
                .catch(err => {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        error: err.message,
                        data: initState
                    })
                })

               
        }
        render () {
            return(
                <WrappedComponent data = {this.state.data} isLoading = {this.state.isLoading} error = {this.state.error}/>
                // <Posts data = {this.state.data} isLoading = {this.state.isLoading} error = {this.state.error}/>
            )            
        }
    }
    return NewComponent
}
export default withFetch
// return {
//     data,
//     isLoading,
//     erorr
// }