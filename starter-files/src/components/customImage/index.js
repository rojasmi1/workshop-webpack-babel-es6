import './image.css';

class CustomImage {
    constructor(image, cssClasses) {
        this.image = image;
        this.cssClasses = cssClasses;
    }

    render() {
        const imageTag = new Image();
        imageTag.src = this.image;
        imageTag.classList.add('my-image-tag',...this.cssClasses);
        return imageTag;
    }
}

export default CustomImage;