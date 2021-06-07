(function(){
    /**
     * 
     * @property viz
     * @type {Object}
     */
    var viz;
    /**
     * 
     * @property workbook
     * @type {Object}
     */
    var workbook;
    /**
     * 
     * @property activeSheet
     * @type {Object}
     */
    var activeSheet;
    /**
     * Viz
     * @method initializeViz
     */
    var initializeViz = function () {
      var $body          = $('body');
      var placeholderDiv = $body.find('[data-js=tableau-root]')[0];
      if (kategori == "Atasan Wanita"){
        var url = 'https://public.tableau.com/views/JakartaMapVisualization/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link';
      } else if (kategori == "Bawahan Wanita"){
        var url = 'https://public.tableau.com/views/JakartaMapVisualization/Sheet12?:language=en-US&:display_count=n&:origin=viz_share_link';
      } else if (kategori == "Dress"){
        var url = 'https://public.tableau.com/views/JakartaMapVisualization/Sheet13?:language=en-US&:display_count=n&:origin=viz_share_link';
      } else if (kategori == "Jilbab"){
        var url = 'https://public.tableau.com/views/JakartaMapVisualization/Sheet14?:language=en-US&:display_count=n&:origin=viz_share_link';
      } else if (kategori == "Pakaian Muslim Anak"){
        var url = 'https://public.tableau.com/views/JakartaMapVisualization/Sheet15?:language=en-US&:display_count=n&:origin=viz_share_link';
      } else if (kategori == "Pakaian Muslim Pria"){
        var url = 'https://public.tableau.com/views/JakartaMapVisualization/Sheet16?:language=en-US&:display_count=n&:origin=viz_share_link';
      } else if (kategori == "Peralatan Ibadah"){
        var url = 'https://public.tableau.com/views/JakartaMapVisualization/Sheet17?:language=en-US&:display_count=n&:origin=viz_share_link';
      } else {
        var url = 'https://public.tableau.com/views/JakartaMapVisualization/Sheet18?:language=en-US&:display_count=n&:origin=viz_share_link';
      }
      var options = {
          'hideTabs'           : true,
          'hideToolbar'        : true,
          'onFirstInteractive' : function () {
              workbook = viz.getWorkbook();
              activeSheet = workbook.getActiveSheet();
          }
      };
      viz = new tableau.Viz(placeholderDiv, url, options);
    };
    $(initializeViz);
}());
