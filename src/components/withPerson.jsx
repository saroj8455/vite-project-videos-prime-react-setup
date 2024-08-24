import React, { useCallback, useState } from 'react';

export function withPerson(OrginalComponent) {
  /**
   * Higher-order component to enhance the original component with additional props.
   *
   * @author Saroj Padhan
   * @param {React.ComponentType} OriginalComponent - The component to be wrapped.
   * @returns {React.ComponentType} A new component with added functionality.
   */

  return function EnhancedComponent(props) {
    const [price, setPrice] = useState(1);
    // useCallback to memoize the function and prevent unnecessary re-renders
    const handelMoney = useCallback(() =>
      setPrice((prevPrice) => prevPrice * 2)
    );
    return (
      <OrginalComponent {...props} price={price} handelMoney={handelMoney} />
    );
  };
}
