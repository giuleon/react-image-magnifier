import * as React from "react";
import { ImageMagnifierLens } from "../components/ImageMagnifierLens";
import ContainerDimensions from "react-container-dimensions";

export default class App extends React.Component<{}, {}> {
    public render() {
        return (
            <ContainerDimensions>
            { ({ width, height }) =>
                <ImageMagnifierLens
                    image={{
                        src: "https://raw.githubusercontent.com/giuleon/react-image-magnifier/master/src/img/world-map-small.jpg",
                        width: width,
                        height: height
                    }}
                    zoomImage={{
                        src: "https://raw.githubusercontent.com/giuleon/react-image-magnifier/master/src/img/world-map-large.jpg",
                        width: (width * 4),
                        height: (height * 4)
                    }}
                    cursorOffset={{ x: 80, y: -80 }}
                    size={ 200 }
                />
            }
            </ContainerDimensions>
        );
    }
}
