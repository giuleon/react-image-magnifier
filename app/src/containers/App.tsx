import * as React from "react";
import { ImageMagnifierLens } from "../components/ImageMagnifierLens";
import ContainerDimensions from "react-container-dimensions";

export default class App extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="app-container">
                <ImageMagnifierLens
                    image={{
                        src: "https://raw.githubusercontent.com/giuleon/react-image-magnifier/master/app/src/img/world-map-small.jpg",
                        width: 400,
                        height: 300
                    }}
                    zoomImage={{
                        src: "https://raw.githubusercontent.com/giuleon/react-image-magnifier/master/app/src/img/world-map-large.jpg",
                        width: 1600,
                        height: 1200
                    }}
                    cursorOffset={{ x: 80, y: -80 }}
                    size={ 200 }
                />
            </div>
        );
    }
}
