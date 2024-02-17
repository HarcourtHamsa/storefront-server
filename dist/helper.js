"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffset = exports.emptyOrRow = void 0;
function emptyOrRow(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}
exports.emptyOrRow = emptyOrRow;
function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * listPerPage;
}
exports.getOffset = getOffset;
//# sourceMappingURL=helper.js.map