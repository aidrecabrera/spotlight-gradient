import { Component } from "react";

export class Background extends Component {
  render() {
    return (
      <>
        <h1 className="link link-underline link-underline-black font-bricolage font-bold tracking-wide text-5xl"><a href="https://github.com/aidrecabrera/spotlight-gradient">Spotlight Gradient</a></h1>
        <div className="background -z-0 w-screen h-screen bg-black bg-gradient-to-tl from-green-500 via-blue-500  to-red-500"></div>
      </>
    );
  }
}

export default Background;
