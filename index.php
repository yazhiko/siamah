<!DOCTYPE html>
<html>
  <head>
    <?php include_once 'components/head.html'; ?>
  </head>
  <body class="fixed-header dashboard">
    <!-- BEGIN SIDEBPANEL-->
    <?php include_once 'components/l-sidebar.html'; ?>
    <!-- END SIDEBPANEL-->
    <!-- START PAGE-CONTAINER -->
    <div class="page-container ">
      <!-- START HEADER -->
      <?php include_once 'components/header.html'; ?>
      <!-- END HEADER -->
      <!-- START PAGE CONTENT WRAPPER -->
      <div class="page-content-wrapper ">
        <!-- START PAGE CONTENT -->
        <div class="content sm-gutter">
          <!-- START CONTAINER FLUID -->
          <div class="container-fluid padding-25 sm-padding-10">
          </div>
          <!-- END CONTAINER FLUID -->
        </div>
        <!-- END PAGE CONTENT -->
        <!-- START COPYRIGHT -->
        <?php include_once 'components/footer.html'; ?>
        <!-- END COPYRIGHT -->
      </div>
      <!-- END PAGE CONTENT WRAPPER -->
    </div>
    <!-- END PAGE CONTAINER -->
    <!--START QUICKVIEW -->
    <?php include_once 'components/r-sidebar.html'; ?>
    <!--END QUICKVIEW -->
    <?php include_once 'components/foot.html'; ?>
    <!-- BEGIN PAGE LEVEL JS -->
    <!-- END PAGE LEVEL JS -->
  </body>
</html>
