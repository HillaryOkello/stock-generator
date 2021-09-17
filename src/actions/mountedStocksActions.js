const requestMounterStocksInfo = () => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCHING_MOUNTED_STOCKS',
    });

    const response = await fetch('https://financialmodelingprep.com/api/v3/stock/list?apikey=4d24e3ea5ebf901d74be61f68df66bd9');
    const data = await response.json();

    await dispatch({
      type: 'RECEIVED_MOUNTED_STOCKS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_FETCHING_MOUNTED_STOCKS',
      payload: error,
    });
  }
};

export default requestMounterStocksInfo;
