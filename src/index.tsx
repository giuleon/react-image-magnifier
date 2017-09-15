import * as React from "react";
import * as ReactDOM from "react-dom";

import { ImageMagnifierLens } from "./components/ImageMagnifierLens";

ReactDOM.render(
    <div>
        <ImageMagnifierLens
            image={{
                src: "https://github.com/giuleon/react-image-magnifier/blob/master/src/img/world-map-small.jpg",
                width: 400,
                height: 300
            }}
            zoomImage={{
                src: "https://github.com/giuleon/react-image-magnifier/blob/master/src/img/world-map-large.jpg",
                width: 1600,
                height: 1200
            }}
            cursorOffset={{ x: 80, y: -80 }}
            size={ 200 }
        />
    </div>
,
    document.getElementById("app")
);