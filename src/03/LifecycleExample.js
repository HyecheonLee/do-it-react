import React, {useEffect, useState} from 'react';

const LifecycleExample = props => {
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    console.log("componentDidMount 호출")
    setUpdated(true)
    return () => {
      console.log("componentWillUnmount 호출")
    }
  }, [updated])
  return (
      <div>
        {String(updated)}
      </div>
  );
};

LifecycleExample.propTypes = {};

export default LifecycleExample;
