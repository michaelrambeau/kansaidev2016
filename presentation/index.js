// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Code,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import Demo from './firebase';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  react: "http://michaelrambeau.com/img/blog/2015-03-reactjs-memo.jpg",
  safery: require("../assets/safery-first.png"),
  screenshot0: require("../assets/screenshot0.png"),
  screenshotMobile: require("../assets/screenshot-mobile.png"),
  screenshotDesktop: require("../assets/screenshot-desktop.png"),
  modulesCount: require("../assets/modules-count.png"),
  webpack: require("../assets/webpack.png")
};

preloader(images);

const theme = createTheme({
  primary: "#199fd3", // "#20AEE5",
  secondary: "black",
  tertiary: "white"
});
theme.screen.components.link.color = 'white';
theme.screen.components.text.color = 'white';
theme.screen.global.body.color = 'white';
theme.screen.components.link.textDecoration = 'underline';

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps>
              Modern web development
            </Heading>
            <Heading size={1} fit caps textColor="black">
              @FirstServer
            </Heading>
            <Heading fit size={1} margin={ '10px 0 0' }>
                2016-03-04 開発ツール チラ見せ♡ナイト
            </Heading>
          </Slide>

          <Slide>
            <Heading fit>A presentation by <span style={{ color: 'black' }}>Michael Rambeau</span></Heading>
            <Text margin="0.5em 0 0">(ランボーミカエル)</Text>
            <List>
              <ListItem>From France, living in Japan since 2010</ListItem>
              <ListItem>Web engineer at FirstServer since 2014</ListItem>
              <ListItem>Creating intranet and internet applications since 2000</ListItem>
              <ListItem><i className="fa fa-github-alt"></i> JavaScript fan !</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={4}>
              Building a web application using the latest technologies.
            </Heading>
            <Heading>Why ?</Heading>
            <Heading>How ?</Heading>
          </Slide>

          <Slide bgColor="black">
            <Heading>Context</Heading>
            <Markdown>
            {`
* [zenlogic.jp](https://zenlogic.jp) provides hosting web services.
* New customers subsribe using an online application
* In 2016 January, we released a new version.
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading textColor="white" size={2}>Goal #1: UX</Heading>
            <Text textColor="white">Improve the user experience (UX)</Text>
            <List>
              <ListItem textColor="tertiary">
                <i className="fa fa-mobile"></i>{' '}
                Mobile-friendly (responsive web design)
              </ListItem>
              <ListItem textColor="tertiary">
                <i className="fa fa-bolt"></i>{' '}
                Fast
              </ListItem>
              <ListItem textColor="tertiary">
                <i className="fa fa-map-signs"></i>{' '}
                Improve the process: less steps, less clicks...
              </ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading textColor="white" size={2} margin={'0 0 0.5em'}>
              Goal #2: for developers
            </Heading>
            <Text size={4} textAlign="center" textColor="white">
              We want the latest technologies:
            </Text>
            <Text>React eco-system</Text>
            <Text>Hot reload...</Text>
            <Image src={images.react} width="400" margin="1em 0 0" />
          </Slide>

          <Slide bgColor="black">
            <Heading caps>npm modules</Heading>
              <List>
                <ListItem textColor="white">Always up-to-date</ListItem>
                <ListItem textColor="white">
                  The greatest choice of JavaScript libraries.
                  <Link href="http://www.modulecounts.com/">Module count:</Link>
                </ListItem>
              </List>
              <Image src={images.modulesCount.replace("/", "")} margin="0px" width="568"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} textColor="white">Goal #3: Testing</Heading>
            <List>
              <ListItem textColor="white">Improve maintenance and stability</ListItem>
              <ListItem textColor="white">Automatic tests for JavaScript => safe deploy</ListItem>
            </List>
            <BlockQuote>
              <Quote>"Safety first!"</Quote>
            </BlockQuote>
            <Text>
              <Image src={images.safery.replace("/", "")} margin="0px"/>
            </Text>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              What we did
            </Heading>
            <Text textColor="black" fit>We changed everything!</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps size={1} textColor="tertiary">
              Architecture
            </Heading>
            <Heading size={2}>BEFORE</Heading>
            <List>
              <ListItem>Ruby on Rails "classic" architecture</ListItem>
              <ListItem>Pages rendered on the server-side by Rails assets pipeline</ListItem>
            </List>
          </Slide>
          <Slide bgColor="primary">
            <Heading caps size={1} textColor="tertiary">
              Architecture
            </Heading>
            <Heading size={2}>AFTER</Heading>
            <List>
              <ListItem>SPA (Single-Page-Application) architecture</ListItem>
              <ListItem>Front-end code built by webpack</ListItem>
              <ListItem>No jQuery</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading fit caps>One language</Heading>
            <Heading fit caps textColor="black">JavaScript <Link href="https://github.com/sgaurav/understanding-es6">ES6</Link> syntax</Heading>
            <List>
              <ListItem>modules <Code>{`import x from 'my-module'`}</Code></ListItem>
              <ListItem>Arrow functions <Code>{`array.map( x => x * x)`}</Code></ListItem>
              <ListItem>Promises</ListItem>
              <ListItem>Spread operator <Code>{`<Child ...this.props />`}</Code></ListItem>
              <ListItem>...</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              The <span style={{ color: 'black' }}>new</span> front-end stack
            </Heading>
            <Heading caps size={4}>1. Librairies</Heading>
            <Markdown>{`
* [React](https://facebook.github.io/react/): the view layer
* [Redux](http://redux.js.org/): architecture to manage application state
* [redux-form](http://erikras.github.io/redux-form): used to bind forms to Redux state
* [React-router](https://github.com/rackt/react-router ) for client side routing
              `}
            </Markdown>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading caps fit size={1} textColor="tertiary">
              The <span style={{ color: 'black' }}>new</span> front-end stack
            </Heading>
            <Heading caps size={4}>2. Tools</Heading>
            <Markdown>
              {`
* [node.js](https://nodejs.org/): server-side JavaScript used to build the application
* [Webpack](https://webpack.github.io/): bundle JS and CSS code, web server in development
* [React Hot Loader](http://gaearon.github.io/react-hot-loader/)
* [Autoprefixer](https://github.com/postcss/autoprefixer) and [PostCSS](https://github.com/postcss/postcss) to process CSS code
                `}
            </Markdown>
          </Slide>
          <Slide bgColor="black">
            <Heading caps size={4} textColor="white">
              Webpack tasks {' '}
              <Image src={images.webpack} height="64" style={{ 'transform': 'translateY(10px)'}} />
            </Heading>
              <Text textAlign="left">1. Compile</Text>
              <List>
                <ListItem>ES6 .js => ES5 .js</ListItem>
                <ListItem>.sass => .css</ListItem>
              </List>
              <Text textAlign="left">2. Serve</Text>
              <List>
                <ListItem>Webpack Dev Server</ListItem>
                <ListItem>Hot Reload</ListItem>
              </List>
              <Text textAlign="left">3. Build for production</Text>
          </Slide>
          <Slide>
            <Heading caps fit>Linting</Heading>
              <List>
                <ListItem>
                  Linting with <Link href="http://eslint.org/">ESLint</Link> to check the JavaScript code
                </ListItem>
                <ListItem>
                  We follow <Link href="http://eslint.org/">Airbnb</Link> rules
                </ListItem>
              </List>

              <Text textAlign="left">Goals:</Text>
              <Markdown>{`
* catch potential bugs
* keep a uniform coding style
                `}
              </Markdown>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading caps fit>Testing</Heading>
            <List>
              <ListItem>It is easy to break JavaScript code...</ListItem>
              <ListItem>So testing front-end code is important!</ListItem>
              <ListItem>Testing is not only for back-end code!</ListItem>
              <ListItem>
                <Markdown>{`
We added 100+ tests using [Mocha](http://mochajs.org/) and [jsdom](https://github.com/tmpvar/jsdom)
                  `}
                </Markdown>

              </ListItem>
              <ListItem>Tests run on CI servers (Jenkins) before every deploy</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]}>
            <Heading size={4}>
              The result:
              {' '}
              <Link href="https://my.zenlogic.jp/registration/hosting/start?tracking=0#/">
                View the app
              </Link>
            </Heading>
            <Heading size={4}>Next: screenshots...</Heading>
          </Slide>
          <Slide>
            <Text cap>Before</Text>
            <Text>
              <Image src={images.screenshot0.replace("/", "")} margin="1em 0 0"/>
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text>
              AFTER, on desktop
              {' '}
              <i className="fa fa-desktop"></i>
            </Text>
            <Image src={images.screenshotDesktop.replace("/", "")} margin="1em 0 0"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text>
              AFTER, on mobile
              {' '}
              <i className="fa fa-mobile"></i>
            </Text>
            <Image src={images.screenshotMobile.replace("/", "")} margin="1em 0 0"/>
          </Slide>
          <Slide>
            <Demo />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              THE END
            </Heading>
            <Heading size={1} caps fit lineHeight={1.5} textColor="black">
              Any question ? Thank you!
            </Heading>
            <div style={{ marginTop: '1em' }}>
            <Author margin="2em" textColor="primary" />
            </div>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

const Author = (props) => {
  return <Link {...props} href="http://michaelrambeau.com">Michael Rambeau</Link>;
};
