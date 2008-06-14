/**
 * @author Jean-Lou Dupont
 */
 
 ( function() {
 	
 	var text = 'PHByZSBjbGFzcz0iY29kZSIgc3R5bGU9ImJhY2tncm91bmQ6ICNFRUVFRUU7IGJvcmRlcjogcGFkZGluZzogMC4yZW0iPjxvbD48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj48c3BhbiBjbGFzcz0ia3cyIj4mbHQ7P3BocDwvc3Bhbj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPjxzcGFuIGNsYXNzPSJjb01VTFRJIj4vKio8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj48c3BhbiBjbGFzcz0iY29NVUxUSSI+Jm5ic3A7KiBCb3JnIHBhdHRlcm48L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj48c3BhbiBjbGFzcz0iY29NVUxUSSI+Jm5ic3A7KiAgVmFyaWF0aW9uIG9uIHRoZSBTaW5nbGV0b24gcGF0dGVybjwvc3Bhbj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkyIj48ZGl2IGNsYXNzPSJkZTIiPjxzcGFuIGNsYXNzPSJjb01VTFRJIj4mbmJzcDsqIDwvc3Bhbj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPjxzcGFuIGNsYXNzPSJjb01VTFRJIj4mbmJzcDsqIEV4ZWN1dGVzIHRoaXMgc2NyaXB0IGFuZCBzZWUgdGhlIHJlc3VsdDwvc3Bhbj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPjxzcGFuIGNsYXNzPSJjb01VTFRJIj4mbmJzcDsqIG1hdGNoaW5nIHRoZSBkYXRhIHByb3ZpZGVkIGF0IHRoZSBib3R0b20uPC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+PHNwYW4gY2xhc3M9ImNvTVVMVEkiPiZuYnNwOyogPC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+PHNwYW4gY2xhc3M9ImNvTVVMVEkiPiZuYnNwOyogQGF1dGhvciBKZWFuLUxvdSBEdXBvbnQ8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMiI+PGRpdiBjbGFzcz0iZGUyIj48c3BhbiBjbGFzcz0iY29NVUxUSSI+Jm5ic3A7KiBQUk9KRUNUIFNJVEU6IC8vaHR0cDovL3BocC1kZXNpZ24tcGF0dGVybnMtZXhhbXBsZXMuZ29vZ2xlY29kZS5jb20vPC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+PHNwYW4gY2xhc3M9ImNvTVVMVEkiPiZuYnNwOyovPC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+Jm5ic3A7PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj48c3BhbiBjbGFzcz0ia3cyIj5jbGFzczwvc3Bhbj4gYm9yZyA8c3BhbiBjbGFzcz0iYnIwIj4mIzEyMzs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4mbmJzcDs8L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkyIj48ZGl2IGNsYXNzPSJkZTIiPgk8c3BhbiBjbGFzcz0iY29NVUxUSSI+LyoqPC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+PHNwYW4gY2xhc3M9ImNvTVVMVEkiPgkgKiBTaGFyZWQgRGF0YTwvc3Bhbj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPjxzcGFuIGNsYXNzPSJjb01VTFRJIj4JICovPC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+CTxzcGFuIGNsYXNzPSJrdzIiPnByaXZhdGU8L3NwYW4+IDxhIGhyZWY9Imh0dHA6Ly93d3cucGhwLm5ldC9zdGF0aWMiPjxzcGFuIGNsYXNzPSJrdzMiPnN0YXRpYzwvc3Bhbj48L2E+IDxzcGFuIGNsYXNzPSJyZTEiPiR2YXJzPC9zcGFuPiA8c3BhbiBjbGFzcz0ic3kwIj49PC9zcGFuPiA8YSBocmVmPSJodHRwOi8vd3d3LnBocC5uZXQvYXJyYXkiPjxzcGFuIGNsYXNzPSJrdzMiPmFycmF5PC9zcGFuPjwvYT48c3BhbiBjbGFzcz0iYnIwIj4mIzQwOzwvc3Bhbj48c3BhbiBjbGFzcz0iYnIwIj4mIzQxOzwvc3Bhbj48c3BhbiBjbGFzcz0ic3kwIj47PC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+Jm5ic3A7PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMiI+PGRpdiBjbGFzcz0iZGUyIj4JPHNwYW4gY2xhc3M9ImNvTVVMVEkiPi8qKjwvc3Bhbj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPjxzcGFuIGNsYXNzPSJjb01VTFRJIj4JICogRGVmYXVsdCBHRVRURVI8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj48c3BhbiBjbGFzcz0iY29NVUxUSSI+CSAqLzwvc3Bhbj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPgk8c3BhbiBjbGFzcz0ia3cyIj5wdWJsaWM8L3NwYW4+IDxzcGFuIGNsYXNzPSJrdzIiPmZ1bmN0aW9uPC9zcGFuPiBfX2dldDxzcGFuIGNsYXNzPSJicjAiPiYjNDA7PC9zcGFuPiA8c3BhbiBjbGFzcz0icmUxIj4ka2V5PC9zcGFuPiA8c3BhbiBjbGFzcz0iYnIwIj4mIzQxOzwvc3Bhbj4gPHNwYW4gY2xhc3M9ImJyMCI+JiMxMjM7PC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+Jm5ic3A7PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMiI+PGRpdiBjbGFzcz0iZGUyIj4JCTxzcGFuIGNsYXNzPSJrdzEiPmlmPC9zcGFuPiA8c3BhbiBjbGFzcz0iYnIwIj4mIzQwOzwvc3Bhbj4gPHNwYW4gY2xhc3M9InN5MCI+ITwvc3Bhbj48YSBocmVmPSJodHRwOi8vd3d3LnBocC5uZXQvaXNzZXQiPjxzcGFuIGNsYXNzPSJrdzMiPmlzc2V0PC9zcGFuPjwvYT48c3BhbiBjbGFzcz0iYnIwIj4mIzQwOzwvc3Bhbj4gc2VsZjxzcGFuIGNsYXNzPSJzeTAiPjo6PC9zcGFuPjxzcGFuIGNsYXNzPSJyZTEiPiR2YXJzPC9zcGFuPjxzcGFuIGNsYXNzPSJicjAiPiYjOTE7PC9zcGFuPiA8c3BhbiBjbGFzcz0icmUxIj4ka2V5PC9zcGFuPiA8c3BhbiBjbGFzcz0iYnIwIj4mIzkzOzwvc3Bhbj4gPHNwYW4gY2xhc3M9ImJyMCI+JiM0MTs8L3NwYW4+IDxzcGFuIGNsYXNzPSJicjAiPiYjNDE7PC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+CQkJdGhyb3cgPHNwYW4gY2xhc3M9Imt3MiI+bmV3PC9zcGFuPiBFeGNlcHRpb248c3BhbiBjbGFzcz0iYnIwIj4mIzQwOzwvc3Bhbj4gPHNwYW4gY2xhc3M9InN0MCI+JnF1b3Q7aW52YWxpZCBrZXkmcXVvdDs8L3NwYW4+IDxzcGFuIGNsYXNzPSJicjAiPiYjNDE7PC9zcGFuPjxzcGFuIGNsYXNzPSJzeTAiPjs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4mbmJzcDs8L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPgkJPHNwYW4gY2xhc3M9Imt3MSI+cmV0dXJuPC9zcGFuPiBzZWxmPHNwYW4gY2xhc3M9InN5MCI+Ojo8L3NwYW4+PHNwYW4gY2xhc3M9InJlMSI+JHZhcnM8L3NwYW4+PHNwYW4gY2xhc3M9ImJyMCI+JiM5MTs8L3NwYW4+IDxzcGFuIGNsYXNzPSJyZTEiPiRrZXk8L3NwYW4+IDxzcGFuIGNsYXNzPSJicjAiPiYjOTM7PC9zcGFuPjxzcGFuIGNsYXNzPSJzeTAiPjs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4JPHNwYW4gY2xhc3M9ImJyMCI+JiMxMjU7PC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTIiPjxkaXYgY2xhc3M9ImRlMiI+CTxzcGFuIGNsYXNzPSJjb01VTFRJIj4vKio8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj48c3BhbiBjbGFzcz0iY29NVUxUSSI+CSAqIERlZmF1bHQgU0VUVEVSPC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+PHNwYW4gY2xhc3M9ImNvTVVMVEkiPgkgKi88L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4JPHNwYW4gY2xhc3M9Imt3MiI+cHVibGljPC9zcGFuPiA8c3BhbiBjbGFzcz0ia3cyIj5mdW5jdGlvbjwvc3Bhbj4gX19zZXQ8c3BhbiBjbGFzcz0iYnIwIj4mIzQwOzwvc3Bhbj4gPHNwYW4gY2xhc3M9InJlMSI+JGtleTwvc3Bhbj48c3BhbiBjbGFzcz0ic3kwIj4sPC9zcGFuPiA8c3BhbiBjbGFzcz0icmUxIj4kdmFsdWU8L3NwYW4+IDxzcGFuIGNsYXNzPSJicjAiPiYjNDE7PC9zcGFuPiA8c3BhbiBjbGFzcz0iYnIwIj4mIzEyMzs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4mbmJzcDs8L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkyIj48ZGl2IGNsYXNzPSJkZTIiPgkJc2VsZjxzcGFuIGNsYXNzPSJzeTAiPjo6PC9zcGFuPjxzcGFuIGNsYXNzPSJyZTEiPiR2YXJzPC9zcGFuPjxzcGFuIGNsYXNzPSJicjAiPiYjOTE7PC9zcGFuPiA8c3BhbiBjbGFzcz0icmUxIj4ka2V5PC9zcGFuPiA8c3BhbiBjbGFzcz0iYnIwIj4mIzkzOzwvc3Bhbj4gPHNwYW4gY2xhc3M9InN5MCI+PTwvc3Bhbj4gPHNwYW4gY2xhc3M9InJlMSI+JHZhbHVlPC9zcGFuPjxzcGFuIGNsYXNzPSJzeTAiPjs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4mbmJzcDs8L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPgk8c3BhbiBjbGFzcz0iYnIwIj4mIzEyNTs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj48c3BhbiBjbGFzcz0iYnIwIj4mIzEyNTs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4mbmJzcDs8L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkyIj48ZGl2IGNsYXNzPSJkZTIiPjxzcGFuIGNsYXNzPSJrdzIiPmNsYXNzPC9zcGFuPiBUZXN0PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4JPHNwYW4gY2xhc3M9Imt3MiI+ZXh0ZW5kczwvc3Bhbj4gYm9yZyA8c3BhbiBjbGFzcz0iYnIwIj4mIzEyMzs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4mbmJzcDs8L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPgk8c3BhbiBjbGFzcz0ia3cyIj52YXI8L3NwYW4+IDxzcGFuIGNsYXNzPSJyZTEiPiRpbnN0YW5jZURhdGE8L3NwYW4+IDxzcGFuIGNsYXNzPSJzeTAiPj08L3NwYW4+IDxzcGFuIGNsYXNzPSJrdzIiPm51bGw8L3NwYW4+PHNwYW4gY2xhc3M9InN5MCI+Ozwvc3Bhbj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPiZuYnNwOzwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTIiPjxkaXYgY2xhc3M9ImRlMiI+CTxzcGFuIGNsYXNzPSJrdzIiPnB1YmxpYzwvc3Bhbj4gPHNwYW4gY2xhc3M9Imt3MiI+ZnVuY3Rpb248L3NwYW4+IF9fY29uc3RydWN0PHNwYW4gY2xhc3M9ImJyMCI+JiM0MDs8L3NwYW4+IDxzcGFuIGNsYXNzPSJyZTEiPiRuYW1lPC9zcGFuPiA8c3BhbiBjbGFzcz0iYnIwIj4mIzQxOzwvc3Bhbj4gPHNwYW4gY2xhc3M9ImJyMCI+JiMxMjM7PC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+CQk8c3BhbiBjbGFzcz0icmUxIj4kdGhpczwvc3Bhbj48c3BhbiBjbGFzcz0ic3kwIj4tJmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz0ibWUxIj5pbnN0YW5jZURhdGE8L3NwYW4+IDxzcGFuIGNsYXNzPSJzeTAiPj08L3NwYW4+IDxzcGFuIGNsYXNzPSJyZTEiPiRuYW1lPC9zcGFuPjxzcGFuIGNsYXNzPSJzeTAiPjs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4JPHNwYW4gY2xhc3M9ImJyMCI+JiMxMjU7PC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+Jm5ic3A7PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4JPHNwYW4gY2xhc3M9Imt3MiI+cHVibGljPC9zcGFuPiA8c3BhbiBjbGFzcz0ia3cyIj5mdW5jdGlvbjwvc3Bhbj4gZWNob05hbWU8c3BhbiBjbGFzcz0iYnIwIj4mIzQwOzwvc3Bhbj48c3BhbiBjbGFzcz0iYnIwIj4mIzQxOzwvc3Bhbj4gPHNwYW4gY2xhc3M9ImJyMCI+JiMxMjM7PC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTIiPjxkaXYgY2xhc3M9ImRlMiI+CQk8YSBocmVmPSJodHRwOi8vd3d3LnBocC5uZXQvZWNobyI+PHNwYW4gY2xhc3M9Imt3MyI+ZWNobzwvc3Bhbj48L2E+IDxzcGFuIGNsYXNzPSJzdDAiPiZxdW90O0NsYXNzOiAmcXVvdDs8L3NwYW4+PHNwYW4gY2xhc3M9InN5MCI+Ljwvc3Bhbj48c3BhbiBjbGFzcz0ia3cyIj5fX0NMQVNTX188L3NwYW4+PHNwYW4gY2xhc3M9InN5MCI+Ljwvc3Bhbj48c3BhbiBjbGFzcz0ic3QwIj4mcXVvdDssIGluc3RhbmNlIG5hbWU9ICZxdW90Ozwvc3Bhbj48c3BhbiBjbGFzcz0ic3kwIj4uPC9zcGFuPjxzcGFuIGNsYXNzPSJyZTEiPiR0aGlzPC9zcGFuPjxzcGFuIGNsYXNzPSJzeTAiPi0mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPSJtZTEiPmluc3RhbmNlRGF0YTwvc3Bhbj4gPHNwYW4gY2xhc3M9InN5MCI+Ljwvc3Bhbj4gPHNwYW4gY2xhc3M9InN0MCI+JnF1b3Q7PHNwYW4gY2xhc3M9ImVzMCI+XG48L3NwYW4+JnF1b3Q7PC9zcGFuPjxzcGFuIGNsYXNzPSJzeTAiPjs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4JPHNwYW4gY2xhc3M9ImJyMCI+JiMxMjU7PC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+PHNwYW4gY2xhc3M9ImJyMCI+JiMxMjU7PC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+Jm5ic3A7PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj48c3BhbiBjbGFzcz0iY29NVUxUSSI+LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqPC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTIiPjxkaXYgY2xhc3M9ImRlMiI+PHNwYW4gY2xhc3M9ImNvTVVMVEkiPiZuYnNwOyogCQkJCQkJRVhBTVBMRSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqPC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+PHNwYW4gY2xhc3M9ImNvTVVMVEkiPiZuYnNwOyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLzwvc3Bhbj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPiZuYnNwOzwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+PHNwYW4gY2xhc3M9InJlMSI+JGE8L3NwYW4+IDxzcGFuIGNsYXNzPSJzeTAiPj08L3NwYW4+IDxzcGFuIGNsYXNzPSJrdzIiPm5ldzwvc3Bhbj4gVGVzdDxzcGFuIGNsYXNzPSJicjAiPiYjNDA7PC9zcGFuPiA8c3BhbiBjbGFzcz0ic3QwIj4mcXVvdDtpbnN0YW5jZSBBJnF1b3Q7PC9zcGFuPiA8c3BhbiBjbGFzcz0iYnIwIj4mIzQxOzwvc3Bhbj48c3BhbiBjbGFzcz0ic3kwIj47PC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+PHNwYW4gY2xhc3M9InJlMSI+JGI8L3NwYW4+IDxzcGFuIGNsYXNzPSJzeTAiPj08L3NwYW4+IDxzcGFuIGNsYXNzPSJrdzIiPm5ldzwvc3Bhbj4gVGVzdDxzcGFuIGNsYXNzPSJicjAiPiYjNDA7PC9zcGFuPiA8c3BhbiBjbGFzcz0ic3QwIj4mcXVvdDtpbnN0YW5jZSBCJnF1b3Q7PC9zcGFuPiA8c3BhbiBjbGFzcz0iYnIwIj4mIzQxOzwvc3Bhbj48c3BhbiBjbGFzcz0ic3kwIj47PC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTIiPjxkaXYgY2xhc3M9ImRlMiI+Jm5ic3A7PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj48c3BhbiBjbGFzcz0icmUxIj4kYTwvc3Bhbj48c3BhbiBjbGFzcz0ic3kwIj4tJmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz0ibWUxIj5zaGFyZWRTdGF0ZTwvc3Bhbj4gPHNwYW4gY2xhc3M9InN5MCI+PTwvc3Bhbj4gPHNwYW4gY2xhc3M9InN0MCI+JnF1b3Q7SGkhPHNwYW4gY2xhc3M9ImVzMCI+XG48L3NwYW4+JnF1b3Q7PC9zcGFuPjxzcGFuIGNsYXNzPSJzeTAiPjs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4mbmJzcDs8L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPjxhIGhyZWY9Imh0dHA6Ly93d3cucGhwLm5ldC9lY2hvIj48c3BhbiBjbGFzcz0ia3czIj5lY2hvPC9zcGFuPjwvYT4gPHNwYW4gY2xhc3M9InJlMSI+JGI8L3NwYW4+PHNwYW4gY2xhc3M9InN5MCI+LSZndDs8L3NwYW4+PHNwYW4gY2xhc3M9Im1lMSI+c2hhcmVkU3RhdGU8L3NwYW4+PHNwYW4gY2xhc3M9InN5MCI+Ozwvc3Bhbj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPiZuYnNwOzwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTIiPjxkaXYgY2xhc3M9ImRlMiI+PHNwYW4gY2xhc3M9InJlMSI+JGE8L3NwYW4+PHNwYW4gY2xhc3M9InN5MCI+LSZndDs8L3NwYW4+PHNwYW4gY2xhc3M9Im1lMSI+ZWNob05hbWU8L3NwYW4+PHNwYW4gY2xhc3M9ImJyMCI+JiM0MDs8L3NwYW4+PHNwYW4gY2xhc3M9ImJyMCI+JiM0MTs8L3NwYW4+PHNwYW4gY2xhc3M9InN5MCI+Ozwvc3Bhbj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPjxzcGFuIGNsYXNzPSJyZTEiPiRiPC9zcGFuPjxzcGFuIGNsYXNzPSJzeTAiPi0mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPSJtZTEiPmVjaG9OYW1lPC9zcGFuPjxzcGFuIGNsYXNzPSJicjAiPiYjNDA7PC9zcGFuPjxzcGFuIGNsYXNzPSJicjAiPiYjNDE7PC9zcGFuPjxzcGFuIGNsYXNzPSJzeTAiPjs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4mbmJzcDs8L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPl9faGFsdF9jb21waWxlcjxzcGFuIGNsYXNzPSJicjAiPiYjNDA7PC9zcGFuPjxzcGFuIGNsYXNzPSJicjAiPiYjNDE7PC9zcGFuPjxzcGFuIGNsYXNzPSJzeTAiPjs8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj4mbmJzcDs8L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkyIj48ZGl2IGNsYXNzPSJkZTIiPjxzcGFuIGNsYXNzPSJjb01VTFRJIj4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKio8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj48c3BhbiBjbGFzcz0iY29NVUxUSSI+Jm5ic3A7KiAJCQkJCQlSRVNVTFRTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICo8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj48c3BhbiBjbGFzcz0iY29NVUxUSSI+Jm5ic3A7KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovPC9zcGFuPjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJsaTEiPjxkaXYgY2xhc3M9ImRlMSI+Jm5ic3A7PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMSI+PGRpdiBjbGFzcz0iZGUxIj5IaTxzcGFuIGNsYXNzPSJzeTAiPiE8L3NwYW4+PC9kaXY+PC9saT48bGkgY2xhc3M9ImxpMiI+PGRpdiBjbGFzcz0iZGUyIj48c3BhbiBjbGFzcz0ia3cyIj5DbGFzczwvc3Bhbj48c3BhbiBjbGFzcz0ic3kwIj46PC9zcGFuPiBUZXN0PHNwYW4gY2xhc3M9InN5MCI+LDwvc3Bhbj4gaW5zdGFuY2UgbmFtZTxzcGFuIGNsYXNzPSJzeTAiPj08L3NwYW4+IGluc3RhbmNlIEE8L2Rpdj48L2xpPjxsaSBjbGFzcz0ibGkxIj48ZGl2IGNsYXNzPSJkZTEiPjxzcGFuIGNsYXNzPSJrdzIiPkNsYXNzPC9zcGFuPjxzcGFuIGNsYXNzPSJzeTAiPjo8L3NwYW4+IFRlc3Q8c3BhbiBjbGFzcz0ic3kwIj4sPC9zcGFuPiBpbnN0YW5jZSBuYW1lPHNwYW4gY2xhc3M9InN5MCI+PTwvc3Bhbj4gaW5zdGFuY2UgQjwvZGl2PjwvbGk+PC9vbD48L3ByZT4=';
	var eid = 'borg';
	var e, decoded_text; 		
	
	e = document.getElementById( eid );
	 	
	decoded_text = Base64.decode( text );
	
 	e.innerHTML = decoded_text;
 	
 })();
