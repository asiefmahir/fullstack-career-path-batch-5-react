import { Component } from 'react'

class Person extends Component {
    state = {
        age: 26,
        todo: null,
    }

    ageIncreaseHandler = () => {
        this.setState({
            ...this.state,
            age: this.state.age + 1
        })
    }

    componentDidMount() {
        console.log('I am compo did mount');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    todo: data
                })
            })
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.age !== this.state.age) {
            console.log(`Age is changed from ${prevState.age} to ${this.state.age}`);
        }
    }

    componentWillUnmount () {

    }
   

  render () {
    console.log(" iam render");
     const {age, todo} = this.state;
    return (
        <div>
            <p>{this.props.name}</p>
            <p>{age}</p>
            <button onClick={this.ageIncreaseHandler}>Increase Age</button>
            <hr />

            <p>{todo.title}</p>
            <p>{todo.id}</p>
        </div>
    )
  }
}

export default Person;
