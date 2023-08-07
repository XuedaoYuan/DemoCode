const a = [{ x: 1 }, { x: 2 }];

for (let item of a) {
  item.x = 222;
}

console.log(a);

async function handleSetFundInfoToList(fundIdList) {
  const res = await getFundInfoList({
    fund_id: fundIdList,
    isvirtual: ['1', '0']
  });
  const map = new Map();
  res.forEach(fund => {
    const { fund_id, fund_code, fund_name } = fund;
    map.set(fund_id, `${fund_code}_${fund_name}`);
  });
  return map;
}
