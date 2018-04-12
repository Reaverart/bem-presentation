// Import React
import React from "react";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";
// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Link,
  Image
} from "spectacle";


const images = {
  whySoSerious: require("../assets/why.gif"),
  lego: require("../assets/lego.webp"),
  nested: require("../assets/nested.png"),
  placement: require("../assets/placement.png"),
  placement2: require("../assets/placement2.png"),
  reuse: require("../assets/reuse.png"),
  element: require("../assets/element.png"),
  modifier: require("../assets/modifier.png")
};
preloader(images);

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Holy BEM!
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.whySoSerious.replace("/", "")} margin="0px auto" height="400px"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Purposes:
          </Heading>
          <List>
            <ListItem>Simplify code and facilitate refactoring</ListItem>
            <ListItem>Get self-documenting code</ListItem>
            <ListItem>Start reusing code without letting components influence each other</ListItem>
            <ListItem>Host multiple entities on the same DOM node and avoid copy and paste</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Key Concepts
          </Heading>
          <Image src={images.lego.replace("/", "")} margin="0px auto" height="400px"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Block
          </Heading>
          <Text textColor="secondary" textAlign="center" textSize={30}>
            A logically and functionally independent page component
          </Text>
          <Heading size={5} lineHeight={1} textColor="tertiary">
            Block features:
          </Heading>
          <List>
            <ListItem>Nested structure</ListItem>
            <ListItem>Arbitrary placement</ListItem>
            <ListItem>Re-use</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Nested structure
          </Heading>
          <Image src={images.nested.replace("/", "")} margin="0px auto" height="400px"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Arbitrary placement
          </Heading>
          <Image src={images.placement.replace("/", "")} margin="0px auto" height="200px"/>
          <Image src={images.placement2.replace("/", "")} margin="0px auto" height="200px"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Re-use
          </Heading>
          <Image src={images.reuse.replace("/", "")} margin="0px auto" height="400px"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Element
          </Heading>
          <Text textColor="secondary" textAlign="center" textSize={30}>
            A constituent part of a block that can't be used outside of it.
          </Text>
          <Image src={images.element.replace("/", "")} margin="0px auto" height="400px"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Modifier
          </Heading>
          <Text textColor="secondary" textAlign="center" textSize={30}>
            A BEM entity that defines the appearance and behavior of a block or an element.
          </Text>
          <Image src={images.modifier.replace("/", "")} margin="0px auto" height="400px"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="tertiary">
            Mix
          </Heading>
          <Text textColor="secondary" textAlign="center" textSize={30}>
            An instance of different BEM entities being hosted on a single DOM node.
          </Text>
          <Heading size={5} lineHeight={1} textColor="tertiary">
            Mixes allow us to:
          </Heading>
          <List>
            <ListItem>Combine the behaviors and styles of several BEM entities while avoiding code duplication.</ListItem>
            <ListItem>Create semantically new interface components on the basis of existing BEM entities.</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="tertiary">
            Demo
          </Heading>
          <List>
            <ListItem>
                A Button <Link href="https://codesandbox.io/s/yvlr921jzv" target="_blank">Sandbox</Link>
            </ListItem>
            <ListItem>
                A Button Group <Link href="https://codesandbox.io/s/n15zj0ynjm" target="_blank">Sandbox</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="tertiary">
            Links
          </Heading>
          <Text textColor="secondary" textAlign="center" textSize={30}>
            BEM <Link href="https://en.bem.info/methodology/quick-start/" target="_blank">docs</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
