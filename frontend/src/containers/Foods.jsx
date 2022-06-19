import React, { Fragment } from 'react';
import { useParams } from 'react-router';

export const Foods = () => {
  const params = useParams();     //URLに含まれるパラメータを取得する。

  return (
    <Fragment>
      フード一覧
      <p>
        restaurantsIdは {params.restaurantsId} です
      </p>
    </Fragment>
  )
}
