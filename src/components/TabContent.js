import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import axios from "axios"


class TabContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryData: this.props.categoryData,
            imgID: 1,
            audioID: 1,
            textID: 1,
            image: "",
            texts: [
                null, null, null, null
            ]
        }
    }
    // Fetching images using AJAX and fetch() function
    getImage() {
        fetch("./media/svg/" + this.props.selectedButton.image + "/" + this.props.activeTab + ".svg")
        .then(response => response.text())
        .then(response => {
            this.setState({
                image: response
            })
        })
    }

    componentDidMount() {
        this.getImage()
    }

    componentDidUpdate() {
        this.getImage()
    }

    render() {
        return(
            <div className="tab-content-container">
                <div className="image" dangerouslySetInnerHTML={{__html: this.state.image}} ></div>
                <audio src="./media/sounds/cartoons/TipToes.mp3" controls autoPlay/>
            </div>
        )
    }


}


export default TabContent;
