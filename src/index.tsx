import * as React from "react";
import * as ReactDOM from "react-dom";

import { ImageMagnifier } from "./components/ImageMagnifier";

ReactDOM.render(
    <div>
        <ImageMagnifier
            image={{
                src: "./src/img/world-map-small.jpg",
                width: 400,
                height: 300
            }}
            zoomImage={{
                src: "./src/img/world-map-large.jpg",
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