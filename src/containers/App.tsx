import * as React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IAppProps {
}

interface IAppState {
  robots: Array<IRobot>;
  searchField: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) });
  }

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ searchField: event.currentTarget.value })
  }

  render(): JSX.Element {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className="tc">
          <div className="header">
            <h1 className='f2 ttu'>Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;
