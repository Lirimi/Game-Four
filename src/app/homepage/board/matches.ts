
function matches(rows: boolean, columns: boolean, diagonal: boolean): boolean {
    return (rows || columns || diagonal);
}

// export default {isMatch as matches()};