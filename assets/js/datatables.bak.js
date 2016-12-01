var App = (function () {
  'use strict';
  var responsiveHelper = undefined;
  var breakpointDefinition = {
      tablet: 1024,
      phone: 480
  };
  App.dataTables = function( ){

    //We use this to apply style to certain elements
    $.extend( true, $.fn.dataTable.defaults, {
      dom:
        "<'row be-datatable-body'<'col-sm-12'tr>>" +
        "<'row be-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
    });
    var table = $("#table").DataTable({
      "scrollCollapse": true,
      "language": {
          "info": "Menampilkan _START_ Ke _END_ Dari _TOTAL_ Santri",
          "infoEmpty": "No records found",
          "infoFiltered": "",
          "zeroRecords": "Data Santri Tidak Ditemukan"
      },
      "processing": false,
      "serverSide": true,
      "bJQueryUI": false,
      "ajax": {
                'url': "procs/mi-all-srv.php",
                type: 'POST'
              },
      columns: [
                {title: "Instruksi", data: "Instruksi", "orderable": false, "searchable": false},
                {title: "NIS", data: "NIS" },
                {title: 'NISN', data: 'NISN' },
              	{title: 'Nama', data: 'Nama' },
              	{title: 'Nama Pendek', data: 'Nama Pendek' },
              	{title: 'Tempat Lahir', data: 'Tempat_Lahir' },
              	{title: 'Tanggal Lahir', data: 'Tanggal_Lahir'},
              	{title: 'L-P', data: 'L-P' },
              	{title: 'Agama', data: 'Agama' },
              	{title: 'Gol.Darah', data: 'Gol_Darah' },
              	{title: 'Jalan', data: 'Jalan' },
              	{title: 'Kampung', data: 'Kp' },
              	{title: 'RT', data: 'RT' },
              	{title: 'RW', data: 'RW' },
              	{title: 'Desa', data: 'Ds' },
              	{title: 'Kec.', data: 'Kec' },
              	{title: 'Kab-Kota', data: 'Kab-Kota' },
              	{title: 'Masuk Ke Kelas', data: 'Masuk Ke Kelas' },
              	{title: 'Lulusan TK-RA', data: 'Lulusan TK-RA' },
              	{title: 'Nama RA-TK', data: 'Nama RA-TK' },
              	{title: 'Nomor Seri Ijazah', data: 'Nomor_Seri_Ijazah' },
              	{title: 'Nama Ayah', data: 'Nama_Ayah' },
              	{title: 'Tempat Lahir Ayah', data: 'TmpLhr_Ayah' },
              	{title: 'Tgl. Lahir Ayah', data: 'TglLhr_Ayah' },
              	{title: 'Tahun Lahir Ayah', data: 'Thn_lahir_Ayah' },
              	{title: 'Pendidikan Ayah', data: 'Pendidikan_Ayah' },
              	{title: 'Pekerjaan Ayah', data: 'Pekerjaan_Ayah' },
              	{title: 'Penghasilan Ayah', data: 'Penghasilan_Ayah' },
              	{title: 'No. Telp Ayah', data: 'No_Telp_Ayah' },
              	{title: 'Nama Ibu', data: 'Nama_Ibu' },
              	{title: 'Tempat Lahir Ibu', data: 'TmpLhr_Ibu' },
              	{title: 'Tgl. Lahir Ibu', data: 'TglLhr_Ibu' },
              	{title: 'Tahun Lahir Ibu', data: 'Thn_lahir_Ibu' },
              	{title: 'Pendidikan Ibu', data: 'Pendidikan_Ibu' },
              	{title: 'Pekerjaan Ibu', data: 'Pekerjaan_Ibu' },
              	{title: 'Penghasilan Ibu', data: 'Penghasilan_Ibu' },
              	{title: 'No. Telp Ibu', data: 'No_Telp_Ibu' },
              	{title: 'Nama Wali', data: 'Nama_Wali' },
              	{title: 'Tempat Lahir Wali', data: 'TmpLhr_Wali' },
              	{title: 'Tgl. Lahir Wali', data: 'TglLhr_Wali' },
              	{title: 'Pendidikan Wali', data: 'Pendidikan_Wali' },
              	{title: 'Pekerjaan Wali', data: 'Pekerjaan_Wali' },
              	{title: 'No. Telp Wali', data: 'No_Telp_Wali' },
              	{title: 'Kls MI', data: 'Kls_MI' },
              	{title: 'Rombel MI', data: 'Rombel_MI' },
              	{title: 'Kls MD', data: 'Kls_MD' },
              	{title: 'Rombel MD', data: 'Rombel_MD' },
              	{title: 'ID Raport', data: 'ID_Raport' },
              	{title: 'ID Arsip Bayar', data: 'ID_ArsipByr' },
              	{title: 'No Tabungan', data: 'No_Tab' },
              	{title: 'Tgl Masuk', data: 'Tgl_Masuk' },
              	{title: 'Keluar', data: 'Keluar' },
              	{title: 'Tgl Keluar', data: 'Tgl_Keluar' },
              	{title: 'Kls Keluar', data: 'Kls_Keluar' },
              	{title: 'Alasan Keluar', data: 'Alasan_Keluar' },
              	{title: 'Photo', data: 'Photo' },
              	{title: 'Lulus', data: 'Lulus' },
              	{title: 'Lulus Tahun', data: 'Lulus_Tahun' },
              	{title: 'Jarak', data: 'Jarak' },
              	{title: 'Alat Transportasi', data: 'Alat_Transportasi' },
              	{title: 'No. KK', data: 'Nomor_KK' },
              	{title: 'No. KPS', data: 'Nomor_KPS' },
              	{title: 'No. BSM', data: 'Nomor_BSM' },
              	{title: 'No. PKH', data: 'Nomor_PKH' },
              	{title: 'Anak Ke', data: 'Anak_Ke' },
              	{title: 'Dari Bersaudara', data: 'Dari_Bersaudara' },
              	{title: 'Hobi', data: 'Hobi' },
              	{title: 'Cita-Cita', data: 'Cita-Cita' },
              	{title: 'Tingkat Ekonomi', data: 'Tingkat_Ekonomi' },
              	{title: 'Tunggakan', data: 'Tunggakan' },
              	{title: 'Cek', data: 'Cek' },
              	{title: 'Yatim', data: 'Yatim' },
              	{title: 'Miskin', data: 'Miskin' }
               ],
      "order": [
          ['NIS', "asc"]
      ],
      "iDisplayLength": 10,
      buttons: [
        {
          text: 'Clear',
          action: function ( e, dt, node, config ) {
              yadcf.exResetAllFilters(table);
          }
        },
        {
          extend: 'excelHtml5',
          className: 'btn-success',
          exportOptions: {
            columns: function ( idx, data, node ) {
              var isVisible = table.column( idx ).visible();
              var isNotForExport = $.inArray( idx, [0] ) !== -1;
              return isVisible && !isNotForExport ? true : false;
            }
          }
        },
        {
          extend: 'pdf',
          className: 'btn-danger',
          exportOptions: {
            columns: function ( idx, data, node ) {
              var isVisible = table.column( idx ).visible();
              var isNotForExport = $.inArray( idx, [0] ) !== -1;
              return isVisible && !isNotForExport ? true : false;
            }
          }
        },
        {
          extend: 'print',
          className: 'btn-warning',
          exportOptions: {
            columns: function ( idx, data, node ) {
              var isVisible = table.column( idx ).visible();
              var isNotForExport = $.inArray( idx, [0] ) !== -1;
              return isVisible && !isNotForExport ? true : false;
            }
          }
        },
        {
          extend: 'colvis',
          text: '<span class="icon mdi mdi-more-vert"></span>',
          columns: ':gt(0)'
        }
      ],
      "lengthMenu": [[6, 10, 25, 50, -1], [6, 10, 25, 50, "All"]],
      dom:  "<'row be-datatable-header'<'col-sm-6'l><'col-sm-6 text-right'B>>" +
            "<'row be-datatable-body'<'col-sm-12'tr>>" +
            "<'row be-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>",
      "bStateSave": true,
      "sScrollY": false,
      "sScrollX": "100%",
      "sScrollXInner": "110%",
      "bScrollCollapse": true,
      "fnDrawCallback": function( oSettings ) {
          $('.dataTables_scrollBody').perfectScrollbar('destroy').perfectScrollbar();
      },
    });
    var arr = [];
    for (var i = 1; i < table.columns().nodes().length; i++){
      arr.push({column_number: i,filter_type: "text",filter_reset_button_text: false});
    };
    yadcf.init(table, arr);
    yadcf.exResetAllFilters(table);
    $('.buttons-colvis').bind("click", function() {
      $('.dt-button-collection').perfectScrollbar('destroy').perfectScrollbar();
    });
  };
  return App;
})(App || {});
