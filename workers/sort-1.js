
onmessage = ( {data} ) => {
	sort( data );
}

/**
 * Bubble sort.
 * One of the most basic sorts, we compare each item with the next item, if it's larger we swap them.
 * We do this repeatedly for all items until 1 complete pass over the list results in no items swapping places.
 */
const sort = ( list ) => {
	// sort the list and return it to the client
	let changed = true;
	do
	{
		changed = false;
		for( let i = 0; i < list.length-1; i++ )
			if( list[i] > list[i+1] )
			{
				let temp = list[i];
				list[i] = list[i+1];
				list[i+1] = temp;
				changed = true;
			}
	}
	while( changed );

	// in this example we'll just send a message back to say we're done
	postMessage( list );
}