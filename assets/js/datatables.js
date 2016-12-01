/* ============================================================
 * DataTables
 * Generate advanced tables with sorting, export options using
 * jQuery DataTables plugin
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
(function($) {

    'use strict';
    var hash = location.hash;
    if (hash=='#all-aktip') {
      var syarat = {"kondisi[MI]": 1,"kondisi[MD]": 1,"kondisi[Lulus]": 0,"kondisi[Keluar]": 0};
      var judul = 'Santri Yang Masih Aktip Di Madrasah Ibtidaiyah & Diniyah';
    }else
    if (hash=='#all-all') {
      var syarat = {"kondisi[MI]": 1,"kondisi[MD]": 1,"kondisi[Lulus]": null,"kondisi[Keluar]": null};
      var judul = 'Semua Santri Di Madrasah Ibtidaiyah & Diniyah';
    }else
    if (hash=='#all-lulus') {
      var syarat = {"kondisi[MI]": 1,"kondisi[MD]": 1,"kondisi[Lulus]": 1,"kondisi[Keluar]": 0};
      var judul = 'Santri Yang Telah Lulus Di Madrasah Ibtidaiyah & Diniyah';
    }else
    if (hash=='#all-keluar') {
      var syarat = {"kondisi[MI]": 1,"kondisi[MD]": 1,"kondisi[Lulus]": 0,"kondisi[Keluar]": 1};
      var judul = 'Santri Yang Telah Keluar Di Madrasah Ibtidaiyah & Diniyah';
    }else
    if (hash=='#md-aktip') {
      var syarat = {"kondisi[MI]": 0,"kondisi[MD]": 1,"kondisi[Lulus]": 0,"kondisi[Keluar]": 0};
      var judul = 'Santri Yang Masih Aktip Di Madrasah Diniyah';
    }else
    if (hash=='#md-all') {
      var syarat = {"kondisi[MI]": 0,"kondisi[MD]": 1,"kondisi[Lulus]": null,"kondisi[Keluar]": null};
      var judul = 'Semua Santri Di Madrasah Diniyah';
    }else
    if (hash=='#md-lulus') {
      var syarat = {"kondisi[MI]": 0,"kondisi[MD]": 1,"kondisi[Lulus]": 1,"kondisi[Keluar]": 0};
      var judul = 'Santri Yang Telah Lulus Di Madrasah Diniyah';
    }else
    if (hash=='#md-keluar') {
      var syarat = {"kondisi[MI]": 0,"kondisi[MD]": 1,"kondisi[Lulus]": 0,"kondisi[Keluar]": 1};
      var judul = 'Santri Yang Telah Keluar Di Madrasah Diniyah';
    }else
    if (hash=='#mi-aktip') {
      var syarat = {"kondisi[MI]": 1,"kondisi[MD]": 0,"kondisi[Lulus]": 0,"kondisi[Keluar]": 0};
      var judul = 'Santri Yang Masih Aktip Di Madrasah Ibtidaiyah';
    }else
    if (hash=='#mi-all') {
      var syarat = {"kondisi[MI]": 1,"kondisi[MD]": 0,"kondisi[Lulus]": null,"kondisi[Keluar]": null};
      var judul = 'Semua Santri Di Madrasah Ibtidaiyah';
    }else
    if (hash=='#mi-lulus') {
      var syarat = {"kondisi[MI]": 1,"kondisi[MD]": 0,"kondisi[Lulus]": 1,"kondisi[Keluar]": 0};
      var judul = 'Santri Yang Telah Lulus Di Madrasah Ibtidaiyah';
    }else
    if (hash=='#mi-keluar') {
      var syarat = {"kondisi[MI]": 1,"kondisi[MD]": 0,"kondisi[Lulus]": 0,"kondisi[Keluar]": 1};
      var judul = 'Santri Yang Telah Keluar Di Madrasah Ibtidaiyah';
    };
    var responsiveHelper = undefined;
    var breakpointDefinition = {
        tablet: 1024,
        phone: 480
    };

    var table = $('#tableWithExportOptions').DataTable({
        "sDom": "<'row'<'col-sm-4'l><'col-sm-4'f><'col-sm-4'<'pull-right'B>>><'table-responsive't><'row'<p i>>",
        // dom: 'Bfrtip',
        "destroy": true,
        "scrollCollapse": true,
        "language": {
            "info": "Menampilkan _START_ Ke _END_ Dari _TOTAL_ Santri",
            "infoEmpty": "Tidak Ada Data Santri",
            "infoFiltered": "",
            "zeroRecords": "Data Santri Tidak Ditemukan",
            searchPlaceholder: "Cari Santri",
            "sSearch": ""
        },
        "bJQueryUI": false,
        "processing": false,
        "serverSide": true,
        "ajax": {
                  'url': "procs/tables-srv.php",
                  data: syarat,
                  type: 'POST'
                },
        columns: [
                  {title: "Instruksi", data: "Instruksi", "orderable": false},
                  {title: "NIS", data: "NIS" },
                  {title: 'NISN', data: 'NISN', "visible": false  },
                	{title: 'Nama', data: 'Nama' },
                	{title: 'Nama Pendek', data: 'Nama Pendek', "visible": false },
                	{title: 'Tempat Lahir', data: 'Tempat_Lahir' },
                	{title: 'Tanggal Lahir', data: 'Tanggal_Lahir'},
                	{title: 'L-P', data: 'L-P', "visible": false },
                	{title: 'Agama', data: 'Agama', "visible": false },
                	{title: 'Gol.Darah', data: 'Gol_Darah', "visible": false },
                	{title: 'Jalan', data: 'Jalan', "visible": false },
                	{title: 'Kampung', data: 'Kp' },
                	{title: 'RT', data: 'RT', "visible": false },
                	{title: 'RW', data: 'RW', "visible": false },
                	{title: 'Desa', data: 'Ds', "visible": false },
                	{title: 'Kec.', data: 'Kec', "visible": false },
                	{title: 'Kab-Kota', data: 'Kab-Kota', "visible": false },
                	{title: 'Masuk Ke Kelas', data: 'Masuk Ke Kelas', "visible": false },
                	{title: 'Lulusan TK-RA', data: 'Lulusan TK-RA', "visible": false },
                	{title: 'Nama RA-TK', data: 'Nama RA-TK', "visible": false },
                	{title: 'Nomor Seri Ijazah', data: 'Nomor_Seri_Ijazah', "visible": false },
                	{title: 'Nama Ayah', data: 'Nama_Ayah' },
                	{title: 'Tempat Lahir Ayah', data: 'TmpLhr_Ayah', "visible": false },
                	{title: 'Tgl. Lahir Ayah', data: 'TglLhr_Ayah', "visible": false },
                	{title: 'Tahun Lahir Ayah', data: 'Thn_lahir_Ayah', "visible": false },
                	{title: 'Pendidikan Ayah', data: 'Pendidikan_Ayah', "visible": false },
                	{title: 'Pekerjaan Ayah', data: 'Pekerjaan_Ayah', "visible": false },
                	{title: 'Penghasilan Ayah', data: 'Penghasilan_Ayah', "visible": false },
                	{title: 'No. Telp Ayah', data: 'No_Telp_Ayah', "visible": false },
                	{title: 'Nama Ibu', data: 'Nama_Ibu' },
                	{title: 'Tempat Lahir Ibu', data: 'TmpLhr_Ibu', "visible": false },
                	{title: 'Tgl. Lahir Ibu', data: 'TglLhr_Ibu', "visible": false },
                	{title: 'Tahun Lahir Ibu', data: 'Thn_lahir_Ibu', "visible": false },
                	{title: 'Pendidikan Ibu', data: 'Pendidikan_Ibu', "visible": false },
                	{title: 'Pekerjaan Ibu', data: 'Pekerjaan_Ibu', "visible": false },
                	{title: 'Penghasilan Ibu', data: 'Penghasilan_Ibu', "visible": false },
                	{title: 'No. Telp Ibu', data: 'No_Telp_Ibu', "visible": false },
                	{title: 'Nama Wali', data: 'Nama_Wali', "visible": false },
                	{title: 'Tempat Lahir Wali', data: 'TmpLhr_Wali', "visible": false },
                	{title: 'Tgl. Lahir Wali', data: 'TglLhr_Wali', "visible": false },
                	{title: 'Pendidikan Wali', data: 'Pendidikan_Wali', "visible": false },
                	{title: 'Pekerjaan Wali', data: 'Pekerjaan_Wali', "visible": false },
                	{title: 'No. Telp Wali', data: 'No_Telp_Wali', "visible": false },
                	{title: 'Kls MI', data: 'Kls_MI', "visible": false },
                	{title: 'Rombel MI', data: 'Rombel_MI', "visible": false },
                	{title: 'Kls MD', data: 'Kls_MD', "visible": false },
                	{title: 'Rombel MD', data: 'Rombel_MD', "visible": false },
                	{title: 'ID Raport', data: 'ID_Raport', "visible": false },
                	{title: 'ID Arsip Bayar', data: 'ID_ArsipByr', "visible": false },
                	{title: 'No Tabungan', data: 'No_Tab', "visible": false },
                	{title: 'Tgl Masuk', data: 'Tgl_Masuk', "visible": false },
                	{title: 'Keluar', data: 'Keluar', "visible": false },
                	{title: 'Tgl Keluar', data: 'Tgl_Keluar', "visible": false },
                	{title: 'Kls Keluar', data: 'Kls_Keluar', "visible": false },
                	{title: 'Alasan Keluar', data: 'Alasan_Keluar', "visible": false },
                	{title: 'Photo', data: 'Photo', "visible": false },
                	{title: 'Lulus', data: 'Lulus', "visible": false },
                	{title: 'Lulus Tahun', data: 'Lulus_Tahun', "visible": false },
                	{title: 'Jarak', data: 'Jarak', "visible": false },
                	{title: 'Alat Transportasi', data: 'Alat_Transportasi', "visible": false },
                	{title: 'No. KK', data: 'Nomor_KK', "visible": false },
                	{title: 'No. KPS', data: 'Nomor_KPS', "visible": false },
                	{title: 'No. BSM', data: 'Nomor_BSM', "visible": false },
                	{title: 'No. PKH', data: 'Nomor_PKH', "visible": false },
                	{title: 'Anak Ke', data: 'Anak_Ke', "visible": false },
                	{title: 'Dari Bersaudara', data: 'Dari_Bersaudara', "visible": false },
                	{title: 'Hobi', data: 'Hobi', "visible": false },
                	{title: 'Cita-Cita', data: 'Cita-Cita', "visible": false },
                	{title: 'Tingkat Ekonomi', data: 'Tingkat_Ekonomi', "visible": false },
                	{title: 'Tunggakan', data: 'Tunggakan', "visible": false },
                	{title: 'Cek', data: 'Cek', "visible": false },
                	{title: 'Yatim', data: 'Yatim', "visible": false },
                	{title: 'Miskin', data: 'Miskin', "visible": false }
                 ],
        "order": [
            [1, "asc"]
        ],
        "iDisplayLength": 6,
        buttons: [
          {
            text: 'Clear',
            text: '<i class="fa fa-square-o"></i>',
            className: 'btn btn-warning',
            action: function ( e, dt, node, config ) {
                // yadcf.exResetAllFilters(table);
                table.fnReloadAjax();
            }
          },
          {
            extend: 'excelHtml5',
            text: '<i class="fa fa-file-excel-o"></i>',
            className: 'btn btn-success',
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
            text: '<i class="fa fa-eye"></i>',
            className: 'btn btn-default',
            columns: ':gt(0)'
          },
        ],
        "lengthMenu": [[6, 10, 25, 50, -1], [6, 10, 25, 50, "All"]],
        fnDrawCallback: function(oSettings) {
            $('.export-options-container').append($('.exportOptions'));

            $('#ToolTables_tableWithExportOptions_0').tooltip({
                title: 'Export as CSV',
                container: 'body'
            });

            $('#ToolTables_tableWithExportOptions_1').tooltip({
                title: 'Export as Excel',
                container: 'body'
            });

            $('#ToolTables_tableWithExportOptions_2').tooltip({
                title: 'Export as PDF',
                container: 'body'
            });

            $('#ToolTables_tableWithExportOptions_3').tooltip({
                title: 'Copy data',
                container: 'body'
            });
        }
    });
    var arr = [];
    for (var i = 1; i < table.columns().nodes().length; i++){
      arr.push({column_number: i,filter_type: "text",filter_reset_button_text: false});
    };
    yadcf.init(table, arr);
    $('select.input-sm').addClass("cs-select cs-skin-slide").attr('data-init-plugin', 'cs-select').css('line-height', 'normal').css('visibility', 'hidden');
    $('#judul').html(judul);
})(window.jQuery);
