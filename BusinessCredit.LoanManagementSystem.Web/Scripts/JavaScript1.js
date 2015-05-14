jQuery("#gfrc1").jqGrid({
    url: 'server.php?q=4',
    datatype: "json",
    colNames: ['InvNo', 'Client', 'Amount', 'Tax', 'Total', 'Closed', 'Shipped via', 'Notes'],
    colModel: [
          { name: 'id', index: 'id', width: 60, align: 'center', sorttype: 'date', frozen: true },
          { name: 'name', index: 'name', width: 100, frozen: true },
          { name: 'amount', index: 'amount', width: 75, formatter: 'number', sorttype: 'number', align: 'right' },
          { name: 'tax', index: 'tax', width: 75, formatter: 'number', sorttype: 'number', align: 'right' },
          { name: 'total', index: 'total', width: 75, formatter: 'number', sorttype: 'number', align: 'right' },
          {
              name: 'closed', index: 'closed', width: 75, align: 'center', formatter: 'checkbox',
              edittype: 'checkbox', editoptions: { value: 'Yes:No', defaultValue: 'Yes' }
          },
          {
              name: 'ship_via', index: 'ship_via', width: 120, align: 'center', formatter: 'select',
              edittype: 'select', editoptions: { value: 'FE:FedEx;TN:TNT;IN:Intim', defaultValue: 'Intime' }
          },
          { name: 'note', index: 'note', width: 120, sortable: false }
    ],
    rowNum: 10,
    width: 700,
    rowList: [10, 20, 30],
    pager: '#pgfrc1',
    sortname: 'invdate',
    viewrecords: true,
    sortorder: "desc",
    jsonReader: {
        repeatitems: false
    },
    shrinkToFit: false,
    caption: "Frozen Header",
    height: 'auto'
});
jQuery("#gfrc1").jqGrid('setFrozenColumns');