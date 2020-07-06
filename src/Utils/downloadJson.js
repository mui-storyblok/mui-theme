const downloadJson = (json) => {
  const href = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(json))}`;
  const tempLink = document.createElement('a');
  tempLink.setAttribute('download', 'theme.json');
  tempLink.href = href;
  tempLink.click();
  tempLink.remove();
};

export default downloadJson;
