import './label.css';

class Label {
    constructor(text, cssClasses) {
        this.text = text;
        this.cssClasses = cssClasses;
    }

    render(){
        var label = document.createElement('label');
        label.textContent = this.text;
        label.classList.add(...this.cssClasses);
        return label;
    }
}

export default Label;