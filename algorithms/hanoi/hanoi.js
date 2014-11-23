/**
 * Hanoi Demo
 */
function Hanoi(n, from, end, alli) {
	if (n == 1) {
		document.write('from:', from, 'to:', end + '<br/>');
	} else {
		Hanoi(n - 1, from, alli, end);
		Hanoi(1, from, end, alli);
		Hanoi(n - 1, alli, end, from);
	} 
	
}

Hanoi(3, 'A', 'C', 'B');