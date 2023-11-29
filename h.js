const columnDefs = [
  {
    headerName: 'File ID',
    field: 'fileId',
    editable: true,
    onCellEditingStopped: handleCellEditingStopped,
  },
  {
    headerName: 'Firm ID',
    field: 'firmId',
    editable: true,
    onCellEditingStopped: handleCellEditingStopped,
  },
  {
    headerName: 'Errors',
    valueGetter: (params) => {
      const rowNode = params.node;
      const errorObject = errorObjects[rowNode];
      if (errorObject) {
        return Object.values(errorObject).join(', ');
      }
      return '';
    },
    editable: false,
  },
];
