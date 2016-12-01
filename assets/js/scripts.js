(function($) {

    'use strict';

    $(document).ready(function() {
        // Initializes search overlay plugin.
        // Replace onSearchSubmit() and onKeyEnter() with
        // your logic to perform a search and display results
        $(".list-view-wrapper").scrollbar();

        $('[data-pages="search"]').search({
            // Bind elements that are included inside search overlay
            searchField: '#overlay-search',
            closeButton: '.overlay-close',
            suggestions: '#overlay-suggestions',
            brand: '.brand',
             // Callback that will be run when you hit ENTER button on search box
            onSearchSubmit: function(searchString) {
                console.log("Search for: " + searchString);
            },
            // Callback that will be run whenever you enter a key into search box.
            // Perform any live search here.
            onKeyEnter: function(searchString) {
                console.log("Live search for: " + searchString);
                var searchField = $('#overlay-search');
                var searchResults = $('.search-results');

                /*
                    Do AJAX call here to get search results
                    and update DOM and use the following block
                    'searchResults.find('.result-name').each(function() {...}'
                    inside the AJAX callback to update the DOM
                */

                // Timeout is used for DEMO purpose only to simulate an AJAX call
                clearTimeout($.data(this, 'timer'));
                searchResults.fadeOut("fast"); // hide previously returned results until server returns new results
                var wait = setTimeout(function() {

                    searchResults.find('.result-name').each(function() {
                        if (searchField.val().length != 0) {
                            $(this).html(searchField.val());
                            searchResults.fadeIn("fast"); // reveal updated results
                        }
                    });
                }, 500);
                $(this).data('timer', wait);

            }
        })

    });
    document.addEventListener("turbolinks:load", function() {
      if (location.hash == "") {
        location.hash = "#beranda";
      }
      Turbolinks.visit(location.hash.substring(1)+'.html');
    })
    var fileurl;
    document.addEventListener("turbolinks:before-visit", function(event) {
      fileurl = event.data.url.substring(0, event.data.url.lastIndexOf("/")) + '/injects/' + event.data.url.split('/').pop();
      location.hash = '#'+event.data.url.split('/').pop().replace(/\..+$/, '');
      if (location.hash == "#beranda") {
        $('.container-fluid:eq(1)').load(event.data.url.substring(0, event.data.url.lastIndexOf("/")) + '/injects/beranda.html');
      }else {
        $('.container-fluid:eq(1)').load(event.data.url.substring(0, event.data.url.lastIndexOf("/")) + '/injects/data.html');
      }
      $('#mainjs').remove();
      $.getScript("pages/js/pages.min.js", function() {
        $('script:last').attr('id', 'mainjs');
      });
      $('.menu-items').find(".bg-success").removeClass('bg-success');
      // $('a[href$="'+location.hash.substring(1)+'.html"]').closest('li.active').removeClass('active');
      $('a[href$="'+location.hash.substring(1)+'.html"]').next().addClass('bg-success');
      // $('a[href$="'+location.hash.substring(1)+'.html"]').parent().addClass('active');
      event.preventDefault();
    });

    $('.panel-collapse label').on('click', function(e){
        e.stopPropagation();
    })

})(window.jQuery);
