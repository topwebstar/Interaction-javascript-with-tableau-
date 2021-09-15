
(function () {
    $(function () {
        var toggle;
        return toggle = new Toggle('.toggle');
    });

    this.Toggle = (function () {
        Toggle.prototype.el = null;

        Toggle.prototype.tabs = null;

        Toggle.prototype.panels = null;

        function Toggle(toggleClass) {
            this.el = $(toggleClass);
            this.tabs = this.el.find(".tab");
            this.panels = this.el.find(".panel");
            this.bind();
        }

        Toggle.prototype.show = function (index) {
            var activePanel, activeTab;
            this.tabs.removeClass('active');
            activeTab = this.tabs.get(index);
            $(activeTab).addClass('active');
            this.panels.hide();
            activePanel = this.panels.get(index);
            console.log(index)
            if(index == 0) initViz() 
            if(index == 1) initViz_Two() 
            return $(activePanel).show();
        };

        Toggle.prototype.bind = function () {
            var _this = this;
            return this.tabs.unbind('click').bind('click', function (e) {
                return _this.show($(e.currentTarget).index());
            });
        };

        return Toggle;

    })();

}).call(this);

var viz;

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/SalesDashboardbyGames_html_16314496954930/InitialDashboard",
        options = {
            hideTabs: true
        };

    viz = new tableau.Viz(containerDiv, url, options);

    
    // Create a viz object and embed it in the container div.

}
function initViz_Two() {
    var containerDivTwo = document.getElementById("vizContainertwo"),
        url2 = "https://public.tableau.com/views/SalesDashboardbyGames_html_16314496954930/SalesvsShippedproducts",
        options2 = {
            hideTabs: true
        };

    viz = new tableau.Viz(containerDivTwo, url2, options2);
    
    let tooltip = Document.getElementByClassName('.tab-tooltip.tab-widget.tab-tooltipBR.tab-allowMouseEventPassthrough')[0];
    console.log(tooltip);
    // Create a viz object and embed it in the container div.

}

$("#tab_two").click(function(){
    console.log("1123123123")
})



// Opens the Download to PDF dialog box
function exportToPDF() {
    viz.showExportPDFDialog();
}

// Opens the Download Crosstab dialog box
function exportToCSV() {
    viz.showExportCrossTabDialog();
}

// Downloads the crosstab data in an Excel file
function exportToExcel() {
    viz.exportCrossTabToExcel();
}

// Opens the Download Image dialog box
function exportImage() {
    viz.showExportImageDialog();
}

// Opens the Download PowerPoint dialog box
function exportPowerPoint() {
    viz.showExportPowerPointDialog();
}
// Opens the Download dialog box
function showDownloadDialog() {
    viz.showDownloadDialog();
}