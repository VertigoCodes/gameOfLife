// Number of rows and columns
const numRows = 8;
const numCols = 8;

function createCell() {
    const cell = $('<div class="cell"></div>'); // Create a cell element
    cell.css({
      width: '64px', // Size of the cell
      height: '64px', // Size of the cell
      backgroundColor: '#14191f', // Background color of the cell
      border: '1px solid #1e2a36', // Border for the cell
      margin: '8px 4px'
    });

    cell.hover(function() {
        $(this).css('background-color', '#666'); // Change background color on hover
      }, function() {
        $(this).css('background-color', '#14191f'); // Restore original background color when not hovered
      });

    return cell; // Return the cell element
  }
  
  // Function to create a row of cells
  function createRow(numCols) {
    const row = $('<div class="row"></div>'); // Create a row element
    for (let i = 0; i < numCols; i++) {
      row.append(createCell()); // Append cells to the row
    }
    return row; // Return the row element
  }
  
  // Function to create the grid
  function createGrid(numRows, numCols) {
    const gridContainer = $('.grid-container'); // Select the grid container
    for (let i = 0; i < numRows; i++) {
      gridContainer.append(createRow(numCols)); // Append rows to the grid container
    }
  }
  
  // Call the function to create the grid when the document is ready
  $(document).ready(function() {
    createGrid(numRows, numCols); // Create a grid with 8 rows and 8 columns
  });