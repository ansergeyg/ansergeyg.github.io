var stack = [];
var dx = [0, 2, 0, -2];
var dy = [-2, 0, 2, 0];

function change() {
    var mazeSize = document.getElementById("maze_size").value;
    var mazeContainer = document.getElementById("maze_container");
    var grid = [];
    var visited = [];
    for (var i = 0; i < mazeSize; i++)
    {
        grid[i] = []; 
        visited[i] = [];
        for (var j = 0; j < mazeSize; j++)
        {
            var div = document.createElement("div");
            grid[i][j] = div;
            visited[i][j] = false;
            if ((i % 2 != 0 && j % 2 != 0) && (i < mazeSize - 1 && j < mazeSize - 1))
            {
                grid[i][j].style.backgroundColor = 'white';
            }
            else
            {
                grid[i][j].style.backgroundColor = 'black';
            }
            mazeContainer.append(div);
        }
    }
    mazeContainer.style.gridTemplateColumns = "repeat(" + mazeSize + ", 20px)";
    buildMaze(grid, mazeSize, visited);
}

function buildMaze(grid, size, visited)
{
	//dfs(getRandom(size), getRandom(size), grid, size, visited);
	dfs(1, 1, grid, size, visited);
}

function isValid(grid, x, y, size, visited)
{
    if (x < 0 || x >= size || y < 0 || y >= size)
    {
        return false;
    }
    if (visited[x][y])
    {
        return false;
    }
    if (grid[x][y].style.backgroundColor == "black")
    {
        return false;
    }
    return true;
}

function dfs(x, y, grid, size, visited)
{
    stack.push({x: x, y: y});
    while (stack.length > 0)
    {
        var curCell = stack.pop();
        visited[curCell.x][curCell.y] = true;
        grid[curCell.x][curCell.y].style.backgroundColor = "white";
        var nextCells = [];
        for (var i = 0; i < dx.length; i++)
        {
            var nx = curCell.x + dx[i];
            var ny = curCell.y + dy[i];
            if (isValid(grid, nx, ny, size, visited))
            {
                nextCells.push({x:nx, y:ny});
            }
        }
        if (nextCells.length > 0)
        {
            var nextCell = nextCells[getRandom(nextCells.length)];

            removeWall({x:curCell.x, y:curCell.y}, nextCell, grid, visited);

            stack.push({x: curCell.x, y: curCell.y});
            stack.push({x: nextCell.x, y: nextCell.y});
        }
    }  
}
function removeWall(curCell, nextCell, grid, visited)
{
    var dx = curCell.x - nextCell.x;
    var dy = curCell.y - nextCell.y;
    var ex = curCell.x + (dx == 0 ? 0 : dx < 0 ? 1 : -1);
    var ey = curCell.y + (dy == 0 ? 0 : dy < 0 ? 1 : -1); 
    grid[ex][ey].style.backgroundColor = "white";
    visited[ex][ey] = true;
}

function getRandom(size)
{
  return Math.floor(Math.random() * size);
}
