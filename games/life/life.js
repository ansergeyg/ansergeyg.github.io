
// TODO: Refactor code after all functions are done.


function change() {
    var mazeContainer = document.getElementById("maze_container");
    //TODO: Add clear button
    mazeContainer.innerHTML = "";
    var mazeSize = document.getElementById("maze_size").value;
    mazeSize = mazeSize * 2 + 1;
    var grid = [];
    var visited = [];
    for (var i = 0; i < mazeSize; i++)
    {
        grid[i] = []; 
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
    dfs(1, 1, grid, mazeSize, visited);
    //buildMaze(grid, mazeSize, visited);
}

