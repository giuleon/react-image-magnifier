interface IImageMagnifierLensProps {
    size?: number;
    cursorOffset?: ({
        x?: number;
        y?: number;
    });
    image?: ({
        src?: string;
        width?: number;
        height?: number;
    });
    zoomImage?: ({
        src?: string;
        width?: number;
        height?: number;
    });
}
export default IImageMagnifierLensProps;
