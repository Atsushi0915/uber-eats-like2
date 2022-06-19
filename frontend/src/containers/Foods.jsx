import React, { Fragment } from 'react';
import { useParams } from 'react-router';

export const Foods = () => {
  const params = useParams();
  console.log(params);

  return (
    <Fragment>
      フード一覧
      <p>
        restaurantsIdは {params.restaurantsId} です
      </p>
    </Fragment>
  )
}
