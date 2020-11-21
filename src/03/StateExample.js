import React, {useEffect, useState} from 'react';

const StateExample = props => {
  const [formData, setFormDate] = useState('no data');
  const [loading, setLoading] = useState(true);

  function handleDate() {
    const data = 'new data';
    setLoading(false);
    setFormDate(data + formData);
    console.log('loading값 ', loading);
  }

  useEffect(() => {
    setTimeout(() => {
      handleDate()
    }, 4000);
  }, [loading])

  return (
      <div>
        <span>로딩중: {String(loading)}</span>
        <span>결과: {formData}</span>
      </div>
  );
};

StateExample.propTypes = {};

export default StateExample;
