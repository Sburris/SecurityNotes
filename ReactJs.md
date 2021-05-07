# Reach JS #

## Required JavaScript Knowledge ##

- Variables and types
- Objects and arrays
- Functions and classes
- Loops and conditionals

- Learning JS
  - Book: jscomplete.com/beginning-js
  - Labs: jscomplete.com/js-labs

React Native is cross platform
Built by Facebook
Declarative language (model UI and state)

## Concepts ##

- Components
  - like functions
  - Input: props, state | Output: UI
  - Reusable and composable
  - `<Component />`
  - Can manage a private state
- Reactive updates
  - React will react
  - Take updates to the browser
- Virtual views in memory
  - Generate HTML using JavaScript
  - No HTML template language
  - Tree reconciliation

- Reactt Component Types
  - Function Component
    - Simpliar
  - Class Component
    - More complex but powerful

React.createElement(string type, string attributes, string childElement)

- a, b = useState(initialStateValue)
  - a = state object (getter)
  - b = updater function (setter)

`<>` = React.Fragment // This is common, so there is the shortcut

- This will render the two componenets together without creating a parent HTML element to insert them into.

## Modern JavaScript Crash Course ##

- use `let`|`const` instead of `var`
- Function block vs scope block
- Arrow vs Regular Function
  - Regular functions give access to their `calling` environement while arrow functions give access to their `defining` environment
  - The value of the `this` keyword inside a regular function depends on `HOW` the function was `CALLED` (the `OBJECT` that made the call).
  - The value of the `this` keyword inside an arow function depends on `WHERE` the function was `DEFINED` (the `SCOPE` that defined the function).
  - EXAMPLE

```JavaScript
const testerObj = {
    func1: function() {
        console.log('func1', this);  // func1, {func1: f, func2: f}
    },

    func2: () => {
        console.log('func2', this); // func2, {id: "REPL", main:f}
    },
};

testerObj.func1();
testerObj.func2();
```

- [Destructuring](https://jscomplete.com/playground/destructuring)
- [Rest/Spread](https://jscomplete.com/playground/rest-spread)
- [Classes](https://jscomplete.com/playground/classes)
- [Promises](https://jscomplete.com/playground/promises)

## Class Components ##

- extends React.Component
- only required function is `render()` and it must return the virtual DOM of the component
- If a constructor is used `super()` must be called

## References ##

- [React.js Commonly-Faced Problems](https://jscomplete.com/react-cfp)
- [Why React](https://jscomplete.com/why-react)
- [React: CSS in JS techinques comparison](https://github.com/MicheleBertoli/css-in-js)
- [Closures](https://jscomplete.com/closures)
- [Facebooks: Create-React-App](https://create-react-app.dev/)
- [The Always-recent Guide to Creating Your Own Development Environment for Node and React](https://jscomplete.com/reactful)

## Interview Questions ##

- Why do you like React?
- How exactly is NOT being a framework a good thing?
- [Understanding "this" in JavaScript with arrow functions](https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc)
  - In my opinion, arrow functions are the best choice when working with closures or callbacks, but not a good choice when working with class/object methods or constructors.
- {{}}
  - outer {} to denoting dynamic data
  - inner {} to do a object literal

## Rules ##

1. Rule of Hooks - Don't call Hooks inside loop or conditions

## Questions ##

- How to tell what version of ReactJs is being used?
- The `style` attribute in the virtual DOM, how is the finally rendered, is it eventual render as inline styles, is it going to screw with CSP?
  - It looks like the final HTML that is rendered does have the inline Style, so don't do if you want to go for strict CSP
- What are CSS XSS examples and would this effect React's `style` attribute?
- What is "React Native"?
- What is JS `fetch()` command?
- How to handle errors
  - Input error
  - Network error
- What is [LoDash](https://lodash.com/)
- Lookin into `React.useEffect`, `setTimeout()`, and `clearTimeout()`
- [React Hooks Deep Dive](http://jscomplete.com/rgs-hooks)
- Is it common practice prepend name functions with `'use'` if it is going to use React functions?
- Look into GraphQL

## Example Code ##

### Creates buttons that increment a counter ###

```JavaScript
function Button(props) {  
  const handleClick = () => props.clickEvent(props.increment);
    return (
      <button onClick={handleClick}>
        +{props.increment}
      </button>
    );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (v) => setCounter(counter+(v));
  return (
  <React.Fragment>
    <Button clickEvent={incrementCounter} increment={1} />
    <Button clickEvent={incrementCounter} increment={5} />
    <Button clickEvent={incrementCounter} increment={10} />
    <Button clickEvent={incrementCounter} increment={100} />
    <Display message={counter}/>
  </React.Fragment>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
```

### GitHub Card Example ###

```JavaScript
// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props
    return (
      <div classname="github-profile" style={{ margin: '1rem' }}>
        <img src={profile.avatar_url} style={{ margin: '1rem', maxheight: '75px', maxWidth: '75px' }} />
        <div className="info" style={{ display: 'inline-block', marginLeft:10 }}>
          <div className="name" style={{ fontSize: '125%' }}>{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = { userName: '' }
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.userName);
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(response.data);
    this.setState({ userName: ''});
  };
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({userName: event.target.value})}
          placeholder="GitHub username" 
          required 
        />
        <button>Add Card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: []
  };

  addNewProfile = (profileData) => {
    this.setState(previousState => ({
      profiles: [...previousState.profiles, profileData]
    }))
  };

  render() {
    return (
      <div>        
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}


ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);
```

## Star Match Game Example ##

[The Star Match Game](https://jscomplete.com/react-games/star-match)

```JavaScript
// STAR MATCH - V3

const StarsDisplay = props => (
	<>
    {utils.range(1, props.count).map(starId =>
      <div key={starId} className="star" />
    )}
  </>
);

const PlayNumber = props => (
	<button 
    className="number"
    style={{backgroundColor: colors[props.status]}}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

const PlayAgain = props => (
  <div className="game-done">
    <div 
      className="message"
      style={{color: props.gameStatus === 'lost' ? 'red' : 'green'}}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
)

const useGameState = () => {
	const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);  
  const [secondsLeft, setSecondsLeft] = useState(10);
  
  React.useEffect(() => {
    console.log('useEffect', secondsLeft)
    if(secondsLeft > 0 && availableNumbers.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }    
  }); 
  
  const setGameState = (newCandidateNumbers) => {
    if(utils.sum(newCandidateNumbers) !== stars) {
      setCandidateNumbers(newCandidateNumbers)
    }
    else {
      const newAvailabeNumbers = availableNumbers.filter(
        n => newCandidateNumbers.includes(n) === false
      );
      setStars(utils.randomSumIn(newAvailabeNumbers, 9))
      setAvailableNumbers(newAvailabeNumbers);
      setCandidateNumbers([]);
    }
  }
  
  return {stars, availableNumbers, candidateNumbers, secondsLeft, setGameState}
}

const Game = (props) => {
  const {
    stars, 
    availableNumbers, 
    candidateNumbers, 
    secondsLeft, 
    setGameState
  } = useGameState();
  
  const candidatesAreWrong = utils.sum(candidateNumbers) > stars;
  const gameStatus = availableNumbers.length === 0
    ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active'
  
  const numberStatus = (number) => {
    if(availableNumbers.includes(number) === false) {
      return 'used';
    }
    if(candidateNumbers.includes(number) === true) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };
  
  const onNumberClick = (number, currentStatus) => {
    if(currentStatus == 'used' || gameStatus !== 'active') {
      return;
    }
    
    const newCandidateNumbers = 
          currentStatus === 'available' 
          ? candidateNumbers.concat(number)
          : candidateNumbers.filter(cn => cn !== number);
    
    setGameState(newCandidateNumbers);
  }
  
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== 'active' ? (
            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
          ) : (
            <StarsDisplay count={stars}/>
          )}					
        </div>
        <div className="right">
        	{utils.range(1, 9).map(number =>
          	<PlayNumber 
              key={number}
              status={numberStatus(number)}
              number={number}
              onClick={onNumberClick}
            />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
}

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

ReactDOM.render(<StarMatch />, mountNode);
```