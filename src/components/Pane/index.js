import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

class componentName extends PureComponent {
    render() {
        const { children, ...rest} = this.props; 
        return (
            <div className={styles.pane} {...rest}>
                {children}
            </div>
        );
    }
}

componentName.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default componentName;