import React, {useEffect, useState} from 'react';

const StateExample = props => {
  const [formDate, setFormDate] = useState('no data');
  const [loading, setLoading] = useState(true);

  function handleDate() {
    const data = 'new data';
    setLoading(false);
    setFormDate(data + formDate);
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
        <span>결과: {formDate}</span>
      </div>
  );
};

StateExample.propTypes = {};

export default StateExample;
