import React from 'react';

const withClass = (WrappedComponent, className) => {
    // Using the spread operator, props gets passed to the wrapped component
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;