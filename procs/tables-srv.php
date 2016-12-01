<?php

/*
 * DataTables example server-side processing script.
 *
 * Please note that this script is intentionally extremely simply to show how
 * server-side processing can be implemented, and probably shouldn't be used as
 * the basis for a large complex system. It is suitable for simple use cases as
 * for learning.
 *
 * See http://datatables.net/usage/server-side for full details on the server-
 * side processing requirements of DataTables.
 *
 * @license MIT - http://datatables.net/license_mit
 */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Easy set variables
 */

// DB table to use
$table = 'biodata';

// Table's primary key
$primaryKey = 'NIS';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
	array( 'db' => 'NIS','dt' => 'Instruksi' ),
	array( 'db' => 'NIS','dt' => 'NIS' ),
	array( 'db' => 'NISN','dt' => 'NISN' ),
	array( 'db' => 'Nama','dt' => 'Nama' ),
	array( 'db' => 'Nama Pendek','dt' => 'Nama Pendek' ),
	array( 'db' => 'Tempat_Lahir', 'dt' => 'Tempat_Lahir' ),
	array(
		'db'        => 'Tanggal_Lahir',
		'dt'        => 'Tanggal_Lahir',
		'formatter' => function( $d, $row ) {
			return date( 'd-m-Y', strtotime($d));
		}
	),
	array( 'db' => 'L-P','dt' => 'L-P' ),
	array( 'db' => 'Agama','dt' => 'Agama' ),
	array( 'db' => 'Gol_Darah','dt' => 'Gol_Darah' ),
	array( 'db' => 'Jalan','dt' => 'Jalan' ),
	array( 'db' => 'Kp',     'dt' => 'Kp' ),
	array( 'db' => 'RT','dt' => 'RT' ),
	array( 'db' => 'RW','dt' => 'RW' ),
	array( 'db' => 'Ds','dt' => 'Ds' ),
	array( 'db' => 'Kec','dt' => 'Kec' ),
	array( 'db' => 'Kab-Kota','dt' => 'Kab-Kota' ),
	array( 'db' => 'Masuk Ke Kelas','dt' => 'Masuk Ke Kelas' ),
	array( 'db' => 'Lulusan TK-RA','dt' => 'Lulusan TK-RA' ),
	array( 'db' => 'Nama RA-TK','dt' => 'Nama RA-TK' ),
	array( 'db' => 'Nomor_Seri_Ijazah','dt' => 'Nomor_Seri_Ijazah' ),
	array( 'db' => 'Nama_Ayah',  'dt' => 'Nama_Ayah' ),
	array( 'db' => 'TmpLhr_Ayah','dt' => 'TmpLhr_Ayah' ),
	array(
		'db'        => 'TglLhr_Ayah',
		'dt'        => 'TglLhr_Ayah',
		'formatter' => function( $d, $row ) {
			return date( 'd-m-Y', strtotime($d));
		}
	),
	array( 'db' => 'Thn_lahir_Ayah','dt' => 'Thn_lahir_Ayah' ),
	array( 'db' => 'Pendidikan_Ayah','dt' => 'Pendidikan_Ayah' ),
	array( 'db' => 'Pekerjaan_Ayah','dt' => 'Pekerjaan_Ayah' ),
	array( 'db' => 'Penghasilan_Ayah','dt' => 'Penghasilan_Ayah' ),
	array( 'db' => 'No_Telp_Ayah','dt' => 'No_Telp_Ayah' ),
	array( 'db' => 'Nama_Ibu',     'dt' => 'Nama_Ibu' ),
	array( 'db' => 'TmpLhr_Ibu','dt' => 'TmpLhr_Ibu' ),
	array(
		'db'        => 'TglLhr_Ibu',
		'dt'        => 'TglLhr_Ibu',
		'formatter' => function( $d, $row ) {
			return date( 'd-m-Y', strtotime($d));
		}
	),
	array( 'db' => 'Thn_lahir_Ibu','dt' => 'Thn_lahir_Ibu' ),
	array( 'db' => 'Pendidikan_Ibu','dt' => 'Pendidikan_Ibu' ),
	array( 'db' => 'Pekerjaan_Ibu','dt' => 'Pekerjaan_Ibu' ),
	array( 'db' => 'Penghasilan_Ibu','dt' => 'Penghasilan_Ibu' ),
	array( 'db' => 'No_Telp_Ibu','dt' => 'No_Telp_Ibu' ),
	array( 'db' => 'Nama_Wali',     'dt' => 'Nama_Wali' ),
	array( 'db' => 'TmpLhr_Wali','dt' => 'TmpLhr_Wali' ),
	array(
		'db'        => 'TglLhr_Wali',
		'dt'        => 'TglLhr_Wali',
		'formatter' => function( $d, $row ) {
			return date( 'd-m-Y', strtotime($d));
		}
	),
	array( 'db' => 'Pendidikan_Wali','dt' => 'Pendidikan_Wali' ),
	array( 'db' => 'Pekerjaan_Wali','dt' => 'Pekerjaan_Wali' ),
	array( 'db' => 'No_Telp_Wali','dt' => 'No_Telp_Wali' ),
	array( 'db' => 'Kls_MI','dt' => 'Kls_MI' ),
	array( 'db' => 'Rombel_MI','dt' => 'Rombel_MI' ),
	array( 'db' => 'Kls_MD','dt' => 'Kls_MD' ),
	array( 'db' => 'Rombel_MD','dt' => 'Rombel_MD' ),
	array( 'db' => 'ID_Raport','dt' => 'ID_Raport' ),
	array( 'db' => 'ID_ArsipByr','dt' => 'ID_ArsipByr' ),
	array( 'db' => 'No_Tab','dt' => 'No_Tab' ),
	array(
		'db'        => 'Tgl_Masuk',
		'dt'        => 'Tgl_Masuk',
		'formatter' => function( $d, $row ) {
			return date( 'd-m-Y', strtotime($d));
		}
	),
	array( 'db' => 'Keluar','dt' => 'Keluar' ),
	array(
		'db'        => 'Tgl_Keluar',
		'dt'        => 'Tgl_Keluar',
		'formatter' => function( $d, $row ) {
			return date( 'd-m-Y', strtotime($d));
		}
	),
	array( 'db' => 'Kls_Keluar','dt' => 'Kls_Keluar' ),
	array( 'db' => 'Alasan_Keluar','dt' => 'Alasan_Keluar' ),
	array( 'db' => 'Photo','dt' => 'Photo' ),
	array( 'db' => 'Lulus','dt' => 'Lulus' ),
	array( 'db' => 'Lulus_Tahun','dt' => 'Lulus_Tahun' ),
	array( 'db' => 'Jarak','dt' => 'Jarak' ),
	array( 'db' => 'Alat_Transportasi','dt' => 'Alat_Transportasi' ),
	array( 'db' => 'Nomor_KK','dt' => 'Nomor_KK' ),
	array( 'db' => 'No_KPS','dt' => 'Nomor_KPS' ),
	array( 'db' => 'No_BSM','dt' => 'Nomor_BSM' ),
	array( 'db' => 'No_PKH','dt' => 'Nomor_PKH' ),
	array( 'db' => 'Anak_Ke','dt' => 'Anak_Ke' ),
	array( 'db' => 'Dari_Bersaudara','dt' => 'Dari_Bersaudara' ),
	array( 'db' => 'Hobi','dt' => 'Hobi' ),
	array( 'db' => 'Cita-Cita','dt' => 'Cita-Cita' ),
	array( 'db' => 'Tingkat_Ekonomi','dt' => 'Tingkat_Ekonomi' ),
	array( 'db' => 'Tunggakan','dt' => 'Tunggakan' ),
	array( 'db' => 'Cek','dt' => 'Cek' ),
	array( 'db' => 'Yatim','dt' => 'Yatim' ),
	array( 'db' => 'Miskin','dt' => 'Miskin' ),
);

// SQL server connection information
$sql_details = array(
	'user' => 'root',
	'pass' => '',
	'db'   => 'sekolah',
	'host' => 'localhost'
);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */
$kondisitemp = $_POST['kondisi'];
$kondisi = function( $syarat )
{
	$i = 0;
	$out = '';
	foreach ($syarat as $key => $value) {
		if ($value != "") {
			if ($i != 0) {
				$out .= ' AND ';
			}
			$out .= $key.' = '.$value;
		}
		$i++;
	}
	return $out;
};
require( 'ssp.class.php' );

echo json_encode(
	SSP::complex( $_POST, $sql_details, $table, $primaryKey, $columns, null, $kondisi($kondisitemp) )
);
