const headers = [
  {
    text: 'Username',
    align: 'left',
    sortable: false,
    value: 'username'
  },
  {
    text: 'Lemon',
    align: 'left',
    sortable: false,
    value: 'linoAmount'
  },
  {
    text: 'Amount',
    align: 'left',
    sortable: false,
    value: 'paidAmount'
  },
  {
    text: 'Purchase Time',
    align: 'left',
    sortable: false,
    value: 'purchaseTime'
  },
  {
    text: 'Vendor',
    align: 'left',
    sortable: false,
    value: 'vendor'
  },
  {
    text: 'VendorTxId',
    align: 'left',
    sortable: false,
    value: 'vendorTxId'
  },
  {
    text: 'Country',
    align: 'left',
    sortable: false,
    value: 'country'
  },
  {
    text: 'Status',
    align: 'left',
    sortable: false,
    value: 'status'
  },
  {
    text: 'Comment',
    align: 'left',
    sortable: false,
    value: 'comment'
  },
  {
    text: 'RefundAmount',
    align: 'left',
    sortable: false,
    value: 'Refund Amount'
  },
  {
    text: 'RefundReason',
    align: 'left',
    sortable: false,
    value: 'Refund Reason'
  },
];
const rst = headers.map(_ => _.text).join(",")
console.log(rst);
