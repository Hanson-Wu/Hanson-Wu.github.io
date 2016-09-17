/*
 *
 *   Dropzone settings
 *
 */
$(document).ready(function () {
    // Add index page
    //Dropzone settings
    Dropzone.options.myAwesomeDropzone = {
         
        autoProcessQueue: false,
        uploadMultiple: true,
        parallelUploads: 1,
        addRemoveLinks: true,
        maxFiles: 10,
		maxFilesize: 10,
        // init Dropzone
        init: function() {
            var myDropzone = this;
            
            this.on("sendingmultiple", function() {
            });

            this.on("successmultiple", function(files, response) {
                file.previewElement.addEventListener("click", function() { 
                    this.removeFile(file); 
                });
            });

            this.on("errormultiple", function(files, response) {
            });
        }         
    };

});


