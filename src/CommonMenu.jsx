import React from 'react';

import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';


// function onOpenChange(value) {
//     console.log('onOpenChange', value);
//   }

//   function handleClick(info) {
//     console.log(`clicked ${info.key}`);
//     console.log(info);
//   }
  
  
  const children1 = [
    <SubMenu title={<span className="submenu-title-wrapper">sub menu</span>} key="1">
      <MenuItem key="1-1">0-1</MenuItem>
      <MenuItem key="1-2">0-2</MenuItem>
    </SubMenu>,
   
    <MenuItem key="2">1</MenuItem>,
    <MenuItem key="3">outer</MenuItem>,
    <MenuItem key="5" disabled>disabled</MenuItem>,
    <MenuItem key="6">outer3</MenuItem>,
  ];
  
  
  const customizeIndicator = <span>Add More Items</span>;

class CommonMenu extends React.Component {
    state={
      children: children1,
      overflowedIndicator: undefined,
    }
    toggleChildren = () => {
      this.setState({
        children: children1
      });
    }
    toggleOverflowedIndicator = () => {
      this.setState({
        overflowedIndicator:
          this.state.overflowedIndicator === undefined ?
            customizeIndicator :
            undefined,
      });
    }
    render() {
      const { triggerSubMenuAction } = this.props;
      const { children, overflowedIndicator } = this.state;
      return (
        <div>
         
          <Menu
           // onClick={handleClick}
            triggerSubMenuAction={triggerSubMenuAction}
           // onOpenChange={onOpenChange}
         //   selectedKeys={['3']}
            mode={this.props.mode}
            openAnimation={this.props.openAnimation}
          //  defaultOpenKeys={this.props.defaultOpenKeys}
          //  overflowedIndicator={overflowedIndicator}
          >
            {children}
          </Menu>
        </div>
      );
    }
  }

  export default CommonMenu;