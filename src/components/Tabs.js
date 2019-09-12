import React, {Component} from 'react';
import Tab from "./Tab";
import PropTypes from 'prop-types'; // Read more about PropTypes library here: https://reactjs.org/docs/typechecking-with-proptypes.html
// Src for inspiration for tabs: https://alligator.io/react/tabs-component/

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
        this.onClickTabItem = this.onClickTabItem.bind(this)
    }

    onClickTabItem(tab) {
        this.setState({ activeTab: tab });
    }

    // onClickTabItem as an arrow function:
    // onClickTabItem = (tab) => {
    //     this.setState({ activeTab: tab });
    // }
    // The advantage of writing the method as an arrow function is that you dont have to bind the function in the constructor

    render() {
        const {
          onClickTabItem,
          props: {
            children,
          },
          state: {
            activeTab,
          }
        } = this;

        return (
          <div className="tabs">
            <ol className="tab-list">
              {children.map((child) => {
                const { label } = child.props;

                return (
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                  />
                );
              })}
            </ol>
            <div className="tab-content">
              {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
              })}
            </div>
          </div>
        );
    }
}

export default Tabs;