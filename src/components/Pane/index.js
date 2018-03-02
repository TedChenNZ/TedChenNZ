import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

class Pane extends PureComponent {
    render() {
        const { children, ...rest} = this.props; 
        return (
            <div className={styles.pane} {...rest}>
                {children}
            </div>
        );
    }
}

Pane.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Pane;
