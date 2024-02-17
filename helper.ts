export function emptyOrRow(rows){
    if (!rows){
        return []
    }

    return rows
}

export function getOffset(currentPage = 1, listPerPage: number) {
    return (currentPage - 1) * listPerPage;
  }