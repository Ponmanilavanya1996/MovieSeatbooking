    function createTheater(rows, columns) {
            const theaterElement = document.getElementById('theater');
            theaterElement.style.setProperty('--columns', columns);
            for (let i = 1; i <= rows; i++) {
                for (let j = 1; j <= columns; j++) {
                    const seat = document.createElement('div');
                    seat.classList.add('seat');
                    seat.dataset.row = i;
                    seat.dataset.column = j;
                    seat.textContent = i + '-' + j;
                    theaterElement.appendChild(seat);
                }
            }
        }

        function findSeats() {
            const friends = parseInt(document.getElementById('friends').value, 10);
            const rows = parseInt(document.getElementById('rows').value, 10);
            const columns = parseInt(document.getElementById('columns').value, 10);

            const seats = document.querySelectorAll('.seat');
            let selectedSeats = [];

            for (const seat of seats) {
                if (!seat.classList.contains('selected')) {
                    selectedSeats.push(seat);
                    if (selectedSeats.length === friends) {
                        break;
                    }
                }
            }

            if (selectedSeats.length === friends) {
                for (const seat of selectedSeats) {
                    seat.classList.add('selected');
                }
                alert('Seats reserved for the group: ' + selectedSeats.map(seat => seat.textContent).join(', '));
            } else {
                alert('Not enough available seats for the group.');
            }
        }

        // Initialize the theater grid
        createTheater(5, 8);
    

