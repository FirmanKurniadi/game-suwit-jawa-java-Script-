var tanya = true;
while ( tanya ) {
// pilihan player

var p = prompt('pilih : gajah, semut, orang');

// pilihan cmputer

var comp = Math.random();

if( comp < 0.34 ) {
	comp = 'gajah';
} else if( comp >= 0.34 && comp < 0.67) {
	comp = 'orang';
} else {
	comp = 'semut';
}

var hasil = '';
// rules

if (p == comp) {
	hasil = 'seri!';
} else if ( p == 'gajah'){
	// if ( comp == 'orang'){
	// 	hasil == 'menang!';
	// } else { 
	// 	hasil == 'kalah!';
	// } 
	hasil = (comp == 'orang') ? 'menang!' : 'kalah!';
} else if (p == 'orang') {
	hasil = (comp == 'gajah') ? 'kalah!' :  'menang!';
}else if ( p == 'semut') {
	hasil = ( comp == 'orang') ? 'kalah!' : 'menang!'
} else {
	hasil = 'memasukan pilihan yang salah!';
}

//  tampilkan hasilnya
 alert ('kamu memilih : '+ p +' komputer memilih : '+ comp +' \nMaka hasilnya : kamu ' + hasil);

 tanya = confirm ( 'lagi?' );
 }
alert ( 'terima kasih telah bermain');
