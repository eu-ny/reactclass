import React from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImageText from "./components/section/ImageText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
		<Header font="nexon"/>
        <Main>
			<Slider />
			<Image attr={["section", "nexon", "container"]} />
			<ImageText attr={["nexon", "section", "scroll" ,"container"]} />
			<Card attr={["section", "nexon", "container"]} />
			<Banner attr={["section", "nexon"]} />
			<Text attr={["section", "nexon", "container"]} />
		</Main>
        <Footer attr={["section", "nexon", "container"]} />
    </>
  )
}

export default App;