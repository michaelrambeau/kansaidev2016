import React from 'react';
import {
  Appear,
  Heading,
  Link,
  Text
} from "spectacle";

const Demo = React.createClass({
  mixins: [window.ReactFireMixin],
  getInitialState() {
    return {
      likes: [],
      pizzas: []
    };
  },
  componentWillMount() {
    const ref = new window.Firebase("https://kansaidev2016.firebaseio.com/counters");
    this.likesRef = ref.child("likes");
    this.pizzasRef = ref.child("pizzas");
    this.bindAsArray(this.likesRef, "likes");
    this.bindAsArray(this.pizzasRef, "pizzas");
  },
  like() {
    const item = {
      timestamp: (new Date()).toString()
    };
    this.likesRef.push(item);
  },
  pizza() {
    // this.setState({counter: this.state.counter + 1});
    const item = {
      timestamp: (new Date()).toString()
    };
    this.pizzasRef.push(item);
  },
  render() {
    const { likes, pizzas } = this.state;
    return (
      <div>

        <Heading size={1} fit>ONE MORE THING...</Heading>

        <Appear fid="1">
          <div>
          <Heading fit textColor="black">This presentation is made with React!</Heading>
          <Text caps margin={'1em 0 0'}>Go to <Link href="http://kansaidev2016.surge.sh/#/22">http://kansaidev2016.surge.sh</Link></Text>
          </div>
        </Appear>
        <br/>
        <Appear fid="2">
          <div>
          {likes && likes.length > 0 && (
            <Heading size={4} textColor="white">
              <span style={{ color: 'black' }}>{likes.length}</span>
              {' '}
              people like the presentation.
            </Heading>
          )}

          {pizzas && pizzas.length > 0 && (
            <Heading size={4} textColor="white">
              <span style={{ color: 'black' }}>{pizzas.length}</span>
              {' '}
              people came only for the pizza!
            </Heading>
          )}

          <Text margin="1em 0 0">
            <button type="button" onClick={this.like}>
              <i className="fa fa-thumbs-o-up"></i>
              {' '}
              いいね！
            </button>
          </Text>
          <Text margin="1em 0 0">
            <button type="button" onClick={this.pizza}>
              <i className="fa fa-cutlery"></i>
              {' '}
              特にピザがいいね！
            </button>
          </Text>
          </div>
        </Appear>
      </div>
    );
  }
});
export default Demo;
