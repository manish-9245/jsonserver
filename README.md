# jsonserver

const errorObjects = {};

const handleCellEditingStopped = (params) => {
  const { data, colDef } = params;
  const rowNode = params.node;

  if (!errorObjects[rowNode]) {
    errorObjects[rowNode] = {};
  }

  if (colDef.field === 'fileId') {
    if (!data.fileId) {
      errorObjects[rowNode]['fileId'] = 'Enter file id';
    } else {
      errorObjects[rowNode].splice('fileId', 1);
    }
  } else if (colDef.field === 'firmId') {
    if (!data.firmId && data.selectedFirmId === '') {
      errorObjects[rowNode]['firmId'] = 'Enter firm id';
    } else {
      errorObjects[rowNode].splice('firmId', 1);
    }
  }

  // Refresh 'Errors' column for the current row
  api.refreshCells({
    rowNodes: [rowNode],
    columns: ['Errors'],
  });
};
