interface IMagnifierProps {
    size?: number;
    x?: number;
    y?: number;
    offsetX?: number;
    offsetY?: number;
    cursorOffset?: ({
        x?: number;
        y?: number;
    });
    smallImage?: ({
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
export default IMagnifierProps;
