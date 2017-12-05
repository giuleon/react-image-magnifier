/// <reference types="react" />
import * as React from "react";
import MagnifierProps from './IMagnifierProps';
import ImageMagnifierLensProps from './IImageMagnifierLensProps';
import ImageMagnifierLensState from './IImageMagnifierLensState';
export declare class Magnifier extends React.Component<MagnifierProps, {}> {
    render(): React.ReactElement<MagnifierProps>;
}
export declare class ImageMagnifierLens extends React.Component<ImageMagnifierLensProps, ImageMagnifierLensState> {
    private portalElement;
    constructor(props: ImageMagnifierLensProps, state: ImageMagnifierLensState);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onMouseMove: (e: any) => void;
    componentDidUpdate(): void;
    private getOffset(el);
    render(): JSX.Element;
}
export default ImageMagnifierLens;
