import * as React from "react";
import * as ReactDOM from "react-dom";

export interface MagnifierProps { 
        // the size of the magnifier window
        size?: number,
        
        // x position on screen
        x?: number,

        // y position on screen
        y?: number,

        // x position relative to the image
        offsetX?: number,

        // y position relative to the image
        offsetY?: number,

        // the offset of the zoom bubble from the cursor
        cursorOffset?: ({
            x?: number,
            y?: number
        }),

        // the size of the non-zoomed-in image
        smallImage?: ({
            src?: string,
            width?: number,
            height?: number
        }),

        // the size of the zoomed-in image
        zoomImage?: ({
            src?: string,
            width?: number,
            height?: number
        })
        
}
export interface ImageMagnifierProps { 
        // the size of the magnifier window
        size?: number,
        
        // the offset of the zoom bubble from the cursor
        cursorOffset?:({
            x?: number,
            y?: number
        }),

        // the size of the non-zoomed-in image
        image?: ({
            src?: string,
            width?: number,
            height?: number
        }),

        // the size of the zoomed-in image
        zoomImage?: ({
            src?: string,
            width?: number,
            height?: number
        })
}

export interface ImageMagnifierState { 
    x: number,
    y: number,
    offsetX: number,
    offsetY: number
}

export interface IOffset {
    x: number,
    y: number
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
// export class ImageMagnifier extends React.Component<ImageMagnifierProps, undefined> {
//     render() {
//         return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
//     }
// }

export class Magnifier extends React.Component<MagnifierProps, ImageMagnifierState> {
    render (): React.ReactElement<MagnifierProps> {
        var props = this.props;
        var halfSize = props.size / 2;
        var magX = props.zoomImage.width / props.smallImage.width;
        var magY = props.zoomImage.height / props.smallImage.height;
        var bgX = -(props.offsetX*magX - halfSize);
        var bgY = -(props.offsetY*magY - halfSize);
        var isVisible = props.offsetY < props.smallImage.height &&
                        props.offsetX < props.smallImage.width &&
                        props.offsetY > 0 &&
                        props.offsetX > 0;
        return (
            <div style={{
                position: 'absolute',
                display: isVisible ? 'block' : 'none',
                top: props.y,
                left: props.x,
                width: props.size,
                height: props.size,
                marginLeft: -halfSize + props.cursorOffset.x,
                marginTop: -halfSize + props.cursorOffset.y,
                backgroundColor: 'white',
                borderRadius: props.size,
                boxShadow: `1px 1px 6px rgba(0,0,0,0.3)`
            }}>
                <div style={{
                    width: props.size,
                    height: props.size,
                    backgroundImage: `url(${props.zoomImage.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${bgX}px ${bgY}px`,
                    borderRadius: props.size
                }} />
            </div>
        );
    }
}

// function getOffset(el) {
//     var x = 0;
//     var y = 0;
//     while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
//         x += el.offsetLeft - el.scrollLeft;
//         y += el.offsetTop - el.scrollTop;
//         el = el.offsetParent;
//     }
//     return { x, y };
// }

export class ImageMagnifier extends React.Component<ImageMagnifierProps, ImageMagnifierState> {
    private portalElement: HTMLDivElement = null;

    constructor(props: ImageMagnifierProps) {
        super(props);
        // props.size = 200;
        // props.cursorOffset.x = 0;
        // props.cursorOffset.y = 0;

        this.setState({
            x: 0,
            y: 0,
            offsetX: -1,
            offsetY: -1
        });
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove);
        if (!this.portalElement) {
            this.portalElement = document.createElement('div');
            document.body.appendChild(this.portalElement);
        }
        this.componentDidUpdate();
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.body.removeChild(this.portalElement);
        this.portalElement = null;
    }

    onMouseMove = (e: any) => {
        var offset = this.getOffset(ReactDOM.findDOMNode(this));

        this.setState({
            x: e.x + window.scrollX,
            y: e.y + window.scrollY,
            offsetX: e.x - offset.x,
            offsetY: e.y - offset.y
        });
    }

    componentDidUpdate() {
        ReactDOM.render(<Magnifier
            size={this.props.size}
            smallImage={this.props.image}
            zoomImage={this.props.zoomImage}
            cursorOffset={this.props.cursorOffset}
            {...this.state}
        />, this.portalElement);
    }

    private getOffset(el: HTMLDivElement): IOffset {
        let x = 0;
        let y = 0;
    
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            x += el.offsetLeft - el.scrollLeft;
            y += el.offsetTop - el.scrollTop;
            el = el.offsetParent as HTMLDivElement; //el.offsetParent;
        }
        return { x, y };
    }
    
    render () {
        return (
            <img {...this.props} src={this.props.image.src} />
        );
    }
}
